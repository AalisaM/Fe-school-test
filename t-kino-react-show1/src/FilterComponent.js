import ReactDOM from 'react-dom';
import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";


function FilterComponent() {
  return (
      <section className="filter mb-4 mt-4">
        <form>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
              <div className="form-group row filter-group">
               <h2 className="col-sm-12">Filter criteria</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-2 col-lg-2">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Name</label>
                </div>                
                <div className="col-sm-10 col-lg-10">                
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Harry Potter"/>
                </div>
              </div>      
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-5">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Rating  <i className="fa fa-fw fa-sort"></i></label>
                </div>               
                <div className="col-sm-8 col-lg-7">                
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
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-3">             
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
                <div  className="col-sm-4 col-lg-3">             
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
                <div  className="col-sm-4 col-lg-3">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Director  <i className="fa fa-fw fa-sort"></i></label>
                </div>                
                <div className="col-sm-8 col-lg-9">                
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Tarantino"/>
               </div>
              </div>      
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">   
                <div  className="col-sm-4 col-lg-3">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Year  <i className="fa fa-fw fa-sort"></i></label>
                </div>
                <div className="col-sm-8 col-lg-9">                
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="1990-2010 or 1850 or 1758,1867"/>

               </div>
              </div>      
            </div>
          </div>
        </form>
      </section>
  );
}

export default FilterComponent;
