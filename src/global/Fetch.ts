import { PostType } from "../models/Types";
const URL = "https://jsonplaceholder.typicode.com/posts";

class FetchClass {
    fetchPosts = async (): Promise<PostType[]> => {
        const res: Response = await fetch(URL);
        await new Promise((res) => setTimeout(res, 2000));
        if (!res.ok) throw new Error(res.statusText);
        const data: PostType[] = await res.json();
        return [...data.slice(0, 5)];
    };

    fetchPostById = async (postId: string): Promise<PostType> => {
        const res: Response = await fetch(`${URL}/${postId}`);
        await new Promise((res) => setTimeout(res, 2000));
        if (!res.ok) throw new Error(res.statusText);
        const data: PostType = await res.json();
        return data;
    };
};

export const API: FetchClass = new FetchClass();


