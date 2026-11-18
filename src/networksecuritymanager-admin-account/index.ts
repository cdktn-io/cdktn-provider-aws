/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerAdminAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}
  */
  readonly region?: string;
  /**
  * admin_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}
  */
  readonly adminScope?: NetworksecuritymanagerAdminAccountAdminScope[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}
  */
  readonly timeouts?: NetworksecuritymanagerAdminAccountTimeouts;
}
export interface NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}
  */
  readonly allFirewallTypesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}
  */
  readonly firewallTypes?: string[];
}

export function networksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeToTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_firewall_types_enabled: cdktn.booleanToTerraform(struct!.allFirewallTypesEnabled),
    firewall_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.firewallTypes),
  }
}


export function networksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeToHclTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_firewall_types_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.allFirewallTypesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.firewallTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allFirewallTypesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFirewallTypesEnabled = this._allFirewallTypesEnabled;
    }
    if (this._firewallTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallTypes = this._firewallTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allFirewallTypesEnabled = undefined;
      this._firewallTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allFirewallTypesEnabled = value.allFirewallTypesEnabled;
      this._firewallTypes = value.firewallTypes;
    }
  }

  // all_firewall_types_enabled - computed: false, optional: true, required: false
  private _allFirewallTypesEnabled?: boolean | cdktn.IResolvable; 
  public get allFirewallTypesEnabled() {
    return this.getBooleanAttribute('all_firewall_types_enabled');
  }
  public set allFirewallTypesEnabled(value: boolean | cdktn.IResolvable) {
    this._allFirewallTypesEnabled = value;
  }
  public resetAllFirewallTypesEnabled() {
    this._allFirewallTypesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFirewallTypesEnabledInput() {
    return this._allFirewallTypesEnabled;
  }

  // firewall_types - computed: false, optional: true, required: false
  private _firewallTypes?: string[]; 
  public get firewallTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('firewall_types'));
  }
  public set firewallTypes(value: string[]) {
    this._firewallTypes = value;
  }
  public resetFirewallTypes() {
    this._firewallTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypesInput() {
    return this._firewallTypes;
  }
}

export class NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference {
    return new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}
  */
  readonly organizationalUnits?: string[];
}

export function networksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyToTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
    organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnits),
  }
}


export function networksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyToHclTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
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

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts = undefined;
      this._organizationalUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts = value.accounts;
      this._organizationalUnits = value.organizationalUnits;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktn.Fn.tolist(this.getListAttribute('accounts'));
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
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

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference {
    return new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}
  */
  readonly organizationalUnits?: string[];
}

export function networksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyToTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
    organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnits),
  }
}


export function networksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyToHclTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
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

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts = undefined;
      this._organizationalUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts = value.accounts;
      this._organizationalUnits = value.organizationalUnits;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktn.Fn.tolist(this.getListAttribute('accounts'));
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
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

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference {
    return new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerAdminAccountAdminScopeScopeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * exclude_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}
  */
  readonly excludeOnly?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] | cdktn.IResolvable;
  /**
  * include_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}
  */
  readonly includeOnly?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] | cdktn.IResolvable;
}

export function networksecuritymanagerAdminAccountAdminScopeScopeFilterToTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_all: cdktn.booleanToTerraform(struct!.includeAll),
    exclude_only: cdktn.listMapper(networksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyToTerraform, true)(struct!.excludeOnly),
    include_only: cdktn.listMapper(networksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyToTerraform, true)(struct!.includeOnly),
  }
}


export function networksecuritymanagerAdminAccountAdminScopeScopeFilterToHclTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilter | cdktn.IResolvable): any {
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
    exclude_only: {
      value: cdktn.listMapperHcl(networksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyToHclTerraform, true)(struct!.excludeOnly),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList",
    },
    include_only: {
      value: cdktn.listMapperHcl(networksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyToHclTerraform, true)(struct!.includeOnly),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerAdminAccountAdminScopeScopeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAll = this._includeAll;
    }
    if (this._excludeOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeOnly = this._excludeOnly?.internalValue;
    }
    if (this._includeOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOnly = this._includeOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAll = undefined;
      this._excludeOnly.internalValue = undefined;
      this._includeOnly.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAll = value.includeAll;
      this._excludeOnly.internalValue = value.excludeOnly;
      this._includeOnly.internalValue = value.includeOnly;
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

  // exclude_only - computed: false, optional: true, required: false
  private _excludeOnly = new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(this, "exclude_only", false);
  public get excludeOnly() {
    return this._excludeOnly;
  }
  public putExcludeOnly(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[] | cdktn.IResolvable) {
    this._excludeOnly.internalValue = value;
  }
  public resetExcludeOnly() {
    this._excludeOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeOnlyInput() {
    return this._excludeOnly.internalValue;
  }

  // include_only - computed: false, optional: true, required: false
  private _includeOnly = new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(this, "include_only", false);
  public get includeOnly() {
    return this._includeOnly;
  }
  public putIncludeOnly(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[] | cdktn.IResolvable) {
    this._includeOnly.internalValue = value;
  }
  public resetIncludeOnly() {
    this._includeOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOnlyInput() {
    return this._includeOnly.internalValue;
  }
}

export class NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference {
    return new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerAdminAccountAdminScope {
  /**
  * firewall_type_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}
  */
  readonly firewallTypeScope?: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] | cdktn.IResolvable;
  /**
  * scope_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}
  */
  readonly scopeFilter?: NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] | cdktn.IResolvable;
}

export function networksecuritymanagerAdminAccountAdminScopeToTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firewall_type_scope: cdktn.listMapper(networksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeToTerraform, true)(struct!.firewallTypeScope),
    scope_filter: cdktn.listMapper(networksecuritymanagerAdminAccountAdminScopeScopeFilterToTerraform, true)(struct!.scopeFilter),
  }
}


