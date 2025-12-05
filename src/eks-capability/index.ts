/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksCapabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}
  */
  readonly capabilityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}
  */
  readonly deletePropagationPolicy: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#region EksCapability#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#tags EksCapability#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#configuration EksCapability#configuration}
  */
  readonly configuration?: EksCapabilityConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#timeouts EksCapability#timeouts}
  */
  readonly timeouts?: EksCapabilityTimeouts;
}
export interface EksCapabilityConfigurationArgoCdAwsIdc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}
  */
  readonly idcInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}
  */
  readonly idcRegion?: string;
}

export function eksCapabilityConfigurationArgoCdAwsIdcToTerraform(struct?: EksCapabilityConfigurationArgoCdAwsIdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idc_instance_arn: cdktf.stringToTerraform(struct!.idcInstanceArn),
    idc_region: cdktf.stringToTerraform(struct!.idcRegion),
  }
}


export function eksCapabilityConfigurationArgoCdAwsIdcToHclTerraform(struct?: EksCapabilityConfigurationArgoCdAwsIdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idc_instance_arn: {
      value: cdktf.stringToHclTerraform(struct!.idcInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idc_region: {
      value: cdktf.stringToHclTerraform(struct!.idcRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdAwsIdcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdAwsIdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idcInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcInstanceArn = this._idcInstanceArn;
    }
    if (this._idcRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcRegion = this._idcRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdAwsIdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idcInstanceArn = undefined;
      this._idcRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idcInstanceArn = value.idcInstanceArn;
      this._idcRegion = value.idcRegion;
    }
  }

  // idc_instance_arn - computed: false, optional: false, required: true
  private _idcInstanceArn?: string; 
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }
  public set idcInstanceArn(value: string) {
    this._idcInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcInstanceArnInput() {
    return this._idcInstanceArn;
  }

  // idc_managed_application_arn - computed: true, optional: false, required: false
  public get idcManagedApplicationArn() {
    return this.getStringAttribute('idc_managed_application_arn');
  }

  // idc_region - computed: true, optional: true, required: false
  private _idcRegion?: string; 
  public get idcRegion() {
    return this.getStringAttribute('idc_region');
  }
  public set idcRegion(value: string) {
    this._idcRegion = value;
  }
  public resetIdcRegion() {
    this._idcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcRegionInput() {
    return this._idcRegion;
  }
}

export class EksCapabilityConfigurationArgoCdAwsIdcList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdAwsIdc[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdAwsIdcOutputReference {
    return new EksCapabilityConfigurationArgoCdAwsIdcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCdNetworkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}
  */
  readonly vpceIds?: string[];
}

export function eksCapabilityConfigurationArgoCdNetworkAccessToTerraform(struct?: EksCapabilityConfigurationArgoCdNetworkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpce_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpceIds),
  }
}


export function eksCapabilityConfigurationArgoCdNetworkAccessToHclTerraform(struct?: EksCapabilityConfigurationArgoCdNetworkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpce_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdNetworkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdNetworkAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceIds = this._vpceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdNetworkAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpceIds = value.vpceIds;
    }
  }

  // vpce_ids - computed: false, optional: true, required: false
  private _vpceIds?: string[]; 
  public get vpceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpce_ids'));
  }
  public set vpceIds(value: string[]) {
    this._vpceIds = value;
  }
  public resetVpceIds() {
    this._vpceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdsInput() {
    return this._vpceIds;
  }
}

export class EksCapabilityConfigurationArgoCdNetworkAccessList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdNetworkAccess[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdNetworkAccessOutputReference {
    return new EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#id EksCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#type EksCapability#type}
  */
  readonly type: string;
}

export function eksCapabilityConfigurationArgoCdRbacRoleMappingIdentityToTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eksCapabilityConfigurationArgoCdRbacRoleMappingIdentityToHclTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference {
    return new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCdRbacRoleMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#role EksCapability#role}
  */
  readonly role: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#identity EksCapability#identity}
  */
  readonly identity?: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] | cdktf.IResolvable;
}

export function eksCapabilityConfigurationArgoCdRbacRoleMappingToTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    identity: cdktf.listMapper(eksCapabilityConfigurationArgoCdRbacRoleMappingIdentityToTerraform, true)(struct!.identity),
  }
}


