import React from 'react'

const Pagination = ({ posts, postsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  const Previous = () => {
    if (currentPage === 1) return null;

    setCurrentPage(currentPage - 1);
  }


  return (
    <div className="my-5">
      <nav aria-label="..." className="d-flex justify-content-center">
        <ul className="pagination m-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#page"
              onClick={Previous}
              >
              Previous
            </a>
          </li>
          {
            pages.map(page => (
              <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
              aria-current={page === currentPage ? 'page' : ''}
              >
                <a
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                  href="#page"
                >
                {page}
                </a>
              </li>
            ))
          }
          <li className="page-item">
            <a className="page-link" href="#page">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination