import { useState } from "react";
function Title(prop) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>{title}</h1>
    </div>
  );
}
export default Title;
