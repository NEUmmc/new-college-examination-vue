import axios from 'axios'

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        alert('Api--ok');
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi() {
    alert('进入api.js')
    return fetch('/api/getBoardList');
  }
}
