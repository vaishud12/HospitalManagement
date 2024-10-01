import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="bg-gray-200 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="mailto:support@gmail.com" className="flex items-center text-blue-500">
              <i className="icofont-support-faq mr-2"></i>
              support@novena.com
            </a>
            <span className="flex items-center text-blue-500">
              <i className="icofont-location-pin mr-2"></i>
              Address Ta-134/A, New York, USA
            </span>
          </div>
          <a href="tel:+23-345-67890" className="text-sm text-blue-500">
            <span>Call Now:</span>
            <span className="font-bold"> 823-4565-13456</span>
          </a>
        </div>
      </div>
      <nav className="bg-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="Logo" className="h-12" />
          </a>
          <button
            className="navbar-toggler focus:outline-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="flex space-x-6">
              <li>
                <a className="text-blue-500 hover:text-blue-700" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-700" href="about.html">
                  About
                </a>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-700" href="service.html">
                  Services
                </a>
              </li>
              <li className="relative group">
                <a className="text-blue-500 hover:text-blue-700" href="department.html">
                  Department <i className="icofont-thin-down"></i>
                </a>
                <ul className="absolute left-0 hidden bg-white shadow-lg group-hover:block">
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="department.html">
                      Departments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="department-single.html">
                      Department Single
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a className="text-blue-500 hover:text-blue-700" href="doctor.html">
                  Doctors <i className="icofont-thin-down"></i>
                </a>
                <ul className="absolute left-0 hidden bg-white shadow-lg group-hover:block">
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="doctor.html">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="doctor-single.html">
                      Doctor Single
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="appoinment.html">
                      Appointment
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a className="text-blue-500 hover:text-blue-700" href="blog-sidebar.html">
                  Blog <i className="icofont-thin-down"></i>
                </a>
                <ul className="absolute left-0 hidden bg-white shadow-lg group-hover:block">
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="blog-sidebar.html">
                      Blog with Sidebar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-blue-500 hover:text-blue-700" href="blog-single.html">
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-700" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
