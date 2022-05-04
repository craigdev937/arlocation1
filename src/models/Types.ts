import { MakeGenerics } from "@tanstack/react-location";

export type PostType = {
    id: string,
    title: string,
    body: string
};

export type LocationGenerics = MakeGenerics<{
    LoaderData: {
        post: PostType,
        posts: PostType[]
    };
}>;

export function getActiveProps() {
    return {
        style: {
            fontWeight: "bold",
        },
    };
};


