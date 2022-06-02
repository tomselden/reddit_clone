import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_POST_BY_POST_ID } from "../../grapql/queries";

function PostPage() {
  const router = useRouter();
  const {  } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  return <div>PostPage</div>;
}

export default PostPage;
