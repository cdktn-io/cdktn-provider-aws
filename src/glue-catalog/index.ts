/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}
  */
  readonly allowFullTableExternalDataAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#description GlueCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#name GlueCatalog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}
  */
  readonly overwriteChildResourcePermissionsWithDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#region GlueCatalog#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#tags GlueCatalog#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * catalog_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}
  */
  readonly catalogProperties?: GlueCatalogCatalogProperties[] | cdktn.IResolvable;
  /**
  * create_database_default_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}
  */
  readonly createDatabaseDefaultPermissions?: GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable;
  /**
  * create_table_default_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}
  */
  readonly createTableDefaultPermissions?: GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable;
  /**
  * federated_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}
  */
  readonly federatedCatalog?: GlueCatalogFederatedCatalog[] | cdktn.IResolvable;
  /**
  * target_redshift_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}
  */
  readonly targetRedshiftCatalog?: GlueCatalogTargetRedshiftCatalog[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#timeouts GlueCatalog#timeouts}
  */
  readonly timeouts?: GlueCatalogTimeouts;
}
export interface GlueCatalogCatalogPropertiesDataLakeAccessProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}
  */
  readonly dataLakeAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}
  */
  readonly dataTransferRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}
  */
  readonly kmsKey?: string;
}

export function glueCatalogCatalogPropertiesDataLakeAccessPropertiesToTerraform(struct?: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_type: cdktn.stringToTerraform(struct!.catalogType),
    data_lake_access: cdktn.booleanToTerraform(struct!.dataLakeAccess),
    data_transfer_role: cdktn.stringToTerraform(struct!.dataTransferRole),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function glueCatalogCatalogPropertiesDataLakeAccessPropertiesToHclTerraform(struct?: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_type: {
      value: cdktn.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lake_access: {
      value: cdktn.booleanToHclTerraform(struct!.dataLakeAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_transfer_role: {
      value: cdktn.stringToHclTerraform(struct!.dataTransferRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._dataLakeAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeAccess = this._dataLakeAccess;
    }
    if (this._dataTransferRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferRole = this._dataTransferRole;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogType = undefined;
      this._dataLakeAccess = undefined;
      this._dataTransferRole = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogType = value.catalogType;
      this._dataLakeAccess = value.dataLakeAccess;
      this._dataTransferRole = value.dataTransferRole;
      this._kmsKey = value.kmsKey;
    }
  }

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // data_lake_access - computed: true, optional: true, required: false
  private _dataLakeAccess?: boolean | cdktn.IResolvable; 
  public get dataLakeAccess() {
    return this.getBooleanAttribute('data_lake_access');
  }
  public set dataLakeAccess(value: boolean | cdktn.IResolvable) {
    this._dataLakeAccess = value;
  }
  public resetDataLakeAccess() {
    this._dataLakeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeAccessInput() {
    return this._dataLakeAccess;
  }

  // data_transfer_role - computed: true, optional: true, required: false
  private _dataTransferRole?: string; 
  public get dataTransferRole() {
    return this.getStringAttribute('data_transfer_role');
  }
  public set dataTransferRole(value: string) {
    this._dataTransferRole = value;
  }
  public resetDataTransferRole() {
    this._dataTransferRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferRoleInput() {
    return this._dataTransferRole;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // managed_workgroup_name - computed: true, optional: false, required: false
  public get managedWorkgroupName() {
    return this.getStringAttribute('managed_workgroup_name');
  }

  // managed_workgroup_status - computed: true, optional: false, required: false
  public get managedWorkgroupStatus() {
    return this.getStringAttribute('managed_workgroup_status');
  }

  // redshift_database_name - computed: true, optional: false, required: false
  public get redshiftDatabaseName() {
    return this.getStringAttribute('redshift_database_name');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCatalogPropertiesDataLakeAccessProperties[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference {
    return new GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCatalogPropertiesIcebergOptimizationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#compaction GlueCatalog#compaction}
  */
  readonly compaction?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#orphan_file_deletion GlueCatalog#orphan_file_deletion}
  */
  readonly orphanFileDeletion?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#retention GlueCatalog#retention}
  */
  readonly retention?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}
  */
  readonly roleArn?: string;
}

export function glueCatalogCatalogPropertiesIcebergOptimizationPropertiesToTerraform(struct?: GlueCatalogCatalogPropertiesIcebergOptimizationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compaction: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.compaction),
    orphan_file_deletion: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.orphanFileDeletion),
    retention: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.retention),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function glueCatalogCatalogPropertiesIcebergOptimizationPropertiesToHclTerraform(struct?: GlueCatalogCatalogPropertiesIcebergOptimizationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compaction: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.compaction),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    orphan_file_deletion: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.orphanFileDeletion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retention: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.retention),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCatalogPropertiesIcebergOptimizationProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.compaction = this._compaction;
    }
    if (this._orphanFileDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileDeletion = this._orphanFileDeletion;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCatalogPropertiesIcebergOptimizationProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compaction = undefined;
      this._orphanFileDeletion = undefined;
      this._retention = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compaction = value.compaction;
      this._orphanFileDeletion = value.orphanFileDeletion;
      this._retention = value.retention;
      this._roleArn = value.roleArn;
    }
  }

  // compaction - computed: false, optional: true, required: false
  private _compaction?: { [key: string]: string }; 
  public get compaction() {
    return this.getStringMapAttribute('compaction');
  }
  public set compaction(value: { [key: string]: string }) {
    this._compaction = value;
  }
  public resetCompaction() {
    this._compaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionInput() {
    return this._compaction;
  }

  // orphan_file_deletion - computed: false, optional: true, required: false
  private _orphanFileDeletion?: { [key: string]: string }; 
  public get orphanFileDeletion() {
    return this.getStringMapAttribute('orphan_file_deletion');
  }
  public set orphanFileDeletion(value: { [key: string]: string }) {
    this._orphanFileDeletion = value;
  }
  public resetOrphanFileDeletion() {
    this._orphanFileDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileDeletionInput() {
    return this._orphanFileDeletion;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: { [key: string]: string }; 
  public get retention() {
    return this.getStringMapAttribute('retention');
  }
  public set retention(value: { [key: string]: string }) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCatalogPropertiesIcebergOptimizationProperties[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference {
    return new GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCatalogProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#custom_properties GlueCatalog#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * data_lake_access_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}
  */
  readonly dataLakeAccessProperties?: GlueCatalogCatalogPropertiesDataLakeAccessProperties[] | cdktn.IResolvable;
  /**
  * iceberg_optimization_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#iceberg_optimization_properties GlueCatalog#iceberg_optimization_properties}
  */
  readonly icebergOptimizationProperties?: GlueCatalogCatalogPropertiesIcebergOptimizationProperties[] | cdktn.IResolvable;
}

export function glueCatalogCatalogPropertiesToTerraform(struct?: GlueCatalogCatalogProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customProperties),
    data_lake_access_properties: cdktn.listMapper(glueCatalogCatalogPropertiesDataLakeAccessPropertiesToTerraform, true)(struct!.dataLakeAccessProperties),
    iceberg_optimization_properties: cdktn.listMapper(glueCatalogCatalogPropertiesIcebergOptimizationPropertiesToTerraform, true)(struct!.icebergOptimizationProperties),
  }
}


export function glueCatalogCatalogPropertiesToHclTerraform(struct?: GlueCatalogCatalogProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_lake_access_properties: {
      value: cdktn.listMapperHcl(glueCatalogCatalogPropertiesDataLakeAccessPropertiesToHclTerraform, true)(struct!.dataLakeAccessProperties),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList",
    },
    iceberg_optimization_properties: {
      value: cdktn.listMapperHcl(glueCatalogCatalogPropertiesIcebergOptimizationPropertiesToHclTerraform, true)(struct!.icebergOptimizationProperties),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCatalogPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCatalogProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._dataLakeAccessProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeAccessProperties = this._dataLakeAccessProperties?.internalValue;
    }
    if (this._icebergOptimizationProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergOptimizationProperties = this._icebergOptimizationProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCatalogProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProperties = undefined;
      this._dataLakeAccessProperties.internalValue = undefined;
      this._icebergOptimizationProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customProperties = value.customProperties;
      this._dataLakeAccessProperties.internalValue = value.dataLakeAccessProperties;
      this._icebergOptimizationProperties.internalValue = value.icebergOptimizationProperties;
    }
  }

  // custom_properties - computed: true, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // data_lake_access_properties - computed: false, optional: true, required: false
  private _dataLakeAccessProperties = new GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(this, "data_lake_access_properties", false);
  public get dataLakeAccessProperties() {
    return this._dataLakeAccessProperties;
  }
  public putDataLakeAccessProperties(value: GlueCatalogCatalogPropertiesDataLakeAccessProperties[] | cdktn.IResolvable) {
    this._dataLakeAccessProperties.internalValue = value;
  }
  public resetDataLakeAccessProperties() {
    this._dataLakeAccessProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeAccessPropertiesInput() {
    return this._dataLakeAccessProperties.internalValue;
  }

  // iceberg_optimization_properties - computed: false, optional: true, required: false
  private _icebergOptimizationProperties = new GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(this, "iceberg_optimization_properties", false);
  public get icebergOptimizationProperties() {
    return this._icebergOptimizationProperties;
  }
  public putIcebergOptimizationProperties(value: GlueCatalogCatalogPropertiesIcebergOptimizationProperties[] | cdktn.IResolvable) {
    this._icebergOptimizationProperties.internalValue = value;
  }
  public resetIcebergOptimizationProperties() {
    this._icebergOptimizationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergOptimizationPropertiesInput() {
    return this._icebergOptimizationProperties.internalValue;
  }
}

export class GlueCatalogCatalogPropertiesList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCatalogProperties[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCatalogPropertiesOutputReference {
    return new GlueCatalogCatalogPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCreateDatabaseDefaultPermissionsPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier?: string;
}

export function glueCatalogCreateDatabaseDefaultPermissionsPrincipalToTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function glueCatalogCreateDatabaseDefaultPermissionsPrincipalToHclTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_principal_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: false, optional: true, required: false
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  public resetDataLakePrincipalIdentifier() {
    this._dataLakePrincipalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}

export class GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference {
    return new GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCreateDatabaseDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}
  */
  readonly permissions?: string[];
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#principal GlueCatalog#principal}
  */
  readonly principal?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[] | cdktn.IResolvable;
}

export function glueCatalogCreateDatabaseDefaultPermissionsToTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
    principal: cdktn.listMapper(glueCatalogCreateDatabaseDefaultPermissionsPrincipalToTerraform, true)(struct!.principal),
  }
}


export function glueCatalogCreateDatabaseDefaultPermissionsToHclTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.listMapperHcl(glueCatalogCreateDatabaseDefaultPermissionsPrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateDatabaseDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal.internalValue = value.principal;
    }
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[] | cdktn.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GlueCatalogCreateDatabaseDefaultPermissionsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateDatabaseDefaultPermissionsOutputReference {
    return new GlueCatalogCreateDatabaseDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCreateTableDefaultPermissionsPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier?: string;
}

export function glueCatalogCreateTableDefaultPermissionsPrincipalToTerraform(struct?: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function glueCatalogCreateTableDefaultPermissionsPrincipalToHclTerraform(struct?: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_principal_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: false, optional: true, required: false
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  public resetDataLakePrincipalIdentifier() {
    this._dataLakePrincipalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}

export class GlueCatalogCreateTableDefaultPermissionsPrincipalList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateTableDefaultPermissionsPrincipal[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference {
    return new GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCreateTableDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}
  */
  readonly permissions?: string[];
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#principal GlueCatalog#principal}
  */
  readonly principal?: GlueCatalogCreateTableDefaultPermissionsPrincipal[] | cdktn.IResolvable;
}

export function glueCatalogCreateTableDefaultPermissionsToTerraform(struct?: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
    principal: cdktn.listMapper(glueCatalogCreateTableDefaultPermissionsPrincipalToTerraform, true)(struct!.principal),
  }
}


export function glueCatalogCreateTableDefaultPermissionsToHclTerraform(struct?: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.listMapperHcl(glueCatalogCreateTableDefaultPermissionsPrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogCreateTableDefaultPermissionsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateTableDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal.internalValue = value.principal;
    }
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GlueCatalogCreateTableDefaultPermissionsPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GlueCatalogCreateTableDefaultPermissionsPrincipal[] | cdktn.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GlueCatalogCreateTableDefaultPermissionsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateTableDefaultPermissionsOutputReference {
    return new GlueCatalogCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogFederatedCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}
  */
  readonly identifier?: string;
}

export function glueCatalogFederatedCatalogToTerraform(struct?: GlueCatalogFederatedCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    connection_type: cdktn.stringToTerraform(struct!.connectionType),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function glueCatalogFederatedCatalogToHclTerraform(struct?: GlueCatalogFederatedCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktn.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogFederatedCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogFederatedCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogFederatedCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._connectionType = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._connectionType = value.connectionType;
      this._identifier = value.identifier;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class GlueCatalogFederatedCatalogList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogFederatedCatalog[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogFederatedCatalogOutputReference {
    return new GlueCatalogFederatedCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTargetRedshiftCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}
  */
  readonly catalogArn: string;
}

export function glueCatalogTargetRedshiftCatalogToTerraform(struct?: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_arn: cdktn.stringToTerraform(struct!.catalogArn),
  }
}


export function glueCatalogTargetRedshiftCatalogToHclTerraform(struct?: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_arn: {
      value: cdktn.stringToHclTerraform(struct!.catalogArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTargetRedshiftCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogArn = this._catalogArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogArn = value.catalogArn;
    }
  }

  // catalog_arn - computed: false, optional: false, required: true
  private _catalogArn?: string; 
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
  public set catalogArn(value: string) {
    this._catalogArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogArnInput() {
    return this._catalogArn;
  }
}

export class GlueCatalogTargetRedshiftCatalogList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTargetRedshiftCatalog[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTargetRedshiftCatalogOutputReference {
    return new GlueCatalogTargetRedshiftCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#create GlueCatalog#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#delete GlueCatalog#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#update GlueCatalog#update}
  */
  readonly update?: string;
}

export function glueCatalogTimeoutsToTerraform(struct?: GlueCatalogTimeouts | cdktn.IResolvable): any {
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


export function glueCatalogTimeoutsToHclTerraform(struct?: GlueCatalogTimeouts | cdktn.IResolvable): any {
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

export class GlueCatalogTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GlueCatalogTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog aws_glue_catalog}
*/
export class GlueCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCatalog to import
  * @param importFromId The id of the existing GlueCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_catalog aws_glue_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._allowFullTableExternalDataAccess = config.allowFullTableExternalDataAccess;
    this._description = config.description;
    this._name = config.name;
    this._overwriteChildResourcePermissionsWithDefault = config.overwriteChildResourcePermissionsWithDefault;
    this._parameters = config.parameters;
    this._region = config.region;
    this._tags = config.tags;
    this._catalogProperties.internalValue = config.catalogProperties;
    this._createDatabaseDefaultPermissions.internalValue = config.createDatabaseDefaultPermissions;
    this._createTableDefaultPermissions.internalValue = config.createTableDefaultPermissions;
    this._federatedCatalog.internalValue = config.federatedCatalog;
    this._targetRedshiftCatalog.internalValue = config.targetRedshiftCatalog;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_full_table_external_data_access - computed: true, optional: true, required: false
  private _allowFullTableExternalDataAccess?: string; 
  public get allowFullTableExternalDataAccess() {
    return this.getStringAttribute('allow_full_table_external_data_access');
  }
  public set allowFullTableExternalDataAccess(value: string) {
    this._allowFullTableExternalDataAccess = value;
  }
  public resetAllowFullTableExternalDataAccess() {
    this._allowFullTableExternalDataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFullTableExternalDataAccessInput() {
    return this._allowFullTableExternalDataAccess;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // overwrite_child_resource_permissions_with_default - computed: false, optional: true, required: false
  private _overwriteChildResourcePermissionsWithDefault?: string; 
  public get overwriteChildResourcePermissionsWithDefault() {
    return this.getStringAttribute('overwrite_child_resource_permissions_with_default');
  }
  public set overwriteChildResourcePermissionsWithDefault(value: string) {
    this._overwriteChildResourcePermissionsWithDefault = value;
  }
  public resetOverwriteChildResourcePermissionsWithDefault() {
    this._overwriteChildResourcePermissionsWithDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteChildResourcePermissionsWithDefaultInput() {
    return this._overwriteChildResourcePermissionsWithDefault;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // catalog_properties - computed: false, optional: true, required: false
  private _catalogProperties = new GlueCatalogCatalogPropertiesList(this, "catalog_properties", false);
  public get catalogProperties() {
    return this._catalogProperties;
  }
  public putCatalogProperties(value: GlueCatalogCatalogProperties[] | cdktn.IResolvable) {
    this._catalogProperties.internalValue = value;
  }
  public resetCatalogProperties() {
    this._catalogProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogPropertiesInput() {
    return this._catalogProperties.internalValue;
  }

  // create_database_default_permissions - computed: false, optional: true, required: false
  private _createDatabaseDefaultPermissions = new GlueCatalogCreateDatabaseDefaultPermissionsList(this, "create_database_default_permissions", false);
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }
  public putCreateDatabaseDefaultPermissions(value: GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable) {
    this._createDatabaseDefaultPermissions.internalValue = value;
  }
  public resetCreateDatabaseDefaultPermissions() {
    this._createDatabaseDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseDefaultPermissionsInput() {
    return this._createDatabaseDefaultPermissions.internalValue;
  }

  // create_table_default_permissions - computed: false, optional: true, required: false
  private _createTableDefaultPermissions = new GlueCatalogCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }
  public putCreateTableDefaultPermissions(value: GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable) {
    this._createTableDefaultPermissions.internalValue = value;
  }
  public resetCreateTableDefaultPermissions() {
    this._createTableDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionsInput() {
    return this._createTableDefaultPermissions.internalValue;
  }

  // federated_catalog - computed: false, optional: true, required: false
  private _federatedCatalog = new GlueCatalogFederatedCatalogList(this, "federated_catalog", false);
  public get federatedCatalog() {
    return this._federatedCatalog;
  }
  public putFederatedCatalog(value: GlueCatalogFederatedCatalog[] | cdktn.IResolvable) {
    this._federatedCatalog.internalValue = value;
  }
  public resetFederatedCatalog() {
    this._federatedCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedCatalogInput() {
    return this._federatedCatalog.internalValue;
  }

  // target_redshift_catalog - computed: false, optional: true, required: false
  private _targetRedshiftCatalog = new GlueCatalogTargetRedshiftCatalogList(this, "target_redshift_catalog", false);
  public get targetRedshiftCatalog() {
    return this._targetRedshiftCatalog;
  }
  public putTargetRedshiftCatalog(value: GlueCatalogTargetRedshiftCatalog[] | cdktn.IResolvable) {
    this._targetRedshiftCatalog.internalValue = value;
  }
  public resetTargetRedshiftCatalog() {
    this._targetRedshiftCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRedshiftCatalogInput() {
    return this._targetRedshiftCatalog.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlueCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlueCatalogTimeouts) {
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
      allow_full_table_external_data_access: cdktn.stringToTerraform(this._allowFullTableExternalDataAccess),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      overwrite_child_resource_permissions_with_default: cdktn.stringToTerraform(this._overwriteChildResourcePermissionsWithDefault),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      catalog_properties: cdktn.listMapper(glueCatalogCatalogPropertiesToTerraform, true)(this._catalogProperties.internalValue),
      create_database_default_permissions: cdktn.listMapper(glueCatalogCreateDatabaseDefaultPermissionsToTerraform, true)(this._createDatabaseDefaultPermissions.internalValue),
      create_table_default_permissions: cdktn.listMapper(glueCatalogCreateTableDefaultPermissionsToTerraform, true)(this._createTableDefaultPermissions.internalValue),
      federated_catalog: cdktn.listMapper(glueCatalogFederatedCatalogToTerraform, true)(this._federatedCatalog.internalValue),
      target_redshift_catalog: cdktn.listMapper(glueCatalogTargetRedshiftCatalogToTerraform, true)(this._targetRedshiftCatalog.internalValue),
      timeouts: glueCatalogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_full_table_external_data_access: {
        value: cdktn.stringToHclTerraform(this._allowFullTableExternalDataAccess),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_child_resource_permissions_with_default: {
        value: cdktn.stringToHclTerraform(this._overwriteChildResourcePermissionsWithDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      catalog_properties: {
        value: cdktn.listMapperHcl(glueCatalogCatalogPropertiesToHclTerraform, true)(this._catalogProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogCatalogPropertiesList",
      },
      create_database_default_permissions: {
        value: cdktn.listMapperHcl(glueCatalogCreateDatabaseDefaultPermissionsToHclTerraform, true)(this._createDatabaseDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogCreateDatabaseDefaultPermissionsList",
      },
      create_table_default_permissions: {
        value: cdktn.listMapperHcl(glueCatalogCreateTableDefaultPermissionsToHclTerraform, true)(this._createTableDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogCreateTableDefaultPermissionsList",
      },
      federated_catalog: {
        value: cdktn.listMapperHcl(glueCatalogFederatedCatalogToHclTerraform, true)(this._federatedCatalog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogFederatedCatalogList",
      },
      target_redshift_catalog: {
        value: cdktn.listMapperHcl(glueCatalogTargetRedshiftCatalogToHclTerraform, true)(this._targetRedshiftCatalog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTargetRedshiftCatalogList",
      },
      timeouts: {
        value: glueCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
