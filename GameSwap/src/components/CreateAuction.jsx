
const CreateAuction = () => {
    return (
        <div classname = "container">
            <form>
                <div className="form-container">
                <label>Game Title:</label>
                <input type="text" placeholder="Game Title"/>
                </div>
                <div className="form-container">
                <label>Game Desciption</label>
                <input type="text" placeholder="Game Description"/>
                </div>
            </form>
        </div>
    )
}

export default CreateAuction