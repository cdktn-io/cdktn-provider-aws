/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MailmanagerTrafficPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}
  */
  readonly maxMessageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#region MailmanagerTrafficPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * policy_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#policy_statement MailmanagerTrafficPolicy#policy_statement}
  */
  readonly policyStatement?: MailmanagerTrafficPolicyPolicyStatement[] | cdktn.IResolvable;
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#address_lists MailmanagerTrafficPolicy#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: false, optional: false, required: true
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate {
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}
  */
  readonly analysis?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#is_in_address_list MailmanagerTrafficPolicy#is_in_address_list}
  */
  readonly isInAddressList?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructToTerraform, true)(struct!.isInAddressList),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: false, optional: true, required: false
  private _isInAddressList = new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}
  */
  readonly analysis?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#value MailmanagerTrafficPolicy#value}
  */
  readonly value: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
    evaluate: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatementCondition {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#boolean_expression MailmanagerTrafficPolicy#boolean_expression}
  */
  readonly booleanExpression?: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#ip_expression MailmanagerTrafficPolicy#ip_expression}
  */
  readonly ipExpression?: MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] | cdktn.IResolvable;
  /**
  * ipv6_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#ipv6_expression MailmanagerTrafficPolicy#ipv6_expression}
  */
  readonly ipv6Expression?: MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#string_expression MailmanagerTrafficPolicy#string_expression}
  */
  readonly stringExpression?: MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] | cdktn.IResolvable;
  /**
  * tls_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#tls_expression MailmanagerTrafficPolicy#tls_expression}
  */
  readonly tlsExpression?: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementConditionToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionToTerraform, true)(struct!.booleanExpression),
    ip_expression: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionToTerraform, true)(struct!.ipExpression),
    ipv6_expression: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionToTerraform, true)(struct!.ipv6Expression),
    string_expression: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionToTerraform, true)(struct!.stringExpression),
    tls_expression: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionToTerraform, true)(struct!.tlsExpression),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementConditionToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatementCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionIpExpressionToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList",
    },
    ipv6_expression: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionToHclTerraform, true)(struct!.ipv6Expression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionStringExpressionToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList",
    },
    tls_expression: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionToHclTerraform, true)(struct!.tlsExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatementCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._ipv6Expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Expression = this._ipv6Expression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._tlsExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsExpression = this._tlsExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatementCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._ipv6Expression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._tlsExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._ipv6Expression.internalValue = value.ipv6Expression;
      this._stringExpression.internalValue = value.stringExpression;
      this._tlsExpression.internalValue = value.tlsExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: MailmanagerTrafficPolicyPolicyStatementConditionIpExpression[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // ipv6_expression - computed: false, optional: true, required: false
  private _ipv6Expression = new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList(this, "ipv6_expression", false);
  public get ipv6Expression() {
    return this._ipv6Expression;
  }
  public putIpv6Expression(value: MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression[] | cdktn.IResolvable) {
    this._ipv6Expression.internalValue = value;
  }
  public resetIpv6Expression() {
    this._ipv6Expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExpressionInput() {
    return this._ipv6Expression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: MailmanagerTrafficPolicyPolicyStatementConditionStringExpression[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // tls_expression - computed: false, optional: true, required: false
  private _tlsExpression = new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList(this, "tls_expression", false);
  public get tlsExpression() {
    return this._tlsExpression;
  }
  public putTlsExpression(value: MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression[] | cdktn.IResolvable) {
    this._tlsExpression.internalValue = value;
  }
  public resetTlsExpression() {
    this._tlsExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsExpressionInput() {
    return this._tlsExpression.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementConditionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatementCondition[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementConditionOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerTrafficPolicyPolicyStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#action MailmanagerTrafficPolicy#action}
  */
  readonly action: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#condition MailmanagerTrafficPolicy#condition}
  */
  readonly condition?: MailmanagerTrafficPolicyPolicyStatementCondition[] | cdktn.IResolvable;
}

export function mailmanagerTrafficPolicyPolicyStatementToTerraform(struct?: MailmanagerTrafficPolicyPolicyStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    condition: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementConditionToTerraform, true)(struct!.condition),
  }
}


export function mailmanagerTrafficPolicyPolicyStatementToHclTerraform(struct?: MailmanagerTrafficPolicyPolicyStatement | cdktn.IResolvable): any {
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
    condition: {
      value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerTrafficPolicyPolicyStatementConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerTrafficPolicyPolicyStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerTrafficPolicyPolicyStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerTrafficPolicyPolicyStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition.internalValue = value.condition;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new MailmanagerTrafficPolicyPolicyStatementConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MailmanagerTrafficPolicyPolicyStatementCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class MailmanagerTrafficPolicyPolicyStatementList extends cdktn.ComplexList {
  public internalValue? : MailmanagerTrafficPolicyPolicyStatement[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerTrafficPolicyPolicyStatementOutputReference {
    return new MailmanagerTrafficPolicyPolicyStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy}
*/
export class MailmanagerTrafficPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_traffic_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailmanagerTrafficPolicy to import
  * @param importFromId The id of the existing MailmanagerTrafficPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailmanagerTrafficPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_traffic_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailmanagerTrafficPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MailmanagerTrafficPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_traffic_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
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
    this._defaultAction = config.defaultAction;
    this._maxMessageSizeBytes = config.maxMessageSizeBytes;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._policyStatement.internalValue = config.policyStatement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // max_message_size_bytes - computed: false, optional: true, required: false
  private _maxMessageSizeBytes?: number; 
  public get maxMessageSizeBytes() {
    return this.getNumberAttribute('max_message_size_bytes');
  }
  public set maxMessageSizeBytes(value: number) {
    this._maxMessageSizeBytes = value;
  }
  public resetMaxMessageSizeBytes() {
    this._maxMessageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeBytesInput() {
    return this._maxMessageSizeBytes;
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

  // policy_statement - computed: false, optional: true, required: false
  private _policyStatement = new MailmanagerTrafficPolicyPolicyStatementList(this, "policy_statement", false);
  public get policyStatement() {
    return this._policyStatement;
  }
  public putPolicyStatement(value: MailmanagerTrafficPolicyPolicyStatement[] | cdktn.IResolvable) {
    this._policyStatement.internalValue = value;
  }
  public resetPolicyStatement() {
    this._policyStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatementInput() {
    return this._policyStatement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktn.stringToTerraform(this._defaultAction),
      max_message_size_bytes: cdktn.numberToTerraform(this._maxMessageSizeBytes),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      policy_statement: cdktn.listMapper(mailmanagerTrafficPolicyPolicyStatementToTerraform, true)(this._policyStatement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktn.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_size_bytes: {
        value: cdktn.numberToHclTerraform(this._maxMessageSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      policy_statement: {
        value: cdktn.listMapperHcl(mailmanagerTrafficPolicyPolicyStatementToHclTerraform, true)(this._policyStatement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MailmanagerTrafficPolicyPolicyStatementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
