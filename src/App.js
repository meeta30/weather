import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Body from './components/Body';

const Data = {
  title: "This is my Heading";
  text: "Lorem ipsum dolor sit amet. Id voluptatem deleniti aut ullam laborum ut odio architecto non odio asperiores qui dolorum nostrum id numquam animi ut fugiat veritatis. Ut voluptas modi qui reprehenderit dolores cum officiis voluptatem est officiis quia in animi quaerat sed aspernatur sint. Sed sint dolores ea ratione voluptate hic sapiente obcaecati qui quod autem ut magnam sunt est placeat nesciunt.";
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading title={Data}/>
        <Body text={Data}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
