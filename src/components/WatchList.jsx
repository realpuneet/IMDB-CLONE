import React, { useEffect, useState } from 'react'
import genreId from '../utility/genre'

function WatchList({ watchlist, setWatchlist, handleRemovefromWatchList }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currentGenre, setCurrentGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let handleFilter = (genre) => {
    setCurrentGenre(genre)
  }


  let sortIncreasing = () => {
    setWatchlist([...watchlist].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average));
  };

  let sortDecreasing = () => {
    setWatchlist([...watchlist].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average));
  };


  useEffect(() => {
    let temp = watchlist.map((movieObj)=>{
      return genreId[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchlist]);




  return (
    <>

      <div className='flex justify-center flex-wrap gap-4 m-4'>

      {genreList.map((genre)=>{
           return <div onClick={()=>handleFilter(genre)} className={currentGenre==genre? 'cursor-pointer text-white items-center rounded-xl font-bold bg-blue-400 flex justify-center h-[3rem] w-[9rem]':'cursor-pointer text-white items-center rounded-xl font-bold bg-gray-400/80 flex justify-center h-[3rem] w-[9rem]'}>
            {genre}</div>
        
      })}


      </div>



      <div className=' flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies..' className='white h-[3rem] w-[18rem] px-3 bg-gray-200 outline-none' name="" id="" />
      </div>

      <div className="tableDiv rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className='w-full text-gray-500 text-center'>

          <thead className='border-b-2 '>
            <tr>
              <th>Name</th>

              <div className='flex justify-center'>
                <div className='me-2' onClick={sortIncreasing}><i class="fa-solid fa-arrow-up cursor-pointer"></i></div>
                <th>Rating</th>
                <div className='ms-2' onClick={sortDecreasing}><i class="fa-solid fa-arrow-down cursor-pointer"></i></div>
              </div>

              <th>Popularity</th>

              <th>Genres</th>

            </tr>
          </thead>

          <tbody className=''>

            {watchlist.filter((movieObj)=>{
              if(currentGenre=='All Genres'){
                return true
              }else{
                return genreId[movieObj.genre_ids[0]]==currentGenre;
              }
            }).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj) => {
              return <tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt="" />
                  <div className="movieTitle mx-4">{movieObj.original_title}</div>
                </td>

                <td className=""> {movieObj.vote_average.toFixed(1) + "/10"} </td>
                <td>{movieObj.popularity.toFixed(2)}</td>
                <td>{genreId[movieObj.genre_ids[0]]}</td>

                <td onClick={()=>handleRemovefromWatchList(movieObj)} className='text-red-500 font-bold'>Delete</td>
              </tr>
            })}

          </tbody>

        </table>
      </div>










    </>
  )
}

export default WatchList
