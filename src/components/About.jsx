import React from "react";
import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto border-b-2 p-2">
      <div className="my-20">
        <h1 className="text-xl lg:text-3xl -tracking-tight text-center uppercase mb-12">
          About
        </h1>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
          <div className="mb-8 lg:mb-0">
            <img
              src={aboutImage}
              className="w-full h-auto"
              alt="About VastusSpaze"
            />
          </div>
          <p className="text-lg lg:text-3xl font-light sm:text-center  lg:text-left max-w-5xl mx-auto mt-8 whitespace-pre-line">
            At VastusSpaze, we are passionate about transforming houses into
            beautiful, functional homes. Our team of experienced designers and
            decorators works closely with you to understand your vision and
            lifestyle. We believe every space has the potential to inspire,
            comfort, and reflect your unique personality. From concept to
            completion, we handle every detail with care and creativity. Our
            services include interior design, space planning, and custom decor
            solutions tailored to your needs. We use high-quality materials and
            innovative techniques to ensure lasting results. Whether you want a
            modern makeover or a classic touch, we bring your ideas to life. Our
            portfolio showcases a diverse range of styles, from minimalistic to
            luxurious. We prioritize functionality without compromising on
            aesthetics. Client satisfaction is at the heart of everything we do.
            We offer transparent communication and flexible packages to suit
            every budget. Our process is collaborative, making sure you are
            involved at every step. Let us help you create a home that is both
            beautiful and practical. Discover the difference that expert design
            can make in your everyday living. Welcome to VastusSpaze—where your
            dream home begins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
