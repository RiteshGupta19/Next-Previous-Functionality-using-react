import img from './images.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  let [btn,btnfunc]=useState(0)
  let x=img.map((v,i)=>{
    if(btn==i){
      return(
        <Img v={v} key={i}/>
        )
    }
    
  })
  let next=()=>{
    if(btn<3){
      btnfunc(++btn)
    }
    else{
      btnfunc(0)
    }
    }
  let pre=()=>{
    if(btn>=0){
    btnfunc(--btn)
  }
  else{
    btnfunc(0)
  }
  }
  return (
    <div className="text-center">
      {x}
      <button onClick={pre} className={` py-2 px-4 mr-5 bg-blue-300 rounded-lg mt-6 text-[30px] ${btn==0 ? 'hidden':'inline'}`}>previous</button>
      <button onClick={next} className={`py-2 px-4 bg-blue-300 rounded-lg mt-6 text-[30px] ${btn==3 ? 'hidden' :'inline'}`}>next</button>
    </div>
  );
}
function Img({v}){
  return(
    <>
      <img src={v.img} className='border-4 border-blue-400 w-[65%] h-[400px] m-auto mt-[85px]'/>
    </>
  )
}
export default App;
