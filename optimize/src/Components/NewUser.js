import React from "react";
import axios from "axios";

const NewUser = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeName = (event) => {
    setName(event.target.value);
    console.log("User Name is: ", name);
    // event.preventefault()
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log("email is: ", email);
  };
const changePassword=(e)=>{
    setPassword(e.target.value)
    console.log("Password is: ", password);
}
const submitForm =(e)=>{
    e.preventDefault()
    const formData = {name,email,password}
 axios.post("https://jsonplaceholder.typicode.com/posts",formData).then((res)=>{
     console.log('Data sended to DB',res.data)
 }).catch((error)=>{console.log("error++++++", error.message);})
}
  return (
    <div>
      <h4>New user Registration</h4>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            changeName(e);
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => {
            changeEmail(e);
          }}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => {
            changePassword(e);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default NewUser;
