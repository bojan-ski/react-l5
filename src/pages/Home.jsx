import { useState } from 'react'
import data from '../data.json'
import SearchBar from '../components/SearchBar'
import Videos from '../components/Videos'

function Home() {
  const [videos, setVideos] = useState(data)
  const [filteredVideos, setFilteredVideos] = useState(data)

  const handleSearchVideo = (res) => {
    setFilteredVideos(res)
  }

  return (
    <main>
        <div className="container">
          <h1>Home Page</h1>  

          <SearchBar videos={videos} handleSearchVideo={handleSearchVideo}/>
          <Videos filteredVideos={filteredVideos}/>
        </div>
    </main>
  )
}

export default Home