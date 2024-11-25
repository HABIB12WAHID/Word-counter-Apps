import React from 'react'

function Contact(props) {

    let myStyle = {
        color: props.mode ==='dark'? 'white': '#042743',
        backgroundColor: props.mode === 'dark'? '#042743': 'white',
    }
    return (
        <>
            <div className="container mt-3 mb-4">
                <div className="headingName" style={myStyle}>
                    <h1>Get Results - Contact Us Today:</h1>
                    <div className="row">
                        <div className="col-sm-6 mb-12">
                            <p>Your brand’s success matters to us. Contact us to find out how our digital experts can help you take your brand to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card" style={myStyle}>
                            <div className="card-body">
                                <form className="row g-3">
                                    <div className="col-md-6" style={myStyle}>
                                        <label for="userName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="userName" placeholder='Full Name' />
                                    </div>
                                    <div className="col-md-6" style={myStyle}>
                                        <label for="inputNumber" className="form-label">Phone</label>
                                        <input type="number" className="form-control" id="inputNumber" placeholder='Verify phone number' />
                                    </div>
                                    <div className="col-12" style={myStyle}>
                                        <label for="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-12" style={myStyle}>
                                        <label for="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter your address" />
                                    </div>
                                    <div className="col-md-6" style={myStyle} >
                                        <label for="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-md-4" style={myStyle}>
                                        <label for="inputState" className="form-label">State</label>
                                        <input type="text" className="form-control" id="inputState" />
                                    </div>
                                    <div className="col-md-2" style={myStyle}>
                                        <label for="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                    <div className="col-md-12" style={myStyle}>
                                        <label for="textArea" className="form-label">Message</label>
                                        <textarea type="text" className="form-control" id="textArea" />
                                    </div>
                                    <div className="col-12 text-center" style={myStyle}>
                                        <button type="submit" className="btn btn-primary" style={{ width: '80%' }}>Contact Us</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={myStyle}>
                            <div className="card-body">
                                <h5 className="card-title">General Inquiries</h5>
                                <div className="card-text">
                                    <p>Have a question… or just want to say hello? Get in touch:</p>
                                    <p>habibwahid199183@gmail.com</p>
                                    <p>Our Location</p>
                                    <p>12/7 S.N.M Road </p>
                                    <p>N.bazar Programming office</p>
                                    <p>GET DIRECTIONS</p>
                                    <p>Converted Word Character</p>
                                    <p>Exclusive digital information & advertising insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
