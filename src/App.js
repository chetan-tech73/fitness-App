import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import CategoryPage from './components/CategoryPage';
 import Home from './components/Home';
import Header from './components/Header'
 import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpForm';
import './App.css';
import ExerciseDetails from './components/ExerciseDetails';

function App() {
  return (
    <div>
      <Header />
     
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mainDashboard" element={<MainDashboard />} />
 <Route path="/category/:category" element={<CategoryPage />} />
  <Route path="/category/:category/exercise/:exerciseId" element={<ExerciseDetails />} /> 
  <Route path="/signup" element={<SignUpForm />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
    
    

    </div>
    
  );
}

export default App;