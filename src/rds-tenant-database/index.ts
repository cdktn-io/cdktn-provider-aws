/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RdsTenantDatabaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}
  */
  readonly dbInstanceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}
  */
  readonly manageMasterUserPassword?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}
  */
  readonly masterUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}
  */
  readonly masterUserPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}
  */
  readonly masterUserPasswordWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}
  */
  readonly masterUserSecretKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}
  */
  readonly masterUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}
  */
  readonly ncharCharacterSetName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#region RdsTenantDatabase#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}
  */
  readonly tenantDbName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#timeouts RdsTenantDatabase#timeouts}
  */
  readonly timeouts?: RdsTenantDatabaseTimeouts;
}
export interface RdsTenantDatabaseMasterUserSecret {
}

export function rdsTenantDatabaseMasterUserSecretToTerraform(struct?: RdsTenantDatabaseMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function rdsTenantDatabaseMasterUserSecretToHclTerraform(struct?: RdsTenantDatabaseMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class RdsTenantDatabaseMasterUserSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RdsTenantDatabaseMasterUserSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsTenantDatabaseMasterUserSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // secret_status - computed: true, optional: false, required: false
  public get secretStatus() {
    return this.getStringAttribute('secret_status');
  }
}

export class RdsTenantDatabaseMasterUserSecretList extends cdktn.ComplexList {

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
  public get(index: number): RdsTenantDatabaseMasterUserSecretOutputReference {
    return new RdsTenantDatabaseMasterUserSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsTenantDatabaseTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#create RdsTenantDatabase#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#delete RdsTenantDatabase#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#update RdsTenantDatabase#update}
  */
  readonly update?: string;
}

export function rdsTenantDatabaseTimeoutsToTerraform(struct?: RdsTenantDatabaseTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function rdsTenantDatabaseTimeoutsToHclTerraform(struct?: RdsTenantDatabaseTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class RdsTenantDatabaseTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsTenantDatabaseTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RdsTenantDatabaseTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database aws_rds_tenant_database}
*/
export class RdsTenantDatabase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_tenant_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RdsTenantDatabase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsTenantDatabase to import
  * @param importFromId The id of the existing RdsTenantDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsTenantDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_tenant_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database aws_rds_tenant_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsTenantDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RdsTenantDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_tenant_database',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._characterSetName = config.characterSetName;
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._manageMasterUserPassword = config.manageMasterUserPassword;
    this._masterUserPassword = config.masterUserPassword;
    this._masterUserPasswordWo = config.masterUserPasswordWo;
    this._masterUserPasswordWoVersion = config.masterUserPasswordWoVersion;
    this._masterUserSecretKmsKeyId = config.masterUserSecretKmsKeyId;
    this._masterUsername = config.masterUsername;
    this._ncharCharacterSetName = config.ncharCharacterSetName;
    this._region = config.region;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._tags = config.tags;
    this._tenantDbName = config.tenantDbName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
  }

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string; 
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier;
  }

  // manage_master_user_password - computed: false, optional: true, required: false
  private _manageMasterUserPassword?: boolean | cdktn.IResolvable; 
  public get manageMasterUserPassword() {
    return this.getBooleanAttribute('manage_master_user_password');
  }
  public set manageMasterUserPassword(value: boolean | cdktn.IResolvable) {
    this._manageMasterUserPassword = value;
  }
  public resetManageMasterUserPassword() {
    this._manageMasterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMasterUserPasswordInput() {
    return this._manageMasterUserPassword;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword?: string; 
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
  public set masterUserPassword(value: string) {
    this._masterUserPassword = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword;
  }

  // master_user_password_wo - computed: false, optional: true, required: false
  private _masterUserPasswordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get masterUserPasswordWo() {
    return this.getStringAttribute('master_user_password_wo');
  }
  public set masterUserPasswordWo(value: string) {
    this._masterUserPasswordWo = value;
  }
  public resetMasterUserPasswordWo() {
    this._masterUserPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordWoInput() {
    return this._masterUserPasswordWo;
  }

  // master_user_password_wo_version - computed: false, optional: true, required: false
  private _masterUserPasswordWoVersion?: number; 
  public get masterUserPasswordWoVersion() {
    return this.getNumberAttribute('master_user_password_wo_version');
  }
  public set masterUserPasswordWoVersion(value: number) {
    this._masterUserPasswordWoVersion = value;
  }
  public resetMasterUserPasswordWoVersion() {
    this._masterUserPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordWoVersionInput() {
    return this._masterUserPasswordWoVersion;
  }

  // master_user_secret - computed: true, optional: false, required: false
  private _masterUserSecret = new RdsTenantDatabaseMasterUserSecretList(this, "master_user_secret", false);
  public get masterUserSecret() {
    return this._masterUserSecret;
  }

  // master_user_secret_kms_key_id - computed: false, optional: true, required: false
  private _masterUserSecretKmsKeyId?: string; 
  public get masterUserSecretKmsKeyId() {
    return this.getStringAttribute('master_user_secret_kms_key_id');
  }
  public set masterUserSecretKmsKeyId(value: string) {
    this._masterUserSecretKmsKeyId = value;
  }
  public resetMasterUserSecretKmsKeyId() {
    this._masterUserSecretKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserSecretKmsKeyIdInput() {
    return this._masterUserSecretKmsKeyId;
  }

  // master_username - computed: false, optional: false, required: true
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
  }

  // nchar_character_set_name - computed: true, optional: true, required: false
  private _ncharCharacterSetName?: string; 
  public get ncharCharacterSetName() {
    return this.getStringAttribute('nchar_character_set_name');
  }
  public set ncharCharacterSetName(value: string) {
    this._ncharCharacterSetName = value;
  }
  public resetNcharCharacterSetName() {
    this._ncharCharacterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharCharacterSetNameInput() {
    return this._ncharCharacterSetName;
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

  // skip_final_snapshot - computed: true, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktn.IResolvable; 
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktn.IResolvable) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot;
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

  // tenant_database_resource_id - computed: true, optional: false, required: false
  public get tenantDatabaseResourceId() {
    return this.getStringAttribute('tenant_database_resource_id');
  }

  // tenant_db_name - computed: false, optional: false, required: true
  private _tenantDbName?: string; 
  public get tenantDbName() {
    return this.getStringAttribute('tenant_db_name');
  }
  public set tenantDbName(value: string) {
    this._tenantDbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDbNameInput() {
    return this._tenantDbName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsTenantDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsTenantDatabaseTimeouts) {
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
      character_set_name: cdktn.stringToTerraform(this._characterSetName),
      db_instance_identifier: cdktn.stringToTerraform(this._dbInstanceIdentifier),
      final_snapshot_identifier: cdktn.stringToTerraform(this._finalSnapshotIdentifier),
      manage_master_user_password: cdktn.booleanToTerraform(this._manageMasterUserPassword),
      master_user_password: cdktn.stringToTerraform(this._masterUserPassword),
      master_user_password_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._masterUserPasswordWo)),
      master_user_password_wo_version: cdktn.numberToTerraform(this._masterUserPasswordWoVersion),
      master_user_secret_kms_key_id: cdktn.stringToTerraform(this._masterUserSecretKmsKeyId),
      master_username: cdktn.stringToTerraform(this._masterUsername),
      nchar_character_set_name: cdktn.stringToTerraform(this._ncharCharacterSetName),
      region: cdktn.stringToTerraform(this._region),
      skip_final_snapshot: cdktn.booleanToTerraform(this._skipFinalSnapshot),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tenant_db_name: cdktn.stringToTerraform(this._tenantDbName),
      timeouts: rdsTenantDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set_name: {
        value: cdktn.stringToHclTerraform(this._characterSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_identifier: {
        value: cdktn.stringToHclTerraform(this._dbInstanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_snapshot_identifier: {
        value: cdktn.stringToHclTerraform(this._finalSnapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_master_user_password: {
        value: cdktn.booleanToHclTerraform(this._manageMasterUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_user_password: {
        value: cdktn.stringToHclTerraform(this._masterUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_user_password_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._masterUserPasswordWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_user_password_wo_version: {
        value: cdktn.numberToHclTerraform(this._masterUserPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_user_secret_kms_key_id: {
        value: cdktn.stringToHclTerraform(this._masterUserSecretKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_username: {
        value: cdktn.stringToHclTerraform(this._masterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nchar_character_set_name: {
        value: cdktn.stringToHclTerraform(this._ncharCharacterSetName),
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
      skip_final_snapshot: {
        value: cdktn.booleanToHclTerraform(this._skipFinalSnapshot),
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
      tenant_db_name: {
        value: cdktn.stringToHclTerraform(this._tenantDbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: rdsTenantDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsTenantDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
