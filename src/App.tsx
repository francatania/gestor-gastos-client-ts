import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import API_BASE_URL  from './api/config.ts';
import './App.css'
// import { Home } from './components/Home.jsx'
// import { Login } from './components/Login.jsx'
// import { Register } from './components/Register.jsx';
// import { SpentsForm } from './components/SpentsForm.jsx'
// import { IncomesForm } from './components/IncomesForm.jsx'
// import {TransfersForm} from './components/TransfersForm.jsx'
// import { AccountsList } from './components/AccountsList.jsx';
// import { AccountsForm } from './components/AccountsForm.jsx';
// import { CategoriesForm } from './components/CategoriesForm.jsx';


const App: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [ arrayAccounts, setArrayAccounts ] = useState([]);


  return (
    <>
      {/* <SelectedAccountContext.Provider value={{selectedAccount, setSelectedAccount, arrayAccounts, setArrayAccounts}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="" element={<Navigate to="/login" />} />
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/spents-form' element={<SpentsForm/>}></Route>
              <Route path='/incomes-form' element={<IncomesForm/>}></Route>
              <Route path='/transfers-form' element={<TransfersForm/>}></Route>
              <Route path='/accounts' element={<AccountsList/>}></Route>
              <Route path='/accounts-form' element={<AccountsForm/>}></Route>
              <Route path= '/spents-category-form' element={<CategoriesForm/>}></Route>

            </Routes>
          </BrowserRouter>

    </SelectedAccountContext.Provider> */}
    <h1>{API_BASE_URL}</h1>
    </>
  )
}

export default App
