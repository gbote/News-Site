import Article from '../components/Article/Article.jsx'
import News from '../data/news.json';
import { useParams } from 'react-router-dom'
import React, { useState } from 'react';

function ArticlePage() {
  const params = useParams()
  let articleIndex = params.articleID - 1;
  const [article, setArticle] = useState(News[articleIndex])
  return (
    <div>
      {article 
        ? <Article article={article} image={article.multimedia.length ? article.multimedia[2].url : null} /> 
        : <span>404: Article Not Found</span>
      }
    </div>
  )
}

export default ArticlePage;