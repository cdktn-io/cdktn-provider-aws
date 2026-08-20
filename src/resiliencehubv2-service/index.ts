/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Resiliencehubv2ServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}
  */
  readonly dependencyDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}
  */
  readonly policyArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#region Resiliencehubv2Service#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * associated_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#associated_system Resiliencehubv2Service#associated_system}
  */
  readonly associatedSystem?: Resiliencehubv2ServiceAssociatedSystem[] | cdktn.IResolvable;
  /**
  * permission_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}
  */
  readonly permissionModel?: Resiliencehubv2ServicePermissionModel[] | cdktn.IResolvable;
}
export interface Resiliencehubv2ServiceAssociatedSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}
  */
  readonly systemArn: string;
}

export function resiliencehubv2ServiceAssociatedSystemToTerraform(struct?: Resiliencehubv2ServiceAssociatedSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_arn: cdktn.stringToTerraform(struct!.systemArn),
  }
}


export function resiliencehubv2ServiceAssociatedSystemToHclTerraform(struct?: Resiliencehubv2ServiceAssociatedSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_arn: {
      value: cdktn.stringToHclTerraform(struct!.systemArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceAssociatedSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceAssociatedSystem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemArn = this._systemArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceAssociatedSystem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systemArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systemArn = value.systemArn;
    }
  }

  // system_arn - computed: false, optional: false, required: true
  private _systemArn?: string; 
  public get systemArn() {
    return this.getStringAttribute('system_arn');
  }
  public set systemArn(value: string) {
    this._systemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemArnInput() {
    return this._systemArn;
  }
}

export class Resiliencehubv2ServiceAssociatedSystemList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceAssociatedSystem[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceAssociatedSystemOutputReference {
    return new Resiliencehubv2ServiceAssociatedSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServicePermissionModelCrossAccountRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}
  */
  readonly crossAccountRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}
  */
  readonly externalId?: string;
}

