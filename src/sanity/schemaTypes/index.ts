import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { portfolioType } from "./portfolioType";
import { teamType } from "./teamType";
import { testimonialType } from "./testimonialType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, portfolioType, testimonialType, teamType],
};
