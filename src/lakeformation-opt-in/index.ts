/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LakeformationOptInConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#region LakeformationOptIn#region}
  */
  readonly region?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}
  */
  readonly condition?: LakeformationOptInCondition[] | cdktn.IResolvable;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}
  */
  readonly principal?: LakeformationOptInPrincipal[] | cdktn.IResolvable;
  /**
  * resource_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}
  */
  readonly resourceData?: LakeformationOptInResourceData[] | cdktn.IResolvable;
}
export interface LakeformationOptInCondition {
}

export function lakeformationOptInConditionToTerraform(struct?: LakeformationOptInCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lakeformationOptInConditionToHclTerraform(struct?: LakeformationOptInCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LakeformationOptInConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class LakeformationOptInConditionList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInCondition[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInConditionOutputReference {
    return new LakeformationOptInConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier: string;
}

export function lakeformationOptInPrincipalToTerraform(struct?: LakeformationOptInPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function lakeformationOptInPrincipalToHclTerraform(struct?: LakeformationOptInPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class LakeformationOptInPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInPrincipal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LakeformationOptInPrincipal | cdktn.IResolvable | undefined) {
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

  // data_lake_principal_identifier - computed: false, optional: false, required: true
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}

export class LakeformationOptInPrincipalList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInPrincipal[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInPrincipalOutputReference {
    return new LakeformationOptInPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function lakeformationOptInResourceDataCatalogToTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function lakeformationOptInResourceDataCatalogToHclTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class LakeformationOptInResourceDataCatalogList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataCatalog[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataCatalogOutputReference {
    return new LakeformationOptInResourceDataCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDataCellsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}
  */
  readonly tableCatalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}
  */
  readonly tableName?: string;
}

export function lakeformationOptInResourceDataDataCellsFilterToTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    name: cdktn.stringToTerraform(struct!.name),
    table_catalog_id: cdktn.stringToTerraform(struct!.tableCatalogId),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function lakeformationOptInResourceDataDataCellsFilterToHclTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.tableCatalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDataCellsFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDataCellsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tableCatalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCatalogId = this._tableCatalogId;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDataCellsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._tableCatalogId = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._tableCatalogId = value.tableCatalogId;
      this._tableName = value.tableName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // table_catalog_id - computed: false, optional: true, required: false
  private _tableCatalogId?: string; 
  public get tableCatalogId() {
    return this.getStringAttribute('table_catalog_id');
  }
  public set tableCatalogId(value: string) {
    this._tableCatalogId = value;
  }
  public resetTableCatalogId() {
    this._tableCatalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCatalogIdInput() {
    return this._tableCatalogId;
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
}

export class LakeformationOptInResourceDataDataCellsFilterList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDataCellsFilter[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDataCellsFilterOutputReference {
    return new LakeformationOptInResourceDataDataCellsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDataLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}
  */
  readonly resourceArn: string;
}

export function lakeformationOptInResourceDataDataLocationToTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function lakeformationOptInResourceDataDataLocationToHclTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDataLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDataLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDataLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._resourceArn = value.resourceArn;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class LakeformationOptInResourceDataDataLocationList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDataLocation[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDataLocationOutputReference {
    return new LakeformationOptInResourceDataDataLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
}

export function lakeformationOptInResourceDataDatabaseToTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function lakeformationOptInResourceDataDatabaseToHclTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDatabaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDatabase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDatabase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._name = value.name;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
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
}

export class LakeformationOptInResourceDataDatabaseList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDatabase[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDatabaseOutputReference {
    return new LakeformationOptInResourceDataDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#values LakeformationOptIn#values}
  */
  readonly values: string[];
}

export function lakeformationOptInResourceDataLfTagToTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function lakeformationOptInResourceDataLfTagToHclTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class LakeformationOptInResourceDataLfTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class LakeformationOptInResourceDataLfTagList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTag[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagOutputReference {
    return new LakeformationOptInResourceDataLfTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTagExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
}

export function lakeformationOptInResourceDataLfTagExpressionToTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function lakeformationOptInResourceDataLfTagExpressionToHclTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataLfTagExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTagExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTagExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._name = value.name;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
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
}

export class LakeformationOptInResourceDataLfTagExpressionList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTagExpression[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagExpressionOutputReference {
    return new LakeformationOptInResourceDataLfTagExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTagPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}
  */
  readonly expression?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}
  */
  readonly expressionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}
  */
  readonly resourceType: string;
}

export function lakeformationOptInResourceDataLfTagPolicyToTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    expression: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.expression),
    expression_name: cdktn.stringToTerraform(struct!.expressionName),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function lakeformationOptInResourceDataLfTagPolicyToHclTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.expression),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expression_name: {
      value: cdktn.stringToHclTerraform(struct!.expressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataLfTagPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTagPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._expressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionName = this._expressionName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTagPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._expression = undefined;
      this._expressionName = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._expression = value.expression;
      this._expressionName = value.expressionName;
      this._resourceType = value.resourceType;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string[]; 
  public get expression() {
    return this.getListAttribute('expression');
  }
  public set expression(value: string[]) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // expression_name - computed: false, optional: true, required: false
  private _expressionName?: string; 
  public get expressionName() {
    return this.getStringAttribute('expression_name');
  }
  public set expressionName(value: string) {
    this._expressionName = value;
  }
  public resetExpressionName() {
    this._expressionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionNameInput() {
    return this._expressionName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class LakeformationOptInResourceDataLfTagPolicyList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTagPolicy[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagPolicyOutputReference {
    return new LakeformationOptInResourceDataLfTagPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}
  */
  readonly wildcard?: boolean | cdktn.IResolvable;
}

export function lakeformationOptInResourceDataTableToTerraform(struct?: LakeformationOptInResourceDataTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    name: cdktn.stringToTerraform(struct!.name),
    wildcard: cdktn.booleanToTerraform(struct!.wildcard),
  }
}


export function lakeformationOptInResourceDataTableToHclTerraform(struct?: LakeformationOptInResourceDataTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktn.booleanToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._wildcard = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._wildcard = value.wildcard;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktn.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktn.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}

export class LakeformationOptInResourceDataTableList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTable[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableOutputReference {
    return new LakeformationOptInResourceDataTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTableWithColumnsColumnWildcard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
}

export function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedColumnNames),
  }
}


export function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedColumnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedColumnNames = this._excludedColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedColumnNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedColumnNames = value.excludedColumnNames;
    }
  }

  // excluded_column_names - computed: false, optional: true, required: false
  private _excludedColumnNames?: string[]; 
  public get excludedColumnNames() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_column_names'));
  }
  public set excludedColumnNames(value: string[]) {
    this._excludedColumnNames = value;
  }
  public resetExcludedColumnNames() {
    this._excludedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedColumnNamesInput() {
    return this._excludedColumnNames;
  }
}

export class LakeformationOptInResourceDataTableWithColumnsColumnWildcardList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference {
    return new LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTableWithColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
  /**
  * column_wildcard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#column_wildcard LakeformationOptIn#column_wildcard}
  */
  readonly columnWildcard?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktn.IResolvable;
}

export function lakeformationOptInResourceDataTableWithColumnsToTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    name: cdktn.stringToTerraform(struct!.name),
    column_wildcard: cdktn.listMapper(lakeformationOptInResourceDataTableWithColumnsColumnWildcardToTerraform, true)(struct!.columnWildcard),
  }
}


