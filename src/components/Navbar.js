import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


    function play(val) {
        if (val === 'Nav')
            document.getElementById('b1').innerText = 'News Topic'
        else
            document.getElementById('b1').innerText = document.getElementById(val).innerText
    }

    return (

        <nav id='nav' className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link onClick={() => play('Nav')} className="navbar-brand" to="/">News-App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                        <div className="dropdown">
                            <button id='b1' className="btn dropdown-toggle btn-outline-success" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News Topic
                            </button>
                            <ul className="dropdown-menu">
                                {/* passing parameters using onClick */}
                                <li onClick={() => play('E1')} className="nav-item"><Link id='E1' className="nav-link text-center" to="/entertainment">Entertainment</Link></li>
                                <li onClick={() => play('B1')} className="nav-item"><Link id='B1' className="nav-link text-center" to="/business"> Business</Link></li>
                                <li onClick={() => play('G1')} className="nav-item"><Link id='G1' className="nav-link text-center" to="/general">General</Link></li>
                                <li onClick={() => play('H1')} className="nav-item"><Link id='H1' className="nav-link text-center" to="/health">Health</Link></li>
                                <li onClick={() => play('S1')} className="nav-item"><Link id='S1' className="nav-link text-center" to="/science">Science</Link></li>
                                <li onClick={() => play('Sp1')} className="nav-item"><Link id='Sp1' className="nav-link text-center" to="/sports">Sports</Link></li>
                                <li onClick={() => play('T1')} className="nav-item"><Link id='T1' className="nav-link text-center" to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={props.mode === 'light' ? { color: 'black' } : { color: 'white' }} htmlFor="flexSwitchCheckDefault">Enable {props.mode}</label>
                        </div>
                    </form>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </div>
            </div>
        </nav>
    )

}