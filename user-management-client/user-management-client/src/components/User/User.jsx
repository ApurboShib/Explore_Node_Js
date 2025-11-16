import React, { use, useState } from "react";

const User = ({ userPromise }) => {
  const InitialUser = use(userPromise);
  const [user, setUser] = useState(InitialUser);
  console.log(user);
  // for onSubmit to the form.
  
  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);

    // create user in the server.
    // for doing this follow the (__post_request.js) file
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after post : ", data);
        const newUsers = [...user, data];
        setUser(newUsers);
        e.target.reset();
      });
  };


  // try to delete somethinf after clicking in the X button.

  const handleDelete = () => {
    
  }
  return (
    <div>
      <h3>User data are showed here</h3>

      <form onSubmit={handleUser} action="">
        <input type="text" placeholder="Enter your name" name="name" id="" />
        <br />
        <input type="email" placeholder="enter your email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} :{user.email}{" "}
            <button onClick={handleDelete}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default User;
