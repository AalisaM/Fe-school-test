import { React } from "react";
import 'font-awesome/css/font-awesome.min.css';


function MovieItemComponent() {
  return (
    <div className="movie-item col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card movie-card">
        <div className="card-header">
          <div className="view overlay">
            <img
              src="https://img.buzzfeed.com/buzzfeed-static/static/user_images/0cgJJG1tE.jpg?output-format=jpg&crop=312%253A312%253B94%252C0"
              className="card-img-top" alt="sample"/>
          </div>
        </div>

        <div className="card-body">
          <a href="/movie">
            <h4 className="card-title">Harry Potter</h4>
            <p className="card-text mb-0">16 Nov 2001, UK</p>
          </a>
          <div className="description">
            <ul className="movie-gen">
              <li>PG / </li>
              <li>2h 32min / </li>
              <li> Adventure, Family, Fantasy</li>
            </ul>
            <p className="card-synopsis"> An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.
            </p>
          </div>

          <div className="cast">
            <div className="card-text mb-0">
              <ul className="movie-gen">
                <li>Daniel Radcliffe</li>
                <li>Rupert Grint/</li>
                <li>Emma Watson </li>
              </ul>
            </div>
          </div>

          <div className="card-buttons">
            <div className="rating">
              <i className="fa fa-star">  7.6</i>
            </div>
            <div className="favs action-btn"><i className="far fa-heart"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItemComponent;
