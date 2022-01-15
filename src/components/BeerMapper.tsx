import useFetch from '../hooks/useFetch'
import { API, STATUS } from '../utils/constants'
import { BeerCard } from './BeerCard'

export default function BeerMapper() {
  //fetching
  const { status, beers } = useFetch(API.PER_PAGE + 3)

  return (
    <div id="react" className="counter">
      {status === STATUS.DONE && (
        <div className="container">
          <div className="row justify-content-center">
            {beers.map((beer) => (
              <div className="col d-flex justify-content-center">
                <BeerCard beer={beer} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
