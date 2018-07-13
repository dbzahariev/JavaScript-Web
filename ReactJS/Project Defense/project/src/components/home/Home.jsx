import React, {Component} from 'react'
import '../../style/site.css'
import '../../style/submit.css'
import About from './About';

export default class Home extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <About />
                </div>
            </section>
        )
    }
} 