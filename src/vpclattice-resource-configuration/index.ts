/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VpclatticeResourceConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#allow_association_to_shareable_service_network VpclatticeResourceConfiguration#allow_association_to_shareable_service_network}
  */
  readonly allowAssociationToShareableServiceNetwork?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}
  */
  readonly customDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}
  */
  readonly domainVerificationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#protocol VpclatticeResourceConfiguration#protocol}
  */
  readonly protocol?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#region VpclatticeResourceConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}
  */
  readonly resourceConfigurationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#resource_gateway_identifier VpclatticeResourceConfiguration#resource_gateway_identifier}
  */
  readonly resourceGatewayIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#type VpclatticeResourceConfiguration#type}
  */
  readonly type?: string;
  /**
  * resource_configuration_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}
  */
  readonly resourceConfigurationDefinition?: VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#timeouts VpclatticeResourceConfiguration#timeouts}
  */
  readonly timeouts?: VpclatticeResourceConfigurationTimeouts;
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#arn VpclatticeResourceConfiguration#arn}
  */
  readonly arn: string;
}

export function vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceList extends cdktn.ComplexList {
  public internalValue? : VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceOutputReference {
    return new VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}
  */
  readonly ipAddressType: string;
}

export function vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
  }
}


export function vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._ipAddressType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._ipAddressType = value.ipAddressType;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ip_address_type - computed: false, optional: false, required: true
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceList extends cdktn.ComplexList {
  public internalValue? : VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference {
    return new VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#ip_address VpclatticeResourceConfiguration#ip_address}
  */
  readonly ipAddress: string;
}

export function vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
  }
}


export function vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceList extends cdktn.ComplexList {
  public internalValue? : VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceOutputReference {
    return new VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinition {
  /**
  * arn_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}
  */
  readonly arnResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktn.IResolvable;
  /**
  * dns_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}
  */
  readonly dnsResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktn.IResolvable;
  /**
  * ip_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}
  */
  readonly ipResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktn.IResolvable;
}

export function vpclatticeResourceConfigurationResourceConfigurationDefinitionToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn_resource: cdktn.listMapper(vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToTerraform, true)(struct!.arnResource),
    dns_resource: cdktn.listMapper(vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToTerraform, true)(struct!.dnsResource),
    ip_resource: cdktn.listMapper(vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToTerraform, true)(struct!.ipResource),
  }
}


export function vpclatticeResourceConfigurationResourceConfigurationDefinitionToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn_resource: {
      value: cdktn.listMapperHcl(vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToHclTerraform, true)(struct!.arnResource),
      isBlock: true,
      type: "list",
      storageClassType: "VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceList",
    },
    dns_resource: {
      value: cdktn.listMapperHcl(vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToHclTerraform, true)(struct!.dnsResource),
      isBlock: true,
      type: "list",
      storageClassType: "VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceList",
    },
    ip_resource: {
      value: cdktn.listMapperHcl(vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToHclTerraform, true)(struct!.ipResource),
      isBlock: true,
      type: "list",
      storageClassType: "VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arnResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arnResource = this._arnResource?.internalValue;
    }
    if (this._dnsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResource = this._dnsResource?.internalValue;
    }
    if (this._ipResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipResource = this._ipResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arnResource.internalValue = undefined;
      this._dnsResource.internalValue = undefined;
      this._ipResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arnResource.internalValue = value.arnResource;
      this._dnsResource.internalValue = value.dnsResource;
      this._ipResource.internalValue = value.ipResource;
    }
  }

  // arn_resource - computed: false, optional: true, required: false
  private _arnResource = new VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceList(this, "arn_resource", false);
  public get arnResource() {
    return this._arnResource;
  }
  public putArnResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktn.IResolvable) {
    this._arnResource.internalValue = value;
  }
  public resetArnResource() {
    this._arnResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnResourceInput() {
    return this._arnResource.internalValue;
  }

  // dns_resource - computed: false, optional: true, required: false
  private _dnsResource = new VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceList(this, "dns_resource", false);
  public get dnsResource() {
    return this._dnsResource;
  }
  public putDnsResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktn.IResolvable) {
    this._dnsResource.internalValue = value;
  }
  public resetDnsResource() {
    this._dnsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResourceInput() {
    return this._dnsResource.internalValue;
  }

  // ip_resource - computed: false, optional: true, required: false
  private _ipResource = new VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceList(this, "ip_resource", false);
  public get ipResource() {
    return this._ipResource;
  }
  public putIpResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktn.IResolvable) {
    this._ipResource.internalValue = value;
  }
  public resetIpResource() {
    this._ipResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipResourceInput() {
    return this._ipResource.internalValue;
  }
}

