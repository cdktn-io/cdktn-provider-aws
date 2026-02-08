/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}
  */
  readonly authorizerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}
  */
  readonly exceptionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#region BedrockagentcoreGateway#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreGatewayAuthorizerConfiguration[] | cdktf.IResolvable;
  /**
  * interceptor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#interceptor_configuration BedrockagentcoreGateway#interceptor_configuration}
  */
  readonly interceptorConfiguration?: BedrockagentcoreGatewayInterceptorConfiguration[] | cdktf.IResolvable;
  /**
  * protocol_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}
  */
  readonly protocolConfiguration?: BedrockagentcoreGatewayProtocolConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#timeouts BedrockagentcoreGateway#timeouts}
  */
  readonly timeouts?: BedrockagentcoreGatewayTimeouts;
}
export interface BedrockagentcoreGatewayWorkloadIdentityDetails {
}

export function bedrockagentcoreGatewayWorkloadIdentityDetailsToTerraform(struct?: BedrockagentcoreGatewayWorkloadIdentityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bedrockagentcoreGatewayWorkloadIdentityDetailsToHclTerraform(struct?: BedrockagentcoreGatewayWorkloadIdentityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayWorkloadIdentityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayWorkloadIdentityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_identity_arn - computed: true, optional: false, required: false
  public get workloadIdentityArn() {
    return this.getStringAttribute('workload_identity_arn');
  }
}

export class BedrockagentcoreGatewayWorkloadIdentityDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference {
    return new BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}
  */
  readonly discoveryUrl: string;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClients),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._discoveryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._discoveryUrl = value.discoveryUrl;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_audience'));
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference {
    return new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfiguration {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_jwt_authorizer: cdktf.listMapper(bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktf.listMapperHcl(bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: false, optional: true, required: false
  private _customJwtAuthorizer = new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList(this, "custom_jwt_authorizer", false);
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}

export class BedrockagentcoreGatewayAuthorizerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayAuthorizerConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationOutputReference {
    return new BedrockagentcoreGatewayAuthorizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}
  */
  readonly passRequestHeaders: boolean | cdktf.IResolvable;
}

export function bedrockagentcoreGatewayInterceptorConfigurationInputConfigurationToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass_request_headers: cdktf.booleanToTerraform(struct!.passRequestHeaders),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationInputConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass_request_headers: {
      value: cdktf.booleanToHclTerraform(struct!.passRequestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passRequestHeaders = this._passRequestHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passRequestHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passRequestHeaders = value.passRequestHeaders;
    }
  }

  // pass_request_headers - computed: false, optional: false, required: true
  private _passRequestHeaders?: boolean | cdktf.IResolvable; 
  public get passRequestHeaders() {
    return this.getBooleanAttribute('pass_request_headers');
  }
  public set passRequestHeaders(value: boolean | cdktf.IResolvable) {
    this._passRequestHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passRequestHeadersInput() {
    return this._passRequestHeaders;
  }
}

export class BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference {
    return new BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}
  */
  readonly arn: string;
}

export function bedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference {
    return new BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationInterceptor {
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}
  */
  readonly lambda?: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[] | cdktf.IResolvable;
}

export function bedrockagentcoreGatewayInterceptorConfigurationInterceptorToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInterceptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda: cdktf.listMapper(bedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaToTerraform, true)(struct!.lambda),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationInterceptorToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationInterceptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambda: {
      value: cdktf.listMapperHcl(bedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationInterceptor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationInterceptor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambda.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambda.internalValue = value.lambda;
    }
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[] | cdktf.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }
}

export class BedrockagentcoreGatewayInterceptorConfigurationInterceptorList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayInterceptorConfigurationInterceptor[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference {
    return new BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayInterceptorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}
  */
  readonly interceptionPoints: string[];
  /**
  * input_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}
  */
  readonly inputConfiguration?: BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[] | cdktf.IResolvable;
  /**
  * interceptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}
  */
  readonly interceptor?: BedrockagentcoreGatewayInterceptorConfigurationInterceptor[] | cdktf.IResolvable;
}

