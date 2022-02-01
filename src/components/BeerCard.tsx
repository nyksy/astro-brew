import { Beer } from './../interfaces/Beer'

interface Props {
  beer: Beer
}

export const BeerCard: React.FC<Props> = ({ beer }) => {
  return (
    <div
      className="card d-flex justify-content-center bg-primary"
      style={{ width: '20rem', height: '20rem' }}
    >
      <div className="card-body mw-100">
        <div className="product-image text-center">
          <img
            className=""
            src={beer.image_url}
            height="250px"
            alt={beer.name}
            style={{
              marginTop: '-7rem',
              filter: 'drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4))',
            }}
          />
        </div>
        <div className="product-info text-center mt-3">
          <h3 className="fw-bold">{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p className="text-start">
            <span className="badge rounded-pill bg-dark">{beer.abv} %</span>
          </p>
        </div>
      </div>
    </div>
  )
}
