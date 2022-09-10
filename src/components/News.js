import React, { useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


const News= (props)=> {
const [articles, setArticles] = useState([]) 
const [loading, setLoading] = useState(true) 
const [page, setPage] = useState(1) 
const [totalResults, setTotalResults] = useState(0) 

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

 const updateNews= async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81e708a43df24760ae0927d1921ec37e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults)
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - News Man`;
    updateNews();
// eslint-disable-next-line 
  }, [])

  const fetchMoreData = async () => {
    
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81e708a43df24760ae0927d1921ec37e&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
 
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };


    return (

     <>

        <h1 className="text-center text-light" style={{marginTop: "80px"}}>News Man - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {articles.map((element) => {
              return <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3" key={element.url}>
                <Newsitem title={element.title? element.title: ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
 
      </>
    )
  
}



News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News