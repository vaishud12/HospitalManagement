import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import img1 from '../images/about/img-1.jpg';
import img2 from '../images/about/img-2.jpg';
import img3 from '../images/about/img-3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import DoctorsSlider from '../components/DoctorSlider';
import { Navbar } from '../components/Navbar';
import protect from "../images/protect.png"
import img6 from "../images/img6.jpg"

const Home = () => {

    const services = [
        {
            title: "Laboratory services",
            icon: "laboratory",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            title: "Heart Disease",
            icon: "heart-beat-alt",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            title: "Dental Care",
            icon: "tooth",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            title: "Body Surgery",
            icon: "crutch",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            title: "Neurology Surgery",
            icon: "brain-alt",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            title: "Gynecology",
            icon: "dna-alt-1",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
    ];

    const testimonials = [
        {
            name: "John Partho",
            title: "Amazing service!",
            image: "images/team/test-thumb1.jpg",
            content: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."
        },
        {
            name: "Mullar Sarth",
            title: "Expert doctors!",
            image: "images/team/test-thumb2.jpg",
            content: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."
        },
        {
            name: "Kolis Mullar",
            title: "Good Support!",
            image: "images/team/test-thumb3.jpg",
            content: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."
        },
        {
            name: "Partho Sarothi",
            title: "Nice Environment!",
            image: "images/team/test-thumb4.jpg",
            content: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."
        },
        {
            name: "Kolis Mullar",
            title: "Modern Service!",
            image: "images/team/test-thumb1.jpg",
            content: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat."
        },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <>
    <div>
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <a href="mailto:support@gmail.com">
                      <i className="icofont-support-faq mr-2"></i>support@novena.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890">
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </header>
      <Navbar/>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing">Total Health care solution</span>
                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                <p className="mb-4 pr-5">
                  A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit,
                  deserunt rem suscipit placeat.
                </p>
                <div className="btn-container">
                  <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">
                    Make appointment <i className="icofont-simple-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ marginTop: '-50px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-surgeon-alt"></i>
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="mb-3">Online Appointment</h4>
                  <p className="mb-4">
                    Get all-time support for emergency. We have introduced the principle of family medicine.
                  </p>
                  <a href="appoinment.html" className="btn btn-main btn-round-full">Make an appointment</a>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Timing schedule</span>
                  <h4 className="mb-3">Working Hours</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                    <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                    <li className="d-flex justify-content-between">Sat - Sun : <span>10:00 - 17:00</span></li>
                  </ul>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <span>Emergency Cases</span>
                  <h4 className="mb-3">1-800-700-6200</h4>
                  <p>
                    Get all-time support for emergency. We have introduced the principle of family medicine. Get connected
                    with us for any urgency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="about-img">
              <img src={img1} alt="" className="img-fluid" />
              <img src={img2} alt="" className="img-fluid mt-4" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="about-img mt-4 mt-lg-0">
              <img src={img3} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content pl-4 mt-4 mt-lg-0">
              <h2 className="title-color">Personal care <br /> & healthy living</h2>
              <p className="mt-4 mb-5">
                We provide best leading medical service. Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.
              </p>
              <a href="service.html" className="btn btn-main-2 btn-round-full btn-icon">
                Services<i className="icofont-simple-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-doctor"></i>
                <span className="h3">58</span>k
                <p>Happy People</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-flag"></i>
                <span className="h3">700</span>+
                <p>Surgery Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-badge"></i>
                <span className="h3">40</span>+
                <p>Expert Doctors</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-globe"></i>
                <span className="h3">20</span>
                <p>Worldwide Branch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section service gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center px-4">
                        <div className="section-title">
                            <h2>Award winning patient care</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className={`icofont-${service.icon} text-lg`}></i>
                                    <h4 className="mt-3 mb-3">{service.title}</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section appointment px-16">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="appointment-content">
                            <img src={img3} alt="" className="img-fluid" />
                            <div className="emergency">
                                <h2 className="text-lg">
                                    <i className="icofont-phone-circle text-lg"></i> +23 345 67980
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="appointment-wrap mt-5 mt-lg-0">
                            <h2 className="mb-2 title-color">Book Appointment</h2>
                            <p className="mb-4">
                                Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.
                            </p>
                            <form id="appointment-form" className="appointment-form" method="post" action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control" id="departmentSelect">
                                                <option>Choose Department</option>
                                                <option>Software Design</option>
                                                <option>Development cycle</option>
                                                <option>Software Development</option>
                                                <option>Maintenance</option>
                                                <option>Process Query</option>
                                                <option>Cost and Duration</option>
                                                <option>Modal Delivery</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control" id="doctorSelect">
                                                <option>Select Doctors</option>
                                                <option>Software Design</option>
                                                <option>Development cycle</option>
                                                <option>Software Development</option>
                                                <option>Maintenance</option>
                                                <option>Process Query</option>
                                                <option>Cost and Duration</option>
                                                <option>Modal Delivery</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="date"
                                                id="date"
                                                type="text"
                                                className="form-control"
                                                placeholder="dd/mm/yyyy"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="time"
                                                id="time"
                                                type="text"
                                                className="form-control"
                                                placeholder="Time"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                name="phone"
                                                id="phone"
                                                type="number"
                                                className="form-control"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-2 mb-4">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                <a className="btn btn-main btn-round-full" href="appointment.html">
                                    Make Appointment <i className="icofont-simple-right ml-2"></i>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section testimonial-2 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <h2>We served over 5000+ Patients</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>
                                Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-block style-2 gray-bg">
                            <i className="icofont-quote-right"></i>
                            <div className="testimonial-thumb">
                                <img src={testimonial.image} alt="" className="img-fluid" />
                            </div>
                            <div className="client-info">
                                <h4>{testimonial.title}</h4>
                                <span>{testimonial.name}</span>
                                <p>{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

        <DoctorsSlider/>

        <section className="flex items-center justify-center min-h-screen py-12">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How To Protect Yourself</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="flex items-center">
                    <i className="fas fa-hand-sparkles text-4xl text-blue-600"></i>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Wash your hands</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-head-side-mask text-4xl text-blue-600"></i>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Wear a mask</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-people-arrows text-4xl text-blue-600"></i>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Maintain social distance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-house-user text-4xl text-blue-600"></i>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Stay at home</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
            <img
    src={protect}
    alt="Person wearing a mask"
    className="max-w-[350px] h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
/>

                
            </div>
        </div>
    </div>
</section>

      {/* Other Sections */}
      {/* You can replicate similar JSX structure for the other sections like Features, About, Service, etc. */}
    </div>
    </>
  );
};

export default Home;
