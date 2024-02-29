import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api, profileResponse } from "../lib/axios";

interface Profile {
  name: string;
  avatarURL: string;
  gitLink: string;
  bio: string | null;
  profile: string;
  company: string | null;
  followers: number;
}

export interface PostInfo {
  id: number;
  user: {
    login: string;
  };
  repository_url: string;
  title: string;
  body: string;
  created_at: Date;
  comments: number;
}

interface GitContextType {
  myProfile: Profile;
  posts: PostInfo[];
  fetchPost: (id: string) => Promise<PostInfo>;
}

export const GitContext = createContext({} as GitContextType);

interface GitProviderProps {
  children: ReactNode;
}

export function GitProvider({ children }: GitProviderProps) {
  const [posts, setPosts] = useState([] as PostInfo[]);
  const [myProfile, setMyProfile] = useState({} as Profile);

  const fetchPost = useCallback(async (id: string) => {
    return (await api.get(`/repos/Pugialli/github-blog/issues/${id}`))
      .data as PostInfo;
  }, []);

  const fetchPosts = useCallback(async (query?: string) => {
    if (!query) {
      query = "";
    }
    const response = await api.get("/search/issues", {
      params: {
        q: `${query}repo:Pugialli/github-blog`,
      },
    });

    setPosts(response.data.items);
  }, []);

  const fetchProfile = useCallback(async () => {
    const response = await api.get("/users/pugialli");

    const data: profileResponse = response.data;

    const profileData: Profile = {
      avatarURL: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.following,
      gitLink: data.html_url,
      name: data.name,
      profile: data.login,
    };

    setMyProfile(profileData);
  }, []);

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, [fetchProfile, fetchPosts]);

  return (
    <GitContext.Provider value={{ myProfile, posts, fetchPost }}>
      {children}
    </GitContext.Provider>
  );
}
