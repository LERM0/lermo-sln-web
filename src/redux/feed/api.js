import { Http, HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  getFeeds(page, limit, uid) {
    let apiUrl;
    if (uid) {
      apiUrl = `${Config.API_ENDPOINT}/feeds?page=${page}&&limit=${limit}&&uid=${uid}`;
    } else {
      apiUrl = `${Config.API_ENDPOINT}/feeds?page=${page}&&limit=${limit}`;
    }
    return Http.get(apiUrl);
  },
  getMyFeed(page, limit) {
    const apiUrl = `${Config.API_ENDPOINT}/feeds/myfeed?page=${page}&&limit=${limit}`;
    return HttpAuth.get(apiUrl);
  },
};
