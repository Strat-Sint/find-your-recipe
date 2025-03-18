import React from 'react'

function Pagination({page, setPage, limit, total}) {


  return (
    <div className='pagination'>
      {page!== 1 ? (
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        ) : null}
        <p>Page: {page} <span className='small'>of {Math.round(total / limit + 1)}</span></p>
        {page * limit < total ? (
          <button onClick={() => setPage((next) => next + 1)}>Next</button>
        ) : null}
    </div>
  )
}

export default Pagination
