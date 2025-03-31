import { useState } from "react";

const UpdateItem = ({ item, apiUri }) => {
  const [updatedValue, setUpdatedValue] = useState(item.name);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  const handleUpdate = () => {
    fetch(`${apiUri}/${item.id}`, {
      method: "PUT", // Or "PATCH" for partial updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: updatedValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update item");
        }
        return response.json();
      })
      .then(() => {
        setMessage("Item updated successfully!");
      })
      .catch(() => setMessage("Failed to update item"));
  };

  return (
    <div>
      <h2>Update Door</h2>
      <p>Current Name: {item.name}</p>
      <input type="text" value={updatedValue} onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
