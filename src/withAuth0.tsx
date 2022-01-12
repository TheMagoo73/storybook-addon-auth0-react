import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import React from "react";

export const withAuth0 = (
  Story: React.FC<unknown>,
  context: StoryContext) => {

  // TODO: 'div' should be an Auth0Provider component, from the Auth0-react library, initialised
  // using the configuration from the story/UI
  const divStyles =  {
    border: '5px solid red'
  }
  
  return (
    <div style={divStyles}>
     <Story />
    </div>
  )
};

