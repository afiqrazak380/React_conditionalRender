

function UserGreeting(props){


  return (props.isLogedIn ? <h2>Welcome {props.username}</h2> 
                          : <h2>Please {props.username} login to continue</h2>); 
  
  // if(props.isLogedin){
  //   return <h2>Welcome {props.username}</h2>
  // }
  // else{
  //   return <h2>Please {props.username} login to continue</h2>
  // }

}

export default UserGreeting