import axios from "axios";

class UserService {
  async getUsers(username, page) {
    const users = await axios
      .get(
        `https://api.github.com/search/users?q=${username}&per_page=60&page=${page}`
      )
      .then((res) => res.data);

    return users;
  }

  async getUser(username) {
    const user = await axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => res.data);

    return user;
  }
}

export default new UserService();
