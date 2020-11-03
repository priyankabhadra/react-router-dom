import React from 'react';
import { useHistory } from 'react-router-dom';

const ThirdPage = () => {

    const history = useHistory();

    const finalClick = () => {
        const path = "./finalpage";
        history.push(path);
    }

    return (
        <>
        <h3>Welcome, to third page</h3>
        <button onClick={finalClick}>Final Page</button>
        </>
    )
}

export default ThirdPage;