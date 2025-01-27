## Real-Time-Task Collaboration React App

This starts the React app on http://localhost:3000

### The first run in a different terminal: [Real-Time-Task_websocket-server](https://github.com/ElenkaSan/Real-Time-Task_websocket-server/tree/main)

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
For every event (add Task, toggle Task, delete Task), the WebSocket server broadcasts the update to all clients, and you should see these logs in your terminal as on DevTools on console. 

Second terminal 
Start your React app 

```
npm start
```
Open http://localhost:3000 and see how it should be

https://github.com/user-attachments/assets/b712ca6d-6c9d-4c85-a8ec-598bb6d74954

Run test 

```
npm test
```


