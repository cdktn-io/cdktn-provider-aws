/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EksAddonConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}
  */
  readonly addonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}
  */
  readonly configurationValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#id EksAddon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#preserve EksAddon#preserve}
  */
  readonly preserve?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#region EksAddon#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}
  */
  readonly resolveConflictsOnCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}
  */
  readonly resolveConflictsOnUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}
  */
  readonly serviceAccountRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#tags EksAddon#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * namespace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#namespace_config EksAddon#namespace_config}
  */
  readonly namespaceConfig?: EksAddonNamespaceConfig;
  /**
  * pod_identity_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#pod_identity_association EksAddon#pod_identity_association}
  */
  readonly podIdentityAssociation?: EksAddonPodIdentityAssociation[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#timeouts EksAddon#timeouts}
  */
  readonly timeouts?: EksAddonTimeouts;
}
export interface EksAddonNamespaceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#namespace EksAddon#namespace}
  */
  readonly namespace?: string;
}

export function eksAddonNamespaceConfigToTerraform(struct?: EksAddonNamespaceConfigOutputReference | EksAddonNamespaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function eksAddonNamespaceConfigToHclTerraform(struct?: EksAddonNamespaceConfigOutputReference | EksAddonNamespaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksAddonNamespaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksAddonNamespaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksAddonNamespaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
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
}
export interface EksAddonPodIdentityAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#role_arn EksAddon#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#service_account EksAddon#service_account}
  */
  readonly serviceAccount: string;
}

