
import PropsTypes from 'prop-types'

function UserGreeting(props){

  const welcomeMassage = <h2 className="welcome-massage">Welcome back {props.username}</h2>;
  const loginPrompt    = <h2 className="login-prompt">Please login to continue</h2>;

  return(
    props.isLogedIn ? welcomeMassage : loginPrompt
  );

  // return (props.isLogedIn ? <h2 className="welcome-massage">Welcome back {props.username}</h2> 
  //                         : <h2 className="login-prompt">Please login to continue</h2>); 
  
  // if(props.isLogedin){
  //   return <h2>Welcome {props.username}</h2>
  // }
  // else{
  //   return <h2>Please {props.username} login to continue</h2>
  // }

}

UserGreeting.PropsTypes = {
  isLogedIn :  PropsTypes.bool,
  username : PropsTypes.string,
}

UserGreeting,defaultProps = {
  isLogedIn: false,
  username: "Guest"
}
export default UserGreeting