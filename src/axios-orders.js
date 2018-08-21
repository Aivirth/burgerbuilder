import axios from "axios";
import { firebaseDB } from "./firebase";

const instance = axios.create({
  baseURL: firebaseDB
});

export default instance;
