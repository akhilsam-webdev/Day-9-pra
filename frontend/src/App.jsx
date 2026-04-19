import axios from "axios";
import { useState } from "react";

const App = () => {
  const [contact, setContact] = useState([]);

  axios.get("http://localhost:3000/api/contact").then((res) => {
    console.log(res.data);
    setContact(res.data.contacts);
  });

  return (
    <div className="app">
      {contact.map((item) => (
        <div className="contact">
          <h2>
            Name : <span>{item.name}</span>
          </h2>
          <hr />
          <div>
            <h4 className="a">
              Number: <span>{item.number}</span>
            </h4>
            <h4 className="b">
              Email: <span>{item.email}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
