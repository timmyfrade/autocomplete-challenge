import AutocompleteInput from './components/AutocompleteInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <AutocompleteInput
        /* Array of fruits */
        fruits={
          ["Banana", "Apple", "Pear", "Lemon", "Lime", "Grape", 
          "Strawberry", "Blueberry", "Avocado", "Mango", 
          "Orange", "Kiwi", "Blackberry", "Peach", "Apricot"
        ]}
      />
    </div>
  );
}
export default App;