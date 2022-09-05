import './App.css';
import Residents from './pages/ResidentForm';
import { Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import SingleParent from './pages/SingleParentForm';
import Household from './pages/HouseholdForm';
import PWD from './pages/PwdForm';
import FinancialInfo from './pages/FinancialInfo';
import Dashboard from './pages/Dashboard';
import Records from './pages/Records';
import Reports from './pages/Reports';
import Som from './pages/Som';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
  {/* <Routes>
          
          <Route path='/' element= {<Sample />}/>
      
    </Routes> */}

    <Layout >
      <Routes>
          
              <Route exact path='/' element= {<Residents />}/>
              <Route path='/HouseholdForm' element= {<Household />}/>
              <Route path='/PwdForm' element= {<PWD />}/>
              <Route path='/FinancialInfo' element= {<FinancialInfo />}/>
              <Route path='/SingleParentForm' element= {<SingleParent />}/>
              <Route path='/Dashboard' element= {<Dashboard />}/>
              <Route path='/Records' element= {<Records />}/>
              <Route path='/Reports' element= {<Reports />}/>
              <Route path='/Som' element= {<Som />}/>
              <Route path='/Events' element= {<Events />}/>
        </Routes>
        </Layout>
    </div>
  );
}

export default App;
