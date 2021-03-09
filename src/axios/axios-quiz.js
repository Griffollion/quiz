import axios from "axios";

export default axios.create({
  baseURL: "https://react-quiz-73bcd-default-rtdb.firebaseio.com"
})