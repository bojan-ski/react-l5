import videos from '../data.json'

function Videos() {
    return (
        <section className="videos">
           {videos.map((video, idx) => {
             return <div className='videos-data' key={idx}>
                <a href={video.url} target="_blank">
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
             </div>             
           })}
        </section>
    )
}

export default Videos