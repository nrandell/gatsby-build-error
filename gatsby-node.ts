import type { CreatePagesArgs } from "gatsby";
import { resolve } from "path";

export function createPages(args: CreatePagesArgs) {
  const {
    actions: { createPage },
  } = args;

  const component = resolve("./src/templates/test-page.jsx");
  const i = 1;
  createPage({
    path: `/test/${i}`,
    component,
    context: { id: i },
  });
}
