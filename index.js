require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "Sanjay-2001",
  id: 90711694,
  node_id: "MDQ6VXNlcjkwNzExNjk0",
  avatar_url: "https://avatars.githubusercontent.com/u/90711694?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sanjay-2001",
  html_url: "https://github.com/Sanjay-2001",
  followers_url: "https://api.github.com/users/Sanjay-2001/followers",
  following_url:
    "https://api.github.com/users/Sanjay-2001/following{/other_user}",
  gists_url: "https://api.github.com/users/Sanjay-2001/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Sanjay-2001/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Sanjay-2001/subscriptions",
  organizations_url: "https://api.github.com/users/Sanjay-2001/orgs",
  repos_url: "https://api.github.com/users/Sanjay-2001/repos",
  events_url: "https://api.github.com/users/Sanjay-2001/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Sanjay-2001/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 17,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-09-14T15:51:20Z",
  updated_at: "2024-03-19T04:51:33Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("<h1><b>this is home</b></h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
