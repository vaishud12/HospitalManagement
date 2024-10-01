import React, { useRef } from 'react';
import './DoctorSlider.css'; // Optional, if you have custom styles
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import imgd from "../images/team/imgd.jpg"
import img2 from "../images/team/img2.jpg"
const profiles = [
    {
        name: "Dr.Shraddha Jadhav",
        specialty: "Cardiologist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin",
        image: img2,
        alt: "Image of Dr. Jelin Alis",
    },
    {
        name: "Dr. Lekha Jadhav",
        specialty: "Cosmotologist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin",
        image:imgd,
        alt: "Image of Dr. Jemse Watson",
    },
    {
        name: "Dr.Sanjiv Jadhav",
        specialty: "Surgery Specialist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin",
        image: imgd,
        alt: "Image of Dr. Neels Bore",
    }
];

const ProfileCard = ({ profile }) => {
    return (
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
            <div className="relative mb-4">
                <img src={profile.image} alt={profile.alt} className="w-40 h-40 rounded-full mx-auto" />
            </div>
            <h2 className="text-xl font-bold mb-2">{profile.name}</h2>
            <h3 className="text-green-600 mb-2">{profile.specialty}</h3>
            <p className="text-gray-600 mb-4">{profile.description}</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-600"><FaFacebookF /></a>
                <a href="#" className="text-green-600"><FaTwitter /></a>
                <a href="#" className="text-green-600"><FaPinterest /></a>
                <a href="#" className="text-green-600"><FaInstagram /></a>
            </div>
        </div>
    );
};

const DoctorSlider = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
    };

    return (
        <div className="relative p-8">
            <div className="slider flex" ref={sliderRef}>
                {profiles.map((profile, index) => (
                    <div key={index} className="slider-item p-4">
                        <ProfileCard profile={profile} />
                    </div>
                ))}
            </div>
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default DoctorSlider;
