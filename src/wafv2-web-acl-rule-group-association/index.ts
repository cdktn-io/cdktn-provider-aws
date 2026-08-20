/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Wafv2WebAclRuleGroupAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Override action for the rule group. Valid values are 'none' and 'count'. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#override_action Wafv2WebAclRuleGroupAssociation#override_action}
  */
  readonly overrideAction?: string;
  /**
  * Priority of the rule within the Web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#priority Wafv2WebAclRuleGroupAssociation#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#region Wafv2WebAclRuleGroupAssociation#region}
  */
  readonly region?: string;
  /**
  * Name of the rule to create in the Web ACL that references the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#rule_name Wafv2WebAclRuleGroupAssociation#rule_name}
  */
  readonly ruleName: string;
  /**
  * ARN of the Web ACL to associate the Rule Group with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#web_acl_arn Wafv2WebAclRuleGroupAssociation#web_acl_arn}
  */
  readonly webAclArn: string;
  /**
  * managed_rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#managed_rule_group Wafv2WebAclRuleGroupAssociation#managed_rule_group}
  */
  readonly managedRuleGroup?: Wafv2WebAclRuleGroupAssociationManagedRuleGroup[] | cdktn.IResolvable;
  /**
  * rule_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#rule_group_reference Wafv2WebAclRuleGroupAssociation#rule_group_reference}
  */
  readonly ruleGroupReference?: Wafv2WebAclRuleGroupAssociationRuleGroupReference[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#timeouts Wafv2WebAclRuleGroupAssociation#timeouts}
  */
  readonly timeouts?: Wafv2WebAclRuleGroupAssociationTimeouts;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#visibility_config Wafv2WebAclRuleGroupAssociation#visibility_config}
  */
  readonly visibilityConfig?: Wafv2WebAclRuleGroupAssociationVisibilityConfig[] | cdktn.IResolvable;
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields {
  /**
  * Identifiers of the address fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifiers Wafv2WebAclRuleGroupAssociation#identifiers}
  */
  readonly identifiers: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identifiers),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifiers = value.identifiers;
    }
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField {
  /**
  * Identifier of the email field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField {
  /**
  * Identifier of the password field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields {
  /**
  * Identifiers of the phone number fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifiers Wafv2WebAclRuleGroupAssociation#identifiers}
  */
  readonly identifiers: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identifiers),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifiers = value.identifiers;
    }
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField {
  /**
  * Identifier of the username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection {
  /**
  * Payload type for inspection, either JSON or FORM_ENCODED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#payload_type Wafv2WebAclRuleGroupAssociation#payload_type}
  */
  readonly payloadType: string;
  /**
  * address_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#address_fields Wafv2WebAclRuleGroupAssociation#address_fields}
  */
  readonly addressFields?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields[] | cdktn.IResolvable;
  /**
  * email_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#email_field Wafv2WebAclRuleGroupAssociation#email_field}
  */
  readonly emailField?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField[] | cdktn.IResolvable;
  /**
  * password_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#password_field Wafv2WebAclRuleGroupAssociation#password_field}
  */
  readonly passwordField?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable;
  /**
  * phone_number_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#phone_number_fields Wafv2WebAclRuleGroupAssociation#phone_number_fields}
  */
  readonly phoneNumberFields?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields[] | cdktn.IResolvable;
  /**
  * username_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#username_field Wafv2WebAclRuleGroupAssociation#username_field}
  */
  readonly usernameField?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    address_fields: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsToTerraform, true)(struct!.addressFields),
    email_field: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldToTerraform, true)(struct!.emailField),
    password_field: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldToTerraform, true)(struct!.passwordField),
    phone_number_fields: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsToTerraform, true)(struct!.phoneNumberFields),
    username_field: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldToTerraform, true)(struct!.usernameField),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_fields: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsToHclTerraform, true)(struct!.addressFields),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsList",
    },
    email_field: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldToHclTerraform, true)(struct!.emailField),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldList",
    },
    password_field: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldToHclTerraform, true)(struct!.passwordField),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldList",
    },
    phone_number_fields: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsToHclTerraform, true)(struct!.phoneNumberFields),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsList",
    },
    username_field: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldToHclTerraform, true)(struct!.usernameField),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._addressFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFields = this._addressFields?.internalValue;
    }
    if (this._emailField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailField = this._emailField?.internalValue;
    }
    if (this._passwordField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordField = this._passwordField?.internalValue;
    }
    if (this._phoneNumberFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumberFields = this._phoneNumberFields?.internalValue;
    }
    if (this._usernameField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadType = undefined;
      this._addressFields.internalValue = undefined;
      this._emailField.internalValue = undefined;
      this._passwordField.internalValue = undefined;
      this._phoneNumberFields.internalValue = undefined;
      this._usernameField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadType = value.payloadType;
      this._addressFields.internalValue = value.addressFields;
      this._emailField.internalValue = value.emailField;
      this._passwordField.internalValue = value.passwordField;
      this._phoneNumberFields.internalValue = value.phoneNumberFields;
      this._usernameField.internalValue = value.usernameField;
    }
  }

  // payload_type - computed: false, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // address_fields - computed: false, optional: true, required: false
  private _addressFields = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFieldsList(this, "address_fields", false);
  public get addressFields() {
    return this._addressFields;
  }
  public putAddressFields(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionAddressFields[] | cdktn.IResolvable) {
    this._addressFields.internalValue = value;
  }
  public resetAddressFields() {
    this._addressFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFieldsInput() {
    return this._addressFields.internalValue;
  }

  // email_field - computed: false, optional: true, required: false
  private _emailField = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailFieldList(this, "email_field", false);
  public get emailField() {
    return this._emailField;
  }
  public putEmailField(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionEmailField[] | cdktn.IResolvable) {
    this._emailField.internalValue = value;
  }
  public resetEmailField() {
    this._emailField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFieldInput() {
    return this._emailField.internalValue;
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordFieldList(this, "password_field", false);
  public get passwordField() {
    return this._passwordField;
  }
  public putPasswordField(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable) {
    this._passwordField.internalValue = value;
  }
  public resetPasswordField() {
    this._passwordField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField.internalValue;
  }

  // phone_number_fields - computed: false, optional: true, required: false
  private _phoneNumberFields = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFieldsList(this, "phone_number_fields", false);
  public get phoneNumberFields() {
    return this._phoneNumberFields;
  }
  public putPhoneNumberFields(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionPhoneNumberFields[] | cdktn.IResolvable) {
    this._phoneNumberFields.internalValue = value;
  }
  public resetPhoneNumberFields() {
    this._phoneNumberFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberFieldsInput() {
    return this._phoneNumberFields.internalValue;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameFieldList(this, "username_field", false);
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable) {
    this._usernameField.internalValue = value;
  }
  public resetUsernameField() {
    this._usernameField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_strings Wafv2WebAclRuleGroupAssociation#failure_strings}
  */
  readonly failureStrings: string[];
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_strings Wafv2WebAclRuleGroupAssociation#success_strings}
  */
  readonly successStrings: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureStrings),
    success_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successStrings),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureStrings = this._failureStrings;
    }
    if (this._successStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.successStrings = this._successStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureStrings = undefined;
      this._successStrings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureStrings = value.failureStrings;
      this._successStrings = value.successStrings;
    }
  }

  // failure_strings - computed: false, optional: false, required: true
  private _failureStrings?: string[]; 
  public get failureStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_strings'));
  }
  public set failureStrings(value: string[]) {
    this._failureStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureStringsInput() {
    return this._failureStrings;
  }

  // success_strings - computed: false, optional: false, required: true
  private _successStrings?: string[]; 
  public get successStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('success_strings'));
  }
  public set successStrings(value: string[]) {
    this._successStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successStringsInput() {
    return this._successStrings;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values Wafv2WebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Name of the HTTP header to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_values Wafv2WebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    name: cdktn.stringToTerraform(struct!.name),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._name = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._name = value.name;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
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

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values Wafv2WebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Identifier of the JSON field to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_values Wafv2WebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    identifier: cdktn.stringToTerraform(struct!.identifier),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._identifier = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._identifier = value.identifier;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode {
  /**
  * Status codes that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_codes Wafv2WebAclRuleGroupAssociation#failure_codes}
  */
  readonly failureCodes: number[];
  /**
  * Status codes that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_codes Wafv2WebAclRuleGroupAssociation#success_codes}
  */
  readonly successCodes: number[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.failureCodes),
    success_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.successCodes),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.failureCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    success_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.successCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCodes = this._failureCodes;
    }
    if (this._successCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCodes = this._successCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCodes = undefined;
      this._successCodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCodes = value.failureCodes;
      this._successCodes = value.successCodes;
    }
  }

  // failure_codes - computed: false, optional: false, required: true
  private _failureCodes?: number[]; 
  public get failureCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('failure_codes')));
  }
  public set failureCodes(value: number[]) {
    this._failureCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodesInput() {
    return this._failureCodes;
  }

  // success_codes - computed: false, optional: false, required: true
  private _successCodes?: number[]; 
  public get successCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('success_codes')));
  }
  public set successCodes(value: number[]) {
    this._successCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successCodesInput() {
    return this._successCodes;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection {
  /**
  * body_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#body_contains Wafv2WebAclRuleGroupAssociation#body_contains}
  */
  readonly bodyContains?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#header Wafv2WebAclRuleGroupAssociation#header}
  */
  readonly header?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader[] | cdktn.IResolvable;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#json Wafv2WebAclRuleGroupAssociation#json}
  */
  readonly json?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson[] | cdktn.IResolvable;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#status_code Wafv2WebAclRuleGroupAssociation#status_code}
  */
  readonly statusCode?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_contains: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsToTerraform, true)(struct!.bodyContains),
    header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderToTerraform, true)(struct!.header),
    json: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonToTerraform, true)(struct!.json),
    status_code: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeToTerraform, true)(struct!.statusCode),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_contains: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsToHclTerraform, true)(struct!.bodyContains),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsList",
    },
    header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderList",
    },
    json: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonList",
    },
    status_code: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeToHclTerraform, true)(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyContains = this._bodyContains?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = undefined;
      this._header.internalValue = undefined;
      this._json.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = value.bodyContains;
      this._header.internalValue = value.header;
      this._json.internalValue = value.json;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // body_contains - computed: false, optional: true, required: false
  private _bodyContains = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContainsList(this, "body_contains", false);
  public get bodyContains() {
    return this._bodyContains;
  }
  public putBodyContains(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable) {
    this._bodyContains.internalValue = value;
  }
  public resetBodyContains() {
    this._bodyContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyContainsInput() {
    return this._bodyContains.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionJson[] | cdktn.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCodeList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet {
  /**
  * Path to the account creation endpoint on the protected website
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#creation_path Wafv2WebAclRuleGroupAssociation#creation_path}
  */
  readonly creationPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#enable_regex_in_path Wafv2WebAclRuleGroupAssociation#enable_regex_in_path}
  */
  readonly enableRegexInPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#registration_page_path Wafv2WebAclRuleGroupAssociation#registration_page_path}
  */
  readonly registrationPagePath: string;
  /**
  * request_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#request_inspection Wafv2WebAclRuleGroupAssociation#request_inspection}
  */
  readonly requestInspection?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection[] | cdktn.IResolvable;
  /**
  * response_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_inspection Wafv2WebAclRuleGroupAssociation#response_inspection}
  */
  readonly responseInspection?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    creation_path: cdktn.stringToTerraform(struct!.creationPath),
    enable_regex_in_path: cdktn.booleanToTerraform(struct!.enableRegexInPath),
    registration_page_path: cdktn.stringToTerraform(struct!.registrationPagePath),
    request_inspection: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionToTerraform, true)(struct!.requestInspection),
    response_inspection: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionToTerraform, true)(struct!.responseInspection),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    creation_path: {
      value: cdktn.stringToHclTerraform(struct!.creationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_regex_in_path: {
      value: cdktn.booleanToHclTerraform(struct!.enableRegexInPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration_page_path: {
      value: cdktn.stringToHclTerraform(struct!.registrationPagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_inspection: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionToHclTerraform, true)(struct!.requestInspection),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionList",
    },
    response_inspection: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionToHclTerraform, true)(struct!.responseInspection),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationPath = this._creationPath;
    }
    if (this._enableRegexInPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRegexInPath = this._enableRegexInPath;
    }
    if (this._registrationPagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationPagePath = this._registrationPagePath;
    }
    if (this._requestInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInspection = this._requestInspection?.internalValue;
    }
    if (this._responseInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseInspection = this._responseInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationPath = undefined;
      this._enableRegexInPath = undefined;
      this._registrationPagePath = undefined;
      this._requestInspection.internalValue = undefined;
      this._responseInspection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationPath = value.creationPath;
      this._enableRegexInPath = value.enableRegexInPath;
      this._registrationPagePath = value.registrationPagePath;
      this._requestInspection.internalValue = value.requestInspection;
      this._responseInspection.internalValue = value.responseInspection;
    }
  }

  // creation_path - computed: false, optional: false, required: true
  private _creationPath?: string; 
  public get creationPath() {
    return this.getStringAttribute('creation_path');
  }
  public set creationPath(value: string) {
    this._creationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPathInput() {
    return this._creationPath;
  }

  // enable_regex_in_path - computed: true, optional: true, required: false
  private _enableRegexInPath?: boolean | cdktn.IResolvable; 
  public get enableRegexInPath() {
    return this.getBooleanAttribute('enable_regex_in_path');
  }
  public set enableRegexInPath(value: boolean | cdktn.IResolvable) {
    this._enableRegexInPath = value;
  }
  public resetEnableRegexInPath() {
    this._enableRegexInPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexInPathInput() {
    return this._enableRegexInPath;
  }

  // registration_page_path - computed: false, optional: false, required: true
  private _registrationPagePath?: string; 
  public get registrationPagePath() {
    return this.getStringAttribute('registration_page_path');
  }
  public set registrationPagePath(value: string) {
    this._registrationPagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPagePathInput() {
    return this._registrationPagePath;
  }

  // request_inspection - computed: false, optional: true, required: false
  private _requestInspection = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspectionList(this, "request_inspection", false);
  public get requestInspection() {
    return this._requestInspection;
  }
  public putRequestInspection(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetRequestInspection[] | cdktn.IResolvable) {
    this._requestInspection.internalValue = value;
  }
  public resetRequestInspection() {
    this._requestInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInspectionInput() {
    return this._requestInspection.internalValue;
  }

  // response_inspection - computed: false, optional: true, required: false
  private _responseInspection = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspectionList(this, "response_inspection", false);
  public get responseInspection() {
    return this._responseInspection;
  }
  public putResponseInspection(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetResponseInspection[] | cdktn.IResolvable) {
    this._responseInspection.internalValue = value;
  }
  public resetResponseInspection() {
    this._responseInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInspectionInput() {
    return this._responseInspection.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#regex_string Wafv2WebAclRuleGroupAssociation#regex_string}
  */
  readonly regexString?: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_string: cdktn.stringToTerraform(struct!.regexString),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_string: {
      value: cdktn.stringToHclTerraform(struct!.regexString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexString !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexString = this._regexString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexString = value.regexString;
    }
  }

  // regex_string - computed: false, optional: true, required: false
  private _regexString?: string; 
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
  public set regexString(value: string) {
    this._regexString = value;
  }
  public resetRegexString() {
    this._regexString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexStringInput() {
    return this._regexString;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#sensitivity Wafv2WebAclRuleGroupAssociation#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#usage_of_action Wafv2WebAclRuleGroupAssociation#usage_of_action}
  */
  readonly usageOfAction: string;
  /**
  * exempt_uri_regular_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#exempt_uri_regular_expression Wafv2WebAclRuleGroupAssociation#exempt_uri_regular_expression}
  */
  readonly exemptUriRegularExpression?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sensitivity: cdktn.stringToTerraform(struct!.sensitivity),
    usage_of_action: cdktn.stringToTerraform(struct!.usageOfAction),
    exempt_uri_regular_expression: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionToTerraform, true)(struct!.exemptUriRegularExpression),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sensitivity: {
      value: cdktn.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_of_action: {
      value: cdktn.stringToHclTerraform(struct!.usageOfAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempt_uri_regular_expression: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionToHclTerraform, true)(struct!.exemptUriRegularExpression),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._usageOfAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageOfAction = this._usageOfAction;
    }
    if (this._exemptUriRegularExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptUriRegularExpression = this._exemptUriRegularExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivity = undefined;
      this._usageOfAction = undefined;
      this._exemptUriRegularExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivity = value.sensitivity;
      this._usageOfAction = value.usageOfAction;
      this._exemptUriRegularExpression.internalValue = value.exemptUriRegularExpression;
    }
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // usage_of_action - computed: false, optional: false, required: true
  private _usageOfAction?: string; 
  public get usageOfAction() {
    return this.getStringAttribute('usage_of_action');
  }
  public set usageOfAction(value: string) {
    this._usageOfAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageOfActionInput() {
    return this._usageOfAction;
  }

  // exempt_uri_regular_expression - computed: false, optional: true, required: false
  private _exemptUriRegularExpression = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpressionList(this, "exempt_uri_regular_expression", false);
  public get exemptUriRegularExpression() {
    return this._exemptUriRegularExpression;
  }
  public putExemptUriRegularExpression(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeExemptUriRegularExpression[] | cdktn.IResolvable) {
    this._exemptUriRegularExpression.internalValue = value;
  }
  public resetExemptUriRegularExpression() {
    this._exemptUriRegularExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptUriRegularExpressionInput() {
    return this._exemptUriRegularExpression.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig {
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#challenge Wafv2WebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    challenge: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeToTerraform, true)(struct!.challenge),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    challenge: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._challenge.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._challenge.internalValue = value.challenge;
    }
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallengeList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigChallenge[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#sensitivity_to_block Wafv2WebAclRuleGroupAssociation#sensitivity_to_block}
  */
  readonly sensitivityToBlock?: string;
  /**
  * client_side_action_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#client_side_action_config Wafv2WebAclRuleGroupAssociation#client_side_action_config}
  */
  readonly clientSideActionConfig?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sensitivity_to_block: cdktn.stringToTerraform(struct!.sensitivityToBlock),
    client_side_action_config: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigToTerraform, true)(struct!.clientSideActionConfig),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sensitivity_to_block: {
      value: cdktn.stringToHclTerraform(struct!.sensitivityToBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_side_action_config: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigToHclTerraform, true)(struct!.clientSideActionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivityToBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityToBlock = this._sensitivityToBlock;
    }
    if (this._clientSideActionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSideActionConfig = this._clientSideActionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivityToBlock = undefined;
      this._clientSideActionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivityToBlock = value.sensitivityToBlock;
      this._clientSideActionConfig.internalValue = value.clientSideActionConfig;
    }
  }

  // sensitivity_to_block - computed: true, optional: true, required: false
  private _sensitivityToBlock?: string; 
  public get sensitivityToBlock() {
    return this.getStringAttribute('sensitivity_to_block');
  }
  public set sensitivityToBlock(value: string) {
    this._sensitivityToBlock = value;
  }
  public resetSensitivityToBlock() {
    this._sensitivityToBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityToBlockInput() {
    return this._sensitivityToBlock;
  }

  // client_side_action_config - computed: false, optional: true, required: false
  private _clientSideActionConfig = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfigList(this, "client_side_action_config", false);
  public get clientSideActionConfig() {
    return this._clientSideActionConfig;
  }
  public putClientSideActionConfig(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetClientSideActionConfig[] | cdktn.IResolvable) {
    this._clientSideActionConfig.internalValue = value;
  }
  public resetClientSideActionConfig() {
    this._clientSideActionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideActionConfigInput() {
    return this._clientSideActionConfig.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField {
  /**
  * Identifier of the password field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField {
  /**
  * Identifier of the username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection {
  /**
  * Payload type for inspection, either JSON or FORM_ENCODED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#payload_type Wafv2WebAclRuleGroupAssociation#payload_type}
  */
  readonly payloadType: string;
  /**
  * password_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#password_field Wafv2WebAclRuleGroupAssociation#password_field}
  */
  readonly passwordField?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable;
  /**
  * username_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#username_field Wafv2WebAclRuleGroupAssociation#username_field}
  */
  readonly usernameField?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    password_field: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldToTerraform, true)(struct!.passwordField),
    username_field: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldToTerraform, true)(struct!.usernameField),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_field: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldToHclTerraform, true)(struct!.passwordField),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldList",
    },
    username_field: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldToHclTerraform, true)(struct!.usernameField),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._passwordField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordField = this._passwordField?.internalValue;
    }
    if (this._usernameField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadType = undefined;
      this._passwordField.internalValue = undefined;
      this._usernameField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadType = value.payloadType;
      this._passwordField.internalValue = value.passwordField;
      this._usernameField.internalValue = value.usernameField;
    }
  }

  // payload_type - computed: false, optional: false, required: true
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordFieldList(this, "password_field", false);
  public get passwordField() {
    return this._passwordField;
  }
  public putPasswordField(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionPasswordField[] | cdktn.IResolvable) {
    this._passwordField.internalValue = value;
  }
  public resetPasswordField() {
    this._passwordField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField.internalValue;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameFieldList(this, "username_field", false);
  public get usernameField() {
    return this._usernameField;
  }
  public putUsernameField(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionUsernameField[] | cdktn.IResolvable) {
    this._usernameField.internalValue = value;
  }
  public resetUsernameField() {
    this._usernameField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_strings Wafv2WebAclRuleGroupAssociation#failure_strings}
  */
  readonly failureStrings: string[];
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_strings Wafv2WebAclRuleGroupAssociation#success_strings}
  */
  readonly successStrings: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureStrings),
    success_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successStrings),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successStrings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureStrings = this._failureStrings;
    }
    if (this._successStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.successStrings = this._successStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureStrings = undefined;
      this._successStrings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureStrings = value.failureStrings;
      this._successStrings = value.successStrings;
    }
  }

  // failure_strings - computed: false, optional: false, required: true
  private _failureStrings?: string[]; 
  public get failureStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_strings'));
  }
  public set failureStrings(value: string[]) {
    this._failureStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureStringsInput() {
    return this._failureStrings;
  }

  // success_strings - computed: false, optional: false, required: true
  private _successStrings?: string[]; 
  public get successStrings() {
    return cdktn.Fn.tolist(this.getListAttribute('success_strings'));
  }
  public set successStrings(value: string[]) {
    this._successStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successStringsInput() {
    return this._successStrings;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values Wafv2WebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Name of the HTTP header to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_values Wafv2WebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    name: cdktn.stringToTerraform(struct!.name),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._name = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._name = value.name;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
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

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson {
  /**
  * Strings that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_values Wafv2WebAclRuleGroupAssociation#failure_values}
  */
  readonly failureValues: string[];
  /**
  * Identifier of the JSON field to inspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#identifier Wafv2WebAclRuleGroupAssociation#identifier}
  */
  readonly identifier: string;
  /**
  * Strings that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_values Wafv2WebAclRuleGroupAssociation#success_values}
  */
  readonly successValues: string[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failureValues),
    identifier: cdktn.stringToTerraform(struct!.identifier),
    success_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.successValues),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failureValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.successValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureValues = this._failureValues;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._successValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.successValues = this._successValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureValues = undefined;
      this._identifier = undefined;
      this._successValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureValues = value.failureValues;
      this._identifier = value.identifier;
      this._successValues = value.successValues;
    }
  }

  // failure_values - computed: false, optional: false, required: true
  private _failureValues?: string[]; 
  public get failureValues() {
    return cdktn.Fn.tolist(this.getListAttribute('failure_values'));
  }
  public set failureValues(value: string[]) {
    this._failureValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureValuesInput() {
    return this._failureValues;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // success_values - computed: false, optional: false, required: true
  private _successValues?: string[]; 
  public get successValues() {
    return cdktn.Fn.tolist(this.getListAttribute('success_values'));
  }
  public set successValues(value: string[]) {
    this._successValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successValuesInput() {
    return this._successValues;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode {
  /**
  * Status codes that indicate a failed login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#failure_codes Wafv2WebAclRuleGroupAssociation#failure_codes}
  */
  readonly failureCodes: number[];
  /**
  * Status codes that indicate a successful login or account creation attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#success_codes Wafv2WebAclRuleGroupAssociation#success_codes}
  */
  readonly successCodes: number[];
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.failureCodes),
    success_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.successCodes),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.failureCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    success_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.successCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCodes = this._failureCodes;
    }
    if (this._successCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCodes = this._successCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCodes = undefined;
      this._successCodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCodes = value.failureCodes;
      this._successCodes = value.successCodes;
    }
  }

  // failure_codes - computed: false, optional: false, required: true
  private _failureCodes?: number[]; 
  public get failureCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('failure_codes')));
  }
  public set failureCodes(value: number[]) {
    this._failureCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCodesInput() {
    return this._failureCodes;
  }

  // success_codes - computed: false, optional: false, required: true
  private _successCodes?: number[]; 
  public get successCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('success_codes')));
  }
  public set successCodes(value: number[]) {
    this._successCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successCodesInput() {
    return this._successCodes;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection {
  /**
  * body_contains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#body_contains Wafv2WebAclRuleGroupAssociation#body_contains}
  */
  readonly bodyContains?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#header Wafv2WebAclRuleGroupAssociation#header}
  */
  readonly header?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader[] | cdktn.IResolvable;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#json Wafv2WebAclRuleGroupAssociation#json}
  */
  readonly json?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson[] | cdktn.IResolvable;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#status_code Wafv2WebAclRuleGroupAssociation#status_code}
  */
  readonly statusCode?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_contains: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsToTerraform, true)(struct!.bodyContains),
    header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderToTerraform, true)(struct!.header),
    json: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonToTerraform, true)(struct!.json),
    status_code: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeToTerraform, true)(struct!.statusCode),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_contains: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsToHclTerraform, true)(struct!.bodyContains),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsList",
    },
    header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderList",
    },
    json: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonList",
    },
    status_code: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeToHclTerraform, true)(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyContains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyContains = this._bodyContains?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = undefined;
      this._header.internalValue = undefined;
      this._json.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyContains.internalValue = value.bodyContains;
      this._header.internalValue = value.header;
      this._json.internalValue = value.json;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // body_contains - computed: false, optional: true, required: false
  private _bodyContains = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContainsList(this, "body_contains", false);
  public get bodyContains() {
    return this._bodyContains;
  }
  public putBodyContains(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionBodyContains[] | cdktn.IResolvable) {
    this._bodyContains.internalValue = value;
  }
  public resetBodyContains() {
    this._bodyContains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyContainsInput() {
    return this._bodyContains.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionJson[] | cdktn.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCodeList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionStatusCode[] | cdktn.IResolvable) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#enable_regex_in_path Wafv2WebAclRuleGroupAssociation#enable_regex_in_path}
  */
  readonly enableRegexInPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#login_path Wafv2WebAclRuleGroupAssociation#login_path}
  */
  readonly loginPath: string;
  /**
  * request_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#request_inspection Wafv2WebAclRuleGroupAssociation#request_inspection}
  */
  readonly requestInspection?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection[] | cdktn.IResolvable;
  /**
  * response_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_inspection Wafv2WebAclRuleGroupAssociation#response_inspection}
  */
  readonly responseInspection?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_regex_in_path: cdktn.booleanToTerraform(struct!.enableRegexInPath),
    login_path: cdktn.stringToTerraform(struct!.loginPath),
    request_inspection: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionToTerraform, true)(struct!.requestInspection),
    response_inspection: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionToTerraform, true)(struct!.responseInspection),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_regex_in_path: {
      value: cdktn.booleanToHclTerraform(struct!.enableRegexInPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_path: {
      value: cdktn.stringToHclTerraform(struct!.loginPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_inspection: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionToHclTerraform, true)(struct!.requestInspection),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionList",
    },
    response_inspection: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionToHclTerraform, true)(struct!.responseInspection),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRegexInPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRegexInPath = this._enableRegexInPath;
    }
    if (this._loginPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPath = this._loginPath;
    }
    if (this._requestInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInspection = this._requestInspection?.internalValue;
    }
    if (this._responseInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseInspection = this._responseInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRegexInPath = undefined;
      this._loginPath = undefined;
      this._requestInspection.internalValue = undefined;
      this._responseInspection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRegexInPath = value.enableRegexInPath;
      this._loginPath = value.loginPath;
      this._requestInspection.internalValue = value.requestInspection;
      this._responseInspection.internalValue = value.responseInspection;
    }
  }

  // enable_regex_in_path - computed: true, optional: true, required: false
  private _enableRegexInPath?: boolean | cdktn.IResolvable; 
  public get enableRegexInPath() {
    return this.getBooleanAttribute('enable_regex_in_path');
  }
  public set enableRegexInPath(value: boolean | cdktn.IResolvable) {
    this._enableRegexInPath = value;
  }
  public resetEnableRegexInPath() {
    this._enableRegexInPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexInPathInput() {
    return this._enableRegexInPath;
  }

  // login_path - computed: false, optional: false, required: true
  private _loginPath?: string; 
  public get loginPath() {
    return this.getStringAttribute('login_path');
  }
  public set loginPath(value: string) {
    this._loginPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPathInput() {
    return this._loginPath;
  }

  // request_inspection - computed: false, optional: true, required: false
  private _requestInspection = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspectionList(this, "request_inspection", false);
  public get requestInspection() {
    return this._requestInspection;
  }
  public putRequestInspection(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetRequestInspection[] | cdktn.IResolvable) {
    this._requestInspection.internalValue = value;
  }
  public resetRequestInspection() {
    this._requestInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInspectionInput() {
    return this._requestInspection.internalValue;
  }

  // response_inspection - computed: false, optional: true, required: false
  private _responseInspection = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspectionList(this, "response_inspection", false);
  public get responseInspection() {
    return this._responseInspection;
  }
  public putResponseInspection(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetResponseInspection[] | cdktn.IResolvable) {
    this._responseInspection.internalValue = value;
  }
  public resetResponseInspection() {
    this._responseInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInspectionInput() {
    return this._responseInspection.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#enable_machine_learning Wafv2WebAclRuleGroupAssociation#enable_machine_learning}
  */
  readonly enableMachineLearning?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#inspection_level Wafv2WebAclRuleGroupAssociation#inspection_level}
  */
  readonly inspectionLevel: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_machine_learning: cdktn.booleanToTerraform(struct!.enableMachineLearning),
    inspection_level: cdktn.stringToTerraform(struct!.inspectionLevel),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_machine_learning: {
      value: cdktn.booleanToHclTerraform(struct!.enableMachineLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspection_level: {
      value: cdktn.stringToHclTerraform(struct!.inspectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMachineLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMachineLearning = this._enableMachineLearning;
    }
    if (this._inspectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLevel = this._inspectionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMachineLearning = undefined;
      this._inspectionLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMachineLearning = value.enableMachineLearning;
      this._inspectionLevel = value.inspectionLevel;
    }
  }

  // enable_machine_learning - computed: true, optional: true, required: false
  private _enableMachineLearning?: boolean | cdktn.IResolvable; 
  public get enableMachineLearning() {
    return this.getBooleanAttribute('enable_machine_learning');
  }
  public set enableMachineLearning(value: boolean | cdktn.IResolvable) {
    this._enableMachineLearning = value;
  }
  public resetEnableMachineLearning() {
    this._enableMachineLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineLearningInput() {
    return this._enableMachineLearning;
  }

  // inspection_level - computed: false, optional: false, required: true
  private _inspectionLevel?: string; 
  public get inspectionLevel() {
    return this.getStringAttribute('inspection_level');
  }
  public set inspectionLevel(value: string) {
    this._inspectionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLevelInput() {
    return this._inspectionLevel;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs {
  /**
  * aws_managed_rules_acfp_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_acfp_rule_set Wafv2WebAclRuleGroupAssociation#aws_managed_rules_acfp_rule_set}
  */
  readonly awsManagedRulesAcfpRuleSet?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_anti_ddos_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_anti_ddos_rule_set Wafv2WebAclRuleGroupAssociation#aws_managed_rules_anti_ddos_rule_set}
  */
  readonly awsManagedRulesAntiDdosRuleSet?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_atp_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_atp_rule_set Wafv2WebAclRuleGroupAssociation#aws_managed_rules_atp_rule_set}
  */
  readonly awsManagedRulesAtpRuleSet?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet[] | cdktn.IResolvable;
  /**
  * aws_managed_rules_bot_control_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#aws_managed_rules_bot_control_rule_set Wafv2WebAclRuleGroupAssociation#aws_managed_rules_bot_control_rule_set}
  */
  readonly awsManagedRulesBotControlRuleSet?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_managed_rules_acfp_rule_set: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetToTerraform, true)(struct!.awsManagedRulesAcfpRuleSet),
    aws_managed_rules_anti_ddos_rule_set: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetToTerraform, true)(struct!.awsManagedRulesAntiDdosRuleSet),
    aws_managed_rules_atp_rule_set: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetToTerraform, true)(struct!.awsManagedRulesAtpRuleSet),
    aws_managed_rules_bot_control_rule_set: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetToTerraform, true)(struct!.awsManagedRulesBotControlRuleSet),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_managed_rules_acfp_rule_set: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetToHclTerraform, true)(struct!.awsManagedRulesAcfpRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetList",
    },
    aws_managed_rules_anti_ddos_rule_set: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetToHclTerraform, true)(struct!.awsManagedRulesAntiDdosRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetList",
    },
    aws_managed_rules_atp_rule_set: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetToHclTerraform, true)(struct!.awsManagedRulesAtpRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetList",
    },
    aws_managed_rules_bot_control_rule_set: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetToHclTerraform, true)(struct!.awsManagedRulesBotControlRuleSet),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsManagedRulesAcfpRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAcfpRuleSet = this._awsManagedRulesAcfpRuleSet?.internalValue;
    }
    if (this._awsManagedRulesAntiDdosRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAntiDdosRuleSet = this._awsManagedRulesAntiDdosRuleSet?.internalValue;
    }
    if (this._awsManagedRulesAtpRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesAtpRuleSet = this._awsManagedRulesAtpRuleSet?.internalValue;
    }
    if (this._awsManagedRulesBotControlRuleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedRulesBotControlRuleSet = this._awsManagedRulesBotControlRuleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsManagedRulesAcfpRuleSet.internalValue = undefined;
      this._awsManagedRulesAntiDdosRuleSet.internalValue = undefined;
      this._awsManagedRulesAtpRuleSet.internalValue = undefined;
      this._awsManagedRulesBotControlRuleSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsManagedRulesAcfpRuleSet.internalValue = value.awsManagedRulesAcfpRuleSet;
      this._awsManagedRulesAntiDdosRuleSet.internalValue = value.awsManagedRulesAntiDdosRuleSet;
      this._awsManagedRulesAtpRuleSet.internalValue = value.awsManagedRulesAtpRuleSet;
      this._awsManagedRulesBotControlRuleSet.internalValue = value.awsManagedRulesBotControlRuleSet;
    }
  }

  // aws_managed_rules_acfp_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAcfpRuleSet = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSetList(this, "aws_managed_rules_acfp_rule_set", false);
  public get awsManagedRulesAcfpRuleSet() {
    return this._awsManagedRulesAcfpRuleSet;
  }
  public putAwsManagedRulesAcfpRuleSet(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAcfpRuleSet[] | cdktn.IResolvable) {
    this._awsManagedRulesAcfpRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAcfpRuleSet() {
    this._awsManagedRulesAcfpRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAcfpRuleSetInput() {
    return this._awsManagedRulesAcfpRuleSet.internalValue;
  }

  // aws_managed_rules_anti_ddos_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAntiDdosRuleSet = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSetList(this, "aws_managed_rules_anti_ddos_rule_set", false);
  public get awsManagedRulesAntiDdosRuleSet() {
    return this._awsManagedRulesAntiDdosRuleSet;
  }
  public putAwsManagedRulesAntiDdosRuleSet(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAntiDdosRuleSet[] | cdktn.IResolvable) {
    this._awsManagedRulesAntiDdosRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAntiDdosRuleSet() {
    this._awsManagedRulesAntiDdosRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAntiDdosRuleSetInput() {
    return this._awsManagedRulesAntiDdosRuleSet.internalValue;
  }

  // aws_managed_rules_atp_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesAtpRuleSet = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSetList(this, "aws_managed_rules_atp_rule_set", false);
  public get awsManagedRulesAtpRuleSet() {
    return this._awsManagedRulesAtpRuleSet;
  }
  public putAwsManagedRulesAtpRuleSet(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesAtpRuleSet[] | cdktn.IResolvable) {
    this._awsManagedRulesAtpRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesAtpRuleSet() {
    this._awsManagedRulesAtpRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesAtpRuleSetInput() {
    return this._awsManagedRulesAtpRuleSet.internalValue;
  }

  // aws_managed_rules_bot_control_rule_set - computed: false, optional: true, required: false
  private _awsManagedRulesBotControlRuleSet = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSetList(this, "aws_managed_rules_bot_control_rule_set", false);
  public get awsManagedRulesBotControlRuleSet() {
    return this._awsManagedRulesBotControlRuleSet;
  }
  public putAwsManagedRulesBotControlRuleSet(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsAwsManagedRulesBotControlRuleSet[] | cdktn.IResolvable) {
    this._awsManagedRulesBotControlRuleSet.internalValue = value;
  }
  public resetAwsManagedRulesBotControlRuleSet() {
    this._awsManagedRulesBotControlRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedRulesBotControlRuleSetInput() {
    return this._awsManagedRulesBotControlRuleSet.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response_body_key Wafv2WebAclRuleGroupAssociation#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_code Wafv2WebAclRuleGroupAssociation#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_header Wafv2WebAclRuleGroupAssociation#response_header}
  */
  readonly responseHeader?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToTerraform, true)(struct!.responseHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response Wafv2WebAclRuleGroupAssociation#custom_response}
  */
  readonly customResponse?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseToTerraform, true)(struct!.customResponse),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseToHclTerraform, true)(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponseList(this, "custom_response", false);
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#allow Wafv2WebAclRuleGroupAssociation#allow}
  */
  readonly allow?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#block Wafv2WebAclRuleGroupAssociation#block}
  */
  readonly block?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#captcha Wafv2WebAclRuleGroupAssociation#captcha}
  */
  readonly captcha?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#challenge Wafv2WebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#count Wafv2WebAclRuleGroupAssociation#count}
  */
  readonly count?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowToTerraform, true)(struct!.allow),
    block: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockToTerraform, true)(struct!.block),
    captcha: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaToTerraform, true)(struct!.captcha),
    challenge: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeToTerraform, true)(struct!.challenge),
    count: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountToTerraform, true)(struct!.count),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowList",
    },
    block: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockToHclTerraform, true)(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockList",
    },
    captcha: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaToHclTerraform, true)(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaList",
    },
    challenge: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeList",
    },
    count: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountToHclTerraform, true)(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlockList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptchaList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallengeList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCountList(this, "count", false);
  public get count() {
    return this._count;
  }
  public putCount(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseCount[] | cdktn.IResolvable) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride {
  /**
  * Name of the rule to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * action_to_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#action_to_use Wafv2WebAclRuleGroupAssociation#action_to_use}
  */
  readonly actionToUse?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action_to_use: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseToTerraform, true)(struct!.actionToUse),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride | cdktn.IResolvable): any {
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
    action_to_use: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseToHclTerraform, true)(struct!.actionToUse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actionToUse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionToUse = this._actionToUse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actionToUse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actionToUse.internalValue = value.actionToUse;
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

  // action_to_use - computed: false, optional: true, required: false
  private _actionToUse = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUseList(this, "action_to_use", false);
  public get actionToUse() {
    return this._actionToUse;
  }
  public putActionToUse(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideActionToUse[] | cdktn.IResolvable) {
    this._actionToUse.internalValue = value;
  }
  public resetActionToUse() {
    this._actionToUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToUseInput() {
    return this._actionToUse.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationManagedRuleGroup {
  /**
  * Name of the managed rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Name of the managed rule group vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#vendor_name Wafv2WebAclRuleGroupAssociation#vendor_name}
  */
  readonly vendorName: string;
  /**
  * Version of the managed rule group. Omit this to use the default version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#version Wafv2WebAclRuleGroupAssociation#version}
  */
  readonly version?: string;
  /**
  * managed_rule_group_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#managed_rule_group_configs Wafv2WebAclRuleGroupAssociation#managed_rule_group_configs}
  */
  readonly managedRuleGroupConfigs?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs[] | cdktn.IResolvable;
  /**
  * rule_action_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#rule_action_override Wafv2WebAclRuleGroupAssociation#rule_action_override}
  */
  readonly ruleActionOverride?: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationManagedRuleGroupToTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    vendor_name: cdktn.stringToTerraform(struct!.vendorName),
    version: cdktn.stringToTerraform(struct!.version),
    managed_rule_group_configs: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsToTerraform, true)(struct!.managedRuleGroupConfigs),
    rule_action_override: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideToTerraform, true)(struct!.ruleActionOverride),
  }
}


