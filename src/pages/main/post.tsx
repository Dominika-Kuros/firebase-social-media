import { PostItem } from "./main";

interface Props {
  post: PostItem;
}

export const Post = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <p>@{post.username}</p>
      </div>
    </div>
  );
};
