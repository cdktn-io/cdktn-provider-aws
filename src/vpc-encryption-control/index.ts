/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEncryptionControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}
  */
  readonly egressOnlyInternetGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}
  */
  readonly elasticFileSystemExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}
  */
  readonly internetGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}
  */
  readonly lambdaExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}
  */
  readonly natGatewayExclusion?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#region VpcEncryptionControl#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}
  */
  readonly virtualPrivateGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}
  */
  readonly vpcLatticeExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}
  */
  readonly vpcPeeringExclusion?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#timeouts VpcEncryptionControl#timeouts}
  */
  readonly timeouts?: VpcEncryptionControlTimeouts;
}
export interface VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {
}

export function vpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToTerraform(struct?: VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsElasticFileSystem {
}

export function vpcEncryptionControlResourceExclusionsElasticFileSystemToTerraform(struct?: VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsElasticFileSystemToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsInternetGateway {
}

export function vpcEncryptionControlResourceExclusionsInternetGatewayToTerraform(struct?: VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsInternetGatewayToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsInternetGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsLambda {
}

export function vpcEncryptionControlResourceExclusionsLambdaToTerraform(struct?: VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsLambdaToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsNatGateway {
}

export function vpcEncryptionControlResourceExclusionsNatGatewayToTerraform(struct?: VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsNatGatewayToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsNatGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsNatGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsNatGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {
}

export function vpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToTerraform(struct?: VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsVpcLattice {
}

export function vpcEncryptionControlResourceExclusionsVpcLatticeToTerraform(struct?: VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsVpcLatticeToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsVpcLattice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsVpcLattice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusionsVpcPeering {
}

export function vpcEncryptionControlResourceExclusionsVpcPeeringToTerraform(struct?: VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsVpcPeeringToHclTerraform(struct?: VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusionsVpcPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusionsVpcPeering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcEncryptionControlResourceExclusions {
}

export function vpcEncryptionControlResourceExclusionsToTerraform(struct?: VpcEncryptionControlResourceExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcEncryptionControlResourceExclusionsToHclTerraform(struct?: VpcEncryptionControlResourceExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcEncryptionControlResourceExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlResourceExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEncryptionControlResourceExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway - computed: true, optional: false, required: false
  private _egressOnlyInternetGateway = new VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(this, "egress_only_internet_gateway");
  public get egressOnlyInternetGateway() {
    return this._egressOnlyInternetGateway;
  }

  // elastic_file_system - computed: true, optional: false, required: false
  private _elasticFileSystem = new VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(this, "elastic_file_system");
  public get elasticFileSystem() {
    return this._elasticFileSystem;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new VpcEncryptionControlResourceExclusionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // virtual_private_gateway - computed: true, optional: false, required: false
  private _virtualPrivateGateway = new VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(this, "virtual_private_gateway");
  public get virtualPrivateGateway() {
    return this._virtualPrivateGateway;
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface VpcEncryptionControlTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#create VpcEncryptionControl#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#delete VpcEncryptionControl#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#update VpcEncryptionControl#update}
  */
  readonly update?: string;
}

export function vpcEncryptionControlTimeoutsToTerraform(struct?: VpcEncryptionControlTimeouts | cdktf.IResolvable): any {
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


export function vpcEncryptionControlTimeoutsToHclTerraform(struct?: VpcEncryptionControlTimeouts | cdktf.IResolvable): any {
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

export class VpcEncryptionControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcEncryptionControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcEncryptionControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control}
*/
export class VpcEncryptionControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_encryption_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEncryptionControl to import
  * @param importFromId The id of the existing VpcEncryptionControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEncryptionControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_encryption_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEncryptionControlConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEncryptionControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_encryption_control',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.24.0',
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
    this._egressOnlyInternetGatewayExclusion = config.egressOnlyInternetGatewayExclusion;
    this._elasticFileSystemExclusion = config.elasticFileSystemExclusion;
    this._internetGatewayExclusion = config.internetGatewayExclusion;
    this._lambdaExclusion = config.lambdaExclusion;
    this._mode = config.mode;
    this._natGatewayExclusion = config.natGatewayExclusion;
    this._region = config.region;
    this._tags = config.tags;
    this._virtualPrivateGatewayExclusion = config.virtualPrivateGatewayExclusion;
    this._vpcId = config.vpcId;
    this._vpcLatticeExclusion = config.vpcLatticeExclusion;
    this._vpcPeeringExclusion = config.vpcPeeringExclusion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_only_internet_gateway_exclusion - computed: true, optional: true, required: false
  private _egressOnlyInternetGatewayExclusion?: string; 
  public get egressOnlyInternetGatewayExclusion() {
    return this.getStringAttribute('egress_only_internet_gateway_exclusion');
  }
  public set egressOnlyInternetGatewayExclusion(value: string) {
    this._egressOnlyInternetGatewayExclusion = value;
  }
  public resetEgressOnlyInternetGatewayExclusion() {
    this._egressOnlyInternetGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyInternetGatewayExclusionInput() {
    return this._egressOnlyInternetGatewayExclusion;
  }

  // elastic_file_system_exclusion - computed: true, optional: true, required: false
  private _elasticFileSystemExclusion?: string; 
  public get elasticFileSystemExclusion() {
    return this.getStringAttribute('elastic_file_system_exclusion');
  }
  public set elasticFileSystemExclusion(value: string) {
    this._elasticFileSystemExclusion = value;
  }
  public resetElasticFileSystemExclusion() {
    this._elasticFileSystemExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticFileSystemExclusionInput() {
    return this._elasticFileSystemExclusion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_gateway_exclusion - computed: true, optional: true, required: false
  private _internetGatewayExclusion?: string; 
  public get internetGatewayExclusion() {
    return this.getStringAttribute('internet_gateway_exclusion');
  }
  public set internetGatewayExclusion(value: string) {
    this._internetGatewayExclusion = value;
  }
  public resetInternetGatewayExclusion() {
    this._internetGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayExclusionInput() {
    return this._internetGatewayExclusion;
  }

  // lambda_exclusion - computed: true, optional: true, required: false
  private _lambdaExclusion?: string; 
  public get lambdaExclusion() {
    return this.getStringAttribute('lambda_exclusion');
  }
  public set lambdaExclusion(value: string) {
    this._lambdaExclusion = value;
  }
  public resetLambdaExclusion() {
    this._lambdaExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaExclusionInput() {
    return this._lambdaExclusion;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nat_gateway_exclusion - computed: true, optional: true, required: false
  private _natGatewayExclusion?: string; 
  public get natGatewayExclusion() {
    return this.getStringAttribute('nat_gateway_exclusion');
  }
  public set natGatewayExclusion(value: string) {
    this._natGatewayExclusion = value;
  }
  public resetNatGatewayExclusion() {
    this._natGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayExclusionInput() {
    return this._natGatewayExclusion;
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

  // resource_exclusions - computed: true, optional: false, required: false
  private _resourceExclusions = new VpcEncryptionControlResourceExclusionsOutputReference(this, "resource_exclusions");
  public get resourceExclusions() {
    return this._resourceExclusions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

  // virtual_private_gateway_exclusion - computed: true, optional: true, required: false
  private _virtualPrivateGatewayExclusion?: string; 
  public get virtualPrivateGatewayExclusion() {
    return this.getStringAttribute('virtual_private_gateway_exclusion');
  }
  public set virtualPrivateGatewayExclusion(value: string) {
    this._virtualPrivateGatewayExclusion = value;
  }
  public resetVirtualPrivateGatewayExclusion() {
    this._virtualPrivateGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPrivateGatewayExclusionInput() {
    return this._virtualPrivateGatewayExclusion;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_lattice_exclusion - computed: true, optional: true, required: false
  private _vpcLatticeExclusion?: string; 
  public get vpcLatticeExclusion() {
    return this.getStringAttribute('vpc_lattice_exclusion');
  }
  public set vpcLatticeExclusion(value: string) {
    this._vpcLatticeExclusion = value;
  }
  public resetVpcLatticeExclusion() {
    this._vpcLatticeExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcLatticeExclusionInput() {
    return this._vpcLatticeExclusion;
  }

  // vpc_peering_exclusion - computed: true, optional: true, required: false
  private _vpcPeeringExclusion?: string; 
  public get vpcPeeringExclusion() {
    return this.getStringAttribute('vpc_peering_exclusion');
  }
  public set vpcPeeringExclusion(value: string) {
    this._vpcPeeringExclusion = value;
  }
  public resetVpcPeeringExclusion() {
    this._vpcPeeringExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringExclusionInput() {
    return this._vpcPeeringExclusion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcEncryptionControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcEncryptionControlTimeouts) {
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
      egress_only_internet_gateway_exclusion: cdktf.stringToTerraform(this._egressOnlyInternetGatewayExclusion),
      elastic_file_system_exclusion: cdktf.stringToTerraform(this._elasticFileSystemExclusion),
      internet_gateway_exclusion: cdktf.stringToTerraform(this._internetGatewayExclusion),
      lambda_exclusion: cdktf.stringToTerraform(this._lambdaExclusion),
      mode: cdktf.stringToTerraform(this._mode),
      nat_gateway_exclusion: cdktf.stringToTerraform(this._natGatewayExclusion),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_private_gateway_exclusion: cdktf.stringToTerraform(this._virtualPrivateGatewayExclusion),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_lattice_exclusion: cdktf.stringToTerraform(this._vpcLatticeExclusion),
      vpc_peering_exclusion: cdktf.stringToTerraform(this._vpcPeeringExclusion),
      timeouts: vpcEncryptionControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_only_internet_gateway_exclusion: {
        value: cdktf.stringToHclTerraform(this._egressOnlyInternetGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_file_system_exclusion: {
        value: cdktf.stringToHclTerraform(this._elasticFileSystemExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_exclusion: {
        value: cdktf.stringToHclTerraform(this._internetGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_exclusion: {
        value: cdktf.stringToHclTerraform(this._lambdaExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_exclusion: {
        value: cdktf.stringToHclTerraform(this._natGatewayExclusion),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_private_gateway_exclusion: {
        value: cdktf.stringToHclTerraform(this._virtualPrivateGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_lattice_exclusion: {
        value: cdktf.stringToHclTerraform(this._vpcLatticeExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_exclusion: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcEncryptionControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcEncryptionControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
