import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Item from "./components/Item";

// const api = axios.create({
//   baseURL: "https://course-api.com/react-tours-project",
// });

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://course-api.com/react-tours-project";

  const notInterested = (num) => {
    let remove = tours.filter((data) => data.id !== num);
    console.log(remove);
    setTours(remove);
  };

  const axios = async () => {
    const respnonse = await Axios.get(url);
    setIsLoading(false);
    setTours(respnonse.data);
  };

  useEffect(() => {
    axios();
  }, []);
  console.log(tours);

  if (tours.length === 0) {
    let refresh = (
      <div>
        <h2>No Tours Left</h2>
        <button>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Item tours={tours} click={notInterested} />
      )}
      {tours.length === 0 && isLoading === false ? (
        <div>
          <h1>No Tours Left</h1>
          <button onClick={() => axios()} className="refresh__button">
            Refresh
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
