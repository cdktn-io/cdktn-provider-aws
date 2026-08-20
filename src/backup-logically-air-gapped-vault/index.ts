/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupLogicallyAirGappedVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#encryption_key_arn BackupLogicallyAirGappedVault#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}
  */
  readonly maxRetentionDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}
  */
  readonly minRetentionDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#region BackupLogicallyAirGappedVault#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}
  */
  readonly timeouts?: BackupLogicallyAirGappedVaultTimeouts;
}
export interface BackupLogicallyAirGappedVaultTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}
  */
  readonly create?: string;
}

export function backupLogicallyAirGappedVaultTimeoutsToTerraform(struct?: BackupLogicallyAirGappedVaultTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function backupLogicallyAirGappedVaultTimeoutsToHclTerraform(struct?: BackupLogicallyAirGappedVaultTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupLogicallyAirGappedVaultTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupLogicallyAirGappedVaultTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupLogicallyAirGappedVaultTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault}
*/
export class BackupLogicallyAirGappedVault extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_logically_air_gapped_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupLogicallyAirGappedVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupLogicallyAirGappedVault to import
  * @param importFromId The id of the existing BackupLogicallyAirGappedVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupLogicallyAirGappedVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_logically_air_gapped_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupLogicallyAirGappedVaultConfig
  */
  public constructor(scope: Construct, id: string, config: BackupLogicallyAirGappedVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_logically_air_gapped_vault',
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
    this._encryptionKeyArn = config.encryptionKeyArn;
    this._maxRetentionDays = config.maxRetentionDays;
    this._minRetentionDays = config.minRetentionDays;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_key_arn - computed: true, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_retention_days - computed: false, optional: false, required: true
  private _maxRetentionDays?: number; 
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }
  public set maxRetentionDays(value: number) {
    this._maxRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetentionDaysInput() {
    return this._maxRetentionDays;
  }

  // min_retention_days - computed: false, optional: false, required: true
  private _minRetentionDays?: number; 
  public get minRetentionDays() {
    return this.getNumberAttribute('min_retention_days');
  }
  public set minRetentionDays(value: number) {
    this._minRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetentionDaysInput() {
    return this._minRetentionDays;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupLogicallyAirGappedVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupLogicallyAirGappedVaultTimeouts) {
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
      encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
      max_retention_days: cdktn.numberToTerraform(this._maxRetentionDays),
      min_retention_days: cdktn.numberToTerraform(this._minRetentionDays),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: backupLogicallyAirGappedVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retention_days: {
        value: cdktn.numberToHclTerraform(this._maxRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_retention_days: {
        value: cdktn.numberToHclTerraform(this._minRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: backupLogicallyAirGappedVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupLogicallyAirGappedVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
