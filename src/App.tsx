import React, { useEffect} from 'react';
import './App.css';
import { Routes , Route, useNavigate } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login';
import { onAuthStateChanged, signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import auth from './config/config';
import Loading from './components/loading';

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
})
    const navigate = useNavigate() 

    const signInEmail = async (email: string , pass: string) => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
    // Signed in 
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
       
 
        signInWithPopup(auth, new GoogleAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
        })
        .catch((error)=>{
            console.log(error);
 
        })
    } 
    const signInWithGithub = async () => {

        signInWithPopup(auth, new GithubAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
            
        })
        .catch((error)=>{
            console.log(error);

        }) 
    }

    const signInWithFacebook = async () => {

        signInWithPopup(auth, new FacebookAuthProvider()).then((response)=>{
            console.log(response);
            navigate('/home')
        })
        .catch((error)=>{
            
            console.log(error);
        })
    }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login signWithGithub={signInWithGithub} signWithGoogle={signInWithGoogle} signWithFacebook={signInWithFacebook} signIn={signInEmail}/>}/>
      </Routes>
    </div>
  );
}

export default App;
