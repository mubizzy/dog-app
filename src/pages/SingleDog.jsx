import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleDog = () => {
  const [dog, setDog] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
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
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        {dog.map((doggy) => (
          <div
            key={doggy.id}
            className='grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"'
          >
            <article>
              <img
                src={`https://cdn2.thedogapi.com/images/${doggy.reference_image_id}.jpg`}
                alt={doggy.name}
              />
            </article>
            <article>
              <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
                {doggy.name}
              </h1>
              {doggy.description && (
                <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
                  {doggy.description}
                </p>
              )}
            </article>
          </div>
        ))}
      </section>
    </>
  );
};

export default SingleDog;
