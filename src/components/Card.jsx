import { PiRugDuotone } from "react-icons/pi";

function Card({ product }) {
  return (
    <div className="cursor-pointer border-b-[2px] border-r-[2px] border-[#C6C6C6] p-6 text-center hover:bg-[#f3f3f3]">
      <div className="h-[314px] w-[314px]">
        <img
          crossOrigin="anonymous"
          className="object-fill"
          src={product?.media[0]?.photos[0]}
          alt=""
        />
      </div>
      <h4 className="mb-3 font-semibold">{product?.title}</h4>
      <p className="w-[314px] overflow-hidden whitespace-nowrap text-borderColor">
        {product?.desc}
      </p>
    </div>
  );
}

export default Card;
