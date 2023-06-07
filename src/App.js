import React, { useEffect, useState } from 'react';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowSelect = (show) => {
    setSelectedShow(show.show);
  };

  return (
    <div>
      {selectedShow ? (
        <ShowDetails show={selectedShow} />
      ) : (
        <ShowList shows={shows} onSelectShow={handleShowSelect} />
      )}
    </div>
  );
};

export default App;
