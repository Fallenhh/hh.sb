export default async function AboutPage() {
  return (
    <div className="bg-white px-4 py-8 md:w-4/5 w-full mx-auto">
      <h2 className="page-title"> About Toki </h2>
      <div className="blog-content prose-img:rounded-lg prose-img:mx-auto mx-auto">
        <p>
          Toki is a minimal blog theme based on{" "}
          <a href="https://waku.gg">waku</a>. There is zero configuration
          file(s), so you just modify the code.
        </p>
        <p>
          Toki is under UNLICENSE, which means it is free and unencumbered
          software released into the public domain. Anyone is free to copy,
          modify, publish, use, compile, sell, or distribute this software,
          either in source code form or as a compiled binary, for any purpose,
          commercial or non-commercial, and by any means. Please refer to{" "}
          <a href="https://unlicense.org">https://unlicense.org</a> for more
          information.
        </p>
        <p>
          {" "}
          You can choose whatever{" "}
          <a href="https://creativecommons.org/">creative commons</a> license or
          other licenses here for your own posts at will.
        </p>
        <p>
          {" "}
          E.g. All the contents from this website is under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA
          </a>{" "}
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
