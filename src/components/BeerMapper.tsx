import useFetch from '../hooks/useFetch'
import { API, STATUS } from '../utils/constants'
import { BeerCard } from './BeerCard'

interface Props {
  page: number
  limit: number
}

const BeerMapper: React.FC<Props> = ({ page, limit }) => {
  //fetching
  const { status, beers } = useFetch(API.PAGE + page + API.PER_PAGE + limit)

  return (
    <div id="react">
      {status === STATUS.DONE && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            {beers.length > 0 &&
              beers.map((beer) => (
                <div
                  key={beer.name}
                  className="col d-flex justify-content-center"
                >
                  <BeerCard beer={beer} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BeerMapper