export function bedrockagentcoreGatewayInterceptorConfigurationToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_points: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interceptionPoints),
    input_configuration: cdktf.listMapper(bedrockagentcoreGatewayInterceptorConfigurationInputConfigurationToTerraform, true)(struct!.inputConfiguration),
    interceptor: cdktf.listMapper(bedrockagentcoreGatewayInterceptorConfigurationInterceptorToTerraform, true)(struct!.interceptor),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_points: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interceptionPoints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    input_configuration: {
      value: cdktf.listMapperHcl(bedrockagentcoreGatewayInterceptorConfigurationInputConfigurationToHclTerraform, true)(struct!.inputConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList",
    },
    interceptor: {
      value: cdktf.listMapperHcl(bedrockagentcoreGatewayInterceptorConfigurationInterceptorToHclTerraform, true)(struct!.interceptor),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationInterceptorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionPoints = this._interceptionPoints;
    }
    if (this._inputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputConfiguration = this._inputConfiguration?.internalValue;
    }
    if (this._interceptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptor = this._interceptor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interceptionPoints = undefined;
      this._inputConfiguration.internalValue = undefined;
      this._interceptor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interceptionPoints = value.interceptionPoints;
      this._inputConfiguration.internalValue = value.inputConfiguration;
      this._interceptor.internalValue = value.interceptor;
    }
  }

  // interception_points - computed: false, optional: false, required: true
  private _interceptionPoints?: string[]; 
  public get interceptionPoints() {
    return cdktf.Fn.tolist(this.getListAttribute('interception_points'));
  }
  public set interceptionPoints(value: string[]) {
    this._interceptionPoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionPointsInput() {
    return this._interceptionPoints;
  }

  // input_configuration - computed: false, optional: true, required: false
  private _inputConfiguration = new BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList(this, "input_configuration", false);
  public get inputConfiguration() {
    return this._inputConfiguration;
  }
  public putInputConfiguration(value: BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[] | cdktf.IResolvable) {
    this._inputConfiguration.internalValue = value;
  }
  public resetInputConfiguration() {
    this._inputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigurationInput() {
    return this._inputConfiguration.internalValue;
  }

  // interceptor - computed: false, optional: true, required: false
  private _interceptor = new BedrockagentcoreGatewayInterceptorConfigurationInterceptorList(this, "interceptor", false);
  public get interceptor() {
    return this._interceptor;
  }
  public putInterceptor(value: BedrockagentcoreGatewayInterceptorConfigurationInterceptor[] | cdktf.IResolvable) {
    this._interceptor.internalValue = value;
  }
  public resetInterceptor() {
    this._interceptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptorInput() {
    return this._interceptor.internalValue;
  }
}

export class BedrockagentcoreGatewayInterceptorConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayInterceptorConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationOutputReference {
    return new BedrockagentcoreGatewayInterceptorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayProtocolConfigurationMcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}
  */
  readonly instructions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}
  */
  readonly supportedVersions?: string[];
}

export function bedrockagentcoreGatewayProtocolConfigurationMcpToTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instructions: cdktf.stringToTerraform(struct!.instructions),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    supported_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedVersions),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationMcpToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfigurationMcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._supportedVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedVersions = this._supportedVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instructions = undefined;
      this._searchType = undefined;
      this._supportedVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instructions = value.instructions;
      this._searchType = value.searchType;
      this._supportedVersions = value.supportedVersions;
    }
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // supported_versions - computed: false, optional: true, required: false
  private _supportedVersions?: string[]; 
  public get supportedVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_versions'));
  }
  public set supportedVersions(value: string[]) {
    this._supportedVersions = value;
  }
  public resetSupportedVersions() {
    this._supportedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedVersionsInput() {
    return this._supportedVersions;
  }
}

export class BedrockagentcoreGatewayProtocolConfigurationMcpList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayProtocolConfigurationMcp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference {
    return new BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayProtocolConfiguration {
  /**
  * mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}
  */
  readonly mcp?: BedrockagentcoreGatewayProtocolConfigurationMcp[] | cdktf.IResolvable;
}

export function bedrockagentcoreGatewayProtocolConfigurationToTerraform(struct?: BedrockagentcoreGatewayProtocolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mcp: cdktf.listMapper(bedrockagentcoreGatewayProtocolConfigurationMcpToTerraform, true)(struct!.mcp),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mcp: {
      value: cdktf.listMapperHcl(bedrockagentcoreGatewayProtocolConfigurationMcpToHclTerraform, true)(struct!.mcp),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayProtocolConfigurationMcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcp.internalValue = value.mcp;
    }
  }

