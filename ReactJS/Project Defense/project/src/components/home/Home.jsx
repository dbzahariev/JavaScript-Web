import React, {Component} from 'react'
import LoginForm from '../user/LoginForm'
import '../../style/site.css'
import '../../style/submit.css'
import RegisterForm from '../user/RegisterForm';
import About from './About';

export default class Home extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div className="signup">
                        <LoginForm {...this.props} />
                        <RegisterForm />
                    </div>
                    <About />
                </div>
            </section>
        )
    }
} 