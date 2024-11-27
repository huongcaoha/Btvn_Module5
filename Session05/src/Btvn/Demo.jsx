import React, { useEffect, useState } from "react";

export default function Demo() {
  const listApi = ["posts", "comments", "albums"];
  const [currentApi, setCurrentApi] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${currentApi}`)
      .then((dataJson) => dataJson.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentApi]);
  return (
    <div>
      <h1>Demo</h1>
      {listApi.map((api) => (
        <button
          key={api}
          style={
            currentApi === api
              ? { backgroundColor: "blue", color: "white" }
              : {}
          }
          onClick={() => setCurrentApi(api)}
        >
          {api}
        </button>
      ))}

      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title || item.email}</li>
        ))}
      </ul>
    </div>
  );
}
