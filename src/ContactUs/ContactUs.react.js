import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './ContactUs.css';

const ContactUs = () => {

    return (
<div className='contactus_wrapper container'>
            <h2>Drop a line to us</h2>

<form action="mailto:someone@example.com" method="post" enctype="text/plain">
<div className="container col-sm-6">
<div className="card-body">        
Name:<br></br>

<input type="text"className="col-sm-8" name="name"></input><br></br>

E-mail:<br></br>
<input type="text" name="mail"className="col-sm-8" ></input><br></br>
Comment:<br></br>
<input type="text" name="comment"className="col-sm-8" ></input><br></br>
<input type="submit" className="btn btn-success" value="Send"></input>&nbsp;&nbsp;&nbsp;
<input type="reset" className="btn btn-success" value="Reset"></input>
</div>
</div>
</form>

            {/* <div class="card">
                                    <div class="card-body ">
                                        <h5 class="card-title">Drop us a line</h5>
                                        <div className="form-group row">
                                            <label for="fullname" class="col-sm-4 col-form-label">Full name</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="fullname"  required />
                                            </div>
                                            <label for="emailadd" class="col-sm-4 col-form-label">Email Address</label>
                                            <div class="col-sm-12">
                                                <input type="email" className="form-control" name="emailadd"  required />
                                            </div>
                                            <label for="addmsg" class="col-sm-4 col-form-label">Message</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="addmsg"  required />
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <button type="submit"><a class="mailto" href="mailto:contact@test.com">Submit</a></button > */}
                                        </div>
                                        
                                       
    
    );

}

export default ContactUs;