import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Form from './scenes/form';
import FAQ from './scenes/Faq';
import { Route, Routes, Switch } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout';





function App() {
  const [ theme, colorMode] = useMode();

  return  (
    <>
      
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className= "content">
          <Topbar />
          <Routes>
              <Switch>
                <Route path={["/Login"]}>
                   <LoginLayout>
                     <Route path="/Login" component={Login} />
                 </LoginLayout>
               </Route>
             </Switch>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            {/* <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} /> */}
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/Geo" element={<Geography />} /> */}
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/Login" element={<Login />} /> */}
           
          </Routes>
        </main>
       
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App;
