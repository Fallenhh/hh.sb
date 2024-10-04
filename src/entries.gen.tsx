import { createPages } from "waku";
import type { PathsForPages } from "waku/router";

import About, { getConfig as About_getConfig } from "./pages/about";
import Index, { getConfig as Index_getConfig } from "./pages/index";
import PostsSlug, {
  getConfig as PostsSlug_getConfig,
} from "./pages/posts/[slug]";
import Layout, { getConfig as Layout_getConfig } from "./pages/_layout";

const _pages = createPages(async (pagesFns) => [
  pagesFns.createPage({
    path: "/about",
    component: About,
    ...(await About_getConfig()),
  }),
  pagesFns.createPage({
    path: "/",
    component: Index,
    ...(await Index_getConfig()),
  }),
  pagesFns.createPage({
    path: "/posts/[slug]",
    component: PostsSlug,
    ...(await PostsSlug_getConfig()),
  }),
  pagesFns.createLayout({
    path: "/",
    component: Layout,
    ...(await Layout_getConfig()),
  }),
]);

declare module "waku/router" {
  interface RouteConfig {
    paths: PathsForPages<typeof _pages>;
  }
  interface CreatePagesConfig {
    pages: typeof _pages;
  }
}

export default _pages;
