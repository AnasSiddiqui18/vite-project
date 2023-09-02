import { star } from "../../public/assets/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center flex-col m-auto">
      <img src={imgUrl} alt="#" className="rounded-full w-[120px] h-[120px]" />
      <p className="info-text text-center max-w-sm mt-6">{feedback}</p>

      <div className="flex gap-3">
        <img src={star} alt="#" width={24} height={24} />
        <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
      </div>

      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
