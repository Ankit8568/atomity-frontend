"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Post } from "../types/api";

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

  return data;
};

export function useCloudData() {
  return useQuery<Post[]>({
    queryKey: ["cloudData"],
    queryFn: fetchPosts,

    staleTime: 1000 * 60 * 5,       // 5 minutes
    gcTime: 1000 * 60 * 30,         // 30 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });
}