import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes , Route, useNavigate } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, User } from 'firebase/auth';
import auth from './config/config';

function App() { 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUse)=>{
        if(currentUse?.displayName || currentUse?.email){
            navigate('/home')
        }else {
            navigate("/login")
        }
    })
    return unsubscribe;
}, [])

    const [authing, setAuthing] = useState<boolean>(false)
    const [ name , setName ] = useState<string>();
    const [picture , setPicture ] = useState<string>();
    const navigate = useNavigate()

    const signInEmail = async (email: string , pass: string) => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        navigate('/home')
    // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+ " Error code");
    console.log(errorMessage+ " Error message");
        });
    }

    const signInWithGoogle = async () => {
       
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
        })
        .catch((error)=>{
            console.log(error);
            setAuthing(false)
        })
    } 
    const signInWithGithub = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GithubAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
            
        })
        .catch((error)=>{
            console.log(error);
            setAuthing(false)
        }) 
    }

    const signInWithFacebook = async () => {
        setAuthing(true);
        signInWithPopup(auth, new FacebookAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
        })
        .catch((error)=>{
            
            console.log(error);
            setAuthing(false)
        })
    }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home name={name} picture={picture}/>} />
        <Route path='/home' element={<Home name={name} picture={picture}/>} />
        <Route path='/login' element={<Login signWithGithub={signInWithGithub} signWithGoogle={signInWithGoogle} signWithFacebook={signInWithFacebook} signIn={signInEmail}/>}/>
      </Routes>
    </div>
  );
}

export default App;
