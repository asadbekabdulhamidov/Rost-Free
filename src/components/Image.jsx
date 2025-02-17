//uuid
import { v4 as uuidv4 } from "uuid";

function Image({ logos }) {
  return (
    <div className="align-elements flex flex-wrap items-center justify-around">
      {logos.map((logo) => {
        return <img key={uuidv4()} src={logo} alt="brand logo" />;
      })}
    </div>
  );
}

export default Image;
