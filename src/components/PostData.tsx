import React from "react";
import { Link, Outlet, useMatch } from "@tanstack/react-location";
import { LocationGenerics } from "../models/Types";
import { getActiveProps } from "../models/Types";

export const PostData = (): JSX.Element => {
    const {
        data: { posts },
    } = useMatch<LocationGenerics>();

    return (
        <React.Fragment>
            <aside>
                {posts?.map((post) => {
                    return (
                        <section key={post.id}>
                            <Link 
                                to={post.id} 
                                getActiveProps={getActiveProps}>
                                <pre>{post.title}</pre>
                            </Link>
                        </section>
                    );
                })}
            </aside>
            <hr />
            <Outlet />
        </React.Fragment>
    );
};


