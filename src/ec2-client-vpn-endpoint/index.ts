/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
  */
  readonly clientCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}
  */
  readonly disconnectOnSessionTimeout?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#region Ec2ClientVpnEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
  */
  readonly selfServicePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
  */
  readonly serverCertificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}
  */
  readonly sessionTimeoutHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
  */
  readonly splitTunnel?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}
  */
  readonly trafficIpAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}
  */
  readonly vpnPort?: number;
  /**
  * authentication_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}
  */
  readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable;
  /**
  * client_connect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}
  */
  readonly clientConnectOptions?: Ec2ClientVpnEndpointClientConnectOptions;
  /**
  * client_login_banner_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}
  */
  readonly clientLoginBannerOptions?: Ec2ClientVpnEndpointClientLoginBannerOptions;
  /**
  * client_route_enforcement_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}
  */
  readonly clientRouteEnforcementOptions?: Ec2ClientVpnEndpointClientRouteEnforcementOptions;
  /**
  * connection_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
  */
  readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
  /**
  * transit_gateway_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}
  */
  readonly transitGatewayConfiguration?: Ec2ClientVpnEndpointTransitGatewayConfiguration;
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
  */
  readonly activeDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
  */
  readonly rootCertificateChainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
  */
  readonly samlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
  */
  readonly selfServiceSamlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}
  */
  readonly type: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active_directory_id: cdktn.stringToTerraform(struct!.activeDirectoryId),
    root_certificate_chain_arn: cdktn.stringToTerraform(struct!.rootCertificateChainArn),
    saml_provider_arn: cdktn.stringToTerraform(struct!.samlProviderArn),
    self_service_saml_provider_arn: cdktn.stringToTerraform(struct!.selfServiceSamlProviderArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ec2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active_directory_id: {
      value: cdktn.stringToHclTerraform(struct!.activeDirectoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_certificate_chain_arn: {
      value: cdktn.stringToHclTerraform(struct!.rootCertificateChainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.samlProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_saml_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.selfServiceSamlProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryId = this._activeDirectoryId;
    }
    if (this._rootCertificateChainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificateChainArn = this._rootCertificateChainArn;
    }
    if (this._samlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlProviderArn = this._samlProviderArn;
    }
    if (this._selfServiceSamlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceSamlProviderArn = this._selfServiceSamlProviderArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectoryId = undefined;
      this._rootCertificateChainArn = undefined;
      this._samlProviderArn = undefined;
      this._selfServiceSamlProviderArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectoryId = value.activeDirectoryId;
      this._rootCertificateChainArn = value.rootCertificateChainArn;
      this._samlProviderArn = value.samlProviderArn;
      this._selfServiceSamlProviderArn = value.selfServiceSamlProviderArn;
      this._type = value.type;
    }
  }

  // active_directory_id - computed: false, optional: true, required: false
  private _activeDirectoryId?: string; 
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string) {
    this._activeDirectoryId = value;
  }
  public resetActiveDirectoryId() {
    this._activeDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryIdInput() {
    return this._activeDirectoryId;
  }

  // root_certificate_chain_arn - computed: false, optional: true, required: false
  private _rootCertificateChainArn?: string; 
  public get rootCertificateChainArn() {
    return this.getStringAttribute('root_certificate_chain_arn');
  }
  public set rootCertificateChainArn(value: string) {
    this._rootCertificateChainArn = value;
  }
  public resetRootCertificateChainArn() {
    this._rootCertificateChainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateChainArnInput() {
    return this._rootCertificateChainArn;
  }

  // saml_provider_arn - computed: false, optional: true, required: false
  private _samlProviderArn?: string; 
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }
  public set samlProviderArn(value: string) {
    this._samlProviderArn = value;
  }
  public resetSamlProviderArn() {
    this._samlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlProviderArnInput() {
    return this._samlProviderArn;
  }

  // self_service_saml_provider_arn - computed: false, optional: true, required: false
  private _selfServiceSamlProviderArn?: string; 
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }
  public set selfServiceSamlProviderArn(value: string) {
    this._selfServiceSamlProviderArn = value;
  }
  public resetSelfServiceSamlProviderArn() {
    this._selfServiceSamlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceSamlProviderArnInput() {
    return this._selfServiceSamlProviderArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ec2ClientVpnEndpointAuthenticationOptionsList extends cdktn.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointAuthenticationOptionsOutputReference {
    return new Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointClientConnectOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function ec2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptionsOutputReference | Ec2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function ec2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptionsOutputReference | Ec2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientConnectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientConnectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // lambda_function_arn - computed: true, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}
export interface Ec2ClientVpnEndpointClientLoginBannerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}
  */
  readonly bannerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference | Ec2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    banner_text: cdktn.stringToTerraform(struct!.bannerText),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function ec2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference | Ec2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    banner_text: {
      value: cdktn.stringToHclTerraform(struct!.bannerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientLoginBannerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerText = this._bannerText;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientLoginBannerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannerText = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannerText = value.bannerText;
      this._enabled = value.enabled;
    }
  }

  // banner_text - computed: true, optional: true, required: false
  private _bannerText?: string; 
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }
  public set bannerText(value: string) {
    this._bannerText = value;
  }
  public resetBannerText() {
    this._bannerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTextInput() {
    return this._bannerText;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Ec2ClientVpnEndpointClientRouteEnforcementOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}
  */
  readonly enforced?: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference | Ec2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforced: cdktn.booleanToTerraform(struct!.enforced),
  }
}


export function ec2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference | Ec2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforced: {
      value: cdktn.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientRouteEnforcementOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientRouteEnforcementOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforced = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforced = value.enforced;
    }
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktn.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktn.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
  */
  readonly cloudwatchLogGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
  */
  readonly cloudwatchLogStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group: cdktn.stringToTerraform(struct!.cloudwatchLogGroup),
    cloudwatch_log_stream: cdktn.stringToTerraform(struct!.cloudwatchLogStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function ec2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_log_stream: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointConnectionLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroup = this._cloudwatchLogGroup;
    }
    if (this._cloudwatchLogStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogStream = this._cloudwatchLogStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointConnectionLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogGroup = undefined;
      this._cloudwatchLogStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogGroup = value.cloudwatchLogGroup;
      this._cloudwatchLogStream = value.cloudwatchLogStream;
      this._enabled = value.enabled;
    }
  }

  // cloudwatch_log_group - computed: false, optional: true, required: false
  private _cloudwatchLogGroup?: string; 
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }
  public set cloudwatchLogGroup(value: string) {
    this._cloudwatchLogGroup = value;
  }
  public resetCloudwatchLogGroup() {
    this._cloudwatchLogGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupInput() {
    return this._cloudwatchLogGroup;
  }

  // cloudwatch_log_stream - computed: true, optional: true, required: false
  private _cloudwatchLogStream?: string; 
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }
  public set cloudwatchLogStream(value: string) {
    this._cloudwatchLogStream = value;
  }
  public resetCloudwatchLogStream() {
    this._cloudwatchLogStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogStreamInput() {
    return this._cloudwatchLogStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Ec2ClientVpnEndpointTransitGatewayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}
  */
  readonly availabilityZoneIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
}

export function ec2ClientVpnEndpointTransitGatewayConfigurationToTerraform(struct?: Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference | Ec2ClientVpnEndpointTransitGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZoneIds),
    availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
    transit_gateway_id: cdktn.stringToTerraform(struct!.transitGatewayId),
  }
}


