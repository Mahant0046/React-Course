import { useState } from "react"

function App() {
  const [count,setCount]=useState(0);
  const [CountToSet,setCountToSet]=useState(0);

  // function IncreaseCount(){
  //   setCount((preValue)=>(preValue+1))
  // }

  return (
    <>
       <h1 className="m-10">Counter {count}</h1>

    <div className="flex flex-row bg-gray m-3 gap-2  p-3">
       <button className=" text-white bg-green-400 " onClick={()=>setCount(count+1)}>Incerase </button>
       <button className="text-white  bg-red-400" onClick={()=>setCount(Math.max(0,count-1))}>Decrease</button>
       <button className="text-white bg-yellow-400" onClick={()=>setCount(0)}>Reset</button>
    </div>
      <div className="flex-row text-2xl m-5 p-4 ">
        <input type="text" value={CountToSet} onChange={(e)=>setCountToSet(Number(e.target.value))} className="border-2"/>
         <button className=" border-1 m-3  bg-white text-black" onClick={()=>setCount(Number(CountToSet),setCountToSet(0))}>set to {CountToSet}</button>
      </div>
    </>
  )
}

export default App
