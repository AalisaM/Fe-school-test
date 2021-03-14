import { React, useEffect, useState } from "react";
import avatar from "./img/avatars/bulba.jpg";
import avatar1 from "./img/avatars/doggo.jpg";
import avatar2 from "./img/avatars/jojo.jpg";
import avatar3 from "./img/avatars/sponge.jpg";
import avatar4 from "./img/avatars/thumb.jpg";
import { Tabs, Tab} from "react-bootstrap";


function FriendsCmponent() {
  return (
    <main>
      <div className="container-fluid">
    
        <section className="mb-4 mt-4">
          <form>
            <div className="row">
              <div className="col-sm-12 col-md-8 mx-auto profile">
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group row profile-group">
                      <h2 className="col-sm-12">Friend management</h2>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-12">      
                    <div className="form-group row filter-group m-r-15">                
                      <div className="col-sm-7 col-md-10 friend-req">                
                        <input className="form-control filter-input" id="exampleFormControlSelect1" placeholder="email@email.com"/>
                      </div>
                      <div  className="col-sm-1 send-req-btn"> 
                        <button type="button" className="btn btn-primary btn-m" >
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>      
                  </div>
                </div>

                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                  <Tab eventKey="all" title="All">
                    <div  className="col-sm-12 form-group row profile-group"> 
                      <div  className="col-sm-2">             
                        <img src={avatar2} widtalt="Photo" className="avatar"/>    
                      </div> 
                      <div  className="col-sm-4  friend-data friend-name">             
                        <h5>< a href="/profile/favs">First friend</a></h5>
                      </div>

                      <div  className="col-sm-3  friend-data">             
                        <button type="button" className="btn btn-primary btn-m btn-delete" >
                          <span className="clearfix d-none d-sm-inline-block">  Delete </span>
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>

                    <div  className="col-sm-12 form-group row profile-group"> 
                      <div  className="col-sm-2">             
                        <img src={avatar1} widtalt="Photo" className="avatar"/>    
                      </div> 
                      <div  className="col-sm-4  friend-data friend-name">             
                        <h5 >< a href="/profile/favs">Best friend</a></h5>
                      </div>

                      <div  className="col-sm-3  friend-data">             
                        <button type="button" className="btn btn-primary btn-m btn-delete" >
                          <span className="clearfix d-none d-sm-inline-block">  Delete  </span>
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                
                 </Tab>
                  <Tab eventKey="new" title="New (2)">
                      <div className="request-new-friends">
                        <div  className="col-sm-12 form-group row profile-group"> 
                          <div  className="col-sm-2">             
                            <img src={avatar3} widtalt="Photo" className="avatar"/>    
                          </div> 
                          <div  className="col-sm-4  friend-data friend-name">             
                            <h5> Some friend </h5>
                          </div>
                          <div  className="col-sm-3 friend-data"> 
                            <button type="button" className="btn btn-primary btn-m" >
                            <span className="clearfix d-none d-sm-inline-block">  Accept  </span>
                          <i className="fa fa-check"></i>
                               </button>
                          </div>
                          <div  className="col-sm-3  friend-data">             
                            <button type="button" className="btn btn-primary btn-m btn-delete">
                            <span className="clearfix d-none d-sm-inline-block">  Reject  </span>
                          <i className="fa fa-times"></i>
                              </button>
                          </div>
                        </div>
    
                        <div  className="col-sm-12 form-group row profile-group"> 
                          <div  className="col-sm-2">             
                            <img src={avatar2} widtalt="Photo" className="avatar"/>    
                          </div> 
                          <div  className="col-sm-4  friend-data friend-name">             
                            <h5> Another friend </h5>
                          </div>
                          <div  className="col-sm-3 friend-data"> 
                            <button type="button" className="btn btn-primary btn-m" >
                            <span className="clearfix d-none d-sm-inline-block">  Accept  </span>
                          <i className="fa fa-check"></i>
                          </button>
                          </div>
                          <div  className="col-sm-3  friend-data">             
                            <button type="button" className="btn btn-primary btn-m btn-delete">
                            <span className="clearfix d-none d-sm-inline-block">  Reject  </span>
                          <i className="fa fa-times"></i>
                              </button>
                          </div>
                        </div>
                      </div>
                  </Tab>
                  <Tab eventKey="my" title="My Requests">
    
                      <div className="request-to-friends">
                        <div  className="col-sm-12 form-group row profile-group"> 
                          <div  className="col-sm-2">             
                            <img src={avatar1} widtalt="Photo" className="avatar"/>    
                          </div> 
                          <div  className="col-sm-4  friend-data friend-name">             
                            <h5> Queen_killer</h5>
                          </div>
                          <div  className="col-sm-3  friend-data">             
                            <button type="button" className="btn btn-primary btn-m btn-delete">
                            <span className="clearfix d-none d-sm-inline-block">  Cancel  </span>
                          <i className="fa fa-times"></i>
                               </button>
                          </div>
                        </div>
    
                        <div  className="col-sm-12 form-group row profile-group"> 
                          <div  className="col-sm-2">             
                            <img src={avatar} widtalt="Photo" className="avatar"/>    
                          </div> 
                          <div  className="col-sm-4  friend-data friend-name">             
                            <h5> I_like_tea_2020 </h5>
                          </div>
                          <div  className="col-sm-3  friend-data">             
                            <button type="button" className="btn btn-primary btn-m btn-delete">
                            <span className="clearfix d-none d-sm-inline-block">  Cancel  </span>
                          <i className="fa fa-times"></i>
                           </button>
                          </div>
                        </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
      );
}

export default FriendsCmponent;
