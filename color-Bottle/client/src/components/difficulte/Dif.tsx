import "./dif.scss"

const Dif = () => {

    const handleDifficulty = (e:any) =>{
    console.log(e.target)
    

    }


  return (
    <div className="main">
  <div className="background">
    <h2 className="background__h2">choose difficulty</h2>
      <div className="choose">
        <button  onClick={handleDifficulty} className="choose__btn" id="easy">easy</button>
        <button onClick={handleDifficulty} className="choose__btn"  id="normal">normal</button>
        <button onClick={handleDifficulty} className="choose__btn"  id="hard">hard</button>
      </div>
  </div>
    </div>
  )
}

export default Dif