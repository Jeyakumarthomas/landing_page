import Pana from "../../assets/bodySectionPNGs/pana.png";

const Calender = () => {
  return (
    <section
      id="Product"
      className="w-full flex flex-col md:flex-row justify-center items-center gap-4 "
    >
      <img
        src={Pana}
        alt="Frame1"
        className="w-96 lg:w-1/3 h-80 lg:h-1/3 p-2 m-2 max-md:mx-auto"
      />

      <div className="my-auto max-sm:mx-auto p-2 md:m-2 md:w-3/4 lg:w-1/2 flex flex-col gap-2">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-grayHead md:leading-11">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="max-sm:text-xs md:leading-5 font-normal text-grayPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="md:w-36 py-2.5 bg-primary text-white rounded-md ">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Calender;
