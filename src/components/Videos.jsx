import videos from '../data.json'

function Videos({video}) {
    return (
        <div className="videos">
           {videos.map(video => {
             return <div className='videos-data'>
                <a href={video.url} target="_blank">
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
             </div>             
           })}
        </div>
    )
}

export default Videos