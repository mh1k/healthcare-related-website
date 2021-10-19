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
    const handleError = () => {
        setError("")
    }


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
        setError("")
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    const handleRegistration = e => {
        e.preventDefault();
        // console.log(email, password, name);
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError('invaild email address')
            return
        }
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
                setError("this email address allready registered");
                // console.log(error.message);
                // setError("your email or password Worng");
            })
    };

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)
                setError('')

            })
            .catch(error => {
                // console.log(error.message);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("this email address not registered");
                    return
                }
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("your email or password Worng");
                    return
                }
                else{
                    setError(error.message);
                    return
                }
                // setError("your email or password Worng");
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
        handleLogin,
        handleError
    };



}

export default useFirebase;