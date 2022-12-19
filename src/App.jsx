import './App.css'
import {useState} from 'react'
import Location from './Components/Location'
import Resident from './Components/Resident'
import usePeticion from './hooks/usePeticion'

function App() {
  const [changeText, setChangeText] = useState()
   let URL = 'https://rickandmortyapi.com/api/location/1'
   let location = usePeticion(URL)
  if(changeText){
    URL = `https://rickandmortyapi.com/api/location/${changeText}`
    location = usePeticion(URL, changeText)
  } else {
    URL = 'https://rickandmortyapi.com/api/location/1'
    location = usePeticion(URL)
  }
    
  
  const handleChange = e => {
    setChangeText(e.target.value)
  }
  console.log(location?.residents)
  return (
    <div className="App">
      <section className="container-prin-log"><article className="container-log"><img src='..//images/Rectangle 1.png'/></article></section>
      <section className="container-main">
        <form className='searchBox'>
          <input onChange={handleChange} type="text" placeholder="Type here the id's ubication" value={changeText} />
          <button className='btn-search'>Search</button>
        </form>
        <article className='location'><Location location={location}/></article>
      </section>
      <main className='residents'>
          <h2 className='title-resi'>Residents</h2>
          <ul className='container-residents'>
          {
              location?.residents.map((resi) => (
                <li className='item-li' key={resi}><Resident url={resi} change={changeText}/></li>
              ))
          }
          </ul>
        </main>
    </div>
  )
}

export default App
