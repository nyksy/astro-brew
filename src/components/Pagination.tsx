interface Props {
  page: number
  upperlimit: number
}

const Pagination: React.FC<Props> = ({ page, upperlimit }) => {
  return (
    <div id="react">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <ul className="pagination bg-dark">
            {page > 1 && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page - 1}`}>
                  Previous
                </a>
              </li>
            )}
            {page === upperlimit && page > 2 && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page - 2}`}>
                  {page - 2}
                </a>
              </li>
            )}
            {page > 1 && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page - 1}`}>
                  {page - 1}
                </a>
              </li>
            )}
            <li className="page-item">
              <a
                className="page-link bg-primary text-dark"
                href={`/beers/${page}`}
              >
                {page}
              </a>
            </li>
            {page < upperlimit && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page + 1}`}>
                  {page + 1}
                </a>
              </li>
            )}
            {page < upperlimit && page === 1 && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page + 2}`}>
                  {page + 2}
                </a>
              </li>
            )}
            {page < upperlimit && (
              <li className="page-item">
                <a className="page-link bg-dark" href={`/beers/${page + 1}`}>
                  Next
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pagination
