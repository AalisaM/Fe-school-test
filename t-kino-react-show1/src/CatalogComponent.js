import { React } from "react";

import FilterComponent from "./FilterComponent";
import MovieItemComponent from "./MovieItemComponent";


function CatalogComponent() {
  return (
      <div className="container-fluid">
      <FilterComponent/>
      <section className="mb-4 mt-4">
        <div className="row  row-align">
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>
          <MovieItemComponent></MovieItemComponent>

        </div>
      </section>
      </div>
  );
}

export default CatalogComponent;
