import { React, useEffect, useState } from "react";
import ListItemComponent from "./ListItem";

import "./shop.css";

function ShopComponent() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await data.json();

    setItems(items.data);
  };

  return (
    <main>
    <div className="container-fluid">
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
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Name</label>
                </div>                
                <div className="col-sm-10 col-lg-10">                
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Harry Potter"/>
                </div>
              </div>      
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-5">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Rating  <i className="fa fa-fw fa-sort"></i></label>
                </div>               
                <div className="col-sm-8 col-lg-7">                
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option selected="">2</option>
                    <option value="1">3</option>
                    <option value="2">4</option>
                    <option value="3">5</option>
                  </select>
                </div>
              </div>      
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-3">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Genre  <i className="fa fa-fw fa-sort"></i></label>
                </div>               
                <div className="col-sm-8 col-lg-9">                
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option selected="">Family</option>
                    <option value="1">Adventure</option>
                    <option value="2">Comedy</option>
                    <option value="3">Fantasy</option>
                  </select>
               </div>
              </div>      
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-3">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Country  <i className="fa fa-fw fa-sort"></i></label>
                </div>                
                <div className="col-sm-8 col-lg-9">                
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option selected="">Russia</option>
                    <option value="1">UK</option>
                    <option value="2">USA</option>
                    <option value="3">Greman</option>
                  </select>
               </div>
              </div>      
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">                
                <div  className="col-sm-4 col-lg-3">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Director  <i className="fa fa-fw fa-sort"></i></label>
                </div>                
                <div className="col-sm-8 col-lg-9">                
                  <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="Tarantino"/>
               </div>
              </div>      
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">      
              <div className="form-group row filter-group">   
                <div  className="col-sm-4 col-lg-3">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Year  <i className="fa fa-fw fa-sort"></i></label>
                </div>
                <div className="col-sm-8 col-lg-9">                
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option selected="">Family</option>
                    <option value="1">Adventure</option>
                    <option value="2">Comedy</option>
                    <option value="3">Fantasy</option>
                  </select>
               </div>
              </div>      
            </div>
          </div>
        </form>
      </section>

    </div>
    </main>
  );
}

export default ShopComponent;
