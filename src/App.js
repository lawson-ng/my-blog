import React, { useState, useEffect } from "react"
import { Octokit } from "@octokit/rest"
import { GoMarkGithub } from "react-icons/go"
import { AiFillTwitterCircle } from "react-icons/ai"
import MUISwitch from "./switch"
const octokit = new Octokit()

const BASE_TWITTER = "https://twitter.com/"

const USER = {
  avatar_url: "",
  name: "Lawson",
  bio: "",
  html_url: "",
  twitter_username: "",
}

const THEME = {
  dark: {
    bg: "dark",
    color: "white",
  },
  light: {
    bg: "white",
    color: "dark",
  },
}

function App() {
  const [user, setUser] = useState(USER)
  const [theme, setTheme] = useState(THEME.dark)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    octokit.rest.users
      .getByUsername({
        username: "lawson-ng",
      })
      .then((result) => {
        setUser(result.data)
      })
      .catch((error) => console.log("error", error))
  }, [])

  useEffect(() => {
    const newTheme = checked ? THEME.dark : THEME.light
    setTheme(newTheme)
  }, [checked])

  const text = `text-${theme.color}`

  return (
    <div className={`min-vh-100 bg-${theme.bg} m-0 p-0`}>
      <div className="container">
        <div className="row justify-content-end pt-2">
          <MUISwitch onChange={(e) => setChecked(!checked)} />
        </div>

        <div className="row">
          <div className="col-6 mx-auto d-flex justify-content-center">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-25 rounded-circle mt-2"
            />
          </div>
        </div>

        <section className="my-2">
          <div className="row text-center justify-content-center">
            <h3 className={`text-center ${text}`}>{user.name}</h3>
            <p className={text}>{user.bio}</p>
            <div>
              <a href={user.html_url} className={`${text} mx-1`}>
                <GoMarkGithub size={35} />
              </a>
              <a
                href={BASE_TWITTER + user.twitter_username}
                className={`${text} mx-1`}
              >
                <AiFillTwitterCircle size={40} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
