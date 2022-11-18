import {FaTimes} from 'react-icons/fa';

import './Error.css';

const Error=({error,setError})=>{
    const closeHandler=()=>{
        setError("");
	};

    return (
        <div className="message error">
            {error}
            <FaTimes className="message-close" onClick={closeHandler} />
        </div>
    );
}

export default Error;