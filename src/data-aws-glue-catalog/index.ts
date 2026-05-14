/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsGlueCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog#region DataAwsGlueCatalog#region}
  */
  readonly region?: string;
}
export interface DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties {
}

export function dataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesToTerraform(struct?: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesToHclTerraform(struct?: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_type - computed: true, optional: false, required: false
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }

  // data_lake_access - computed: true, optional: false, required: false
  public get dataLakeAccess() {
    return this.getBooleanAttribute('data_lake_access');
  }

  // data_transfer_role - computed: true, optional: false, required: false
  public get dataTransferRole() {
    return this.getStringAttribute('data_transfer_role');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
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

export class DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference {
    return new DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties {
}

export function dataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesToTerraform(struct?: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesToHclTerraform(struct?: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compaction - computed: true, optional: false, required: false
  private _compaction = new cdktn.StringMap(this, "compaction");
  public get compaction() {
    return this._compaction;
  }

  // orphan_file_deletion - computed: true, optional: false, required: false
  private _orphanFileDeletion = new cdktn.StringMap(this, "orphan_file_deletion");
  public get orphanFileDeletion() {
    return this._orphanFileDeletion;
  }

  // retention - computed: true, optional: false, required: false
  private _retention = new cdktn.StringMap(this, "retention");
  public get retention() {
    return this._retention;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference {
    return new DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCatalogProperties {
}

export function dataAwsGlueCatalogCatalogPropertiesToTerraform(struct?: DataAwsGlueCatalogCatalogProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCatalogPropertiesToHclTerraform(struct?: DataAwsGlueCatalogCatalogProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCatalogPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCatalogProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCatalogProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_properties - computed: true, optional: false, required: false
  private _customProperties = new cdktn.StringMap(this, "custom_properties");
  public get customProperties() {
    return this._customProperties;
  }

  // data_lake_access_properties - computed: true, optional: false, required: false
  private _dataLakeAccessProperties = new DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(this, "data_lake_access_properties", false);
  public get dataLakeAccessProperties() {
    return this._dataLakeAccessProperties;
  }

  // iceberg_optimization_properties - computed: true, optional: false, required: false
  private _icebergOptimizationProperties = new DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(this, "iceberg_optimization_properties", false);
  public get icebergOptimizationProperties() {
    return this._icebergOptimizationProperties;
  }
}

export class DataAwsGlueCatalogCatalogPropertiesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCatalogPropertiesOutputReference {
    return new DataAwsGlueCatalogCatalogPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal {
}

export function dataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalToTerraform(struct?: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalToHclTerraform(struct?: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lake_principal_identifier - computed: true, optional: false, required: false
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
}

export class DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference {
    return new DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCreateDatabaseDefaultPermissions {
}

export function dataAwsGlueCatalogCreateDatabaseDefaultPermissionsToTerraform(struct?: DataAwsGlueCatalogCreateDatabaseDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCreateDatabaseDefaultPermissionsToHclTerraform(struct?: DataAwsGlueCatalogCreateDatabaseDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCreateDatabaseDefaultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCreateDatabaseDefaultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
}

export class DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference {
    return new DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal {
}

export function dataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalToTerraform(struct?: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalToHclTerraform(struct?: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lake_principal_identifier - computed: true, optional: false, required: false
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
}

export class DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference {
    return new DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogCreateTableDefaultPermissions {
}

export function dataAwsGlueCatalogCreateTableDefaultPermissionsToTerraform(struct?: DataAwsGlueCatalogCreateTableDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogCreateTableDefaultPermissionsToHclTerraform(struct?: DataAwsGlueCatalogCreateTableDefaultPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogCreateTableDefaultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogCreateTableDefaultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
}

export class DataAwsGlueCatalogCreateTableDefaultPermissionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference {
    return new DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogFederatedCatalog {
}

export function dataAwsGlueCatalogFederatedCatalogToTerraform(struct?: DataAwsGlueCatalogFederatedCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogFederatedCatalogToHclTerraform(struct?: DataAwsGlueCatalogFederatedCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogFederatedCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogFederatedCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogFederatedCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
}

export class DataAwsGlueCatalogFederatedCatalogList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogFederatedCatalogOutputReference {
    return new DataAwsGlueCatalogFederatedCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTargetRedshiftCatalog {
}

export function dataAwsGlueCatalogTargetRedshiftCatalogToTerraform(struct?: DataAwsGlueCatalogTargetRedshiftCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlueCatalogTargetRedshiftCatalogToHclTerraform(struct?: DataAwsGlueCatalogTargetRedshiftCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueCatalogTargetRedshiftCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTargetRedshiftCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTargetRedshiftCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_arn - computed: true, optional: false, required: false
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
}

export class DataAwsGlueCatalogTargetRedshiftCatalogList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsGlueCatalogTargetRedshiftCatalogOutputReference {
    return new DataAwsGlueCatalogTargetRedshiftCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog aws_glue_catalog}
*/
export class DataAwsGlueCatalog extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsGlueCatalog to import
  * @param importFromId The id of the existing DataAwsGlueCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsGlueCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/glue_catalog aws_glue_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlueCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlueCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog',
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
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_full_table_external_data_access - computed: true, optional: false, required: false
  public get allowFullTableExternalDataAccess() {
    return this.getStringAttribute('allow_full_table_external_data_access');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // catalog_properties - computed: true, optional: false, required: false
  private _catalogProperties = new DataAwsGlueCatalogCatalogPropertiesList(this, "catalog_properties", false);
  public get catalogProperties() {
    return this._catalogProperties;
  }

  // create_database_default_permissions - computed: true, optional: false, required: false
  private _createDatabaseDefaultPermissions = new DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList(this, "create_database_default_permissions", false);
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }

  // create_table_default_permissions - computed: true, optional: false, required: false
  private _createTableDefaultPermissions = new DataAwsGlueCatalogCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // federated_catalog - computed: true, optional: false, required: false
  private _federatedCatalog = new DataAwsGlueCatalogFederatedCatalogList(this, "federated_catalog", false);
  public get federatedCatalog() {
    return this._federatedCatalog;
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

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // target_redshift_catalog - computed: true, optional: false, required: false
  private _targetRedshiftCatalog = new DataAwsGlueCatalogTargetRedshiftCatalogList(this, "target_redshift_catalog", false);
  public get targetRedshiftCatalog() {
    return this._targetRedshiftCatalog;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
