/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DocdbelasticClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}
  */
  readonly adminUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}
  */
  readonly adminUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#backup_retention_period DocdbelasticCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#preferred_backup_window DocdbelasticCluster#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#region DocdbelasticCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}
  */
  readonly shardCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}
  */
  readonly shardCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#timeouts DocdbelasticCluster#timeouts}
  */
  readonly timeouts?: DocdbelasticClusterTimeouts;
}
export interface DocdbelasticClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#create DocdbelasticCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#delete DocdbelasticCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#update DocdbelasticCluster#update}
  */
  readonly update?: string;
}

export function docdbelasticClusterTimeoutsToTerraform(struct?: DocdbelasticClusterTimeouts | cdktn.IResolvable): any {
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


export function docdbelasticClusterTimeoutsToHclTerraform(struct?: DocdbelasticClusterTimeouts | cdktn.IResolvable): any {
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

export class DocdbelasticClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DocdbelasticClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DocdbelasticClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster aws_docdbelastic_cluster}
*/
export class DocdbelasticCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_docdbelastic_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DocdbelasticCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocdbelasticCluster to import
  * @param importFromId The id of the existing DocdbelasticCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocdbelasticCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_docdbelastic_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/docdbelastic_cluster aws_docdbelastic_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocdbelasticClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DocdbelasticClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdbelastic_cluster',
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
    this._adminUserName = config.adminUserName;
    this._adminUserPassword = config.adminUserPassword;
    this._authType = config.authType;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._region = config.region;
    this._shardCapacity = config.shardCapacity;
    this._shardCount = config.shardCount;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_user_name - computed: false, optional: false, required: true
  private _adminUserName?: string; 
  public get adminUserName() {
    return this.getStringAttribute('admin_user_name');
  }
  public set adminUserName(value: string) {
    this._adminUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserNameInput() {
    return this._adminUserName;
  }

  // admin_user_password - computed: false, optional: false, required: true
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string; 
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
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

  // shard_capacity - computed: false, optional: false, required: true
  private _shardCapacity?: number; 
  public get shardCapacity() {
    return this.getNumberAttribute('shard_capacity');
  }
  public set shardCapacity(value: number) {
    this._shardCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCapacityInput() {
    return this._shardCapacity;
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DocdbelasticClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DocdbelasticClusterTimeouts) {
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
      admin_user_name: cdktn.stringToTerraform(this._adminUserName),
      admin_user_password: cdktn.stringToTerraform(this._adminUserPassword),
      auth_type: cdktn.stringToTerraform(this._authType),
      backup_retention_period: cdktn.numberToTerraform(this._backupRetentionPeriod),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
      region: cdktn.stringToTerraform(this._region),
      shard_capacity: cdktn.numberToTerraform(this._shardCapacity),
      shard_count: cdktn.numberToTerraform(this._shardCount),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
      timeouts: docdbelasticClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_user_name: {
        value: cdktn.stringToHclTerraform(this._adminUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user_password: {
        value: cdktn.stringToHclTerraform(this._adminUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktn.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period: {
        value: cdktn.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      preferred_backup_window: {
        value: cdktn.stringToHclTerraform(this._preferredBackupWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_maintenance_window: {
        value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
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
      shard_capacity: {
        value: cdktn.numberToHclTerraform(this._shardCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_count: {
        value: cdktn.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
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
      vpc_security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: docdbelasticClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DocdbelasticClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
