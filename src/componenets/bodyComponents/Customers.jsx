import { useEffect, useState } from "react";

import Tesla from "../../assets/bodySectionPNGs/tesla.png";
import Right from "../../assets/bodySectionPNGs/Right.png";
import Logo1 from "../../assets/clientsLogos/Logo1.png";
import Logo2 from "../../assets/clientsLogos/Logo2.png";
import Logo3 from "../../assets/clientsLogos/Logo3.png";
import Logo4 from "../../assets/clientsLogos/Logo4.png";
import Logo5 from "../../assets/clientsLogos/Logo5.png";
import Logo6 from "../../assets/clientsLogos/Logo6.png";

const Customers = () => {
  const [posts, setPosts] = useState([]);

  // ✅ Fetch posts from PHP API
  useEffect(() => {
    fetch("http://localhost/landingpage/bcustomers.php")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    // <div className='border-2 w-full py-8 md:px-10 flex flex-col md:flex-row gap-[78px] bg-silver'>

    //     <div className='border-2 w-full sm:basis-1/3 flex justify-center align-center'>
    //         <img src={Tesla} alt="" className=''/>
    //     </div>

    //      <div className='border-2 w-full md:basis-2/3  flex flex-col items-center gap-8'>
    //         <div className=''>
    //             <p className='text-grayPara font-normal max-sm:line-clamp-2 sm:line-clamp-3 lg:line-clamp-5'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
    //             <div className=''>
    //                 <h4 className='font-semibold text-xl leading-7 text-primary flex items-center'>Tim Smith</h4>
    //                 <p className='font-normal leading-6 flex items-center text-[#89939E]'>British Dragon Boat Racing Association</p>
    //             </div>
    //         </div>
    //         <div className=''>
    //             <div className=''>
    //                 <img src={Logo1} alt="Logos" className='h-12 w-12'/>
    //                 <img src={Logo2} alt="Logos" className='h-12 w-12'/>
    //                 <img src={Logo3} alt="Logos" className='h-12 w-12'/>
    //                 <img src={Logo4} alt="Logos" className='h-12 w-12'/>
    //                 <img src={Logo5} alt="Logos" className='h-12 w-12'/>
    //                 <img src={Logo6} alt="Logos" className='h-12 w-12'/>
    //             </div>
    //             <h4 className=' p-2 min-h-[44px] flex gap-2 text-primary items-center font-semibold    '>Meet all customers <img src={Right} alt="" /></h4>
    //         </div>
    //     </div>
    // </div>
    <section
      id="Feature"
      className="w-full flex flex-col md:flex-row  justify-center items-center gap-4 "
    >
      <img
        src={Tesla}
        alt="Tesla Image"
        className="w-96 sm:w-1/3 h-80 sm:h-1/2  p-2 m-2 max-md:mx-auto"
      />

      <div className="my-auto p-2 sm:p-0 max-sm:mx-auto md:m-2 md:w-3/4 xl:min-h-96 flex flex-col gap-2 xl:gap-10">
        {/* <p className="text-grayPara font-normal max-sm:line-clamp-2 sm:line-clamp-3 lg:line-clamp-5">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p> */}
              {posts.length === 0 ? (
        <p>Enter a title and its desc...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {/* <h3>{post.paragraph}</h3> */}
              <p className="text-grayPara font-normal max-sm:line-clamp-2 sm:line-clamp-3 lg:line-clamp-5">{post.paragraph}</p>
              <div className="lg:mt-4 lg:space-y-3">
              {/* <h3>{post.name}</h3> */}
              <h4 className="font-semibold text-xl leading-7 text-primary flex items-center">{post.name}</h4>
              {/* <p>{post.describtion}</p> */}
              <p className="font-normal leading-6 flex items-center text-[#89939E]">{post.describtion}</p> 
              </div>
            </li>
          ))}
        </ul>
      )}
          {/* <h4 className="font-semibold text-xl leading-7 text-primary flex items-center">
            Tim Smith
          </h4> */}
          {/* <p className="font-normal leading-6 flex items-center text-[#89939E]">
            British Dragon Boat Racing Association
          </p> */}
        
        <div className="flex flex-col xl:flex-row items-center justify-between gap-2">
          <div className="w-full flex justify-between">
            <img src={Logo1} alt="Logos" className="h-12 w-12" />
            <img src={Logo2} alt="Logos" className="h-12 w-12" />
            <img src={Logo3} alt="Logos" className="h-12 w-12" />
            <img src={Logo4} alt="Logos" className="h-12 w-12" />
            <img src={Logo5} alt="Logos" className="h-12 w-12" />
            <img src={Logo6} alt="Logos" className="h-12 w-12" />
          </div>
          <h4 className="p-2 w-full  xl:w-1/4 md:shrink-0 flex gap-2 text-primary  font-semibold  relative  ">
            Meet all customers{" "}
            <img src={Right} alt="" className="absolute right-5 top-4.5" />{" "}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Customers;

// <div className=' w-full py-8 px-11 flex gap-[78px] bg-silver'>

//      {/* Left Side  */}
//  <div className=' w-1/3 flex justify-end '>
//         <img src={Tesla} alt="" className=' '/>
//     </div>

//      {/* Right Side  */}
//      <div className='w-2/3 min-h-[324px] flex flex-col items-center gap-8'>
//         <div className=' w-[748px]  flex flex-col gap-4'>
//             <p className=''>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
//             <div className=' w-[748px] min-h-[60px] flex flex-col'>
//                 <h4 className='font-semibold text-xl leading-7 text-primary flex items-center'>Tim Smith</h4>
//                 <p className='font-normal leading-6 flex items-center text-[#89939E]'>British Dragon Boat Racing Association</p>
//             </div>
//         </div>
//         <div className=' flex gap-8 min-h-12 w-[748px]'>
//             <div className='flex min-h-12 min-w-[493px] gap-[41px]'>
//                 <img src={Logo1} alt="Logos" className='h-12 w-12'/>
//                 <img src={Logo2} alt="Logos" className='h-12 w-12'/>
//                 <img src={Logo3} alt="Logos" className='h-12 w-12'/>
//                 <img src={Logo4} alt="Logos" className='h-12 w-12'/>
//                 <img src={Logo5} alt="Logos" className='h-12 w-12'/>
//                 <img src={Logo6} alt="Logos" className='h-12 w-12'/>
//             </div>
//             <h4 className=' p-2 min-h-[44px] flex gap-2 text-primary items-center font-semibold    '>Meet all customers <img src={Right} alt="" /></h4>
//         </div>
//     </div>
// </div>
