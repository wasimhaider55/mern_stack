import './App.css';

function App() {
 const  title = "welcome to the new blog";
 const likes = 50;
//  const person = {name : "wasim", id: 20}; // we cannot dynamic object and boolen 
const link = "http://www.google.com";
  return (
    <div className="App">
     <div className="contnet">
      <h1>{title}</h1>
      <p>likes {likes} times </p>
      {/* <p>{person}</p> // we cannot dynamic object and boolen */}
      <p>{10}</p>
      <p>{"wasim Haider"}</p>
      <p>{ [1,2,3,5,7,8,5]}</p>
      <p>{Math.floor( Math.random() * 10 )}</p>
      <a href={link}>Google site</a>

     </div>
    </div>
  );
}

export default App;
