import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id-token");
  }

  login(idToken) {
    localStorage.setItem("id-token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id-token");
    window.location.assign("/");
  }
}

export default new AuthService();
