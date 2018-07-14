import React from 'react'

export default () => (
    <div className="about welcome">
        <h1>Welcome to our shop</h1>
        
        <div className="col-xs-4 img-label">
            <div className="txt-align-center">
                <img src="http://pngimg.com/uploads/phone/phone_PNG48995.png" alt="" />
            </div>
            <div>
                <p style={{textAlign: 'center'}}>
                    <span style={{fontSize: 16}}>
                        <strong>Telephone:</strong>
                    </span>
                </p>
                <p style={{textAlign: 'center'}}>
                    <span style={{fontSize: 16}}>
                        <strong>0888 88 8888</strong>
                    &nbsp;(Between 10:00-18:00ч.)</span>
                </p>
            </div>
        </div>

        <div className="col-xs-4 img-label">
            <div className="txt-align-center">
                <img src="https://www.freepnglogos.com/uploads/email-logo-png-30.png" alt="E-mail" />
            </div>
            <div>
                <p>
                    <span>
                    <strong>E-mail:</strong>
                    </span>
                </p>
                <p>
                    <span>
                        <a href="mailto:office@shop.com">office@shop.com</a>
                    </span>
                </p>
            </div>
        </div>


        <div className="col-xs-4 img-label">
            <div className="txt-align-center">
                <img src="http://www.kupi-chasovnik.com/uploaded/1bc18a7d85fdc05a485db618eb3a9904c335a73d.jpg" alt="​Facebook" />
            </div>
            <div>
                <p>
                    <span>
                        <strong>Facebook:</strong>
                    </span>
                </p>
                <p>
                    <span>
                        <a href="http://www.Facebook.com/kupi.chasovnikcom">Facebook</a>
                    </span>
                </p>
            </div>
        </div>
    </div>
)