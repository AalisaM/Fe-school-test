import { React } from "react";


function LoginComponent() {
  return (
    <main>
      <div className="container-fluid">
        <section className="mb-4 mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="login-form">

              <div className="row">
                <div className="col-sm-12">      
                  <div className="form-group row profile-group">                
                    <h3><i className="fa fa-user"></i> Log in</h3>
                  </div>      
                </div>
              </div>


              <div className="form-group row filter-group">                
                <div  className="col-sm-3 col-md-1">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-envelope prefix blue-text"></i>
                  </label>
                </div>                
                <div className="col-sm-9 col-md-9 col-lg-11">                
                  <input type="text" id="orangeForm-email" className="form-control login-input" placeholder="email@email.com"/>
                </div>
              </div>

              
              <div className="form-group row filter-group">                
                <div  className="col-sm-3 col-md-1">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-lock prefix blue-tex"></i>
                  </label>
                </div>                
                <div className="col-sm-9 col-md-9 col-lg-11">                
                  <input type="password" id="orangeForm-pass" className="form-control login-input" type="password" placeholder="****"/>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">      
                  <div className="form-group row profile-group">                
                    <button type="button" className="btn btn-primary btn-lg">Log in</button>
                  </div>      
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">      
                  <div className="form-group row profile-group">   
                    <div  className="col-sm-6 m-auto">                          
                      <p><a href="/resetpwd">Forgot password</a> |  <a href="/register">Create an account</a></p>
                    </div>
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

export default LoginComponent;
