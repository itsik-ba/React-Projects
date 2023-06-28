import "./dif.scss"
import { Link } from "react-router-dom"
const Dif = () => {

    


  return (
    <div className="main">
  <div className="background">
    <h2 className="background__h2">choose difficulty</h2>
      <div className="choose">

       <Link to="easy"><button  className="choose__btn" id="easy">easy</button> </Link> 

       <Link to="normal"> <button className="choose__btn"  id="normal">normal</button></Link> 

       <Link to="hard"><button className="choose__btn"  id="hard">hard </button> </Link> 
       
      </div>
  </div>
    </div>
  )
}

export default Dif