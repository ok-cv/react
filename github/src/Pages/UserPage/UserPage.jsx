import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const DATE = (val) => new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(val))

const UserPage = ({ getUser, getUserRepos, user, repos, languages, loading, repoLoading, match }) => {
  useEffect(() => {
    getUser(match.params.username)
    getUserRepos(match.params.username)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="row">
      <div className="col-12">
        <Link to="/" className="btn btn-primary mb-3">Back to Search</Link>
      </div>
      <div className="col-12 col-lg-3">
        <div className="card">
          <img src={user.avatar_url} className="card-img-top" />
          <div className="card-body">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{user.login}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{user.location}</td>
                </tr>
                <tr>
                  <td>Bio</td>
                  <td>{user.bio}</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td className="text-break">{user.blog}</td>
                </tr>
                <tr>
                  <td>Link</td>
                  <td><a href={user.html_url}>Open on GitHub</a></td>
                </tr>
                <tr>
                  <td>Followers</td>
                  <td>{user.followers}</td>
                </tr>
                <tr>
                  <td>Following</td>
                  <td>{user.following}</td>
                </tr>
                <tr>
                  <td>Repos</td>
                  <td>{user.public_repos}</td>
                </tr>
                <tr>
                  <td>Gists</td>
                  <td>{user.public_gists}</td>
                </tr>
                <tr>
                  <td>Hireable</td>
                  <td>{user.hireable ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td>Since</td>
                  <td>{user.created_at && DATE(user.created_at)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-9">
        <h2 className="mb-4">Languages in {repos.length} recently updated repos</h2>
        {
          Object.entries(languages.percentages).length !== 0 ?
          Object.entries(languages.percentages).map(([key, value], index) => (
            <div key={index}>
              {key}: {value} %
              <div key={index} className="progress">
                <div className="progress-bar" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          )) :
          <div className="">Language percentages not calculated.</div>
        }
        <h2 className="my-4">{repos.length} recently updated repos</h2>
        {repoLoading && <div>Repo loading...</div>}
        <div className="row">
          {
            repos.map((repo, index) => (
              <div key={index} className="col-12">
                <div className="">
                  <div className="">
                    <div className="text-center">
                      <h3>
                        {repo.name}
                      </h3>
                      <p className="mt-2">
                        {repo.description || 'No description'}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Link</td>
                          <td><a href={repo.html_url} className="">Open on GitHub</a></td>
                        </tr>
                        <tr>
                          <td>Languages</td>
                          <td>
                            {
                              repo.languages_fetched
                              ? Object.keys(repo.languages_fetched).map((cur, i) => (i !== 0 ? ', ' : '') + cur)
                              : <div className="">Languages not fetched.</div>
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Created</td>
                          <td>{repo.created_at && DATE(repo.created_at)}</td>
                        </tr>
                        <tr>
                          <td>Updated</td>
                          <td>{repo.updated_at && DATE(repo.updated_at)}</td>
                        </tr>
                        <tr>
                          <td>Stars</td>
                          <td>{repo.stargazers_count}</td>
                        </tr>
                        <tr>
                          <td>Forks</td>
                          <td>{repo.forks_count}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserPage
