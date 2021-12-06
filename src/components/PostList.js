import React from 'react'
import PostListItem from './PostListItem'
import '../styles/PostList.css'

const PostList = ({posts, onImportant, onLike, onDelete}) => {

    const elements = posts.map((post) => {
        const {id, ...postProps} = post;
        
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                {...postProps}
                onImportant={() => onImportant(id, 'important')}
                onLike={() => onLike(id, 'like')}
                onDelete={() => onDelete(id)} /> 
            </li>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default PostList
