import { Provider } from 'react-redux';

import './App.css';
import CakeContainer from './components/cakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <IceCreamContainer />
        <CakeContainer />
        <HooksCakeContainer/>
        <NewCakeContainer />
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
