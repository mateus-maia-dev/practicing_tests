import { useState } from "react";
import { Button } from "../Button";

export const List = () => {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState("");
  const handleClick = () => {
    setNameList([...nameList, name]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <Button disabled={!name} handleClick={handleClick} />
      <button>Botão teste</button>
      <h2>My List</h2>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
