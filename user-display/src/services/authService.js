import axios from "axios";
import CryptoJS from "crypto-js";

const LOGIN_API_URL = "https://randomuser.me/api/?seed=lll";

export const login = async (username, password) => {
  try {
    const response = await axios.get(LOGIN_API_URL);
    const user = response.data.results[0].login;
    const storedSalt = user.salt; 
    const hashedPassword = CryptoJS.SHA256(password + storedSalt).toString();

    if (username === user.username && hashedPassword === user.sha256) {
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid Username or Password!" };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};
