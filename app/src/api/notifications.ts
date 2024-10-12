import { resource } from "axe-api-client";

interface PaginateProps {
  feed?: boolean;
  minId?: number;
  userId?: number;
  tagId?: number;
}

const USER = "user{id,name,username,email}";
const HASHTAGS = "hashtags{hashtag}";
const MENTIONS = "mentions{username}";
const LINKS = "links{link{code,link}}";

const POST_DETAIL = `post{${USER},${HASHTAGS},${MENTIONS},${LINKS}}`;

const paginate = async ({ minId }: PaginateProps = {}) => {
  const query = resource("notifications/all")
    .with(`${POST_DETAIL},triggers{${USER}}`)
    .sort("id", "DESC");

  if (minId) {
    query.where("id", "<", minId);
  }

  return query.get();
};

export default {
  paginate,
};
