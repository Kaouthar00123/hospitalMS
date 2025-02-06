import axios from "axios";

export async function getAxios(url) {
  return axios({ method: "get", url: url });
}
export async function postAxios(url, data) {
  return axios({ method: "post", url: url, data: data });
}

export async function patchAxios(url, data) {
  return axios({ method: "patch", url: url, data: data });
}

export async function deleteAxios(url, data) {
  return axios({ method: "delete", url: url });
}

// export { getAxios, postAxios, patchAxios, deleteAxios };
