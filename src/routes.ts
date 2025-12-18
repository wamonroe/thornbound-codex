import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./books/About.tsx"),
  route("core/chapter-1", "./books/core/Chapter01.tsx"),
  route("core/chapter-2", "./books/core/Chapter02.tsx"),
  route("core/chapter-3", "./books/core/Chapter03.tsx"),
  route("core/chapter-4", "./books/core/Chapter04.tsx"),
  route("core/chapter-5", "./books/core/Chapter05.tsx"),
  route("core/chapter-7", "./books/core/Chapter07.tsx")
] satisfies RouteConfig;
