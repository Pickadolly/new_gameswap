import Button from 'react-bootstrap/Button';



const Signup = () => {
    
    return (
        <div className="container">
            <form>
                <div className="form-container">
                    <label>Username:</label>
                    <input type="text" placeholder="Username" />
                </div>

                <div className="form-container">
                    <label>Password:</label>
                    <input type="text" placeholder="Password" />
                </div>

                <div className="form-container">
                    <label>Repeat Password:</label>
                    <input type="text" placeholder="Repeat Password" />
                </div>
                
                <Button as="input" type="submit" value="Submit" />{''}
                
            </form>
        </div>
    )
}

export default Signup