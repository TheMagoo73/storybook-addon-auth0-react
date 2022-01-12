import React from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID } from "./constants";
import { PanelContent } from "./components/PanelContent";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, {
    isLoading: false,
    isAuthenticated: false,
  });

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  return (
    <AddonPanel {...props}>
      <PanelContent/>
    </AddonPanel>
  );
};
