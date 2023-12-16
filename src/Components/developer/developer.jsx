import './developer.css'

function Developer(props) {
    return(
        <li className='acc'>
            <div onClick={() => {
                window.open(props.r)
            }}>
                <img className="imgdev"  src = {props.img} alt="Project img" />
                <p>{props.Name}</p>
            </div>
        </li> 
    )
}

export default Developer;