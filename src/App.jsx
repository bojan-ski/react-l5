import Videos from "./components/Videos"

const videos = [
  {
    id: 1,
    title: 'Kurs HTML, CSS, Bootstrap',
    url: 'https://www.youtube.com/watch?v=AAGgaOCYx_Q&ab_channel=ItMentorstva',
    cover: 'https://i.ytimg.com/vi/AAGgaOCYx_Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmWIayp0p4uYN9EqLVTnshiWKRew'
  },
  {
    id: 2,
    title: 'PHP & MYSQL kompletan kurs programiranja',
    url: 'https://www.youtube.com/watch?v=U7jEG-N8VFw&ab_channel=ItMentorstva',
    cover: 'https://i.ytimg.com/vi/U7jEG-N8VFw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC51n9r8jeOT2UcatTOCk8ocFkguQ'
  },
]

function App() {
  return (
    <>
      {videos.map(video => {
        return <Videos video={video}/>
      })}
    </>
  )
}

export default App
