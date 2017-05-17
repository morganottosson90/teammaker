import React, { Component } from 'react';

export default class RFSObjectDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
        rfsArray: [
            {consultant: "Morgan",
            id: 1,
            ritm: "RITM45489534",
            status: "Finalized",
            category: "Early Termination",
            },
            {consultant:"Mattias",
            id:2,
            ritm: "RITM45489534",
            status: "Finalized",
            category: "Early Termination",
            }
        ]
    }
  }

  /*


{this.state.rfsArray.rfsObject}

  */
  render() {
    return (
      <div>
        Hej hej hej
        <div className="rfsArray">{this.state.rfsArray.map((rfsObject) => {
            return <div className='rfsObject' key={rfsObject.id}>
            {rfsObject.ritm} {rfsObject.consultant} {rfsObject.category} {rfsObject.status}
             </div>
        })}
        </div>
      </div>
    )
  }
}
