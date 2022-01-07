import { User }  from "./constants";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async (): Promise<User[]> => fetch(`${BASE_URL}/users`).then((res) => res.json());
