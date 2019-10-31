import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Drawer from 'react-drag-drawer'
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Modal from 'react-modal';

import "./index.css";

// import image assets
import ArtScienceMuseumBlank from "./assets/imgs/ArtScienceMuseumBlank.png";
import DowntownBlank from "./assets/imgs/DowntownBlank.png";
import FlyerBlank from "./assets/imgs/FlyerBlank.png";
import ChinatownBlank from "./assets/imgs/ChinatownBlank.png";
import KampongBlank from "./assets/imgs/KampongBlank.png";
import MarinaBayBlank from "./assets/imgs/MarinaBayBlank.png";
import GardensByTheBayBlank from "./assets/imgs/GardensByTheBayBlank.png";
import EsplanadeBlank from "./assets/imgs/EsplanadeBlank.png";

import ArtScienceMuseum from "./assets/imgs/ArtScienceMuseum.png";
import Downtown from "./assets/imgs/Downtown.png";
import Flyer from "./assets/imgs/Flyer.png";
import Chinatown from "./assets/imgs/Chinatown.png";
import Kampong from "./assets/imgs/Kampong.png";
import MarinaBay from "./assets/imgs/MarinaBay.png";
import GardensByTheBay from "./assets/imgs/GardensByTheBay.png";
import Esplanade from "./assets/imgs/Esplanade.png";

import Flag from "./assets/imgs/Flag.png";
import FlagD from "./assets/imgs/FlagD.png";


import ArtScienceMuseumD from "./assets/imgs/ArtScienceMuseumD.png";
import DowntownD from "./assets/imgs/DowntownD.png";
import FlyerD from "./assets/imgs/FlyerD.png";
import ChinatownD from "./assets/imgs/ChinatownD.png";
import KampongD from "./assets/imgs/KampongD.png";
import MarinaBayD from "./assets/imgs/MarinaBayD.png";
import GardensByTheBayD from "./assets/imgs/GardensByTheBayD.png";
import EsplanadeD from "./assets/imgs/EsplanadeD.png";


const data = [{
    id: 1,
    name: "Flyer",
    imageBlank: FlyerBlank,
    image: Flyer,
    imageD: FlyerD
}, {
    id: 2,
    name: "ArtScienceMuseum",
    imageBlank: ArtScienceMuseumBlank,
    image: ArtScienceMuseum,
    imageD:ArtScienceMuseumD
    
}, {
    id: 3,
    name: "Downtown",
    imageBlank: DowntownBlank,
    image: Downtown,
    imageD: DowntownD,
}, {
    id: 4,
    name: "Chinatown",
    imageBlank: ChinatownBlank,
    image: Chinatown,
    imageD: ChinatownD
}, {
    id: 5,
    name: "Flag",
    imageBlank: Flag,
    image: Flag,
    imageD: FlagD,
}, {
    id: 6,
    name: "Kampong",
    imageBlank: KampongBlank,
    image: Kampong,
    imageD: KampongD
}, {
    id: 7,
    name: "GardensByTheBay",
    imageBlank: GardensByTheBayBlank,
    image: GardensByTheBay,
    imageD: GardensByTheBayD
}, {
    id: 8,
    name: "MarinaBay",
    imageBlank: MarinaBayBlank,
    image: MarinaBay,
    imageD: MarinaBayD
}, {
    id: 9,
    name: "Esplanade",
    imageBlank: EsplanadeBlank,
    image: Esplanade,
    imageD: EsplanadeD
}];


// Adapted from https://reactjsexample.com/photo-gallery-using-react-js/
class App extends React.Component {
    render() {
        return (
            <Tiles data={this.props.data} />
        );
    }
}

class Tiles extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                show: false,
            };
            this._clickHandler0 = this._clickHandler0.bind(this);
    }

    _clickHandler0(e) {
        e.preventDefault();
        if (this.state.show === false) {
            this.setState({
                show: true
            });
        } 
        else{
            this.setState({show: false})
        }

    }

    render(){
        console.log(this.state.show)
        return (
            <div className="tiles">
                <p id="title">WELCOME TO SINGAPORE!</p>

                <button className="btn info" onClick={this._clickHandler0}>show/hide</button>

                {this.props.data.map((data) => {
                    return <Tile data={data} key={data.id} toShow={this.state.show}/>
                })}

                
                <div>
                    <p id="instruction">
                        Hover on the images to peek;
                        <br />
                        Click on the images to see detailed information;
                        <br />
                        Click "show/hide" and brush over to reveal;
                        <br />
                        Click again and brush over to erase;
                    </p>
                </div>
            
            </div>
        );
        
    }
}


class Tile extends Component{
    constructor(props){
        super(props);
            this.state = {
                open: false,
                mouseOver: false,
                modalOpen: false,
                img: props.data.imageBlank,
            };

            this._clickHandler = this._clickHandler.bind(this);
            this._mouseEnter = this._mouseEnter.bind(this);
            this._mouseLeave = this._mouseLeave.bind(this);
            this._handleClick = this._handleClick.bind(this);
    }
   

    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            this.setState({
                mouseOver: true,
                img: this.props.data.image
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            if (this.props.toShow === true){
                this.setState({
                    mouseOver: false,
                    img: this.props.data.image
                })
            }
            else{
                this.setState({
                    mouseOver: false,
                    img: this.props.data.imageBlank
                })
            }   
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } 

    }

    _handleClick() {
        this.setState({open: false});
      }


    render(){
        console.log(this.props.toShow)
        const mainForm = (
            <div className="tile">
                <img
                    onAnimationEnd = {this._mouseLeave}
                    onMouseEnter={this._mouseEnter}
                    onMouseOut={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.state.img}
                    alt={this.props.data.name}
                />
            </div>
        );
    

        const modalForm = (
            <div>

                <div className="tile">
                    <img
                        onAnimationEnd = {this._mouseLeave}
                        onMouseEnter={this._mouseEnter}
                        onMouseOut={this._mouseLeave}
                        onClick={this._clickHandler}
                        src={this.state.img}
                        alt={this.props.data.name}
                    />
                </div>

                <div className="modal">
                    <button onClick={this._handleClick}>
                        Close
                    </button>
                    <img
                        src={this.props.data.imageD}
                    />
                </div>

            </div>
            
        );

        return  (this.state.open ? modalForm : mainForm)
    
    }
}






ReactDOM.render(
    <App data={data} />,
    document.getElementById('root')
);