import React, { useState } from 'react';

//TODO: add some style

export default function ActivityFinder() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const req = await fetch('https://www.boredapi.com/api/activity/');
    const activity = await req.json();

    console.log(activity);

    return setData(activity);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <div>Are you bored? Or maybe do you want to find new activity to do? </div>
      <div>Click the button to find activity.</div>
      <button onClick={handleClick}>FETCH DATA</button>
      {data && (
        <>
          <div>{data.activity}</div>
          <div>{data.link}</div>
        </>
      )}
    </div>
  );
}
