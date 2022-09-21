import React, { useState, useEffect } from "react";

const SingleDog = () => {
  const [dog, setDog] = useState(null);
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        console.log(data);
        setDog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);
  return <div>SingleDog</div>;
};

export default SingleDog;
