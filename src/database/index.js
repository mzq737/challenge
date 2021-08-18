'use strict';

const _ = require('lodash');
const db = require('./db');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = dataAccessMethod => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getItems = () => {
  const dataAccessMethod = () => {
    let items = [];
    _.map(db.itemsOfUserByUsername, itemsList => {
      itemsList.forEach(item => {
        if (!items.includes(item)) {
          items.push(item);
        }
      });
    });
    return items;
  };
  return mockDBCall(dataAccessMethod);
};

const getAgeByName = name => {
  let age = 0;
  _.map(db.usersById, userInfo => {
    if (userInfo.username === name) {
      age = userInfo.age;
    }
  });
  return age;
};

const getNameListByItem = item => {
  let list = [];
  _.map(db.itemsOfUserByUsername, (itemsList, user) => {
    if (itemsList.includes(item)) {
      list.push(user);
    }
  });
  return list;
};

const mapAgesByName = names => {
  let hashMap = new Map();
  names.forEach(name => {
    let age = getAgeByName(name);
    if (hashMap.has(age)) {
      hashMap.set(age, hashMap.get(age) + 1);
    } else {
      hashMap.set(age, 1);
    }
  });
  return hashMap;
};

const getListOfAgesOfUsersWith = item => {
  const dataAccessMethod = () => {
    const nameList = getNameListByItem(item);
    let map = mapAgesByName(nameList);
    let result = [];
    for (let [key, value] of map) {
      result.push({ age: key, count: value });
    }
    return result;
  };
  return mockDBCall(dataAccessMethod);
};


module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getItems
};