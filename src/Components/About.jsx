// import React from 'react';
import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen my-24">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            {/* <img src={person} className="max-w-sm rounded-lg shadow-2xl" /> */}
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            {/* <img src={parts} className="max-w-sm rounded-lg shadow-2xl" /> */}
            <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl font-bold text-orange-600">About Us!</h3>
            <h2 className="text-5xl font-bold">We are qualified & experienced in this field</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning bg-orange-500">More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
