import './Article.css';


let Article = (props)=>
{

    return (
        <div className='article-wrapper'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Article;