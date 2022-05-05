import { useEffect, useState } from 'react'
import axiosConfig from '../api/axiosConfig'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       const fetchData = async() => {
           //initial loading is set to true
            setLoading(true)

            try {
                //fetch data and store in res
                const res = await axiosConfig.get(url)
                //fetched data is converted to a json object
                const json = res.data
                //json object is stored in data
                setData(json)
                //loader now set to false
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
       }
       
       fetchData()
    }, [url])

    return { loading, error, data }
}

export default useFetch