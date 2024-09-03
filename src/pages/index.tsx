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
        <div>
          <h2>{post.name}</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{post.excerpt}</Markdown>
          <Link to={'/posts/'+ post.name} className="mt-4 inline-block underline"> Read More </Link>
        </div>
        </li>);
    }
  )
  console.log(postArray);
  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <ul>{postList}</ul>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>

    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
