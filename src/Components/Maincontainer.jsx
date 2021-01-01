import React, { Component } from 'react'
import Calcute from '../Components/calcute'
import Resultnahaee from './LIB/resultnahaee'
export default class Maincontainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             buttonvalue:[1,2,3,4,5,6,7,8,9,0],
             sign:'',
             selectnumber:'',
             prevalue:0
        }
    }
    handelselectkey =(value)=>{
        let newnumber = this.state.selectnumber +''
        newnumber += value
        this.setState({
            selectnumber:newnumber
        })

    }
    
    handelsign=(signselect)=>{
        this.setState({
            prevalue:this.state.selectnumber,
            selectnumber:0,
            sign:signselect,
            status:false
        })
    }

    handelequal =()=>{
        let result  = 0
        this.setState({status:true})
        switch(this.state.sign){
            case '+':
                result= parseFloat(this.state.prevalue) + parseFloat(this.state.selectnumber);
                break;
            case '-':
                result = parseFloat(this.state.prevalue) - parseFloat(this.state.selectnumber);
                break;
            case '*':
                result = parseFloat(this.state.prevalue) * parseFloat(this.state.selectnumber);
                break;
            case '/':
                result = parseFloat(this.state.prevalue) / parseFloat(this.state.selectnumber);
                break;
            default:
                break;
        }
        this.setState({selectnumber:result})
    }

    handelckey =()=>{
        this.setState({selectnumber:'',sign:''})
    }

   
    render() {
        return (
            <div>
              
      <Calcute oninsertkey={this.state.buttonvalue} onselectkey={this.handelselectkey} onesignselect={this.handelsign} onequalsign={this.handelequal} onckey={this.handelckey}/>
     {this.state.status?<Resultnahaee val={this.state.selectnumber}/>:false}
        {this.state.status?'':<p>{this.state.selectnumber}{this.state.sign}</p>}
            </div>
        )
    }
}
