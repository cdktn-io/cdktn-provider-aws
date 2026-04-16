/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubAutomationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#description SecurityhubAutomationRule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#is_terminal SecurityhubAutomationRule#is_terminal}
  */
  readonly isTerminal?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#region SecurityhubAutomationRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#rule_name SecurityhubAutomationRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#rule_order SecurityhubAutomationRule#rule_order}
  */
  readonly ruleOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#rule_status SecurityhubAutomationRule#rule_status}
  */
  readonly ruleStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#tags SecurityhubAutomationRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#actions SecurityhubAutomationRule#actions}
  */
  readonly actions?: SecurityhubAutomationRuleActions[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#criteria SecurityhubAutomationRule#criteria}
  */
  readonly criteria?: SecurityhubAutomationRuleCriteria[] | cdktn.IResolvable;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateNote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#text SecurityhubAutomationRule#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#updated_by SecurityhubAutomationRule#updated_by}
  */
  readonly updatedBy: string;
}

export function securityhubAutomationRuleActionsFindingFieldsUpdateNoteToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    updated_by: cdktn.stringToTerraform(struct!.updatedBy),
  }
}


export function securityhubAutomationRuleActionsFindingFieldsUpdateNoteToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_by: {
      value: cdktn.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._updatedBy = value.updatedBy;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // updated_by - computed: false, optional: false, required: true
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteOutputReference {
    return new SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#id SecurityhubAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#product_arn SecurityhubAutomationRule#product_arn}
  */
  readonly productArn: string;
}

export function securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    product_arn: cdktn.stringToTerraform(struct!.productArn),
  }
}


export function securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktn.IResolvable): any {
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
    product_arn: {
      value: cdktn.stringToHclTerraform(struct!.productArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._productArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._productArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._productArn = value.productArn;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // product_arn - computed: false, optional: false, required: true
  private _productArn?: string; 
  public get productArn() {
    return this.getStringAttribute('product_arn');
  }
  public set productArn(value: string) {
    this._productArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn;
  }
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsOutputReference {
    return new SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#label SecurityhubAutomationRule#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#product SecurityhubAutomationRule#product}
  */
  readonly product?: number;
}

export function securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
    product: cdktn.numberToTerraform(struct!.product),
  }
}


export function securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktn.numberToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._product = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._product = value.product;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // product - computed: false, optional: true, required: false
  private _product?: number; 
  public get product() {
    return this.getNumberAttribute('product');
  }
  public set product(value: number) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityOutputReference {
    return new SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#status SecurityhubAutomationRule#status}
  */
  readonly status?: string;
}

export function securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowOutputReference {
    return new SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#confidence SecurityhubAutomationRule#confidence}
  */
  readonly confidence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#criticality SecurityhubAutomationRule#criticality}
  */
  readonly criticality?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#types SecurityhubAutomationRule#types}
  */
  readonly types?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#user_defined_fields SecurityhubAutomationRule#user_defined_fields}
  */
  readonly userDefinedFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#verification_state SecurityhubAutomationRule#verification_state}
  */
  readonly verificationState?: string;
  /**
  * note block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#note SecurityhubAutomationRule#note}
  */
  readonly note?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktn.IResolvable;
  /**
  * related_findings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#related_findings SecurityhubAutomationRule#related_findings}
  */
  readonly relatedFindings?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#severity SecurityhubAutomationRule#severity}
  */
  readonly severity?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktn.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#workflow SecurityhubAutomationRule#workflow}
  */
  readonly workflow?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleActionsFindingFieldsUpdateToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence: cdktn.numberToTerraform(struct!.confidence),
    criticality: cdktn.numberToTerraform(struct!.criticality),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    user_defined_fields: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.userDefinedFields),
    verification_state: cdktn.stringToTerraform(struct!.verificationState),
    note: cdktn.listMapper(securityhubAutomationRuleActionsFindingFieldsUpdateNoteToTerraform, true)(struct!.note),
    related_findings: cdktn.listMapper(securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToTerraform, true)(struct!.relatedFindings),
    severity: cdktn.listMapper(securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToTerraform, true)(struct!.severity),
    workflow: cdktn.listMapper(securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToTerraform, true)(struct!.workflow),
  }
}


