const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form action="">
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;