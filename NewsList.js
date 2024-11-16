import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/news')
            .then(response => setNews(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            {news.map(item => (
                <div key={item._id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.content}</p>
                        <p className="text-muted">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
