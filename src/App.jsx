import React, { useState } from "react";
import useFetchJobs from "./hooks/useFetchJobs.js";
import JobList from "./components/JobList.jsx";
import "./App.css";
import LoadMoreButton from "./components/LoadMoreButton.jsx";

const App = () => {
  const [limit, setLimit] = useState(5);
  const { jobs, loading, setJobIds } = useFetchJobs(limit);

  const handleLoadMore = () => {
    setLimit(limit + 5);
  };

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} loading={loading} onLoadMoreJobs={handleLoadMore} />
      <LoadMoreButton loading={loading} onLoadMoreJobs={handleLoadMore} />
    </div>
  );
};

export default App;
