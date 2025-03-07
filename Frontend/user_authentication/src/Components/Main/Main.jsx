import React, { useState } from "react";
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

function Main() {

    const {singleUser}=useContextApi()
  const galleryItems = [
    {
      id: 1,
      category: "Workshop",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
    {
      id: 2,
      category: "Engine Chamber",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
    {
      id: 3,
      category: "Team Work",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
    {
      id: 4,
      category: "Bodyshop",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
    {
      id: 5,
      category: "Office",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
    {
      id: 6,
      category: "Waiting Room",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    },
  ];

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
              <h1 className="fw-blod">Welcome {singleUser?.username}</h1>
            </div>
            <div>
                <h3>status:{singleUser?.role}</h3>
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
                "Workshop",
                "Engine Chamber",
                "Team Work",
                "Bodyshop",
                "Office",
                "Waiting Room",
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
              <h5 className="fw-bold text-center">Active Users</h5>
              <ListGroup>
                {["John Doe", "Jane Smith", "Michael Brown", "Emily Davis"].map(
                  (user, idx) => (
                    <ListGroup.Item
                      key={idx}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {user} <Badge bg="success">Online</Badge>
                    </ListGroup.Item>
                  )
                )}
              </ListGroup>
            </div>
          </Col>

          {/* Gallery Grid */}
          <Col lg={9}>
            <Row className="g-4">
              {filteredItems.map((item) => (
                <Col key={item.id} md={4}>
                  <Card className="gallery-card border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="img-fluid rounded"
                    />
                    <div className="gallery-overlay">
                      <Button href={item.img} variant="light">
                        View Image
                      </Button>
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
