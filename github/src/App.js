import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { AboutPage, UserPage } from 'Pages'
import { Search, Tabs, Users } from 'Components'

const CLIENT_ID = ''
const CLIENT_SECRET = ''

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [languages, setLanguages] = useState({ langs: {}, percentages: {}, total: 0 })
  const [loading, setLoading] = useState(false)
  const [repoLoading, setRepoLoading] = useState(false)

  const getUsers = async (query) => {
    setLoading(true)

    const call = await fetch(`https://api.github.com/search/users?q=${query}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    const json = await call.json()

    setUsers(json.items)
    setLoading(false)
  }

  const getUser = async (query) => {
    setLoading(true)

    const call = await fetch(`https://api.github.com/users/${query}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    const json = await call.json()

    setUser(json)
    setLoading(false)
  }

  const getUserRepos = async (query) => {
    setRepoLoading(true)

    const repo_count = 3;
    const repo_sort = 'pushed';
    const repo_direction = 'desc';

    const call = await fetch(`https://api.github.com/users/${query}/repos?per_page=${repo_count}&sort=${repo_sort}&direction=${repo_direction}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    const json = await call.json()

    await getUserReposLanguages(json)

    setRepos(json)
    setRepoLoading(false)
  }

  const getUserReposLanguages = async (json) => {
    const newLangState = {...languages}

    for (const repo of json) {
      const call_lang = await fetch(`${repo.languages_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      const json_lang = await call_lang.json()

      repo.languages_fetched = json_lang

      // calc lang
      Object.entries(repo.languages_fetched).forEach((entry) => {
        const langName = entry[0]
        const langCount = entry[1]
        // add language to state if not already inside. if inside, add only the value
        if (!(newLangState.langs.hasOwnProperty(langName))) {
          newLangState.langs[langName] = langCount
        } else {
          newLangState.langs[langName] += langCount
        }
        // add value to total
        newLangState.total += langCount
      })
    }

    for (const key in newLangState.langs) {
      if (newLangState.langs.hasOwnProperty(key)) {
        newLangState.percentages[key] = Math.abs(newLangState.langs[key] / newLangState.total * 100).toFixed(2);
      }
    }

    setLanguages(newLangState)
  }

  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  return (
    <Router>
      <Tabs />
      <Switch>
        <Route exact path="/" render={() => (
          <div className="container py-5">
            <Search
              getUsers={getUsers}
              clearUsers={clearUsers}
              showClear={users.length > 0 ? true : false}
            />
            <Users users={users} loading={loading} />
          </div>
        )} />
        <Route exact path="/user/:username" render={(routerProps) => (
          <div className="container py-5">
            <UserPage
              getUser={getUser}
              getUserRepos={getUserRepos}
              user={user}
              repos={repos}
              languages={languages}
              loading={loading}
              repoLoading={repoLoading}
              {...routerProps}
            />
          </div>
        )} />
        <Route exact path="/about" render={AboutPage} />
      </Switch>
    </Router>
  )
}

export default App
