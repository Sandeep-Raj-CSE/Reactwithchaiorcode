import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter, setCounter] = useState(15)
  //let counter =0;

  // here is that function is working fine but value is not update 

  

  const addvalue = ()=>{
     console.log("addvalue",counter)

   // counter = counter +1;

   if(counter < 30){

    setCounter(counter+1)

   }

   

    

    
  } 


  const subvalue = () => {
    if(counter > 0){

      setCounter(counter-1);
      
    }
    
  }
 


  


  

  return (
    <>
      
      <h1>Chai or react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br />

      <button onClick={subvalue}>Subtarct Value {counter}</button>
    </>
  )
}

export default App
