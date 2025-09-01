import { useEffect, useState } from "react";

import Image1 from "../../assets/bodySectionPNGs/image1.png";
import Image2 from "../../assets/bodySectionPNGs/image2.png";
import Image3 from "../../assets/bodySectionPNGs/image3.png";

const CommunityUpdates = () => {

    const [posts, setPosts] = useState([]);

  // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/bcommunityupdates.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      id="Testimonial"
      className="p-2  w-full flex flex-col gap-4 items-center"
    >
      {/* Top */}
      <div className="p-2 flex flex-col w-full items-center gap-2">
        {/* <h2 className="w-full font-normal sm:font-semibold text-xl sm:text-2xl md:text-4xl leading-11 text-center text-grayHead">
          Caring is the new marketing
        </h2> */}
              {posts.length === 0 ? (
        <p>Enter a title and its desc...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* <h3>{post.title}</h3> */}
              <h2 className="w-full font-normal sm:font-semibold text-xl sm:text-2xl md:text-4xl leading-11 text-center text-grayHead">{post.title}</h2>
             
              {/* <p>{post.description}</p> */}
              <p className="mx-auto w-full lg:w-2/3 p-2 text-sm sm:text-base font-normal leading-4 sm:leading-6 text-center text-grayPara ">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
        {/* <p className="w-full lg:w-2/3 p-2 text-sm sm:text-base font-normal leading-4 sm:leading-6 text-center text-grayPara ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p> */}
      </div>

      {/* Bottom*/}
      <div className="p-2 w-full flex flex-wrap items-center justify-around gap-2 sm:gap-8">
        <div className="w-[23rem] h-[22.5rem] order-1">
          <div className=" sm:w-[23rem] h-[17.5rem] flex flex-col items-center rounded-lg relative">
            <img src={Image1} alt="" className="" />
            <div className="p-4 max-sm:w-5/6 max-sm:min-h-44 sm:min-w-[19.5rem] sm:min-h-44 flex flex-col gap-4 rounded-lg bg-white  absolute top-45 shadow-lg">
              <div className="grid gap-5">
                <h4 className="font-semibold text-xl leading-7 text-grayHead text-center">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h4>
                <button className="text-primary font-semibold text-xl">
                  Readmore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[23rem] h-[22.5rem] order-2">
          <div className=" sm:w-[23rem] h-[17.5rem] flex flex-col items-center rounded-lg relative">
            <img src={Image2} alt="" className="" />
            <div className="p-4 max-sm:w-5/6 max-sm:min-h-44 sm:min-w-[19.5rem] sm:min-h-44 flex flex-col gap-4 rounded-lg bg-white  absolute top-45 shadow-lg">
              <div className="grid gap-5">
                <h4 className="font-semibold text-xl leading-7 text-grayHead text-center">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h4>
                <button className="text-primary font-semibold text-xl">
                  Readmore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[23rem] h-[22.5rem] order-3">
          <div className=" sm:w-[23rem] h-[17.5rem] flex flex-col items-center rounded-lg relative">
            <img src={Image3} alt="" className="" />
            <div className="p-4 max-sm:w-5/6 max-sm:min-h-44 sm:min-w-[19.5rem] sm:min-h-44 flex flex-col gap-4 rounded-lg bg-white  absolute top-45 shadow-lg">
              <div className="grid gap-5">
                <h4 className="font-semibold text-xl leading-7 text-grayHead text-center">
                  Revamping the Membership Model with Triathlon Australia
                </h4>
                <button className="text-primary font-semibold text-xl">
                  Readmore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdates;
