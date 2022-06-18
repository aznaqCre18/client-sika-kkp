import { SERVICES } from '../../configs/services';
import fetch from '../../utils/fetch';
import AuthService from '../../utils/authService';
import { toast } from 'react-toastify';

const Auth = new AuthService();

export function login(payload) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      url: SERVICES.LOGIN,
      data: payload
    }

    fetch(options).then((res => {
        if(res.status === 200) {
          console.log('masuk 200');
          Auth.setToken(res.data.token);
          Auth.setProfile(res.data.user);
          Auth.setUserType(payload.userType);

          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          window.location.replace('/');
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    })).catch(err => {
      toast.error(err.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    })
  }
}