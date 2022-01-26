import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card mx-auto text-center" >
                <img src={!imageUrl ? 'https://www.freeiconspng.com/uploads/no-image-icon-4.png' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By <strong>{!author ? 'Unknown' : author}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>
                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
