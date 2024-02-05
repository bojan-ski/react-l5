function SearchBar({ videos, handleSearchVideo }) {
  return (
    <form>
      <label htmlFor="search-bar">Search by title: </label>
      <input type="text" id="search-bar" name="search-bar" onInput={(e) => SearchVideoByTitle(e.currentTarget.value, videos, handleSearchVideo)} />
    </form>
  )
}

const SearchVideoByTitle = (title, videos, handleSearchVideo) => {
  let videoList = []

  videos.forEach(video => {
    const videoTitle = video.title.toLowerCase()
    const inputtedTitle = title.toLowerCase()

    if (videoTitle.includes(inputtedTitle)) {
      videoList.push(video);
    }
  })

  handleSearchVideo(videoList);
}

export default SearchBar