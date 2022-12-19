import React from 'react'
import usePeticion from '../hooks/usePeticion'
import '../App.css'

const Location = ({location}) => {

    return(
        <div className='container-location'>
            <h1 className='title-ubication'>{`${location?.name}`}</h1>
            <article className='container-info'>
                <h2 className='title-type'><b>Type: </b>{`${location?.type}`}</h2>
                <h2 className='title-dimension'><b>Dimension: </b>{`${location?.dimension}`}</h2>
                <h2 className='title-population'><b>Population: </b>{`${location?.residents.length}`}</h2>
            </article>
        </div>
    )
}

export default Location