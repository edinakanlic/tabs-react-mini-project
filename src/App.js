import React, { useState, useEffect } from 'react';
import Jobs from './Jobs';
import Buttons from './Buttons';

// import { FaAngleDoubleRight } from 'react-icons/fa';

// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  const ButtonHandler = (index) => {
    setValue(index);
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <Buttons jobs={jobs} onClick={ButtonHandler} value={value} />

        <Jobs {...jobs[value]} />
      </div>
    </section>
  );
}

export default App;
