import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ArticleList from "../components/ArticleList/ArticleList.jsx";

const SectionPage = () => {

  const [ articles, setArticles ] = useState([])
  const { section } = useParams()
  console.log("context/section: ", section)

  useEffect(() => {
    console.log("section: ", section)
    axios.get(`https://hacker-news.firebaseio.com/v0/${section}.json`)
    .then((response) => {
      const promises = []
      for ( let i = 0; i < 20; i++) {
        promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))  
      }
      Promise.all(promises).then((responses) => {
        setArticles(responses.map((response) => {
          return response.data
        }))
      })
    })
  }, [section])

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export default SectionPage;
