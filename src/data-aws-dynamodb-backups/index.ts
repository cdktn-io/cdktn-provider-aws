/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsDynamodbBackupsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}
  */
  readonly backupType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}
  */
  readonly timeRangeLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}
  */
  readonly timeRangeUpperBound?: string;
}
export interface DataAwsDynamodbBackupsBackupSummaries {
}

export function dataAwsDynamodbBackupsBackupSummariesToTerraform(struct?: DataAwsDynamodbBackupsBackupSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsDynamodbBackupsBackupSummariesToHclTerraform(struct?: DataAwsDynamodbBackupsBackupSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDynamodbBackupsBackupSummariesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsDynamodbBackupsBackupSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbBackupsBackupSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_arn - computed: true, optional: false, required: false
  public get backupArn() {
    return this.getStringAttribute('backup_arn');
  }

  // backup_creation_date_time - computed: true, optional: false, required: false
  public get backupCreationDateTime() {
    return this.getStringAttribute('backup_creation_date_time');
  }

  // backup_expiry_date_time - computed: true, optional: false, required: false
  public get backupExpiryDateTime() {
    return this.getStringAttribute('backup_expiry_date_time');
  }

  // backup_name - computed: true, optional: false, required: false
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }

  // backup_size_bytes - computed: true, optional: false, required: false
  public get backupSizeBytes() {
    return this.getNumberAttribute('backup_size_bytes');
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataAwsDynamodbBackupsBackupSummariesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsDynamodbBackupsBackupSummariesOutputReference {
    return new DataAwsDynamodbBackupsBackupSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups}
*/
export class DataAwsDynamodbBackups extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDynamodbBackups to import
  * @param importFromId The id of the existing DataAwsDynamodbBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDynamodbBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dynamodb_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDynamodbBackupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsDynamodbBackupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_backups',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
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
    this._backupType = config.backupType;
    this._region = config.region;
    this._tableName = config.tableName;
    this._timeRangeLowerBound = config.timeRangeLowerBound;
    this._timeRangeUpperBound = config.timeRangeUpperBound;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_summaries - computed: true, optional: false, required: false
  private _backupSummaries = new DataAwsDynamodbBackupsBackupSummariesList(this, "backup_summaries", false);
  public get backupSummaries() {
    return this._backupSummaries;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
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

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // time_range_lower_bound - computed: false, optional: true, required: false
  private _timeRangeLowerBound?: string; 
  public get timeRangeLowerBound() {
    return this.getStringAttribute('time_range_lower_bound');
  }
  public set timeRangeLowerBound(value: string) {
    this._timeRangeLowerBound = value;
  }
  public resetTimeRangeLowerBound() {
    this._timeRangeLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeLowerBoundInput() {
    return this._timeRangeLowerBound;
  }

  // time_range_upper_bound - computed: false, optional: true, required: false
  private _timeRangeUpperBound?: string; 
  public get timeRangeUpperBound() {
    return this.getStringAttribute('time_range_upper_bound');
  }
  public set timeRangeUpperBound(value: string) {
    this._timeRangeUpperBound = value;
  }
  public resetTimeRangeUpperBound() {
    this._timeRangeUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeUpperBoundInput() {
    return this._timeRangeUpperBound;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_type: cdktn.stringToTerraform(this._backupType),
      region: cdktn.stringToTerraform(this._region),
      table_name: cdktn.stringToTerraform(this._tableName),
      time_range_lower_bound: cdktn.stringToTerraform(this._timeRangeLowerBound),
      time_range_upper_bound: cdktn.stringToTerraform(this._timeRangeUpperBound),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_type: {
        value: cdktn.stringToHclTerraform(this._backupType),
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
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_range_lower_bound: {
        value: cdktn.stringToHclTerraform(this._timeRangeLowerBound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_range_upper_bound: {
        value: cdktn.stringToHclTerraform(this._timeRangeUpperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
