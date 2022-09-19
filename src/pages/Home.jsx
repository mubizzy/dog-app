import React from "react";

const Home = () => {
  useEffect(() => {
    const fetchDogData = async()=>{
        try{
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json();
        console.log(data)
        setDogs(data)
        }catch(error){
        console.error(error)
        }
        }

    }
  
    
  }, [third])
     
  return <div>Home</div>;
};

export default Home;
