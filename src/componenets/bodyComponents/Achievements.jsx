import Img1 from "../../assets/bodySectionPNGs/Vector1.png";
import Img2 from "../../assets/bodySectionPNGs/Vector2.png";
import Img3 from "../../assets/bodySectionPNGs/Vector3.png";
import Img4 from "../../assets/bodySectionPNGs/Vector4.png";

const Achievements = () => {
  return (
    <section
      id="Product"
      className="w-full px-4 lg:px-16 py-2 lg:py-36 flex flex-col lg:flex-row gap-10 lg:gap-4 justify-center items-center bg-silver "
    >
      {/* Left */}
      <div className="w-full lg:w-1/2 flex flex-col lg:items-center gap-2">
        <h2 className="font-semibold max-md:text-2xl md:text-4xl max-sm:text-center text-grayHead md:leading-11">
          Helping a local
          <br /> <span className="text-primary">business reinvent itself</span>
        </h2>
        <p className=" font-normal max-sm:text-center text-grayClientBG leading-6">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Right */}

      <div className="p-2 w-full lg:w-1/2 grid sm:grid-cols-2 gap-2">
        <div className="flex gap-5 items-center">
          <img src={Img1} alt="vectorIcon" className="lg:w-11 lg:h-8" />
          <div>
            <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl text-grayHead">
              2,245,341
            </h3>
            <p className="font-normal  text-grayPara">Members</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <img src={Img2} alt="vectorIcon" className="lg:w-11 lg:h-8" />
          <div>
            <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl text-grayHead">
              46,328
            </h3>
            <p className="font-normal  text-grayPara">clubs</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src={Img3} alt="vectorIcon" className="lg:w-11 lg:h-8" />
          <div>
            <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl text-grayHead">
              828,867
            </h3>
            <p className="font-normal  text-grayPara">Event Booking</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src={Img4} alt="vectorIcon" className="lg:w-11 lg:h-8" />
          <div>
            <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl text-grayHead">
              1,926,,436
            </h3>
            <p className="font-normal  text-grayPara">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
