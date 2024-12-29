import logo from './logo.svg';
import './App.css';
import Categories from './Components/Category';
import ArticleBox from './Components/ArticleBox';
import MoreButton from './Components/MoreBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <Categories />
        <ArticleBox/>
        <ArticleBox/>
        <ArticleBox/>
        <MoreButton/>
      </body>
    </div>


  );
}

export default App;
