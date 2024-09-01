import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { postArray } from '../../helper';

interface PostPageProps {
  slug: string;
}

export default async function PostPage({slug}: PostPageProps) {
  const data = await getData(slug);
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{data.markdown}</Markdown>
    </div>
  )
}

const getData = async (slug: string) => {
  const post = postArray.find(post => post.name === slug);
  const data = {
    markdown: post!.content,
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
