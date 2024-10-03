export default async function AboutPage() {
  return (

    <div className="bg-white px-4 py-8 md:w-4/5 w-full mx-auto">
    <h2 className="page-title"> About Toki </h2>
    <div className="blog-content prose-img:rounded-lg prose-img:mx-auto mx-auto">
      <p>Toki is a minimal blog theme based on <a href="https://waku.gg">waku</a>. There is zero configuration file(s), so you just modify the code.</p>

      <p>Copyright © 2024 Fallenhh fallen2hh[at]gmail.com This work is free. You can redistribute it and/or modify it under the terms of the Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar. See <a href="http://www.wtfpl.net">http://www.wtfpl.net/</a> for more details.</p>

      <p> You can choose whatever <a href="https://creativecommons.org/">creative commons</a> license here for your own posts at will.</p>
      <p> E.g. All the contents from this website is under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a> </p>
    </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
