---
doc_id: "apex_namespace_Auth"
---

# Auth Namespace

The `Auth` namespace provides an interface and classes for single sign-on into Salesforce and session security management.

The following is the interface in the `Auth` namespace.

## See Also

- [AuthConfiguration Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_class_Auth_AuthConfiguration)
- [AuthProviderCallbackState Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_class_Auth_AuthProviderCallbackState)
- [AuthProviderPlugin Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_interface_Auth_AuthProviderPlugin)
- [AuthProviderPluginClass Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_class_Auth_AuthProviderPluginClass)
- [AuthProviderTokenResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_class_Auth_AuthProviderTokenResponse)
- [AuthToken Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthToken.htm#apex_class_Auth_AuthToken)
- [CommunitiesUtil Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm#apex_class_Auth_CommunitiesUtil)
- [ConfigurableSelfRegHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfigurableSelfRegHandler.htm#apex_interface_Auth_ConfigurableSelfRegHandler)
- [ConfirmUserRegistrationHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_ConfirmUserRegistrationHandler.htm#apex_interface_Auth_ConfirmUserRegistrationHandler)
- [ConnectedAppPlugin Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ConnectedAppPlugin.htm#apex_class_Auth_ConnectedAppPlugin)
- [CustomOneTimePasswordDeliveryHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm#apex_interface_Auth_CustomOneTimePasswordDeliveryHandler)
- [CustomOneTimePasswordDeliveryResult Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_CustomOneTimePasswordDeliveryResult.htm)
- [ExternalClientAppOauthHandler Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_ExternalClientAppOauthHandler.htm#apex_class_Auth_ExternalClientAppOauthHandler)
- [GeneratedUserData Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_class_Auth_GeneratedUserData)
- [HeadlessSelfRegistrationHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessSelfRegistrationHandler.htm#apex_interface_Auth_HeadlessSelfRegistrationHandler)
- [HeadlessUserDiscoveryHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_HeadlessUserDiscoveryHandler.htm#apex_interface_Auth_HeadlessUserDiscoveryHandler)
- [HeadlessUserDiscoveryResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_class_Auth_HeadlessUserDiscoveryResponse)
- [HttpCalloutMockUtil Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HttpCalloutMockUtil.htm#apex_class_Auth_HttpCalloutMockUtil)
- [IntegratingAppType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_IntegratingAppType.htm)
- [InvocationContext Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_InvocationContext.htm)
- [JsonValueOutput Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_class_Auth_JsonValueOutput)
- [JWS Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_class_Auth_JWS)
- [JWT Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_class_Auth_JWT)
- [JWTBearerTokenExchange Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_class_Auth_JWTBearerTokenExchange)
- [JWTUtil Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_class_Auth_JWTUtil)
- [LightningLoginEligibility Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_LightningLoginEligibility.htm)
- [LoginDiscoveryHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_LoginDiscoveryHandler.htm#apex_interface_Auth_LoginDiscoveryHandler)
- [LoginDiscoveryMethod Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_LoginDiscoveryMethod.htm)
- [MyDomainLoginDiscoveryHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_MyDomainLoginDiscoveryHandler.htm#apex_interface_Auth_MyDomainLoginDiscoveryHandler)
- [Oauth2TokenExchangeHandler Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm#apex_class_Auth_Oauth2TokenExchangeHandler)
- [OAuth2TokenExchangeType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)
- [OAuthRefreshResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_class_Auth_OAuthRefreshResult)
- [OauthToken Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OauthToken.htm#apex_class_Auth_OauthToken)
- [OauthTokenType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_OauthTokenType.htm)
- [RegistrationHandler Interface](atlas.en-us.apexref.meta/apexref/apex_auth_plugin.htm#apex_auth_plugin)
- [SamlJitHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_SamlJitHandler.htm#apex_interface_Auth_SamlJitHandler)
- [SessionManagement Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_SessionManagement.htm#apex_class_Auth_SessionManagement)
- [SessionLevel Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_SessionLevel.htm)
- [TokenValidationResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_class_Auth_TokenValidationResult)
- [UserData Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_class_Auth_UserData)
- [VerificationAction Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationAction.htm)
- [VerificationMethod Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationMethod.htm)
- [VerificationPolicy Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationPolicy.htm)
- [VerificationResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Auth_VerificationResult.htm#apex_class_Auth_VerificationResult)
- [Auth Exceptions](atlas.en-us.apexref.meta/apexref/apex_Auth_exceptions.htm)
