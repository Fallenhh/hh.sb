import { Link } from 'waku';
import { postArray } from '../helper';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function HomePage() {
  const data = await getData();
  const postList = postArray.map(
    post => {
      return (
        <li key={post.name}>
        <div className="bg-white py-8 px-4 my-4 hover:drop-shadow rounded-md">
          <h2 className="text-2xl font-bold ">{post.title}</h2>
          <div className="">
          <Markdown remarkPlugins={[remarkGfm]}>{post.excerpt}</Markdown>
          </div>
          <div className="flex justify-end">
            <Link to={'/posts/'+ post.name} className="mt-4 inline-block bg-amber-50 px-2 hover:bg-amber-100"> Read More </Link>
          </div>
        </div>
        </li>);
    }
  )
  console.log(postArray);
  return (
    <>
      <title>{data.title}</title>
      <h1 className="page-title">{data.headline}</h1>
      <p>{data.subtitle}</p>
      <ul>{postList}</ul>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>

    </>
  );
}

const getData = async () => {
  const data = {
    title: 'Toki',
    headline: 'Toki',
    subtitle: 'Minimalist static blog template for Waku',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
