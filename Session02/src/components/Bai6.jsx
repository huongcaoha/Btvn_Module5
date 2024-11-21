import React, { useState, useEffect} from 'react'


export default function Bai6() {
    let [curentTime,SetCurrentTime] = useState(new Date().toLocaleTimeString()) ;
    useEffect(() => {
        const setIntervalId = setInterval(() => {
            SetCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(setIntervalId);
    },[]);
  return (
    <>
     <p>.................................................... Bài 6 .................................................................</p>
    <h1>Xin chào các bạn !</h1>
    <h2>Bây giờ là : {curentTime}</h2>

    <p>.............................................................................................................................</p>

    </>
  )
}


