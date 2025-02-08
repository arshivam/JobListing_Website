import React from 'react';
import JobCard from './JobCard';
import LoadMoreButton from './LoadMoreButton';

const JobList = ({ jobs, loading, onLoadMoreJobs }) => {
  return (
    <div className="job-list">
      {loading && <h3>Loading jobs...</h3>}
      {!loading && jobs.length === 0 && <p>No jobs found!</p>}
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
      {/* <LoadMoreButton onLoadMore={onLoadMore} /> */}
    </div>
  );
};

export default JobList;
