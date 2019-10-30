import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let props = {
    name: "Sally Student",
    education: "University of Nowhere",
    job: [
      {
        company: "XYZ Bakery",
        title: "Sales",
        dates: "2019-2019",
        description: "Commercial sales for bakery"
      },
      {
        company: "123 Cookies",
        title: "Sales",
        dates: "2016-2017",
        description: "Commercial sales for cookies"
      }
    ],
    email: "junk@gmail.com",
    phone: "(777)-777-777"
}

ReactDOM.render(<App name='name'/>, document.getElementById('root'));
