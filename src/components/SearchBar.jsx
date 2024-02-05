import videos from '../data.json'

function SearchBar() {
  return (
    <form>
        <label htmlFor="search-bar">Search by title: </label>
        <input type="text" id="search-bar" name="search-bar" onInput={(e) => SearchVideoByTitle(e.currentTarget.value)}/>
    </form>
  )
}

// kurs html, css, bootstrap

const SearchVideoByTitle = (title) => {
  // console.log(title);
  videos.forEach(video => {
    const videoTitle = video.title.toLowerCase()
    const inputtedTitle = title.toLowerCase()

    // if(videoTitle === inputtedTitle){
    //   console.log('works');
    // }

    if(videoTitle.includes(inputtedTitle)){
      console.log('works');
    }else{
      console.log('nope');
    }
  })
}

export default SearchBar