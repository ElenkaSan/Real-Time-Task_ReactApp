## Real-Time-Task Collaboration React App

First run [Real-Time-Task_websocket-server](https://github.com/ElenkaSan/Real-Time-Task_websocket-server/blob/main/README.md)

```
├── Real-Time-Task_ReactApp/      # Contains your React app
│   ├── src/                      # React app source code
|   |   ├── App.js
|   |   ├── App.snap.test.js
|   |    etc
|   |    
|   |── public 
│   ├── package.json              # Dependencies for the React app
|   |── package-lock.json 
│   └── node_modules/             # Installed Node.js packages
```
### Project Setup
In the project directory, you run:

```
npm install
# or
yarn install
```

In two terminals:
Run the WebSocket server 

```
node server.js
```

Second terminal 
Start your React app 

```
npm start
```
