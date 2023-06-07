import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div className="container">
      <h1 className="text-center">{show.name}</h1>
      <div className="card mb-4">
        <img
          src={show.image?.medium || 'placeholder.jpg'}
          className="card-img-top"
          alt={show.name}
        />
        <div className="card-body">
          <h5 className="card-title">Summary</h5>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          ></div>
          <div className="show-details">
            <p>
              <strong>Genres:</strong> {show.genres?.join(', ')}
            </p>
            <p>
              <strong>Language:</strong> {show.language}
            </p>
            <p>
              <strong>Premiered:</strong> {show.premiered}
            </p>
            <p>
              <strong>Rating:</strong> {show.rating?.average || 'N/A'}
            </p>
            <p>
              <strong>Official Site:</strong>{' '}
              <a
                href={show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Show's Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