export function wafv2WebAclRuleGroupAssociationManagedRuleGroupToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationManagedRuleGroup | cdktn.IResolvable): any {
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
    vendor_name: {
      value: cdktn.stringToHclTerraform(struct!.vendorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_rule_group_configs: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsToHclTerraform, true)(struct!.managedRuleGroupConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsList",
    },
    rule_action_override: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideToHclTerraform, true)(struct!.ruleActionOverride),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationManagedRuleGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vendorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorName = this._vendorName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._managedRuleGroupConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleGroupConfigs = this._managedRuleGroupConfigs?.internalValue;
    }
    if (this._ruleActionOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionOverride = this._ruleActionOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vendorName = undefined;
      this._version = undefined;
      this._managedRuleGroupConfigs.internalValue = undefined;
      this._ruleActionOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vendorName = value.vendorName;
      this._version = value.version;
      this._managedRuleGroupConfigs.internalValue = value.managedRuleGroupConfigs;
      this._ruleActionOverride.internalValue = value.ruleActionOverride;
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

  // vendor_name - computed: false, optional: false, required: true
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // managed_rule_group_configs - computed: false, optional: true, required: false
  private _managedRuleGroupConfigs = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigsList(this, "managed_rule_group_configs", false);
  public get managedRuleGroupConfigs() {
    return this._managedRuleGroupConfigs;
  }
  public putManagedRuleGroupConfigs(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupManagedRuleGroupConfigs[] | cdktn.IResolvable) {
    this._managedRuleGroupConfigs.internalValue = value;
  }
  public resetManagedRuleGroupConfigs() {
    this._managedRuleGroupConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupConfigsInput() {
    return this._managedRuleGroupConfigs.internalValue;
  }

  // rule_action_override - computed: false, optional: true, required: false
  private _ruleActionOverride = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverrideList(this, "rule_action_override", false);
  public get ruleActionOverride() {
    return this._ruleActionOverride;
  }
  public putRuleActionOverride(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroupRuleActionOverride[] | cdktn.IResolvable) {
    this._ruleActionOverride.internalValue = value;
  }
  public resetRuleActionOverride() {
    this._ruleActionOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionOverrideInput() {
    return this._ruleActionOverride.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationManagedRuleGroupList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationManagedRuleGroup[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationManagedRuleGroupOutputReference {
    return new Wafv2WebAclRuleGroupAssociationManagedRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response_body_key Wafv2WebAclRuleGroupAssociation#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_code Wafv2WebAclRuleGroupAssociation#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#response_header Wafv2WebAclRuleGroupAssociation#response_header}
  */
  readonly responseHeader?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToTerraform, true)(struct!.responseHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeaderList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseResponseHeader[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_response Wafv2WebAclRuleGroupAssociation#custom_response}
  */
  readonly customResponse?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseToTerraform, true)(struct!.customResponse),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseToHclTerraform, true)(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponseList(this, "custom_response", false);
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockCustomResponse[] | cdktn.IResolvable) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#value Wafv2WebAclRuleGroupAssociation#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#insert_header Wafv2WebAclRuleGroupAssociation#insert_header}
  */
  readonly insertHeader?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: true, required: false
  private _insertHeader = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingInsertHeader[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  public resetInsertHeader() {
    this._insertHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#custom_request_handling Wafv2WebAclRuleGroupAssociation#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingToTerraform, true)(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingToHclTerraform, true)(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountCustomRequestHandling[] | cdktn.IResolvable) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#allow Wafv2WebAclRuleGroupAssociation#allow}
  */
  readonly allow?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#block Wafv2WebAclRuleGroupAssociation#block}
  */
  readonly block?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#captcha Wafv2WebAclRuleGroupAssociation#captcha}
  */
  readonly captcha?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#challenge Wafv2WebAclRuleGroupAssociation#challenge}
  */
  readonly challenge?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#count Wafv2WebAclRuleGroupAssociation#count}
  */
  readonly count?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowToTerraform, true)(struct!.allow),
    block: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockToTerraform, true)(struct!.block),
    captcha: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaToTerraform, true)(struct!.captcha),
    challenge: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeToTerraform, true)(struct!.challenge),
    count: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountToTerraform, true)(struct!.count),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowList",
    },
    block: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockToHclTerraform, true)(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockList",
    },
    captcha: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaToHclTerraform, true)(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaList",
    },
    challenge: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeToHclTerraform, true)(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeList",
    },
    count: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountToHclTerraform, true)(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseAllow[] | cdktn.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlockList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseBlock[] | cdktn.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptchaList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCaptcha[] | cdktn.IResolvable) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallengeList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseChallenge[] | cdktn.IResolvable) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCountList(this, "count", false);
  public get count() {
    return this._count;
  }
  public putCount(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseCount[] | cdktn.IResolvable) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride {
  /**
  * Name of the rule to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#name Wafv2WebAclRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * action_to_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#action_to_use Wafv2WebAclRuleGroupAssociation#action_to_use}
  */
  readonly actionToUse?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action_to_use: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseToTerraform, true)(struct!.actionToUse),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride | cdktn.IResolvable): any {
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
    action_to_use: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseToHclTerraform, true)(struct!.actionToUse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actionToUse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionToUse = this._actionToUse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actionToUse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actionToUse.internalValue = value.actionToUse;
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

  // action_to_use - computed: false, optional: true, required: false
  private _actionToUse = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUseList(this, "action_to_use", false);
  public get actionToUse() {
    return this._actionToUse;
  }
  public putActionToUse(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideActionToUse[] | cdktn.IResolvable) {
    this._actionToUse.internalValue = value;
  }
  public resetActionToUse() {
    this._actionToUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToUseInput() {
    return this._actionToUse.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationRuleGroupReference {
  /**
  * ARN of the Rule Group to associate with the Web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#arn Wafv2WebAclRuleGroupAssociation#arn}
  */
  readonly arn: string;
  /**
  * rule_action_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#rule_action_override Wafv2WebAclRuleGroupAssociation#rule_action_override}
  */
  readonly ruleActionOverride?: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceToTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    rule_action_override: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideToTerraform, true)(struct!.ruleActionOverride),
  }
}


export function wafv2WebAclRuleGroupAssociationRuleGroupReferenceToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationRuleGroupReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_action_override: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideToHclTerraform, true)(struct!.ruleActionOverride),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationRuleGroupReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._ruleActionOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionOverride = this._ruleActionOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationRuleGroupReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._ruleActionOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._ruleActionOverride.internalValue = value.ruleActionOverride;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // rule_action_override - computed: false, optional: true, required: false
  private _ruleActionOverride = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverrideList(this, "rule_action_override", false);
  public get ruleActionOverride() {
    return this._ruleActionOverride;
  }
  public putRuleActionOverride(value: Wafv2WebAclRuleGroupAssociationRuleGroupReferenceRuleActionOverride[] | cdktn.IResolvable) {
    this._ruleActionOverride.internalValue = value;
  }
  public resetRuleActionOverride() {
    this._ruleActionOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionOverrideInput() {
    return this._ruleActionOverride.internalValue;
  }
}

