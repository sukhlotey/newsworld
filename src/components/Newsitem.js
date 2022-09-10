import React from 'react'

const Newsitem = (props)=> {
   let {title,description, imageUrl, newsUrl,author,date}=props;
    return (

      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://www.asso-jockeys.com/src/news/empty.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body border border-dark" style={{backgroundColor:"#1f1f14"}}>
              <h5 className="card-title text-light">{title}</h5>
              <p className="card-text text-light">{description}...</p>
              <p className="card-text"><small className="text-light">By <b>{!author?"Unknown":author}</b> on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-light">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
      </div>
    )
         
}



export default Newsitem