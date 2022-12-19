import React from 'react'
import usePeticion from '../hooks/usePeticion'
import '../App.css'

const Resident = ({url, change}) => {
    const resident = usePeticion(url, change)
    
    return (
        <div className='container-resi'>
            
            <article className='image'><img src={`${resident?.image}`}/></article>
            <article className='resi-info'>
                <article className='name'>
                    <h3 className='title-name'>{`${resident?.name}`}</h3>
                </article>
                <article className='race'>
                    <h4 className='title-info'>RACE</h4>
                    <h3 className='result-info'>{`${resident?.species}`}</h3>
                </article>
                <article className='origin'>
                    <h4 className='title-info'>ORIGIN</h4>
                    <h3 className='result-info'>{`${resident?.origin.name}`}</h3>
                </article>
                <article className='episodes'>
                    <h4 className='title-info'>APPEARED EPISODES</h4>
                    <h3 className='result-info'>{`${resident?.episode.length}`}</h3>
                </article>
                <article className='status'>
                    <div className={`item-status ${resident?.status}`}></div>
                    <h4 className='title-status'>{`${resident?.status}`}</h4>
                </article>
    </article> 
        </div>
    )
}

export default Resident