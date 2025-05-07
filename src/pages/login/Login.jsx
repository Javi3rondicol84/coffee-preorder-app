import './Login.css';

export default function Login() {
    return (
        <>
            <main>
                <section className="login-section">
                    <div className="main-title">
                        <h2>Login</h2>
                        <div>
                            <h3>¿Are you new on this site?</h3>
                            <a href='#'>Register</a>
                        </div>
                    </div>
                    <div className="login-form">
                        <form>
                            <div>
                                <label for='email' name='email'>Enter your email address</label>
                                <input id='email' type='email'required />
                                <label for='password' name='password'>Enter your password</label>
                                <input id='password' type='password' required />
                            </div>
                            <div className='forgot'>
                                <a href='#'>¿Forgot your password?</a>
                            </div>
                            <button type='button'><span>Login</span></button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};