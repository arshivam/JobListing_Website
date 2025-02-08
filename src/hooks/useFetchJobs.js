import { useState, useEffect } from 'react';

const useFetchJobs = (limit) => {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobIds = async () => {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
      const ids = await response.json();
      setJobIds(ids.slice(0, limit)); // Initially fetching only limited job IDs ( i.e: 5 jobIds)
    };
    fetchJobIds();
  }, [limit]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true);
      const jobDetails = await Promise.all(
        jobIds.map(async (id) => {
          // fetching all jobs based on job ids available
          const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return await response.json();
        })
      );
      setJobs(jobDetails);
      setLoading(false);
    };

    if (jobIds.length > 0) {
      fetchJobDetails();
    }
  }, [jobIds]);

  return { jobs, loading, setJobIds };
};

export default useFetchJobs;
