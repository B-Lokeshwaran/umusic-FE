import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../src/components/dashboard'
import Sidebar from '../src/components/Sidebar'
import Applications from './components/Applications'
import ShopifyStores from '../src/components/Shopify'
import Authentication from '../src/components/Authentication'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EditApplication from './components/EditApplication'
import Providers from './components/Providers'
import EditShop from './components/EditShop';
import EditAuth from './components/EditAuth'
import EditPro from './components/EditPro';
import ViewallApp from './components/ViewallApp';
import ViewallShop from './components/ViewallShop'
import ViewallAuth from './components/ViewallAuth'
import ViewallPro from './components/ViewallPro'
import AddShop from './components/AddShop'
import AddApp from './components/AddApp'
import AddAuth from './components/AddAuth'
import AddPro from './components/AddPro'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      {/* <Route path='/dashboard' element={<Carding/>}/> */}
      <Route path='/applications' element={<Applications/>}/>
      <Route path='/applications/editapp' element={<EditApplication/>}/>
      <Route path='/applications/AddApp' element={<AddApp/>}/>
      <Route path='/applications/viewall/:id' element={<ViewallApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/shopifystores/addshop' element={<AddShop/>}/>
      <Route path='/shopifystores/viewall/:id' element={<ViewallShop/>}/>
      <Route path='/shopifystores/editshop' element={<EditShop/>}/>
      <Route path='/authenticationproviders' element={<Authentication/>}/>
      <Route path='/authenticationproviders/viewall/:id' element={<ViewallAuth/>}/>
      <Route path='/authenticationproviders/editauth' element={<EditAuth/>}/>
      <Route path='/authenticationproviders/addauth' element={<AddAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/providers/editpro' element={<EditPro/>}/>
      <Route path='/providers/addpro' element={<AddPro/>}/>
      <Route path='/providers/viewall/:id' element={<ViewallPro/>}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
