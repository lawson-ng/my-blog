import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

const USER_NAME = 'lawson-ng'

class GithubRest {
  userName
  octokit

  constructor(userName = USER_NAME) {
    this.userName = userName
    this.octokit = new Octokit()
    this.documentOption = {
      owner: this.userName,
      repo: 'my-blog',
      ref: 'documents',
      path: '',
    }
  }

  getDocumentOption(path) {
    return {
      ...this.documentOption,
      path,
    }
  }

  decodeContent(content) {
    return decodeURIComponent(escape(atob(content)))
  }

  async fetchContent(path) {
    const option = this.getDocumentOption(path)
    const response = await this.octokit.repos.getContent(option)
    return response
  }

  async getProfile() {
    const username = this.userName
    const response = await this.octokit.users.getByUsername({ username })
    return response.data
  }

  async getListPost() {
    const path = 'data/list-post.json'
    const response = await this.fetchContent(path)
    const json = this.decodeContent(response.data.content)
    return JSON.parse(json)
  }

  async getPostDetail(file) {
    const path = 'data/posts/' + file
    const response = await this.fetchContent(path)
    return this.decodeContent(response.data.content)
  }
}

export default GithubRest
