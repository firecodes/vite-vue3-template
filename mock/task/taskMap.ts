import Mock from 'mockjs';
import { resultSuccess, getSuperTableData } from '../_util';

const Random = Mock.Random;
const token = Random.string('upper', 32, 32);


const taskMapData = (query) => {
  const result: any = {
    token,
    paging: {
      next: query?.since > 1000 ? 0 : 1,
      cursors: {
        after: 1,
        before: 2
      }
    },
    data: getSuperTableData(query?.limit || 20),
  };
  return result;
};

export default [{
  url: '/api/taskMap',
  timeout: 1000,
  method: 'get',
  response: ({ query }) => {
    const result = taskMapData(query);
    return resultSuccess(result);
  },
}];
