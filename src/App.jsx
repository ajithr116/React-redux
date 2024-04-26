import Counter from './components/counter/counter'
import ThemeSelector from './components/themeSelector/themeSelector' // Changed this line
import {Provider} from 'react-redux';
import store from './app/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <ThemeSelector /> 
      </Provider>
    </>
  )
}

export default App;