export function resiliencehubv2ServicePermissionModelCrossAccountRoleToTerraform(struct?: Resiliencehubv2ServicePermissionModelCrossAccountRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role_arn: cdktn.stringToTerraform(struct!.crossAccountRoleArn),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function resiliencehubv2ServicePermissionModelCrossAccountRoleToHclTerraform(struct?: Resiliencehubv2ServicePermissionModelCrossAccountRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServicePermissionModelCrossAccountRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServicePermissionModelCrossAccountRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRoleArn = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRoleArn = value.crossAccountRoleArn;
      this._externalId = value.externalId;
    }
  }

  // cross_account_role_arn - computed: false, optional: false, required: true
  private _crossAccountRoleArn?: string; 
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }
  public set crossAccountRoleArn(value: string) {
    this._crossAccountRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnInput() {
    return this._crossAccountRoleArn;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class Resiliencehubv2ServicePermissionModelCrossAccountRoleList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServicePermissionModelCrossAccountRole[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference {
    return new Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServicePermissionModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}
  */
  readonly invokerRoleName: string;
  /**
  * cross_account_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#cross_account_role Resiliencehubv2Service#cross_account_role}
  */
  readonly crossAccountRole?: Resiliencehubv2ServicePermissionModelCrossAccountRole[] | cdktn.IResolvable;
}

export function resiliencehubv2ServicePermissionModelToTerraform(struct?: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoker_role_name: cdktn.stringToTerraform(struct!.invokerRoleName),
    cross_account_role: cdktn.listMapper(resiliencehubv2ServicePermissionModelCrossAccountRoleToTerraform, true)(struct!.crossAccountRole),
  }
}


export function resiliencehubv2ServicePermissionModelToHclTerraform(struct?: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoker_role_name: {
      value: cdktn.stringToHclTerraform(struct!.invokerRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.listMapperHcl(resiliencehubv2ServicePermissionModelCrossAccountRoleToHclTerraform, true)(struct!.crossAccountRole),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2ServicePermissionModelCrossAccountRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServicePermissionModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServicePermissionModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokerRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokerRoleName = this._invokerRoleName;
    }
    if (this._crossAccountRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokerRoleName = undefined;
      this._crossAccountRole.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokerRoleName = value.invokerRoleName;
      this._crossAccountRole.internalValue = value.crossAccountRole;
    }
  }

  // invoker_role_name - computed: false, optional: false, required: true
  private _invokerRoleName?: string; 
  public get invokerRoleName() {
    return this.getStringAttribute('invoker_role_name');
  }
  public set invokerRoleName(value: string) {
    this._invokerRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerRoleNameInput() {
    return this._invokerRoleName;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole = new Resiliencehubv2ServicePermissionModelCrossAccountRoleList(this, "cross_account_role", false);
  public get crossAccountRole() {
    return this._crossAccountRole;
  }
  public putCrossAccountRole(value: Resiliencehubv2ServicePermissionModelCrossAccountRole[] | cdktn.IResolvable) {
    this._crossAccountRole.internalValue = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole.internalValue;
  }
}

export class Resiliencehubv2ServicePermissionModelList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServicePermissionModel[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServicePermissionModelOutputReference {
    return new Resiliencehubv2ServicePermissionModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service aws_resiliencehubv2_service}
*/
export class Resiliencehubv2Service extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resiliencehubv2_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resiliencehubv2Service to import
  * @param importFromId The id of the existing Resiliencehubv2Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resiliencehubv2Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resiliencehubv2_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_service aws_resiliencehubv2_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Resiliencehubv2ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: Resiliencehubv2ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resiliencehubv2_service',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._dependencyDiscovery = config.dependencyDiscovery;
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._policyArn = config.policyArn;
    this._region = config.region;
    this._regions = config.regions;
    this._tags = config.tags;
    this._associatedSystem.internalValue = config.associatedSystem;
    this._permissionModel.internalValue = config.permissionModel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dependency_discovery - computed: true, optional: true, required: false
  private _dependencyDiscovery?: string; 
  public get dependencyDiscovery() {
    return this.getStringAttribute('dependency_discovery');
  }
  public set dependencyDiscovery(value: string) {
    this._dependencyDiscovery = value;
  }
  public resetDependencyDiscovery() {
    this._dependencyDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyDiscoveryInput() {
    return this._dependencyDiscovery;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // policy_arn - computed: false, optional: true, required: false
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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

  // associated_system - computed: false, optional: true, required: false
  private _associatedSystem = new Resiliencehubv2ServiceAssociatedSystemList(this, "associated_system", true);
  public get associatedSystem() {
    return this._associatedSystem;
  }
  public putAssociatedSystem(value: Resiliencehubv2ServiceAssociatedSystem[] | cdktn.IResolvable) {
    this._associatedSystem.internalValue = value;
  }
  public resetAssociatedSystem() {
    this._associatedSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedSystemInput() {
    return this._associatedSystem.internalValue;
  }

  // permission_model - computed: false, optional: true, required: false
  private _permissionModel = new Resiliencehubv2ServicePermissionModelList(this, "permission_model", false);
  public get permissionModel() {
    return this._permissionModel;
  }
  public putPermissionModel(value: Resiliencehubv2ServicePermissionModel[] | cdktn.IResolvable) {
    this._permissionModel.internalValue = value;
  }
  public resetPermissionModel() {
    this._permissionModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependency_discovery: cdktn.stringToTerraform(this._dependencyDiscovery),
      description: cdktn.stringToTerraform(this._description),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      policy_arn: cdktn.stringToTerraform(this._policyArn),
      region: cdktn.stringToTerraform(this._region),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      associated_system: cdktn.listMapper(resiliencehubv2ServiceAssociatedSystemToTerraform, true)(this._associatedSystem.internalValue),
      permission_model: cdktn.listMapper(resiliencehubv2ServicePermissionModelToTerraform, true)(this._permissionModel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependency_discovery: {
        value: cdktn.stringToHclTerraform(this._dependencyDiscovery),
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
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      policy_arn: {
        value: cdktn.stringToHclTerraform(this._policyArn),
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
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associated_system: {
        value: cdktn.listMapperHcl(resiliencehubv2ServiceAssociatedSystemToHclTerraform, true)(this._associatedSystem.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Resiliencehubv2ServiceAssociatedSystemList",
      },
      permission_model: {
        value: cdktn.listMapperHcl(resiliencehubv2ServicePermissionModelToHclTerraform, true)(this._permissionModel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resiliencehubv2ServicePermissionModelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
