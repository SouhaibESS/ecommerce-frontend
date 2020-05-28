import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <span className="copyright">Copyright &copy; Sto-R-eact 2020</span>
                </div>
                <div className="col-md-6">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a target="_blank" href="https://twitter.com/es_souhaib">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://www.facebook.com/souhaib.essarghini/">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://www.linkedin.com/in/souhaib-essarghini-1aa5681a4/">
                                <i className="fa fa-linkedin" ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item">
                            <a href="#something">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#something">Terms of Use</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            </div>
        </footer>
    )
}

export default Footer