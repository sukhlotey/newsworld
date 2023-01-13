import React, { useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

const News= (props)=> {
const [articles, setArticles] = useState([]) 
const [loading, setLoading] = useState(true) 
const [page, setPage] = useState(1) 
const [totalResults, setTotalResults] = useState(0) 

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

 const updateNews= async ()=> {
  props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81e708a43df24760ae0927d1921ec37e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
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

  const breakpoints={
    default: 4,
    1200: 4,
    1050:3,
    974:2,
    768:2,
    576:1,
    340:1
  }

    return (

     <>

        <h1 className="text-center text-light" style={{marginTop: "80px"}}>News Daily - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

         <Masonry
         breakpointCols={breakpoints}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column">
            {articles.map((element) => {
              return <div key={element.url}>
                <Newsitem title={element.title? element.title: ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
        </Masonry>
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