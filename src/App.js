import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Item from "./components/Item";
import Loading from "./components/Loading";

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
    console.log();
    setTours(respnonse.data);
    console.log("Hello");
    setIsLoading(false);
  };

  useEffect(() => {
    axios();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (tours.length === 0) {
    return (
      <div className="App">
        <h1>No Tours Left</h1>
        <button onClick={() => axios()} className="refresh__button">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Item tours={tours} click={notInterested} />
    </div>
  );
}

export default App;
