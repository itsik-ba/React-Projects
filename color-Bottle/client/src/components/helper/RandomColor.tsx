
const RandomColor = () => {
  
 const colorArray = []
 
for(let i = 0; i < 7; i++){
    colorArray[i] = `#${Math.floor(Math.random()*16777215).toString(16)}`
   }

 const colors = colorArray
   

  return (
       <div>
         
       </div>
  )
}

export default RandomColor