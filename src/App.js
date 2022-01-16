import {useState, useEffect} from 'react'
import {Octokit} from '@octokit/rest'
import { GoMarkGithub } from "react-icons/go";
import {AiFillTwitterCircle} from 'react-icons/ai'

const octokit = new Octokit()

const BASE_TWITTER = "https://twitter.com/"

const USER = {
  avatar_url: '',
  name: 'Lawson',
  bio: '',
  html_url: '',
  twitter_username: '',
}

function App() {
  const [user, setUser] = useState(USER)

  useEffect(() => {
    octokit.rest.users.getByUsername({
      username: 'lawson-ng'
    })
      .then((result) => {
        setUser(result.data)
      })
      .catch((error) => console.log('error', error))
  }, [])

  console.log('user', user)

  return (
    <div className='container'>
      <div className='row justify-content-center mt-2'>
        <img src={user.avatar_url} alt={user.name} className='w-25 rounded-circle'/>
      </div>

      <section className='my-2'>
        <div className='row text-center justify-content-center'>
          <h3 className='text-center'>{user.name}</h3>
          <p className='w-50'>{user.bio}</p>
          <div>
            <a href={user.html_url} className='text-dark mx-1'><GoMarkGithub size={35} /></a>
            <a href={BASE_TWITTER + user.twitter_username} className='text-dark mx-1'><AiFillTwitterCircle size={40} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
