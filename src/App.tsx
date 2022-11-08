import React from 'react';
import './app/index.scss';

import { Header } from "./widgets/Header/Header";
import {Footer} from "./widgets/Footer/Footer";
import {News} from "./pages/News/News";

function App() {
  return (
    <div id="app" className="app">
        <div className="wrapper">
            <div className="content">
                <Header />
                <News />
            </div>
            <Footer />
        </div>

    </div>
  );
}

export default App;
