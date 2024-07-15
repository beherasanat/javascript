import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import arithmeticOperation from './function_factory/FunctionFactory'
import operation from './function_currying/FunctionCurrying'
import { myPromise } from './promise/MyPromise'
import { PAnimal } from './prototype_constructor_class/Prototype'
import CAnimal from './prototype_constructor_class/Constructor'
import { Dog } from './prototype_constructor_class/ClassTest'

function App() {
  const [count, setCount] = useState(0);

  const addi = arithmeticOperation('ADD');
  console.log("addi = "+addi(2,3));

  const opn = operation(7);
  console.log(opn(5));

  myPromise.then( result => console.log(result)).catch(error=>console.log(error)).finally(()=>{console.log("promise settled");});

  const cat = Object.create(PAnimal);
  cat.bark = () => console.log("cat spoke.");
  cat.bark();

  const dog = new CAnimal("Dog");
  dog.speak();

  const dg = new Dog("dog");
  dg.bark();
  dg.speak();

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
