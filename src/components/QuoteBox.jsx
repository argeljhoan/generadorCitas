import React from 'react'
import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote,color,newQuote}) => {
  return (
    <div className=' Container' style={{color:color}}>
      <div className='Datingcontainer'>
        <div><i className='bx bxs-quote-left quote'></i></div>
        <div> <p>{quote.quote} </p> </div>
      </div>  
      <div className='author'>
      <h3>{quote.author} </h3>
      </div>
      <div>
      <QuoteButton newQuote={newQuote} color={color} />
      </div>
     
    </div>
  )
}

export default QuoteBox