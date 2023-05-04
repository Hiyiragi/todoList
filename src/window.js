import { useState } from "react";
import { useEffect } from "react";

function Window() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowWidth = ()=> setWidth(window.innerWidth);
  useEffect(()=>{
    console.log("setup")
    window.addEventListener("resize", handleWindowWidth);

    return ()=> {
        window.removeEventListener("resize", handleWindowWidth);
        console.log("removed")
    }
  }, [])
  

  return(
    <div>
      {width}
    </div>
  )
}

export default Window;