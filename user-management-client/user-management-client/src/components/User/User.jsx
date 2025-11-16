import React, { use } from "react";

const User = ({ userPromise }) => {
  const user = use(userPromise);
  console.log(user);

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
      });
  };

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
          </li>
        ))}
      </div>
    </div>
  );
};

export default User;
