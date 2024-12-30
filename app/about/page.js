import React from "react";

const About = () => {
  return (
    <div className="p-8 font-sans leading-relaxed bg-gradient-to-r text-black from-purple-500  to-pink-400">
      <div className="flex flex-col md:flex-row items-center mb-16 px-3">
        <img
          src="https://png.pngtree.com/png-vector/20241023/ourlarge/pngtree-transparent-computer-learning-girl-png-image_13523179.png"
          className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-6 border-4 border-blue-400"
        />
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-5xl font-extrabold mb-10">About Us</h1>
          <p className="text-lg px-56">
            Welcome to JamsrWorld! We specialize in building innovative software
            solutions and cutting-edge tools like JamsrUI and JamsrPay. Our
            mission is to empower developers and businesses by providing
            seamless and reliable technology.
          </p>
        </div>
        <div>
          <img
            className="w-[30rem]  object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-6 border-4 border-green-400"
            src="https://i.pinimg.com/564x/4a/43/da/4a43da03892a2dc31b77e7e1f7853676.jpg"
            width={400}
            alt=""
          />
        </div>
      </div>

      <div className="mb-8 ">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p>
          At JamsrWorld, we envision a future where technology bridges gaps and
          opens opportunities for everyone. With a focus on creativity and
          functionality, we aim to redefine software standards.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            JamsrUI: A modern UI components library for Next.js developers.
          </li>
          <li>JamsrPay: A secure and efficient payment gateway solution.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          Have questions or want to collaborate? Reach out to us via our website
          at
          <a
            href="https://jamsrworld.com"
            className="text-blue-600 underline ml-1 hover:text-white"
          >
            jamsrworld.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
