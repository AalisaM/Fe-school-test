import { React } from "react";


function ResetPasswordComponent() {
  return (
    <main>
      <div className="container-fluid">
      <section className="mb-4 mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
            <div className="login-form reset-pwd-form">
              <div className="row">
                <div className="col-lg-12">      
                  <div className="form-group row profile-group">  
                    <h3><i className="fa fa-user"></i> Reset password</h3>              
                  </div>      
                </div>
              </div>

              <div className="form-group row filter-group">                
                <div  className="col-sm-3">             
                  <label for="exampleFormControlSelect1" className="col-form-label filter-lable"><i className="fa fa-envelope prefix blue-text"></i>  E-mail
                  </label>
                </div>                
                <div className="col-sm-9">                
                  <input type="text" id="orangeForm-email" className="form-control login-input" placeholder="email@email.com"/>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">      
                  <div className="form-group row profile-group">                
                    <button type="button" className="btn btn-primary btn-lg">Confirm</button>
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

export default ResetPasswordComponent;
