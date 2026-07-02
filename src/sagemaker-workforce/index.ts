/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerWorkforceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#id SagemakerWorkforce#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#region SagemakerWorkforce#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}
  */
  readonly workforceName: string;
  /**
  * cognito_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}
  */
  readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
  /**
  * oidc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}
  */
  readonly oidcConfig?: SagemakerWorkforceOidcConfig;
  /**
  * source_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}
  */
  readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
  /**
  * workforce_vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}
  */
  readonly workforceVpcConfig?: SagemakerWorkforceWorkforceVpcConfig;
}
export interface SagemakerWorkforceCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}
  */
  readonly userPool: string;
}

export function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    user_pool: cdktn.stringToTerraform(struct!.userPool),
  }
}


export function sagemakerWorkforceCognitoConfigToHclTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool: {
      value: cdktn.stringToHclTerraform(struct!.userPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkforceCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkforceCognitoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._userPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPool = this._userPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceCognitoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._userPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._userPool = value.userPool;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // user_pool - computed: false, optional: false, required: true
  private _userPool?: string; 
  public get userPool() {
    return this.getStringAttribute('user_pool');
  }
  public set userPool(value: string) {
    this._userPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolInput() {
    return this._userPool;
  }
}
export interface SagemakerWorkforceOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#authentication_request_extra_params SagemakerWorkforce#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#issuer SagemakerWorkforce#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}
  */
  readonly jwksUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}
  */
  readonly logoutEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#scope SagemakerWorkforce#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    jwks_uri: cdktn.stringToTerraform(struct!.jwksUri),
    logout_endpoint: cdktn.stringToTerraform(struct!.logoutEndpoint),
    scope: cdktn.stringToTerraform(struct!.scope),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function sagemakerWorkforceOidcConfigToHclTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktn.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.logoutEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkforceOidcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkforceOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._logoutEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutEndpoint = this._logoutEndpoint;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._jwksUri = undefined;
      this._logoutEndpoint = undefined;
      this._scope = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._jwksUri = value.jwksUri;
      this._logoutEndpoint = value.logoutEndpoint;
      this._scope = value.scope;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: false, required: true
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // logout_endpoint - computed: false, optional: false, required: true
  private _logoutEndpoint?: string; 
  public get logoutEndpoint() {
    return this.getStringAttribute('logout_endpoint');
  }
  public set logoutEndpoint(value: string) {
    this._logoutEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEndpointInput() {
    return this._logoutEndpoint;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface SagemakerWorkforceSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}
  */
  readonly cidrs: string[];
}

export function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
  }
}


export function sagemakerWorkforceSourceIpConfigToHclTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidrs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkforceSourceIpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkforceSourceIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceSourceIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }
}
export interface SagemakerWorkforceWorkforceVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#subnets SagemakerWorkforce#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}
  */
  readonly vpcId?: string;
}

export function sagemakerWorkforceWorkforceVpcConfigToTerraform(struct?: SagemakerWorkforceWorkforceVpcConfigOutputReference | SagemakerWorkforceWorkforceVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function sagemakerWorkforceWorkforceVpcConfigToHclTerraform(struct?: SagemakerWorkforceWorkforceVpcConfigOutputReference | SagemakerWorkforceWorkforceVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkforceWorkforceVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkforceWorkforceVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkforceWorkforceVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce aws_sagemaker_workforce}
*/
export class SagemakerWorkforce extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_workforce";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerWorkforce resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerWorkforce to import
  * @param importFromId The id of the existing SagemakerWorkforce that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerWorkforce to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_workforce", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sagemaker_workforce aws_sagemaker_workforce} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerWorkforceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workforce',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.53.0',
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
    this._id = config.id;
    this._region = config.region;
    this._workforceName = config.workforceName;
    this._cognitoConfig.internalValue = config.cognitoConfig;
    this._oidcConfig.internalValue = config.oidcConfig;
    this._sourceIpConfig.internalValue = config.sourceIpConfig;
    this._workforceVpcConfig.internalValue = config.workforceVpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // workforce_name - computed: false, optional: false, required: true
  private _workforceName?: string; 
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName;
  }

  // cognito_config - computed: false, optional: true, required: false
  private _cognitoConfig = new SagemakerWorkforceCognitoConfigOutputReference(this, "cognito_config");
  public get cognitoConfig() {
    return this._cognitoConfig;
  }
  public putCognitoConfig(value: SagemakerWorkforceCognitoConfig) {
    this._cognitoConfig.internalValue = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig.internalValue;
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig = new SagemakerWorkforceOidcConfigOutputReference(this, "oidc_config");
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: SagemakerWorkforceOidcConfig) {
    this._oidcConfig.internalValue = value;
  }
  public resetOidcConfig() {
    this._oidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }

  // source_ip_config - computed: false, optional: true, required: false
  private _sourceIpConfig = new SagemakerWorkforceSourceIpConfigOutputReference(this, "source_ip_config");
  public get sourceIpConfig() {
    return this._sourceIpConfig;
  }
  public putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig) {
    this._sourceIpConfig.internalValue = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig.internalValue;
  }

  // workforce_vpc_config - computed: false, optional: true, required: false
  private _workforceVpcConfig = new SagemakerWorkforceWorkforceVpcConfigOutputReference(this, "workforce_vpc_config");
  public get workforceVpcConfig() {
    return this._workforceVpcConfig;
  }
  public putWorkforceVpcConfig(value: SagemakerWorkforceWorkforceVpcConfig) {
    this._workforceVpcConfig.internalValue = value;
  }
  public resetWorkforceVpcConfig() {
    this._workforceVpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceVpcConfigInput() {
    return this._workforceVpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      workforce_name: cdktn.stringToTerraform(this._workforceName),
      cognito_config: sagemakerWorkforceCognitoConfigToTerraform(this._cognitoConfig.internalValue),
      oidc_config: sagemakerWorkforceOidcConfigToTerraform(this._oidcConfig.internalValue),
      source_ip_config: sagemakerWorkforceSourceIpConfigToTerraform(this._sourceIpConfig.internalValue),
      workforce_vpc_config: sagemakerWorkforceWorkforceVpcConfigToTerraform(this._workforceVpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      workforce_name: {
        value: cdktn.stringToHclTerraform(this._workforceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cognito_config: {
        value: sagemakerWorkforceCognitoConfigToHclTerraform(this._cognitoConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkforceCognitoConfigList",
      },
      oidc_config: {
        value: sagemakerWorkforceOidcConfigToHclTerraform(this._oidcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkforceOidcConfigList",
      },
      source_ip_config: {
        value: sagemakerWorkforceSourceIpConfigToHclTerraform(this._sourceIpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkforceSourceIpConfigList",
      },
      workforce_vpc_config: {
        value: sagemakerWorkforceWorkforceVpcConfigToHclTerraform(this._workforceVpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkforceWorkforceVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
