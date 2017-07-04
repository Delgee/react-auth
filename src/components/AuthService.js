import axios from 'axios';
import qs from 'qs';

const AuthService = {
  isLogged: false,
  login(data, cb) {

    axios.post('/api/login',  qs.stringify(data)).then(
      (res) => {
        this.isLogged = true;
        cb(null, res);
      }
    ).catch((error) => {
      console.error('error occured', error);
      cb(error.response.data);
    })
  },
}

export default AuthService;
