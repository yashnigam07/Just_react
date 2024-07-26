import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      “Your Logo” - A React Router Learning Project
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Welcome to “Your Logo,” a web application built as part of my journey to master React Router. In this project, I explore routing techniques, navigation, and dynamic content rendering. Whether you’re a beginner or an experienced developer, “Your Logo” provides insights into creating efficient and seamless navigation within your React applications.
                      </p>
                      <p className="mt-4 text-gray-600">
                      “The best thing about a boolean is even if you are wrong, you are only off by a bit.” 
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}