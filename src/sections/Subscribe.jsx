import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex flex-row max-lg:flex-col justify-between gap-10 items-center">
      <h3 className="font-palanquin text-4xl leading-[68px]  lg:max-w-md font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray  rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="outline-none max-sm:border  rounded-full input"
        />
        <div className="sm:flex sm:justify-end ">
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
