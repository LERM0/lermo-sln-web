import { Http, HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  register(form) {
    const apiUrl = `${Config.API_ENDPOINT}/users/register`;
    return Http.post(apiUrl, form);
  },
  getTeachers() {
    const api = `${Config.API_ENDPOINT}/users`;
    return HttpAuth.get(api);
  },
  getProfile(userId) {
    const api = `${Config.API_ENDPOINT}/users/profile/${userId}`;
    return Http.get(api);
  },
  getMyProfile() {
    const api = `${Config.API_ENDPOINT}/users/profile`;
    return HttpAuth.get(api);
  },
  follow(data) {
    const api = `${Config.API_ENDPOINT}/users/follow`;
    return HttpAuth.post(api, data);
  },
  unfollow(data) {
    const api = `${Config.API_ENDPOINT}/users/unfollow`;
    return HttpAuth.post(api, data);
  },
  getFollow(id, isFollowId) {
    const apiUrl = `${Config.API_ENDPOINT}/users/follow/${id}?isFollowId=${isFollowId}`;
    return HttpAuth.get(apiUrl);
  },
  updateUser(form) {
    const api = `${Config.API_ENDPOINT}/users/profile`;
    return HttpAuth.patch(api, form);
  },
  resetPassword(form) {
    const api = `${Config.API_ENDPOINT}/users/resetpassword`;
    return HttpAuth.patch(api, form);
  },
  uploadBanner(data) {
    const { file } = data;
    const form = new FormData();
    form.append('file', file);
    const apiUrl = `${Config.API_ENDPOINT}/users/profile/banner`;
    return HttpAuth.patch(apiUrl, form);
  },
  uploadAvatar(data) {
    const { file } = data;
    const form = new FormData();
    form.append('file', file);
    const apiUrl = `${Config.API_ENDPOINT}/users/profile/avatar`;
    return HttpAuth.patch(apiUrl, form);
  },
  getNoti() {
    const apiUrl = `${Config.API_ENDPOINT}/notifications`;
    return HttpAuth.get(apiUrl);
  },
  updateNoti() {
    const apiUrl = `${Config.API_ENDPOINT}/notifications`;
    return HttpAuth.post(apiUrl);
  },
};
