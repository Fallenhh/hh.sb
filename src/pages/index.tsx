import { Link } from "waku";
import { postArray } from "../helper";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function HomePage() {
  const data = await getData();
  const postList = postArray.map((post) => {
    return (
      <li key={post.name}>
        <Link to={"/posts/" + post.name}>
          <div className="bg-white py-8 px-4 my-4 hover:drop-shadow rounded-md duration-200">
            <h2 className="text-2xl font-medium ">{post.title}</h2>
            <div className="">
              <Markdown remarkPlugins={[remarkGfm]}>{post.excerpt}</Markdown>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  console.log(postArray);
  return (
    <div className="px-1 py-8 lg:w-2/5 md:w-3/5 w-full mx-auto">
      <title>{data.title}</title>
      <h1 className="page-title">{data.headline}</h1>
      <p>{data.subtitle}</p>
      <ul>{postList}</ul>
      <span>Contents under CC BY-SA, see more in </span>
      <Link to="/about" className="underline text-blue-700 hover:text-blue-400">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Atelier Fallenhh",
    headline: "Atelier Fallenhh",
    subtitle: "Writings for my life.",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
