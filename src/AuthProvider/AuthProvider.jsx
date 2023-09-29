import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from './../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser?.email){
                fetch('http://localhost:5000/jwt',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({email:currentUser?.email})
                })
                .then(res=>res.json())
                .then(data =>{
                    localStorage.setItem("jwt-access-token", data?.token);
                    console.log(data)
                })
                .catch(error =>console.log(error))

            }


            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


const authInfo ={
    loading,
    user,
    createUser,
    signIn,
    logOut


}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;