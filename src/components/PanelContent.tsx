import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { useParameter } from "@storybook/api";
import { PARAM_KEY } from "../constants";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

export const PanelContent: React.FC = () => {
  const value = useParameter(PARAM_KEY, {
    isLoading: false
  })
  return <div>IsLoading? {value.isLoading ? 'true' : 'false'}</div>
};
