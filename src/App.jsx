import { useEffect, useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchlist(newWatchList)
    console.log(newWatchList);
  }

  let handleRemovefromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
    console.log(filteredWatchList);
  }


  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner /> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} /></>} />
          <Route path='/watchlist' element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemovefromWatchList={handleRemovefromWatchList} />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
