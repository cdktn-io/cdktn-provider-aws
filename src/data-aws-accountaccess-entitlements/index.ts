/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsAccountaccessEntitlementsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}
  */
  readonly applicationArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}
  */
  readonly region?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}
  */
  readonly filter?: DataAwsAccountaccessEntitlementsFilter[] | cdktn.IResolvable;
}
export interface DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter {
}

export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterToTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterToHclTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference {
    return new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal {
}

export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalToTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalToHclTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_center - computed: true, optional: false, required: false
  private _identityCenter = new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList(this, "identity_center", false);
  public get identityCenter() {
    return this._identityCenter;
  }
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference {
    return new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole {
}

export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleToTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleToHclTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference {
    return new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsEntitlementsEntitlement {
}

export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementToTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsAccountaccessEntitlementsEntitlementsEntitlementToHclTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlementsEntitlement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsEntitlementsEntitlement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsEntitlementsEntitlement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_role - computed: true, optional: false, required: false
  private _principalRole = new DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList(this, "principal_role", false);
  public get principalRole() {
    return this._principalRole;
  }
}

export class DataAwsAccountaccessEntitlementsEntitlementsEntitlementList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference {
    return new DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsEntitlements {
}

export function dataAwsAccountaccessEntitlementsEntitlementsToTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsAccountaccessEntitlementsEntitlementsToHclTerraform(struct?: DataAwsAccountaccessEntitlementsEntitlements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAccountaccessEntitlementsEntitlementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsEntitlements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // entitlement - computed: true, optional: false, required: false
  private _entitlement = new DataAwsAccountaccessEntitlementsEntitlementsEntitlementList(this, "entitlement", false);
  public get entitlement() {
    return this._entitlement;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }
}

export class DataAwsAccountaccessEntitlementsEntitlementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsOutputReference {
    return new DataAwsAccountaccessEntitlementsEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}
  */
  readonly userId?: string;
}

export function dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterToTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.stringToTerraform(struct!.groupId),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterToHclTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._userId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList extends cdktn.ComplexList {
  public internalValue? : DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable

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
  public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference {
    return new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal {
  /**
  * identity_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#identity_center DataAwsAccountaccessEntitlements#identity_center}
  */
  readonly identityCenter?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable;
}

export function dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalToTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center: cdktn.listMapper(dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterToTerraform, true)(struct!.identityCenter),
  }
}


export function dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalToHclTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center: {
      value: cdktn.listMapperHcl(dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterToHclTerraform, true)(struct!.identityCenter),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenter = this._identityCenter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenter.internalValue = value.identityCenter;
    }
  }

  // identity_center - computed: false, optional: true, required: false
  private _identityCenter = new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList(this, "identity_center", false);
  public get identityCenter() {
    return this._identityCenter;
  }
  public putIdentityCenter(value: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable) {
    this._identityCenter.internalValue = value;
  }
  public resetIdentityCenter() {
    this._identityCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInput() {
    return this._identityCenter.internalValue;
  }
}

export class DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList extends cdktn.ComplexList {
  public internalValue? : DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] | cdktn.IResolvable

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
  public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference {
    return new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsFilterPrincipalRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}
  */
  readonly roleArn?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#principal DataAwsAccountaccessEntitlements#principal}
  */
  readonly principal?: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] | cdktn.IResolvable;
}

export function dataAwsAccountaccessEntitlementsFilterPrincipalRoleToTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    principal: cdktn.listMapper(dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalToTerraform, true)(struct!.principal),
  }
}


export function dataAwsAccountaccessEntitlementsFilterPrincipalRoleToHclTerraform(struct?: DataAwsAccountaccessEntitlementsFilterPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktn.listMapperHcl(dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsFilterPrincipalRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsFilterPrincipalRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._roleArn = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._roleArn = value.roleArn;
      this._principal.internalValue = value.principal;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // principal - computed: false, optional: true, required: false
  private _principal = new DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[] | cdktn.IResolvable) {
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

export class DataAwsAccountaccessEntitlementsFilterPrincipalRoleList extends cdktn.ComplexList {
  public internalValue? : DataAwsAccountaccessEntitlementsFilterPrincipalRole[] | cdktn.IResolvable

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
  public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference {
    return new DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAccountaccessEntitlementsFilter {
  /**
  * principal_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#principal_role DataAwsAccountaccessEntitlements#principal_role}
  */
  readonly principalRole?: DataAwsAccountaccessEntitlementsFilterPrincipalRole[] | cdktn.IResolvable;
}

export function dataAwsAccountaccessEntitlementsFilterToTerraform(struct?: DataAwsAccountaccessEntitlementsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal_role: cdktn.listMapper(dataAwsAccountaccessEntitlementsFilterPrincipalRoleToTerraform, true)(struct!.principalRole),
  }
}


export function dataAwsAccountaccessEntitlementsFilterToHclTerraform(struct?: DataAwsAccountaccessEntitlementsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal_role: {
      value: cdktn.listMapperHcl(dataAwsAccountaccessEntitlementsFilterPrincipalRoleToHclTerraform, true)(struct!.principalRole),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsAccountaccessEntitlementsFilterPrincipalRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsAccountaccessEntitlementsFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsAccountaccessEntitlementsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalRole = this._principalRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAccountaccessEntitlementsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalRole.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalRole.internalValue = value.principalRole;
    }
  }

  // principal_role - computed: false, optional: true, required: false
  private _principalRole = new DataAwsAccountaccessEntitlementsFilterPrincipalRoleList(this, "principal_role", false);
  public get principalRole() {
    return this._principalRole;
  }
  public putPrincipalRole(value: DataAwsAccountaccessEntitlementsFilterPrincipalRole[] | cdktn.IResolvable) {
    this._principalRole.internalValue = value;
  }
  public resetPrincipalRole() {
    this._principalRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalRoleInput() {
    return this._principalRole.internalValue;
  }
}

export class DataAwsAccountaccessEntitlementsFilterList extends cdktn.ComplexList {
  public internalValue? : DataAwsAccountaccessEntitlementsFilter[] | cdktn.IResolvable

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
  public get(index: number): DataAwsAccountaccessEntitlementsFilterOutputReference {
    return new DataAwsAccountaccessEntitlementsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements}
*/
export class DataAwsAccountaccessEntitlements extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_accountaccess_entitlements";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsAccountaccessEntitlements to import
  * @param importFromId The id of the existing DataAwsAccountaccessEntitlements that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsAccountaccessEntitlements to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_accountaccess_entitlements", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAccountaccessEntitlementsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAccountaccessEntitlementsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_accountaccess_entitlements',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.65.0',
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
    this._applicationArn = config.applicationArn;
    this._region = config.region;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new DataAwsAccountaccessEntitlementsEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsAccountaccessEntitlementsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsAccountaccessEntitlementsFilter[] | cdktn.IResolvable) {
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
      application_arn: cdktn.stringToTerraform(this._applicationArn),
      region: cdktn.stringToTerraform(this._region),
      filter: cdktn.listMapper(dataAwsAccountaccessEntitlementsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktn.stringToHclTerraform(this._applicationArn),
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
      filter: {
        value: cdktn.listMapperHcl(dataAwsAccountaccessEntitlementsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsAccountaccessEntitlementsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
