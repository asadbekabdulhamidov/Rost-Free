//uuid
import { v4 as uuidv4 } from "uuid";

function Image({ logos }) {
  return (
    <div className="align-elements flex flex-wrap items-center justify-around gap-10">
      {logos &&
        logos.map((logo) => {
          return (
            <img
              key={logo.id}
              crossOrigin="anonymous"
              src={logo?.photo}
              alt="brand logo"
            />
          );
        })}
    </div>
  );
}

export default Image;
