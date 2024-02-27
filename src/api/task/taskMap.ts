import { http } from '@/utils/http/axios';

export interface TaskDataResponse<T = any> {
  data: Array<T>
  paging: {
    next?: string
    cursors: {
      after?: string
      before?: string
    }
  }
}

export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  result: TaskDataResponse;
}

export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
  total: number;
}
export function getMediasList(options) {
  const defaultFields = `id,username,permalink,caption,media_type,media_url,thumbnail_url,timestamp`
  const params: Record<string, any> = {
    // access_token: INSTAGRAM_TOKEN,
    fields: options?.fields ?? defaultFields,
    limit: options?.limit ?? 20
  }
  if (options?.since) {
    params.since = options.since
  }
  if (options?.after) {
    params.after = options.after
  }
  // https://graph.instagram.com/me/media
  return http.request({ url: '/taskMap', method: 'get', params });
}
