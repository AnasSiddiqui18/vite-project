import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="text-center max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>

      <p className="info-text max-w-lg m-auto mt-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex max-lg:flex-col max-lg:gap-10  mt-24">
        {reviews.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              imgUrl={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
