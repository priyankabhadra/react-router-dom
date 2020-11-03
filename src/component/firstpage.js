import React from 'react';
import {useHistory} from 'react-router-dom';

const FirstPage = () => {

    const history = useHistory();

   const firstTimeClick = () => {
        const path = "/secondpage";
        history.push(path);
    }

    const secondTimeClick = () => {
        const path = "/thirdpage";
        history.push(path);
    }

    return(
        <>
        <button onClick={firstTimeClick}>Go to second page</button>
        <button onClick={secondTimeClick}>Go to third page</button>
        </>
    )
}

export default FirstPage;