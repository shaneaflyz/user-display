import axios from "axios";

const FRIENDS_API_URL = "https://randomuser.me/api/?results=50";

export const fetchFriends = async () => {
  try {
    const response = await axios.get(FRIENDS_API_URL);
    return { success: true, data: response.data.results };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
