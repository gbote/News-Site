import ArticleList from '../components/ArticleList/ArticleList.jsx'
import { useParams } from 'react-router-dom'
import articlesAPI from '../api/ArticlesAPI.jsx';
import React, { useState, useEffect } from 'react';

function ArticlePage() {

  const [articles, setArticles] = useState([])
  const { sectionName }= useParams()

  useEffect(() => {
    articlesAPI.fetchArticlesBySection(sectionName).then((response) => {
      const promises = []
      for ( let i = 0; i < 30; i++) {
        promises.push(articlesAPI.fetchArticleByID(response.data[i]))
      } 
     Promise.all(promises).then((responses) => {
        setArticles(responses.map((response) => {
          return response.data
        }))
      })
    })
  }, [sectionName])

  return (
    <>
      <ArticleList articles={articles} />
    </>
  )
}

export default ArticlePage;