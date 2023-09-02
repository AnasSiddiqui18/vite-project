import { products } from "../constants";
import Popular_Product_Card from "../components/Popular_Product_Card";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt12">
      <div className="flex flex-col justify-start  gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 mt-16">
          {products.map((Product) => (
            <Popular_Product_Card
              key={Product.name}
              imgUrl={Product.imgURL}
              name={Product.name}
              price={Product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
