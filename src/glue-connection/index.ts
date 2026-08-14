/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}
  */
  readonly athenaProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}
  */
  readonly connectionProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#description GlueConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#id GlueConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}
  */
  readonly matchCriteria?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#name GlueConnection#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#region GlueConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags GlueConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}
  */
  readonly authenticationConfiguration?: GlueConnectionAuthenticationConfiguration;
  /**
  * physical_connection_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}
  */
  readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
}
export interface GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#password GlueConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#username GlueConnection#username}
  */
  readonly username: string;
}

export function glueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToTerraform(struct?: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference | GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function glueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference | GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}
  */
  readonly authorizationCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}
  */
  readonly redirectUri: string;
}

export function glueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_code: cdktn.stringToTerraform(struct!.authorizationCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function glueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_code: {
      value: cdktn.stringToHclTerraform(struct!.authorizationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCode = this._authorizationCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationCode = value.authorizationCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // authorization_code - computed: false, optional: false, required: true
  private _authorizationCode?: string; 
  public get authorizationCode() {
    return this.getStringAttribute('authorization_code');
  }
  public set authorizationCode(value: string) {
    this._authorizationCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeInput() {
    return this._authorizationCode;
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}
  */
  readonly awsManagedClientApplicationReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}
  */
  readonly userManagedClientApplicationClientId?: string;
}

export function glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_managed_client_application_reference: cdktn.stringToTerraform(struct!.awsManagedClientApplicationReference),
    user_managed_client_application_client_id: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientId),
  }
}


export function glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_managed_client_application_reference: {
      value: cdktn.stringToHclTerraform(struct!.awsManagedClientApplicationReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_managed_client_application_client_id: {
      value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsManagedClientApplicationReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedClientApplicationReference = this._awsManagedClientApplicationReference;
    }
    if (this._userManagedClientApplicationClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userManagedClientApplicationClientId = this._userManagedClientApplicationClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsManagedClientApplicationReference = undefined;
      this._userManagedClientApplicationClientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsManagedClientApplicationReference = value.awsManagedClientApplicationReference;
      this._userManagedClientApplicationClientId = value.userManagedClientApplicationClientId;
    }
  }

  // aws_managed_client_application_reference - computed: false, optional: true, required: false
  private _awsManagedClientApplicationReference?: string; 
  public get awsManagedClientApplicationReference() {
    return this.getStringAttribute('aws_managed_client_application_reference');
  }
  public set awsManagedClientApplicationReference(value: string) {
    this._awsManagedClientApplicationReference = value;
  }
  public resetAwsManagedClientApplicationReference() {
    this._awsManagedClientApplicationReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedClientApplicationReferenceInput() {
    return this._awsManagedClientApplicationReference;
  }

  // user_managed_client_application_client_id - computed: false, optional: true, required: false
  private _userManagedClientApplicationClientId?: string; 
  public get userManagedClientApplicationClientId() {
    return this.getStringAttribute('user_managed_client_application_client_id');
  }
  public set userManagedClientApplicationClientId(value: string) {
    this._userManagedClientApplicationClientId = value;
  }
  public resetUserManagedClientApplicationClientId() {
    this._userManagedClientApplicationClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedClientApplicationClientIdInput() {
    return this._userManagedClientApplicationClientId;
  }
}
export interface GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#access_token GlueConnection#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}
  */
  readonly jwtToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}
  */
  readonly userManagedClientApplicationClientSecret?: string;
}

export function glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    jwt_token: cdktn.stringToTerraform(struct!.jwtToken),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    user_managed_client_application_client_secret: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientSecret),
  }
}


