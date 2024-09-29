import { ExtendedPost } from "../../stores/postStore";
import FeedAuthor from "./FeedAuthor";
import FeedContent from "./FeedContent";
import FeedActions from "./FeedActions";
import FeedArticle from "./FeedArticle";

interface Props {
  post: ExtendedPost;
  autoView?: boolean;
}

const Feed = ({ post, autoView = true }: Props) => {
  return (
    <div className="flex flex-col">
      {post.parent && (
        <FeedArticle post={post.parent} autoView={autoView} isParent>
          <FeedAuthor post={post.parent} />
          <FeedContent post={post.parent} />
          <FeedActions />
        </FeedArticle>
      )}

      <FeedArticle post={post} autoView={autoView} showBorder>
        <FeedAuthor post={post} />
        <FeedContent post={post} />
        <FeedActions />
      </FeedArticle>
    </div>
  );
};

export default Feed;
