import React from 'react'

export default function Connect() {
    return (
        <div>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Connect us <i className="fa-solid fa-link" style={{ fontSize: "15px"}}></i></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: "#0c1626" }}>
                            <footer className="text-center text-white">

                                <div className="container p-4" style={{ backgroundColor: "#0c1626" }}>

                                    <section style={{ backgroundColor: "#0c1626" }}>

                                        <a className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#3b5998" }}
                                            href="https://www.facebook.com/"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fab fa-facebook-f"></i></a>

                                        <a className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#55acee" }}
                                            href="https://twitter.com/luvseverussnape"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fab fa-twitter"></i></a>

                                        <a className=" btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#dd4b39" }}
                                            href="https://mail.google.com/mail/"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fa-solid fa-envelope"></i></a>

                                        <a className=" btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#ac2bac" }}
                                            href="https://www.instagram.com/"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fab fa-instagram"></i></a>

                                        <a className=" btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#0082ca" }}
                                            href="https://www.linkedin.com/in/sukhpreetlotey/"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fab fa-linkedin-in"></i></a>

                                        <a className=" btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#333333" }}
                                            href="https://github.com/sukhlotey"
                                            target={"_blank"}
                                            rel="noreferrer"
                                            role="button"><i className="fab fa-github"></i></a>
                                    </section>
                                </div>
                                <div className="text-center text-light p-3" style={{ backgroundColor: "#0f213b" }}> NEWS MAN </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
