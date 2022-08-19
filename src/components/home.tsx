import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import { getAuth } from "firebase/auth";
import { Button } from '@mui/material';

export default function Home(){
        const auth = getAuth();
        const [ name , setName ] = useState<string>("")
        const [ picUrl , setPicUrl ] = useState<string>("")

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user)=>{
                console.log(user);
                
                if(user?.displayName && user.photoURL){
                    setName(user.displayName)
                    setPicUrl(user.photoURL)
                } else if(user?.email){
                    setName(user.email)
                } else {
                    navigate("/login")
                }
            }) 
             return unsubscribe
        })
  

const navigate = useNavigate();
    const logout = ()=> {
    signOut(auth) 
    console.log('out');
    navigate('/login')
   }

    return(
        <Background>
            <div className='home' >
                <div className='picture'> 
                <img src={picUrl} alt="" />
                </div>
                
                <p style={{
                    margin: '20px auto'
                }}>Welcome {name}</p>
                <div style={{
                    width: '80%',
                    margin: 'auto'
                }}>
                <Button onClick={logout} variant="contained">Sign out</Button>
                </div>
                
            </div>
        </Background>
            
    )
}