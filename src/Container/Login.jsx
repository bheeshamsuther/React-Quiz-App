import React from 'react'
import SimpleMenu from '../component/topMenu'
import logo from '../fb.png'



export default class Home extends React.Component {
    render(){
        return(
            <div>
                <SimpleMenu click={this.props.click} img={logo} value={this.props.log}  />
                <h1 style={{backgroundColor:"darkcyan",padding:"70px",textAlign:"center",color:"white"}}>Welcome</h1>
            </div>
        )
    }
}