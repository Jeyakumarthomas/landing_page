import React, { useEffect, useState } from "react";

import Illustration from "../assets/Illustration.png";

const Homehero = () => {

   const [posts, setPosts] = useState([]);

  // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/posts.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);



  return (
    <section className="p-2 sm:p-10 w-full bg-silver space-y-5  flex flex-col items-center sm:flex-row gap-2">
      <div className="m-auto space-y-6 flex flex-col items-center sm:justify-center  sm:items-start xl:w-2/4">
        {/* <h1 className="font-semibold text-3xl md:4xl lg:text-6xl max-sm:text-center  text-grayHead  ">
          Lessons and insights
          <br /> <span className="text-primary">from 8 years</span>
        </h1> */}
    {posts.length === 0 ? (
        <p>Enter a title</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h1 className="font-semibold text-3xl md:4xl lg:text-6xl max-sm:text-center  text-grayHead  ">{post.title}<br /> <span className="text-primary">{post.title1}</span></h1>
              <p className="lg:mt-2 text-grayPara text-xs sm:text-sm max-sm:text-center">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
        {/* <p className=" text-grayPara text-xs sm:text-sm max-sm:text-center">
          Where to grow your business as a photographer: site or social media?
        </p> */}
        <button className="bg-primary text-sm  text-white px-4 lg:px-10 py-2 lg:py-4 rounded-sm ">
          Register
        </button>
      </div>

      <img
        src={Illustration}
        alt="Illustration"
        className=" w-80 h-80 sm:w-1/3 sm:h-1/3 xl:w-1/4 mx-auto lg:mx-0 lg:mr-auto"
      />
    </section>
  );
};

export default Homehero;
