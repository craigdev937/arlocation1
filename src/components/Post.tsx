import React from "react";
import { useMatch } from "@tanstack/react-location";
import { LocationGenerics } from "../models/Types";

export const Post = (): JSX.Element => {
    const {
        data: { post },
    } = useMatch<LocationGenerics>();

    return (
        <React.Fragment>
            <h4>{post?.title}</h4>
            <p>{post?.body}</p>
        </React.Fragment>
    );
};



