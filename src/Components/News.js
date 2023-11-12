import PropTypes from 'prop-types';
import { Component } from 'react';
import Naya from './Naya';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const { country, pageSize } = this.props;
    const apiKey = 'ab736851528d409793eb3db0f1230abe';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&page=${this.state.page}`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
      console.log('Error:', error);
      this.setState({ loading: false });
    }
  }

  handlePrevClick = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchArticles();
    });
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchArticles();
    });
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className="container mx-5">
        <br />
        <h1 className="text-center color:white my-3" style={{ margin: '40px 0px' }}>
          <center>Top Headlines</center>
        </h1>
        {/* <Spinner/> */}
        <br />
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-3 mx-auto" key={element.url}>
              <Naya
                title={element.title ? element.title.slice(0, 45) : ''}
                description={element.description ? element.description.slice(0, 88) : ''}
                imageUrl={element.urlToImage}
                url={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1 || loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
