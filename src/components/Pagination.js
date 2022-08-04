import React from 'react'

const Pagination = () => {
  return (
    <div className="my-5">
      <nav aria-label="..." className="d-flex justify-content-center">
        <ul class="pagination m-0">
          <li class="page-item disabled">
            <a class="page-link " href="#page">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#page">1</a></li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">2</span>
          </li>
          <li class="page-item"><a class="page-link" href="#page">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#page">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination