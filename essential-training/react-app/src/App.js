import './App.css';
import { useState, useEffect } from "react";

function GithubUser({name, location, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/ming-tsai')
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, []);
  if (loading) {
    return (<h1>loading...</h1>)
  }

  if (error) {
    return (<pre>{JSON.stringify(error)}</pre>)
  }

  if(!data) {
    return null;
  } 
  if (data) {
    return (
      <GithubUser
        location={data.location}
        name={data.name}
        avatar={data.avatar_url} />
    );
  }
  return <h1>Data</h1>
}

export default App;
