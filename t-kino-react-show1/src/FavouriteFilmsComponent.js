import { React } from "react";

import MovieItemComponent from "./MovieItemComponent";


function FavouriteFilmsComponent() {
  return (
    <main>
      <div className="container-fluid">
      <section className="mb-4 mt-4">
          <div className="row">
            <div className="col-sm-12 mb-4 ">
              <div className="form-group row filter-group">
               <h3 className="col-sm-12">The_boy_who_lived liked:</h3>
              </div>
            </div>
            </div>
        <div className="row  row-align">
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
        </div>
      </section>
      </div>
    </main>
  );
}

export default FavouriteFilmsComponent;
