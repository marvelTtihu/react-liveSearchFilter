import './App.css'
import { useState } from 'react'

const cities = [
  'Jakarta', 
  'Surabaya', 
  'Medan', 
  'Bandung', 
  'Makassar', 
  'Semarang', 
  'Palembang', 
  'Batam', 
  'Pekanbaru', 
  'Bandar Lampung', 
  'Padang', 
  'Denpasar', 
  'Samarinda', 
  'Balikpapan', 
  'Yogyakarta', 
  'Banjarmasin', 
  'Pontianak', 
  'Manado'
];


function App() {
  const[searchQuery, setSearchQuery] = useState("")

  const filteredList = cities.filter((city) => 
    city.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }


  return(
    <div className='primary-container'>
      <h1>Live Search Filter</h1>
      <input 
      value={searchQuery}
      onChange={handleChange}
      placeholder='Search a city...'
      />

      {searchQuery && (
        <ul className='list-of-cities'>
        {filteredList.length > 0 ? (
          filteredList.map((list, index) => (
            <li key={index}>
              {list}
            </li>
          ))
        ) : (
          <li>Search not found</li>
        )}
        </ul>
      )}

    </div>
  );

}

export default App
