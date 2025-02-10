import React from "react";

const LoadMoreButton = ({ loading, onLoadMoreJobs }) => {
  return (
    <div>
      {!loading && (
        <button onClick={onLoadMoreJobs} className="loadButton">
          Click to Load More Jobs
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
