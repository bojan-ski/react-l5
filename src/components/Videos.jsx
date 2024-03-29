function Videos({filteredVideos}) {
    console.log(filteredVideos);

    return (
        <section className="videos">
           {filteredVideos.map((video, idx) => {
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