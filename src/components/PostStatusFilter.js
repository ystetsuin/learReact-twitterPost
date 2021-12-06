import React, { useState } from 'react'
import '../styles/PostStatusFilter.css'
import { Button } from 'reactstrap'

const PostStatusFilter = ({onFilter}) => {

    const [btns] = useState([
        {name: 'all', text: 'All'},
        {name: 'like', text: 'Liked'},
        {name: 'important', text: 'Important'},
    ]);


    const setFilter = (e, filter) => {
        onFilter(filter);
        setBtnsStyle(e, '.filter')
    }

    const setBtnsStyle = (event, className) => {
        const btns = document.querySelectorAll(className);
        btns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    const buttons = btns.map(button => {

        return (
            <Button
            key={button.name}
            className="filter"
            onClick={(e) => setFilter(e, button.name)}
            color="primary" 
            outline>
                {button.text}
            </Button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default PostStatusFilter
