

function Alert({ message, alterType="alert alert-primary" }) {

    let alterStyle = `alert ${alterType}`
    return (
        <div className="container my-3">
            <div className={alterStyle} role="alert">
            {message || "Somthing went wrong"}
        </div>
        </div>
    )
}

export default Alert