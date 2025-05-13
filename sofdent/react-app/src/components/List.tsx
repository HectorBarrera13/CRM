import { useState } from "react";

type Props = {
  data: String[];
  onSelect?: (elemento: String) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(-1);
  const handleClick = (i: number, elemento: String) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
