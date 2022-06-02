import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Post from "../../components/Post";
import { GET_POST_BY_POST_ID } from "../../grapql/queries";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  comment: string;
};

function PostPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const post: Post = data?.getPostListByPostId;

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //   post comment here
    console.log(data);

    
  };

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div
        className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-
      pl-16"
      >
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2">
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 
            outline-none disabled:bg:gray-50"
            placeholder={
              session ? "What do you wanna say?" : "Please Sign In To Comment"
            }
          />

          <button
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostPage;