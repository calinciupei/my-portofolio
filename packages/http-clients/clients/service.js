import { API } from "../endpoints";
import { get, post } from "../request/request";

function Service() {
  async function getData() {
    return get(API.DATA);
  }

  async function postData() {
    return post(API.DATA);
  }

  return { getData };
}

export { Service };
