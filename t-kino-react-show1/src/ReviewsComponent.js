import { React } from "react";
import avatar from "./img/avatars/doggo.jpg";

import Pagination from "./Pagination";

function Comment() {
  return (
    <div className="login-form mb-4 ">
      <div className="row comment-block">
        <div className="col-lg-12 col-md-12 col-sm-6 mb-4">
          <div className="col-sm-12 form-group row zero-pad">
            <div className="col-sm-2 col-md-3 col-lg-2 review-avatar">
              <img src={avatar} widtalt="Photo" className="avatar" />
              <p className="m-auto">Some friend</p>
            </div>
            <div className="col-sm-10 col-md-9 col-lg-10 comment-data">
              <div className=" row review-title">

                <div className="col-sm-11">
                  <p>Best film ever</p>
                </div>
                <div className="col-sm-1">
                  <p>27/02/02</p>
                </div>

              </div>
              <div className=" row">
                <div className="col-lg-12">
                  <p className="">There's nothing like the first in a series, is there? The introduction to
                  the
                  characters, the immersion into the fictional world, the first time you laugh, cry, care, and
                  fear
                  for someone's safety can never be repeated. No matter how many Harry Potter movies they crank
                  out,
                  or if they ever remake them in the future, none will come close to the wonderful first film,
                  Harry
                  Potter and the Sorcerer's Stone.

                  I'm sure everyone has their own childhood memories of reading the Harry Potter books that
                  they'll
                  tell their grandkids about, but I'll never forget going to see the first movie in the theaters.
                  The lights dimmed, John Williams's perfect theme played its first notes as Richard Harris walked
                  down Privet Drive, and everyone in the theater was transported to another world. John Williams's
                  numerous themes, all wonderful and a personification of the wizarding world, took the early
                  movies
                  to another level. As other composers tried their hands at the later films, that quality was
                  missing. There's something truly special about going to see this movie on the big screen, and
                  while the "magical" qualities might not all be credited to the music, it's certainly one of
                  them.
            </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-9">
                  <div className="rating-star review">
                    <input type="radio" name="rating" value="5" id="5"  /><label for="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4"  defaultChecked /><label for="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                  </div>
                </div>
                <div className="col-sm-3 input-group m-auto justify-content-center">
                  <button type="button" className="form-control  btn btn-primary btn-m btn-delete delete-review">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function MyReviewComponent() {
  return (
    <section className="mb-4 mt-4">
      <div className="row">
        <form className="col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="login-form">
            <div className="row comment-block">
              <div className="col-lg-12 col-md-12 col-sm-6 mb-4">
                <div className="col-sm-12 form-group row zero-pad">
                  <div className="col-sm-2 col-md-3 col-lg-2 review-avatar">
                    <img src={avatar} widtalt="Photo" className="avatar" />
                    <p className="m-auto">the_boy_who_lived</p>
                  </div>

                  <div className="col-sm-10 col-md-9 col-lg-10 comment-data">
                    <div className=" row review-title">

                      <div className="col-lg-12 col-sm-12">
                        <input className="form-control login-input" placeholder="Title" />
                      </div>

                    </div>
                    <div className=" row">
                      <div className="col-lg-12">
                        <textarea className="my-review">My personal opinion. Such wow, much good. Enhoyed every moment.
         Magical castle and story and everything.Espesially liked Einalege part.</textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="rating-star">
                          <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label>
                          <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label>
                          <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label>
                          <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label>
                          <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                        </div>
                      </div>
                      <div className="col-sm-6 input-group m-auto justify-content-center">
                        <button type="button" className="form-control btn btn-primary btn-m  review-buttons"> Publish</button>
                        <button type="button" className="form-control  btn btn-primary btn-m btn-delete delete-review">Delete</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function ReviewsComponent() {
  return (
    <section className="mb-4 mt-4">
      <div className="row">
        <form className="col-lg-10 col-md-12 col-sm-12 mx-auto">
          {/* <div className="login-form"> */}
          {/* <div className="row">
              <div className="col-sm-12">
                <h2>Reviews</h2>
              </div>
            </div> */}
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          {/* </div> */}
        </form>
      </div>
      <Pagination />
    </section>

  )
}
export { MyReviewComponent, ReviewsComponent };
