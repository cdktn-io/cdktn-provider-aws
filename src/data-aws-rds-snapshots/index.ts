/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsRdsSnapshotsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}
  */
  readonly dbInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}
  */
  readonly dbSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}
  */
  readonly includePublic?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}
  */
  readonly includeShared?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#region DataAwsRdsSnapshots#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}
  */
  readonly snapshotType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#filter DataAwsRdsSnapshots#filter}
  */
  readonly filter?: DataAwsRdsSnapshotsFilter[] | cdktn.IResolvable;
}
export interface DataAwsRdsSnapshotsSnapshotsTagListStruct {
}

export function dataAwsRdsSnapshotsSnapshotsTagListStructToTerraform(struct?: DataAwsRdsSnapshotsSnapshotsTagListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsRdsSnapshotsSnapshotsTagListStructToHclTerraform(struct?: DataAwsRdsSnapshotsSnapshotsTagListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsRdsSnapshotsSnapshotsTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRdsSnapshotsSnapshotsTagListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsRdsSnapshotsSnapshotsTagListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference {
    return new DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRdsSnapshotsSnapshots {
}

export function dataAwsRdsSnapshotsSnapshotsToTerraform(struct?: DataAwsRdsSnapshotsSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsRdsSnapshotsSnapshotsToHclTerraform(struct?: DataAwsRdsSnapshotsSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRdsSnapshotsSnapshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsRdsSnapshotsSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRdsSnapshotsSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // db_instance_identifier - computed: true, optional: false, required: false
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }

  // db_snapshot_arn - computed: true, optional: false, required: false
  public get dbSnapshotArn() {
    return this.getStringAttribute('db_snapshot_arn');
  }

  // db_snapshot_identifier - computed: true, optional: false, required: false
  public get dbSnapshotIdentifier() {
    return this.getStringAttribute('db_snapshot_identifier');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // option_group_name - computed: true, optional: false, required: false
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }

  // original_snapshot_create_time - computed: true, optional: false, required: false
  public get originalSnapshotCreateTime() {
    return this.getStringAttribute('original_snapshot_create_time');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_create_time - computed: true, optional: false, required: false
  public get snapshotCreateTime() {
    return this.getStringAttribute('snapshot_create_time');
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }

  // source_db_snapshot_identifier - computed: true, optional: false, required: false
  public get sourceDbSnapshotIdentifier() {
    return this.getStringAttribute('source_db_snapshot_identifier');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataAwsRdsSnapshotsSnapshotsTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAwsRdsSnapshotsSnapshotsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsRdsSnapshotsSnapshotsOutputReference {
    return new DataAwsRdsSnapshotsSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRdsSnapshotsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}
  */
  readonly values: string[];
}

export function dataAwsRdsSnapshotsFilterToTerraform(struct?: DataAwsRdsSnapshotsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsRdsSnapshotsFilterToHclTerraform(struct?: DataAwsRdsSnapshotsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsRdsSnapshotsFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsRdsSnapshotsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRdsSnapshotsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsRdsSnapshotsFilterList extends cdktn.ComplexList {
  public internalValue? : DataAwsRdsSnapshotsFilter[] | cdktn.IResolvable

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
  public get(index: number): DataAwsRdsSnapshotsFilterOutputReference {
    return new DataAwsRdsSnapshotsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots aws_rds_snapshots}
*/
export class DataAwsRdsSnapshots extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_snapshots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsSnapshots to import
  * @param importFromId The id of the existing DataAwsRdsSnapshots that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsSnapshots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_snapshots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/rds_snapshots aws_rds_snapshots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsSnapshotsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsSnapshotsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_snapshots',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
    this._includePublic = config.includePublic;
    this._includeShared = config.includeShared;
    this._region = config.region;
    this._snapshotType = config.snapshotType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_identifier - computed: false, optional: true, required: false
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  public resetDbInstanceIdentifier() {
    this._dbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // db_snapshot_identifier - computed: false, optional: true, required: false
  private _dbSnapshotIdentifier?: string; 
  public get dbSnapshotIdentifier() {
    return this.getStringAttribute('db_snapshot_identifier');
  }
  public set dbSnapshotIdentifier(value: string) {
    this._dbSnapshotIdentifier = value;
  }
  public resetDbSnapshotIdentifier() {
    this._dbSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSnapshotIdentifierInput() {
    return this._dbSnapshotIdentifier;
  }

  // include_public - computed: false, optional: true, required: false
  private _includePublic?: boolean | cdktn.IResolvable; 
  public get includePublic() {
    return this.getBooleanAttribute('include_public');
  }
  public set includePublic(value: boolean | cdktn.IResolvable) {
    this._includePublic = value;
  }
  public resetIncludePublic() {
    this._includePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePublicInput() {
    return this._includePublic;
  }

  // include_shared - computed: false, optional: true, required: false
  private _includeShared?: boolean | cdktn.IResolvable; 
  public get includeShared() {
    return this.getBooleanAttribute('include_shared');
  }
  public set includeShared(value: boolean | cdktn.IResolvable) {
    this._includeShared = value;
  }
  public resetIncludeShared() {
    this._includeShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSharedInput() {
    return this._includeShared;
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

  // snapshot_type - computed: false, optional: true, required: false
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataAwsRdsSnapshotsSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsRdsSnapshotsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsRdsSnapshotsFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: cdktn.stringToTerraform(this._dbInstanceIdentifier),
      db_snapshot_identifier: cdktn.stringToTerraform(this._dbSnapshotIdentifier),
      include_public: cdktn.booleanToTerraform(this._includePublic),
      include_shared: cdktn.booleanToTerraform(this._includeShared),
      region: cdktn.stringToTerraform(this._region),
      snapshot_type: cdktn.stringToTerraform(this._snapshotType),
      filter: cdktn.listMapper(dataAwsRdsSnapshotsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_identifier: {
        value: cdktn.stringToHclTerraform(this._dbInstanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_snapshot_identifier: {
        value: cdktn.stringToHclTerraform(this._dbSnapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_public: {
        value: cdktn.booleanToHclTerraform(this._includePublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_shared: {
        value: cdktn.booleanToHclTerraform(this._includeShared),
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
      snapshot_type: {
        value: cdktn.stringToHclTerraform(this._snapshotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktn.listMapperHcl(dataAwsRdsSnapshotsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsRdsSnapshotsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
