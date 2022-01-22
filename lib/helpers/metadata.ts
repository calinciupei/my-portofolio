import { PAGE_NAMES } from "../config/routes";

export const getMetadata = (path: string, pathParam?: string) => {
  const description = "Rivambrosa - Reporting on the business of technology, startups, venture capital funding.";
  let metaTitle = pathParam ? pathParam : PAGE_NAMES[path];

  if (metaTitle) {
    metaTitle = `${metaTitle}`;
  }

  return {
    description,
    title: metaTitle
  };
};
