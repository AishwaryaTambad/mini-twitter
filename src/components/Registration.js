import React, { Component } from 'react'
import './signup.css'
import Logo from './images/logo.jpg'
import axios from 'axios'
import {BrowserRouter, Link, Switch, Route ,Redirect} from 'react-router-dom';
import Formcomponent from './Formcomponent';
import history from '../history'
import Routes from '../Routes';

class Registration extends Component {
    check(){
        var get=document.getElementById("password");
        if(get.value.trim().length<5){
            alert("Password is short must be greater than 5");
            return false;
        }
    } 
    
   
    constructor(props) {
        super(props)
      
        this.state = {
             first_name:'',
             last_name:'',
             username:'',
             password:'',
            error_message:''
            
        }
    }
    
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submithandle=(event)=>{
        console.log(this.state)
        axios.post("http://127.0.0.1:8000/register/",this.state).then(response=>{
            console.log(response);
            if(response.status="201"){
                alert("Account Created Successfully");
                {history.push('/Login')}
            }
        }).catch(error=>{
            if(error.response.status="400"){
               // console.log(this.state);
               // console.log((error.response.data));
                this.setState({error_message:error.response.data['error']});
                {history.push('/')}
              // this.setState({error_message:'Username is present'})
                console.log(error.response.status);
                //console.log(error.response);
                
            }
            else if(error.request){
                console.log(error.request);
            }
            else
            {
                console.log("Error",error.message);  
            }
            // console.log(error.response);
            // return error.response;
        })
        event.preventDefault()
    }
    
    render() {
        
        const {first_name,last_name,username,password}=this.state
        return (
            <div className="container">
                <div className="animation">
                <center> <img src={Logo} /></center>
                 <h2><b>Create your account for InstaTweets</b></h2>
                 <br></br>
                   <form onSubmit={this.submithandle} >
                   <div className="labelstyle1"><label>First Name</label></div>
                   <div className="inputstyle1"><input type="text" name="first_name" value={first_name} onChange={this.changeHandler} required ></input> </div>
                     <text>0/50</text>
                      <br></br>
                      <div className="labelstyle1" ><label>Last Name</label></div> 
                      <div className="inputstyle1"><input type="text"name="last_name"value={last_name} onChange={this.changeHandler} required ></input></div>
                      <text>0/50</text>
                      <br></br>
                      <div className="labelstyle1" ><label>UserName</label></div> 
                      <div className="inputstyle1"><input type="text" name="username" value={username}onChange={this.changeHandler} required ></input></div>
                      <br ></br>
                      <div className="labelstyle1"><label>Password</label></div> 
                      <div className="inputstyle1"><input type="password" name="password" value={password} onChange={this.changeHandler} id="password" required ></input></div>
                      <br></br>
                     {this.state.error_message && <div><strong>{this.state.error_message}</strong></div>}
                     {/* {error_message ?<div><strong>{error_message}</strong></div>:null } */}
                      <button onClick={this.check} type="submit" className="btn1 btn--white1">Create</button><br></br>
                    <span ><center><a  onClick={()=>history.push('/Login')} >Already have an account Log in here</a></center></span>
                    </form> 
                   
                </div>
                
            </div>
        )
    }
}

export default Registration
