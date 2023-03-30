import React, { useEffect, useState } from 'react';
import api from '../api';
import '../styles/TechNews.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TechNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await api.get('/top-headlines?country=us&category=technology&pageSize=9');
      setArticles(response.data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Tech News</h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {articles.slice(0, 3).map((article, index) => (
            <div key={article.url} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={article.urlToImage} className="d-block w-100" alt={article.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>

      </div>
      <div className="row mt-4">
        {articles.slice(3, 9).map((article) => (
          <div key={article.url} className="col-md-4">
            <div className="card mb-3">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNews;
