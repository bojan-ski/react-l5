function Videos({video}) {
    return (
        <div className="video-data">
            <a href={video.url} target="_blank">
                <img src={video.cover} alt={video.title} />
                <h3>{video.title}</h3>
            </a>
        </div>
    )
}

export default Videos