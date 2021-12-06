import React from 'react'
import '../styles/PostListItem.css'

const PostListItem = ({label, important, like, onImportant, onLike, onDelete}) => {
    let classes = "app-list-item d-flex justify-content-between";

    if (important) {
        classes += " important";
    }

    if (like) {
        classes += " like";
    }

    return (
        <div
        className={classes}>
           <span
           className="app-list-item-label"
           onDoubleClick={onLike}>
               {label}
           </span>
           <div className="d-flex justify-content-center align-items-center">
               <button 
               type="button" 
               className="btn-star stn-sm"
               onClick={onImportant}>
                    <i className="fa fa-star"></i>
               </button>
               <button
               type="button"
               className="btn-trash stn-sm"
               onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
               </button>
               <i className="fa fa-heart"></i>
           </div>
        </div>
    )
}

export default PostListItem