export function eksCapabilityConfigurationArgoCdRbacRoleMappingToHclTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.listMapperHcl(eksCapabilityConfigurationArgoCdRbacRoleMappingIdentityToHclTerraform, true)(struct!.identity),
      isBlock: true,
      type: "set",
      storageClassType: "EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdRbacRoleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdRbacRoleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._identity.internalValue = value.identity;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new EksCapabilityConfigurationArgoCdRbacRoleMappingIdentityList(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: EksCapabilityConfigurationArgoCdRbacRoleMappingIdentity[] | cdktf.IResolvable) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class EksCapabilityConfigurationArgoCdRbacRoleMappingList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdRbacRoleMapping[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference {
    return new EksCapabilityConfigurationArgoCdRbacRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#namespace EksCapability#namespace}
  */
  readonly namespace?: string;
  /**
  * aws_idc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}
  */
  readonly awsIdc?: EksCapabilityConfigurationArgoCdAwsIdc[] | cdktf.IResolvable;
  /**
  * network_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#network_access EksCapability#network_access}
  */
  readonly networkAccess?: EksCapabilityConfigurationArgoCdNetworkAccess[] | cdktf.IResolvable;
  /**
  * rbac_role_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#rbac_role_mapping EksCapability#rbac_role_mapping}
  */
  readonly rbacRoleMapping?: EksCapabilityConfigurationArgoCdRbacRoleMapping[] | cdktf.IResolvable;
}

export function eksCapabilityConfigurationArgoCdToTerraform(struct?: EksCapabilityConfigurationArgoCd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    aws_idc: cdktf.listMapper(eksCapabilityConfigurationArgoCdAwsIdcToTerraform, true)(struct!.awsIdc),
    network_access: cdktf.listMapper(eksCapabilityConfigurationArgoCdNetworkAccessToTerraform, true)(struct!.networkAccess),
    rbac_role_mapping: cdktf.listMapper(eksCapabilityConfigurationArgoCdRbacRoleMappingToTerraform, true)(struct!.rbacRoleMapping),
  }
}


