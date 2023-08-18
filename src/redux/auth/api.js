import { Http, HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  login(form) {
    const apiUrl = `${Config.API_ENDPOINT}/auth/signin`;
    return Http.post(apiUrl, form);
  },
  fetchProfile() {
    const apiUrl = `${Config.API_ENDPOINT}/users/profile`;
    return HttpAuth.get(apiUrl);
  },
  forgot(form) {
    const apiUrl = `${Config.API_ENDPOINT}/users/forgot`;
    return Http.post(apiUrl, form);
  },
};
