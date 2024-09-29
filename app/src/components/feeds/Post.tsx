import FeedAuthor from "./FeedAuthor";
import FeedContent from "./FeedContent";
import PostArticle from "./PostArticle";
import { ExtendedPost, IPostStore } from "@/stores/shared";
import PostActions from "./PostActions";

interface Props {
  store: IPostStore;
  post: ExtendedPost;
  autoView?: boolean;
}

const Post = ({ store, post, autoView = true }: Props) => {
  return (
    <div className="flex flex-col">
      {post.parent && (
        <PostArticle
          store={store}
          post={post.parent}
          autoView={autoView}
          isParent
        >
          <FeedAuthor post={post.parent} />
          <FeedContent post={post.parent} />
          <PostActions store={store} post={post.parent} />
        </PostArticle>
      )}

      <PostArticle store={store} post={post} autoView={autoView} showBorder>
        <FeedAuthor post={post} />
        <FeedContent post={post} />
        <PostActions store={store} post={post} />
      </PostArticle>
    </div>
  );
};

export default Post;
