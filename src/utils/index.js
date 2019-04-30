const generateData = object => {
  const arr = Object.entries(object);
  const formData = new FormData();
  arr.forEach(([key, value]) => formData.append(key, value));
  return formData;
}

export const makeRequest =  (url, method, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const newData = data ? generateData(data) : null;
    xhr.open(url, method)
    xhr.onload = function () {
      if (this.status === 200) 
        resolve(this.response)
    }

    xhr.onerror = function () {
      reject({
        status: this.statusText,
        error: this.status
      })
    }

    xhr.send(newData);
  })
}