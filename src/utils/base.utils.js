class BaseUtils {
  getUserName() {
    return localStorage.userData;
  }

  logout() {
    localStorage.clear();
  }

  dateFormat(date) {
    var mydate = new Date(date);
    return mydate.toString('d y');
  }
}

export const baseUtils = new BaseUtils();
