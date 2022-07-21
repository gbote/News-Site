import "./articleTeaser.css"

function ArticleTeaser(props) {

  console.log("articles in AT from AL from HP: ", props)

  const time = new Date(props.time * 1000)

  console.log("time", time)

  console.log("article url: ", props.url)
  return (
    <div>
      <div className="title">
        <a href={props.url} className="title-link" target="_BLANK">
          { props.title }
        </a>
      </div>
      <p className="date">
        { time.toLocaleDateString() }
      </p>
    </div>
  )
}

export default ArticleTeaser;
