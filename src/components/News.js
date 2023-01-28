import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-newsMonkey`;
  }

  async updateNews() {
    try {
      console.log("hel");
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8e66451c2a544d48b51692f869e25fd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
      });
    } catch (e) {
      console.log("something is not working");
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=e8e66451c2a544d48b51692f869e25fd&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ loading: false });
      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
      });
    }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePriviousClick = async () => {
    console.log("previous");

    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e8e66451c2a544d48b51692f869e25fd&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ loading: false });

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
    });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News Monkey Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headline
        </h1>
        <div className="text-center">{this.state.loading && <Spinner />}</div>

        <div className="container">
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePriviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
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