export function eksAddonPodIdentityAssociationToTerraform(struct?: EksAddonPodIdentityAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function eksAddonPodIdentityAssociationToHclTerraform(struct?: EksAddonPodIdentityAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksAddonPodIdentityAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksAddonPodIdentityAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksAddonPodIdentityAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._serviceAccount = value.serviceAccount;
    }
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

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class EksAddonPodIdentityAssociationList extends cdktn.ComplexList {
  public internalValue? : EksAddonPodIdentityAssociation[] | cdktn.IResolvable

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
  public get(index: number): EksAddonPodIdentityAssociationOutputReference {
    return new EksAddonPodIdentityAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksAddonTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#create EksAddon#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#delete EksAddon#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#update EksAddon#update}
  */
  readonly update?: string;
}

export function eksAddonTimeoutsToTerraform(struct?: EksAddonTimeouts | cdktn.IResolvable): any {
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


export function eksAddonTimeoutsToHclTerraform(struct?: EksAddonTimeouts | cdktn.IResolvable): any {
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

export class EksAddonTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksAddonTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EksAddonTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon aws_eks_addon}
*/
export class EksAddon extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_addon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EksAddon resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksAddon to import
  * @param importFromId The id of the existing EksAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksAddon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_addon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/eks_addon aws_eks_addon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksAddonConfig
  */
  public constructor(scope: Construct, id: string, config: EksAddonConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_addon',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.46.0',
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
    this._addonName = config.addonName;
    this._addonVersion = config.addonVersion;
    this._clusterName = config.clusterName;
    this._configurationValues = config.configurationValues;
    this._id = config.id;
    this._preserve = config.preserve;
    this._region = config.region;
    this._resolveConflictsOnCreate = config.resolveConflictsOnCreate;
    this._resolveConflictsOnUpdate = config.resolveConflictsOnUpdate;
    this._serviceAccountRoleArn = config.serviceAccountRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._namespaceConfig.internalValue = config.namespaceConfig;
    this._podIdentityAssociation.internalValue = config.podIdentityAssociation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name - computed: false, optional: false, required: true
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
  }

  // addon_version - computed: true, optional: true, required: false
  private _addonVersion?: string; 
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }
  public set addonVersion(value: string) {
    this._addonVersion = value;
  }
  public resetAddonVersion() {
    this._addonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonVersionInput() {
    return this._addonVersion;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // configuration_values - computed: true, optional: true, required: false
  private _configurationValues?: string; 
  public get configurationValues() {
    return this.getStringAttribute('configuration_values');
  }
  public set configurationValues(value: string) {
    this._configurationValues = value;
  }
  public resetConfigurationValues() {
    this._configurationValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationValuesInput() {
    return this._configurationValues;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktn.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktn.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
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

  // resolve_conflicts_on_create - computed: false, optional: true, required: false
  private _resolveConflictsOnCreate?: string; 
  public get resolveConflictsOnCreate() {
    return this.getStringAttribute('resolve_conflicts_on_create');
  }
  public set resolveConflictsOnCreate(value: string) {
    this._resolveConflictsOnCreate = value;
  }
  public resetResolveConflictsOnCreate() {
    this._resolveConflictsOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveConflictsOnCreateInput() {
    return this._resolveConflictsOnCreate;
  }

  // resolve_conflicts_on_update - computed: false, optional: true, required: false
  private _resolveConflictsOnUpdate?: string; 
  public get resolveConflictsOnUpdate() {
    return this.getStringAttribute('resolve_conflicts_on_update');
  }
  public set resolveConflictsOnUpdate(value: string) {
    this._resolveConflictsOnUpdate = value;
  }
  public resetResolveConflictsOnUpdate() {
    this._resolveConflictsOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveConflictsOnUpdateInput() {
    return this._resolveConflictsOnUpdate;
  }

  // service_account_role_arn - computed: false, optional: true, required: false
  private _serviceAccountRoleArn?: string; 
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }
  public set serviceAccountRoleArn(value: string) {
    this._serviceAccountRoleArn = value;
  }
  public resetServiceAccountRoleArn() {
    this._serviceAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleArnInput() {
    return this._serviceAccountRoleArn;
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

  // namespace_config - computed: false, optional: true, required: false
  private _namespaceConfig = new EksAddonNamespaceConfigOutputReference(this, "namespace_config");
  public get namespaceConfig() {
    return this._namespaceConfig;
  }
  public putNamespaceConfig(value: EksAddonNamespaceConfig) {
    this._namespaceConfig.internalValue = value;
  }
  public resetNamespaceConfig() {
    this._namespaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceConfigInput() {
    return this._namespaceConfig.internalValue;
  }

  // pod_identity_association - computed: false, optional: true, required: false
  private _podIdentityAssociation = new EksAddonPodIdentityAssociationList(this, "pod_identity_association", true);
  public get podIdentityAssociation() {
    return this._podIdentityAssociation;
  }
  public putPodIdentityAssociation(value: EksAddonPodIdentityAssociation[] | cdktn.IResolvable) {
    this._podIdentityAssociation.internalValue = value;
  }
  public resetPodIdentityAssociation() {
    this._podIdentityAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityAssociationInput() {
    return this._podIdentityAssociation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksAddonTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksAddonTimeouts) {
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
      addon_name: cdktn.stringToTerraform(this._addonName),
      addon_version: cdktn.stringToTerraform(this._addonVersion),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      configuration_values: cdktn.stringToTerraform(this._configurationValues),
      id: cdktn.stringToTerraform(this._id),
      preserve: cdktn.booleanToTerraform(this._preserve),
      region: cdktn.stringToTerraform(this._region),
      resolve_conflicts_on_create: cdktn.stringToTerraform(this._resolveConflictsOnCreate),
      resolve_conflicts_on_update: cdktn.stringToTerraform(this._resolveConflictsOnUpdate),
      service_account_role_arn: cdktn.stringToTerraform(this._serviceAccountRoleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      namespace_config: eksAddonNamespaceConfigToTerraform(this._namespaceConfig.internalValue),
      pod_identity_association: cdktn.listMapper(eksAddonPodIdentityAssociationToTerraform, true)(this._podIdentityAssociation.internalValue),
      timeouts: eksAddonTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_name: {
        value: cdktn.stringToHclTerraform(this._addonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addon_version: {
        value: cdktn.stringToHclTerraform(this._addonVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_values: {
        value: cdktn.stringToHclTerraform(this._configurationValues),
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
      preserve: {
        value: cdktn.booleanToHclTerraform(this._preserve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_conflicts_on_create: {
        value: cdktn.stringToHclTerraform(this._resolveConflictsOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_conflicts_on_update: {
        value: cdktn.stringToHclTerraform(this._resolveConflictsOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceAccountRoleArn),
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
      namespace_config: {
        value: eksAddonNamespaceConfigToHclTerraform(this._namespaceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksAddonNamespaceConfigList",
      },
      pod_identity_association: {
        value: cdktn.listMapperHcl(eksAddonPodIdentityAssociationToHclTerraform, true)(this._podIdentityAssociation.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EksAddonPodIdentityAssociationList",
      },
      timeouts: {
        value: eksAddonTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksAddonTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
