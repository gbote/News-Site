import "./articleList.css"
import { ListGroup } from 'react-bootstrap';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.jsx';


function ArticleList(props) {

  console.log("articles in AL from HP: ", props.articles)

  return (
    <ListGroup id="articles">
      { 
        props.articles.map((article, index) => (
          <ListGroup.Item key={index} id={index % 2 ? "odd" : "even"}>
            <ArticleTeaser pageUrl={`/articles/${index+1}`} { ...article } id={ index + 1 } />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;


