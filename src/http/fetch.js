import axios from "axios";

const USER_API = `https://api.github.com/users`;

async function getUsers(page) {
  const API_URL = `https://api.github.com/search/users?q=followers:%3E=1000&per_page=20&page=${page}`;

  try {
    const res = await axios.get(`${API_URL}`,);
    return res.data.items;
  } catch (error) {
    console.log(error);
    throw new Error("errrrror");
  }
}

async function getUser(title) {
  try {
    const response = await axios.get(`${USER_API}/${title}`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("userrrrrr");
  }
}

async function getOrgs(title) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${title}/orgs`,
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getRepos(title) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${title}/repos`,
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUsers, getUser, getOrgs, getRepos };
