import React from 'react';

const JobCard = ({ job }) => {
  if (!job) return null;

  const formattedTime = new Date(job.time * 1000).toLocaleString();  // Convert timestamp to readable format
  const sanitizedText = job.text ? (
    // Added dangerouslySetInnerHTML as job.text contains few Html tags in it.
    <div className='job-description' dangerouslySetInnerHTML={{ __html: job.text }} />
  ) : (
    <p>No description available</p>
  );

  return (
    <div className="job-card" id='job-card'>
      <h2><a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a></h2>
      <p><strong>Company:</strong> {job.by}</p>
      <p><strong>Score:</strong> {job.score}</p>
      <p><strong>Posted on:</strong> {formattedTime}</p>
      {/* <p>{job.text}</p> */}
      {sanitizedText}
    </div>
  );
};

export default JobCard;
