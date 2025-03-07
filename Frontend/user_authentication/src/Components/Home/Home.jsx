import { useContextApi } from "../../Contexts/UseContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"


function Home() {

    
  
  return (
    <div className="home">
<Header/>
<Main/>
<Footer/>
    </div>
  )
}

export default Home