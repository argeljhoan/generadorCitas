
import './App.css'
import db from "./db/quotes.json"
import QuoteBox from "./components/QuoteBox"
import { useState } from 'react'

const getRandom = (arrayElements)=>{
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues);

  return arrayElements[randomIndex]
  }

  let colors = ["#0048BA","#B0BF1A","#7CB9E8","#3CD070","#B284BE","#5D8AA8",
  "#00308F",  "#72A0C1","#AF002A","#FFF700","#FFAE42","#84DE02"]
 
function App() {
  
  const [quote,setQuote] = useState(getRandom(db));
  const [color,setColor] = useState(getRandom(colors));

 

const newQuote = () =>{
setQuote(getRandom(db))
setColor(getRandom(colors))
}




 

console.log(getRandom(db));
  return (
    <div className="App" style={{backgroundColor:color}}>
  <QuoteBox quote={quote} color={color} newQuote={newQuote} />

    </div>
  )
}

export default App
