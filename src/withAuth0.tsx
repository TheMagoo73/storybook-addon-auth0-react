import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals, useState, useParameter } from "@storybook/addons";
import React from "react";
import { PARAM_KEY, defaultAuth0State } from "./constants";
import { Auth0Context } from '@auth0/auth0-react'

export const withAuth0 = (
  Story: React.FC<unknown>,
  context: StoryContext) => {

  const initalAuth0State = useParameter(PARAM_KEY, {...defaultAuth0State})

  const [auth0State, setAuth0State] = useState(initalAuth0State)

  return (
    <Auth0Context.Provider value={auth0State}>
      <Story />
    </Auth0Context.Provider>
  )
};

