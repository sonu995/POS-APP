import './App.css';
import NavTab from './component/NavTab';
import { DataProvider } from './Context/DataContext';
import { ShordataProvider } from './Context/Shortcutdata';
import Footer from './Pages/Footer';



function App() {
  return (
    <div className="App">
   
       <DataProvider>
       <ShordataProvider>
       <NavTab/>
       </ShordataProvider>
      </DataProvider>
      <Footer/>
 
    </div>
  );
}

export default App;
