import { useState } from "react";
// import ReactDOM from "react-dom/client";

export function MyForm() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  const handleClick = () => {
    alert(`${name} You have successfully subscribed to the recipe list!`);
    name = " ";
    email = " ";
  };

  return (
    <form className="flex-container">
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Enter your email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" onClick={handleClick} />
    </form>
  );
}