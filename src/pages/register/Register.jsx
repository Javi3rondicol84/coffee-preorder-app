import './Register.css';

export default function Register() {
    return (
        <>
            <main>
                <section className="register-section">
                    <div className="main-title">
                        <h2>Register</h2>
                        <div>
                            <h3>¿Do you already have an account?</h3>
                            <a href="#">Login</a>
                        </div>
                    </div>
                    <div className="register-form">
                        <form>
                            <div>
                                <label htmlFor="email" name="email">Enter your email address</label>
                                <input id="email" type="email" required />

                                <label htmlFor="username" name="username">Enter your username</label>
                                <input id="username" type="username" required />
                                
                                <label htmlFor="password" name="password">Create a password</label>
                                <input id="password" type="password" required />

                                <label htmlFor="repeat-password" name="repeat-password">Repeat the password</label>
                                <input id="repeat-password" type="repeat-password" required />
                            </div>
                            <button type="button"><span>Register</span></button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
