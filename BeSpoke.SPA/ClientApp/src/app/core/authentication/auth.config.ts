import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://localhost:5001',

  // URL of the SPA to redirect the user to after login
  // redirectUri: 'https://localhost:6001/auth/signin-oidc',
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'spa',
  responseType: 'id_token token',
  showDebugInformation: true,
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email Api.Get',
  requireHttps:false
}
