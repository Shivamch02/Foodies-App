import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "India",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Shivamch02");
        const json = await data.json();

        console.log(json);
        this.setState({
            userInfo: json,
        })
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return ( 
            <div className="user-card">   
                <img src={avatar_url} alt="Profile Picture" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Shivamch02</h4>
            </div>
        )
    }
}

export default UserClass;