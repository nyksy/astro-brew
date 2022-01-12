import { useState, useEffect } from 'react'
import { Beer } from '../interfaces/Beer'
import { STATUS } from '../utils/constants'

const useFetch = (url: string) => {
  const [status, setStatus] = useState(STATUS.IDLE)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    fetchData()
  }, [url])

  const fetchData = async () => {
    setStatus(STATUS.FETCHING)
    const response = await fetch(url)
    const datares = await response.json()
    setData(datares)
    setStatus(STATUS.DONE)
  }

  return { status, beers: data as Beer[] }
}

export default useFetch
