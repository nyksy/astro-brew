import useFetch from '../hooks/useFetch'
import { API, STATUS } from '../utils/constants'

export default function ReactCounter() {
  //fetching
  const { status, beers } = useFetch(API.RANDOM)

  return (
    <div id="react" className="counter">
      {status === STATUS.DONE && (
        <div>
          <h3>{beers[0].name}</h3>
          <img src={beers[0]?.image_url} height={400} alt={beers[0].name} />
        </div>
      )}
    </div>
  )
}
