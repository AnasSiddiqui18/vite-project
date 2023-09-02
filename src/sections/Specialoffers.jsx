import { arrowRight } from "../../public/assets/icons";
import { offer } from "../../public/assets/images";
import Button from "../components/Button";

const Specialoffers = () => {
  return (
    <section className="flex justify-between items-center gap-10 max-container max-xl:flex-col-reverse ">
      <div className="flex-1">
        <img src={offer} alt="#" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 mt-11 flex-wrap ">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            textColor="text-black"
            backgroundColor="bg-white"
            borderColor="border-2 border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default Specialoffers;
