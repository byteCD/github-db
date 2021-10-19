import axios from "axios";

class RepositoryService {
  async getRepositories(username) {
    const repositories = await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.data);

    return repositories;
  }

  async getRepository(username, repositoryName) {
    const repository = await axios
      .get(`https://api.github.com/repos/${username}/${repositoryName}`)
      .then((res) => res.data);

    return repository;
  }
}

export default new RepositoryService();
