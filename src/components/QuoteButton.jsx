import React from 'react'

const QuoteButton = ({newQuote,color}) => {
  console.log(color);
  return (
    <div className='containerButton' >
        <button onClick={newQuote} className="button" style={{backgroundColor:color, borderColor:color}}>
        <i className='bx bxs-chevron-right'></i>
        </button>
    </div>
  )
}

export default QuoteButton