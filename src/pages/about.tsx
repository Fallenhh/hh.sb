import { Link } from 'waku';

export default async function AboutPage() {
  const data = await getData();

  return (

    <div className="bg-white px-4 py-8 md:w-4/5 w-full mx-auto">
    <h2 className="page-title">{data.title}</h2>
    <div className="blog-content prose-img:rounded-lg prose-img:mx-auto mx-auto">
      Toki is a minimal blog theme based on <a href="https://waku.gg">waku</a>
    </div>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'About Toki',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
