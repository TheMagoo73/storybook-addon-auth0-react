export const ADDON_ID = "storybook/addon-auth0-react";
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAM_KEY = `auth0AddOn`;
export const defaultAuth0State = {
  isLoading: false,
  isAuthenticated: false,
  getAccessTokenSilently: (): any => null,
  getAccessTokenWithPopup: (): any  => null,
  getIdTokenClaims: (): any  => null,
  loginWithRedirect: (): any  => null,
  loginWithPopup: (): any  => null,
  logout: (): any  => null,
  handleRedirectCallback: (): any  => null,
  buildAuthorizeUrl: (): any  => null,
  buildLogoutUrl: (): any  => null
}