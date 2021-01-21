import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    dataGetter();
  }, []);

  const dataGetter = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("axios response", res.data);
        //const myUser = res.data.slice(0, 3);
        const filtered = res.data.filter(item=> item.id < 5)

        setUser(filtered);
        //setUser(myUser);
      })
      .catch((err) => {
        console.log("axios error", err.message);
      });
  };

  return (
    <div>
      <h5>
        useEffect() is a hook which allow us to implement AJAx call. <br />
        also its a powrful hook that can replace the use case of mounting,
        updating and unmounting phases.
      </h5>
      <ul>
        {user.map((item, id) => {
          return (
            <div key={id}>
              <li>{item.name}</li>
            </div>
          );
        })}
      </ul>
      {/* <p>Data from server: {user.allUser}</p> */}
    </div>
  );
};
export default UseEffect;