export function securityhubAutomationRuleActionsFindingFieldsUpdateToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence: {
      value: cdktn.numberToHclTerraform(struct!.confidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    criticality: {
      value: cdktn.numberToHclTerraform(struct!.criticality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_defined_fields: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.userDefinedFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    verification_state: {
      value: cdktn.stringToHclTerraform(struct!.verificationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleActionsFindingFieldsUpdateNoteToHclTerraform, true)(struct!.note),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteList",
    },
    related_findings: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToHclTerraform, true)(struct!.relatedFindings),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsList",
    },
    severity: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityList",
    },
    workflow: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence;
    }
    if (this._criticality !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._userDefinedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields;
    }
    if (this._verificationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState;
    }
    if (this._note?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note?.internalValue;
    }
    if (this._relatedFindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindings = this._relatedFindings?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidence = undefined;
      this._criticality = undefined;
      this._types = undefined;
      this._userDefinedFields = undefined;
      this._verificationState = undefined;
      this._note.internalValue = undefined;
      this._relatedFindings.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._workflow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidence = value.confidence;
      this._criticality = value.criticality;
      this._types = value.types;
      this._userDefinedFields = value.userDefinedFields;
      this._verificationState = value.verificationState;
      this._note.internalValue = value.note;
      this._relatedFindings.internalValue = value.relatedFindings;
      this._severity.internalValue = value.severity;
      this._workflow.internalValue = value.workflow;
    }
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence?: number; 
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }
  public set confidence(value: number) {
    this._confidence = value;
  }
  public resetConfidence() {
    this._confidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality?: number; 
  public get criticality() {
    return this.getNumberAttribute('criticality');
  }
  public set criticality(value: number) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields?: { [key: string]: string }; 
  public get userDefinedFields() {
    return this.getStringMapAttribute('user_defined_fields');
  }
  public set userDefinedFields(value: { [key: string]: string }) {
    this._userDefinedFields = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState?: string; 
  public get verificationState() {
    return this.getStringAttribute('verification_state');
  }
  public set verificationState(value: string) {
    this._verificationState = value;
  }
  public resetVerificationState() {
    this._verificationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState;
  }

  // note - computed: false, optional: true, required: false
  private _note = new SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteList(this, "note", false);
  public get note() {
    return this._note;
  }
  public putNote(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktn.IResolvable) {
    this._note.internalValue = value;
  }
  public resetNote() {
    this._note.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note.internalValue;
  }

  // related_findings - computed: false, optional: true, required: false
  private _relatedFindings = new SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsList(this, "related_findings", true);
  public get relatedFindings() {
    return this._relatedFindings;
  }
  public putRelatedFindings(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktn.IResolvable) {
    this._relatedFindings.internalValue = value;
  }
  public resetRelatedFindings() {
    this._relatedFindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsInput() {
    return this._relatedFindings.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityList(this, "severity", false);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktn.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}

export class SecurityhubAutomationRuleActionsFindingFieldsUpdateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateOutputReference {
    return new SecurityhubAutomationRuleActionsFindingFieldsUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#type SecurityhubAutomationRule#type}
  */
  readonly type?: string;
  /**
  * finding_fields_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#finding_fields_update SecurityhubAutomationRule#finding_fields_update}
  */
  readonly findingFieldsUpdate?: SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleActionsToTerraform(struct?: SecurityhubAutomationRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    finding_fields_update: cdktn.listMapper(securityhubAutomationRuleActionsFindingFieldsUpdateToTerraform, true)(struct!.findingFieldsUpdate),
  }
}


export function securityhubAutomationRuleActionsToHclTerraform(struct?: SecurityhubAutomationRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finding_fields_update: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleActionsFindingFieldsUpdateToHclTerraform, true)(struct!.findingFieldsUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleActionsFindingFieldsUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._findingFieldsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingFieldsUpdate = this._findingFieldsUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._findingFieldsUpdate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._findingFieldsUpdate.internalValue = value.findingFieldsUpdate;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // finding_fields_update - computed: false, optional: true, required: false
  private _findingFieldsUpdate = new SecurityhubAutomationRuleActionsFindingFieldsUpdateList(this, "finding_fields_update", false);
  public get findingFieldsUpdate() {
    return this._findingFieldsUpdate;
  }
  public putFindingFieldsUpdate(value: SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktn.IResolvable) {
    this._findingFieldsUpdate.internalValue = value;
  }
  public resetFindingFieldsUpdate() {
    this._findingFieldsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingFieldsUpdateInput() {
    return this._findingFieldsUpdate.internalValue;
  }
}

export class SecurityhubAutomationRuleActionsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleActions[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleActionsOutputReference {
    return new SecurityhubAutomationRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaAwsAccountId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaAwsAccountIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaAwsAccountIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaAwsAccountIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaAwsAccountId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaAwsAccountIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaAwsAccountIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaAwsAccountIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaAwsAccountName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaAwsAccountNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaAwsAccountNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaAwsAccountNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaAwsAccountName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaAwsAccountNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaAwsAccountNameOutputReference {
    return new SecurityhubAutomationRuleCriteriaAwsAccountNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaCompanyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaCompanyNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaCompanyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaCompanyNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCompanyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaCompanyNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaCompanyName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaCompanyName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaCompanyNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaCompanyName[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaCompanyNameOutputReference {
    return new SecurityhubAutomationRuleCriteriaCompanyNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaComplianceSecurityControlId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaComplianceSecurityControlIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaComplianceSecurityControlIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaComplianceStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaComplianceStatusToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaComplianceStatusToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaComplianceStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaComplianceStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaComplianceStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaComplianceStatusOutputReference {
    return new SecurityhubAutomationRuleCriteriaComplianceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaConfidence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#eq SecurityhubAutomationRule#eq}
  */
  readonly eq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#gt SecurityhubAutomationRule#gt}
  */
  readonly gt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#gte SecurityhubAutomationRule#gte}
  */
  readonly gte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#lt SecurityhubAutomationRule#lt}
  */
  readonly lt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#lte SecurityhubAutomationRule#lte}
  */
  readonly lte?: number;
}

export function securityhubAutomationRuleCriteriaConfidenceToTerraform(struct?: SecurityhubAutomationRuleCriteriaConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.numberToTerraform(struct!.eq),
    gt: cdktn.numberToTerraform(struct!.gt),
    gte: cdktn.numberToTerraform(struct!.gte),
    lt: cdktn.numberToTerraform(struct!.lt),
    lte: cdktn.numberToTerraform(struct!.lte),
  }
}


export function securityhubAutomationRuleCriteriaConfidenceToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.numberToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt: {
      value: cdktn.numberToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktn.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt: {
      value: cdktn.numberToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktn.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaConfidenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaConfidence | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaConfidence | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: number; 
  public get eq() {
    return this.getNumberAttribute('eq');
  }
  public set eq(value: number) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gt - computed: false, optional: true, required: false
  private _gt?: number; 
  public get gt() {
    return this.getNumberAttribute('gt');
  }
  public set gt(value: number) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: number; 
  public get lt() {
    return this.getNumberAttribute('lt');
  }
  public set lt(value: number) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class SecurityhubAutomationRuleCriteriaConfidenceList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaConfidence[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaConfidenceOutputReference {
    return new SecurityhubAutomationRuleCriteriaConfidenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaCreatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: number;
}

export function securityhubAutomationRuleCriteriaCreatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaCreatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaCreatedAtDateRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubAutomationRuleCriteriaCreatedAtDateRangeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaCreatedAtDateRangeOutputReference {
    return new SecurityhubAutomationRuleCriteriaCreatedAtDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaCreatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaCreatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(securityhubAutomationRuleCriteriaCreatedAtDateRangeToTerraform, true)(struct!.dateRange),
  }
}


export function securityhubAutomationRuleCriteriaCreatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaCreatedAtDateRangeToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleCriteriaCreatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaCreatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaCreatedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaCreatedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleCriteriaCreatedAtDateRangeList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaCreatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaCreatedAtOutputReference {
    return new SecurityhubAutomationRuleCriteriaCreatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaCriticality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#eq SecurityhubAutomationRule#eq}
  */
  readonly eq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#gt SecurityhubAutomationRule#gt}
  */
  readonly gt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#gte SecurityhubAutomationRule#gte}
  */
  readonly gte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#lt SecurityhubAutomationRule#lt}
  */
  readonly lt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#lte SecurityhubAutomationRule#lte}
  */
  readonly lte?: number;
}

export function securityhubAutomationRuleCriteriaCriticalityToTerraform(struct?: SecurityhubAutomationRuleCriteriaCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.numberToTerraform(struct!.eq),
    gt: cdktn.numberToTerraform(struct!.gt),
    gte: cdktn.numberToTerraform(struct!.gte),
    lt: cdktn.numberToTerraform(struct!.lt),
    lte: cdktn.numberToTerraform(struct!.lte),
  }
}


export function securityhubAutomationRuleCriteriaCriticalityToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.numberToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt: {
      value: cdktn.numberToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktn.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt: {
      value: cdktn.numberToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktn.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaCriticalityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaCriticality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaCriticality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: number; 
  public get eq() {
    return this.getNumberAttribute('eq');
  }
  public set eq(value: number) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gt - computed: false, optional: true, required: false
  private _gt?: number; 
  public get gt() {
    return this.getNumberAttribute('gt');
  }
  public set gt(value: number) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: number; 
  public get lt() {
    return this.getNumberAttribute('lt');
  }
  public set lt(value: number) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class SecurityhubAutomationRuleCriteriaCriticalityList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaCriticality[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaCriticalityOutputReference {
    return new SecurityhubAutomationRuleCriteriaCriticalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaDescriptionToTerraform(struct?: SecurityhubAutomationRuleCriteriaDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaDescriptionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaDescriptionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaDescription | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaDescription | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaDescriptionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaDescription[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaDescriptionOutputReference {
    return new SecurityhubAutomationRuleCriteriaDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: number;
}

export function securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeOutputReference {
    return new SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaFirstObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaFirstObservedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToTerraform, true)(struct!.dateRange),
  }
}


export function securityhubAutomationRuleCriteriaFirstObservedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaFirstObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaFirstObservedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaFirstObservedAtOutputReference {
    return new SecurityhubAutomationRuleCriteriaFirstObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaGeneratorId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaGeneratorIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaGeneratorId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaGeneratorIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaGeneratorId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaGeneratorIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaGeneratorId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaGeneratorId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaGeneratorIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaGeneratorIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaGeneratorIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaLastObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: number;
}

export function securityhubAutomationRuleCriteriaLastObservedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeOutputReference {
    return new SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaLastObservedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(securityhubAutomationRuleCriteriaLastObservedAtDateRangeToTerraform, true)(struct!.dateRange),
  }
}


export function securityhubAutomationRuleCriteriaLastObservedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaLastObservedAtDateRangeToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaLastObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaLastObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaLastObservedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaLastObservedAtOutputReference {
    return new SecurityhubAutomationRuleCriteriaLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaNoteText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaNoteTextToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaNoteTextToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaNoteTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaNoteText | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaNoteText | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaNoteTextList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaNoteText[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaNoteTextOutputReference {
    return new SecurityhubAutomationRuleCriteriaNoteTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: number;
}

export function securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeOutputReference {
    return new SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaNoteUpdatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToTerraform, true)(struct!.dateRange),
  }
}


export function securityhubAutomationRuleCriteriaNoteUpdatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaNoteUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaNoteUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedAtOutputReference {
    return new SecurityhubAutomationRuleCriteriaNoteUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaNoteUpdatedByToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaNoteUpdatedByToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaNoteUpdatedByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaNoteUpdatedByList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedByOutputReference {
    return new SecurityhubAutomationRuleCriteriaNoteUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaProductArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaProductArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaProductArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaProductArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaProductArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaProductArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaProductArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaProductArn[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaProductArnOutputReference {
    return new SecurityhubAutomationRuleCriteriaProductArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaProductName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaProductNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaProductName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaProductNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaProductName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaProductNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaProductName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaProductName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaProductNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaProductName[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaProductNameOutputReference {
    return new SecurityhubAutomationRuleCriteriaProductNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaRecordState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaRecordStateToTerraform(struct?: SecurityhubAutomationRuleCriteriaRecordState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaRecordStateToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRecordState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaRecordStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaRecordState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaRecordState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaRecordStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaRecordState[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaRecordStateOutputReference {
    return new SecurityhubAutomationRuleCriteriaRecordStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaRelatedFindingsId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaRelatedFindingsIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaRelatedFindingsIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaRelatedFindingsIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaRelatedFindingsIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaRelatedFindingsIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaRelatedFindingsIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaRelatedFindingsProductArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnOutputReference {
    return new SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceApplicationArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceApplicationArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceApplicationArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceApplicationArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceApplicationArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceApplicationArnOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceApplicationArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceApplicationName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceApplicationNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceApplicationNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceApplicationNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceApplicationNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceApplicationNameOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceDetailsOther {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceDetailsOtherToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceDetailsOtherToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceDetailsOtherOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceDetailsOtherList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceDetailsOtherOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceDetailsOtherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceId[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceIdOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourcePartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourcePartitionToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourcePartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourcePartitionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourcePartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourcePartitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourcePartition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourcePartition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourcePartitionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourcePartitionOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourcePartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceRegionToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceRegionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceRegionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceRegionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceRegionOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceTagsToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceTagsToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceTagsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceTags[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceTagsOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaResourceTypeToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaResourceTypeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaResourceType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaResourceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaResourceTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaResourceType[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaResourceTypeOutputReference {
    return new SecurityhubAutomationRuleCriteriaResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaSeverityLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaSeverityLabelToTerraform(struct?: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaSeverityLabelToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaSeverityLabelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaSeverityLabel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaSeverityLabelList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaSeverityLabelOutputReference {
    return new SecurityhubAutomationRuleCriteriaSeverityLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaSourceUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaSourceUrlToTerraform(struct?: SecurityhubAutomationRuleCriteriaSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaSourceUrlToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaSourceUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaSourceUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaSourceUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaSourceUrlList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaSourceUrlOutputReference {
    return new SecurityhubAutomationRuleCriteriaSourceUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaTitleToTerraform(struct?: SecurityhubAutomationRuleCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaTitleToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaTitleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaTitleList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaTitle[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaTitleOutputReference {
    return new SecurityhubAutomationRuleCriteriaTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaTypeToTerraform(struct?: SecurityhubAutomationRuleCriteriaType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaTypeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaType[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaTypeOutputReference {
    return new SecurityhubAutomationRuleCriteriaTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: number;
}

export function securityhubAutomationRuleCriteriaUpdatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeOutputReference {
    return new SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaUpdatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: cdktn.listMapper(securityhubAutomationRuleCriteriaUpdatedAtDateRangeToTerraform, true)(struct!.dateRange),
  }
}


export function securityhubAutomationRuleCriteriaUpdatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_range: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaUpdatedAtDateRangeToHclTerraform, true)(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaUpdatedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._dateRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
      this._dateRange.internalValue = value.dateRange;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // date_range - computed: false, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeList(this, "date_range", false);
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktn.IResolvable) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaUpdatedAtOutputReference {
    return new SecurityhubAutomationRuleCriteriaUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaUserDefinedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaUserDefinedFieldsToTerraform(struct?: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaUserDefinedFieldsToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaUserDefinedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaUserDefinedFieldsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaUserDefinedFieldsOutputReference {
    return new SecurityhubAutomationRuleCriteriaUserDefinedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaVerificationState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaVerificationStateToTerraform(struct?: SecurityhubAutomationRuleCriteriaVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaVerificationStateToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaVerificationStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaVerificationState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaVerificationState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaVerificationStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaVerificationState[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaVerificationStateOutputReference {
    return new SecurityhubAutomationRuleCriteriaVerificationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteriaWorkflowStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
  */
  readonly value: string;
}

export function securityhubAutomationRuleCriteriaWorkflowStatusToTerraform(struct?: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleCriteriaWorkflowStatusToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleCriteriaWorkflowStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class SecurityhubAutomationRuleCriteriaWorkflowStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaWorkflowStatusOutputReference {
    return new SecurityhubAutomationRuleCriteriaWorkflowStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleCriteria {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#aws_account_id SecurityhubAutomationRule#aws_account_id}
  */
  readonly awsAccountId?: SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktn.IResolvable;
  /**
  * aws_account_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#aws_account_name SecurityhubAutomationRule#aws_account_name}
  */
  readonly awsAccountName?: SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktn.IResolvable;
  /**
  * company_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#company_name SecurityhubAutomationRule#company_name}
  */
  readonly companyName?: SecurityhubAutomationRuleCriteriaCompanyName[] | cdktn.IResolvable;
  /**
  * compliance_associated_standards_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#compliance_associated_standards_id SecurityhubAutomationRule#compliance_associated_standards_id}
  */
  readonly complianceAssociatedStandardsId?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktn.IResolvable;
  /**
  * compliance_security_control_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#compliance_security_control_id SecurityhubAutomationRule#compliance_security_control_id}
  */
  readonly complianceSecurityControlId?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktn.IResolvable;
  /**
  * compliance_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#compliance_status SecurityhubAutomationRule#compliance_status}
  */
  readonly complianceStatus?: SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktn.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#confidence SecurityhubAutomationRule#confidence}
  */
  readonly confidence?: SecurityhubAutomationRuleCriteriaConfidence[] | cdktn.IResolvable;
  /**
  * created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#created_at SecurityhubAutomationRule#created_at}
  */
  readonly createdAt?: SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#criticality SecurityhubAutomationRule#criticality}
  */
  readonly criticality?: SecurityhubAutomationRuleCriteriaCriticality[] | cdktn.IResolvable;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#description SecurityhubAutomationRule#description}
  */
  readonly description?: SecurityhubAutomationRuleCriteriaDescription[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#first_observed_at SecurityhubAutomationRule#first_observed_at}
  */
  readonly firstObservedAt?: SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktn.IResolvable;
  /**
  * generator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#generator_id SecurityhubAutomationRule#generator_id}
  */
  readonly generatorId?: SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktn.IResolvable;
  /**
  * id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#id SecurityhubAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: SecurityhubAutomationRuleCriteriaId[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#last_observed_at SecurityhubAutomationRule#last_observed_at}
  */
  readonly lastObservedAt?: SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktn.IResolvable;
  /**
  * note_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#note_text SecurityhubAutomationRule#note_text}
  */
  readonly noteText?: SecurityhubAutomationRuleCriteriaNoteText[] | cdktn.IResolvable;
  /**
  * note_updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#note_updated_at SecurityhubAutomationRule#note_updated_at}
  */
  readonly noteUpdatedAt?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktn.IResolvable;
  /**
  * note_updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#note_updated_by SecurityhubAutomationRule#note_updated_by}
  */
  readonly noteUpdatedBy?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktn.IResolvable;
  /**
  * product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#product_arn SecurityhubAutomationRule#product_arn}
  */
  readonly productArn?: SecurityhubAutomationRuleCriteriaProductArn[] | cdktn.IResolvable;
  /**
  * product_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#product_name SecurityhubAutomationRule#product_name}
  */
  readonly productName?: SecurityhubAutomationRuleCriteriaProductName[] | cdktn.IResolvable;
  /**
  * record_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#record_state SecurityhubAutomationRule#record_state}
  */
  readonly recordState?: SecurityhubAutomationRuleCriteriaRecordState[] | cdktn.IResolvable;
  /**
  * related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#related_findings_id SecurityhubAutomationRule#related_findings_id}
  */
  readonly relatedFindingsId?: SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#related_findings_product_arn SecurityhubAutomationRule#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * resource_application_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_application_arn SecurityhubAutomationRule#resource_application_arn}
  */
  readonly resourceApplicationArn?: SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktn.IResolvable;
  /**
  * resource_application_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_application_name SecurityhubAutomationRule#resource_application_name}
  */
  readonly resourceApplicationName?: SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktn.IResolvable;
  /**
  * resource_details_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_details_other SecurityhubAutomationRule#resource_details_other}
  */
  readonly resourceDetailsOther?: SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_id SecurityhubAutomationRule#resource_id}
  */
  readonly resourceId?: SecurityhubAutomationRuleCriteriaResourceId[] | cdktn.IResolvable;
  /**
  * resource_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_partition SecurityhubAutomationRule#resource_partition}
  */
  readonly resourcePartition?: SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktn.IResolvable;
  /**
  * resource_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_region SecurityhubAutomationRule#resource_region}
  */
  readonly resourceRegion?: SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_tags SecurityhubAutomationRule#resource_tags}
  */
  readonly resourceTags?: SecurityhubAutomationRuleCriteriaResourceTags[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#resource_type SecurityhubAutomationRule#resource_type}
  */
  readonly resourceType?: SecurityhubAutomationRuleCriteriaResourceType[] | cdktn.IResolvable;
  /**
  * severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#severity_label SecurityhubAutomationRule#severity_label}
  */
  readonly severityLabel?: SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#source_url SecurityhubAutomationRule#source_url}
  */
  readonly sourceUrl?: SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#title SecurityhubAutomationRule#title}
  */
  readonly title?: SecurityhubAutomationRuleCriteriaTitle[] | cdktn.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#type SecurityhubAutomationRule#type}
  */
  readonly type?: SecurityhubAutomationRuleCriteriaType[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#updated_at SecurityhubAutomationRule#updated_at}
  */
  readonly updatedAt?: SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktn.IResolvable;
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#user_defined_fields SecurityhubAutomationRule#user_defined_fields}
  */
  readonly userDefinedFields?: SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktn.IResolvable;
  /**
  * verification_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#verification_state SecurityhubAutomationRule#verification_state}
  */
  readonly verificationState?: SecurityhubAutomationRuleCriteriaVerificationState[] | cdktn.IResolvable;
  /**
  * workflow_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#workflow_status SecurityhubAutomationRule#workflow_status}
  */
  readonly workflowStatus?: SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleCriteriaToTerraform(struct?: SecurityhubAutomationRuleCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktn.listMapper(securityhubAutomationRuleCriteriaAwsAccountIdToTerraform, true)(struct!.awsAccountId),
    aws_account_name: cdktn.listMapper(securityhubAutomationRuleCriteriaAwsAccountNameToTerraform, true)(struct!.awsAccountName),
    company_name: cdktn.listMapper(securityhubAutomationRuleCriteriaCompanyNameToTerraform, true)(struct!.companyName),
    compliance_associated_standards_id: cdktn.listMapper(securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToTerraform, true)(struct!.complianceAssociatedStandardsId),
    compliance_security_control_id: cdktn.listMapper(securityhubAutomationRuleCriteriaComplianceSecurityControlIdToTerraform, true)(struct!.complianceSecurityControlId),
    compliance_status: cdktn.listMapper(securityhubAutomationRuleCriteriaComplianceStatusToTerraform, true)(struct!.complianceStatus),
    confidence: cdktn.listMapper(securityhubAutomationRuleCriteriaConfidenceToTerraform, true)(struct!.confidence),
    created_at: cdktn.listMapper(securityhubAutomationRuleCriteriaCreatedAtToTerraform, true)(struct!.createdAt),
    criticality: cdktn.listMapper(securityhubAutomationRuleCriteriaCriticalityToTerraform, true)(struct!.criticality),
    description: cdktn.listMapper(securityhubAutomationRuleCriteriaDescriptionToTerraform, true)(struct!.description),
    first_observed_at: cdktn.listMapper(securityhubAutomationRuleCriteriaFirstObservedAtToTerraform, true)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(securityhubAutomationRuleCriteriaGeneratorIdToTerraform, true)(struct!.generatorId),
    id: cdktn.listMapper(securityhubAutomationRuleCriteriaIdToTerraform, true)(struct!.id),
    last_observed_at: cdktn.listMapper(securityhubAutomationRuleCriteriaLastObservedAtToTerraform, true)(struct!.lastObservedAt),
    note_text: cdktn.listMapper(securityhubAutomationRuleCriteriaNoteTextToTerraform, true)(struct!.noteText),
    note_updated_at: cdktn.listMapper(securityhubAutomationRuleCriteriaNoteUpdatedAtToTerraform, true)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(securityhubAutomationRuleCriteriaNoteUpdatedByToTerraform, true)(struct!.noteUpdatedBy),
    product_arn: cdktn.listMapper(securityhubAutomationRuleCriteriaProductArnToTerraform, true)(struct!.productArn),
    product_name: cdktn.listMapper(securityhubAutomationRuleCriteriaProductNameToTerraform, true)(struct!.productName),
    record_state: cdktn.listMapper(securityhubAutomationRuleCriteriaRecordStateToTerraform, true)(struct!.recordState),
    related_findings_id: cdktn.listMapper(securityhubAutomationRuleCriteriaRelatedFindingsIdToTerraform, true)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(securityhubAutomationRuleCriteriaRelatedFindingsProductArnToTerraform, true)(struct!.relatedFindingsProductArn),
    resource_application_arn: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceApplicationArnToTerraform, true)(struct!.resourceApplicationArn),
    resource_application_name: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceApplicationNameToTerraform, true)(struct!.resourceApplicationName),
    resource_details_other: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceDetailsOtherToTerraform, true)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceIdToTerraform, true)(struct!.resourceId),
    resource_partition: cdktn.listMapper(securityhubAutomationRuleCriteriaResourcePartitionToTerraform, true)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceRegionToTerraform, true)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceTagsToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(securityhubAutomationRuleCriteriaResourceTypeToTerraform, true)(struct!.resourceType),
    severity_label: cdktn.listMapper(securityhubAutomationRuleCriteriaSeverityLabelToTerraform, true)(struct!.severityLabel),
    source_url: cdktn.listMapper(securityhubAutomationRuleCriteriaSourceUrlToTerraform, true)(struct!.sourceUrl),
    title: cdktn.listMapper(securityhubAutomationRuleCriteriaTitleToTerraform, true)(struct!.title),
    type: cdktn.listMapper(securityhubAutomationRuleCriteriaTypeToTerraform, true)(struct!.type),
    updated_at: cdktn.listMapper(securityhubAutomationRuleCriteriaUpdatedAtToTerraform, true)(struct!.updatedAt),
    user_defined_fields: cdktn.listMapper(securityhubAutomationRuleCriteriaUserDefinedFieldsToTerraform, true)(struct!.userDefinedFields),
    verification_state: cdktn.listMapper(securityhubAutomationRuleCriteriaVerificationStateToTerraform, true)(struct!.verificationState),
    workflow_status: cdktn.listMapper(securityhubAutomationRuleCriteriaWorkflowStatusToTerraform, true)(struct!.workflowStatus),
  }
}


export function securityhubAutomationRuleCriteriaToHclTerraform(struct?: SecurityhubAutomationRuleCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaAwsAccountIdToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaAwsAccountIdList",
    },
    aws_account_name: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaAwsAccountNameToHclTerraform, true)(struct!.awsAccountName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaAwsAccountNameList",
    },
    company_name: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaCompanyNameToHclTerraform, true)(struct!.companyName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaCompanyNameList",
    },
    compliance_associated_standards_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToHclTerraform, true)(struct!.complianceAssociatedStandardsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdList",
    },
    compliance_security_control_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaComplianceSecurityControlIdToHclTerraform, true)(struct!.complianceSecurityControlId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaComplianceStatusToHclTerraform, true)(struct!.complianceStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaComplianceStatusList",
    },
    confidence: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaConfidenceToHclTerraform, true)(struct!.confidence),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaConfidenceList",
    },
    created_at: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaCreatedAtToHclTerraform, true)(struct!.createdAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaCreatedAtList",
    },
    criticality: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaCriticalityToHclTerraform, true)(struct!.criticality),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaCriticalityList",
    },
    description: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaDescriptionToHclTerraform, true)(struct!.description),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaDescriptionList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaFirstObservedAtToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaFirstObservedAtList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaGeneratorIdToHclTerraform, true)(struct!.generatorId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaGeneratorIdList",
    },
    id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaIdToHclTerraform, true)(struct!.id),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaIdList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaLastObservedAtToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaLastObservedAtList",
    },
    note_text: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaNoteTextToHclTerraform, true)(struct!.noteText),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaNoteTextList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaNoteUpdatedAtToHclTerraform, true)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaNoteUpdatedAtList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaNoteUpdatedByToHclTerraform, true)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaNoteUpdatedByList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaProductArnToHclTerraform, true)(struct!.productArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaProductArnList",
    },
    product_name: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaProductNameToHclTerraform, true)(struct!.productName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaProductNameList",
    },
    record_state: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaRecordStateToHclTerraform, true)(struct!.recordState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaRecordStateList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaRelatedFindingsIdToHclTerraform, true)(struct!.relatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaRelatedFindingsIdList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaRelatedFindingsProductArnToHclTerraform, true)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnList",
    },
    resource_application_arn: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceApplicationArnToHclTerraform, true)(struct!.resourceApplicationArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceApplicationArnList",
    },
    resource_application_name: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceApplicationNameToHclTerraform, true)(struct!.resourceApplicationName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceApplicationNameList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceDetailsOtherToHclTerraform, true)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceDetailsOtherList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceIdToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceIdList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourcePartitionToHclTerraform, true)(struct!.resourcePartition),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourcePartitionList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceRegionToHclTerraform, true)(struct!.resourceRegion),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceRegionList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaResourceTypeToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaResourceTypeList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaSeverityLabelToHclTerraform, true)(struct!.severityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaSeverityLabelList",
    },
    source_url: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaSourceUrlToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaSourceUrlList",
    },
    title: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaTitleList",
    },
    type: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaTypeToHclTerraform, true)(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaTypeList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaUpdatedAtToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaUpdatedAtList",
    },
    user_defined_fields: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaUserDefinedFieldsToHclTerraform, true)(struct!.userDefinedFields),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaUserDefinedFieldsList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaVerificationStateToHclTerraform, true)(struct!.verificationState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaVerificationStateList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaWorkflowStatusToHclTerraform, true)(struct!.workflowStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubAutomationRuleCriteriaWorkflowStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._awsAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
    }
    if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
    }
    if (this._complianceSecurityControlId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
    }
    if (this._complianceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
    }
    if (this._confidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence?.internalValue;
    }
    if (this._createdAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._generatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._noteText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText?.internalValue;
    }
    if (this._noteUpdatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
    }
    if (this._noteUpdatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recordState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState?.internalValue;
    }
    if (this._relatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
    }
    if (this._relatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
    }
    if (this._resourceApplicationArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationArn = this._resourceApplicationArn?.internalValue;
    }
    if (this._resourceApplicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationName = this._resourceApplicationName?.internalValue;
    }
    if (this._resourceDetailsOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourcePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
    }
    if (this._resourceRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._userDefinedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields?.internalValue;
    }
    if (this._verificationState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState?.internalValue;
    }
    if (this._workflowStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._awsAccountName.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceAssociatedStandardsId.internalValue = undefined;
      this._complianceSecurityControlId.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceApplicationArn.internalValue = undefined;
      this._resourceApplicationName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedFields.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._awsAccountName.internalValue = value.awsAccountName;
      this._companyName.internalValue = value.companyName;
      this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
      this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._productArn.internalValue = value.productArn;
      this._productName.internalValue = value.productName;
      this._recordState.internalValue = value.recordState;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceApplicationArn.internalValue = value.resourceApplicationArn;
      this._resourceApplicationName.internalValue = value.resourceApplicationName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severityLabel.internalValue = value.severityLabel;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedFields.internalValue = value.userDefinedFields;
      this._verificationState.internalValue = value.verificationState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new SecurityhubAutomationRuleCriteriaAwsAccountIdList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // aws_account_name - computed: false, optional: true, required: false
  private _awsAccountName = new SecurityhubAutomationRuleCriteriaAwsAccountNameList(this, "aws_account_name", true);
  public get awsAccountName() {
    return this._awsAccountName;
  }
  public putAwsAccountName(value: SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktn.IResolvable) {
    this._awsAccountName.internalValue = value;
  }
  public resetAwsAccountName() {
    this._awsAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNameInput() {
    return this._awsAccountName.internalValue;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName = new SecurityhubAutomationRuleCriteriaCompanyNameList(this, "company_name", true);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: SecurityhubAutomationRuleCriteriaCompanyName[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_associated_standards_id - computed: false, optional: true, required: false
  private _complianceAssociatedStandardsId = new SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdList(this, "compliance_associated_standards_id", true);
  public get complianceAssociatedStandardsId() {
    return this._complianceAssociatedStandardsId;
  }
  public putComplianceAssociatedStandardsId(value: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktn.IResolvable) {
    this._complianceAssociatedStandardsId.internalValue = value;
  }
  public resetComplianceAssociatedStandardsId() {
    this._complianceAssociatedStandardsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAssociatedStandardsIdInput() {
    return this._complianceAssociatedStandardsId.internalValue;
  }

  // compliance_security_control_id - computed: false, optional: true, required: false
  private _complianceSecurityControlId = new SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdList(this, "compliance_security_control_id", true);
  public get complianceSecurityControlId() {
    return this._complianceSecurityControlId;
  }
  public putComplianceSecurityControlId(value: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktn.IResolvable) {
    this._complianceSecurityControlId.internalValue = value;
  }
  public resetComplianceSecurityControlId() {
    this._complianceSecurityControlId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlIdInput() {
    return this._complianceSecurityControlId.internalValue;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus = new SecurityhubAutomationRuleCriteriaComplianceStatusList(this, "compliance_status", true);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktn.IResolvable) {
    this._complianceStatus.internalValue = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus.internalValue;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence = new SecurityhubAutomationRuleCriteriaConfidenceList(this, "confidence", true);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: SecurityhubAutomationRuleCriteriaConfidence[] | cdktn.IResolvable) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt = new SecurityhubAutomationRuleCriteriaCreatedAtList(this, "created_at", true);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktn.IResolvable) {
    this._createdAt.internalValue = value;
  }
  public resetCreatedAt() {
    this._createdAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new SecurityhubAutomationRuleCriteriaCriticalityList(this, "criticality", true);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: SecurityhubAutomationRuleCriteriaCriticality[] | cdktn.IResolvable) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new SecurityhubAutomationRuleCriteriaDescriptionList(this, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: SecurityhubAutomationRuleCriteriaDescription[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new SecurityhubAutomationRuleCriteriaFirstObservedAtList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // generator_id - computed: false, optional: true, required: false
  private _generatorId = new SecurityhubAutomationRuleCriteriaGeneratorIdList(this, "generator_id", true);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktn.IResolvable) {
    this._generatorId.internalValue = value;
  }
  public resetGeneratorId() {
    this._generatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new SecurityhubAutomationRuleCriteriaIdList(this, "id", true);
  public get id() {
    return this._id;
  }
  public putId(value: SecurityhubAutomationRuleCriteriaId[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new SecurityhubAutomationRuleCriteriaLastObservedAtList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText = new SecurityhubAutomationRuleCriteriaNoteTextList(this, "note_text", true);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: SecurityhubAutomationRuleCriteriaNoteText[] | cdktn.IResolvable) {
    this._noteText.internalValue = value;
  }
  public resetNoteText() {
    this._noteText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText.internalValue;
  }

  // note_updated_at - computed: false, optional: true, required: false
  private _noteUpdatedAt = new SecurityhubAutomationRuleCriteriaNoteUpdatedAtList(this, "note_updated_at", true);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktn.IResolvable) {
    this._noteUpdatedAt.internalValue = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt.internalValue;
  }

  // note_updated_by - computed: false, optional: true, required: false
  private _noteUpdatedBy = new SecurityhubAutomationRuleCriteriaNoteUpdatedByList(this, "note_updated_by", true);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn = new SecurityhubAutomationRuleCriteriaProductArnList(this, "product_arn", true);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: SecurityhubAutomationRuleCriteriaProductArn[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName = new SecurityhubAutomationRuleCriteriaProductNameList(this, "product_name", true);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: SecurityhubAutomationRuleCriteriaProductName[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState = new SecurityhubAutomationRuleCriteriaRecordStateList(this, "record_state", true);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: SecurityhubAutomationRuleCriteriaRecordState[] | cdktn.IResolvable) {
    this._recordState.internalValue = value;
  }
  public resetRecordState() {
    this._recordState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState.internalValue;
  }

  // related_findings_id - computed: false, optional: true, required: false
  private _relatedFindingsId = new SecurityhubAutomationRuleCriteriaRelatedFindingsIdList(this, "related_findings_id", true);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktn.IResolvable) {
    this._relatedFindingsId.internalValue = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId.internalValue;
  }

  // related_findings_product_arn - computed: false, optional: true, required: false
  private _relatedFindingsProductArn = new SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnList(this, "related_findings_product_arn", true);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_application_arn - computed: false, optional: true, required: false
  private _resourceApplicationArn = new SecurityhubAutomationRuleCriteriaResourceApplicationArnList(this, "resource_application_arn", true);
  public get resourceApplicationArn() {
    return this._resourceApplicationArn;
  }
  public putResourceApplicationArn(value: SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktn.IResolvable) {
    this._resourceApplicationArn.internalValue = value;
  }
  public resetResourceApplicationArn() {
    this._resourceApplicationArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationArnInput() {
    return this._resourceApplicationArn.internalValue;
  }

  // resource_application_name - computed: false, optional: true, required: false
  private _resourceApplicationName = new SecurityhubAutomationRuleCriteriaResourceApplicationNameList(this, "resource_application_name", true);
  public get resourceApplicationName() {
    return this._resourceApplicationName;
  }
  public putResourceApplicationName(value: SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktn.IResolvable) {
    this._resourceApplicationName.internalValue = value;
  }
  public resetResourceApplicationName() {
    this._resourceApplicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationNameInput() {
    return this._resourceApplicationName.internalValue;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther = new SecurityhubAutomationRuleCriteriaResourceDetailsOtherList(this, "resource_details_other", true);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktn.IResolvable) {
    this._resourceDetailsOther.internalValue = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new SecurityhubAutomationRuleCriteriaResourceIdList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: SecurityhubAutomationRuleCriteriaResourceId[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_partition - computed: false, optional: true, required: false
  private _resourcePartition = new SecurityhubAutomationRuleCriteriaResourcePartitionList(this, "resource_partition", true);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktn.IResolvable) {
    this._resourcePartition.internalValue = value;
  }
  public resetResourcePartition() {
    this._resourcePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition.internalValue;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion = new SecurityhubAutomationRuleCriteriaResourceRegionList(this, "resource_region", true);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktn.IResolvable) {
    this._resourceRegion.internalValue = value;
  }
  public resetResourceRegion() {
    this._resourceRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new SecurityhubAutomationRuleCriteriaResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SecurityhubAutomationRuleCriteriaResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new SecurityhubAutomationRuleCriteriaResourceTypeList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: SecurityhubAutomationRuleCriteriaResourceType[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity_label - computed: false, optional: true, required: false
  private _severityLabel = new SecurityhubAutomationRuleCriteriaSeverityLabelList(this, "severity_label", true);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktn.IResolvable) {
    this._severityLabel.internalValue = value;
  }
  public resetSeverityLabel() {
    this._severityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel.internalValue;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl = new SecurityhubAutomationRuleCriteriaSourceUrlList(this, "source_url", true);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new SecurityhubAutomationRuleCriteriaTitleList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: SecurityhubAutomationRuleCriteriaTitle[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new SecurityhubAutomationRuleCriteriaTypeList(this, "type", true);
  public get type() {
    return this._type;
  }
  public putType(value: SecurityhubAutomationRuleCriteriaType[] | cdktn.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new SecurityhubAutomationRuleCriteriaUpdatedAtList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields = new SecurityhubAutomationRuleCriteriaUserDefinedFieldsList(this, "user_defined_fields", true);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktn.IResolvable) {
    this._userDefinedFields.internalValue = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields.internalValue;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState = new SecurityhubAutomationRuleCriteriaVerificationStateList(this, "verification_state", true);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: SecurityhubAutomationRuleCriteriaVerificationState[] | cdktn.IResolvable) {
    this._verificationState.internalValue = value;
  }
  public resetVerificationState() {
    this._verificationState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState.internalValue;
  }

  // workflow_status - computed: false, optional: true, required: false
  private _workflowStatus = new SecurityhubAutomationRuleCriteriaWorkflowStatusList(this, "workflow_status", true);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktn.IResolvable) {
    this._workflowStatus.internalValue = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus.internalValue;
  }
}

export class SecurityhubAutomationRuleCriteriaList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleCriteria[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleCriteriaOutputReference {
    return new SecurityhubAutomationRuleCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule}
*/
export class SecurityhubAutomationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_automation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubAutomationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubAutomationRule to import
  * @param importFromId The id of the existing SecurityhubAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubAutomationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_automation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubAutomationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_automation_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.41.0',
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
    this._isTerminal = config.isTerminal;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._ruleOrder = config.ruleOrder;
    this._ruleStatus = config.ruleStatus;
    this._tags = config.tags;
    this._actions.internalValue = config.actions;
    this._criteria.internalValue = config.criteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_terminal - computed: true, optional: true, required: false
  private _isTerminal?: boolean | cdktn.IResolvable; 
  public get isTerminal() {
    return this.getBooleanAttribute('is_terminal');
  }
  public set isTerminal(value: boolean | cdktn.IResolvable) {
    this._isTerminal = value;
  }
  public resetIsTerminal() {
    this._isTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTerminalInput() {
    return this._isTerminal;
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

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: number; 
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }
  public set ruleOrder(value: number) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // rule_status - computed: true, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new SecurityhubAutomationRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SecurityhubAutomationRuleActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new SecurityhubAutomationRuleCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityhubAutomationRuleCriteria[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      is_terminal: cdktn.booleanToTerraform(this._isTerminal),
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      rule_order: cdktn.numberToTerraform(this._ruleOrder),
      rule_status: cdktn.stringToTerraform(this._ruleStatus),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      actions: cdktn.listMapper(securityhubAutomationRuleActionsToTerraform, true)(this._actions.internalValue),
      criteria: cdktn.listMapper(securityhubAutomationRuleCriteriaToTerraform, true)(this._criteria.internalValue),
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
      is_terminal: {
        value: cdktn.booleanToHclTerraform(this._isTerminal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      rule_order: {
        value: cdktn.numberToHclTerraform(this._ruleOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_status: {
        value: cdktn.stringToHclTerraform(this._ruleStatus),
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
      actions: {
        value: cdktn.listMapperHcl(securityhubAutomationRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityhubAutomationRuleActionsList",
      },
      criteria: {
        value: cdktn.listMapperHcl(securityhubAutomationRuleCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubAutomationRuleCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