export function networksecuritymanagerAdminAccountAdminScopeToHclTerraform(struct?: NetworksecuritymanagerAdminAccountAdminScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firewall_type_scope: {
      value: cdktn.listMapperHcl(networksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeToHclTerraform, true)(struct!.firewallTypeScope),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList",
    },
    scope_filter: {
      value: cdktn.listMapperHcl(networksecuritymanagerAdminAccountAdminScopeScopeFilterToHclTerraform, true)(struct!.scopeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerAdminAccountAdminScopeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerAdminAccountAdminScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallTypeScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallTypeScope = this._firewallTypeScope?.internalValue;
    }
    if (this._scopeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeFilter = this._scopeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerAdminAccountAdminScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallTypeScope.internalValue = undefined;
      this._scopeFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallTypeScope.internalValue = value.firewallTypeScope;
      this._scopeFilter.internalValue = value.scopeFilter;
    }
  }

  // firewall_type_scope - computed: false, optional: true, required: false
  private _firewallTypeScope = new NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(this, "firewall_type_scope", false);
  public get firewallTypeScope() {
    return this._firewallTypeScope;
  }
  public putFirewallTypeScope(value: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[] | cdktn.IResolvable) {
    this._firewallTypeScope.internalValue = value;
  }
  public resetFirewallTypeScope() {
    this._firewallTypeScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeScopeInput() {
    return this._firewallTypeScope.internalValue;
  }

  // scope_filter - computed: false, optional: true, required: false
  private _scopeFilter = new NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(this, "scope_filter", false);
  public get scopeFilter() {
    return this._scopeFilter;
  }
  public putScopeFilter(value: NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[] | cdktn.IResolvable) {
    this._scopeFilter.internalValue = value;
  }
  public resetScopeFilter() {
    this._scopeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeFilterInput() {
    return this._scopeFilter.internalValue;
  }
}

export class NetworksecuritymanagerAdminAccountAdminScopeList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerAdminAccountAdminScope[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeOutputReference {
    return new NetworksecuritymanagerAdminAccountAdminScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerAdminAccountTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}
  */
  readonly update?: string;
}

export function networksecuritymanagerAdminAccountTimeoutsToTerraform(struct?: NetworksecuritymanagerAdminAccountTimeouts | cdktn.IResolvable): any {
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


export function networksecuritymanagerAdminAccountTimeoutsToHclTerraform(struct?: NetworksecuritymanagerAdminAccountTimeouts | cdktn.IResolvable): any {
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

export class NetworksecuritymanagerAdminAccountTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworksecuritymanagerAdminAccountTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworksecuritymanagerAdminAccountTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}
*/
export class NetworksecuritymanagerAdminAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networksecuritymanager_admin_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import
  * @param importFromId The id of the existing NetworksecuritymanagerAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networksecuritymanager_admin_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerAdminAccountConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerAdminAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networksecuritymanager_admin_account',
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
    this._accountId = config.accountId;
    this._priority = config.priority;
    this._region = config.region;
    this._adminScope.internalValue = config.adminScope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // admin_scope - computed: false, optional: true, required: false
  private _adminScope = new NetworksecuritymanagerAdminAccountAdminScopeList(this, "admin_scope", false);
  public get adminScope() {
    return this._adminScope;
  }
  public putAdminScope(value: NetworksecuritymanagerAdminAccountAdminScope[] | cdktn.IResolvable) {
    this._adminScope.internalValue = value;
  }
  public resetAdminScope() {
    this._adminScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScopeInput() {
    return this._adminScope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworksecuritymanagerAdminAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworksecuritymanagerAdminAccountTimeouts) {
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
      account_id: cdktn.stringToTerraform(this._accountId),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      admin_scope: cdktn.listMapper(networksecuritymanagerAdminAccountAdminScopeToTerraform, true)(this._adminScope.internalValue),
      timeouts: networksecuritymanagerAdminAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_scope: {
        value: cdktn.listMapperHcl(networksecuritymanagerAdminAccountAdminScopeToHclTerraform, true)(this._adminScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerAdminAccountAdminScopeList",
      },
      timeouts: {
        value: networksecuritymanagerAdminAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworksecuritymanagerAdminAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
