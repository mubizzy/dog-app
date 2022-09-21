import React, { useState, useEffect } from "react";

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // searchForDog();
    // setSearched(true);
  };

  return (
    <>
      {!dogs ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center  text-center px-5 text-3xl font-bold  lg:text-5xl text-white">
                The Dog App
              </h1>
              <p className="my-8 text-white">
                This application is powered by{" "}
                <a
                  href="https://thedogapi.com"
                  className="text-indigo-600 underline active:text-orange-400"
                >
                  The Dog Api
                </a>
              </p>

              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a dog / breed"
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
              <Link
                to={`/${dog.name}`}
                key={dog.id}
                className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
              >
                {dogs.map((dog) => (
                  <article key={dog.id}>
                    <img src={dog.image.url} alt={dog.name} />
                    <h3>{dog.name}</h3>
                    <p>Bred For:{dog.bred_for}</p>
                  </article>
                ))}
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
