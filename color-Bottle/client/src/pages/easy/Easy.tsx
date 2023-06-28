// import { useState } from "react"
import "./style/easy.scss"
import RandomColor from "./RandomColor"

const Easy = () => {
  
  // const [rColor, setRColor] = useState("")

  const colors = ["#75bdd1", "#f6290c", "#ff0084", "#91e842", "#ff920a", "#c146a1", "#fccd4d"]
  // const empty = ["#000000"]

  const opOne = Math.floor(Math.random() * colors.length)
  const opTwo = Math.floor(Math.random() * colors.length)
  const opThree = Math.floor(Math.random() * colors.length)
  const opFour = Math.floor(Math.random() * colors.length)
  const opFiv = Math.floor(Math.random() * colors.length)
  const opSix = Math.floor(Math.random() * colors.length)
  const opSeven = Math.floor(Math.random() * colors.length)
  // const eOpt = Math.floor(Math.random() * empty.length)
  
  
  
  return (
   
    <div className="main">
      <RandomColor /> 
        <div className="container">
            <div className="top">
                <div className="top__one">
                   <div className="top__one__pOne" style={{
                    backgroundColor:colors[opOne]
                   }}></div>
                   <div className="top__one__pTwo" style={{
                    backgroundColor:colors[opTwo]
                   }}></div>
                  <div className="top__one__pThree" style={{
                    backgroundColor:colors[opFour]
                   }}></div>
                </div>

                <div className="top__two">
                <div className="top__two__pOne" style={{
                    backgroundColor:colors[opFour]
                   }}></div>
                   <div className="top__two__pTwo" style={{
                    backgroundColor:colors[opThree]
                   }}></div>
                  <div className="top__two__pThree" style={{
                    backgroundColor:colors[opSix]
                   }}></div>
                </div>

                <div className="top__three">
                <div className="top__three__pOne" style={{
                    backgroundColor:colors[opFiv]
                   }}></div>
                   <div className="top__three__pTwo" style={{
                    backgroundColor:colors[opOne]
                   }}></div>
                  <div className="top__three__pThree" style={{
                    backgroundColor:colors[opSix]
                   }}></div>
                </div>

                <div className="top__four">
                <div className="top__four__pOne" style={{
                    backgroundColor:colors[opTwo]
                   }}></div>
                   <div className="top__four__pTwo" style={{
                    backgroundColor:colors[opSeven]
                   }}></div>
                  <div className="top__four__pThree" style={{
                    backgroundColor:colors[opThree]
                   }}></div>
                  </div>
            </div>

            <div className="bottom">
                <div className="bottom__one">

                <div className="bottom__one__pOne" style={{
                    backgroundColor:colors[opOne]
                   }}></div>
                   <div className="bottom__one__pTwo" style={{
                    backgroundColor:colors[opFour]
                   }}></div>
                  <div className="bottom__one__pThree" style={{
                    backgroundColor:colors[opSix]
                   }}></div>
                </div>

                <div className="bottom__two">
                <div className="bottom__two__pOne" style={{
                    backgroundColor:colors[opSeven]
                   }}></div>
                   <div className="bottom__two__pTwo" style={{
                    backgroundColor:colors[opTwo]
                   }}></div>
                  <div className="bottom__two__pThree" style={{
                    backgroundColor:colors[opFiv]
                   }}></div>
                </div>
                <div className="bottom__three">
                <div className="bottom__three__pOne" style={{
                    backgroundColor:colors[opThree]
                   }}></div>
                   <div className="bottom__three__pTwo" style={{
                    backgroundColor:colors[opFiv]
                   }}></div>
                  <div className="bottom__three__pThree" style={{
                    backgroundColor:colors[opSeven]
                   }}></div>
                </div>
                <div className="bottom__four">
                <div className="bottom__four__pOne" ></div>
                   <div className="bottom__four__pTwo"></div>
                  <div className="bottom__four__pThree" style={{
                    backgroundColor:colors[opSeven]
                   }}></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Easy