/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWafv2ManagedRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#region DataAwsWafv2ManagedRuleGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}
  */
  readonly vendorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}
  */
  readonly versionName?: string;
}
export interface DataAwsWafv2ManagedRuleGroupAvailableLabels {
}

export function dataAwsWafv2ManagedRuleGroupAvailableLabelsToTerraform(struct?: DataAwsWafv2ManagedRuleGroupAvailableLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupAvailableLabelsToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupAvailableLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupAvailableLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupAvailableLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsWafv2ManagedRuleGroupAvailableLabelsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference {
    return new DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupConsumedLabels {
}

export function dataAwsWafv2ManagedRuleGroupConsumedLabelsToTerraform(struct?: DataAwsWafv2ManagedRuleGroupConsumedLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupConsumedLabelsToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupConsumedLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupConsumedLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupConsumedLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsWafv2ManagedRuleGroupConsumedLabelsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference {
    return new DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insert_header - computed: true, optional: false, required: false
  private _insertHeader = new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionAllow {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionAllowToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionAllowToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_request_handling - computed: true, optional: false, required: false
  private _customRequestHandling = new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionAllowList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_response_body_key - computed: true, optional: false, required: false
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }

  // response_header - computed: true, optional: false, required: false
  private _responseHeader = new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList(this, "response_header", false);
  public get responseHeader() {
    return this._responseHeader;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionBlock {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionBlockToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionBlockToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_response - computed: true, optional: false, required: false
  private _customResponse = new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList(this, "custom_response", false);
  public get customResponse() {
    return this._customResponse;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insert_header - computed: true, optional: false, required: false
  private _insertHeader = new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCaptcha {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCaptchaToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_request_handling - computed: true, optional: false, required: false
  private _customRequestHandling = new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insert_header - computed: true, optional: false, required: false
  private _insertHeader = new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionChallenge {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionChallengeToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_request_handling - computed: true, optional: false, required: false
  private _customRequestHandling = new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionChallengeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insert_header - computed: true, optional: false, required: false
  private _insertHeader = new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList(this, "insert_header", false);
  public get insertHeader() {
    return this._insertHeader;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesActionCount {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionCountToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionCountToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesActionCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesActionCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_request_handling - computed: true, optional: false, required: false
  private _customRequestHandling = new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList(this, "custom_request_handling", false);
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionCountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRulesAction {
}

export function dataAwsWafv2ManagedRuleGroupRulesActionToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesActionToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataAwsWafv2ManagedRuleGroupRulesActionAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }

  // block - computed: true, optional: false, required: false
  private _block = new DataAwsWafv2ManagedRuleGroupRulesActionBlockList(this, "block", false);
  public get block() {
    return this._block;
  }

  // captcha - computed: true, optional: false, required: false
  private _captcha = new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList(this, "captcha", false);
  public get captcha() {
    return this._captcha;
  }

  // challenge - computed: true, optional: false, required: false
  private _challenge = new DataAwsWafv2ManagedRuleGroupRulesActionChallengeList(this, "challenge", false);
  public get challenge() {
    return this._challenge;
  }

  // count - computed: true, optional: false, required: false
  private _count = new DataAwsWafv2ManagedRuleGroupRulesActionCountList(this, "count", false);
  public get count() {
    return this._count;
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesActionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesActionOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWafv2ManagedRuleGroupRules {
}

export function dataAwsWafv2ManagedRuleGroupRulesToTerraform(struct?: DataAwsWafv2ManagedRuleGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWafv2ManagedRuleGroupRulesToHclTerraform(struct?: DataAwsWafv2ManagedRuleGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWafv2ManagedRuleGroupRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsWafv2ManagedRuleGroupRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWafv2ManagedRuleGroupRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAwsWafv2ManagedRuleGroupRulesActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsWafv2ManagedRuleGroupRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsWafv2ManagedRuleGroupRulesOutputReference {
    return new DataAwsWafv2ManagedRuleGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group aws_wafv2_managed_rule_group}
*/
export class DataAwsWafv2ManagedRuleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_managed_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsWafv2ManagedRuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsWafv2ManagedRuleGroup to import
  * @param importFromId The id of the existing DataAwsWafv2ManagedRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsWafv2ManagedRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_managed_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/wafv2_managed_rule_group aws_wafv2_managed_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWafv2ManagedRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsWafv2ManagedRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_managed_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._scope = config.scope;
    this._vendorName = config.vendorName;
    this._versionName = config.versionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_labels - computed: true, optional: false, required: false
  private _availableLabels = new DataAwsWafv2ManagedRuleGroupAvailableLabelsList(this, "available_labels", false);
  public get availableLabels() {
    return this._availableLabels;
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // consumed_labels - computed: true, optional: false, required: false
  private _consumedLabels = new DataAwsWafv2ManagedRuleGroupConsumedLabelsList(this, "consumed_labels", false);
  public get consumedLabels() {
    return this._consumedLabels;
  }

  // label_namespace - computed: true, optional: false, required: false
  public get labelNamespace() {
    return this.getStringAttribute('label_namespace');
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsWafv2ManagedRuleGroupRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
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

  // version_name - computed: false, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      scope: cdktf.stringToTerraform(this._scope),
      vendor_name: cdktf.stringToTerraform(this._vendorName),
      version_name: cdktf.stringToTerraform(this._versionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_name: {
        value: cdktf.stringToHclTerraform(this._vendorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_name: {
        value: cdktf.stringToHclTerraform(this._versionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