export function glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference | GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_token: {
      value: cdktn.stringToHclTerraform(struct!.jwtToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_managed_client_application_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._jwtToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtToken = this._jwtToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._userManagedClientApplicationClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.userManagedClientApplicationClientSecret = this._userManagedClientApplicationClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._jwtToken = undefined;
      this._refreshToken = undefined;
      this._userManagedClientApplicationClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._jwtToken = value.jwtToken;
      this._refreshToken = value.refreshToken;
      this._userManagedClientApplicationClientSecret = value.userManagedClientApplicationClientSecret;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // jwt_token - computed: false, optional: true, required: false
  private _jwtToken?: string; 
  public get jwtToken() {
    return this.getStringAttribute('jwt_token');
  }
  public set jwtToken(value: string) {
    this._jwtToken = value;
  }
  public resetJwtToken() {
    this._jwtToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenInput() {
    return this._jwtToken;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // user_managed_client_application_client_secret - computed: false, optional: true, required: false
  private _userManagedClientApplicationClientSecret?: string; 
  public get userManagedClientApplicationClientSecret() {
    return this.getStringAttribute('user_managed_client_application_client_secret');
  }
  public set userManagedClientApplicationClientSecret(value: string) {
    this._userManagedClientApplicationClientSecret = value;
  }
  public resetUserManagedClientApplicationClientSecret() {
    this._userManagedClientApplicationClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedClientApplicationClientSecretInput() {
    return this._userManagedClientApplicationClientSecret;
  }
}
export interface GlueConnectionAuthenticationConfigurationOauth2Properties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}
  */
  readonly oauth2GrantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url GlueConnection#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}
  */
  readonly tokenUrlParametersMap?: { [key: string]: string };
  /**
  * authorization_code_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}
  */
  readonly authorizationCodeProperties?: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties;
  /**
  * oauth2_client_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}
  */
  readonly oauth2ClientApplication?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication;
  /**
  * oauth2_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}
  */
  readonly oauth2Credentials?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials;
}

export function glueConnectionAuthenticationConfigurationOauth2PropertiesToTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference | GlueConnectionAuthenticationConfigurationOauth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oauth2_grant_type: cdktn.stringToTerraform(struct!.oauth2GrantType),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
    token_url_parameters_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tokenUrlParametersMap),
    authorization_code_properties: glueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToTerraform(struct!.authorizationCodeProperties),
    oauth2_client_application: glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToTerraform(struct!.oauth2ClientApplication),
    oauth2_credentials: glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToTerraform(struct!.oauth2Credentials),
  }
}


export function glueConnectionAuthenticationConfigurationOauth2PropertiesToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference | GlueConnectionAuthenticationConfigurationOauth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oauth2_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauth2GrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url_parameters_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tokenUrlParametersMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_code_properties: {
      value: glueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct!.authorizationCodeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList",
    },
    oauth2_client_application: {
      value: glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToHclTerraform(struct!.oauth2ClientApplication),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList",
    },
    oauth2_credentials: {
      value: glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToHclTerraform(struct!.oauth2Credentials),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfigurationOauth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2GrantType = this._oauth2GrantType;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._tokenUrlParametersMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlParametersMap = this._tokenUrlParametersMap;
    }
    if (this._authorizationCodeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCodeProperties = this._authorizationCodeProperties?.internalValue;
    }
    if (this._oauth2ClientApplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientApplication = this._oauth2ClientApplication?.internalValue;
    }
    if (this._oauth2Credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Credentials = this._oauth2Credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfigurationOauth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2GrantType = undefined;
      this._tokenUrl = undefined;
      this._tokenUrlParametersMap = undefined;
      this._authorizationCodeProperties.internalValue = undefined;
      this._oauth2ClientApplication.internalValue = undefined;
      this._oauth2Credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2GrantType = value.oauth2GrantType;
      this._tokenUrl = value.tokenUrl;
      this._tokenUrlParametersMap = value.tokenUrlParametersMap;
      this._authorizationCodeProperties.internalValue = value.authorizationCodeProperties;
      this._oauth2ClientApplication.internalValue = value.oauth2ClientApplication;
      this._oauth2Credentials.internalValue = value.oauth2Credentials;
    }
  }

  // oauth2_grant_type - computed: false, optional: true, required: false
  private _oauth2GrantType?: string; 
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }
  public set oauth2GrantType(value: string) {
    this._oauth2GrantType = value;
  }
  public resetOauth2GrantType() {
    this._oauth2GrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2GrantTypeInput() {
    return this._oauth2GrantType;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // token_url_parameters_map - computed: false, optional: true, required: false
  private _tokenUrlParametersMap?: { [key: string]: string }; 
  public get tokenUrlParametersMap() {
    return this.getStringMapAttribute('token_url_parameters_map');
  }
  public set tokenUrlParametersMap(value: { [key: string]: string }) {
    this._tokenUrlParametersMap = value;
  }
  public resetTokenUrlParametersMap() {
    this._tokenUrlParametersMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlParametersMapInput() {
    return this._tokenUrlParametersMap;
  }

  // authorization_code_properties - computed: false, optional: true, required: false
  private _authorizationCodeProperties = new GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(this, "authorization_code_properties");
  public get authorizationCodeProperties() {
    return this._authorizationCodeProperties;
  }
  public putAuthorizationCodeProperties(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties) {
    this._authorizationCodeProperties.internalValue = value;
  }
  public resetAuthorizationCodeProperties() {
    this._authorizationCodeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodePropertiesInput() {
    return this._authorizationCodeProperties.internalValue;
  }

  // oauth2_client_application - computed: false, optional: true, required: false
  private _oauth2ClientApplication = new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(this, "oauth2_client_application");
  public get oauth2ClientApplication() {
    return this._oauth2ClientApplication;
  }
  public putOauth2ClientApplication(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication) {
    this._oauth2ClientApplication.internalValue = value;
  }
  public resetOauth2ClientApplication() {
    this._oauth2ClientApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientApplicationInput() {
    return this._oauth2ClientApplication.internalValue;
  }

  // oauth2_credentials - computed: false, optional: true, required: false
  private _oauth2Credentials = new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(this, "oauth2_credentials");
  public get oauth2Credentials() {
    return this._oauth2Credentials;
  }
  public putOauth2Credentials(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials) {
    this._oauth2Credentials.internalValue = value;
  }
  public resetOauth2Credentials() {
    this._oauth2Credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2CredentialsInput() {
    return this._oauth2Credentials.internalValue;
  }
}
export interface GlueConnectionAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}
  */
  readonly customAuthenticationCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * basic_authentication_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}
  */
  readonly basicAuthenticationCredentials?: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials;
  /**
  * oauth2_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}
  */
  readonly oauth2Properties?: GlueConnectionAuthenticationConfigurationOauth2Properties;
}

export function glueConnectionAuthenticationConfigurationToTerraform(struct?: GlueConnectionAuthenticationConfigurationOutputReference | GlueConnectionAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    custom_authentication_credentials: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customAuthenticationCredentials),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    basic_authentication_credentials: glueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToTerraform(struct!.basicAuthenticationCredentials),
    oauth2_properties: glueConnectionAuthenticationConfigurationOauth2PropertiesToTerraform(struct!.oauth2Properties),
  }
}