export function eksCapabilityConfigurationArgoCdToHclTerraform(struct?: EksCapabilityConfigurationArgoCd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_idc: {
      value: cdktf.listMapperHcl(eksCapabilityConfigurationArgoCdAwsIdcToHclTerraform, true)(struct!.awsIdc),
      isBlock: true,
      type: "list",
      storageClassType: "EksCapabilityConfigurationArgoCdAwsIdcList",
    },
    network_access: {
      value: cdktf.listMapperHcl(eksCapabilityConfigurationArgoCdNetworkAccessToHclTerraform, true)(struct!.networkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "EksCapabilityConfigurationArgoCdNetworkAccessList",
    },
    rbac_role_mapping: {
      value: cdktf.listMapperHcl(eksCapabilityConfigurationArgoCdRbacRoleMappingToHclTerraform, true)(struct!.rbacRoleMapping),
      isBlock: true,
      type: "set",
      storageClassType: "EksCapabilityConfigurationArgoCdRbacRoleMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._awsIdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIdc = this._awsIdc?.internalValue;
    }
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    if (this._rbacRoleMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbacRoleMapping = this._rbacRoleMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._awsIdc.internalValue = undefined;
      this._networkAccess.internalValue = undefined;
      this._rbacRoleMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._awsIdc.internalValue = value.awsIdc;
      this._networkAccess.internalValue = value.networkAccess;
      this._rbacRoleMapping.internalValue = value.rbacRoleMapping;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // aws_idc - computed: false, optional: true, required: false
  private _awsIdc = new EksCapabilityConfigurationArgoCdAwsIdcList(this, "aws_idc", false);
  public get awsIdc() {
    return this._awsIdc;
  }
  public putAwsIdc(value: EksCapabilityConfigurationArgoCdAwsIdc[] | cdktf.IResolvable) {
    this._awsIdc.internalValue = value;
  }
  public resetAwsIdc() {
    this._awsIdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIdcInput() {
    return this._awsIdc.internalValue;
  }

  // network_access - computed: false, optional: true, required: false
  private _networkAccess = new EksCapabilityConfigurationArgoCdNetworkAccessList(this, "network_access", false);
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: EksCapabilityConfigurationArgoCdNetworkAccess[] | cdktf.IResolvable) {
    this._networkAccess.internalValue = value;
  }
  public resetNetworkAccess() {
    this._networkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessInput() {
    return this._networkAccess.internalValue;
  }

  // rbac_role_mapping - computed: false, optional: true, required: false
  private _rbacRoleMapping = new EksCapabilityConfigurationArgoCdRbacRoleMappingList(this, "rbac_role_mapping", true);
  public get rbacRoleMapping() {
    return this._rbacRoleMapping;
  }
  public putRbacRoleMapping(value: EksCapabilityConfigurationArgoCdRbacRoleMapping[] | cdktf.IResolvable) {
    this._rbacRoleMapping.internalValue = value;
  }
  public resetRbacRoleMapping() {
    this._rbacRoleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacRoleMappingInput() {
    return this._rbacRoleMapping.internalValue;
  }
}

export class EksCapabilityConfigurationArgoCdList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCd[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdOutputReference {
    return new EksCapabilityConfigurationArgoCdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfiguration {
  /**
  * argo_cd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}
  */
  readonly argoCd?: EksCapabilityConfigurationArgoCd[] | cdktf.IResolvable;
}

export function eksCapabilityConfigurationToTerraform(struct?: EksCapabilityConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argo_cd: cdktf.listMapper(eksCapabilityConfigurationArgoCdToTerraform, true)(struct!.argoCd),
  }
}


export function eksCapabilityConfigurationToHclTerraform(struct?: EksCapabilityConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argo_cd: {
      value: cdktf.listMapperHcl(eksCapabilityConfigurationArgoCdToHclTerraform, true)(struct!.argoCd),
      isBlock: true,
      type: "list",
      storageClassType: "EksCapabilityConfigurationArgoCdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksCapabilityConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argoCd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCd = this._argoCd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = value.argoCd;
    }
  }

  // argo_cd - computed: false, optional: true, required: false
  private _argoCd = new EksCapabilityConfigurationArgoCdList(this, "argo_cd", false);
  public get argoCd() {
    return this._argoCd;
  }
  public putArgoCd(value: EksCapabilityConfigurationArgoCd[] | cdktf.IResolvable) {
    this._argoCd.internalValue = value;
  }
  public resetArgoCd() {
    this._argoCd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdInput() {
    return this._argoCd.internalValue;
  }
}

export class EksCapabilityConfigurationList extends cdktf.ComplexList {
  public internalValue? : EksCapabilityConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EksCapabilityConfigurationOutputReference {
    return new EksCapabilityConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#create EksCapability#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#delete EksCapability#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#update EksCapability#update}
  */
  readonly update?: string;
}

export function eksCapabilityTimeoutsToTerraform(struct?: EksCapabilityTimeouts | cdktf.IResolvable): any {
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


export function eksCapabilityTimeoutsToHclTerraform(struct?: EksCapabilityTimeouts | cdktf.IResolvable): any {
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

export class EksCapabilityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCapabilityTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EksCapabilityTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability aws_eks_capability}
*/
export class EksCapability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksCapability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCapability to import
  * @param importFromId The id of the existing EksCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/eks_capability aws_eks_capability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksCapabilityConfig
  */
  public constructor(scope: Construct, id: string, config: EksCapabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_capability',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.25.0',
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
    this._capabilityName = config.capabilityName;
    this._clusterName = config.clusterName;
    this._deletePropagationPolicy = config.deletePropagationPolicy;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capability_name - computed: false, optional: false, required: true
  private _capabilityName?: string; 
  public get capabilityName() {
    return this.getStringAttribute('capability_name');
  }
  public set capabilityName(value: string) {
    this._capabilityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityNameInput() {
    return this._capabilityName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // delete_propagation_policy - computed: false, optional: false, required: true
  private _deletePropagationPolicy?: string; 
  public get deletePropagationPolicy() {
    return this.getStringAttribute('delete_propagation_policy');
  }
  public set deletePropagationPolicy(value: string) {
    this._deletePropagationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePropagationPolicyInput() {
    return this._deletePropagationPolicy;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new EksCapabilityConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EksCapabilityConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksCapabilityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksCapabilityTimeouts) {
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
      capability_name: cdktf.stringToTerraform(this._capabilityName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      delete_propagation_policy: cdktf.stringToTerraform(this._deletePropagationPolicy),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      configuration: cdktf.listMapper(eksCapabilityConfigurationToTerraform, true)(this._configuration.internalValue),
      timeouts: eksCapabilityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capability_name: {
        value: cdktf.stringToHclTerraform(this._capabilityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_propagation_policy: {
        value: cdktf.stringToHclTerraform(this._deletePropagationPolicy),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(eksCapabilityConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksCapabilityConfigurationList",
      },
      timeouts: {
        value: eksCapabilityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksCapabilityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
