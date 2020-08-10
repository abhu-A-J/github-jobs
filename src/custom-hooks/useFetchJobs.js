import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://jobs.github.com/positions`;

const useFetchJobs = (params) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState({});
  const [isFetching, setFetchingState] = useState(true);

  useEffect(() => {
    console.log("Fired!");
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`https://cors-anywhere.herokuapp.com/${BASE_URL}.json`, {
        cancelToken: cancelToken.token,
        params: {
          ...params,
        },
      })
      .then((response) => {
        setJobs(response.data);
        setFetchingState(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(error);
      });

    return () => {
      cancelToken.cancel();
    };
  }, [params]);

  return [isFetching, jobs, error];
};

export default useFetchJobs;
