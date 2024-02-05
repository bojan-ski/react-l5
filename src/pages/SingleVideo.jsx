import { useParams } from "react-router-dom"
import videos from '../data.json'

function SingleVideo() {
  const { id } = useParams()
  let videoExist = false;

  videos.forEach(video => {
    if(video.id === +id){
      videoExist = true
      return
    }
  })     

  return (

    <main>
      <h1>SingleVideo</h1>

      {videoExist ? <p>Video Exists</p> : <p>Video Does Not Exists</p>}
    </main>
  )
}

export default SingleVideo