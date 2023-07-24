import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }
  async componentDidMount() {
   this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }


  render() {
    return (
      <div className='container my-8'>
        <h1 className="text-left" style={{ margin: '35px 0px' }}>NewsDolhphin - TOP HEADLINES</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.setState.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              {/* author={element.author} date = {element.publishedAt} */}
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
        </div>
      </div>
    )
  }
}