export class VpclatticeResourceConfigurationResourceConfigurationDefinitionList extends cdktn.ComplexList {
  public internalValue? : VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference {
    return new VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpclatticeResourceConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#create VpclatticeResourceConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#delete VpclatticeResourceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#update VpclatticeResourceConfiguration#update}
  */
  readonly update?: string;
}

export function vpclatticeResourceConfigurationTimeoutsToTerraform(struct?: VpclatticeResourceConfigurationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function vpclatticeResourceConfigurationTimeoutsToHclTerraform(struct?: VpclatticeResourceConfigurationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeResourceConfigurationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpclatticeResourceConfigurationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VpclatticeResourceConfigurationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration aws_vpclattice_resource_configuration}
*/
export class VpclatticeResourceConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpclattice_resource_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpclatticeResourceConfiguration to import
  * @param importFromId The id of the existing VpclatticeResourceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpclattice_resource_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/vpclattice_resource_configuration aws_vpclattice_resource_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpclatticeResourceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: VpclatticeResourceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpclattice_resource_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.32.1',
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
    this._allowAssociationToShareableServiceNetwork = config.allowAssociationToShareableServiceNetwork;
    this._customDomainName = config.customDomainName;
    this._domainVerificationId = config.domainVerificationId;
    this._name = config.name;
    this._portRanges = config.portRanges;
    this._protocol = config.protocol;
    this._region = config.region;
    this._resourceConfigurationGroupId = config.resourceConfigurationGroupId;
    this._resourceGatewayIdentifier = config.resourceGatewayIdentifier;
    this._tags = config.tags;
    this._type = config.type;
    this._resourceConfigurationDefinition.internalValue = config.resourceConfigurationDefinition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_association_to_shareable_service_network - computed: true, optional: true, required: false
  private _allowAssociationToShareableServiceNetwork?: boolean | cdktn.IResolvable; 
  public get allowAssociationToShareableServiceNetwork() {
    return this.getBooleanAttribute('allow_association_to_shareable_service_network');
  }
  public set allowAssociationToShareableServiceNetwork(value: boolean | cdktn.IResolvable) {
    this._allowAssociationToShareableServiceNetwork = value;
  }
  public resetAllowAssociationToShareableServiceNetwork() {
    this._allowAssociationToShareableServiceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAssociationToShareableServiceNetworkInput() {
    return this._allowAssociationToShareableServiceNetwork;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_domain_name - computed: false, optional: true, required: false
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  public resetCustomDomainName() {
    this._customDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
  }

  // domain_verification_arn - computed: true, optional: false, required: false
  public get domainVerificationArn() {
    return this.getStringAttribute('domain_verification_arn');
  }

  // domain_verification_id - computed: true, optional: true, required: false
  private _domainVerificationId?: string; 
  public get domainVerificationId() {
    return this.getStringAttribute('domain_verification_id');
  }
  public set domainVerificationId(value: string) {
    this._domainVerificationId = value;
  }
  public resetDomainVerificationId() {
    this._domainVerificationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainVerificationIdInput() {
    return this._domainVerificationId;
  }

  // domain_verification_status - computed: true, optional: false, required: false
  public get domainVerificationStatus() {
    return this.getStringAttribute('domain_verification_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('port_ranges'));
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // resource_configuration_group_id - computed: false, optional: true, required: false
  private _resourceConfigurationGroupId?: string; 
  public get resourceConfigurationGroupId() {
    return this.getStringAttribute('resource_configuration_group_id');
  }
  public set resourceConfigurationGroupId(value: string) {
    this._resourceConfigurationGroupId = value;
  }
  public resetResourceConfigurationGroupId() {
    this._resourceConfigurationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationGroupIdInput() {
    return this._resourceConfigurationGroupId;
  }

  // resource_gateway_identifier - computed: true, optional: true, required: false
  private _resourceGatewayIdentifier?: string; 
  public get resourceGatewayIdentifier() {
    return this.getStringAttribute('resource_gateway_identifier');
  }
  public set resourceGatewayIdentifier(value: string) {
    this._resourceGatewayIdentifier = value;
  }
  public resetResourceGatewayIdentifier() {
    this._resourceGatewayIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGatewayIdentifierInput() {
    return this._resourceGatewayIdentifier;
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // resource_configuration_definition - computed: false, optional: true, required: false
  private _resourceConfigurationDefinition = new VpclatticeResourceConfigurationResourceConfigurationDefinitionList(this, "resource_configuration_definition", false);
  public get resourceConfigurationDefinition() {
    return this._resourceConfigurationDefinition;
  }
  public putResourceConfigurationDefinition(value: VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktn.IResolvable) {
    this._resourceConfigurationDefinition.internalValue = value;
  }
  public resetResourceConfigurationDefinition() {
    this._resourceConfigurationDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationDefinitionInput() {
    return this._resourceConfigurationDefinition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpclatticeResourceConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpclatticeResourceConfigurationTimeouts) {
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
      allow_association_to_shareable_service_network: cdktn.booleanToTerraform(this._allowAssociationToShareableServiceNetwork),
      custom_domain_name: cdktn.stringToTerraform(this._customDomainName),
      domain_verification_id: cdktn.stringToTerraform(this._domainVerificationId),
      name: cdktn.stringToTerraform(this._name),
      port_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._portRanges),
      protocol: cdktn.stringToTerraform(this._protocol),
      region: cdktn.stringToTerraform(this._region),
      resource_configuration_group_id: cdktn.stringToTerraform(this._resourceConfigurationGroupId),
      resource_gateway_identifier: cdktn.stringToTerraform(this._resourceGatewayIdentifier),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      resource_configuration_definition: cdktn.listMapper(vpclatticeResourceConfigurationResourceConfigurationDefinitionToTerraform, true)(this._resourceConfigurationDefinition.internalValue),
      timeouts: vpclatticeResourceConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_association_to_shareable_service_network: {
        value: cdktn.booleanToHclTerraform(this._allowAssociationToShareableServiceNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_domain_name: {
        value: cdktn.stringToHclTerraform(this._customDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_verification_id: {
        value: cdktn.stringToHclTerraform(this._domainVerificationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._portRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktn.stringToHclTerraform(this._protocol),
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
      resource_configuration_group_id: {
        value: cdktn.stringToHclTerraform(this._resourceConfigurationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_gateway_identifier: {
        value: cdktn.stringToHclTerraform(this._resourceGatewayIdentifier),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_configuration_definition: {
        value: cdktn.listMapperHcl(vpclatticeResourceConfigurationResourceConfigurationDefinitionToHclTerraform, true)(this._resourceConfigurationDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpclatticeResourceConfigurationResourceConfigurationDefinitionList",
      },
      timeouts: {
        value: vpclatticeResourceConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpclatticeResourceConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
