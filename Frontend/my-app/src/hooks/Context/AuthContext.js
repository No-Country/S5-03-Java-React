import { createContext, useContext, useEffect, useState} from "react";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../components/Firebase/firebase";



export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error("there is no auth provider")
    return context;
}

export function AuthProvider({children}){

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true)
  
  
    const login = async (email, password) => 
      signInWithEmailAndPassword(auth, email, password);
  
      
    const signUp = (email, password) =>
      createUserWithEmailAndPassword(auth, email, password)
    
      
  
    const logout = () => signOut(auth)
      
      useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
         setuser(currentUser)
         setLoading(false)
        });
  
        return () => unsubscribe();
      }, [])
      
    
      
    
  
  
    return(
      <authContext.Provider value={{signUp, login, logout, user, loading}}>
        {children}
      </authContext.Provider>
    )
}