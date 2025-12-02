import { useEffect } from "react";

const getCharacters = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

function HomePage() {
  useEffect(() => {
    getCharacters();
  }, []);

  return <section className="home-page"></section>;
}
export default HomePage;
