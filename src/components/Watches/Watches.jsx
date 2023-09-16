import { useEffect, useState } from "react";
import Watch from "./Watch/Watch";

const Watches = () => {
  let [watchess, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data.watches));
  }, []);
  //   console.log(watchess.watches);

  return (
    <div>
      {watchess.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </div>
  );
};

export default Watches;
