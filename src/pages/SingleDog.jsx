import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleDog = () => {
  const [dog, setDog] = useState(null);
  const { name } = useParams();
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
  }, [name]);
  return (
    <section className="max-w-5xl mx-auto flex items-center justify-center h-screen"></section>
  );
};

export default SingleDog;
