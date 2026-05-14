/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RamResourceShareConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}
  */
  readonly allowExternalPrincipals?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#id RamResourceShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#name RamResourceShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}
  */
  readonly permissionArns?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#region RamResourceShare#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#tags_all RamResourceShare#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * resource_share_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}
  */
  readonly resourceShareConfiguration?: RamResourceShareResourceShareConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#timeouts RamResourceShare#timeouts}
  */
  readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareResourceShareConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}
  */
  readonly retainSharingOnAccountLeaveOrganization?: boolean | cdktn.IResolvable;
}

export function ramResourceShareResourceShareConfigurationToTerraform(struct?: RamResourceShareResourceShareConfigurationOutputReference | RamResourceShareResourceShareConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_sharing_on_account_leave_organization: cdktn.booleanToTerraform(struct!.retainSharingOnAccountLeaveOrganization),
  }
}


export function ramResourceShareResourceShareConfigurationToHclTerraform(struct?: RamResourceShareResourceShareConfigurationOutputReference | RamResourceShareResourceShareConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_sharing_on_account_leave_organization: {
      value: cdktn.booleanToHclTerraform(struct!.retainSharingOnAccountLeaveOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RamResourceShareResourceShareConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RamResourceShareResourceShareConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainSharingOnAccountLeaveOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainSharingOnAccountLeaveOrganization = this._retainSharingOnAccountLeaveOrganization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RamResourceShareResourceShareConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainSharingOnAccountLeaveOrganization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainSharingOnAccountLeaveOrganization = value.retainSharingOnAccountLeaveOrganization;
    }
  }

  // retain_sharing_on_account_leave_organization - computed: true, optional: true, required: false
  private _retainSharingOnAccountLeaveOrganization?: boolean | cdktn.IResolvable; 
  public get retainSharingOnAccountLeaveOrganization() {
    return this.getBooleanAttribute('retain_sharing_on_account_leave_organization');
  }
  public set retainSharingOnAccountLeaveOrganization(value: boolean | cdktn.IResolvable) {
    this._retainSharingOnAccountLeaveOrganization = value;
  }
  public resetRetainSharingOnAccountLeaveOrganization() {
    this._retainSharingOnAccountLeaveOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainSharingOnAccountLeaveOrganizationInput() {
    return this._retainSharingOnAccountLeaveOrganization;
  }
}
export interface RamResourceShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#create RamResourceShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#delete RamResourceShare#delete}
  */
  readonly delete?: string;
}

export function ramResourceShareTimeoutsToTerraform(struct?: RamResourceShareTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function ramResourceShareTimeoutsToHclTerraform(struct?: RamResourceShareTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RamResourceShareTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RamResourceShareTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RamResourceShareTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share aws_ram_resource_share}
*/
export class RamResourceShare extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ram_resource_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RamResourceShare to import
  * @param importFromId The id of the existing RamResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RamResourceShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ram_resource_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ram_resource_share aws_ram_resource_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamResourceShareConfig
  */
  public constructor(scope: Construct, id: string, config: RamResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.45.0',
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
    this._allowExternalPrincipals = config.allowExternalPrincipals;
    this._id = config.id;
    this._name = config.name;
    this._permissionArns = config.permissionArns;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._resourceShareConfiguration.internalValue = config.resourceShareConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_principals - computed: false, optional: true, required: false
  private _allowExternalPrincipals?: boolean | cdktn.IResolvable; 
  public get allowExternalPrincipals() {
    return this.getBooleanAttribute('allow_external_principals');
  }
  public set allowExternalPrincipals(value: boolean | cdktn.IResolvable) {
    this._allowExternalPrincipals = value;
  }
  public resetAllowExternalPrincipals() {
    this._allowExternalPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalPrincipalsInput() {
    return this._allowExternalPrincipals;
  }

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

  // permission_arns - computed: true, optional: true, required: false
  private _permissionArns?: string[]; 
  public get permissionArns() {
    return cdktn.Fn.tolist(this.getListAttribute('permission_arns'));
  }
  public set permissionArns(value: string[]) {
    this._permissionArns = value;
  }
  public resetPermissionArns() {
    this._permissionArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionArnsInput() {
    return this._permissionArns;
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

  // resource_share_configuration - computed: false, optional: true, required: false
  private _resourceShareConfiguration = new RamResourceShareResourceShareConfigurationOutputReference(this, "resource_share_configuration");
  public get resourceShareConfiguration() {
    return this._resourceShareConfiguration;
  }
  public putResourceShareConfiguration(value: RamResourceShareResourceShareConfiguration) {
    this._resourceShareConfiguration.internalValue = value;
  }
  public resetResourceShareConfiguration() {
    this._resourceShareConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareConfigurationInput() {
    return this._resourceShareConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RamResourceShareTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RamResourceShareTimeouts) {
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
      allow_external_principals: cdktn.booleanToTerraform(this._allowExternalPrincipals),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      permission_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissionArns),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      resource_share_configuration: ramResourceShareResourceShareConfigurationToTerraform(this._resourceShareConfiguration.internalValue),
      timeouts: ramResourceShareTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_external_principals: {
        value: cdktn.booleanToHclTerraform(this._allowExternalPrincipals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      permission_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissionArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      resource_share_configuration: {
        value: ramResourceShareResourceShareConfigurationToHclTerraform(this._resourceShareConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RamResourceShareResourceShareConfigurationList",
      },
      timeouts: {
        value: ramResourceShareTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RamResourceShareTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