export class Wafv2WebAclRuleGroupAssociationRuleGroupReferenceList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationRuleGroupReference[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationRuleGroupReferenceOutputReference {
    return new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleGroupAssociationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#create Wafv2WebAclRuleGroupAssociation#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#delete Wafv2WebAclRuleGroupAssociation#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#update Wafv2WebAclRuleGroupAssociation#update}
  */
  readonly update?: string;
}

export function wafv2WebAclRuleGroupAssociationTimeoutsToTerraform(struct?: Wafv2WebAclRuleGroupAssociationTimeouts | cdktn.IResolvable): any {
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


export function wafv2WebAclRuleGroupAssociationTimeoutsToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationTimeouts | cdktn.IResolvable): any {
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

export class Wafv2WebAclRuleGroupAssociationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv2WebAclRuleGroupAssociationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationTimeouts | cdktn.IResolvable | undefined) {
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
export interface Wafv2WebAclRuleGroupAssociationVisibilityConfig {
  /**
  * Indicates whether the rule is available for use in the metrics for the web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#cloudwatch_metrics_enabled Wafv2WebAclRuleGroupAssociation#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktn.IResolvable;
  /**
  * A name for the metrics for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#metric_name Wafv2WebAclRuleGroupAssociation#metric_name}
  */
  readonly metricName: string;
  /**
  * Indicates whether to store a sampling of the web requests that match the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#sampled_requests_enabled Wafv2WebAclRuleGroupAssociation#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktn.IResolvable;
}

export function wafv2WebAclRuleGroupAssociationVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleGroupAssociationVisibilityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktn.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function wafv2WebAclRuleGroupAssociationVisibilityConfigToHclTerraform(struct?: Wafv2WebAclRuleGroupAssociationVisibilityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleGroupAssociationVisibilityConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleGroupAssociationVisibilityConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleGroupAssociationVisibilityConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktn.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktn.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}

export class Wafv2WebAclRuleGroupAssociationVisibilityConfigList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleGroupAssociationVisibilityConfig[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleGroupAssociationVisibilityConfigOutputReference {
    return new Wafv2WebAclRuleGroupAssociationVisibilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association aws_wafv2_web_acl_rule_group_association}
*/
export class Wafv2WebAclRuleGroupAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl_rule_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Wafv2WebAclRuleGroupAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2WebAclRuleGroupAssociation to import
  * @param importFromId The id of the existing Wafv2WebAclRuleGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2WebAclRuleGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl_rule_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/wafv2_web_acl_rule_group_association aws_wafv2_web_acl_rule_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclRuleGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclRuleGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_rule_group_association',
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
    this._overrideAction = config.overrideAction;
    this._priority = config.priority;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._webAclArn = config.webAclArn;
    this._managedRuleGroup.internalValue = config.managedRuleGroup;
    this._ruleGroupReference.internalValue = config.ruleGroupReference;
    this._timeouts.internalValue = config.timeouts;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // override_action - computed: true, optional: true, required: false
  private _overrideAction?: string; 
  public get overrideAction() {
    return this.getStringAttribute('override_action');
  }
  public set overrideAction(value: string) {
    this._overrideAction = value;
  }
  public resetOverrideAction() {
    this._overrideAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn?: string; 
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn;
  }

  // managed_rule_group - computed: false, optional: true, required: false
  private _managedRuleGroup = new Wafv2WebAclRuleGroupAssociationManagedRuleGroupList(this, "managed_rule_group", false);
  public get managedRuleGroup() {
    return this._managedRuleGroup;
  }
  public putManagedRuleGroup(value: Wafv2WebAclRuleGroupAssociationManagedRuleGroup[] | cdktn.IResolvable) {
    this._managedRuleGroup.internalValue = value;
  }
  public resetManagedRuleGroup() {
    this._managedRuleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupInput() {
    return this._managedRuleGroup.internalValue;
  }

  // rule_group_reference - computed: false, optional: true, required: false
  private _ruleGroupReference = new Wafv2WebAclRuleGroupAssociationRuleGroupReferenceList(this, "rule_group_reference", false);
  public get ruleGroupReference() {
    return this._ruleGroupReference;
  }
  public putRuleGroupReference(value: Wafv2WebAclRuleGroupAssociationRuleGroupReference[] | cdktn.IResolvable) {
    this._ruleGroupReference.internalValue = value;
  }
  public resetRuleGroupReference() {
    this._ruleGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReferenceInput() {
    return this._ruleGroupReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Wafv2WebAclRuleGroupAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Wafv2WebAclRuleGroupAssociationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // visibility_config - computed: false, optional: true, required: false
  private _visibilityConfig = new Wafv2WebAclRuleGroupAssociationVisibilityConfigList(this, "visibility_config", false);
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclRuleGroupAssociationVisibilityConfig[] | cdktn.IResolvable) {
    this._visibilityConfig.internalValue = value;
  }
  public resetVisibilityConfig() {
    this._visibilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      override_action: cdktn.stringToTerraform(this._overrideAction),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      web_acl_arn: cdktn.stringToTerraform(this._webAclArn),
      managed_rule_group: cdktn.listMapper(wafv2WebAclRuleGroupAssociationManagedRuleGroupToTerraform, true)(this._managedRuleGroup.internalValue),
      rule_group_reference: cdktn.listMapper(wafv2WebAclRuleGroupAssociationRuleGroupReferenceToTerraform, true)(this._ruleGroupReference.internalValue),
      timeouts: wafv2WebAclRuleGroupAssociationTimeoutsToTerraform(this._timeouts.internalValue),
      visibility_config: cdktn.listMapper(wafv2WebAclRuleGroupAssociationVisibilityConfigToTerraform, true)(this._visibilityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      override_action: {
        value: cdktn.stringToHclTerraform(this._overrideAction),
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
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_acl_arn: {
        value: cdktn.stringToHclTerraform(this._webAclArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_rule_group: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationManagedRuleGroupToHclTerraform, true)(this._managedRuleGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleGroupAssociationManagedRuleGroupList",
      },
      rule_group_reference: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationRuleGroupReferenceToHclTerraform, true)(this._ruleGroupReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleGroupAssociationRuleGroupReferenceList",
      },
      timeouts: {
        value: wafv2WebAclRuleGroupAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv2WebAclRuleGroupAssociationTimeouts",
      },
      visibility_config: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleGroupAssociationVisibilityConfigToHclTerraform, true)(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleGroupAssociationVisibilityConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
