import React from "react";
import { Link, ReactLocation, Router, Outlet, 
    DefaultGenerics } from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { getActiveProps } from "../models/Types";
import { Home } from "../components/Home";
import { Post } from "../components/Post";
import { Select } from "../components/Select";
import { PostData } from "../components/PostData";
import { API } from "../global/Fetch";

const location: ReactLocation<DefaultGenerics> = new ReactLocation();

export const Main = (): JSX.Element => {
    return (
    <React.Fragment>
        <Router
            location={location}
            routes={[
                { path: "/", element: <Home /> },
                {
                    path: "posts",
                    element: <PostData />,
                    loader: async () => {
                        return {
                            posts: await API.fetchPosts(),
                        };
                    },
                    children: [
                        { path: "/", element: <Select /> },
                        {
                            path: ":postId",
                            element: <Post />,
                            loader: async ({ params: { postId } }) => {
                                return {
                                    post: await API.fetchPostById(postId),
                                };
                            },
                        },
                    ]
                }
            ]}
            >
            <main>
                <Link 
                    to="/" 
                    getActiveProps={getActiveProps} 
                    activeOptions={{ exact: true }}
                    >Home
                </Link>{" "}
                <Link 
                    to="posts" 
                    getActiveProps={getActiveProps}
                    >Posts
                </Link>
            </main>
            <hr />
            <Outlet />
            <ReactLocationDevtools />
        </Router>
    </React.Fragment>
    );
};




