import React, { useState, useEffect } from 'react'
import News from './News';
import Load from './Load';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import img from '../image/breaking-news.jpg'



export default function Container(props) {

    // using state to set the article value
    const [Article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalnews] = useState(0)

    let url = '';
    const data = async () => {

        props.setProgress(10)
        // to fetch the api data
        let data = await fetch(url);
        props.setProgress(30)
        let parsedata = await data.json();
        props.setProgress(70)
        setArticle(parsedata.articles)
        setTotalnews(parsedata.totalResults)
        props.setProgress(100)

    }


    useEffect( () => {
        let domains = 'techcrunch.com,thenextweb.com,fortune.com,cnn.com'
        props.category === 'global' ? url = `https://newsapi.org/v2/everything?domains=${domains}&apiKey=${props.apikey}` : url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=1`
        data();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {

        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2c552357d9d24ce8aa2a183fda7dea89&page=${page}&pageSize=5`;
        // to fetch the api data
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticle(Article.concat(parsedata.articles))
    };

    const capitalization = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1)
    }

    return (
        <div className='mx-4'>
            <div id='Title-Text' className='my-2'>
                <h1><strong>News Topic : {capitalization(props.category)}</strong></h1>
            </div>

            <InfiniteScroll
                dataLength={Article.length}
                next={fetchMoreData}
                hasMore={Article.length - 1 !== totalNews}
                loader={<Load />}
            >
                <div className='container'>
                    {/* class row to create row */}
                    <div className="row my-4">
                        {/* array.map() uses a function to ittrate through-out the array   */}
                        {Article.map((element) => {
                            return (
                                //  class col-md-4 to create coloum of 4 grids
                                <div className='col-md-3 my-3' key={Math.random() * 100}>
                                    <News title={element.title ? element.title.slice(0, 48) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage ? element.urlToImage : img} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                                    {/* new Date() returns a date object with the current date and time.*/}
                                    <p className="card-text"><small className="text-body-secondary">Published : {new Date(element.publishedAt).toUTCString()}</small></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

// Container.defaultProps = {

//     country: 'us',
//     pageSize: 5,
// }

Container.propTypes = {

    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
