"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import { FaGithub, FaLinkedin, FaHackerrank, FaKaggle } from "react-icons/fa";

import Tooltip from "./Tooltip";

const MagicOcean = ["Data Scientist", "Programmer", "Web Developer"];
let index = 0;

const About = () => {
  const [magicName, setMagicName] = useState("Data Scientist");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const role = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 3000) as NodeJS.Timeout;

    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, [magicName]);
  return (
    <main
      id="about"
      className="py-32 md:py-10 lg:py-15 px-3 md:px-8 lg:px-10 transition-all duration-500 ease-in-out bg-blue-100 hover:bg-blue-200"
    >
      <div className="flex justify-center">
        <Tooltip text="GitHub">
          <a
            href="https://github.com/viraj19r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl text-black md:text-4xl hover:text-blue-500 mx-2" />
          </a>
        </Tooltip>

        <Tooltip text="HackerRank">
          <a
            href="https://www.hackerrank.com/viraj19r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank className="text-4xl text-black md:text-4xl hover:text-blue-500 mx-2" />
          </a>
        </Tooltip>
        <Tooltip text="Kaggle">
          <a
            href="https://www.kaggle.com/iitm21f1003723"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKaggle className="text-4xl text-black md:text-4xl hover:text-blue-500 mx-2" />
          </a>
        </Tooltip>
        <Tooltip text="LinkedIn">
          <a
            href="https://linkedin.com/in/viraj19r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-black md:text-4xl hover:text-blue-500 mx-2" />
          </a>
        </Tooltip>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
        <div className="space-y-6 md:space-y-8 lg:w-1/2">
          <div className="text-center lg:text-left text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
            Viraj Sharma
          </div>

          <div className="text-center lg:text-left text-xl md:text-2xl font-medium text-white bg-blue-600 rounded-full py-2 px-4 mx-auto lg:mx-0 w-max hover:bg-blue-300 hover:text-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
            {role}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900 px-6 py-4 lg:mx-0 mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              About Me
            </h3>
            <div className="h-1 w-20 bg-blue-500 rounded my-2"></div>
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
              Passionate Data Enthusiast with a thirst for knowledge and a keen
              interest in Data Science and Machine Learning, dedicated to
              continuous learning and making meaningful contributions in the
              field.
            </p>
          </div>
        </div>

        <Image
          src="/viraj.PNG"
          alt="Viraj Sharma Picture"
          className="rounded-full mt-8 lg:mt-0 object-cover border-4 border-blue-400 shadow-lg transition-all duration-500 ease-in-out hover:border-blue-600 hover:shadow-xl lg:ml-10"
          width={400}
          height={400}
          style={{ aspectRatio: "300 / 300" }}
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center mt-20">
        <a
          href="/resume.pdf"
          download="Resume_Viraj_Sharma.pdf"
          className="text-white bg-red-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 ease-in-out"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
};

export default About;
