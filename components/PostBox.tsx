import { useSession } from "next-auth/react";
import React from "react";

function PostBox() {
  const { data: session } = useSession();

  return (
    <form>
      <div>
          {/* AVATAR */}
          <input type="text" placeholder="Create a host"/>
     </div>
    </form>
  );
}

export default PostBox;
