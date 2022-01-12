import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC = () => (

  <div
      id="overview"
      title="Overview"
      color={convert(themes.normal).color.positive}
    >
      <Placeholder>
        <Fragment>
          We can add controls here to modify the Auth0 state (isLoggedIn etc.)
        </Fragment>
      </Placeholder>
    </div>
);