export function glueConnectionAuthenticationConfigurationToHclTerraform(struct?: GlueConnectionAuthenticationConfigurationOutputReference | GlueConnectionAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_authentication_credentials: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customAuthenticationCredentials),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_authentication_credentials: {
      value: glueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToHclTerraform(struct!.basicAuthenticationCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList",
    },
    oauth2_properties: {
      value: glueConnectionAuthenticationConfigurationOauth2PropertiesToHclTerraform(struct!.oauth2Properties),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionAuthenticationConfigurationOauth2PropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._customAuthenticationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationCredentials = this._customAuthenticationCredentials;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._basicAuthenticationCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthenticationCredentials = this._basicAuthenticationCredentials?.internalValue;
    }
    if (this._oauth2Properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Properties = this._oauth2Properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._customAuthenticationCredentials = undefined;
      this._kmsKeyArn = undefined;
      this._secretArn = undefined;
      this._basicAuthenticationCredentials.internalValue = undefined;
      this._oauth2Properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._customAuthenticationCredentials = value.customAuthenticationCredentials;
      this._kmsKeyArn = value.kmsKeyArn;
      this._secretArn = value.secretArn;
      this._basicAuthenticationCredentials.internalValue = value.basicAuthenticationCredentials;
      this._oauth2Properties.internalValue = value.oauth2Properties;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // custom_authentication_credentials - computed: false, optional: true, required: false
  private _customAuthenticationCredentials?: { [key: string]: string }; 
  public get customAuthenticationCredentials() {
    return this.getStringMapAttribute('custom_authentication_credentials');
  }
  public set customAuthenticationCredentials(value: { [key: string]: string }) {
    this._customAuthenticationCredentials = value;
  }
  public resetCustomAuthenticationCredentials() {
    this._customAuthenticationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationCredentialsInput() {
    return this._customAuthenticationCredentials;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // basic_authentication_credentials - computed: false, optional: true, required: false
  private _basicAuthenticationCredentials = new GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(this, "basic_authentication_credentials");
  public get basicAuthenticationCredentials() {
    return this._basicAuthenticationCredentials;
  }
  public putBasicAuthenticationCredentials(value: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials) {
    this._basicAuthenticationCredentials.internalValue = value;
  }
  public resetBasicAuthenticationCredentials() {
    this._basicAuthenticationCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationCredentialsInput() {
    return this._basicAuthenticationCredentials.internalValue;
  }

  // oauth2_properties - computed: false, optional: true, required: false
  private _oauth2Properties = new GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(this, "oauth2_properties");
  public get oauth2Properties() {
    return this._oauth2Properties;
  }
  public putOauth2Properties(value: GlueConnectionAuthenticationConfigurationOauth2Properties) {
    this._oauth2Properties.internalValue = value;
  }
  public resetOauth2Properties() {
    this._oauth2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PropertiesInput() {
    return this._oauth2Properties.internalValue;
  }
}
export interface GlueConnectionPhysicalConnectionRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}
  */
  readonly securityGroupIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}
  */
  readonly subnetId?: string;
}

export function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function glueConnectionPhysicalConnectionRequirementsToHclTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionPhysicalConnectionRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._securityGroupIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdList = this._securityGroupIdList;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionPhysicalConnectionRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._securityGroupIdList = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._securityGroupIdList = value.securityGroupIdList;
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // security_group_id_list - computed: false, optional: true, required: false
  private _securityGroupIdList?: string[]; 
  public get securityGroupIdList() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_id_list'));
  }
  public set securityGroupIdList(value: string[]) {
    this._securityGroupIdList = value;
  }
  public resetSecurityGroupIdList() {
    this._securityGroupIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdListInput() {
    return this._securityGroupIdList;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection aws_glue_connection}
*/
export class GlueConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueConnection to import
  * @param importFromId The id of the existing GlueConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/glue_connection aws_glue_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GlueConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._athenaProperties = config.athenaProperties;
    this._catalogId = config.catalogId;
    this._connectionProperties = config.connectionProperties;
    this._connectionType = config.connectionType;
    this._description = config.description;
    this._id = config.id;
    this._matchCriteria = config.matchCriteria;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._authenticationConfiguration.internalValue = config.authenticationConfiguration;
    this._physicalConnectionRequirements.internalValue = config.physicalConnectionRequirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // athena_properties - computed: false, optional: true, required: false
  private _athenaProperties?: { [key: string]: string }; 
  public get athenaProperties() {
    return this.getStringMapAttribute('athena_properties');
  }
  public set athenaProperties(value: { [key: string]: string }) {
    this._athenaProperties = value;
  }
  public resetAthenaProperties() {
    this._athenaProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaPropertiesInput() {
    return this._athenaProperties;
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties?: { [key: string]: string }; 
  public get connectionProperties() {
    return this.getStringMapAttribute('connection_properties');
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string[]; 
  public get matchCriteria() {
    return this.getListAttribute('match_criteria');
  }
  public set matchCriteria(value: string[]) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new GlueConnectionAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: GlueConnectionAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // physical_connection_requirements - computed: false, optional: true, required: false
  private _physicalConnectionRequirements = new GlueConnectionPhysicalConnectionRequirementsOutputReference(this, "physical_connection_requirements");
  public get physicalConnectionRequirements() {
    return this._physicalConnectionRequirements;
  }
  public putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements) {
    this._physicalConnectionRequirements.internalValue = value;
  }
  public resetPhysicalConnectionRequirements() {
    this._physicalConnectionRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionRequirementsInput() {
    return this._physicalConnectionRequirements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      athena_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._athenaProperties),
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      connection_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._connectionProperties),
      connection_type: cdktn.stringToTerraform(this._connectionType),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      match_criteria: cdktn.listMapper(cdktn.stringToTerraform, false)(this._matchCriteria),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      authentication_configuration: glueConnectionAuthenticationConfigurationToTerraform(this._authenticationConfiguration.internalValue),
      physical_connection_requirements: glueConnectionPhysicalConnectionRequirementsToTerraform(this._physicalConnectionRequirements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      athena_properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._athenaProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._connectionProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_type: {
        value: cdktn.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_criteria: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._matchCriteria),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      authentication_configuration: {
        value: glueConnectionAuthenticationConfigurationToHclTerraform(this._authenticationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueConnectionAuthenticationConfigurationList",
      },
      physical_connection_requirements: {
        value: glueConnectionPhysicalConnectionRequirementsToHclTerraform(this._physicalConnectionRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueConnectionPhysicalConnectionRequirementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
