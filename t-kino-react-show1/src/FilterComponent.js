import ReactDOM from 'react-dom';
import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { Accordion, Card, Button } from "react-bootstrap";


function FilterComponent() {
  return (
    <section className="filter mb-4 mt-4">
      <form>
        <Accordion className="">
          <Card className="">
            <Card.Header className="row">
              <div className="col-lg-9 col-md-8 col-sm-6 mb-4 filter-group mx-auto">
                <div className="input-group  col-sm-12 mx-auto">
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Harry Potter" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary form-control" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="form-control">
                      <i className="fa fa-sliders-h"></i>
                    </Accordion.Toggle>
                  </div>
                </div>
              </div>

               <div className="col-lg-3 col-md-4 col-sm-6 mb-4 filter-group">
                <div className="input-group  col-sm-12">
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option defaultValue>Sort By</option>
                    <option value="1">Genre</option>
                    <option value="2">Director</option>
                    <option value="3">Name</option>
                    <option value="4">Year</option>
                    <option value="5">Country</option>
                    <option value="6">Rating</option>
                  </select>
                  <div className="input-group-append">
                    <button className="btn btn-secondary form-control" type="button">
                      <i className="fa fa-sort-amount-up"></i>
                    </button>
                  </div>
                </div>
              </div> 
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Genre  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">
                      <select className="form-control filter-input" id="exampleFormControlSelect1">
                        <option defaultValue>Any</option>
                        <option value="1">Adventure</option>
                        <option value="2">Comedy</option>
                        <option value="3">Fantasy</option>
                        <option value="4">Thriller</option>

                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Country  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">

                      <select className="form-control filter-input" id="exampleFormControlSelect1">
                        <option defaultValue>Any</option>
                        <option value="1">UK</option>
                        <option value="2">USA</option>
                        <option value="3">Greman</option>
                        <option value="4">Russia</option>
                        <option value="5">Poland</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Director  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">
                      <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Tarantino" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Year  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">
                      <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="1990-2010 or 1850 or 1758,1867" />

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">MPAA  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">
                      <select className="form-control filter-input" id="exampleFormControlSelect1">
                        <option defaultValue>Any</option>
                        <option value="1">G </option>
                        <option value="2">GP</option>
                        <option value="3">PG</option>
                        <option value="4">PG-13</option>
                        <option value="5">R </option>
                        <option value="6">NC-17 </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="form-group row filter-group">
                    <div className="col-sm-4 col-lg-3">
                      <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Rating  <i className="fa fa-fw fa-sort"></i></label>
                    </div>
                    <div className="col-sm-8 col-lg-9">
                      <select className="form-control filter-input" id="exampleFormControlSelect1">
                        <option defaultValue>Any</option>
                        <option value="1">1 and more </option>
                        <option value="2">2 and more </option>
                        <option value="3">3 and more </option>
                        <option value="4">4 and more </option>
                        <option value="5">5  and more </option>
                      </select>
                    </div>
                  </div>
                </div>



              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </form>
    </section>
  );
}

export default FilterComponent;
