import React from 'react';

const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Popular TV Series</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {shows.map((show) => (
          <div key={show.show.id} className="col">
            <div className="card h-100">
              <img
                src={show.show.image?.medium || 'placeholder.jpg'}
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">{show.show.genres?.join(', ')}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectShow(show)}
                >
                  Show Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
