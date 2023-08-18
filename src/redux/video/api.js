import { Http, HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  getVideos(page = 0, limit = 10) {
    const apiUrl = `${Config.API_ENDPOINT}/videos?page=${page}&&limit=${limit}`;
    return HttpAuth.get(apiUrl);
  },

  getVideo(id) {
    const apiUrl = `${Config.API_ENDPOINT}/videos/${id}`;
    return Http.get(apiUrl);
  },

  getVideoComments(id) {
    const apiUrl = `${Config.API_ENDPOINT}/videos/${id}/comments`;
    return HttpAuth.get(apiUrl);
  },

  getVideoByUserId(userId) {
    const apiUrl = `${Config.API_ENDPOINT}/videos?user=${userId}`;
    return Http.get(apiUrl);
  },

  createVideo(data) {
    const apiUrl = `${Config.API_ENDPOINT}/videos`;
    return HttpAuth.post(apiUrl, data);
  },

  updateVideo(data) {
    const apiUrl = `${Config.API_ENDPOINT}/videos`;
    return HttpAuth.patch(apiUrl, data);
  },

  getCategories() {
    const apiUrl = `${Config.API_ENDPOINT}/categories`;
    return Http.get(apiUrl);
  },

  uploadVideo(data) {
    const { file, videoId } = data;
    const form = new FormData();
    form.append('file', file);
    form.append('videoId', videoId);
    const apiUrl = `${Config.API_ENDPOINT}/videos/${videoId}/upload`;
    return HttpAuth.post(apiUrl, form);
  },

  uploadThumbnail(data) {
    const { videoId, file } = data;
    const form = new FormData();
    form.append('file', file);

    const apiUrl = `${Config.API_ENDPOINT}/videos/${videoId}/thumbnail`;
    return HttpAuth.patch(apiUrl, form);
  },

  addComment(id, comment) {
    const apiUrl = `${Config.API_ENDPOINT}/videos/${id}/comments`;
    const payload = { message: comment };
    return HttpAuth.post(apiUrl, payload);
  },

  updateView(id) {
    const apiUrl = `${Config.API_ENDPOINT}/videos/${id}/view`;
    return Http.patch(apiUrl);
  },

  endLive(videoKey) {
    const body = {
      videoKey,
    };
    const apiUrl = `${Config.API_ENDPOINT}/videos/stream/end`;
    return Http.post(apiUrl, body);
  },
};
