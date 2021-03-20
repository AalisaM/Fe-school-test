import { React } from "react";


function MovieConfigurationComponent() {
  return (
    <main>
      <div className="container-fluid">

      <section className="mb-4 mt-4">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-10 mx-auto">
            <div className="login-form">
              <div className="form-group row filter-group">
                <div  className="col-lg-2 col-sm-3">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Title</label>
                </div>                
                <div className="col-lg-10 col-sm-9">                
                  <input type="text" id="orangeForm-email" className="form-control login-input" placeholder="email@email.com"/>
                </div>
              </div>
              
              <div className="form-group row filter-group">
                <div  className="col-lg-2 col-sm-3">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Release Date
                  </label>
                </div>                
                <div className="col-lg-10 col-sm-9">                
                  <input type="date" id="orangeForm-email" className="form-control login-input" placeholder="email@email.com"/>
                </div>
              </div>

              <div className="form-group row filter-group">
                <div  className="col-lg-2 col-sm-3">             
                  <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Country
                  </label>
                </div>                
                <div className="col-lg-10 col-sm-9">                
                  <select className="form-control filter-input" id="exampleFormControlSelect1">
                    <option defaultValue>Russia</option>
                    <option value="1">UK</option>
                    <option value="2">USA</option>
                    <option value="3">Greman</option>
                  </select>
                 </div>
                </div>        

                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Duration
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">                
                    <input type="number" id="orangeForm-email" min="0" className="form-control login-input" placeholder="duration in minutes"/>
                  </div>
                </div>
      
                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Stars
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">                
                    <input id="orangeForm-email" className="form-control login-input" placeholder="actor1, actor2, actor3"/>
                  </div>
                </div>
                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Director
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">                
                    <input id="orangeForm-email" className="form-control login-input" placeholder="Director"/>
                  </div>
                </div>

                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Writers
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">                
                    <input id="orangeForm-email" className="form-control login-input" placeholder="writers"/>
                  </div>
                </div>


                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Description
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9"> 
                    <textarea className="form-control login-input" placeholder="Description"></textarea>               
                  </div>
                </div>

                
                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable">Synopsis
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9"> 
                    <textarea className="form-control login-input" placeholder="Short description"></textarea>               
                  </div>
                </div>

                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable"> Link to trailer
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">                
                    <input id="orangeForm-email" className="form-control login-input" placeholder="https://www.youtube.com/embed/mNgwNXKBEW0"/>
                  </div>
                </div>
             
                <div className="form-group row filter-group">
                  <div  className="col-lg-2 col-sm-3">             
                    <label htmlFor="exampleFormControlSelect1" className="col-form-label filter-lable"> Image upload
                    </label>
                  </div>                
                  <div className="col-lg-10 col-sm-9">             
                    
                    <label htmlFor="upload-photo" className="btn-primary btn-m btn">Browse film preview</label>
                    <input  id="upload-photo"  type="file" className="form-control-file hidden-input" id="exampleFormControlFile1" />
                    </div>
                </div>
             

              <div className="row">
                <div className="col-lg-12">      
                  <div className="form-group row profile-group">                
                    <button type="button" className="btn btn-primary btn-lg">Create film</button>
                  </div>     
                </div>
                  <div className="col-lg-12">      
                      <div  className="form-group row profile-group">                          
                        <a href="/preview">Watch Preview</a>
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

export default MovieConfigurationComponent;
