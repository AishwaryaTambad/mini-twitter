import React, { Component } from 'react'
import './formstyle.css'
import Logo from './images/logo.jpg'
import axios from 'axios'
import history from '../history'


 class Formcomponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              password:'',
              error_message:'',
             // token_arr:[]
         }
     }

     handlechange=(event)=>{
        this.setState({
            username:event.target.value
        })
     }
     handlepassword=(event)=>{
         this.setState({
             password:event.target.value
         })
     }
     submithandle=(event)=>{
        console.log(this.state)
        axios.post("http://127.0.0.1:8000/login/",this.state).then(response=>{
            console.log(response);
            if(response.status="201"){
                {history.push('/Tweets')}
                const store= response.data[1]['token'];
                localStorage.setItem("token",store);
                 const token1=localStorage.getItem("token");
                 console.log(token1);
               // document.cookie=response.data;
                
            }
            // if(response.status="202"){
                
            //     // console.log(response.data['token']); 
            // }

            
        }).catch(error=>{
            if(error.response.status="400"){
               // console.log(this.state);
               // console.log((error.response.data));
               this.setState({error_message:error.response.data['message']});
               {history.push('/Login')}
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
    check(){
            var get=document.getElementById("password");
            if(get.value.trim().length<5){
                alert("Password is short must be greater than 5");
                return false;
            }
        } 
    render() {
        return (
            <div>
                <div className="box" >
                <div className="box__animation"> 
                {/* <center><div className="box__bg"></div></center> */}
                <center> <img src={Logo} /></center>
              <center><h2><b>Log in to InstaTweets</b></h2></center> 
                <form onSubmit={this.submithandle} >
               <div className="labelstyle"><label> Username</label></div>
            <div className="inputstyle"><input type="text" class="form-control" value={this.state.username} onChange={this.handlechange} required></input></div> 
                    <br></br>
                   <div className="labelstyle"> <label >Password</label></div>
                   <div className="inputstyle"><input type="password" class="form-control"value={this.state.password} onChange={this.handlepassword} id="password" required></input> </div>  
                   {this.state.error_message && <div><strong>{this.state.error_message}</strong></div>}
                    < button type="submit" onClick={this.check}  className="btn btn--white">Log in</button> 
                    <br></br>
                    <br></br>
           
                    <span className="fix2"><a href="#">Forgot password?.</a>  </span>
                    <span className="fix"><a onClick={()=>history.push('/')}  >Sign up for InstaTweets?.</a></span>
                </form>
               
                </div>
                </div> 
            </div>
        )
    }
}

export default Formcomponent

    // function check(){
    //     var get=document.getElementById("password");
    //     if(get.value.trim().length<5){
    //         alert("Password is short must be greater than 5");
    //         return false;
    //     }
    
    
          
             
            
                
                
           
        
    



