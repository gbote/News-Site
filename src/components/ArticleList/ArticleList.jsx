import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser';
import "./articleList.css"

const ArticleList = ({articles}) => {

  return (
    <ListGroup id="articles">
      {
        articles.map((article, index) => {
          return <ListGroupItem key={index} className={index % 2 ? "odd-item" : "even-item"}>
            <ArticleTeaser pageUrl={`/articles/${index+1}`} article={article} />
          </ListGroupItem>
        })
      }
    </ListGroup>
  )
}

export default ArticleList