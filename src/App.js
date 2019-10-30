import React from 'react';
// import logo from './logo.svg';
import './App.css';

let props = {
  name: "Taylor",
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

function App(props) {
  console.log(props);
  return (
    <div>
      <header>
        <h1> {props.name} resume</h1>
        <h2>Learn more about Sally below!</h2>
      </header>

      <section>
        <h2>Education</h2>
        <h3>University of Nowhere</h3>
      </section>

      <section>
        <h2>Employement History</h2>
        <h3>XYZ Bakery</h3>
        <ul>
          <li>Title: Sales</li>
          <li>Dates: 2018-2019</li>
          <li>Description: Commercial sales for bakery</li>
        </ul>
        <h3>123 Cookies</h3>
        <ul>
          <li>Title: Sales</li>
          <li>Dates: 2016-2017</li>
          <li>Description: Commercial sales for cookies</li>
        </ul>
      </section>

      <address>
        <h2>Contact Info</h2>
        <ul>
          <li className="footerBox">{props.name}</li>
          <li className="footerBox"><a href="mailto:junk@gmail.com"> Email</a> </li>
          <li className="footerBox">(777)-777-777</li>
        </ul>
      </address>

    </div>
  );
}

export default App;
