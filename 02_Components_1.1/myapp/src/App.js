import "./App.css";
import Article from "./components/Article";

let App = () => {

    let articles = [
        {
            title:'Title1',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, eius?',
        },
        {
            title:'Title2',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, eius?',
        },
        {
            title:'Title3',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, eius?',
        },
        {
            title:'Title4',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, eius?',
        },
        {
            title:'Title5',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, eius?',
        },
    ];
  return (
    <div>
      <Article title={articles[0].title} content={articles[0].content} ></Article>
      <Article title={articles[1].title} content={articles[1].content} ></Article>
      <Article title={articles[2].title} content={articles[2].content} ></Article>
      <Article title={articles[3].title} content={articles[3].content} ></Article>
      <Article title={articles[4].title} content={articles[4].content} ></Article>

    </div>
  );
};

export default App;
