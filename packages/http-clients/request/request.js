import axios from "axios";

async function request(requestConfig) {
  const { method, url, data } = requestConfig;

  try {
    const response = await axios({
      method: method,
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data || {},
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

async function get(url, config = {}) {
  return request({
    ...config,
    url,
    method: "GET",
  });
}

async function post(url, config = {}) {
  return request({
    ...config,
    url,
    method: "POST",
  });
}

export { get, post };
