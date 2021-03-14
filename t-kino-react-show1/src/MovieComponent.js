import { React } from "react";
import ReviewsComponent from "./ReviewsComponent";

import poster from "./img/poster/hp.jpg";

function Movie(){
  return(
    <section className="mb-4 mt-4">
    <div className="row">
      <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
        <div className="login-form">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group row movie">
                <h2 className="col-sm-10">Harry Potter and Sorcerer's Stone</h2>
                <p className="col-sm-2 pad-r-20"><a href="#"><i className="fa fa-edit"></i> </a><a href="#"><i className="fa fa-trash"></i> </a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group row movie">
                  <div className="col-lg-8">
                    <div className="movie-p">
                      <p>16 Nov 2001, UK, Adventure, Family, Fantasy, <i className="fa fa-stopwatch"> 2h32m </i></p>
                      <p><b>Stars:</b> Daniel Radcliffe, Rupert Grint, Emma Watson</p>
                      <p><b>Director:</b> Chris Columbus</p>
                      <p><b>Writer:</b> J.K. Rowling (novel), Steve Kloves (screenplay)</p>
                      <p>This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy
                        serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard
                        and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is
                        snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the
                        groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him
                        and the viewer. Famous for an incident that happened at his birth, Harry makes friends
                        easily at his new school. He soon finds, however, that the wizarding world is far more
                        dangerous for him than he would have imagined, and he quickly learns that not all wizards
                        are ones to be trusted.</p>
                      <div className="rating">
                        <i className="fa fa-star"> 7.6</i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="poster-wrapper">
                      <img className="poster" src={poster}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row movie-p">
              <div className="col-lg-6 col-sm-6 friend-data movie-button">
                <button type="button" className="btn btn-primary btn-m">
                  {/* <span className="/*clearfix d-none d-sm-inline-block">Add to my list</span> */}
                  <span>Add to my list</span>
                  {/* <i className="fa fa-heart"></i> */}
                </button>
              </div>
              <div className="col-sm-4">
                <div className="rating-star">
                  <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
                  <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label>
                  <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
                  <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label>
                  <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                </div>
              </div>
            </div>

            <div className="trailer embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/mNgwNXKBEW0"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
  )
}

function MovieComponent() {
  return (
    <div className="container-fluid">
      <Movie/>
      <ReviewsComponent/>
    </div>
  );
}

// export default MovieComponent;


function PreviewComponent(){
  return (
    <main>
    <div className="container-fluid">
      <Movie/>
    </div>
  </main>
  );
}


export {MovieComponent, PreviewComponent};
