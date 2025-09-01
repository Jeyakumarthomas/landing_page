import { useEffect, useState } from "react";
import Right from "../../assets/bodySectionPNGs/Right.png";
import Down from "../../assets/bodySectionPNGs/Down.png";

const footerFrame = () => {

    const [posts, setPosts] = useState([]);

  // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/footerframe.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      {/* <h2 className=" w-full py-8 flex flex-col gap-8 font-semibold text-3xl md:text-4xl lg:text-6xl leading-[4.6rem] text-[#263228] text-center">
        Pellentesque suscipit fringilla libero eu.
      </h2> */}
        {posts.length === 0 ? (
        <p>Enter a title and its desc...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* <h3>{post.title}</h3> */}
              <h2 className=" w-full py-8 flex flex-col gap-8 font-semibold text-3xl md:text-4xl lg:text-6xl leading-[4.6rem] text-[#263228] text-center">{post.title}</h2>
            </li>
          ))}
        </ul>
      )}
      <div className="py-2.5 sm:py-3.5 px-4 sm:px-8 flex items-center bg-primary rounded-sm gap-2 ">
        <button className="text-white leading-3 font-medium">Get a Demo</button>
        <img src={Down} alt="" className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default footerFrame;
