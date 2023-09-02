import Button from "../components/Button";
import arrowRight from "../../public/assets/icons/arrow-right.svg";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../../public/assets/images";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="flex flex-col xl:flex-row w-full  min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3  z-20 relative">Nike</span>
          {""} Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex gap-16 mt-20 flex-wrap w-full">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          width={610}
          height={502}
          className="object-contain relative z-10"
          id="shoe-img"
        />

        <div className="flex sm:gap-6 gap-4  absolute -bottom-[6%] sm:left-[10%]  max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
