import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex  max-sm:flex-col justify-center gap-9 flex-wrap">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgUrl={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