export function lakeformationOptInResourceDataTableWithColumnsToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_wildcard: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataTableWithColumnsColumnWildcardToHclTerraform, true)(struct!.columnWildcard),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableWithColumnsColumnWildcardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableWithColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTableWithColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columnWildcard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnWildcard = this._columnWildcard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTableWithColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._columnNames = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._columnWildcard.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._columnNames = value.columnNames;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._columnWildcard.internalValue = value.columnWildcard;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktn.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // column_wildcard - computed: false, optional: true, required: false
  private _columnWildcard = new LakeformationOptInResourceDataTableWithColumnsColumnWildcardList(this, "column_wildcard", false);
  public get columnWildcard() {
    return this._columnWildcard;
  }
  public putColumnWildcard(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktn.IResolvable) {
    this._columnWildcard.internalValue = value;
  }
  public resetColumnWildcard() {
    this._columnWildcard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnWildcardInput() {
    return this._columnWildcard.internalValue;
  }
}

export class LakeformationOptInResourceDataTableWithColumnsList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTableWithColumns[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableWithColumnsOutputReference {
    return new LakeformationOptInResourceDataTableWithColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceData {
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#catalog LakeformationOptIn#catalog}
  */
  readonly catalog?: LakeformationOptInResourceDataCatalog[] | cdktn.IResolvable;
  /**
  * data_cells_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#data_cells_filter LakeformationOptIn#data_cells_filter}
  */
  readonly dataCellsFilter?: LakeformationOptInResourceDataDataCellsFilter[] | cdktn.IResolvable;
  /**
  * data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#data_location LakeformationOptIn#data_location}
  */
  readonly dataLocation?: LakeformationOptInResourceDataDataLocation[] | cdktn.IResolvable;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#database LakeformationOptIn#database}
  */
  readonly database?: LakeformationOptInResourceDataDatabase[] | cdktn.IResolvable;
  /**
  * lf_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#lf_tag LakeformationOptIn#lf_tag}
  */
  readonly lfTag?: LakeformationOptInResourceDataLfTag[] | cdktn.IResolvable;
  /**
  * lf_tag_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#lf_tag_expression LakeformationOptIn#lf_tag_expression}
  */
  readonly lfTagExpression?: LakeformationOptInResourceDataLfTagExpression[] | cdktn.IResolvable;
  /**
  * lf_tag_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#lf_tag_policy LakeformationOptIn#lf_tag_policy}
  */
  readonly lfTagPolicy?: LakeformationOptInResourceDataLfTagPolicy[] | cdktn.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#table LakeformationOptIn#table}
  */
  readonly table?: LakeformationOptInResourceDataTable[] | cdktn.IResolvable;
  /**
  * table_with_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#table_with_columns LakeformationOptIn#table_with_columns}
  */
  readonly tableWithColumns?: LakeformationOptInResourceDataTableWithColumns[] | cdktn.IResolvable;
}

export function lakeformationOptInResourceDataToTerraform(struct?: LakeformationOptInResourceData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktn.listMapper(lakeformationOptInResourceDataCatalogToTerraform, true)(struct!.catalog),
    data_cells_filter: cdktn.listMapper(lakeformationOptInResourceDataDataCellsFilterToTerraform, true)(struct!.dataCellsFilter),
    data_location: cdktn.listMapper(lakeformationOptInResourceDataDataLocationToTerraform, true)(struct!.dataLocation),
    database: cdktn.listMapper(lakeformationOptInResourceDataDatabaseToTerraform, true)(struct!.database),
    lf_tag: cdktn.listMapper(lakeformationOptInResourceDataLfTagToTerraform, true)(struct!.lfTag),
    lf_tag_expression: cdktn.listMapper(lakeformationOptInResourceDataLfTagExpressionToTerraform, true)(struct!.lfTagExpression),
    lf_tag_policy: cdktn.listMapper(lakeformationOptInResourceDataLfTagPolicyToTerraform, true)(struct!.lfTagPolicy),
    table: cdktn.listMapper(lakeformationOptInResourceDataTableToTerraform, true)(struct!.table),
    table_with_columns: cdktn.listMapper(lakeformationOptInResourceDataTableWithColumnsToTerraform, true)(struct!.tableWithColumns),
  }
}


export function lakeformationOptInResourceDataToHclTerraform(struct?: LakeformationOptInResourceData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataCatalogToHclTerraform, true)(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataCatalogList",
    },
    data_cells_filter: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataDataCellsFilterToHclTerraform, true)(struct!.dataCellsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDataCellsFilterList",
    },
    data_location: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataDataLocationToHclTerraform, true)(struct!.dataLocation),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDataLocationList",
    },
    database: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataDatabaseToHclTerraform, true)(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDatabaseList",
    },
    lf_tag: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataLfTagToHclTerraform, true)(struct!.lfTag),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagList",
    },
    lf_tag_expression: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataLfTagExpressionToHclTerraform, true)(struct!.lfTagExpression),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagExpressionList",
    },
    lf_tag_policy: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataLfTagPolicyToHclTerraform, true)(struct!.lfTagPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagPolicyList",
    },
    table: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableList",
    },
    table_with_columns: {
      value: cdktn.listMapperHcl(lakeformationOptInResourceDataTableWithColumnsToHclTerraform, true)(struct!.tableWithColumns),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableWithColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._dataCellsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCellsFilter = this._dataCellsFilter?.internalValue;
    }
    if (this._dataLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocation = this._dataLocation?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._lfTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTag = this._lfTag?.internalValue;
    }
    if (this._lfTagExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTagExpression = this._lfTagExpression?.internalValue;
    }
    if (this._lfTagPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTagPolicy = this._lfTagPolicy?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    if (this._tableWithColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableWithColumns = this._tableWithColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._dataCellsFilter.internalValue = undefined;
      this._dataLocation.internalValue = undefined;
      this._database.internalValue = undefined;
      this._lfTag.internalValue = undefined;
      this._lfTagExpression.internalValue = undefined;
      this._lfTagPolicy.internalValue = undefined;
      this._table.internalValue = undefined;
      this._tableWithColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._dataCellsFilter.internalValue = value.dataCellsFilter;
      this._dataLocation.internalValue = value.dataLocation;
      this._database.internalValue = value.database;
      this._lfTag.internalValue = value.lfTag;
      this._lfTagExpression.internalValue = value.lfTagExpression;
      this._lfTagPolicy.internalValue = value.lfTagPolicy;
      this._table.internalValue = value.table;
      this._tableWithColumns.internalValue = value.tableWithColumns;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new LakeformationOptInResourceDataCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: LakeformationOptInResourceDataCatalog[] | cdktn.IResolvable) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // data_cells_filter - computed: false, optional: true, required: false
  private _dataCellsFilter = new LakeformationOptInResourceDataDataCellsFilterList(this, "data_cells_filter", false);
  public get dataCellsFilter() {
    return this._dataCellsFilter;
  }
  public putDataCellsFilter(value: LakeformationOptInResourceDataDataCellsFilter[] | cdktn.IResolvable) {
    this._dataCellsFilter.internalValue = value;
  }
  public resetDataCellsFilter() {
    this._dataCellsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCellsFilterInput() {
    return this._dataCellsFilter.internalValue;
  }

  // data_location - computed: false, optional: true, required: false
  private _dataLocation = new LakeformationOptInResourceDataDataLocationList(this, "data_location", false);
  public get dataLocation() {
    return this._dataLocation;
  }
  public putDataLocation(value: LakeformationOptInResourceDataDataLocation[] | cdktn.IResolvable) {
    this._dataLocation.internalValue = value;
  }
  public resetDataLocation() {
    this._dataLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationInput() {
    return this._dataLocation.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new LakeformationOptInResourceDataDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }
  public putDatabase(value: LakeformationOptInResourceDataDatabase[] | cdktn.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // lf_tag - computed: false, optional: true, required: false
  private _lfTag = new LakeformationOptInResourceDataLfTagList(this, "lf_tag", false);
  public get lfTag() {
    return this._lfTag;
  }
  public putLfTag(value: LakeformationOptInResourceDataLfTag[] | cdktn.IResolvable) {
    this._lfTag.internalValue = value;
  }
  public resetLfTag() {
    this._lfTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagInput() {
    return this._lfTag.internalValue;
  }

  // lf_tag_expression - computed: false, optional: true, required: false
  private _lfTagExpression = new LakeformationOptInResourceDataLfTagExpressionList(this, "lf_tag_expression", false);
  public get lfTagExpression() {
    return this._lfTagExpression;
  }
  public putLfTagExpression(value: LakeformationOptInResourceDataLfTagExpression[] | cdktn.IResolvable) {
    this._lfTagExpression.internalValue = value;
  }
  public resetLfTagExpression() {
    this._lfTagExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagExpressionInput() {
    return this._lfTagExpression.internalValue;
  }

  // lf_tag_policy - computed: false, optional: true, required: false
  private _lfTagPolicy = new LakeformationOptInResourceDataLfTagPolicyList(this, "lf_tag_policy", false);
  public get lfTagPolicy() {
    return this._lfTagPolicy;
  }
  public putLfTagPolicy(value: LakeformationOptInResourceDataLfTagPolicy[] | cdktn.IResolvable) {
    this._lfTagPolicy.internalValue = value;
  }
  public resetLfTagPolicy() {
    this._lfTagPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagPolicyInput() {
    return this._lfTagPolicy.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new LakeformationOptInResourceDataTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: LakeformationOptInResourceDataTable[] | cdktn.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns = new LakeformationOptInResourceDataTableWithColumnsList(this, "table_with_columns", false);
  public get tableWithColumns() {
    return this._tableWithColumns;
  }
  public putTableWithColumns(value: LakeformationOptInResourceDataTableWithColumns[] | cdktn.IResolvable) {
    this._tableWithColumns.internalValue = value;
  }
  public resetTableWithColumns() {
    this._tableWithColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableWithColumnsInput() {
    return this._tableWithColumns.internalValue;
  }
}

export class LakeformationOptInResourceDataList extends cdktn.ComplexList {
  public internalValue? : LakeformationOptInResourceData[] | cdktn.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataOutputReference {
    return new LakeformationOptInResourceDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in}
*/
export class LakeformationOptIn extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_opt_in";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LakeformationOptIn resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationOptIn to import
  * @param importFromId The id of the existing LakeformationOptIn that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationOptIn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_opt_in", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationOptInConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationOptInConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_opt_in',
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
    this._region = config.region;
    this._condition.internalValue = config.condition;
    this._principal.internalValue = config.principal;
    this._resourceData.internalValue = config.resourceData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // condition - computed: false, optional: true, required: false
  private _condition = new LakeformationOptInConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: LakeformationOptInCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new LakeformationOptInPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: LakeformationOptInPrincipal[] | cdktn.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // resource_data - computed: false, optional: true, required: false
  private _resourceData = new LakeformationOptInResourceDataList(this, "resource_data", false);
  public get resourceData() {
    return this._resourceData;
  }
  public putResourceData(value: LakeformationOptInResourceData[] | cdktn.IResolvable) {
    this._resourceData.internalValue = value;
  }
  public resetResourceData() {
    this._resourceData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDataInput() {
    return this._resourceData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      condition: cdktn.listMapper(lakeformationOptInConditionToTerraform, true)(this._condition.internalValue),
      principal: cdktn.listMapper(lakeformationOptInPrincipalToTerraform, true)(this._principal.internalValue),
      resource_data: cdktn.listMapper(lakeformationOptInResourceDataToTerraform, true)(this._resourceData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktn.listMapperHcl(lakeformationOptInConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInConditionList",
      },
      principal: {
        value: cdktn.listMapperHcl(lakeformationOptInPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInPrincipalList",
      },
      resource_data: {
        value: cdktn.listMapperHcl(lakeformationOptInResourceDataToHclTerraform, true)(this._resourceData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInResourceDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
