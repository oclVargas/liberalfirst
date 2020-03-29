import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Man Arrested For Stealing Bread Over 6 Years Ago</h1>
      <span className="article-date">Sunday 3:16PM • LIBERAL</span>
      <img className="bread-image" src="./bread.jpg" alt=""/>
      <article>
        <p>
          LIBERAL--A Liberal man has been arrested for stealing bolillos from Dillons in 2014.
          After a lengthy investigation by Liberal Police Department, the suspect, Osiel Vargas-Sanchez, was arrested in his home without incident.
        </p>
        <p>
          Sanchez, an employee of Dillons at the time, can be seen in new unreleased footage stuffing plastic bags full of
          bread. The photo as seen above was also published on Sanchez's Facebook page. An anonymous tip led to his arrest later that
          day.
        </p>
        <p>
          A statement released from Sanchez says that he did nothing wrong. Noting that it was an error by
          an employee that caused the bread to be so cheap. As part of a 'Buy 5 save $5' deal, the bags of bread
          could be bought 5 at a time so that the discount would be $5 thus equaling $0. 'Free bread', he said.
        </p>
      </article>
    </div>
  );
}

export default App;
