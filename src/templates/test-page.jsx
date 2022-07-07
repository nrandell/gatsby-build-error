import { graphql } from "gatsby";
import React from "react";

const TestPage = (props) => {
  if (props.pageContext.id > 0) {
    throw new Error("Too many");
  }
  return (
    <div>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </div>
  );
};

export default TestPage;

export const TestPageQuery = graphql`
  query TestPage {
    siteBuildMetadata {
      buildTime
    }
  }
`;
