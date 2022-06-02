import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieItem.css";
import store from "../../redux/store";

class MovieItem extends Component {
  // handleClick = () => {
  //   console.log(this.props.Title);
  // };
  state = {
    text : "Добавить в список",
  }
  clickBtn = () =>{
    this.setState({text : "Added"});
  }
  render() {
    const { Title, Year, Poster, imdbID } = this.props;
    const {text} = this.state;
    // console.log(this.props.Title);

    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            onClick={() =>
              store.dispatch({
                type: "ADD_FAVORITE",
                payload: {
                  imdbID: this.props.imdbID,
                  Title: this.props.Title,
                  Year: this.props.Year,
                },
              })
            }
            type="button"
            className="movie-item__add-button"
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { favMovie: state.favMovie };
};
export default connect(mapStateToProps)(MovieItem);
