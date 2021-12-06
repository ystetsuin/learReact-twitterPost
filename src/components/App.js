import React, { useState } from 'react'
import AppHeader from './AppHeader'
import PostAddForm from './PostAddForm'
import PostList from './PostList'
import PostStatusFilter from './PostStatusFilter'
import SearchPanel from './SearchPanel'
import '../styles/App.css'

const App = () => {

    let data = [
        {id: 1, label: 'I learn React', important: false, like: false},
        {id: 2, label: 'React Component', important: false, like: false},
        {id: 3, label: 'Function Component', important: false, like: false},
        {id: 4, label: 'Class Component', important: true, like: true},
    ];

    const [posts, setPosts] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all')

    const toggleValue = (id, value) => {
          setPosts(
            posts.map(post => {
                return (post.id === id) 
                    ? {...post, [value]: !post[value]} 
                    : post
            })
        );
    }

    const deletePost = id => {
        setPosts(
            posts.filter(post => post.id !== id)
        );
    }

    const addPost = body => {
        const newPost = {
            label: body,
            important: false,
            like: false,
            id: Date.now()
        }

        setPosts([...posts, newPost]);
    }

    const searchPosts = (items, term) => {
        if (!term) {
            return items;
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    const onUpdateSearch = (value) => {
        setSearchTerm(value);
    }

    const filterPosts = (items, filter) => {
        return (
            (filter === 'like') ? items.filter(item => item.like) :
            (filter === 'important') ? items.filter(item => item.important) :
            items
        );
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const visiblePosts = filterPosts(searchPosts(posts, searchTerm), filter);

    return (
        <div className="app">
            <AppHeader posts={posts}/>
            <div className="search-panel d-flex">
                <SearchPanel onUpdate={onUpdateSearch}/>
                <PostStatusFilter onFilter={onFilterSelect} />
            </div>
            <PostList
            posts={visiblePosts}
            onImportant={toggleValue}
            onLike={toggleValue}
            onDelete={deletePost} />
            <PostAddForm
            onAdd={addPost} />
        </div>
    )
}

export default App
