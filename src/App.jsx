import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);
  const doorId = 1; // Change this ID if needed

  useEffect(() => {
    fetch(`${API_URI}/${doorId}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching door:", error));
  }, []);

  return item ? <UpdateItem item={item} apiUri={API_URI} /> : <p>Loading...</p>;
}

export default App;
