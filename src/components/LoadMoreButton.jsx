import React from "react";

const LoadMoreButton = ({ loading, onLoadMoreJobs }) => {
  return (
    <div>
      {!loading && (
        <button onClick={onLoadMoreJobs} className="load-more-button">
          Click to Load More Jobs
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
