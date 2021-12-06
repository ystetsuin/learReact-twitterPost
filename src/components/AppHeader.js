import React from 'react';
import '../styles/AppHeader.css'

const AppHeader = ({posts}) => {

    const all = posts.length;
    const liked = posts.filter(post => post.like).length;
    
    return (
        <div className="app-header d-flex">
            <h1>Yaroslav Stetsiun</h1>
            <h2>{all} posts, {liked} liked</h2>
        </div>
    )
}

export default AppHeader
