/* eslint-disable no-undef */
import axios from "axios";

async function getUsers(page) {
  const API_URL = `https://api.github.com/search/users?q=followers:%3E=1000&per_page=20&page=${page}`;
  // const apiKey = process.env.REACT_APP_AUTH_TOKEN;

  try {
    const res = await axios.get(`${API_URL}`, {
      headers: {
        // "User-Agent": "request",
        Authorization: `token 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`,
      },
    });
    return res.data.items;
  } catch (error) {
    console.log(error);
    throw new Error("errrrror");
  }
}

const USER_API = `https://api.github.com/users`;

// new token
// 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

async function getUser(title) {
  try {
    const response = await axios.get(`${USER_API}/${title}`, {
      headers: {
        Authorization: `token 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`,
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
          Authorization: `token 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`,
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
          Authorization: `token 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`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUsers, getUser, getOrgs, getRepos };
