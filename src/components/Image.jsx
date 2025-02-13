function Image({ logos }) {
  return (
    <div className="align-elements flex flex-wrap items-center justify-around">
      {logos.map((logo) => {
        return <img src={logo} alt="brand logo" />;
      })}
    </div>
  );
}

export default Image;
