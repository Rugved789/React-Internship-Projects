import { useContext } from 'react';
import Header from './components/header';
import Main from './components/main';
import ThemeContext from './context/theme.context';
import './styles/components/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;