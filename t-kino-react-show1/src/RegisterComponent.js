import { React } from "react";

import FilterComponent from "./FilterComponent";
import MovieItemComponent from "./MovieItemComponent";


function RegisterComponent() {
  return (
    <main>
      <div className="container-fluid">
      <section className="mb-4 mt-4">
          <div className="row">
            <div className="col-sm-12 col-lg-6  col-md-8 mx-auto">
              <div className="login-form">
              <div className="row">
                  <div className="col-lg-12">      
                    <div className="form-group row profile-group">  
                      <h3><i className="fa fa-user"></i> Create an account:</h3>              
                    </div>      
                  </div>
                </div>

                <div className="form-group row filter-group">                
                  <div  className="col-lg-3">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-envelope prefix blue-text"></i>  E-mail
                    </label>
                  </div>                
                  <div className="col-lg-9">                
                    <input type="text" id="orangeForm-email" className="form-control login-input" placeholder="email@email.com"/>
                  </div>
                </div>

                
                <div className="form-group row filter-group">                
                  <div  className="col-lg-3">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-user prefix blue-text"></i>  User name
                    </label>
                  </div>                
                  <div className="col-lg-9">                
                    <input type="text" id="orangeForm-email" className="form-control login-input" placeholder="kek_cheburek_2001"/>
                  </div>
                </div>

                
                <div className="form-group row filter-group">                
                  <div  className="col-lg-3">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-lock prefix blue-tex"></i>  Password
                    </label>
                  </div>                
                  <div className="col-lg-9">                
                    <input type="password" id="orangeForm-pass" className="form-control login-input" type="password" placeholder="****"/>
                  </div>
                </div>

                <div className="form-group row filter-group">                
                  <div  className="col-lg-3">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-lock prefix blue-tex"></i>  Confirm password
                    </label>
                  </div>                
                  <div className="col-lg-9">                
                    <input type="password" id="orangeForm-pass" className="form-control login-input" type="password" placeholder="****"/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">      
                    <div className="form-group row profile-group">                
                      <button type="button" className="btn btn-primary btn-lg">Confirm</button>
                    </div>      
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">      
                    <div className="form-group row profile-group">   
                        <p className="m-auto">Have account? <a href="/login">Log in</a></p>
                    </div>          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RegisterComponent;
