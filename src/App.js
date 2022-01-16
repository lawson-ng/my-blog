import {useState, useEffect} from 'react'
import {Octokit} from '@octokit/rest'

const octokit = new Octokit()


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    octokit.rest.users.getByUsername({
      username: 'lawson-ng'
    })
      .then(setUser)
      .catch((error) => console.log('error', error))
  }, [])

  console.log('user', user)

  return (
    <>
      <h1>Hello I'm lawson</h1>
      <p>This is my personal blog</p>
    </>
  );
}

export default App;
