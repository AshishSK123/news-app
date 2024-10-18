import React from 'react'
import { Accordion } from 'react-bootstrap';

function About(props) {
    return (
        <div style={props.mode === 'light' ? { color: 'black' } : { color: 'white' }} className='container'>
            <h3><strong>About Us</strong></h3>
            <Accordion style={{ border: '1px solid black' }}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header style={{ border: '1px solid black' }} >App Information</Accordion.Header>
                    <Accordion.Body>
                        This program is designed to edit text by altering all of the character properties, such as switching from lower case to upper case and vice versa.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header style={{ border: '1px solid black' }}>Creater</Accordion.Header>
                    <Accordion.Body>Unknown</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header style={{ border: '1px solid black' }}>Version</Accordion.Header>
                    <Accordion.Body>
                        Version 2024 <br />
                        Build(14326.20238)
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default About

