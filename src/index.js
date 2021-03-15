import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.js"

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
