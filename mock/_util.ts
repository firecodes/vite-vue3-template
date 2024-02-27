import Mock from 'mockjs';

export function resultSuccess(result, { message = 'ok' } = {}) {
  return Mock.mock({
    code: 200,
    result,
    message,
    type: 'success',
  });
}

export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      page,
      pageSize,
      pageCount: list.length,
      list: pageData,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export function doCustomTimes(times: number, callback: any) {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { token?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.token;
}


export function getSuperTableData(pageSize = 100): Array<any> {
  const imgList = [
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
  ];
  const data = Array.from({ length: pageSize }).map((_, index) => (() => {
    let src = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
    let maxSrc = 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg';
    if (index !== 0) {
      src = `image @{index}`;
      maxSrc = imgList[index % imgList.length];
    }
    return {
      src,
      maxSrc,
      $num: index,
      Active: 1,
      _state: 'modified',
      Recurring: 0,
      Duration: 5,
      CalendarUID: -1,
      Notes: '',
      ActualFinish: null,
      Start: '2020-06-26T00:00:00',
      PredecessorLink: [],
      Work: 40,
      LateStart: '2020-06-26T00:00:00',
      expanded: true,
      ConstraintDate: null,
      Finish: '2020-07-02T23:59:59',
      ActualStart: null,
      OutlineLevel: 1,
      ID: 1,
      Milestone: 0,
      OutlineNumber: '1',
      Priority: 500,
      l1O10o: '2020-06-26T00:00:00',
      Manual: 0,
      _uid: 117,
      IgnoreResourceCalendar: 0,
      Rollup: false,
      EarnedValueMethod: 0,
      TotalSlack: 0,
      ConstraintType: 0,
      EffortDriven: 1,
      Name: '项目范围规划',
      EarlyFinish: '2020-07-02T23:59:59',
      ol10Oo: '2020-07-02T23:59:59',
      FixedDate: 0,
      _pid: -1,
      PercentComplete: 0,
    };
  })(),
  );
  return data;
}