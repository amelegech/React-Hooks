import React from "react";

const MyUnMount = () => {
  const [num, setNum] = React.useState(0);
  const [isLoad, setIsLoad] = React.useState(false);

  
  React.useEffect(() => {
   
    if (num === 0 && !isLoad) return;
      setNum(num + 1);
       //console.log('nnn',num);
    
  },[isLoad]);

  React.useEffect(() => {
    console.log("useEffect called component get render for the first time");
    return ()=>console.log("component will Unmount");
      
  }, []);

  React.useEffect(() => {
    console.log("useEffect to clean up");
    return ()=>console.log("cleanup");
  }, []);


  const clickHandler = () => {
    setIsLoad(!isLoad);
    
  };

  return (
    <div>
      <h6>{isLoad? "TRUE": "FALSE"} </h6>
      <h6>num val: {num} </h6>
    <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default MyUnMount;
