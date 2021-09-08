import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer id='footer' className="text-center">
                    <div className="container pt-1">
                        <section className="mb-4">
                            {/* Facebook icon  */}
                            <a
                                href="#!"
                                role="button"
                                className="m-1 p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16 ">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>

                            {/* Gmail icon */}
                            <a
                                href="#!"
                                role="button"
                                className="m-1 p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="40" height="40">
                                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                                </svg>
                            </a>
                        </section>
                    </div>
                    <div className="text-center p-3">
                    Copyright © 2021, K-A-P
                    </div>
                </footer>
            </React.Fragment >
        );

    }

}

export default Footer;