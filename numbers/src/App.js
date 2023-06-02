import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import Layout from "./Layout";
import Perfect from "./Components/Numers/Perfect";
import Amicable from "./Components/Numers/Amicable";
import Abundant from "./Components/Numers/Abundant";
import Coprime from "./Components/Numers/Coprime";
import Cyclic from "./Components/Numers/Cyclic";
import Deficient from "./Components/Numers/Deficient";
import Fibonacci from "./Components/Numers/Fibonacci";
import Figurate from "./Components/Numers/Figurate";
import Happy from "./Components/Numers/Happy";
import Narcissistic from "./Components/Numers/Narcissistic";
import Palindromic from "./Components/Numers/Palindromic";
import Prime from "./Components/Numers/Prime";
import Square from "./Components/Numers/Square";
import Transcendental from "./Components/Numers/Transcendental";
import Triangular from "./Components/Numers/Triangular";
import Weird from "./Components/Numers/Weird";

const App = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Layout child={<Home />} />} />
        <Route path="/:name" element={<DynamicComponent />} />
      </Route>
    </Routes>
  );

  function DynamicComponent() {
    const { name } = useParams();

    switch(name){
      case 'Abundant': return <Layout child={<Abundant/>}/>
      case 'Amicable': return <Layout child={<Amicable/>}/>
      case 'Coprime': return <Layout child={<Coprime/>}/>
      case 'Cyclic': return <Layout child={<Cyclic/>}/>
      case 'Deficient': return <Layout child={<Deficient/>}/>
      case 'Fibonacci': return <Layout child={<Fibonacci/>}/>
      case 'Figurate': return <Layout child={<Figurate/>}/>
      case 'Happy': return <Layout child={<Happy/>}/>
      case 'Narcissistic': return <Layout child={<Narcissistic/>}/>
      case 'Palindromic': return <Layout child={<Palindromic/>}/>
      case 'Perfect': return <Layout child={<Perfect/>}/>
      case 'Prime': return <Layout child={<Prime/>}/>
      case 'Square': return <Layout child={<Square/>}/>
      case 'Transcendental': return <Layout child={<Transcendental/>}/>
      case 'Triangular': return <Layout child={<Triangular/>}/>
      case 'Weird': return <Layout child={<Weird/>}/>
      default:return(<h1>Page Not Found</h1>)
    }

  }
};

export default App;
