import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0316e81bd5d44dfb1dae9b55f8c7af4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, totalResults: 0 })
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
  this.setState({page: this.state.page + 1})
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0316e81bd5d44dfb1dae9b55f8c7af4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false, totalResults: 0 })
  };
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews();
  // }
  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews();
  // }


  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '90px 0px 45px 0px' }}>NewsDolhphin - TOP HEADLINES</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresults}
          loader={<Spinner/>}
        >
          
<div className="container">


          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                {/* author={element.author} date = {element.publishedAt} */}
              </div>
            })}

          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
        </div> */}
      </>
    )
  }
}
