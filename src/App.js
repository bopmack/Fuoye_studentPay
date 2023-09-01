import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Register from './scenes/Register';
import Forgotpassword from './scenes/Forgotpassword';
import Login from './scenes/login';
 

import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";


//new routes
import Home from "./scenes/home";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

	const location = useLocation();
	const hideSidebarRoutes = [
		// '/login',
		// '/register',
		'/hireregister',
		'/hirelogin',
		'/welcome',
		'/home',
	];
	const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {shouldShowSidebar ||
						(location === '/form' && <Sidebar isSidebar={isSidebar} />)}
					<main className="content">
          {shouldShowSidebar ||
						( <Topbar setIsSidebar={setIsSidebar} />)}
         
            <Routes>
              <Route
                  path="/register"
                  element={<Register />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route path="/forget-password" element={<Forgotpassword />} />
                <Route path="/" element={<Home />} />
                {/* new routes */}
                <Route path="/home" element={<Home />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
