import { useState, useEffect } from "react"
import { pedirDatos } from "../helpers/pedirDatos"



export const useFetch = () => {

    const [res, setRes] = useState ([])

    useEffect (() => {
        pedirDatos()
            .then((data) => setRes(data))
    }, [])


    return {res}
}