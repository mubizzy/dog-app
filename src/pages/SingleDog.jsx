import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchSingleDogData = async () => {
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

    fetchSingleDogData();
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

              <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
                <li>
                  <span className="font-bold text-slate-200">Bred For:</span>{" "}
                  {doggy.bred_for}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Height:</span>{" "}
                  {doggy.height.metric} cm
                </li>
                <li>
                  <span className="font-bold text-slate-200">Weight:</span>{" "}
                  {doggy.weight.metric} kgs
                </li>
                <li>
                  <span className="font-bold text-slate-200">Breed Group:</span>{" "}
                  {doggy.breed_group}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Lifespan:</span>{" "}
                  {doggy.life_span}
                </li>
                <li>
                  <span className="font-bold text-slate-200">Temperament:</span>{" "}
                  {doggy.temperament}
                </li>
              </ul>

              <Link
                to="/"
                className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
};

export default SingleDog;
