import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={{textAlign: 'center', backgroundColor: 'darkgoldenrod', color: 'white', margin: 0, padding: 12}}>ravenous</h1>
    <SearchBar />
    <BusinessList />
  </>
)