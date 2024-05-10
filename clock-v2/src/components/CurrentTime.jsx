import { useEffect, useState } from "react";
let CurrentTime = () => {
  const [time , setTimes] = useState((new Date))  //initial date rehegi time for access and 
  //setTime for setting the time every 1 sec of interval !
  useEffect(()=>{
  const intervalId = setInterval(()=>{
   setTimes(new Date())
  },1000)  //yaha tak ek method....that update every sec !

   return ()=>{
    clearInterval(intervalId)  //for clearing the interval not much important !
   }
  }, []) //[] yeh set krne ka method hai as useState !

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
