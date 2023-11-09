

function UserGreeting(props){

  if(props.isLogedin){
    return <h2>Welcome {props.username}</h2>
  }
  else{
    return <h2>Please {props.username} login to continue</h2>
  }

}

export default UserGreeting