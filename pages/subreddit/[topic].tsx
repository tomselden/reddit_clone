import { useRouter } from "next/router";
import React from "react";
import Avatar from "../../components/Avatar";

function Subreddit() {
  const { query: topic } = useRouter();
  return <div>
      <div>
          <Avatar />
      </div>
  </div>;
}

export default Subreddit;
