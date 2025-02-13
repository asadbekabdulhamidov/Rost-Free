import { PiRugDuotone } from "react-icons/pi";

function Card({ imgUrl, productName, text }) {
  return (
    <div className="cursor-pointer p-6 text-center hover:bg-[#f3f3f3]">
      <img
        className="mb-4 w-[314px]"
        src={imgUrl}
        alt={productName + " " + { text }}
      />
      <h4 className="mb-3 font-semibold">{productName}</h4>
      <p className="text-borderColor">{text}</p>
    </div>
  );
}

export default Card;
