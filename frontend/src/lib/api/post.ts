import client from './client';
import Cookies from 'js-cookie';
import { PostParams } from '../../interfaces/index';

// 一覧
export const getList = () => {
  return client.get('/posts');
};

// 詳細
export const getDetail = (id: number) => {
  return client.get(`/posts/${id}`);
};

// 新規作成
export const createPost = (params: PostParams) => {
  return client.post('/posts', params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 更新
export const updatePost = (id: number, params: PostParams) => {
  return client.patch(`/posts/${id}`, params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 削除
export const deletePost = (id: number) => {
  return client.delete(`/posts/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};
