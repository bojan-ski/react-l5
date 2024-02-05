import SearchBar from '../components/SearchBar'
import Videos from '../components/Videos'

function Home() {
  return (
    <main>

        <div className="container">
          <h1>Home Page</h1>  

          <SearchBar/>
          <Videos/>
        </div>
    </main>
  )
}

export default Home