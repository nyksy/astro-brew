import { Beer } from './../interfaces/Beer'

interface Props {
  beer: Beer
}

export const BeerCard: React.FC<Props> = ({ beer }) => {
  return (
    <a href={`/beers/${beer.id}`} className="text-dark">
      <div
        className="card d-flex justify-content-center bg-primary my-4 beer-card"
        style={{ width: '320px', height: '400px', cursor: 'pointer' }}
      >
        <div
          className="content position-absolute bottom-0"
          style={{ height: '320px', width: '320px' }}
        >
          <div className="card-body" style={{ height: '320px' }}>
            <div className="product-image text-center mh-100">
              <img
                className=""
                src={beer.image_url}
                height="250px"
                alt={beer.name}
                style={{
                  marginTop: '-90px',
                  bottom: '0',
                  filter: 'drop-shadow(5px 5px 5px rgba(10, 10, 10, 0.5))',
                }}
              />
            </div>
            <div className="product-info text-center mt-3">
              <h4
                className="fw-bold text-nowrap mw-100"
                style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
              >
                {beer.name}
              </h4>
              <p>{beer.tagline}</p>
            </div>
            <div
              className="stats position-absolute bottom-0"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <span className="badge rounded-pill bg-dark me-1">
                    {beer.abv} %
                  </span>
                  <span className="badge rounded-pill bg-dark">
                    {beer.first_brewed}
                  </span>
                </div>
                <span className="button">
                  <i className="bi bi-arrow-return-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
