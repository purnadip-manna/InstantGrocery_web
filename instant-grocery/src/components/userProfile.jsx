import React, { Component } from 'react';


class UserProfile extends Component {
    render() { 
        return (
            <div className="container-fluid">
                <section className="section about-section gray-bg" id="about">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-6">
                                <div className="about-text go-to">
                                    <h3 className="dark-color">About Me</h3>
                                    <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                                    <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                                    <div className="row about-list">
                                        <div className="col-md-6">
                                            <div className="media">
                                                <label>Birthday</label>
                                                <p>4th april 1998</p>
                                            </div>
                                            <div className="media">
                                                <label>Age</label>
                                                <p>22 Yr</p>
                                            </div>
                                            <div className="media">
                                                <label>Residence</label>
                                                <p>Canada</p>
                                            </div>
                                            <div className="media">
                                                <label>Address</label>
                                                <p>California, USA</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="media">
                                                <label>E-mail</label>
                                                <p>info@domain.com</p>
                                            </div>
                                            <div className="media">
                                                <label>Phone</label>
                                                <p>820-885-3321</p>
                                            </div>
                                            <div className="media">
                                                <label>Skype</label>
                                                <p>skype.0404</p>
                                            </div>
                                            <div className="media">
                                                <label>Freelance</label>
                                                <p>Available</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="counter">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                        <p className="m-0px font-w-600">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                        <p className="m-0px font-w-600">Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                        <p className="m-0px font-w-600">Photo Capture</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                        <p className="m-0px font-w-600">Telephonic Talk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <br/>
                    <br/><br/><br/>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                        <div className="card shadow text-center">
                        <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157" style={{backgroundColor: "#fdb157"}}>
                            <div className="wave" data-progress="90%" style={{bottom: "90%"}}></div>
                        </div>
                        <div className="card-footer bg-white">
                            <h4 className="card-title">Web Design (90%)</h4>
                        </div>
                        </div>
                    </div>
                    https://demo.themefisher.com/kross/ */}

                </section>
            </div>
        );
    }
}
 
export default UserProfile;