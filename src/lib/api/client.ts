// src/api/client.ts
import { Class1Api } from './apis/Class1Api';
import { Configuration } from './runtime';

const configuration = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL, // .env 파일에서 불러옵니다.
});

export const api = {
  class1: new Class1Api(configuration),
  // 다른 API 클래스도 여기에 추가할 수 있습니다.
};
