import axios from 'axios';
// import socketio from 'socket.io-client';

const baseURL = 'http://localhost:5001';

const api = {
  http: axios.create({ baseURL }),
  // socket: socketio(baseURL),
};

export default api;
