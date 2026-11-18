/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}
  */
  readonly isPublished?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#region NetworksecuritymanagerScope#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * scope_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}
  */
  readonly scopeConfiguration?: NetworksecuritymanagerScopeScopeConfiguration[] | cdktn.IResolvable;
}
export interface NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}
  */
  readonly organizationalUnits?: string[];
}

export function networksecuritymanagerScopeScopeConfigurationAccountFilterExcludeToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnits),
  }
}


export function networksecuritymanagerScopeScopeConfigurationAccountFilterExcludeToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_units: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnits),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._organizationalUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._organizationalUnits = value.organizationalUnits;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktn.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_units'));
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}
  */
  readonly organizationalUnits?: string[];
}

export function networksecuritymanagerScopeScopeConfigurationAccountFilterIncludeToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnits),
  }
}


export function networksecuritymanagerScopeScopeConfigurationAccountFilterIncludeToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_units: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnits),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._organizationalUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._organizationalUnits = value.organizationalUnits;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktn.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_units'));
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationAccountFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}
  */
  readonly exclude?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] | cdktn.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}
  */
  readonly include?: NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationAccountFilterToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_all: cdktn.booleanToTerraform(struct!.includeAll),
    exclude: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationAccountFilterExcludeToTerraform, true)(struct!.exclude),
    include: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationAccountFilterIncludeToTerraform, true)(struct!.include),
  }
}


