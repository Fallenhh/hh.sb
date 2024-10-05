export default async function AboutPage() {
  return (
    <div className="bg-white px-4 py-8 md:w-4/5 w-full mx-auto">
      <h2 className="page-title"> About Toki </h2>
      <div className="blog-content prose-img:rounded-lg prose-img:mx-auto mx-auto">
        <ul>
          <li>
            X (formerly twitter):{" "}
            <a href="https://x.com/Fallenhh2"> @Fallenhh2 </a>
          </li>
          <li>
            Github: <a href="https://github.com/Fallenhh"> Fallenhh </a>
          </li>
          <li>
            Telegram: <a href="https://t.me/Fallenhh"> @Fallenhh </a>
          </li>
        </ul>
        <p>
          {" "}
          All the contents from this website is under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA
          </a>{" "}
        </p>
        <p>
          This blog is built on a minimalist theme{" "}
          <a href="https://github.com/Fallenhh/toki">Toki</a>.
        </p>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
