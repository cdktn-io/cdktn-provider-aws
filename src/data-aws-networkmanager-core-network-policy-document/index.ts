/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * attachment_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}
  */
  readonly attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktn.IResolvable;
  /**
  * attachment_routing_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_routing_policy_rules DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_routing_policy_rules}
  */
  readonly attachmentRoutingPolicyRules?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules[] | cdktn.IResolvable;
  /**
  * core_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}
  */
  readonly coreNetworkConfiguration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktn.IResolvable;
  /**
  * network_function_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktn.IResolvable;
  /**
  * routing_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policies}
  */
  readonly routingPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies[] | cdktn.IResolvable;
  /**
  * segment_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}
  */
  readonly segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktn.IResolvable;
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktn.IResolvable;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataAwsNetworkmanagerCoreNetworkPolicyDocument#add_to_network_function_group}
  */
  readonly addToNetworkFunctionGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}
  */
  readonly associationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}
  */
  readonly requireAcceptance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}
  */
  readonly tagValueOfKey?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_to_network_function_group: cdktn.stringToTerraform(struct!.addToNetworkFunctionGroup),
    association_method: cdktn.stringToTerraform(struct!.associationMethod),
    require_acceptance: cdktn.booleanToTerraform(struct!.requireAcceptance),
    segment: cdktn.stringToTerraform(struct!.segment),
    tag_value_of_key: cdktn.stringToTerraform(struct!.tagValueOfKey),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_to_network_function_group: {
      value: cdktn.stringToHclTerraform(struct!.addToNetworkFunctionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_method: {
      value: cdktn.stringToHclTerraform(struct!.associationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value_of_key: {
      value: cdktn.stringToHclTerraform(struct!.tagValueOfKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToNetworkFunctionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToNetworkFunctionGroup = this._addToNetworkFunctionGroup;
    }
    if (this._associationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationMethod = this._associationMethod;
    }
    if (this._requireAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAcceptance = this._requireAcceptance;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._tagValueOfKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueOfKey = this._tagValueOfKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addToNetworkFunctionGroup = undefined;
      this._associationMethod = undefined;
      this._requireAcceptance = undefined;
      this._segment = undefined;
      this._tagValueOfKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addToNetworkFunctionGroup = value.addToNetworkFunctionGroup;
      this._associationMethod = value.associationMethod;
      this._requireAcceptance = value.requireAcceptance;
      this._segment = value.segment;
      this._tagValueOfKey = value.tagValueOfKey;
    }
  }

  // add_to_network_function_group - computed: false, optional: true, required: false
  private _addToNetworkFunctionGroup?: string; 
  public get addToNetworkFunctionGroup() {
    return this.getStringAttribute('add_to_network_function_group');
  }
  public set addToNetworkFunctionGroup(value: string) {
    this._addToNetworkFunctionGroup = value;
  }
  public resetAddToNetworkFunctionGroup() {
    this._addToNetworkFunctionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToNetworkFunctionGroupInput() {
    return this._addToNetworkFunctionGroup;
  }

  // association_method - computed: false, optional: true, required: false
  private _associationMethod?: string; 
  public get associationMethod() {
    return this.getStringAttribute('association_method');
  }
  public set associationMethod(value: string) {
    this._associationMethod = value;
  }
  public resetAssociationMethod() {
    this._associationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationMethodInput() {
    return this._associationMethod;
  }

  // require_acceptance - computed: false, optional: true, required: false
  private _requireAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAcceptance() {
    return this.getBooleanAttribute('require_acceptance');
  }
  public set requireAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAcceptance = value;
  }
  public resetRequireAcceptance() {
    this._requireAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAcceptanceInput() {
    return this._requireAcceptance;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // tag_value_of_key - computed: false, optional: true, required: false
  private _tagValueOfKey?: string; 
  public get tagValueOfKey() {
    return this.getStringAttribute('tag_value_of_key');
  }
  public set tagValueOfKey(value: string) {
    this._tagValueOfKey = value;
  }
  public resetTagValueOfKey() {
    this._tagValueOfKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueOfKeyInput() {
    return this._tagValueOfKey;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_logic: cdktn.stringToTerraform(struct!.conditionLogic),
    description: cdktn.stringToTerraform(struct!.description),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    action: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct!.action),
    conditions: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_logic: {
      value: cdktn.stringToHclTerraform(struct!.conditionLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionList",
    },
    conditions: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogic = this._conditionLogic;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionLogic = undefined;
      this._description = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionLogic = value.conditionLogic;
      this._description = value.description;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // condition_logic - computed: false, optional: true, required: false
  private _conditionLogic?: string; 
  public get conditionLogic() {
    return this.getStringAttribute('condition_logic');
  }
  public set conditionLogic(value: string) {
    this._conditionLogic = value;
  }
  public resetConditionLogic() {
    this._conditionLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicInput() {
    return this._conditionLogic;
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

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#associate_routing_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#associate_routing_policies}
  */
  readonly associateRoutingPolicies: string[];
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associate_routing_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.associateRoutingPolicies),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associate_routing_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.associateRoutingPolicies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateRoutingPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateRoutingPolicies = this._associateRoutingPolicies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associateRoutingPolicies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associateRoutingPolicies = value.associateRoutingPolicies;
    }
  }

  // associate_routing_policies - computed: false, optional: false, required: true
  private _associateRoutingPolicies?: string[]; 
  public get associateRoutingPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('associate_routing_policies'));
  }
  public set associateRoutingPolicies(value: string[]) {
    this._associateRoutingPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associateRoutingPoliciesInput() {
    return this._associateRoutingPolicies;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    edge_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.edgeLocations),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    action: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionToTerraform(struct!.action),
    conditions: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.edgeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionList",
    },
    conditions: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._edgeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._edgeLocations = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._edgeLocations = value.edgeLocations;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
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

  // edge_locations - computed: false, optional: true, required: false
  private _edgeLocations?: string[]; 
  public get edgeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('edge_locations'));
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  public resetEdgeLocations() {
    this._edgeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}
  */
  readonly asn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}
  */
  readonly location: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asn: cdktn.stringToTerraform(struct!.asn),
    inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.insideCidrBlocks),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asn: {
      value: cdktn.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._insideCidrBlocks = undefined;
      this._location = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._location = value.location;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}
  */
  readonly asnRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#dns_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#dns_support}
  */
  readonly dnsSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#security_group_referencing_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#security_group_referencing_support}
  */
  readonly securityGroupReferencingSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: boolean | cdktn.IResolvable;
  /**
  * edge_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asn_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.asnRanges),
    dns_support: cdktn.booleanToTerraform(struct!.dnsSupport),
    inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.insideCidrBlocks),
    security_group_referencing_support: cdktn.booleanToTerraform(struct!.securityGroupReferencingSupport),
    vpn_ecmp_support: cdktn.booleanToTerraform(struct!.vpnEcmpSupport),
    edge_locations: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform, true)(struct!.edgeLocations),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asn_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.asnRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_support: {
      value: cdktn.booleanToHclTerraform(struct!.dnsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_group_referencing_support: {
      value: cdktn.booleanToHclTerraform(struct!.securityGroupReferencingSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_ecmp_support: {
      value: cdktn.booleanToHclTerraform(struct!.vpnEcmpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_locations: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToHclTerraform, true)(struct!.edgeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnRanges = this._asnRanges;
    }
    if (this._dnsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSupport = this._dnsSupport;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._securityGroupReferencingSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupReferencingSupport = this._securityGroupReferencingSupport;
    }
    if (this._vpnEcmpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnEcmpSupport = this._vpnEcmpSupport;
    }
    if (this._edgeLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnRanges = undefined;
      this._dnsSupport = undefined;
      this._insideCidrBlocks = undefined;
      this._securityGroupReferencingSupport = undefined;
      this._vpnEcmpSupport = undefined;
      this._edgeLocations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnRanges = value.asnRanges;
      this._dnsSupport = value.dnsSupport;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._securityGroupReferencingSupport = value.securityGroupReferencingSupport;
      this._vpnEcmpSupport = value.vpnEcmpSupport;
      this._edgeLocations.internalValue = value.edgeLocations;
    }
  }

  // asn_ranges - computed: false, optional: false, required: true
  private _asnRanges?: string[]; 
  public get asnRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('asn_ranges'));
  }
  public set asnRanges(value: string[]) {
    this._asnRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnRangesInput() {
    return this._asnRanges;
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: boolean | cdktn.IResolvable; 
  public get dnsSupport() {
    return this.getBooleanAttribute('dns_support');
  }
  public set dnsSupport(value: boolean | cdktn.IResolvable) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('inside_cidr_blocks'));
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // security_group_referencing_support - computed: false, optional: true, required: false
  private _securityGroupReferencingSupport?: boolean | cdktn.IResolvable; 
  public get securityGroupReferencingSupport() {
    return this.getBooleanAttribute('security_group_referencing_support');
  }
  public set securityGroupReferencingSupport(value: boolean | cdktn.IResolvable) {
    this._securityGroupReferencingSupport = value;
  }
  public resetSecurityGroupReferencingSupport() {
    this._securityGroupReferencingSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupReferencingSupportInput() {
    return this._securityGroupReferencingSupport;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: boolean | cdktn.IResolvable; 
  public get vpnEcmpSupport() {
    return this.getBooleanAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: boolean | cdktn.IResolvable) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport;
  }

  // edge_locations - computed: false, optional: false, required: true
  private _edgeLocations = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList(this, "edge_locations", false);
  public get edgeLocations() {
    return this._edgeLocations;
  }
  public putEdgeLocations(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktn.IResolvable) {
    this._edgeLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance: boolean | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktn.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    require_attachment_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
    }
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

  // require_attachment_acceptance - computed: false, optional: false, required: true
  private _requireAttachmentAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction;
  /**
  * match_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#match_conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#match_conditions}
  */
  readonly matchConditions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_logic: cdktn.stringToTerraform(struct!.conditionLogic),
    action: dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionToTerraform(struct!.action),
    match_conditions: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsToTerraform, true)(struct!.matchConditions),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_logic: {
      value: cdktn.stringToHclTerraform(struct!.conditionLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionList",
    },
    match_conditions: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsToHclTerraform, true)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogic = this._conditionLogic;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionLogic = undefined;
      this._action.internalValue = undefined;
      this._matchConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionLogic = value.conditionLogic;
      this._action.internalValue = value.action;
      this._matchConditions.internalValue = value.matchConditions;
    }
  }

  // condition_logic - computed: false, optional: true, required: false
  private _conditionLogic?: string; 
  public get conditionLogic() {
    return this.getStringAttribute('condition_logic');
  }
  public set conditionLogic(value: string) {
    this._conditionLogic = value;
  }
  public resetConditionLogic() {
    this._conditionLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicInput() {
    return this._conditionLogic;
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionMatchConditions[] | cdktn.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * rule_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#rule_definition DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_definition}
  */
  readonly ruleDefinition: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    rule_definition: dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_definition: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionToHclTerraform(struct!.ruleDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleNumber = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleNumber = value.ruleNumber;
      this._ruleDefinition.internalValue = value.ruleDefinition;
    }
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // rule_definition - computed: false, optional: false, required: true
  private _ruleDefinition = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinitionOutputReference(this, "rule_definition");
  public get ruleDefinition() {
    return this._ruleDefinition;
  }
  public putRuleDefinition(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesRuleDefinition) {
    this._ruleDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_description DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_description}
  */
  readonly routingPolicyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_direction DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_direction}
  */
  readonly routingPolicyDirection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_name DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_name}
  */
  readonly routingPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_number}
  */
  readonly routingPolicyNumber: number;
  /**
  * routing_policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_rules DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_rules}
  */
  readonly routingPolicyRules: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_policy_description: cdktn.stringToTerraform(struct!.routingPolicyDescription),
    routing_policy_direction: cdktn.stringToTerraform(struct!.routingPolicyDirection),
    routing_policy_name: cdktn.stringToTerraform(struct!.routingPolicyName),
    routing_policy_number: cdktn.numberToTerraform(struct!.routingPolicyNumber),
    routing_policy_rules: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesToTerraform, true)(struct!.routingPolicyRules),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_policy_description: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_direction: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_name: {
      value: cdktn.stringToHclTerraform(struct!.routingPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_number: {
      value: cdktn.numberToHclTerraform(struct!.routingPolicyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_policy_rules: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesToHclTerraform, true)(struct!.routingPolicyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyDescription = this._routingPolicyDescription;
    }
    if (this._routingPolicyDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyDirection = this._routingPolicyDirection;
    }
    if (this._routingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyName = this._routingPolicyName;
    }
    if (this._routingPolicyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNumber = this._routingPolicyNumber;
    }
    if (this._routingPolicyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyRules = this._routingPolicyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyDescription = undefined;
      this._routingPolicyDirection = undefined;
      this._routingPolicyName = undefined;
      this._routingPolicyNumber = undefined;
      this._routingPolicyRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyDescription = value.routingPolicyDescription;
      this._routingPolicyDirection = value.routingPolicyDirection;
      this._routingPolicyName = value.routingPolicyName;
      this._routingPolicyNumber = value.routingPolicyNumber;
      this._routingPolicyRules.internalValue = value.routingPolicyRules;
    }
  }

  // routing_policy_description - computed: false, optional: true, required: false
  private _routingPolicyDescription?: string; 
  public get routingPolicyDescription() {
    return this.getStringAttribute('routing_policy_description');
  }
  public set routingPolicyDescription(value: string) {
    this._routingPolicyDescription = value;
  }
  public resetRoutingPolicyDescription() {
    this._routingPolicyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyDescriptionInput() {
    return this._routingPolicyDescription;
  }

  // routing_policy_direction - computed: false, optional: false, required: true
  private _routingPolicyDirection?: string; 
  public get routingPolicyDirection() {
    return this.getStringAttribute('routing_policy_direction');
  }
  public set routingPolicyDirection(value: string) {
    this._routingPolicyDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyDirectionInput() {
    return this._routingPolicyDirection;
  }

  // routing_policy_name - computed: false, optional: false, required: true
  private _routingPolicyName?: string; 
  public get routingPolicyName() {
    return this.getStringAttribute('routing_policy_name');
  }
  public set routingPolicyName(value: string) {
    this._routingPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNameInput() {
    return this._routingPolicyName;
  }

  // routing_policy_number - computed: false, optional: false, required: true
  private _routingPolicyNumber?: number; 
  public get routingPolicyNumber() {
    return this.getNumberAttribute('routing_policy_number');
  }
  public set routingPolicyNumber(value: number) {
    this._routingPolicyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNumberInput() {
    return this._routingPolicyNumber;
  }

  // routing_policy_rules - computed: false, optional: false, required: true
  private _routingPolicyRules = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRulesList(this, "routing_policy_rules", false);
  public get routingPolicyRules() {
    return this._routingPolicyRules;
  }
  public putRoutingPolicyRules(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesRoutingPolicyRules[] | cdktn.IResolvable) {
    this._routingPolicyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyRulesInput() {
    return this._routingPolicyRules.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_location}
  */
  readonly edgeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#peer_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#peer_edge_location}
  */
  readonly peerEdgeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_names DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_names}
  */
  readonly routingPolicyNames: string[];
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edge_location: cdktn.stringToTerraform(struct!.edgeLocation),
    peer_edge_location: cdktn.stringToTerraform(struct!.peerEdgeLocation),
    routing_policy_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.routingPolicyNames),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edge_location: {
      value: cdktn.stringToHclTerraform(struct!.edgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_edge_location: {
      value: cdktn.stringToHclTerraform(struct!.peerEdgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.routingPolicyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocation = this._edgeLocation;
    }
    if (this._peerEdgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerEdgeLocation = this._peerEdgeLocation;
    }
    if (this._routingPolicyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNames = this._routingPolicyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeLocation = undefined;
      this._peerEdgeLocation = undefined;
      this._routingPolicyNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeLocation = value.edgeLocation;
      this._peerEdgeLocation = value.peerEdgeLocation;
      this._routingPolicyNames = value.routingPolicyNames;
    }
  }

  // edge_location - computed: false, optional: false, required: true
  private _edgeLocation?: string; 
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
  }
  public set edgeLocation(value: string) {
    this._edgeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationInput() {
    return this._edgeLocation;
  }

  // peer_edge_location - computed: false, optional: false, required: true
  private _peerEdgeLocation?: string; 
  public get peerEdgeLocation() {
    return this.getStringAttribute('peer_edge_location');
  }
  public set peerEdgeLocation(value: string) {
    this._peerEdgeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerEdgeLocationInput() {
    return this._peerEdgeLocation;
  }

  // routing_policy_names - computed: false, optional: false, required: true
  private _routingPolicyNames?: string[]; 
  public get routingPolicyNames() {
    return cdktn.Fn.tolist(this.getListAttribute('routing_policy_names'));
  }
  public set routingPolicyNames(value: string[]) {
    this._routingPolicyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNamesInput() {
    return this._routingPolicyNames;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_sets}
  */
  readonly edgeSets?: string[][] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge}
  */
  readonly useEdge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge_location}
  */
  readonly useEdgeLocation?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edge_sets: cdktn.listMapper(cdktn.listMapper(cdktn.stringToTerraform, false), false)(struct!.edgeSets),
    use_edge: cdktn.stringToTerraform(struct!.useEdge),
    use_edge_location: cdktn.stringToTerraform(struct!.useEdgeLocation),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edge_sets: {
      value: cdktn.listMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false), false)(struct!.edgeSets),
      isBlock: false,
      type: "set",
      storageClassType: "stringListList",
    },
    use_edge: {
      value: cdktn.stringToHclTerraform(struct!.useEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_edge_location: {
      value: cdktn.stringToHclTerraform(struct!.useEdgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeSets = this._edgeSets;
    }
    if (this._useEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdge = this._useEdge;
    }
    if (this._useEdgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdgeLocation = this._useEdgeLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeSets = undefined;
      this._useEdge = undefined;
      this._useEdgeLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeSets = value.edgeSets;
      this._useEdge = value.useEdge;
      this._useEdgeLocation = value.useEdgeLocation;
    }
  }

  // edge_sets - computed: false, optional: true, required: false
  private _edgeSets?: string[][] | cdktn.IResolvable; 
  public get edgeSets() {
    return cdktn.Token.asAny(cdktn.Fn.tolist(this.interpolationForAttribute('edge_sets')));
  }
  public set edgeSets(value: string[][] | cdktn.IResolvable) {
    this._edgeSets = value;
  }
  public resetEdgeSets() {
    this._edgeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSetsInput() {
    return this._edgeSets;
  }

  // use_edge - computed: false, optional: true, required: false
  private _useEdge?: string; 
  public get useEdge() {
    return this.getStringAttribute('use_edge');
  }
  public set useEdge(value: string) {
    this._useEdge = value;
  }
  public resetUseEdge() {
    this._useEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeInput() {
    return this._useEdge;
  }

  // use_edge_location - computed: false, optional: true, required: false
  private _useEdgeLocation?: string; 
  public get useEdgeLocation() {
    return this.getStringAttribute('use_edge_location');
  }
  public set useEdgeLocation(value: string) {
    this._useEdgeLocation = value;
  }
  public resetUseEdgeLocation() {
    this._useEdgeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeLocationInput() {
    return this._useEdgeLocation;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: string[];
  /**
  * with_edge_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#with_edge_override DataAwsNetworkmanagerCoreNetworkPolicyDocument#with_edge_override}
  */
  readonly withEdgeOverride?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_function_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.networkFunctionGroups),
    with_edge_override: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToTerraform, true)(struct!.withEdgeOverride),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_function_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.networkFunctionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    with_edge_override: {
      value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToHclTerraform, true)(struct!.withEdgeOverride),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionGroups = this._networkFunctionGroups;
    }
    if (this._withEdgeOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEdgeOverride = this._withEdgeOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFunctionGroups = undefined;
      this._withEdgeOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFunctionGroups = value.networkFunctionGroups;
      this._withEdgeOverride.internalValue = value.withEdgeOverride;
    }
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups?: string[]; 
  public get networkFunctionGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('network_function_groups'));
  }
  public set networkFunctionGroups(value: string[]) {
    this._networkFunctionGroups = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups;
  }

  // with_edge_override - computed: false, optional: true, required: false
  private _withEdgeOverride = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList(this, "with_edge_override", false);
  public get withEdgeOverride() {
    return this._withEdgeOverride;
  }
  public putWithEdgeOverride(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktn.IResolvable) {
    this._withEdgeOverride.internalValue = value;
  }
  public resetWithEdgeOverride() {
    this._withEdgeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEdgeOverrideInput() {
    return this._withEdgeOverride.internalValue;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments?: string[];
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.segments),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.segments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments = value.segments;
    }
  }

  // segments - computed: false, optional: true, required: false
  private _segments?: string[]; 
  public get segments() {
    return cdktn.Fn.tolist(this.getListAttribute('segments'));
  }
  public set segments(value: string[]) {
    this._segments = value;
  }
  public resetSegments() {
    this._segments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#routing_policy_names DataAwsNetworkmanagerCoreNetworkPolicyDocument#routing_policy_names}
  */
  readonly routingPolicyNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}
  */
  readonly shareWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}
  */
  readonly shareWithExcept?: string[];
  /**
  * edge_location_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_location_association DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_location_association}
  */
  readonly edgeLocationAssociation?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation;
  /**
  * via block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#via DataAwsNetworkmanagerCoreNetworkPolicyDocument#via}
  */
  readonly via?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia;
  /**
  * when_sent_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#when_sent_to DataAwsNetworkmanagerCoreNetworkPolicyDocument#when_sent_to}
  */
  readonly whenSentTo?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    destination_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationCidrBlocks),
    destinations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinations),
    mode: cdktn.stringToTerraform(struct!.mode),
    routing_policy_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.routingPolicyNames),
    segment: cdktn.stringToTerraform(struct!.segment),
    share_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.shareWith),
    share_with_except: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.shareWithExcept),
    edge_location_association: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationToTerraform(struct!.edgeLocationAssociation),
    via: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToTerraform(struct!.via),
    when_sent_to: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToTerraform(struct!.whenSentTo),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destinations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_policy_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.routingPolicyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.shareWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    share_with_except: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.shareWithExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    edge_location_association: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationToHclTerraform(struct!.edgeLocationAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationList",
    },
    via: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToHclTerraform(struct!.via),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaList",
    },
    when_sent_to: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToHclTerraform(struct!.whenSentTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlocks = this._destinationCidrBlocks;
    }
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._routingPolicyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyNames = this._routingPolicyNames;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._shareWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWith = this._shareWith;
    }
    if (this._shareWithExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWithExcept = this._shareWithExcept;
    }
    if (this._edgeLocationAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocationAssociation = this._edgeLocationAssociation?.internalValue;
    }
    if (this._via?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via?.internalValue;
    }
    if (this._whenSentTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenSentTo = this._whenSentTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationCidrBlocks = undefined;
      this._destinations = undefined;
      this._mode = undefined;
      this._routingPolicyNames = undefined;
      this._segment = undefined;
      this._shareWith = undefined;
      this._shareWithExcept = undefined;
      this._edgeLocationAssociation.internalValue = undefined;
      this._via.internalValue = undefined;
      this._whenSentTo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._destinationCidrBlocks = value.destinationCidrBlocks;
      this._destinations = value.destinations;
      this._mode = value.mode;
      this._routingPolicyNames = value.routingPolicyNames;
      this._segment = value.segment;
      this._shareWith = value.shareWith;
      this._shareWithExcept = value.shareWithExcept;
      this._edgeLocationAssociation.internalValue = value.edgeLocationAssociation;
      this._via.internalValue = value.via;
      this._whenSentTo.internalValue = value.whenSentTo;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_cidr_blocks - computed: false, optional: true, required: false
  private _destinationCidrBlocks?: string[]; 
  public get destinationCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_cidr_blocks'));
  }
  public set destinationCidrBlocks(value: string[]) {
    this._destinationCidrBlocks = value;
  }
  public resetDestinationCidrBlocks() {
    this._destinationCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlocksInput() {
    return this._destinationCidrBlocks;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return cdktn.Fn.tolist(this.getListAttribute('destinations'));
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // routing_policy_names - computed: false, optional: true, required: false
  private _routingPolicyNames?: string[]; 
  public get routingPolicyNames() {
    return cdktn.Fn.tolist(this.getListAttribute('routing_policy_names'));
  }
  public set routingPolicyNames(value: string[]) {
    this._routingPolicyNames = value;
  }
  public resetRoutingPolicyNames() {
    this._routingPolicyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNamesInput() {
    return this._routingPolicyNames;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // share_with - computed: false, optional: true, required: false
  private _shareWith?: string[]; 
  public get shareWith() {
    return cdktn.Fn.tolist(this.getListAttribute('share_with'));
  }
  public set shareWith(value: string[]) {
    this._shareWith = value;
  }
  public resetShareWith() {
    this._shareWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithInput() {
    return this._shareWith;
  }

  // share_with_except - computed: false, optional: true, required: false
  private _shareWithExcept?: string[]; 
  public get shareWithExcept() {
    return cdktn.Fn.tolist(this.getListAttribute('share_with_except'));
  }
  public set shareWithExcept(value: string[]) {
    this._shareWithExcept = value;
  }
  public resetShareWithExcept() {
    this._shareWithExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithExceptInput() {
    return this._shareWithExcept;
  }

  // edge_location_association - computed: false, optional: true, required: false
  private _edgeLocationAssociation = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociationOutputReference(this, "edge_location_association");
  public get edgeLocationAssociation() {
    return this._edgeLocationAssociation;
  }
  public putEdgeLocationAssociation(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsEdgeLocationAssociation) {
    this._edgeLocationAssociation.internalValue = value;
  }
  public resetEdgeLocationAssociation() {
    this._edgeLocationAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationAssociationInput() {
    return this._edgeLocationAssociation.internalValue;
  }

  // via - computed: false, optional: true, required: false
  private _via = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference(this, "via");
  public get via() {
    return this._via;
  }
  public putVia(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia) {
    this._via.internalValue = value;
  }
  public resetVia() {
    this._via.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via.internalValue;
  }

  // when_sent_to - computed: false, optional: true, required: false
  private _whenSentTo = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference(this, "when_sent_to");
  public get whenSentTo() {
    return this._whenSentTo;
  }
  public putWhenSentTo(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo) {
    this._whenSentTo.internalValue = value;
  }
  public resetWhenSentTo() {
    this._whenSentTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenSentToInput() {
    return this._whenSentTo.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}
  */
  readonly allowFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}
  */
  readonly denyFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}
  */
  readonly isolateAttachments?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance?: boolean | cdktn.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowFilter),
    deny_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.denyFilter),
    description: cdktn.stringToTerraform(struct!.description),
    edge_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.edgeLocations),
    isolate_attachments: cdktn.booleanToTerraform(struct!.isolateAttachments),
    name: cdktn.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktn.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deny_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.denyFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.edgeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    isolate_attachments: {
      value: cdktn.booleanToHclTerraform(struct!.isolateAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_attachment_acceptance: {
      value: cdktn.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFilter = this._allowFilter;
    }
    if (this._denyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFilter = this._denyFilter;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._edgeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations;
    }
    if (this._isolateAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolateAttachments = this._isolateAttachments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFilter = undefined;
      this._denyFilter = undefined;
      this._description = undefined;
      this._edgeLocations = undefined;
      this._isolateAttachments = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFilter = value.allowFilter;
      this._denyFilter = value.denyFilter;
      this._description = value.description;
      this._edgeLocations = value.edgeLocations;
      this._isolateAttachments = value.isolateAttachments;
      this._name = value.name;
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
    }
  }

  // allow_filter - computed: false, optional: true, required: false
  private _allowFilter?: string[]; 
  public get allowFilter() {
    return cdktn.Fn.tolist(this.getListAttribute('allow_filter'));
  }
  public set allowFilter(value: string[]) {
    this._allowFilter = value;
  }
  public resetAllowFilter() {
    this._allowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFilterInput() {
    return this._allowFilter;
  }

  // deny_filter - computed: false, optional: true, required: false
  private _denyFilter?: string[]; 
  public get denyFilter() {
    return cdktn.Fn.tolist(this.getListAttribute('deny_filter'));
  }
  public set denyFilter(value: string[]) {
    this._denyFilter = value;
  }
  public resetDenyFilter() {
    this._denyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFilterInput() {
    return this._denyFilter;
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

  // edge_locations - computed: false, optional: true, required: false
  private _edgeLocations?: string[]; 
  public get edgeLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('edge_locations'));
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  public resetEdgeLocations() {
    this._edgeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // isolate_attachments - computed: false, optional: true, required: false
  private _isolateAttachments?: boolean | cdktn.IResolvable; 
  public get isolateAttachments() {
    return this.getBooleanAttribute('isolate_attachments');
  }
  public set isolateAttachments(value: boolean | cdktn.IResolvable) {
    this._isolateAttachments = value;
  }
  public resetIsolateAttachments() {
    this._isolateAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateAttachmentsInput() {
    return this._isolateAttachments;
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

  // require_attachment_acceptance - computed: false, optional: true, required: false
  private _requireAttachmentAcceptance?: boolean | cdktn.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktn.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  public resetRequireAttachmentAcceptance() {
    this._requireAttachmentAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList extends cdktn.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktn.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export class DataAwsNetworkmanagerCoreNetworkPolicyDocument extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsNetworkmanagerCoreNetworkPolicyDocument resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import
  * @param importFromId The id of the existing DataAwsNetworkmanagerCoreNetworkPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_core_network_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_core_network_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.53.0',
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
    this._id = config.id;
    this._version = config.version;
    this._attachmentPolicies.internalValue = config.attachmentPolicies;
    this._attachmentRoutingPolicyRules.internalValue = config.attachmentRoutingPolicyRules;
    this._coreNetworkConfiguration.internalValue = config.coreNetworkConfiguration;
    this._networkFunctionGroups.internalValue = config.networkFunctionGroups;
    this._routingPolicies.internalValue = config.routingPolicies;
    this._segmentActions.internalValue = config.segmentActions;
    this._segments.internalValue = config.segments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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

  // attachment_policies - computed: false, optional: true, required: false
  private _attachmentPolicies = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList(this, "attachment_policies", false);
  public get attachmentPolicies() {
    return this._attachmentPolicies;
  }
  public putAttachmentPolicies(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktn.IResolvable) {
    this._attachmentPolicies.internalValue = value;
  }
  public resetAttachmentPolicies() {
    this._attachmentPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPoliciesInput() {
    return this._attachmentPolicies.internalValue;
  }

  // attachment_routing_policy_rules - computed: false, optional: true, required: false
  private _attachmentRoutingPolicyRules = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesList(this, "attachment_routing_policy_rules", false);
  public get attachmentRoutingPolicyRules() {
    return this._attachmentRoutingPolicyRules;
  }
  public putAttachmentRoutingPolicyRules(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRules[] | cdktn.IResolvable) {
    this._attachmentRoutingPolicyRules.internalValue = value;
  }
  public resetAttachmentRoutingPolicyRules() {
    this._attachmentRoutingPolicyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentRoutingPolicyRulesInput() {
    return this._attachmentRoutingPolicyRules.internalValue;
  }

  // core_network_configuration - computed: false, optional: false, required: true
  private _coreNetworkConfiguration = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList(this, "core_network_configuration", false);
  public get coreNetworkConfiguration() {
    return this._coreNetworkConfiguration;
  }
  public putCoreNetworkConfiguration(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktn.IResolvable) {
    this._coreNetworkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkConfigurationInput() {
    return this._coreNetworkConfiguration.internalValue;
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList(this, "network_function_groups", false);
  public get networkFunctionGroups() {
    return this._networkFunctionGroups;
  }
  public putNetworkFunctionGroups(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktn.IResolvable) {
    this._networkFunctionGroups.internalValue = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups.internalValue;
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesList(this, "routing_policies", false);
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPolicies[] | cdktn.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // segment_actions - computed: false, optional: true, required: false
  private _segmentActions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList(this, "segment_actions", false);
  public get segmentActions() {
    return this._segmentActions;
  }
  public putSegmentActions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktn.IResolvable) {
    this._segmentActions.internalValue = value;
  }
  public resetSegmentActions() {
    this._segmentActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentActionsInput() {
    return this._segmentActions.internalValue;
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktn.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      version: cdktn.stringToTerraform(this._version),
      attachment_policies: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform, true)(this._attachmentPolicies.internalValue),
      attachment_routing_policy_rules: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesToTerraform, true)(this._attachmentRoutingPolicyRules.internalValue),
      core_network_configuration: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform, true)(this._coreNetworkConfiguration.internalValue),
      network_function_groups: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToTerraform, true)(this._networkFunctionGroups.internalValue),
      routing_policies: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesToTerraform, true)(this._routingPolicies.internalValue),
      segment_actions: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform, true)(this._segmentActions.internalValue),
      segments: cdktn.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform, true)(this._segments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_policies: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToHclTerraform, true)(this._attachmentPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList",
      },
      attachment_routing_policy_rules: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesToHclTerraform, true)(this._attachmentRoutingPolicyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentRoutingPolicyRulesList",
      },
      core_network_configuration: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToHclTerraform, true)(this._coreNetworkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList",
      },
      network_function_groups: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToHclTerraform, true)(this._networkFunctionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList",
      },
      routing_policies: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesToHclTerraform, true)(this._routingPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentRoutingPoliciesList",
      },
      segment_actions: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToHclTerraform, true)(this._segmentActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList",
      },
      segments: {
        value: cdktn.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToHclTerraform, true)(this._segments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
