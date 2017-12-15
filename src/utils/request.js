export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()

  if (type === 'GET') {
    let dataStr = '' // 数据字符串拼接
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })
    if (dataStr.length) {
      dataStr = dataStr.substr(0, dataStr.length - 1)
      url = url + '?' + dataStr
    }
  }
  if (window.fetch && method === 'fetch') { // window.fetch
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'force-cache'
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      console.info(url)
      console.log(responseJson)
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else { // XMLHttpRequest
    return new Promise((resolve, reject) => {
      let requestObj = new XMLHttpRequest()
      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      requestObj.open(type, url, true) // true规定请求是否异步
      requestObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) { // 4 = 'loaded'
          if (requestObj.status === 200) { // 200 = OK
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
