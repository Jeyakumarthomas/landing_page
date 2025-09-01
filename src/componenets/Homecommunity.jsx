import React, { useEffect, useState } from "react";
import Icon1 from "../assets/communityIcons/Icon1.png";
import Icon2 from "../assets/communityIcons/Icon2.png";
import Icon3 from "../assets/communityIcons/Icon3.png";

const Homecommunity = () => {

    const [posts, setPosts] = useState([]);

      // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/post2.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="w-full p-2 flex flex-col gap-4 items-center">
      {/* community Text */}
      <div className="flex flex-wrap flex-col justify-center items-center gap-5">
        {/* <h2 className="md:w-[33rem] h-20 font-normal md:font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-grayHead md:leading-11">
          Manage your entire community in a single system
        </h2> */}
      {posts.length === 0 ? (
        <p>Enter a title and its desc...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* <h3>{post.title}</h3> */}
              <h2 className="md:w-[33rem] h-20 font-normal md:font-semibold text-2xl sm:text-3xl md:text-4xl text-center text-grayHead md:leading-11">{post.title}</h2>
              {/* <p>{post.description}</p> */}
              <p className="mt-2 text-xs sm:text-sm md:text-base font-normal text-center text-grayPara md:leading-6">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
        {/* <p className="text-xs sm:text-sm md:text-base font-normal text-center text-grayPara md:leading-6">
          Who is Nextcent suitable for?
        </p> */}
      </div>

      {/* community frame */}

      <div className="w-full md:w-3/4">
        <div className=" border-red-500 flex flex-col md:flex-row items-center md:flex-wrap px-6 py-8 gap-2 md:justify-around">
          {/* 1 */}
          <div className="w-72 h-64 flex flex-col gap-4 items-center shadow-lg">
            <div className="w-64 h-36 flex flex-col items-center justify-around ">
              <a href="">
                <img src={Icon1} alt="communityIcons" />
              </a>
              <div className="text-center font-medium md:font-bold leading-6 md:leading-9 text-2xl md:text-[1.75rem] text-grayHead">
                Membership Organisations
              </div>
            </div>
            <div className="font-normal text-sm leading-5 text-center w-[15.7rem] text-grayPara">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>

          {/* 2 */}
          <div className="w-72 h-64 flex flex-col gap-4 items-center shadow-lg">
            <div className="w-64 h-36 flex flex-col items-center justify-around ">
              <a href="">
                <img src={Icon2} alt="communityIcons" />
              </a>
              <div className="text-center font-medium md:font-bold leading-6 md:leading-9 text-2xl md:text-[1.75rem] text-grayHead">
                National Associations
              </div>
            </div>
            <div className="font-normal text-sm leading-5 text-center w-[15rem] text-grayPara">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>

          {/* 3 */}
          <div className="w-72 h-64 flex flex-col gap-4 items-center shadow-lg">
            <div className="w-64 h-36 flex flex-col items-center justify-around">
              <a href="">
                <img src={Icon3} alt="communityIcons" />
              </a>
              <div className="text-center font-medium md:font-bold leading-6 md:leading-9 text-2xl md:text-[1.75rem] text-grayHead">
                Clubs And Groups
              </div>
            </div>
            <div className="font-normal text-sm leading-5 text-center w-[15.7rem] text-grayPara">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecommunity;
