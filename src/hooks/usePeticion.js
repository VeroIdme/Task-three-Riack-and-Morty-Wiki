import {useEffect, useState} from 'react'
import axios from 'axios'

function usePeticion (url, condition) {
    const [value, setValue] = useState()
    useEffect(() => {
        const myUrl = url
        axios.get(myUrl)
            .then(res => setValue(res.data))
            .catch(err => console.log(err))
    },[condition])
 return value
}

export default usePeticion