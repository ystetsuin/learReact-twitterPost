import React, { useState } from 'react';
import '../styles/PostAddForm.css';
import { Button } from 'reactstrap';

const PostAddForm = ({onAdd}) => {

    const [label, setLabel] = useState('')

    const onSubmit = e => {
        e.preventDefault();

        if (label) {
            onAdd(label);
        }
        setLabel('');
    }

    return (
        <form className="bottom-panel d-flex" onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="What you want to add"
            className="form-control new-post-label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}/>

            <Button 
            type="submit" 
            color="primary" 
            outline>
                Add post
            </Button>
        </form>
    )
}

export default PostAddForm
