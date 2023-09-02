import { star } from "../../public/assets/icons";

const Popular_Product_Card = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgUrl} alt="#" />
      <div className="flex mt-8 gap-4">
        <img src={star} alt="#" />
        <p className="text-slate-gray font-montserrat text-xl">(4.5)</p>
      </div>
      <h3 className="mt-2 font-bold font-palanquin text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-coral-red leading-normal font-montserrat text-2xl font-semibold">
        {price}
      </p>
    </div>
  );
};

export default Popular_Product_Card;
