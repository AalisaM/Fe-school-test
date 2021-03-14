import { React } from "react";
import avatar from "./img/avatars/thumb.jpg";

function ProfileComponent() {
  return (
    <main>
    <div className="container-fluid">
      <section className="mb-4 mt-4">
        <form className="profile-form">

          <div className="row">
            <div className="col-sm-12 col-md-10 mx-auto">
              <div className="login-form">
                <div className="row">
                  <div className="col-sm-12">      
                    <div className="form-group row profile-group">                
                      <h3>Profile settings</h3>
                    </div>      
                  </div>
                </div>
                
                <div className="form-group row profile-group">                
                  <div  className="col-sm-3 col-md-2">             
                    <label className="col-form-label filter-lable">E-mail
                    </label>
                  </div>                
                  <div className="col-sm-9 col-md-9 col-lg-9">                
                    <label className="col-form-label filter-lable">mega-drakon@t-kino.ru</label>
                    </div>
                </div>

                <div className="form-group row profile-group">                
                  <div  className="col-sm-3 col-md-2">             
                    <label for="exampleFormControlSelect1 profile-input" className="col-form-label filter-lable">Name</label>
                  </div>                
                  <div className="col-sm-9 col-md-9 col-lg-9">                
                    <input type="text" className="form-control profile-input" value="boy_who_lived"/>
                  </div>
                </div>

                <div className="form-group row profile-group">                
                  <div  className="col-sm-3 col-md-2">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Password
                    </label>
                  </div>                
                  <div className="col-sm-9 col-md-9 col-lg-9">                
                    <input className="form-control profile-input" id="exampleFormControlSelect1" type="password" value="1234"/>
                  </div>
                </div>

                <div className="form-group row profile-group">                
                  <div  className="col-sm-3 col-md-2">             
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Old Password
                    </label>
                  </div>                
                  <div className="col-sm-9 col-md-9 col-lg-9">                
                    <input className="form-control profile-input" id="exampleFormControlSelect1" type="password" value="1234"/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">      
                    <div className="form-group row profile-group">                
                      <button type="button" className="btn btn-primary btn-lg">Accept profile changes</button>
                    </div>      
                  </div>
                </div>
              </div>
              </div>
          </div>
        </form>


        <form className="profile-form">
          <div className="row m-top-50">
            <div className="col-sm-12 col-md-10 mx-auto">
              <div className="login-form">
               
                <div className="row">
                  <div className="col-sm-12">      
                    <div className="form-group row profile-group">                
                      <h3>Avatar settings</h3>
                    </div>      
                  </div>
                </div>
              
                <div className="form-group row profile-group">
                  <div  className="col-md-3 col-sm-3 col-lg-3">             
                    <img src={avatar} widtalt="Photo" className="userpick"/>       
                  </div>     
                  <div className="profile-button col-sm-4 col-md-4 col-lg-4">   
                    <label htmlFor="upload-photo" className="btn-primary btn-m btn">Browse avatar</label>
                      <input  id="upload-photo"  type="file" className="form-control-file hidden-input" id="exampleFormControlFile1"/>
                    </div>

                    <div className="profile-button col-sm-5 col-md-4 col-lg-5">   
                        <button type="button" className="btn btn-primary btn-m btn-delete">Remove avatar</button>
                      </div>
                </div>
  
                <div className="row">
                  <div className="col-sm-12">      
                    <div className="form-group row profile-group">                
                      <button type="button" className="btn btn-primary btn-lg">Accept avatar changes</button>
                    </div>      
                  </div>
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

export default ProfileComponent;
