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
    xhr.open(url, method);
    xhr.onload = function () {
      if (this.status === 200) 
        resolve(this.response);
    };

    xhr.onerror = function () {
      reject({
        status: this.statusText,
        error: this.status
      })
    };

    xhr.send(newData);
  })
}

export const isAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

export const authorize = data => {
  const user = JSON.stringify(data);
  localStorage.setItem('user', user);
}

export const addToFave = id => {
  let wishList = JSON.parse(localStorage.getItem('wishlist'));
  if (!wishList) wishList = [];
  const sameIndex = wishList.findIndex(item => item === id);
  if (!~sameIndex) wishList.push(id);
  else wishList.splice(sameIndex, 1);
  localStorage.setItem('wishlist', JSON.stringify(wishList));
}

export const isInWishlist = id => {
  const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
  return ~wishList.findIndex(item => item == id);
}
