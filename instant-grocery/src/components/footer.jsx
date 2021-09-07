import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer id='footer' className="bg-light text-center text-white">

                    <div className="container p-4 pb-0">

                        <section className="mb-4">

                            {/* Facebook icon  */}
                            <a
                                href="#!"
                                role="button"
                                className="m-1 p-2"
                            >
                                <img src="https://cdn.iconscout.com/icon/free/png-128/facebook-270-789828.png" srcset="https://cdn.iconscout.com/icon/free/png-64/facebook-270-789828.png 1x, https://cdn.iconscout.com/icon/free/png-128/facebook-270-789828.png 2x" alt="Facebook Icon" loading="lazy" className="thumb_2R-ky"></img>
                            </a>

                            {/* Gmail icon */}
                            <a
                                href="#!"
                                role="button"
                                className="m-1 p-2"
                            >
                                <img src="https://cdn.iconscout.com/icon/free/png-128/gmail-3521453-2944897.png" srcset="https://cdn.iconscout.com/icon/free/png-64/gmail-3521453-2944897.png 1x, https://cdn.iconscout.com/icon/free/png-128/gmail-3521453-2944897.png 2x" alt="Gmail Technology Logo Social Media Logo Icon" loading="lazy" className="thumb_2R-ky"></img>
                            </a>
                        </section>

                    </div>

                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-white" href="#">KAP</a>
                    </div>
                </footer>
            </React.Fragment >
        );

    }

}

export default Footer;