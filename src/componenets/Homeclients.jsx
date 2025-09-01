import React, { useEffect, useState } from "react";

import Logo1 from "../assets/clientsLogos/Logo1.png";
import Logo2 from "../assets/clientsLogos/Logo2.png";
import Logo3 from "../assets/clientsLogos/Logo3.png";
import Logo4 from "../assets/clientsLogos/Logo4.png";
import Logo5 from "../assets/clientsLogos/Logo5.png";
import Logo6 from "../assets/clientsLogos/Logo6.png";
import Logo7 from "../assets/clientsLogos/Logo7.png";

const Homeclients = () => {

    const [posts, setPosts] = useState([]);

  // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/post1.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="p-2 w-full flex flex-col gap-4">
      {/* client text  */}
      <div id="Service" className="p-5 flex flex-col gap-2 items-center">
        {/* <div className="text-grayHead font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Our Clients
        </div> */}
      {posts.length === 0 ? (
        <p>Enter a title and its desc...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div className="text-center text-grayHead font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
                  {post.title}
              </div>
          
              <div className="text-grayPara text-center text-xs  md:text-sm lg:text-base">
                {post.description}
              </div>
            </li>
          ))}
        </ul>
      )}
        {/* <div className="text-grayPara text-center text-xs  md:text-sm lg:text-base">
          We have been working with some Fortune 500+ clients
        </div> */}

        {/* client logos */}
        <div className="w-3/4 flex justify-between items-center max-sm:gap-2 md:mt-3">
          <a href="#">
            <img src={Logo1} alt="Logo1" />
          </a>
          <a href="#">
            <img src={Logo2} alt="Logo2" />
          </a>
          <a href="#">
            <img src={Logo3} alt="Logo3" />
          </a>
          <a href="#">
            <img src={Logo4} alt="Logo4" />
          </a>
          <a href="#">
            <img src={Logo5} alt="Logo5" />
          </a>
          <a href="#">
            <img src={Logo6} alt="Logo6" />
          </a>
          <a href="#">
            <img src={Logo7} alt="Logo7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homeclients;
