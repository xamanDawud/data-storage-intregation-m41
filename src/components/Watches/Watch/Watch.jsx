const Watch = ({ watch }) => {
  let { brand, model, price, movement, case_material, image_url } = watch;
  //   console.log(watch);
  return (
    <div>
      <img src={image_url} alt="" />
      <h3>{brand}</h3>
      <p>{model}</p>
      <p>{movement}</p>
      <p>{case_material}</p>
      <p>{price}</p>
    </div>
  );
};

export default Watch;
