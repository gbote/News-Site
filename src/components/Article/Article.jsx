import "./article.css";

function Article(props) {

  const formatTime = () => {
    
  }

  return (
    <div className="article">
      <h1>{props.title}</h1>
      <p>{props.time}</p>
      <a target="_blank" href={props.url}>Read the full article</a>
    </div>
  )
}

export default Article;


// no longer being used in this current version