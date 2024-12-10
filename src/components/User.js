const User = ({name}) =>{
    return (
        <div className="user-card p-4 m-4 bg-gray-50 rounded-lg">
            <h2>Name: {name}</h2>
            <h3>Location: Lucknow</h3>
            <h4>Contact: @Shivamch02</h4>
        </div>
    )
}

export default User;