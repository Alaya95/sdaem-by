import React from 'react';
import './app/index.scss';

import { Header } from "./widgets/Header/Header";
import { Footer } from "./widgets/Footer/Footer";
import { AppRouter } from "./Routes";

function App() {
  return (
    <div id="app" className="app">
        <div className="wrapper">
            <Header />
            <div className="content">
                <AppRouter />
            </div>
            <Footer />
        </div>

    </div>
  );
}

export default App;
