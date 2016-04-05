var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.index({
    index: 'vmap',
    type: 'userinfo',
    id: '1',
    body: {
        "login": "daimajia",
        "id": 2503423,
        "avatar_url": "https://avatars.githubusercontent.com/u/2503423?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/daimajia",
        "html_url": "https://github.com/daimajia",
        "followers_url": "https://api.github.com/users/daimajia/followers",
        "following_url": "https://api.github.com/users/daimajia/following{/other_user}",
        "gists_url": "https://api.github.com/users/daimajia/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/daimajia/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/daimajia/subscriptions",
        "organizations_url": "https://api.github.com/users/daimajia/orgs",
        "repos_url": "https://api.github.com/users/daimajia/repos",
        "events_url": "https://api.github.com/users/daimajia/events{/privacy}",
        "received_events_url": "https://api.github.com/users/daimajia/received_events",
        "type": "User",
        "site_admin": false,
        "name": "代码家",
        "company": "Unemployment",
        "blog": "https://twitter.com/daimajia",
        "location": "Beijing, China",
        "email": "daimajia@gmail.com",
        "hireable": true,
        "bio": null,
        "public_repos": 53,
        "public_gists": 8,
        "followers": 8718,
        "following": 209,
        "created_at": "2012-10-07T02:40:06Z",
        "updated_at": "2016-04-03T12:30:16Z",
        "latLang": [39.9659583, 116.340371]
    }
}, function (error, response) {
    console.log(error)
});