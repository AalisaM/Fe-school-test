import { React } from "react";
import avatar from "./img/avatars/thumb.jpg";

function ProfileComponent() {
  return (
    <main>
      <div className="container-fluid">
        <section className="mb-4 mt-4">
        <div className="row">

          <form className="profile-form login-form col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group row profile-group">
                  <h3>Profile settings</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 mx-auto">

                <div className="form-group row profile-group">
                  <div className="col-md-12 col-sm-12 col-lg-12 m-auto">
                    <img src={avatar} widtalt="Photo" className="userpick" />
                  </div>

                </div>

                <div className="row justify-content-center m-auto">
                  <div className="col-sm-6 avatar-data">
                    <label htmlFor="upload-photo" className="btn-primary btn-m btn">
                        <span className="clearfix d-none d-sm-inline-block">  Browse avatar </span>
                        <i className="fa fa-upload"></i>
                     </label>
                    <input id="upload-photo" type="file" className="form-control-file hidden-input" id="exampleFormControlFile1" />
                  </div>

                  <div className="col-sm-6 avatar-data">
                    <button type="button" className="btn btn-primary btn-m btn-delete">
                      <span className="clearfix d-none d-sm-inline-block">Remove avatar </span>
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-8 mx-auto">
                <div className="form-group row profile-group">
                  <div className="col-sm-3 col-md-2">
                    <label className="col-form-label filter-lable">E-mail
                    </label>
                  </div>
                  <div className="col-sm-9 col-md-9 col-lg-9">
                    <label className="col-form-label filter-lable">mega-drakon@t-kino.ru</label>
                  </div>
                </div>

                <div className="form-group row profile-group">
                  <div className="col-sm-3 col-md-2">
                    <label for="exampleFormControlSelect1 profile-input" className="col-form-label filter-lable">Name</label>
                  </div>
                  <div className="col-sm-9 col-md-9 col-lg-9">
                    <input type="text" className="form-control profile-input" value="boy_who_lived" />
                  </div>
                </div>

                <div className="form-group row profile-group">
                  <div className="col-sm-3 col-md-2">
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Password
                    </label>
                  </div>
                  <div className="col-sm-9 col-md-9 col-lg-9">
                    <input className="form-control profile-input" id="exampleFormControlSelect1" type="password" value="1234" />
                  </div>
                </div>

                <div className="form-group row profile-group">
                  <div className="col-sm-3 col-md-2">
                    <label for="exampleFormControlSelect1" className="col-form-label filter-lable">Old Password
                    </label>
                  </div>
                  <div className="col-sm-9 col-md-9 col-lg-9">
                    <input className="form-control profile-input" id="exampleFormControlSelect1" type="password" value="1234" />
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
          </form>

</div>
        </section>
      </div>

    </main>
  );
}

export default ProfileComponent;
