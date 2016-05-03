/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

function makeInterestRequest(method, id, data, api = '/interests') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function fetchInterests() {
  console.log('FETCH INTERESTS');
  return {
    type: types.GET_INTERESTS,
    promise: makeInterestRequest('get')
  };
}
