import React, { useState, useEffect } from "react";

const Home = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        console.log(data);
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);

  return (
    <>
      {dogs ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-white">
                The Dog App
              </h1>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