export function ec2ClientVpnEndpointTransitGatewayConfigurationToHclTerraform(struct?: Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference | Ec2ClientVpnEndpointTransitGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZoneIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    availability_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    transit_gateway_id: {
      value: cdktn.stringToHclTerraform(struct!.transitGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnEndpointTransitGatewayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneIds = this._availabilityZoneIds;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointTransitGatewayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZoneIds = undefined;
      this._availabilityZones = undefined;
      this._transitGatewayId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZoneIds = value.availabilityZoneIds;
      this._availabilityZones = value.availabilityZones;
      this._transitGatewayId = value.transitGatewayId;
    }
  }

  // availability_zone_ids - computed: true, optional: true, required: false
  private _availabilityZoneIds?: string[]; 
  public get availabilityZoneIds() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zone_ids'));
  }
  public set availabilityZoneIds(value: string[]) {
    this._availabilityZoneIds = value;
  }
  public resetAvailabilityZoneIds() {
    this._availabilityZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdsInput() {
    return this._availabilityZoneIds;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export class Ec2ClientVpnEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2ClientVpnEndpoint to import
  * @param importFromId The id of the existing Ec2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_client_vpn_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._clientCidrBlock = config.clientCidrBlock;
    this._description = config.description;
    this._disconnectOnSessionTimeout = config.disconnectOnSessionTimeout;
    this._dnsServers = config.dnsServers;
    this._endpointIpAddressType = config.endpointIpAddressType;
    this._id = config.id;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._selfServicePortal = config.selfServicePortal;
    this._serverCertificateArn = config.serverCertificateArn;
    this._sessionTimeoutHours = config.sessionTimeoutHours;
    this._splitTunnel = config.splitTunnel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trafficIpAddressType = config.trafficIpAddressType;
    this._transportProtocol = config.transportProtocol;
    this._vpcId = config.vpcId;
    this._vpnPort = config.vpnPort;
    this._authenticationOptions.internalValue = config.authenticationOptions;
    this._clientConnectOptions.internalValue = config.clientConnectOptions;
    this._clientLoginBannerOptions.internalValue = config.clientLoginBannerOptions;
    this._clientRouteEnforcementOptions.internalValue = config.clientRouteEnforcementOptions;
    this._connectionLogOptions.internalValue = config.connectionLogOptions;
    this._transitGatewayConfiguration.internalValue = config.transitGatewayConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_cidr_block - computed: false, optional: true, required: false
  private _clientCidrBlock?: string; 
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }
  public set clientCidrBlock(value: string) {
    this._clientCidrBlock = value;
  }
  public resetClientCidrBlock() {
    this._clientCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrBlockInput() {
    return this._clientCidrBlock;
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

  // disconnect_on_session_timeout - computed: true, optional: true, required: false
  private _disconnectOnSessionTimeout?: boolean | cdktn.IResolvable; 
  public get disconnectOnSessionTimeout() {
    return this.getBooleanAttribute('disconnect_on_session_timeout');
  }
  public set disconnectOnSessionTimeout(value: boolean | cdktn.IResolvable) {
    this._disconnectOnSessionTimeout = value;
  }
  public resetDisconnectOnSessionTimeout() {
    this._disconnectOnSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectOnSessionTimeoutInput() {
    return this._disconnectOnSessionTimeout;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // endpoint_ip_address_type - computed: true, optional: true, required: false
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  public resetEndpointIpAddressType() {
    this._endpointIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
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

  // security_group_ids - computed: true, optional: true, required: false
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

  // self_service_portal - computed: false, optional: true, required: false
  private _selfServicePortal?: string; 
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }
  public set selfServicePortal(value: string) {
    this._selfServicePortal = value;
  }
  public resetSelfServicePortal() {
    this._selfServicePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePortalInput() {
    return this._selfServicePortal;
  }

  // self_service_portal_url - computed: true, optional: false, required: false
  public get selfServicePortalUrl() {
    return this.getStringAttribute('self_service_portal_url');
  }

  // server_certificate_arn - computed: false, optional: false, required: true
  private _serverCertificateArn?: string; 
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnInput() {
    return this._serverCertificateArn;
  }

  // session_timeout_hours - computed: false, optional: true, required: false
  private _sessionTimeoutHours?: number; 
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }
  public set sessionTimeoutHours(value: number) {
    this._sessionTimeoutHours = value;
  }
  public resetSessionTimeoutHours() {
    this._sessionTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutHoursInput() {
    return this._sessionTimeoutHours;
  }

  // split_tunnel - computed: false, optional: true, required: false
  private _splitTunnel?: boolean | cdktn.IResolvable; 
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean | cdktn.IResolvable) {
    this._splitTunnel = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel;
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

  // traffic_ip_address_type - computed: true, optional: true, required: false
  private _trafficIpAddressType?: string; 
  public get trafficIpAddressType() {
    return this.getStringAttribute('traffic_ip_address_type');
  }
  public set trafficIpAddressType(value: string) {
    this._trafficIpAddressType = value;
  }
  public resetTrafficIpAddressType() {
    this._trafficIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficIpAddressTypeInput() {
    return this._trafficIpAddressType;
  }

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // vpn_port - computed: false, optional: true, required: false
  private _vpnPort?: number; 
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
  }
  public set vpnPort(value: number) {
    this._vpnPort = value;
  }
  public resetVpnPort() {
    this._vpnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPortInput() {
    return this._vpnPort;
  }

  // authentication_options - computed: false, optional: false, required: true
  private _authenticationOptions = new Ec2ClientVpnEndpointAuthenticationOptionsList(this, "authentication_options", true);
  public get authenticationOptions() {
    return this._authenticationOptions;
  }
  public putAuthenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable) {
    this._authenticationOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOptionsInput() {
    return this._authenticationOptions.internalValue;
  }

  // client_connect_options - computed: false, optional: true, required: false
  private _clientConnectOptions = new Ec2ClientVpnEndpointClientConnectOptionsOutputReference(this, "client_connect_options");
  public get clientConnectOptions() {
    return this._clientConnectOptions;
  }
  public putClientConnectOptions(value: Ec2ClientVpnEndpointClientConnectOptions) {
    this._clientConnectOptions.internalValue = value;
  }
  public resetClientConnectOptions() {
    this._clientConnectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectOptionsInput() {
    return this._clientConnectOptions.internalValue;
  }

  // client_login_banner_options - computed: false, optional: true, required: false
  private _clientLoginBannerOptions = new Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(this, "client_login_banner_options");
  public get clientLoginBannerOptions() {
    return this._clientLoginBannerOptions;
  }
  public putClientLoginBannerOptions(value: Ec2ClientVpnEndpointClientLoginBannerOptions) {
    this._clientLoginBannerOptions.internalValue = value;
  }
  public resetClientLoginBannerOptions() {
    this._clientLoginBannerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLoginBannerOptionsInput() {
    return this._clientLoginBannerOptions.internalValue;
  }

  // client_route_enforcement_options - computed: false, optional: true, required: false
  private _clientRouteEnforcementOptions = new Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(this, "client_route_enforcement_options");
  public get clientRouteEnforcementOptions() {
    return this._clientRouteEnforcementOptions;
  }
  public putClientRouteEnforcementOptions(value: Ec2ClientVpnEndpointClientRouteEnforcementOptions) {
    this._clientRouteEnforcementOptions.internalValue = value;
  }
  public resetClientRouteEnforcementOptions() {
    this._clientRouteEnforcementOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRouteEnforcementOptionsInput() {
    return this._clientRouteEnforcementOptions.internalValue;
  }

  // connection_log_options - computed: false, optional: false, required: true
  private _connectionLogOptions = new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(this, "connection_log_options");
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }
  public putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions) {
    this._connectionLogOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLogOptionsInput() {
    return this._connectionLogOptions.internalValue;
  }

  // transit_gateway_configuration - computed: false, optional: true, required: false
  private _transitGatewayConfiguration = new Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference(this, "transit_gateway_configuration");
  public get transitGatewayConfiguration() {
    return this._transitGatewayConfiguration;
  }
  public putTransitGatewayConfiguration(value: Ec2ClientVpnEndpointTransitGatewayConfiguration) {
    this._transitGatewayConfiguration.internalValue = value;
  }
  public resetTransitGatewayConfiguration() {
    this._transitGatewayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConfigurationInput() {
    return this._transitGatewayConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_cidr_block: cdktn.stringToTerraform(this._clientCidrBlock),
      description: cdktn.stringToTerraform(this._description),
      disconnect_on_session_timeout: cdktn.booleanToTerraform(this._disconnectOnSessionTimeout),
      dns_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dnsServers),
      endpoint_ip_address_type: cdktn.stringToTerraform(this._endpointIpAddressType),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      self_service_portal: cdktn.stringToTerraform(this._selfServicePortal),
      server_certificate_arn: cdktn.stringToTerraform(this._serverCertificateArn),
      session_timeout_hours: cdktn.numberToTerraform(this._sessionTimeoutHours),
      split_tunnel: cdktn.booleanToTerraform(this._splitTunnel),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      traffic_ip_address_type: cdktn.stringToTerraform(this._trafficIpAddressType),
      transport_protocol: cdktn.stringToTerraform(this._transportProtocol),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
      vpn_port: cdktn.numberToTerraform(this._vpnPort),
      authentication_options: cdktn.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform, true)(this._authenticationOptions.internalValue),
      client_connect_options: ec2ClientVpnEndpointClientConnectOptionsToTerraform(this._clientConnectOptions.internalValue),
      client_login_banner_options: ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(this._clientLoginBannerOptions.internalValue),
      client_route_enforcement_options: ec2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(this._clientRouteEnforcementOptions.internalValue),
      connection_log_options: ec2ClientVpnEndpointConnectionLogOptionsToTerraform(this._connectionLogOptions.internalValue),
      transit_gateway_configuration: ec2ClientVpnEndpointTransitGatewayConfigurationToTerraform(this._transitGatewayConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_cidr_block: {
        value: cdktn.stringToHclTerraform(this._clientCidrBlock),
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
      disconnect_on_session_timeout: {
        value: cdktn.booleanToHclTerraform(this._disconnectOnSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_servers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint_ip_address_type: {
        value: cdktn.stringToHclTerraform(this._endpointIpAddressType),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      self_service_portal: {
        value: cdktn.stringToHclTerraform(this._selfServicePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_arn: {
        value: cdktn.stringToHclTerraform(this._serverCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout_hours: {
        value: cdktn.numberToHclTerraform(this._sessionTimeoutHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      split_tunnel: {
        value: cdktn.booleanToHclTerraform(this._splitTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      traffic_ip_address_type: {
        value: cdktn.stringToHclTerraform(this._trafficIpAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_protocol: {
        value: cdktn.stringToHclTerraform(this._transportProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_port: {
        value: cdktn.numberToHclTerraform(this._vpnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_options: {
        value: cdktn.listMapperHcl(ec2ClientVpnEndpointAuthenticationOptionsToHclTerraform, true)(this._authenticationOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2ClientVpnEndpointAuthenticationOptionsList",
      },
      client_connect_options: {
        value: ec2ClientVpnEndpointClientConnectOptionsToHclTerraform(this._clientConnectOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointClientConnectOptionsList",
      },
      client_login_banner_options: {
        value: ec2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(this._clientLoginBannerOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointClientLoginBannerOptionsList",
      },
      client_route_enforcement_options: {
        value: ec2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(this._clientRouteEnforcementOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointClientRouteEnforcementOptionsList",
      },
      connection_log_options: {
        value: ec2ClientVpnEndpointConnectionLogOptionsToHclTerraform(this._connectionLogOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointConnectionLogOptionsList",
      },
      transit_gateway_configuration: {
        value: ec2ClientVpnEndpointTransitGatewayConfigurationToHclTerraform(this._transitGatewayConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointTransitGatewayConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
