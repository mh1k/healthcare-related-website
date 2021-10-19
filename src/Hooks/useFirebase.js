import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLodding, setIsLodding] = useState(true)

    // console.log(isLogin);

    const signInUsingGoogle = () => {
        setIsLodding(true);
        return signInWithPopup(auth, googleProvider)


    };


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log("inside", user);
                setUser(user)
            }
            else {

            }
            setIsLodding(false);
        })
    }, []);

    const logOut = () => {
        setIsLodding(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLodding(false))
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setError("")
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name);
        if (password.length < 6) {
            setError('password must be at least 6 characters long')
            return
        };
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must be at least 2 characters Upper case')
            return
        };
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName();
                const info = { ...result.user, displayName: name }
                setUser(info);
                setError("");
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
                // console.log(error);
                // setError("your email or password Worng");
            })
    };

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                setError('')
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
                setError("your email or password Worng");
            })
    }


    return {
        user,
        logOut,
        signInUsingGoogle,
        error,
        handleEmailChange,
        handlePasswordChange,
        isLodding,
        handleRegistration,
        handleNameChange,
        handleLogin
    };



}

export default useFirebase;