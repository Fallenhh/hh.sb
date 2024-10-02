import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { postArray } from '../../helper';
import '../../styles.css'
interface PostPageProps {
  slug: string;
}

export default async function PostPage({slug}: PostPageProps) {
  const data = await getData(slug);
  return (
    <div className="bg-white px-4 py-8">
    <h2 className="page-title">{data.title}</h2>
    <article className="blog-content prose-img:rounded-lg prose-img:mx-auto mx-auto">
      <Markdown remarkPlugins={[remarkGfm]}>{data.markdown}</Markdown>
    </article>
    </div>
  )
}

const getData = async (slug: string) => {
  const post = postArray.find(post => post.name === slug);
  const data = {
    markdown: post!.content,
    title: post!.title,
  };
  return data; 
};

export const getConfig = async () => {
  const staticPaths = await getStaticPaths();
  return {
    render: 'static',
    staticPaths,
  };
};

const getStaticPaths = async () => {
  return postArray.map(post => post.name);
};
