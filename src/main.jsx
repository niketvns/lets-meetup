import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {MeetupContextProvider} from "./contexts/meetupContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <MeetupContextProvider>
              <App />
          </MeetupContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
