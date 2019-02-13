import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';



const elem = (
    <h1>
        HEllo
    </h1>
)

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'),
)