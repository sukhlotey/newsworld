import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Connect from './components/Connect'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";
import JoinUs from './components/JoinUs';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = ()=> {
const pageSize = 8;

const [progress, setProgress] = useState(0);


    return (
      <div> 
        <Router>
     <Navbar/>  
     <Connect/>
     <JoinUs/>
     <LoadingBar color="#005abb" height={3} progress={progress} />
     <Routes>
     <Route exact path="/" element={<News setProgress={setProgress} key="/" pageSize={pageSize} country="in" category="general"/>}/>
     <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
     <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}/>
     <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/> 
     <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
     <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
     <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
     <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
     </Routes>
      </Router>
      
      </div>
    )
  }

export default App