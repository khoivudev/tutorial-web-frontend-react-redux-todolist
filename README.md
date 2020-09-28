
## INTRO
This is todo-list front-end app. <br/>
This app call an RESTful API.<br/>
Framework: ReactJs Class Programming<br/>
Build: npm<br/>

### DEVELOPMENT
1. Set proxy, must to be a string in package.json file

2. For example
  "proxy": "https://backend.example.com"

3. Run project
   npm install && npm start || yarn install && yarn start

### DEPLOYMENT
Set Proxy to deloy Heroku:
1. When deploy on heroku, just push only package-lock.json or yarn.lock. Dont push both those files!
    npm install || yarn install

2. Create static.json file
{
    "root": "build/",
    "clean_urls": false,
    "routes": {
        "/**": "index.html"
    },
    "https_only": true,
    "headers": {
        "/**": {
            "Strict-Transport-Security": "max-age=7776000"
        }
    },
    "proxies": {
        "/api/": {
            "origin": "${API_URL}"
        }
    }
}

3. Push file to heroku
    git push heroku master

4. Config proxy heroku
All request from react contain "/api/abc" -> "/abc" 
For example:
From react:    axios.get("/api/search-items")   → ${API_URL}/search-items  
From react:     axios.get("/api/users/me")   → ${API_URL}/users/me
(!)Therefore, run this cmd to set proxy var in heroku: 
    heroku config:set API_URL="https://backend.example.com/api" 