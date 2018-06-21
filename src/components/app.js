import React from 'react';
import {Route}from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import Contact from './contact';
import GiftsParties from './giftsparties';

export default ()=> {

    return(
    <div className="container">
    <Nav/>
    <Route exact path = '/' component = {Welcome}/>
    <Route path = '/our-macarons' component = {Macarons}/>
    <Route path = '/contact' component = {Contact}/>
    <Route path = '/gifts-parties' component = {GiftsParties}/>
        
    </div>
    )
}
    


