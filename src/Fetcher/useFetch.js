import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
     const [data, setData] = useState([])
     const [error, setError] = useState(null)
     const [isLoading, setIsLoading] = useState(false)
     const fetcher = async () => {
       try {
         setIsLoading(true)
         const fetchedData = await fetch(url)
         const response = await fetchedData.json()
         console.log(response)
         setData(response)
       } catch (error) {
         console.log(error)
         setError(error)
       } finally {
         setIsLoading(false)
       }
     }
     useEffect(() => {
       fetcher()
     }, [url])
  return {data,isLoading,error}
}

export default useFetch