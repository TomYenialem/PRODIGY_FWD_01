import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { useContextApi } from "../../Contexts/UseContext";
import fetchAllVistors from "../../Services/Allusers.service";
import formatTime from "../../Util/formatTime";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Main() {
  const { singleData } = useContextApi();
  const [userData, setUserData] = useState([]);
  const { formatTimes } = formatTime();

  const galleryItems = [
    {
      id: 1,
      category: "Dictionary",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4Qpmr6V_NdvXE0TCUwtCdapB69Y2J2M1Cw&s",
      link: "https://utilityblogs1.netlify.app/dictinary",
    },
    {
      id: 2,
      category: "Weather",
      img: "https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ",
      link: "https://utilityblogs1.netlify.app/weather",
    },
    {
      id: 3,
      category: "Crypto",
      img: "https://xau.ca/wp-content/uploads/2024/10/2-3.png",
      link: "https://utilityblogs1.netlify.app/crypto%20price.html",
    },
    {
      id: 4,
      category: "Have Coffee",
      img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-10-french-press-coffee%2Ffrench-press-coffee-052",
      link: "https://coffeehouse11.netlify.app/",
    },
    {
      id: 5,
      category: "Dad Jokes",
      img: "https://punnyhub.com/wp-content/uploads/2024/08/Emoji-Jokes-and-Puns_1-768x768.webp",
      link: "https://utilityblogs1.netlify.app/dadjokes",
    },
    {
      id: 6,
      category: "Your City",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJyaYxKZOLgjF14WZEcRGjlTpFlAFK94d2A&s",
      link: "https://utilityblogs1.netlify.app/city",
    },
    {
      id: 7,
      category: "Play Old Games",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTIvwceDW_xk9v9bQFncdmH4CHBvDGi9FVg&s",
      link: "https://nokiasnakegames.netlify.app/",
    },
  ];

  const getAllUsers = () => {
    try {
      fetchAllVistors().then((response) => {
        setUserData(response.data.data.slice(0, 6));
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const [activeCategory, setActiveCategory] = useState("All Works");

  // Filter gallery based on active category
  const filteredItems =
    activeCategory === "All Works"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="gallery-section py-5">
      <div className="text-start title mb-4 ">
        <div className="container">
          <div className="flex">
            <div>
              <h1 className="fw-blod">Welcome {singleData?.name}</h1>
            </div>
            <div>
              <h3>status:{singleData?.role}</h3>
            </div>
          </div>

          <h2 className="fw-bold text-white">My Work & Projects</h2>
          <p className="text-warning">
            I believe in mastering the fundamentals before jumping into advanced
            frameworks. Here are some of my pure <span>JAVASCRIPT </span>,
            <span>HTML,</span> and <span> CSS </span>projects that reflect my
            problem-solving skills and interactive web development expertise.
          </p>
        </div>
      </div>
      <Container>
        {/* Section Title */}
        <div className="text-center mb-4 mt-5">
          <h2 className="fw-bold text-white">My Gallery</h2>
        </div>

        <Row>
          {/* Sidebar Filters & Active Users */}
          <Col lg={3}>
            <ListGroup>
              {[
                "All Works",
                " Dictionary",
                "Weather",
                "Crypto",
                "Have Coffee",
                "Dad Jokes",
                "Your City",
                "Play Old Games",
              ].map((category, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => setActiveCategory(category)}
                  active={activeCategory === category}
                  className="d-flex justify-content-between align-items-center"
                >
                  {category}{" "}
                  <Badge bg="warning" text="dark">
                    1
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Active Users Section */}
            <div className="mt-4 p-3 bg-light rounded">
              <h5 className="fw-bold text-center">Recent Visitors</h5>
              <ListGroup>
                {userData.map((user, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {user?.username}
                    <Badge bg="warning">{formatTimes(user?.createdAt)}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* Gallery Grid */}
          <Col lg={9}>
            <Row className="g-4">
              {filteredItems.map((item) => (
                <Col key={item.id} md={4}>
                  <Card className="gallery-card border-0 shadow-sm">
                    {/* Replace Card.Img with LazyLoadImage */}
                    <LazyLoadImage
                      src={item.img}
                      alt={item.category}
                      effect="blur" // Adds a blur effect while loading
                      className="img-fluid rounded"
                      width="100%"
                      height="auto"
                    />
                    <div className="gallery-overlay">
                      <Button href={item.img} className="bg-warning">
                        <a href={`${item.link}`}>
                        <FaExternalLinkAlt color="white" size={25} />
                        </a>
                        <br />
                      </Button>
                      <div>
                        <small className="text-white">{item.category}</small>
                      </div>
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className="fw-bold">
                        {item.category}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Main;
