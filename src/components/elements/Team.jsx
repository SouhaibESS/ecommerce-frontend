import React from 'react'
import { Contact } from './Contact'
import img1 from '../../assets/img/team/ana1.jpeg'
import img2 from '../../assets/img/team/ana2.JPG'
import img3 from '../../assets/img/team/ana3.jpg'

const Team = () => {
    return (
        <>
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">a kijakom team dyaln ?.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={img1} alt=""/>
                                <h4>Mr.</h4>
                                <p className="text-muted">Lead Designer</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/es_souhaib">
                                        <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/souhaib.essarghini/">
                                        <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/souhaib-essarghini-1aa5681a4/">
                                        <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={img2} alt=""/>
                                <h4>Essarghini</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/es_souhaib">
                                        <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/souhaib.essarghini/">
                                        <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/souhaib-essarghini-1aa5681a4/">
                                        <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={img3} alt=""/>
                                <h4>Souhaib</h4>
                                <p className="text-muted">Lead Developer</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/es_souhaib">
                                        <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/souhaib.essarghini/">
                                        <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/souhaib-essarghini-1aa5681a4/">
                                        <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">hna team herban bzaf hdiw m3ana projects jayin yakono hsen mn hedshi.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />

        </>
    )
}

export default Team