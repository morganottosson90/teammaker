import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import ToggleDisplay from 'react-toggle-display';
import {Collapse} from 'react-collapse';


const backgroundStyle = {
    "backgroundColor": "white",
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "zindex":1,
}

const arrayStyle = {
   "backgroundColor": "#C1D4F1",
   "margin": "auto",
   "width": "95%",
   "border": "1px solid black",
   "padding": "5px",
}

const objectStyle = {  
    "display": "flex",
    "margin": "2px",
    "padding": "2px",
    "border": "1px solid black",
    "width": "99%",
    "color": "black",

    
}

export default class RFSObjectDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
        rfsArray: [
            {consultant: "Morgan Ottosson",
            id: 1,
            ritm: "RITM45489534",
            status: "Finalized",
            category: "Early Termination",
            division: "SSF",
            wpteam: "Yes"
            },
            {consultant:"Mattias Jönsson",
            id:2,
            ritm: "RITM45489534",
            status: "Finalized",
            category: "Early Termination",
            division: "SSF",
            wpteam: "Yes"
            }
        ],
        collapse: false

    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse});
  }

  render() {
    return (
      <div style={backgroundStyle}>
 
        <div className="rfsArray" style={arrayStyle}>{this.state.rfsArray.map((rfsObject) => {
            return <div className='rfsObject' key={rfsObject.id} style={objectStyle}>
                <Button color="primary" onClick={this.toggle} style={{ "border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%" }}>Toggle</Button>
                <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%"}}>
                {rfsObject.ritm}
                </div>
                <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"15%", "height":"5%"}}>
                {rfsObject.consultant}
                </div>
                <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%"}}>
                {rfsObject.category}
                </div>
                <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%"}}>
                {rfsObject.status}
                </div>
                <Collapse isOpened={this.state.collapse}>
                 <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%"}}>
                 {rfsObject.division}
                 </div>
                 <div style = {{"border": "1px solid black", "backgroundColor": "white", "padding": "5px", "marginLeft": "1%", "width":"10%", "height":"5%"}}>
                 {rfsObject.wpteam}
                 </div>
                </Collapse>
            </div>
            
        })}
        </div>
      </div>
    )
  }
}
