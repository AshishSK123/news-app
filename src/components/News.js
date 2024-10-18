import React from 'react'


export default function News (props) {


        // destructure title and Desc , etc.. to this.props value
        let { title, desc, imgUrl, newsUrl, source } = props;
        return (

            <div id='card-pos' className="card">
                <span id='badge' className="badge rounded-pill bg-danger">{source}</span>
                <img src={imgUrl} className="card-img-top" style={{ height: '11rem' }} alt=".." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{desc}...</p>
                    {/* class btn-sm used to mmake button small */}
                    {/* target='_blank' is used to launch the url content on new page */}
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark position-absolute bottom-0  my-2">Read More</a>
                </div>
            </div>

        )
    
}
