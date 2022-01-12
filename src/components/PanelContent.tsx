import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { useParameter } from "@storybook/api";
import { defaultAuth0State, PARAM_KEY } from "../constants";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

export const PanelContent: React.FC = () => {
  const value = useParameter(PARAM_KEY, {...defaultAuth0State})
  return( 
    <>
      <div>IsLoading: {value.isLoading ? 'true' : 'false'}</div>
      <div>IsAuthenticated: {value.isAuthenticated ? 'true' : 'false'}</div>
    </>
  )
};
