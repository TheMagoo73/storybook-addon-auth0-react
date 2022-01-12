import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals, useState, useParameter } from "@storybook/addons";
import React from "react";
import { PARAM_KEY } from "./constants";

export const withAuth0 = (
  Story: React.FC<unknown>,
  context: StoryContext) => {

  const initalAuth0State = useParameter(PARAM_KEY, {
    isLoading: false,
    isAuthenticated: false
  })

  const [auth0State, setAuth0State] = useState(initalAuth0State)

  // TODO: 'div' should be an Auth0Provider component, from the Auth0-react library, initialised
  // using the configuration from the story/UI
  const divStyles =  {
    border: '5px solid red'
  }

  return (
    <div style={divStyles}>
      <div>isLoading: {auth0State.isLoading ? 'true' : 'false'}</div>
     <Story />
    </div>
  )
};

