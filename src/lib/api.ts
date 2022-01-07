import axios from "axios";
import { User } from "./constants";

export const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async () => (await axiosClient.get<User[]>("/users")).data;
