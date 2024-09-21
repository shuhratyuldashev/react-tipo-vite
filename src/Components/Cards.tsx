import Card from "./Card";
import { MdOutlineNotInterested } from "react-icons/md";

export interface Post {
  id: number;
  userImg: string;
  userName: string;
  postCover: string;
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  linkNameFirst: string;
  linkFirst: string;
  linkNameSecond: string;
  linkSecond: string;
  linkThirdName: string;
  linkThird: string;
}

export default function Cards({ posts }: { posts: Post[] }) {
  return (
    <main className="main">
      {posts.length === 0 ? (
        <div className="no-post">
        <MdOutlineNotInterested size={150}/>
        <span>No posts available</span>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} item={post} />)
      )}
    </main>
  );
}