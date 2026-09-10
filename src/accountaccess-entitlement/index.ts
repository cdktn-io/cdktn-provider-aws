/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountaccessEntitlementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}
  */
  readonly applicationArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#region AccountaccessEntitlement#region}
  */
  readonly region?: string;
  /**
  * entitlement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}
  */
  readonly entitlement?: AccountaccessEntitlementEntitlement[] | cdktn.IResolvable;
}
export interface AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}
  */
  readonly userId?: string;
}

export function accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.stringToTerraform(struct!.groupId),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
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

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined) {
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

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList extends cdktn.ComplexList {
  public internalValue? : AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable

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
  public get(index: number): AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference {
    return new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountaccessEntitlementEntitlementPrincipalRolePrincipal {
  /**
  * identity_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}
  */
  readonly identityCenter?: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable;
}

export function accountaccessEntitlementEntitlementPrincipalRolePrincipalToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center: cdktn.listMapper(accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToTerraform, true)(struct!.identityCenter),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRolePrincipalToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center: {
      value: cdktn.listMapperHcl(accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToHclTerraform, true)(struct!.identityCenter),
      isBlock: true,
      type: "list",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable | undefined) {
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
  private _identityCenter = new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList(this, "identity_center", false);
  public get identityCenter() {
    return this._identityCenter;
  }
  public putIdentityCenter(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] | cdktn.IResolvable) {
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

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalList extends cdktn.ComplexList {
  public internalValue? : AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] | cdktn.IResolvable

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
  public get(index: number): AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference {
    return new AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountaccessEntitlementEntitlementPrincipalRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}
  */
  readonly roleArn: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}
  */
  readonly principal?: AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] | cdktn.IResolvable;
}

export function accountaccessEntitlementEntitlementPrincipalRoleToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    principal: cdktn.listMapper(accountaccessEntitlementEntitlementPrincipalRolePrincipalToTerraform, true)(struct!.principal),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRoleToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktn.listMapperHcl(accountaccessEntitlementEntitlementPrincipalRolePrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRolePrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementPrincipalRoleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._roleArn = value.roleArn;
      this._principal.internalValue = value.principal;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new AccountaccessEntitlementEntitlementPrincipalRolePrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] | cdktn.IResolvable) {
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

export class AccountaccessEntitlementEntitlementPrincipalRoleList extends cdktn.ComplexList {
  public internalValue? : AccountaccessEntitlementEntitlementPrincipalRole[] | cdktn.IResolvable

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
  public get(index: number): AccountaccessEntitlementEntitlementPrincipalRoleOutputReference {
    return new AccountaccessEntitlementEntitlementPrincipalRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountaccessEntitlementEntitlement {
  /**
  * principal_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}
  */
  readonly principalRole?: AccountaccessEntitlementEntitlementPrincipalRole[] | cdktn.IResolvable;
}

export function accountaccessEntitlementEntitlementToTerraform(struct?: AccountaccessEntitlementEntitlement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal_role: cdktn.listMapper(accountaccessEntitlementEntitlementPrincipalRoleToTerraform, true)(struct!.principalRole),
  }
}


export function accountaccessEntitlementEntitlementToHclTerraform(struct?: AccountaccessEntitlementEntitlement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal_role: {
      value: cdktn.listMapperHcl(accountaccessEntitlementEntitlementPrincipalRoleToHclTerraform, true)(struct!.principalRole),
      isBlock: true,
      type: "list",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountaccessEntitlementEntitlement | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AccountaccessEntitlementEntitlement | cdktn.IResolvable | undefined) {
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
  private _principalRole = new AccountaccessEntitlementEntitlementPrincipalRoleList(this, "principal_role", false);
  public get principalRole() {
    return this._principalRole;
  }
  public putPrincipalRole(value: AccountaccessEntitlementEntitlementPrincipalRole[] | cdktn.IResolvable) {
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

export class AccountaccessEntitlementEntitlementList extends cdktn.ComplexList {
  public internalValue? : AccountaccessEntitlementEntitlement[] | cdktn.IResolvable

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
  public get(index: number): AccountaccessEntitlementEntitlementOutputReference {
    return new AccountaccessEntitlementEntitlementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement aws_accountaccess_entitlement}
*/
export class AccountaccessEntitlement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_accountaccess_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountaccessEntitlement to import
  * @param importFromId The id of the existing AccountaccessEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountaccessEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_accountaccess_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/accountaccess_entitlement aws_accountaccess_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountaccessEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: AccountaccessEntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_accountaccess_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.64.0',
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
    this._entitlement.internalValue = config.entitlement;
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

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
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

  // entitlement - computed: false, optional: true, required: false
  private _entitlement = new AccountaccessEntitlementEntitlementList(this, "entitlement", false);
  public get entitlement() {
    return this._entitlement;
  }
  public putEntitlement(value: AccountaccessEntitlementEntitlement[] | cdktn.IResolvable) {
    this._entitlement.internalValue = value;
  }
  public resetEntitlement() {
    this._entitlement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementInput() {
    return this._entitlement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktn.stringToTerraform(this._applicationArn),
      region: cdktn.stringToTerraform(this._region),
      entitlement: cdktn.listMapper(accountaccessEntitlementEntitlementToTerraform, true)(this._entitlement.internalValue),
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
      entitlement: {
        value: cdktn.listMapperHcl(accountaccessEntitlementEntitlementToHclTerraform, true)(this._entitlement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountaccessEntitlementEntitlementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
