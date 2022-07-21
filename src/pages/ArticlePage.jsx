import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';
import ArticleList from "../components/ArticleList/ArticleList.jsx";

function ArticlePage() {

  const [articles, setArticles] = useState([])
  const {section} = useParams()

  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/${section}.json`)
    .then((response) => {
      const promises = []
      
      for (let i=0; i < 20; i++) {
        promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))  
      }
      Promise.all(promises).then((responses)=> {
        setArticles(responses.map((response) => {
          return response.data
        }))
      })
    })
  }, [section])

  return (
    <div>
      {
        article 
          ? <ArticleList articles={articles} />
          : <span>404: Section Not Found</span>
      }
    </div>
  );
}

export default ArticlePage;
