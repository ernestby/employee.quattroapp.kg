export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.log('Error getting data from localStorage');
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log('Error setting data to localStorage', e);
  }
};
