import React from 'react'

function MovieCard({ watchlist, poster_path, name, handleAddtoWatchList, movieObj, handleRemovefromWatchList }) {


  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }

  return (
    <div className='h-[40vh] w-[150px] bg-center bg-cover relative rounded-xl hover:scale-110 hover:cursor-pointer duration-300 mb-5' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>


      {isContain(movieObj) ?
        <div onClick={() => { handleRemovefromWatchList(movieObj) }} className='absolute top-2 right-3'> <i className="fa-solid fa-bookmark h-6 w-6 bg-white/70 text-center text-2xl "></i></div> :
        <div onClick={() => { handleAddtoWatchList(movieObj) }} className='absolute top-2 right-3'>
          <i className="fa-regular fa-bookmark h-6 w-6 bg-white/70 text-center text-2xl "></i>
        </div>}




      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-white p-2 text-center rounded-xl text-base bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard;


// {genreList.map((genre)=>{
//   return <div onClick={()=>handleFilter(genre)} className={currentGenre==genre? 'cursor-pointer text-white items-center rounded-xl font-bold bg-blue-400 flex justify-center h-[3rem] w-[9rem]':}>
//    {genre}</div>

// })}

<div className='cursor-pointer text-white items-center rounded-xl font-bold bg-gray-400/80 flex justify-center h-[3rem] w-[9rem]'>Comedy</div>