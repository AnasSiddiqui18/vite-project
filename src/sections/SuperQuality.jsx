import { shoe8 } from "../../public/assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section className="about-us flex flex-col xl:flex-row gap-10 justify-between items-center  max-container ">
      <div>
        <h2 className="font-palanquin  capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11 flex">
          <Button label="View details" />
        </div>
      </div>
      <div>
        <img src={shoe8} alt="#" />
      </div>
    </section>
  );
}

export default SuperQuality;
