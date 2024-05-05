// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-24">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-orange-600">Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reiciendis aut nulla, ipsam mollitia autem maxime fugit dicta minus
          natus voluptates esse praesentium officia quo cupiditate perspiciatis
          odio impedit minima?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