export function networksecuritymanagerScopeScopeConfigurationAccountFilterToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationAccountFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_all: {
      value: cdktn.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationAccountFilterExcludeToHclTerraform, true)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList",
    },
    include: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationAccountFilterIncludeToHclTerraform, true)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationAccountFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktn.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktn.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[] | cdktn.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[] | cdktn.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationAccountFilterList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}
  */
  readonly and?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}
  */
  readonly criteria?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] | cdktn.IResolvable;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}
  */
  readonly not?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] | cdktn.IResolvable;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}
  */
  readonly or?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndToTerraform, true)(struct!.and),
    criteria: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaToTerraform, true)(struct!.criteria),
    not: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotToTerraform, true)(struct!.not),
    or: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrToTerraform, true)(struct!.or),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList",
    },
    criteria: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList",
    },
    not: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotToHclTerraform, true)(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList",
    },
    or: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._criteria.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._criteria.internalValue = value.criteria;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList(this, "not", false);
  public get not() {
    return this._not;
  }
  public putNot(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[] | cdktn.IResolvable) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}
  */
  readonly explicitArns?: string[];
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}
  */
  readonly expression?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explicit_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.explicitArns),
    expression: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionToTerraform, true)(struct!.expression),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explicit_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.explicitArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expression: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionToHclTerraform, true)(struct!.expression),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitArns = this._explicitArns;
    }
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitArns = undefined;
      this._expression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitArns = value.explicitArns;
      this._expression.internalValue = value.expression;
    }
  }

  // explicit_arns - computed: false, optional: true, required: false
  private _explicitArns?: string[]; 
  public get explicitArns() {
    return cdktn.Fn.tolist(this.getListAttribute('explicit_arns'));
  }
  public set explicitArns(value: string[]) {
    this._explicitArns = value;
  }
  public resetExplicitArns() {
    this._explicitArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitArnsInput() {
    return this._explicitArns;
  }

  // expression - computed: false, optional: true, required: false
  private _expression = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList(this, "expression", false);
  public get expression() {
    return this._expression;
  }
  public putExpression(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[] | cdktn.IResolvable) {
    this._expression.internalValue = value;
  }
  public resetExpression() {
    this._expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}
  */
  readonly scheme?: string;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._scheme = value.scheme;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}
  */
  readonly albConfig?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    alb_config: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigToTerraform, true)(struct!.albConfig),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    alb_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigToHclTerraform, true)(struct!.albConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._albConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.albConfig = this._albConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._albConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._albConfig.internalValue = value.albConfig;
    }
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

  // alb_config - computed: false, optional: true, required: false
  private _albConfig = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList(this, "alb_config", false);
  public get albConfig() {
    return this._albConfig;
  }
  public putAlbConfig(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[] | cdktn.IResolvable) {
    this._albConfig.internalValue = value;
  }
  public resetAlbConfig() {
    this._albConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albConfigInput() {
    return this._albConfig.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}
  */
  readonly and?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}
  */
  readonly criteria?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] | cdktn.IResolvable;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}
  */
  readonly not?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] | cdktn.IResolvable;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}
  */
  readonly or?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndToTerraform, true)(struct!.and),
    criteria: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaToTerraform, true)(struct!.criteria),
    not: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotToTerraform, true)(struct!.not),
    or: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrToTerraform, true)(struct!.or),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList",
    },
    criteria: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList",
    },
    not: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotToHclTerraform, true)(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList",
    },
    or: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._criteria.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._criteria.internalValue = value.criteria;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList(this, "not", false);
  public get not() {
    return this._not;
  }
  public putNot(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[] | cdktn.IResolvable) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}
  */
  readonly explicitArns?: string[];
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}
  */
  readonly expression?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explicit_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.explicitArns),
    expression: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionToTerraform, true)(struct!.expression),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explicit_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.explicitArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expression: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionToHclTerraform, true)(struct!.expression),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitArns = this._explicitArns;
    }
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitArns = undefined;
      this._expression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitArns = value.explicitArns;
      this._expression.internalValue = value.expression;
    }
  }

  // explicit_arns - computed: false, optional: true, required: false
  private _explicitArns?: string[]; 
  public get explicitArns() {
    return cdktn.Fn.tolist(this.getListAttribute('explicit_arns'));
  }
  public set explicitArns(value: string[]) {
    this._explicitArns = value;
  }
  public resetExplicitArns() {
    this._explicitArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitArnsInput() {
    return this._explicitArns;
  }

  // expression - computed: false, optional: true, required: false
  private _expression = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList(this, "expression", false);
  public get expression() {
    return this._expression;
  }
  public putExpression(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[] | cdktn.IResolvable) {
    this._expression.internalValue = value;
  }
  public resetExpression() {
    this._expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfigurationResourceScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}
  */
  readonly resourceType: string;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}
  */
  readonly exclude?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] | cdktn.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}
  */
  readonly include?: NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationResourceScopeToTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_all: cdktn.booleanToTerraform(struct!.includeAll),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    exclude: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeToTerraform, true)(struct!.exclude),
    include: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeToTerraform, true)(struct!.include),
  }
}


export function networksecuritymanagerScopeScopeConfigurationResourceScopeToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfigurationResourceScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_all: {
      value: cdktn.booleanToHclTerraform(struct!.includeAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeToHclTerraform, true)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList",
    },
    include: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeToHclTerraform, true)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfigurationResourceScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfigurationResourceScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._resourceType = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._resourceType = value.resourceType;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktn.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktn.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
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

  // exclude - computed: false, optional: true, required: false
  private _exclude = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[] | cdktn.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[] | cdktn.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationResourceScopeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfigurationResourceScope[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerScopeScopeConfiguration {
  /**
  * account_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_filter NetworksecuritymanagerScope#account_filter}
  */
  readonly accountFilter?: NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] | cdktn.IResolvable;
  /**
  * resource_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_scope NetworksecuritymanagerScope#resource_scope}
  */
  readonly resourceScope?: NetworksecuritymanagerScopeScopeConfigurationResourceScope[] | cdktn.IResolvable;
}

export function networksecuritymanagerScopeScopeConfigurationToTerraform(struct?: NetworksecuritymanagerScopeScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_filter: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationAccountFilterToTerraform, true)(struct!.accountFilter),
    resource_scope: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationResourceScopeToTerraform, true)(struct!.resourceScope),
  }
}


