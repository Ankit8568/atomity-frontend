import axios from "axios";
import type { Post } from "../types/api";

export async function fetchCloudData(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

  return data;
}