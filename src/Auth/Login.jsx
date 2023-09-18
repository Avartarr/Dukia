import { useRef, useState,useEffect } from "react";
// import { Link } from "react-router-dom";

const Login = () => {
    const errRef = useRef();
    const userRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
        {success ? (
            <section>
                <h1>You are Logged in!!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete="off"
                onChange={ (e) => setUser(e.target.value) }
                value={user}
                required
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                onChange={ (e) => setPwd(e.target.value) }
                value={pwd}
                required
                />
                <button type="submit">Log In</button>
            </form>
            <p>
            Don't have an account?<br />
            <span className="line">
                {/* <Link to="/Register">Sign Up Here!</Link> */}
            </span>
            </p>
            
        </section>
        )}
        </>
    )
}

export default Login;