  // mcp - computed: false, optional: true, required: false
  private _mcp = new BedrockagentcoreGatewayProtocolConfigurationMcpList(this, "mcp", false);
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: BedrockagentcoreGatewayProtocolConfigurationMcp[] | cdktf.IResolvable) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }
}

export class BedrockagentcoreGatewayProtocolConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreGatewayProtocolConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreGatewayProtocolConfigurationOutputReference {
    return new BedrockagentcoreGatewayProtocolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#create BedrockagentcoreGateway#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#delete BedrockagentcoreGateway#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#update BedrockagentcoreGateway#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreGatewayTimeoutsToTerraform(struct?: BedrockagentcoreGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bedrockagentcoreGatewayTimeoutsToHclTerraform(struct?: BedrockagentcoreGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway aws_bedrockagentcore_gateway}
*/
export class BedrockagentcoreGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreGateway to import
  * @param importFromId The id of the existing BedrockagentcoreGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/bedrockagentcore_gateway aws_bedrockagentcore_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._authorizerType = config.authorizerType;
    this._description = config.description;
    this._exceptionLevel = config.exceptionLevel;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._protocolType = config.protocolType;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._interceptorConfiguration.internalValue = config.interceptorConfiguration;
    this._protocolConfiguration.internalValue = config.protocolConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType?: string; 
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType;
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

  // exception_level - computed: false, optional: true, required: false
  private _exceptionLevel?: string; 
  public get exceptionLevel() {
    return this.getStringAttribute('exception_level');
  }
  public set exceptionLevel(value: string) {
    this._exceptionLevel = value;
  }
  public resetExceptionLevel() {
    this._exceptionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionLevelInput() {
    return this._exceptionLevel;
  }

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
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

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // workload_identity_details - computed: true, optional: false, required: false
  private _workloadIdentityDetails = new BedrockagentcoreGatewayWorkloadIdentityDetailsList(this, "workload_identity_details", false);
  public get workloadIdentityDetails() {
    return this._workloadIdentityDetails;
  }

  // authorizer_configuration - computed: false, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreGatewayAuthorizerConfigurationList(this, "authorizer_configuration", false);
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreGatewayAuthorizerConfiguration[] | cdktf.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // interceptor_configuration - computed: false, optional: true, required: false
  private _interceptorConfiguration = new BedrockagentcoreGatewayInterceptorConfigurationList(this, "interceptor_configuration", false);
  public get interceptorConfiguration() {
    return this._interceptorConfiguration;
  }
  public putInterceptorConfiguration(value: BedrockagentcoreGatewayInterceptorConfiguration[] | cdktf.IResolvable) {
    this._interceptorConfiguration.internalValue = value;
  }
  public resetInterceptorConfiguration() {
    this._interceptorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptorConfigurationInput() {
    return this._interceptorConfiguration.internalValue;
  }

  // protocol_configuration - computed: false, optional: true, required: false
  private _protocolConfiguration = new BedrockagentcoreGatewayProtocolConfigurationList(this, "protocol_configuration", false);
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: BedrockagentcoreGatewayProtocolConfiguration[] | cdktf.IResolvable) {
    this._protocolConfiguration.internalValue = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_type: cdktf.stringToTerraform(this._authorizerType),
      description: cdktf.stringToTerraform(this._description),
      exception_level: cdktf.stringToTerraform(this._exceptionLevel),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      authorizer_configuration: cdktf.listMapper(bedrockagentcoreGatewayAuthorizerConfigurationToTerraform, true)(this._authorizerConfiguration.internalValue),
      interceptor_configuration: cdktf.listMapper(bedrockagentcoreGatewayInterceptorConfigurationToTerraform, true)(this._interceptorConfiguration.internalValue),
      protocol_configuration: cdktf.listMapper(bedrockagentcoreGatewayProtocolConfigurationToTerraform, true)(this._protocolConfiguration.internalValue),
      timeouts: bedrockagentcoreGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_type: {
        value: cdktf.stringToHclTerraform(this._authorizerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_level: {
        value: cdktf.stringToHclTerraform(this._exceptionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      authorizer_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreGatewayAuthorizerConfigurationToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationList",
      },
      interceptor_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreGatewayInterceptorConfigurationToHclTerraform, true)(this._interceptorConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationList",
      },
      protocol_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreGatewayProtocolConfigurationToHclTerraform, true)(this._protocolConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayProtocolConfigurationList",
      },
      timeouts: {
        value: bedrockagentcoreGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
