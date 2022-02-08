import useFetch from '../hooks/useFetch'
import { API, STATUS } from '../utils/constants'
import { BeerCard } from './BeerCard'

export default function BeerMapper() {
  //fetching
  const { status, beers } = useFetch(API.PER_PAGE + 50)

  return (
    <div id="react">
      {status === STATUS.DONE && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            {beers.map((beer) => (
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
