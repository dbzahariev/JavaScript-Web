import React, {Component} from 'react'
import LoginForm from '../user/loginForm'
import '../../style/site.css'
import '../../style/submit.css'
import RegisterForm from '../user/registerForm';
import About from './about';

export default class Home extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div className="signup">
                        <LoginForm />
                        <RegisterForm />
                    </div>
                    <About />
                </div>
            </section>
        )
    }
} 