export function networksecuritymanagerScopeScopeConfigurationToHclTerraform(struct?: NetworksecuritymanagerScopeScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_filter: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationAccountFilterToHclTerraform, true)(struct!.accountFilter),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationAccountFilterList",
    },
    resource_scope: {
      value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationResourceScopeToHclTerraform, true)(struct!.resourceScope),
      isBlock: true,
      type: "set",
      storageClassType: "NetworksecuritymanagerScopeScopeConfigurationResourceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerScopeScopeConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerScopeScopeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountFilter = this._accountFilter?.internalValue;
    }
    if (this._resourceScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceScope = this._resourceScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerScopeScopeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountFilter.internalValue = undefined;
      this._resourceScope.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountFilter.internalValue = value.accountFilter;
      this._resourceScope.internalValue = value.resourceScope;
    }
  }

  // account_filter - computed: false, optional: true, required: false
  private _accountFilter = new NetworksecuritymanagerScopeScopeConfigurationAccountFilterList(this, "account_filter", false);
  public get accountFilter() {
    return this._accountFilter;
  }
  public putAccountFilter(value: NetworksecuritymanagerScopeScopeConfigurationAccountFilter[] | cdktn.IResolvable) {
    this._accountFilter.internalValue = value;
  }
  public resetAccountFilter() {
    this._accountFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFilterInput() {
    return this._accountFilter.internalValue;
  }

  // resource_scope - computed: false, optional: true, required: false
  private _resourceScope = new NetworksecuritymanagerScopeScopeConfigurationResourceScopeList(this, "resource_scope", true);
  public get resourceScope() {
    return this._resourceScope;
  }
  public putResourceScope(value: NetworksecuritymanagerScopeScopeConfigurationResourceScope[] | cdktn.IResolvable) {
    this._resourceScope.internalValue = value;
  }
  public resetResourceScope() {
    this._resourceScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeInput() {
    return this._resourceScope.internalValue;
  }
}

export class NetworksecuritymanagerScopeScopeConfigurationList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerScopeScopeConfiguration[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerScopeScopeConfigurationOutputReference {
    return new NetworksecuritymanagerScopeScopeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope aws_networksecuritymanager_scope}
*/
export class NetworksecuritymanagerScope extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networksecuritymanager_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerScope to import
  * @param importFromId The id of the existing NetworksecuritymanagerScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networksecuritymanager_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope aws_networksecuritymanager_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerScopeConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networksecuritymanager_scope',
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
    this._description = config.description;
    this._isPublished = config.isPublished;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._scopeConfiguration.internalValue = config.scopeConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // is_published - computed: true, optional: true, required: false
  private _isPublished?: boolean | cdktn.IResolvable; 
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }
  public set isPublished(value: boolean | cdktn.IResolvable) {
    this._isPublished = value;
  }
  public resetIsPublished() {
    this._isPublished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublishedInput() {
    return this._isPublished;
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

  // scope_configuration - computed: false, optional: true, required: false
  private _scopeConfiguration = new NetworksecuritymanagerScopeScopeConfigurationList(this, "scope_configuration", false);
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
  public putScopeConfiguration(value: NetworksecuritymanagerScopeScopeConfiguration[] | cdktn.IResolvable) {
    this._scopeConfiguration.internalValue = value;
  }
  public resetScopeConfiguration() {
    this._scopeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeConfigurationInput() {
    return this._scopeConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      is_published: cdktn.booleanToTerraform(this._isPublished),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      scope_configuration: cdktn.listMapper(networksecuritymanagerScopeScopeConfigurationToTerraform, true)(this._scopeConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_published: {
        value: cdktn.booleanToHclTerraform(this._isPublished),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      scope_configuration: {
        value: cdktn.listMapperHcl(networksecuritymanagerScopeScopeConfigurationToHclTerraform, true)(this._scopeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerScopeScopeConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
