/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubInsightConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#group_by_attribute SecurityhubInsight#group_by_attribute}
  */
  readonly groupByAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#name SecurityhubInsight#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#region SecurityhubInsight#region}
  */
  readonly region?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#filters SecurityhubInsight#filters}
  */
  readonly filters: SecurityhubInsightFilters;
}
export interface SecurityhubInsightFiltersAwsAccountId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersAwsAccountIdToTerraform(struct?: SecurityhubInsightFiltersAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersAwsAccountIdToHclTerraform(struct?: SecurityhubInsightFiltersAwsAccountId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersAwsAccountIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersAwsAccountId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersAwsAccountId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersAwsAccountIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersAwsAccountIdOutputReference {
    return new SecurityhubInsightFiltersAwsAccountIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersCompanyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersCompanyNameToTerraform(struct?: SecurityhubInsightFiltersCompanyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersCompanyNameToHclTerraform(struct?: SecurityhubInsightFiltersCompanyName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersCompanyNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersCompanyName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersCompanyName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersCompanyNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersCompanyNameOutputReference {
    return new SecurityhubInsightFiltersCompanyNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersComplianceStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersComplianceStatusToTerraform(struct?: SecurityhubInsightFiltersComplianceStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersComplianceStatusToHclTerraform(struct?: SecurityhubInsightFiltersComplianceStatus | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersComplianceStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersComplianceStatus | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersComplianceStatus | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersComplianceStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersComplianceStatusOutputReference {
    return new SecurityhubInsightFiltersComplianceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersConfidence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersConfidenceToTerraform(struct?: SecurityhubInsightFiltersConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersConfidenceToHclTerraform(struct?: SecurityhubInsightFiltersConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersConfidenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersConfidence | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersConfidence | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersConfidenceList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersConfidenceOutputReference {
    return new SecurityhubInsightFiltersConfidenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersCreatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersCreatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any {
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

export class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersCreatedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersCreatedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersCreatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange;
}

export function securityhubInsightFiltersCreatedAtToTerraform(struct?: SecurityhubInsightFiltersCreatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersCreatedAtToHclTerraform(struct?: SecurityhubInsightFiltersCreatedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersCreatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersCreatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersCreatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersCreatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersCreatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersCreatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersCreatedAtDateRange) {
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

export class SecurityhubInsightFiltersCreatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersCreatedAtOutputReference {
    return new SecurityhubInsightFiltersCreatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersCriticality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersCriticalityToTerraform(struct?: SecurityhubInsightFiltersCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersCriticalityToHclTerraform(struct?: SecurityhubInsightFiltersCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersCriticalityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersCriticality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersCriticality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersCriticalityList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersCriticalityOutputReference {
    return new SecurityhubInsightFiltersCriticalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersDescriptionToTerraform(struct?: SecurityhubInsightFiltersDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersDescriptionToHclTerraform(struct?: SecurityhubInsightFiltersDescription | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersDescriptionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersDescription | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersDescription | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersDescriptionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersDescription[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersDescriptionOutputReference {
    return new SecurityhubInsightFiltersDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersFindingProviderFieldsConfidenceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsConfidenceList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsConfidenceOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsConfidenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersFindingProviderFieldsCriticalityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsCriticalityList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsCriticalityOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsCriticalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersFindingProviderFieldsTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersFindingProviderFieldsTypesList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFindingProviderFieldsTypesOutputReference {
    return new SecurityhubInsightFiltersFindingProviderFieldsTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersFirstObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any {
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

export class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersFirstObservedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFirstObservedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersFirstObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange;
}

export function securityhubInsightFiltersFirstObservedAtToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersFirstObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersFirstObservedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFirstObservedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersFirstObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersFirstObservedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersFirstObservedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersFirstObservedAtDateRange) {
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

export class SecurityhubInsightFiltersFirstObservedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersFirstObservedAtOutputReference {
    return new SecurityhubInsightFiltersFirstObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersGeneratorId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersGeneratorIdToTerraform(struct?: SecurityhubInsightFiltersGeneratorId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersGeneratorIdToHclTerraform(struct?: SecurityhubInsightFiltersGeneratorId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersGeneratorIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersGeneratorId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersGeneratorId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersGeneratorIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersGeneratorIdOutputReference {
    return new SecurityhubInsightFiltersGeneratorIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersIdToTerraform(struct?: SecurityhubInsightFiltersId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersIdToHclTerraform(struct?: SecurityhubInsightFiltersId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersIdOutputReference {
    return new SecurityhubInsightFiltersIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersKeyword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersKeywordToTerraform(struct?: SecurityhubInsightFiltersKeyword | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersKeywordToHclTerraform(struct?: SecurityhubInsightFiltersKeyword | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SecurityhubInsightFiltersKeywordOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersKeyword | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersKeyword | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class SecurityhubInsightFiltersKeywordList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersKeywordOutputReference {
    return new SecurityhubInsightFiltersKeywordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersLastObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any {
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

export class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersLastObservedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersLastObservedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange;
}

export function securityhubInsightFiltersLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersLastObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersLastObservedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersLastObservedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersLastObservedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersLastObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersLastObservedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersLastObservedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersLastObservedAtDateRange) {
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

export class SecurityhubInsightFiltersLastObservedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersLastObservedAtOutputReference {
    return new SecurityhubInsightFiltersLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersMalwareName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareNameToTerraform(struct?: SecurityhubInsightFiltersMalwareName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersMalwareNameToHclTerraform(struct?: SecurityhubInsightFiltersMalwareName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersMalwareNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersMalwareName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersMalwareName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersMalwareNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersMalwareNameOutputReference {
    return new SecurityhubInsightFiltersMalwareNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersMalwarePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwarePathToTerraform(struct?: SecurityhubInsightFiltersMalwarePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersMalwarePathToHclTerraform(struct?: SecurityhubInsightFiltersMalwarePath | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersMalwarePathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersMalwarePath | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersMalwarePath | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersMalwarePathList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersMalwarePathOutputReference {
    return new SecurityhubInsightFiltersMalwarePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersMalwareState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareStateToTerraform(struct?: SecurityhubInsightFiltersMalwareState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersMalwareStateToHclTerraform(struct?: SecurityhubInsightFiltersMalwareState | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersMalwareStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersMalwareState | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersMalwareState | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersMalwareStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersMalwareStateOutputReference {
    return new SecurityhubInsightFiltersMalwareStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersMalwareType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareTypeToTerraform(struct?: SecurityhubInsightFiltersMalwareType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersMalwareTypeToHclTerraform(struct?: SecurityhubInsightFiltersMalwareType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersMalwareTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersMalwareType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersMalwareType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersMalwareTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersMalwareTypeOutputReference {
    return new SecurityhubInsightFiltersMalwareTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkDestinationDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNetworkDestinationDomainToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNetworkDestinationDomainOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkDestinationDomain | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNetworkDestinationDomain | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNetworkDestinationDomainList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkDestinationDomainOutputReference {
    return new SecurityhubInsightFiltersNetworkDestinationDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersNetworkDestinationIpv4ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkDestinationIpv4OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersNetworkDestinationIpv4List extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkDestinationIpv4OutputReference {
    return new SecurityhubInsightFiltersNetworkDestinationIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersNetworkDestinationIpv6ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkDestinationIpv6OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersNetworkDestinationIpv6List extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkDestinationIpv6OutputReference {
    return new SecurityhubInsightFiltersNetworkDestinationIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersNetworkDestinationPortToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkDestinationPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkDestinationPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkDestinationPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersNetworkDestinationPortList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkDestinationPortOutputReference {
    return new SecurityhubInsightFiltersNetworkDestinationPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkDirection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkDirectionToTerraform(struct?: SecurityhubInsightFiltersNetworkDirection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNetworkDirectionToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDirection | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNetworkDirectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkDirection | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNetworkDirection | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNetworkDirectionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkDirectionOutputReference {
    return new SecurityhubInsightFiltersNetworkDirectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkProtocolToTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNetworkProtocolToHclTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNetworkProtocolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkProtocol | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNetworkProtocol | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNetworkProtocolList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkProtocolOutputReference {
    return new SecurityhubInsightFiltersNetworkProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkSourceDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNetworkSourceDomainToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNetworkSourceDomainOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkSourceDomain | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNetworkSourceDomain | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNetworkSourceDomainList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkSourceDomainOutputReference {
    return new SecurityhubInsightFiltersNetworkSourceDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersNetworkSourceIpv4ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkSourceIpv4OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkSourceIpv4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersNetworkSourceIpv4List extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkSourceIpv4OutputReference {
    return new SecurityhubInsightFiltersNetworkSourceIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersNetworkSourceIpv6ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkSourceIpv6OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkSourceIpv6 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersNetworkSourceIpv6List extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkSourceIpv6OutputReference {
    return new SecurityhubInsightFiltersNetworkSourceIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkSourceMac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkSourceMacToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNetworkSourceMacToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNetworkSourceMacOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkSourceMac | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNetworkSourceMac | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNetworkSourceMacList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkSourceMacOutputReference {
    return new SecurityhubInsightFiltersNetworkSourceMacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNetworkSourcePort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersNetworkSourcePortToTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersNetworkSourcePortToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNetworkSourcePortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNetworkSourcePort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNetworkSourcePort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersNetworkSourcePortList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNetworkSourcePortOutputReference {
    return new SecurityhubInsightFiltersNetworkSourcePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNoteText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNoteTextToTerraform(struct?: SecurityhubInsightFiltersNoteText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNoteTextToHclTerraform(struct?: SecurityhubInsightFiltersNoteText | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNoteTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNoteText | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNoteText | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNoteTextList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNoteTextOutputReference {
    return new SecurityhubInsightFiltersNoteTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNoteUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any {
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

export class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersNoteUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange;
}

export function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersNoteUpdatedAtToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersNoteUpdatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersNoteUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNoteUpdatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange) {
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

export class SecurityhubInsightFiltersNoteUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNoteUpdatedAtOutputReference {
    return new SecurityhubInsightFiltersNoteUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersNoteUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNoteUpdatedByToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersNoteUpdatedByToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersNoteUpdatedByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersNoteUpdatedBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersNoteUpdatedBy | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersNoteUpdatedByList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersNoteUpdatedByOutputReference {
    return new SecurityhubInsightFiltersNoteUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProcessLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any {
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

export class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersProcessLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange;
}

export function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersProcessLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersProcessLaunchedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessLaunchedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersProcessLaunchedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessLaunchedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange) {
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

export class SecurityhubInsightFiltersProcessLaunchedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessLaunchedAtOutputReference {
    return new SecurityhubInsightFiltersProcessLaunchedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProcessNameToTerraform(struct?: SecurityhubInsightFiltersProcessName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProcessNameToHclTerraform(struct?: SecurityhubInsightFiltersProcessName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersProcessNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersProcessNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessNameOutputReference {
    return new SecurityhubInsightFiltersProcessNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessParentPid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersProcessParentPidToTerraform(struct?: SecurityhubInsightFiltersProcessParentPid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersProcessParentPidToHclTerraform(struct?: SecurityhubInsightFiltersProcessParentPid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersProcessParentPidOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessParentPid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersProcessParentPid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersProcessParentPidList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessParentPidOutputReference {
    return new SecurityhubInsightFiltersProcessParentPidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProcessPathToTerraform(struct?: SecurityhubInsightFiltersProcessPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProcessPathToHclTerraform(struct?: SecurityhubInsightFiltersProcessPath | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersProcessPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessPath | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessPath | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersProcessPathList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessPathOutputReference {
    return new SecurityhubInsightFiltersProcessPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessPid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersProcessPidToTerraform(struct?: SecurityhubInsightFiltersProcessPid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktn.stringToTerraform(struct!.eq),
    gte: cdktn.stringToTerraform(struct!.gte),
    lte: cdktn.stringToTerraform(struct!.lte),
  }
}


export function securityhubInsightFiltersProcessPidToHclTerraform(struct?: SecurityhubInsightFiltersProcessPid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktn.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gte: {
      value: cdktn.stringToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte: {
      value: cdktn.stringToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersProcessPidOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessPid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersProcessPid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
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
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: string; 
  public get gte() {
    return this.getStringAttribute('gte');
  }
  public set gte(value: string) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: string; 
  public get lte() {
    return this.getStringAttribute('lte');
  }
  public set lte(value: string) {
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

export class SecurityhubInsightFiltersProcessPidList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessPidOutputReference {
    return new SecurityhubInsightFiltersProcessPidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProcessTerminatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any {
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

export class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersProcessTerminatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange;
}

export function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersProcessTerminatedAtToHclTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersProcessTerminatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessTerminatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersProcessTerminatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProcessTerminatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange) {
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

export class SecurityhubInsightFiltersProcessTerminatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProcessTerminatedAtOutputReference {
    return new SecurityhubInsightFiltersProcessTerminatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProductArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductArnToTerraform(struct?: SecurityhubInsightFiltersProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProductArnToHclTerraform(struct?: SecurityhubInsightFiltersProductArn | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersProductArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProductArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProductArn | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersProductArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProductArnOutputReference {
    return new SecurityhubInsightFiltersProductArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProductFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductFieldsToTerraform(struct?: SecurityhubInsightFiltersProductFields | cdktn.IResolvable): any {
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


export function securityhubInsightFiltersProductFieldsToHclTerraform(struct?: SecurityhubInsightFiltersProductFields | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersProductFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProductFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProductFields | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersProductFieldsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProductFieldsOutputReference {
    return new SecurityhubInsightFiltersProductFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersProductName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductNameToTerraform(struct?: SecurityhubInsightFiltersProductName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersProductNameToHclTerraform(struct?: SecurityhubInsightFiltersProductName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersProductNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersProductName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersProductName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersProductNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersProductName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersProductNameOutputReference {
    return new SecurityhubInsightFiltersProductNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersRecommendationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRecommendationTextToTerraform(struct?: SecurityhubInsightFiltersRecommendationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersRecommendationTextToHclTerraform(struct?: SecurityhubInsightFiltersRecommendationText | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersRecommendationTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersRecommendationText | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersRecommendationText | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersRecommendationTextList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersRecommendationTextOutputReference {
    return new SecurityhubInsightFiltersRecommendationTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersRecordState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRecordStateToTerraform(struct?: SecurityhubInsightFiltersRecordState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersRecordStateToHclTerraform(struct?: SecurityhubInsightFiltersRecordState | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersRecordStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersRecordState | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersRecordState | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersRecordStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersRecordStateOutputReference {
    return new SecurityhubInsightFiltersRecordStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersRelatedFindingsId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersRelatedFindingsIdToHclTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersRelatedFindingsIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersRelatedFindingsId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersRelatedFindingsId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersRelatedFindingsIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersRelatedFindingsIdOutputReference {
    return new SecurityhubInsightFiltersRelatedFindingsIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersRelatedFindingsProductArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersRelatedFindingsProductArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersRelatedFindingsProductArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersRelatedFindingsProductArnOutputReference {
    return new SecurityhubInsightFiltersRelatedFindingsProductArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceTypeOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdOutputReference {
    return new SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange) {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtOutputReference {
    return new SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusOutputReference {
    return new SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameOutputReference {
    return new SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdOutputReference {
    return new SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameOutputReference {
    return new SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceContainerImageId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceContainerImageIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceContainerImageIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceContainerImageId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerImageId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceContainerImageIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceContainerImageIdOutputReference {
    return new SecurityhubInsightFiltersResourceContainerImageIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceContainerImageName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceContainerImageNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceContainerImageNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceContainerImageName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerImageName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceContainerImageNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceContainerImageNameOutputReference {
    return new SecurityhubInsightFiltersResourceContainerImageNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any {
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

export class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange;
}

export function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersResourceContainerLaunchedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange) {
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

export class SecurityhubInsightFiltersResourceContainerLaunchedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceContainerLaunchedAtOutputReference {
    return new SecurityhubInsightFiltersResourceContainerLaunchedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceContainerName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceContainerNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerName | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceContainerNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceContainerName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerName | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceContainerNameList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceContainerNameOutputReference {
    return new SecurityhubInsightFiltersResourceContainerNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceDetailsOther {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther | cdktn.IResolvable): any {
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


export function securityhubInsightFiltersResourceDetailsOtherToHclTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceDetailsOtherOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceDetailsOther | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceDetailsOther | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceDetailsOtherList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceDetailsOtherOutputReference {
    return new SecurityhubInsightFiltersResourceDetailsOtherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceIdToTerraform(struct?: SecurityhubInsightFiltersResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceId | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceId | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceIdList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceIdOutputReference {
    return new SecurityhubInsightFiltersResourceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourcePartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourcePartitionToTerraform(struct?: SecurityhubInsightFiltersResourcePartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourcePartitionToHclTerraform(struct?: SecurityhubInsightFiltersResourcePartition | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourcePartitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourcePartition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourcePartition | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourcePartitionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourcePartitionOutputReference {
    return new SecurityhubInsightFiltersResourcePartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceRegionToTerraform(struct?: SecurityhubInsightFiltersResourceRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceRegionToHclTerraform(struct?: SecurityhubInsightFiltersResourceRegion | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceRegionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceRegion | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceRegion | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceRegionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceRegionOutputReference {
    return new SecurityhubInsightFiltersResourceRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceTagsToTerraform(struct?: SecurityhubInsightFiltersResourceTags | cdktn.IResolvable): any {
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


export function securityhubInsightFiltersResourceTagsToHclTerraform(struct?: SecurityhubInsightFiltersResourceTags | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceTags | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceTagsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceTagsOutputReference {
    return new SecurityhubInsightFiltersResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersResourceTypeToHclTerraform(struct?: SecurityhubInsightFiltersResourceType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersResourceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersResourceType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersResourceTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersResourceTypeOutputReference {
    return new SecurityhubInsightFiltersResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersSeverityLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersSeverityLabel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersSeverityLabelToHclTerraform(struct?: SecurityhubInsightFiltersSeverityLabel | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersSeverityLabelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersSeverityLabel | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersSeverityLabel | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersSeverityLabelList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersSeverityLabelOutputReference {
    return new SecurityhubInsightFiltersSeverityLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersSourceUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersSourceUrlToTerraform(struct?: SecurityhubInsightFiltersSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersSourceUrlToHclTerraform(struct?: SecurityhubInsightFiltersSourceUrl | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersSourceUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersSourceUrl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersSourceUrl | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersSourceUrlList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersSourceUrlOutputReference {
    return new SecurityhubInsightFiltersSourceUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorCategoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorCategoryList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorCategoryOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange;
}

export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorSourceList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorSourceOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorTypeOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersThreatIntelIndicatorValueList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorValueOutputReference {
    return new SecurityhubInsightFiltersThreatIntelIndicatorValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersTitleToHclTerraform(struct?: SecurityhubInsightFiltersTitle | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersTitleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersTitle | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersTitleList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersTitle[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersTitleOutputReference {
    return new SecurityhubInsightFiltersTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersTypeToHclTerraform(struct?: SecurityhubInsightFiltersType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersType[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersTypeOutputReference {
    return new SecurityhubInsightFiltersTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any {
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

export class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFiltersUpdatedAtDateRange | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUpdatedAtDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityhubInsightFiltersUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange;
}

export function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct!.dateRange),
  }
}


export function securityhubInsightFiltersUpdatedAtToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable): any {
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
      value: securityhubInsightFiltersUpdatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersUpdatedAtDateRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersUpdatedAtDateRange) {
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

export class SecurityhubInsightFiltersUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersUpdatedAtOutputReference {
    return new SecurityhubInsightFiltersUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersUserDefinedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersUserDefinedValuesToTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues | cdktn.IResolvable): any {
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


export function securityhubInsightFiltersUserDefinedValuesToHclTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersUserDefinedValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersUserDefinedValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUserDefinedValues | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersUserDefinedValuesList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersUserDefinedValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersUserDefinedValuesOutputReference {
    return new SecurityhubInsightFiltersUserDefinedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersVerificationState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersVerificationStateToHclTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersVerificationStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersVerificationStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersVerificationStateOutputReference {
    return new SecurityhubInsightFiltersVerificationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersWorkflowStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersWorkflowStatusToHclTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersWorkflowStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersWorkflowStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersWorkflowStatusOutputReference {
    return new SecurityhubInsightFiltersWorkflowStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFilters {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#aws_account_id SecurityhubInsight#aws_account_id}
  */
  readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable;
  /**
  * company_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#company_name SecurityhubInsight#company_name}
  */
  readonly companyName?: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable;
  /**
  * compliance_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#compliance_status SecurityhubInsight#compliance_status}
  */
  readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#confidence SecurityhubInsight#confidence}
  */
  readonly confidence?: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable;
  /**
  * created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#created_at SecurityhubInsight#created_at}
  */
  readonly createdAt?: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#criticality SecurityhubInsight#criticality}
  */
  readonly criticality?: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#description SecurityhubInsight#description}
  */
  readonly description?: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
  */
  readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
  */
  readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
  */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
  */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
  */
  readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_original block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
  */
  readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
  */
  readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#first_observed_at SecurityhubInsight#first_observed_at}
  */
  readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable;
  /**
  * generator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#generator_id SecurityhubInsight#generator_id}
  */
  readonly generatorId?: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable;
  /**
  * id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: SecurityhubInsightFiltersId[] | cdktn.IResolvable;
  /**
  * keyword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#keyword SecurityhubInsight#keyword}
  */
  readonly keyword?: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#last_observed_at SecurityhubInsight#last_observed_at}
  */
  readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable;
  /**
  * malware_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#malware_name SecurityhubInsight#malware_name}
  */
  readonly malwareName?: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable;
  /**
  * malware_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#malware_path SecurityhubInsight#malware_path}
  */
  readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable;
  /**
  * malware_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#malware_state SecurityhubInsight#malware_state}
  */
  readonly malwareState?: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable;
  /**
  * malware_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#malware_type SecurityhubInsight#malware_type}
  */
  readonly malwareType?: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable;
  /**
  * network_destination_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_destination_domain SecurityhubInsight#network_destination_domain}
  */
  readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable;
  /**
  * network_destination_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
  */
  readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktn.IResolvable;
  /**
  * network_destination_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
  */
  readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktn.IResolvable;
  /**
  * network_destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_destination_port SecurityhubInsight#network_destination_port}
  */
  readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable;
  /**
  * network_direction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_direction SecurityhubInsight#network_direction}
  */
  readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable;
  /**
  * network_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_protocol SecurityhubInsight#network_protocol}
  */
  readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable;
  /**
  * network_source_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_source_domain SecurityhubInsight#network_source_domain}
  */
  readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable;
  /**
  * network_source_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
  */
  readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktn.IResolvable;
  /**
  * network_source_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
  */
  readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktn.IResolvable;
  /**
  * network_source_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_source_mac SecurityhubInsight#network_source_mac}
  */
  readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable;
  /**
  * network_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#network_source_port SecurityhubInsight#network_source_port}
  */
  readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable;
  /**
  * note_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#note_text SecurityhubInsight#note_text}
  */
  readonly noteText?: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable;
  /**
  * note_updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#note_updated_at SecurityhubInsight#note_updated_at}
  */
  readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable;
  /**
  * note_updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#note_updated_by SecurityhubInsight#note_updated_by}
  */
  readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable;
  /**
  * process_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_launched_at SecurityhubInsight#process_launched_at}
  */
  readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable;
  /**
  * process_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_name SecurityhubInsight#process_name}
  */
  readonly processName?: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable;
  /**
  * process_parent_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_parent_pid SecurityhubInsight#process_parent_pid}
  */
  readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable;
  /**
  * process_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_path SecurityhubInsight#process_path}
  */
  readonly processPath?: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable;
  /**
  * process_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_pid SecurityhubInsight#process_pid}
  */
  readonly processPid?: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable;
  /**
  * process_terminated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#process_terminated_at SecurityhubInsight#process_terminated_at}
  */
  readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable;
  /**
  * product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#product_arn SecurityhubInsight#product_arn}
  */
  readonly productArn?: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable;
  /**
  * product_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#product_fields SecurityhubInsight#product_fields}
  */
  readonly productFields?: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable;
  /**
  * product_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#product_name SecurityhubInsight#product_name}
  */
  readonly productName?: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable;
  /**
  * recommendation_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#recommendation_text SecurityhubInsight#recommendation_text}
  */
  readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable;
  /**
  * record_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#record_state SecurityhubInsight#record_state}
  */
  readonly recordState?: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable;
  /**
  * related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#related_findings_id SecurityhubInsight#related_findings_id}
  */
  readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_iam_instance_profile_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
  */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
  */
  readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv4_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
  */
  readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
  */
  readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_key_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
  */
  readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
  */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_subnet_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
  */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
  */
  readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_vpc_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
  */
  readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
  */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
  */
  readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_user_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
  */
  readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
  */
  readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
  */
  readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable;
  /**
  * resource_container_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_container_image_id SecurityhubInsight#resource_container_image_id}
  */
  readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable;
  /**
  * resource_container_image_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_container_image_name SecurityhubInsight#resource_container_image_name}
  */
  readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable;
  /**
  * resource_container_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
  */
  readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable;
  /**
  * resource_container_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_container_name SecurityhubInsight#resource_container_name}
  */
  readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable;
  /**
  * resource_details_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_details_other SecurityhubInsight#resource_details_other}
  */
  readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_id SecurityhubInsight#resource_id}
  */
  readonly resourceId?: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable;
  /**
  * resource_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_partition SecurityhubInsight#resource_partition}
  */
  readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable;
  /**
  * resource_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_region SecurityhubInsight#resource_region}
  */
  readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_tags SecurityhubInsight#resource_tags}
  */
  readonly resourceTags?: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#resource_type SecurityhubInsight#resource_type}
  */
  readonly resourceType?: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable;
  /**
  * severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#severity_label SecurityhubInsight#severity_label}
  */
  readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#source_url SecurityhubInsight#source_url}
  */
  readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
  */
  readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
  */
  readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
  */
  readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
  */
  readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
  */
  readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
  */
  readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#title SecurityhubInsight#title}
  */
  readonly title?: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#type SecurityhubInsight#type}
  */
  readonly type?: SecurityhubInsightFiltersType[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#updated_at SecurityhubInsight#updated_at}
  */
  readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable;
  /**
  * user_defined_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#user_defined_values SecurityhubInsight#user_defined_values}
  */
  readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[] | cdktn.IResolvable;
  /**
  * verification_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#verification_state SecurityhubInsight#verification_state}
  */
  readonly verificationState?: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable;
  /**
  * workflow_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#workflow_status SecurityhubInsight#workflow_status}
  */
  readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable;
}

export function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktn.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform, true)(struct!.awsAccountId),
    company_name: cdktn.listMapper(securityhubInsightFiltersCompanyNameToTerraform, true)(struct!.companyName),
    compliance_status: cdktn.listMapper(securityhubInsightFiltersComplianceStatusToTerraform, true)(struct!.complianceStatus),
    confidence: cdktn.listMapper(securityhubInsightFiltersConfidenceToTerraform, true)(struct!.confidence),
    created_at: cdktn.listMapper(securityhubInsightFiltersCreatedAtToTerraform, true)(struct!.createdAt),
    criticality: cdktn.listMapper(securityhubInsightFiltersCriticalityToTerraform, true)(struct!.criticality),
    description: cdktn.listMapper(securityhubInsightFiltersDescriptionToTerraform, true)(struct!.description),
    finding_provider_fields_confidence: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform, true)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform, true)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform, true)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktn.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform, true)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(securityhubInsightFiltersGeneratorIdToTerraform, true)(struct!.generatorId),
    id: cdktn.listMapper(securityhubInsightFiltersIdToTerraform, true)(struct!.id),
    keyword: cdktn.listMapper(securityhubInsightFiltersKeywordToTerraform, true)(struct!.keyword),
    last_observed_at: cdktn.listMapper(securityhubInsightFiltersLastObservedAtToTerraform, true)(struct!.lastObservedAt),
    malware_name: cdktn.listMapper(securityhubInsightFiltersMalwareNameToTerraform, true)(struct!.malwareName),
    malware_path: cdktn.listMapper(securityhubInsightFiltersMalwarePathToTerraform, true)(struct!.malwarePath),
    malware_state: cdktn.listMapper(securityhubInsightFiltersMalwareStateToTerraform, true)(struct!.malwareState),
    malware_type: cdktn.listMapper(securityhubInsightFiltersMalwareTypeToTerraform, true)(struct!.malwareType),
    network_destination_domain: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform, true)(struct!.networkDestinationDomain),
    network_destination_ipv4: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform, true)(struct!.networkDestinationIpv4),
    network_destination_ipv6: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform, true)(struct!.networkDestinationIpv6),
    network_destination_port: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform, true)(struct!.networkDestinationPort),
    network_direction: cdktn.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform, true)(struct!.networkDirection),
    network_protocol: cdktn.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform, true)(struct!.networkProtocol),
    network_source_domain: cdktn.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform, true)(struct!.networkSourceDomain),
    network_source_ipv4: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform, true)(struct!.networkSourceIpv4),
    network_source_ipv6: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform, true)(struct!.networkSourceIpv6),
    network_source_mac: cdktn.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform, true)(struct!.networkSourceMac),
    network_source_port: cdktn.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform, true)(struct!.networkSourcePort),
    note_text: cdktn.listMapper(securityhubInsightFiltersNoteTextToTerraform, true)(struct!.noteText),
    note_updated_at: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform, true)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform, true)(struct!.noteUpdatedBy),
    process_launched_at: cdktn.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform, true)(struct!.processLaunchedAt),
    process_name: cdktn.listMapper(securityhubInsightFiltersProcessNameToTerraform, true)(struct!.processName),
    process_parent_pid: cdktn.listMapper(securityhubInsightFiltersProcessParentPidToTerraform, true)(struct!.processParentPid),
    process_path: cdktn.listMapper(securityhubInsightFiltersProcessPathToTerraform, true)(struct!.processPath),
    process_pid: cdktn.listMapper(securityhubInsightFiltersProcessPidToTerraform, true)(struct!.processPid),
    process_terminated_at: cdktn.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform, true)(struct!.processTerminatedAt),
    product_arn: cdktn.listMapper(securityhubInsightFiltersProductArnToTerraform, true)(struct!.productArn),
    product_fields: cdktn.listMapper(securityhubInsightFiltersProductFieldsToTerraform, true)(struct!.productFields),
    product_name: cdktn.listMapper(securityhubInsightFiltersProductNameToTerraform, true)(struct!.productName),
    recommendation_text: cdktn.listMapper(securityhubInsightFiltersRecommendationTextToTerraform, true)(struct!.recommendationText),
    record_state: cdktn.listMapper(securityhubInsightFiltersRecordStateToTerraform, true)(struct!.recordState),
    related_findings_id: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform, true)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform, true)(struct!.relatedFindingsProductArn),
    resource_aws_ec2_instance_iam_instance_profile_arn: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec2_instance_image_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec2_instance_ipv4_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
    resource_aws_ec2_instance_ipv6_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
    resource_aws_ec2_instance_key_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec2_instance_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec2_instance_subnet_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec2_instance_type: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform, true)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec2_instance_vpc_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_status: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_s3_bucket_owner_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform, true)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform, true)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform, true)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform, true)(struct!.resourceContainerName),
    resource_details_other: cdktn.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform, true)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(securityhubInsightFiltersResourceIdToTerraform, true)(struct!.resourceId),
    resource_partition: cdktn.listMapper(securityhubInsightFiltersResourcePartitionToTerraform, true)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(securityhubInsightFiltersResourceRegionToTerraform, true)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(securityhubInsightFiltersResourceTagsToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(securityhubInsightFiltersResourceTypeToTerraform, true)(struct!.resourceType),
    severity_label: cdktn.listMapper(securityhubInsightFiltersSeverityLabelToTerraform, true)(struct!.severityLabel),
    source_url: cdktn.listMapper(securityhubInsightFiltersSourceUrlToTerraform, true)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform, true)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform, true)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform, true)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform, true)(struct!.threatIntelIndicatorValue),
    title: cdktn.listMapper(securityhubInsightFiltersTitleToTerraform, true)(struct!.title),
    type: cdktn.listMapper(securityhubInsightFiltersTypeToTerraform, true)(struct!.type),
    updated_at: cdktn.listMapper(securityhubInsightFiltersUpdatedAtToTerraform, true)(struct!.updatedAt),
    user_defined_values: cdktn.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform, true)(struct!.userDefinedValues),
    verification_state: cdktn.listMapper(securityhubInsightFiltersVerificationStateToTerraform, true)(struct!.verificationState),
    workflow_status: cdktn.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform, true)(struct!.workflowStatus),
  }
}


export function securityhubInsightFiltersToHclTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersAwsAccountIdToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersAwsAccountIdList",
    },
    company_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCompanyNameToHclTerraform, true)(struct!.companyName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCompanyNameList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceStatusToHclTerraform, true)(struct!.complianceStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceStatusList",
    },
    confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersConfidenceToHclTerraform, true)(struct!.confidence),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersConfidenceList",
    },
    created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCreatedAtToHclTerraform, true)(struct!.createdAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCreatedAtList",
    },
    criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCriticalityToHclTerraform, true)(struct!.criticality),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCriticalityList",
    },
    description: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersDescriptionToHclTerraform, true)(struct!.description),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersDescriptionList",
    },
    finding_provider_fields_confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform, true)(struct!.findingProviderFieldsConfidence),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsConfidenceList",
    },
    finding_provider_fields_criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform, true)(struct!.findingProviderFieldsCriticality),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsCriticalityList",
    },
    finding_provider_fields_related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList",
    },
    finding_provider_fields_related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList",
    },
    finding_provider_fields_severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList",
    },
    finding_provider_fields_severity_original: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList",
    },
    finding_provider_fields_types: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform, true)(struct!.findingProviderFieldsTypes),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsTypesList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFirstObservedAtToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFirstObservedAtList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersGeneratorIdToHclTerraform, true)(struct!.generatorId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersGeneratorIdList",
    },
    id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersIdToHclTerraform, true)(struct!.id),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersIdList",
    },
    keyword: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersKeywordToHclTerraform, true)(struct!.keyword),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersKeywordList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersLastObservedAtToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersLastObservedAtList",
    },
    malware_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareNameToHclTerraform, true)(struct!.malwareName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareNameList",
    },
    malware_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwarePathToHclTerraform, true)(struct!.malwarePath),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwarePathList",
    },
    malware_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareStateToHclTerraform, true)(struct!.malwareState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareStateList",
    },
    malware_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareTypeToHclTerraform, true)(struct!.malwareType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareTypeList",
    },
    network_destination_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationDomainToHclTerraform, true)(struct!.networkDestinationDomain),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationDomainList",
    },
    network_destination_ipv4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpv4ToHclTerraform, true)(struct!.networkDestinationIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpv4List",
    },
    network_destination_ipv6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpv6ToHclTerraform, true)(struct!.networkDestinationIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpv6List",
    },
    network_destination_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationPortToHclTerraform, true)(struct!.networkDestinationPort),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationPortList",
    },
    network_direction: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDirectionToHclTerraform, true)(struct!.networkDirection),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDirectionList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkProtocolToHclTerraform, true)(struct!.networkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkProtocolList",
    },
    network_source_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceDomainToHclTerraform, true)(struct!.networkSourceDomain),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceDomainList",
    },
    network_source_ipv4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpv4ToHclTerraform, true)(struct!.networkSourceIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpv4List",
    },
    network_source_ipv6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpv6ToHclTerraform, true)(struct!.networkSourceIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpv6List",
    },
    network_source_mac: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceMacToHclTerraform, true)(struct!.networkSourceMac),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceMacList",
    },
    network_source_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourcePortToHclTerraform, true)(struct!.networkSourcePort),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourcePortList",
    },
    note_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteTextToHclTerraform, true)(struct!.noteText),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteTextList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedAtToHclTerraform, true)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedAtList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedByToHclTerraform, true)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedByList",
    },
    process_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessLaunchedAtToHclTerraform, true)(struct!.processLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessLaunchedAtList",
    },
    process_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessNameToHclTerraform, true)(struct!.processName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessNameList",
    },
    process_parent_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessParentPidToHclTerraform, true)(struct!.processParentPid),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessParentPidList",
    },
    process_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPathToHclTerraform, true)(struct!.processPath),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessPathList",
    },
    process_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPidToHclTerraform, true)(struct!.processPid),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessPidList",
    },
    process_terminated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessTerminatedAtToHclTerraform, true)(struct!.processTerminatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessTerminatedAtList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductArnToHclTerraform, true)(struct!.productArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductArnList",
    },
    product_fields: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductFieldsToHclTerraform, true)(struct!.productFields),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductFieldsList",
    },
    product_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductNameToHclTerraform, true)(struct!.productName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductNameList",
    },
    recommendation_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecommendationTextToHclTerraform, true)(struct!.recommendationText),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRecommendationTextList",
    },
    record_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecordStateToHclTerraform, true)(struct!.recordState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRecordStateList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsIdToHclTerraform, true)(struct!.relatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsIdList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform, true)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsProductArnList",
    },
    resource_aws_ec2_instance_iam_instance_profile_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList",
    },
    resource_aws_ec2_instance_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList",
    },
    resource_aws_ec2_instance_ipv4_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList",
    },
    resource_aws_ec2_instance_ipv6_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList",
    },
    resource_aws_ec2_instance_key_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList",
    },
    resource_aws_ec2_instance_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList",
    },
    resource_aws_ec2_instance_subnet_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList",
    },
    resource_aws_ec2_instance_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform, true)(struct!.resourceAwsEc2InstanceType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList",
    },
    resource_aws_ec2_instance_vpc_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList",
    },
    resource_aws_iam_access_key_created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList",
    },
    resource_aws_iam_access_key_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList",
    },
    resource_aws_iam_access_key_user_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList",
    },
    resource_aws_s3_bucket_owner_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList",
    },
    resource_aws_s3_bucket_owner_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList",
    },
    resource_container_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageIdToHclTerraform, true)(struct!.resourceContainerImageId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageIdList",
    },
    resource_container_image_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageNameToHclTerraform, true)(struct!.resourceContainerImageName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageNameList",
    },
    resource_container_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform, true)(struct!.resourceContainerLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerLaunchedAtList",
    },
    resource_container_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerNameToHclTerraform, true)(struct!.resourceContainerName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerNameList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceDetailsOtherToHclTerraform, true)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceDetailsOtherList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceIdToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceIdList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourcePartitionToHclTerraform, true)(struct!.resourcePartition),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourcePartitionList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceRegionToHclTerraform, true)(struct!.resourceRegion),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceRegionList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTypeToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceTypeList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSeverityLabelToHclTerraform, true)(struct!.severityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersSeverityLabelList",
    },
    source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSourceUrlToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersSourceUrlList",
    },
    threat_intel_indicator_category: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform, true)(struct!.threatIntelIndicatorCategory),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorCategoryList",
    },
    threat_intel_indicator_last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList",
    },
    threat_intel_indicator_source: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform, true)(struct!.threatIntelIndicatorSource),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceList",
    },
    threat_intel_indicator_source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList",
    },
    threat_intel_indicator_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform, true)(struct!.threatIntelIndicatorType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorTypeList",
    },
    threat_intel_indicator_value: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform, true)(struct!.threatIntelIndicatorValue),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorValueList",
    },
    title: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersTitleList",
    },
    type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTypeToHclTerraform, true)(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersTypeList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUpdatedAtToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersUpdatedAtList",
    },
    user_defined_values: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUserDefinedValuesToHclTerraform, true)(struct!.userDefinedValues),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersUserDefinedValuesList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersVerificationStateToHclTerraform, true)(struct!.verificationState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersVerificationStateList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersWorkflowStatusToHclTerraform, true)(struct!.workflowStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersWorkflowStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
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
    if (this._findingProviderFieldsConfidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence?.internalValue;
    }
    if (this._findingProviderFieldsCriticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn?.internalValue;
    }
    if (this._findingProviderFieldsSeverityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel?.internalValue;
    }
    if (this._findingProviderFieldsSeverityOriginal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal?.internalValue;
    }
    if (this._findingProviderFieldsTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes?.internalValue;
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
    if (this._keyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._malwareName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareName = this._malwareName?.internalValue;
    }
    if (this._malwarePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwarePath = this._malwarePath?.internalValue;
    }
    if (this._malwareState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareState = this._malwareState?.internalValue;
    }
    if (this._malwareType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareType = this._malwareType?.internalValue;
    }
    if (this._networkDestinationDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationDomain = this._networkDestinationDomain?.internalValue;
    }
    if (this._networkDestinationIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4?.internalValue;
    }
    if (this._networkDestinationIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6?.internalValue;
    }
    if (this._networkDestinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationPort = this._networkDestinationPort?.internalValue;
    }
    if (this._networkDirection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirection = this._networkDirection?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._networkSourceDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceDomain = this._networkSourceDomain?.internalValue;
    }
    if (this._networkSourceIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv4 = this._networkSourceIpv4?.internalValue;
    }
    if (this._networkSourceIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv6 = this._networkSourceIpv6?.internalValue;
    }
    if (this._networkSourceMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceMac = this._networkSourceMac?.internalValue;
    }
    if (this._networkSourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourcePort = this._networkSourcePort?.internalValue;
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
    if (this._processLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processLaunchedAt = this._processLaunchedAt?.internalValue;
    }
    if (this._processName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName?.internalValue;
    }
    if (this._processParentPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processParentPid = this._processParentPid?.internalValue;
    }
    if (this._processPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPath = this._processPath?.internalValue;
    }
    if (this._processPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPid = this._processPid?.internalValue;
    }
    if (this._processTerminatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processTerminatedAt = this._processTerminatedAt?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFields = this._productFields?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recommendationText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationText = this._recommendationText?.internalValue;
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
    if (this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv4Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceKeyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName?.internalValue;
    }
    if (this._resourceAwsEc2InstanceLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt?.internalValue;
    }
    if (this._resourceAwsEc2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType?.internalValue;
    }
    if (this._resourceAwsEc2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyCreatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyUserName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName?.internalValue;
    }
    if (this._resourceContainerImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageId = this._resourceContainerImageId?.internalValue;
    }
    if (this._resourceContainerImageName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageName = this._resourceContainerImageName?.internalValue;
    }
    if (this._resourceContainerLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt?.internalValue;
    }
    if (this._resourceContainerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerName = this._resourceContainerName?.internalValue;
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
    if (this._threatIntelIndicatorCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory?.internalValue;
    }
    if (this._threatIntelIndicatorLastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt?.internalValue;
    }
    if (this._threatIntelIndicatorSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource?.internalValue;
    }
    if (this._threatIntelIndicatorSourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType?.internalValue;
    }
    if (this._threatIntelIndicatorValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue?.internalValue;
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
    if (this._userDefinedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedValues = this._userDefinedValues?.internalValue;
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

  public set internalValue(value: SecurityhubInsightFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._findingProviderFieldsConfidence.internalValue = undefined;
      this._findingProviderFieldsCriticality.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
      this._findingProviderFieldsSeverityLabel.internalValue = undefined;
      this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
      this._findingProviderFieldsTypes.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._keyword.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._malwareName.internalValue = undefined;
      this._malwarePath.internalValue = undefined;
      this._malwareState.internalValue = undefined;
      this._malwareType.internalValue = undefined;
      this._networkDestinationDomain.internalValue = undefined;
      this._networkDestinationIpv4.internalValue = undefined;
      this._networkDestinationIpv6.internalValue = undefined;
      this._networkDestinationPort.internalValue = undefined;
      this._networkDirection.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._networkSourceDomain.internalValue = undefined;
      this._networkSourceIpv4.internalValue = undefined;
      this._networkSourceIpv6.internalValue = undefined;
      this._networkSourceMac.internalValue = undefined;
      this._networkSourcePort.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._processLaunchedAt.internalValue = undefined;
      this._processName.internalValue = undefined;
      this._processParentPid.internalValue = undefined;
      this._processPath.internalValue = undefined;
      this._processPid.internalValue = undefined;
      this._processTerminatedAt.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productFields.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recommendationText.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
      this._resourceAwsEc2InstanceImageId.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
      this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
      this._resourceAwsEc2InstanceType.internalValue = undefined;
      this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
      this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
      this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
      this._resourceAwsS3BucketOwnerId.internalValue = undefined;
      this._resourceAwsS3BucketOwnerName.internalValue = undefined;
      this._resourceContainerImageId.internalValue = undefined;
      this._resourceContainerImageName.internalValue = undefined;
      this._resourceContainerLaunchedAt.internalValue = undefined;
      this._resourceContainerName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._threatIntelIndicatorCategory.internalValue = undefined;
      this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
      this._threatIntelIndicatorSource.internalValue = undefined;
      this._threatIntelIndicatorSourceUrl.internalValue = undefined;
      this._threatIntelIndicatorType.internalValue = undefined;
      this._threatIntelIndicatorValue.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedValues.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._companyName.internalValue = value.companyName;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._findingProviderFieldsConfidence.internalValue = value.findingProviderFieldsConfidence;
      this._findingProviderFieldsCriticality.internalValue = value.findingProviderFieldsCriticality;
      this._findingProviderFieldsRelatedFindingsId.internalValue = value.findingProviderFieldsRelatedFindingsId;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value.findingProviderFieldsRelatedFindingsProductArn;
      this._findingProviderFieldsSeverityLabel.internalValue = value.findingProviderFieldsSeverityLabel;
      this._findingProviderFieldsSeverityOriginal.internalValue = value.findingProviderFieldsSeverityOriginal;
      this._findingProviderFieldsTypes.internalValue = value.findingProviderFieldsTypes;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._keyword.internalValue = value.keyword;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._malwareName.internalValue = value.malwareName;
      this._malwarePath.internalValue = value.malwarePath;
      this._malwareState.internalValue = value.malwareState;
      this._malwareType.internalValue = value.malwareType;
      this._networkDestinationDomain.internalValue = value.networkDestinationDomain;
      this._networkDestinationIpv4.internalValue = value.networkDestinationIpv4;
      this._networkDestinationIpv6.internalValue = value.networkDestinationIpv6;
      this._networkDestinationPort.internalValue = value.networkDestinationPort;
      this._networkDirection.internalValue = value.networkDirection;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._networkSourceDomain.internalValue = value.networkSourceDomain;
      this._networkSourceIpv4.internalValue = value.networkSourceIpv4;
      this._networkSourceIpv6.internalValue = value.networkSourceIpv6;
      this._networkSourceMac.internalValue = value.networkSourceMac;
      this._networkSourcePort.internalValue = value.networkSourcePort;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._processLaunchedAt.internalValue = value.processLaunchedAt;
      this._processName.internalValue = value.processName;
      this._processParentPid.internalValue = value.processParentPid;
      this._processPath.internalValue = value.processPath;
      this._processPid.internalValue = value.processPid;
      this._processTerminatedAt.internalValue = value.processTerminatedAt;
      this._productArn.internalValue = value.productArn;
      this._productFields.internalValue = value.productFields;
      this._productName.internalValue = value.productName;
      this._recommendationText.internalValue = value.recommendationText;
      this._recordState.internalValue = value.recordState;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value.resourceAwsEc2InstanceIamInstanceProfileArn;
      this._resourceAwsEc2InstanceImageId.internalValue = value.resourceAwsEc2InstanceImageId;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value.resourceAwsEc2InstanceIpv4Addresses;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value.resourceAwsEc2InstanceIpv6Addresses;
      this._resourceAwsEc2InstanceKeyName.internalValue = value.resourceAwsEc2InstanceKeyName;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = value.resourceAwsEc2InstanceLaunchedAt;
      this._resourceAwsEc2InstanceSubnetId.internalValue = value.resourceAwsEc2InstanceSubnetId;
      this._resourceAwsEc2InstanceType.internalValue = value.resourceAwsEc2InstanceType;
      this._resourceAwsEc2InstanceVpcId.internalValue = value.resourceAwsEc2InstanceVpcId;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = value.resourceAwsIamAccessKeyCreatedAt;
      this._resourceAwsIamAccessKeyStatus.internalValue = value.resourceAwsIamAccessKeyStatus;
      this._resourceAwsIamAccessKeyUserName.internalValue = value.resourceAwsIamAccessKeyUserName;
      this._resourceAwsS3BucketOwnerId.internalValue = value.resourceAwsS3BucketOwnerId;
      this._resourceAwsS3BucketOwnerName.internalValue = value.resourceAwsS3BucketOwnerName;
      this._resourceContainerImageId.internalValue = value.resourceContainerImageId;
      this._resourceContainerImageName.internalValue = value.resourceContainerImageName;
      this._resourceContainerLaunchedAt.internalValue = value.resourceContainerLaunchedAt;
      this._resourceContainerName.internalValue = value.resourceContainerName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severityLabel.internalValue = value.severityLabel;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._threatIntelIndicatorCategory.internalValue = value.threatIntelIndicatorCategory;
      this._threatIntelIndicatorLastObservedAt.internalValue = value.threatIntelIndicatorLastObservedAt;
      this._threatIntelIndicatorSource.internalValue = value.threatIntelIndicatorSource;
      this._threatIntelIndicatorSourceUrl.internalValue = value.threatIntelIndicatorSourceUrl;
      this._threatIntelIndicatorType.internalValue = value.threatIntelIndicatorType;
      this._threatIntelIndicatorValue.internalValue = value.threatIntelIndicatorValue;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedValues.internalValue = value.userDefinedValues;
      this._verificationState.internalValue = value.verificationState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new SecurityhubInsightFiltersAwsAccountIdList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName = new SecurityhubInsightFiltersCompanyNameList(this, "company_name", true);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus = new SecurityhubInsightFiltersComplianceStatusList(this, "compliance_status", true);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable) {
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
  private _confidence = new SecurityhubInsightFiltersConfidenceList(this, "confidence", true);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable) {
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
  private _createdAt = new SecurityhubInsightFiltersCreatedAtList(this, "created_at", true);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable) {
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
  private _criticality = new SecurityhubInsightFiltersCriticalityList(this, "criticality", true);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable) {
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
  private _description = new SecurityhubInsightFiltersDescriptionList(this, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // finding_provider_fields_confidence - computed: false, optional: true, required: false
  private _findingProviderFieldsConfidence = new SecurityhubInsightFiltersFindingProviderFieldsConfidenceList(this, "finding_provider_fields_confidence", true);
  public get findingProviderFieldsConfidence() {
    return this._findingProviderFieldsConfidence;
  }
  public putFindingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable) {
    this._findingProviderFieldsConfidence.internalValue = value;
  }
  public resetFindingProviderFieldsConfidence() {
    this._findingProviderFieldsConfidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsConfidenceInput() {
    return this._findingProviderFieldsConfidence.internalValue;
  }

  // finding_provider_fields_criticality - computed: false, optional: true, required: false
  private _findingProviderFieldsCriticality = new SecurityhubInsightFiltersFindingProviderFieldsCriticalityList(this, "finding_provider_fields_criticality", true);
  public get findingProviderFieldsCriticality() {
    return this._findingProviderFieldsCriticality;
  }
  public putFindingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable) {
    this._findingProviderFieldsCriticality.internalValue = value;
  }
  public resetFindingProviderFieldsCriticality() {
    this._findingProviderFieldsCriticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsCriticalityInput() {
    return this._findingProviderFieldsCriticality.internalValue;
  }

  // finding_provider_fields_related_findings_id - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsId = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList(this, "finding_provider_fields_related_findings_id", true);
  public get findingProviderFieldsRelatedFindingsId() {
    return this._findingProviderFieldsRelatedFindingsId;
  }
  public putFindingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsId.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsId() {
    this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsIdInput() {
    return this._findingProviderFieldsRelatedFindingsId.internalValue;
  }

  // finding_provider_fields_related_findings_product_arn - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsProductArn = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList(this, "finding_provider_fields_related_findings_product_arn", true);
  public get findingProviderFieldsRelatedFindingsProductArn() {
    return this._findingProviderFieldsRelatedFindingsProductArn;
  }
  public putFindingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsProductArn() {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsProductArnInput() {
    return this._findingProviderFieldsRelatedFindingsProductArn.internalValue;
  }

  // finding_provider_fields_severity_label - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityLabel = new SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList(this, "finding_provider_fields_severity_label", true);
  public get findingProviderFieldsSeverityLabel() {
    return this._findingProviderFieldsSeverityLabel;
  }
  public putFindingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityLabel.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityLabel() {
    this._findingProviderFieldsSeverityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityLabelInput() {
    return this._findingProviderFieldsSeverityLabel.internalValue;
  }

  // finding_provider_fields_severity_original - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityOriginal = new SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList(this, "finding_provider_fields_severity_original", true);
  public get findingProviderFieldsSeverityOriginal() {
    return this._findingProviderFieldsSeverityOriginal;
  }
  public putFindingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityOriginal.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityOriginal() {
    this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityOriginalInput() {
    return this._findingProviderFieldsSeverityOriginal.internalValue;
  }

  // finding_provider_fields_types - computed: false, optional: true, required: false
  private _findingProviderFieldsTypes = new SecurityhubInsightFiltersFindingProviderFieldsTypesList(this, "finding_provider_fields_types", true);
  public get findingProviderFieldsTypes() {
    return this._findingProviderFieldsTypes;
  }
  public putFindingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable) {
    this._findingProviderFieldsTypes.internalValue = value;
  }
  public resetFindingProviderFieldsTypes() {
    this._findingProviderFieldsTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsTypesInput() {
    return this._findingProviderFieldsTypes.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new SecurityhubInsightFiltersFirstObservedAtList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable) {
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
  private _generatorId = new SecurityhubInsightFiltersGeneratorIdList(this, "generator_id", true);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable) {
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
  private _id = new SecurityhubInsightFiltersIdList(this, "id", true);
  public get id() {
    return this._id;
  }
  public putId(value: SecurityhubInsightFiltersId[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword = new SecurityhubInsightFiltersKeywordList(this, "keyword", true);
  public get keyword() {
    return this._keyword;
  }
  public putKeyword(value: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable) {
    this._keyword.internalValue = value;
  }
  public resetKeyword() {
    this._keyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new SecurityhubInsightFiltersLastObservedAtList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // malware_name - computed: false, optional: true, required: false
  private _malwareName = new SecurityhubInsightFiltersMalwareNameList(this, "malware_name", true);
  public get malwareName() {
    return this._malwareName;
  }
  public putMalwareName(value: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable) {
    this._malwareName.internalValue = value;
  }
  public resetMalwareName() {
    this._malwareName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNameInput() {
    return this._malwareName.internalValue;
  }

  // malware_path - computed: false, optional: true, required: false
  private _malwarePath = new SecurityhubInsightFiltersMalwarePathList(this, "malware_path", true);
  public get malwarePath() {
    return this._malwarePath;
  }
  public putMalwarePath(value: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable) {
    this._malwarePath.internalValue = value;
  }
  public resetMalwarePath() {
    this._malwarePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwarePathInput() {
    return this._malwarePath.internalValue;
  }

  // malware_state - computed: false, optional: true, required: false
  private _malwareState = new SecurityhubInsightFiltersMalwareStateList(this, "malware_state", true);
  public get malwareState() {
    return this._malwareState;
  }
  public putMalwareState(value: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable) {
    this._malwareState.internalValue = value;
  }
  public resetMalwareState() {
    this._malwareState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStateInput() {
    return this._malwareState.internalValue;
  }

  // malware_type - computed: false, optional: true, required: false
  private _malwareType = new SecurityhubInsightFiltersMalwareTypeList(this, "malware_type", true);
  public get malwareType() {
    return this._malwareType;
  }
  public putMalwareType(value: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable) {
    this._malwareType.internalValue = value;
  }
  public resetMalwareType() {
    this._malwareType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareTypeInput() {
    return this._malwareType.internalValue;
  }

  // network_destination_domain - computed: false, optional: true, required: false
  private _networkDestinationDomain = new SecurityhubInsightFiltersNetworkDestinationDomainList(this, "network_destination_domain", true);
  public get networkDestinationDomain() {
    return this._networkDestinationDomain;
  }
  public putNetworkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable) {
    this._networkDestinationDomain.internalValue = value;
  }
  public resetNetworkDestinationDomain() {
    this._networkDestinationDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationDomainInput() {
    return this._networkDestinationDomain.internalValue;
  }

  // network_destination_ipv4 - computed: false, optional: true, required: false
  private _networkDestinationIpv4 = new SecurityhubInsightFiltersNetworkDestinationIpv4List(this, "network_destination_ipv4", true);
  public get networkDestinationIpv4() {
    return this._networkDestinationIpv4;
  }
  public putNetworkDestinationIpv4(value: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktn.IResolvable) {
    this._networkDestinationIpv4.internalValue = value;
  }
  public resetNetworkDestinationIpv4() {
    this._networkDestinationIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv4Input() {
    return this._networkDestinationIpv4.internalValue;
  }

  // network_destination_ipv6 - computed: false, optional: true, required: false
  private _networkDestinationIpv6 = new SecurityhubInsightFiltersNetworkDestinationIpv6List(this, "network_destination_ipv6", true);
  public get networkDestinationIpv6() {
    return this._networkDestinationIpv6;
  }
  public putNetworkDestinationIpv6(value: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktn.IResolvable) {
    this._networkDestinationIpv6.internalValue = value;
  }
  public resetNetworkDestinationIpv6() {
    this._networkDestinationIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv6Input() {
    return this._networkDestinationIpv6.internalValue;
  }

  // network_destination_port - computed: false, optional: true, required: false
  private _networkDestinationPort = new SecurityhubInsightFiltersNetworkDestinationPortList(this, "network_destination_port", true);
  public get networkDestinationPort() {
    return this._networkDestinationPort;
  }
  public putNetworkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable) {
    this._networkDestinationPort.internalValue = value;
  }
  public resetNetworkDestinationPort() {
    this._networkDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationPortInput() {
    return this._networkDestinationPort.internalValue;
  }

  // network_direction - computed: false, optional: true, required: false
  private _networkDirection = new SecurityhubInsightFiltersNetworkDirectionList(this, "network_direction", true);
  public get networkDirection() {
    return this._networkDirection;
  }
  public putNetworkDirection(value: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable) {
    this._networkDirection.internalValue = value;
  }
  public resetNetworkDirection() {
    this._networkDirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectionInput() {
    return this._networkDirection.internalValue;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol = new SecurityhubInsightFiltersNetworkProtocolList(this, "network_protocol", true);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // network_source_domain - computed: false, optional: true, required: false
  private _networkSourceDomain = new SecurityhubInsightFiltersNetworkSourceDomainList(this, "network_source_domain", true);
  public get networkSourceDomain() {
    return this._networkSourceDomain;
  }
  public putNetworkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable) {
    this._networkSourceDomain.internalValue = value;
  }
  public resetNetworkSourceDomain() {
    this._networkSourceDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceDomainInput() {
    return this._networkSourceDomain.internalValue;
  }

  // network_source_ipv4 - computed: false, optional: true, required: false
  private _networkSourceIpv4 = new SecurityhubInsightFiltersNetworkSourceIpv4List(this, "network_source_ipv4", true);
  public get networkSourceIpv4() {
    return this._networkSourceIpv4;
  }
  public putNetworkSourceIpv4(value: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktn.IResolvable) {
    this._networkSourceIpv4.internalValue = value;
  }
  public resetNetworkSourceIpv4() {
    this._networkSourceIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv4Input() {
    return this._networkSourceIpv4.internalValue;
  }

  // network_source_ipv6 - computed: false, optional: true, required: false
  private _networkSourceIpv6 = new SecurityhubInsightFiltersNetworkSourceIpv6List(this, "network_source_ipv6", true);
  public get networkSourceIpv6() {
    return this._networkSourceIpv6;
  }
  public putNetworkSourceIpv6(value: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktn.IResolvable) {
    this._networkSourceIpv6.internalValue = value;
  }
  public resetNetworkSourceIpv6() {
    this._networkSourceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv6Input() {
    return this._networkSourceIpv6.internalValue;
  }

  // network_source_mac - computed: false, optional: true, required: false
  private _networkSourceMac = new SecurityhubInsightFiltersNetworkSourceMacList(this, "network_source_mac", true);
  public get networkSourceMac() {
    return this._networkSourceMac;
  }
  public putNetworkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable) {
    this._networkSourceMac.internalValue = value;
  }
  public resetNetworkSourceMac() {
    this._networkSourceMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceMacInput() {
    return this._networkSourceMac.internalValue;
  }

  // network_source_port - computed: false, optional: true, required: false
  private _networkSourcePort = new SecurityhubInsightFiltersNetworkSourcePortList(this, "network_source_port", true);
  public get networkSourcePort() {
    return this._networkSourcePort;
  }
  public putNetworkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable) {
    this._networkSourcePort.internalValue = value;
  }
  public resetNetworkSourcePort() {
    this._networkSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourcePortInput() {
    return this._networkSourcePort.internalValue;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText = new SecurityhubInsightFiltersNoteTextList(this, "note_text", true);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable) {
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
  private _noteUpdatedAt = new SecurityhubInsightFiltersNoteUpdatedAtList(this, "note_updated_at", true);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable) {
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
  private _noteUpdatedBy = new SecurityhubInsightFiltersNoteUpdatedByList(this, "note_updated_by", true);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // process_launched_at - computed: false, optional: true, required: false
  private _processLaunchedAt = new SecurityhubInsightFiltersProcessLaunchedAtList(this, "process_launched_at", true);
  public get processLaunchedAt() {
    return this._processLaunchedAt;
  }
  public putProcessLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable) {
    this._processLaunchedAt.internalValue = value;
  }
  public resetProcessLaunchedAt() {
    this._processLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLaunchedAtInput() {
    return this._processLaunchedAt.internalValue;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName = new SecurityhubInsightFiltersProcessNameList(this, "process_name", true);
  public get processName() {
    return this._processName;
  }
  public putProcessName(value: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable) {
    this._processName.internalValue = value;
  }
  public resetProcessName() {
    this._processName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName.internalValue;
  }

  // process_parent_pid - computed: false, optional: true, required: false
  private _processParentPid = new SecurityhubInsightFiltersProcessParentPidList(this, "process_parent_pid", true);
  public get processParentPid() {
    return this._processParentPid;
  }
  public putProcessParentPid(value: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable) {
    this._processParentPid.internalValue = value;
  }
  public resetProcessParentPid() {
    this._processParentPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processParentPidInput() {
    return this._processParentPid.internalValue;
  }

  // process_path - computed: false, optional: true, required: false
  private _processPath = new SecurityhubInsightFiltersProcessPathList(this, "process_path", true);
  public get processPath() {
    return this._processPath;
  }
  public putProcessPath(value: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable) {
    this._processPath.internalValue = value;
  }
  public resetProcessPath() {
    this._processPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPathInput() {
    return this._processPath.internalValue;
  }

  // process_pid - computed: false, optional: true, required: false
  private _processPid = new SecurityhubInsightFiltersProcessPidList(this, "process_pid", true);
  public get processPid() {
    return this._processPid;
  }
  public putProcessPid(value: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable) {
    this._processPid.internalValue = value;
  }
  public resetProcessPid() {
    this._processPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPidInput() {
    return this._processPid.internalValue;
  }

  // process_terminated_at - computed: false, optional: true, required: false
  private _processTerminatedAt = new SecurityhubInsightFiltersProcessTerminatedAtList(this, "process_terminated_at", true);
  public get processTerminatedAt() {
    return this._processTerminatedAt;
  }
  public putProcessTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable) {
    this._processTerminatedAt.internalValue = value;
  }
  public resetProcessTerminatedAt() {
    this._processTerminatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTerminatedAtInput() {
    return this._processTerminatedAt.internalValue;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn = new SecurityhubInsightFiltersProductArnList(this, "product_arn", true);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_fields - computed: false, optional: true, required: false
  private _productFields = new SecurityhubInsightFiltersProductFieldsList(this, "product_fields", true);
  public get productFields() {
    return this._productFields;
  }
  public putProductFields(value: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable) {
    this._productFields.internalValue = value;
  }
  public resetProductFields() {
    this._productFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFieldsInput() {
    return this._productFields.internalValue;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName = new SecurityhubInsightFiltersProductNameList(this, "product_name", true);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // recommendation_text - computed: false, optional: true, required: false
  private _recommendationText = new SecurityhubInsightFiltersRecommendationTextList(this, "recommendation_text", true);
  public get recommendationText() {
    return this._recommendationText;
  }
  public putRecommendationText(value: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable) {
    this._recommendationText.internalValue = value;
  }
  public resetRecommendationText() {
    this._recommendationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTextInput() {
    return this._recommendationText.internalValue;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState = new SecurityhubInsightFiltersRecordStateList(this, "record_state", true);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable) {
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
  private _relatedFindingsId = new SecurityhubInsightFiltersRelatedFindingsIdList(this, "related_findings_id", true);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable) {
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
  private _relatedFindingsProductArn = new SecurityhubInsightFiltersRelatedFindingsProductArnList(this, "related_findings_product_arn", true);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_aws_ec2_instance_iam_instance_profile_arn - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIamInstanceProfileArn = new SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList(this, "resource_aws_ec2_instance_iam_instance_profile_arn", true);
  public get resourceAwsEc2InstanceIamInstanceProfileArn() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn;
  }
  public putResourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue;
  }

  // resource_aws_ec2_instance_image_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceImageId = new SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList(this, "resource_aws_ec2_instance_image_id", true);
  public get resourceAwsEc2InstanceImageId() {
    return this._resourceAwsEc2InstanceImageId;
  }
  public putResourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceImageId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceImageId() {
    this._resourceAwsEc2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceImageIdInput() {
    return this._resourceAwsEc2InstanceImageId.internalValue;
  }

  // resource_aws_ec2_instance_ipv4_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv4Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList(this, "resource_aws_ec2_instance_ipv4_addresses", true);
  public get resourceAwsEc2InstanceIpv4Addresses() {
    return this._resourceAwsEc2InstanceIpv4Addresses;
  }
  public putResourceAwsEc2InstanceIpv4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv4Addresses() {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv4AddressesInput() {
    return this._resourceAwsEc2InstanceIpv4Addresses.internalValue;
  }

  // resource_aws_ec2_instance_ipv6_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv6Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList(this, "resource_aws_ec2_instance_ipv6_addresses", true);
  public get resourceAwsEc2InstanceIpv6Addresses() {
    return this._resourceAwsEc2InstanceIpv6Addresses;
  }
  public putResourceAwsEc2InstanceIpv6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv6Addresses() {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv6AddressesInput() {
    return this._resourceAwsEc2InstanceIpv6Addresses.internalValue;
  }

  // resource_aws_ec2_instance_key_name - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceKeyName = new SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList(this, "resource_aws_ec2_instance_key_name", true);
  public get resourceAwsEc2InstanceKeyName() {
    return this._resourceAwsEc2InstanceKeyName;
  }
  public putResourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceKeyName.internalValue = value;
  }
  public resetResourceAwsEc2InstanceKeyName() {
    this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceKeyNameInput() {
    return this._resourceAwsEc2InstanceKeyName.internalValue;
  }

  // resource_aws_ec2_instance_launched_at - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceLaunchedAt = new SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList(this, "resource_aws_ec2_instance_launched_at", true);
  public get resourceAwsEc2InstanceLaunchedAt() {
    return this._resourceAwsEc2InstanceLaunchedAt;
  }
  public putResourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = value;
  }
  public resetResourceAwsEc2InstanceLaunchedAt() {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceLaunchedAtInput() {
    return this._resourceAwsEc2InstanceLaunchedAt.internalValue;
  }

  // resource_aws_ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceSubnetId = new SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList(this, "resource_aws_ec2_instance_subnet_id", true);
  public get resourceAwsEc2InstanceSubnetId() {
    return this._resourceAwsEc2InstanceSubnetId;
  }
  public putResourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceSubnetId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceSubnetId() {
    this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceSubnetIdInput() {
    return this._resourceAwsEc2InstanceSubnetId.internalValue;
  }

  // resource_aws_ec2_instance_type - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceType = new SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList(this, "resource_aws_ec2_instance_type", true);
  public get resourceAwsEc2InstanceType() {
    return this._resourceAwsEc2InstanceType;
  }
  public putResourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceType.internalValue = value;
  }
  public resetResourceAwsEc2InstanceType() {
    this._resourceAwsEc2InstanceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceTypeInput() {
    return this._resourceAwsEc2InstanceType.internalValue;
  }

  // resource_aws_ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceVpcId = new SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList(this, "resource_aws_ec2_instance_vpc_id", true);
  public get resourceAwsEc2InstanceVpcId() {
    return this._resourceAwsEc2InstanceVpcId;
  }
  public putResourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceVpcId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceVpcId() {
    this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceVpcIdInput() {
    return this._resourceAwsEc2InstanceVpcId.internalValue;
  }

  // resource_aws_iam_access_key_created_at - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyCreatedAt = new SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList(this, "resource_aws_iam_access_key_created_at", true);
  public get resourceAwsIamAccessKeyCreatedAt() {
    return this._resourceAwsIamAccessKeyCreatedAt;
  }
  public putResourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyCreatedAt() {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyCreatedAtInput() {
    return this._resourceAwsIamAccessKeyCreatedAt.internalValue;
  }

  // resource_aws_iam_access_key_status - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyStatus = new SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList(this, "resource_aws_iam_access_key_status", true);
  public get resourceAwsIamAccessKeyStatus() {
    return this._resourceAwsIamAccessKeyStatus;
  }
  public putResourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyStatus.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyStatus() {
    this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyStatusInput() {
    return this._resourceAwsIamAccessKeyStatus.internalValue;
  }

  // resource_aws_iam_access_key_user_name - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyUserName = new SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList(this, "resource_aws_iam_access_key_user_name", true);
  public get resourceAwsIamAccessKeyUserName() {
    return this._resourceAwsIamAccessKeyUserName;
  }
  public putResourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyUserName.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyUserName() {
    this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyUserNameInput() {
    return this._resourceAwsIamAccessKeyUserName.internalValue;
  }

  // resource_aws_s3_bucket_owner_id - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerId = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList(this, "resource_aws_s3_bucket_owner_id", true);
  public get resourceAwsS3BucketOwnerId() {
    return this._resourceAwsS3BucketOwnerId;
  }
  public putResourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerId.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerId() {
    this._resourceAwsS3BucketOwnerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerIdInput() {
    return this._resourceAwsS3BucketOwnerId.internalValue;
  }

  // resource_aws_s3_bucket_owner_name - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerName = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList(this, "resource_aws_s3_bucket_owner_name", true);
  public get resourceAwsS3BucketOwnerName() {
    return this._resourceAwsS3BucketOwnerName;
  }
  public putResourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerName.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerName() {
    this._resourceAwsS3BucketOwnerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerNameInput() {
    return this._resourceAwsS3BucketOwnerName.internalValue;
  }

  // resource_container_image_id - computed: false, optional: true, required: false
  private _resourceContainerImageId = new SecurityhubInsightFiltersResourceContainerImageIdList(this, "resource_container_image_id", true);
  public get resourceContainerImageId() {
    return this._resourceContainerImageId;
  }
  public putResourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable) {
    this._resourceContainerImageId.internalValue = value;
  }
  public resetResourceContainerImageId() {
    this._resourceContainerImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageIdInput() {
    return this._resourceContainerImageId.internalValue;
  }

  // resource_container_image_name - computed: false, optional: true, required: false
  private _resourceContainerImageName = new SecurityhubInsightFiltersResourceContainerImageNameList(this, "resource_container_image_name", true);
  public get resourceContainerImageName() {
    return this._resourceContainerImageName;
  }
  public putResourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable) {
    this._resourceContainerImageName.internalValue = value;
  }
  public resetResourceContainerImageName() {
    this._resourceContainerImageName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageNameInput() {
    return this._resourceContainerImageName.internalValue;
  }

  // resource_container_launched_at - computed: false, optional: true, required: false
  private _resourceContainerLaunchedAt = new SecurityhubInsightFiltersResourceContainerLaunchedAtList(this, "resource_container_launched_at", true);
  public get resourceContainerLaunchedAt() {
    return this._resourceContainerLaunchedAt;
  }
  public putResourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable) {
    this._resourceContainerLaunchedAt.internalValue = value;
  }
  public resetResourceContainerLaunchedAt() {
    this._resourceContainerLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerLaunchedAtInput() {
    return this._resourceContainerLaunchedAt.internalValue;
  }

  // resource_container_name - computed: false, optional: true, required: false
  private _resourceContainerName = new SecurityhubInsightFiltersResourceContainerNameList(this, "resource_container_name", true);
  public get resourceContainerName() {
    return this._resourceContainerName;
  }
  public putResourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable) {
    this._resourceContainerName.internalValue = value;
  }
  public resetResourceContainerName() {
    this._resourceContainerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerNameInput() {
    return this._resourceContainerName.internalValue;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther = new SecurityhubInsightFiltersResourceDetailsOtherList(this, "resource_details_other", true);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable) {
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
  private _resourceId = new SecurityhubInsightFiltersResourceIdList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable) {
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
  private _resourcePartition = new SecurityhubInsightFiltersResourcePartitionList(this, "resource_partition", true);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable) {
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
  private _resourceRegion = new SecurityhubInsightFiltersResourceRegionList(this, "resource_region", true);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable) {
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
  private _resourceTags = new SecurityhubInsightFiltersResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable) {
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
  private _resourceType = new SecurityhubInsightFiltersResourceTypeList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable) {
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
  private _severityLabel = new SecurityhubInsightFiltersSeverityLabelList(this, "severity_label", true);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable) {
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
  private _sourceUrl = new SecurityhubInsightFiltersSourceUrlList(this, "source_url", true);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // threat_intel_indicator_category - computed: false, optional: true, required: false
  private _threatIntelIndicatorCategory = new SecurityhubInsightFiltersThreatIntelIndicatorCategoryList(this, "threat_intel_indicator_category", true);
  public get threatIntelIndicatorCategory() {
    return this._threatIntelIndicatorCategory;
  }
  public putThreatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable) {
    this._threatIntelIndicatorCategory.internalValue = value;
  }
  public resetThreatIntelIndicatorCategory() {
    this._threatIntelIndicatorCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorCategoryInput() {
    return this._threatIntelIndicatorCategory.internalValue;
  }

  // threat_intel_indicator_last_observed_at - computed: false, optional: true, required: false
  private _threatIntelIndicatorLastObservedAt = new SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList(this, "threat_intel_indicator_last_observed_at", true);
  public get threatIntelIndicatorLastObservedAt() {
    return this._threatIntelIndicatorLastObservedAt;
  }
  public putThreatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable) {
    this._threatIntelIndicatorLastObservedAt.internalValue = value;
  }
  public resetThreatIntelIndicatorLastObservedAt() {
    this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorLastObservedAtInput() {
    return this._threatIntelIndicatorLastObservedAt.internalValue;
  }

  // threat_intel_indicator_source - computed: false, optional: true, required: false
  private _threatIntelIndicatorSource = new SecurityhubInsightFiltersThreatIntelIndicatorSourceList(this, "threat_intel_indicator_source", true);
  public get threatIntelIndicatorSource() {
    return this._threatIntelIndicatorSource;
  }
  public putThreatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSource.internalValue = value;
  }
  public resetThreatIntelIndicatorSource() {
    this._threatIntelIndicatorSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceInput() {
    return this._threatIntelIndicatorSource.internalValue;
  }

  // threat_intel_indicator_source_url - computed: false, optional: true, required: false
  private _threatIntelIndicatorSourceUrl = new SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList(this, "threat_intel_indicator_source_url", true);
  public get threatIntelIndicatorSourceUrl() {
    return this._threatIntelIndicatorSourceUrl;
  }
  public putThreatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSourceUrl.internalValue = value;
  }
  public resetThreatIntelIndicatorSourceUrl() {
    this._threatIntelIndicatorSourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceUrlInput() {
    return this._threatIntelIndicatorSourceUrl.internalValue;
  }

  // threat_intel_indicator_type - computed: false, optional: true, required: false
  private _threatIntelIndicatorType = new SecurityhubInsightFiltersThreatIntelIndicatorTypeList(this, "threat_intel_indicator_type", true);
  public get threatIntelIndicatorType() {
    return this._threatIntelIndicatorType;
  }
  public putThreatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable) {
    this._threatIntelIndicatorType.internalValue = value;
  }
  public resetThreatIntelIndicatorType() {
    this._threatIntelIndicatorType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorTypeInput() {
    return this._threatIntelIndicatorType.internalValue;
  }

  // threat_intel_indicator_value - computed: false, optional: true, required: false
  private _threatIntelIndicatorValue = new SecurityhubInsightFiltersThreatIntelIndicatorValueList(this, "threat_intel_indicator_value", true);
  public get threatIntelIndicatorValue() {
    return this._threatIntelIndicatorValue;
  }
  public putThreatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable) {
    this._threatIntelIndicatorValue.internalValue = value;
  }
  public resetThreatIntelIndicatorValue() {
    this._threatIntelIndicatorValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorValueInput() {
    return this._threatIntelIndicatorValue.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new SecurityhubInsightFiltersTitleList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable) {
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
  private _type = new SecurityhubInsightFiltersTypeList(this, "type", true);
  public get type() {
    return this._type;
  }
  public putType(value: SecurityhubInsightFiltersType[] | cdktn.IResolvable) {
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
  private _updatedAt = new SecurityhubInsightFiltersUpdatedAtList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_values - computed: false, optional: true, required: false
  private _userDefinedValues = new SecurityhubInsightFiltersUserDefinedValuesList(this, "user_defined_values", true);
  public get userDefinedValues() {
    return this._userDefinedValues;
  }
  public putUserDefinedValues(value: SecurityhubInsightFiltersUserDefinedValues[] | cdktn.IResolvable) {
    this._userDefinedValues.internalValue = value;
  }
  public resetUserDefinedValues() {
    this._userDefinedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedValuesInput() {
    return this._userDefinedValues.internalValue;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState = new SecurityhubInsightFiltersVerificationStateList(this, "verification_state", true);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable) {
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
  private _workflowStatus = new SecurityhubInsightFiltersWorkflowStatusList(this, "workflow_status", true);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight aws_securityhub_insight}
*/
export class SecurityhubInsight extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubInsight resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubInsight to import
  * @param importFromId The id of the existing SecurityhubInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/securityhub_insight aws_securityhub_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubInsightConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_insight',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.33.0',
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
    this._groupByAttribute = config.groupByAttribute;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_by_attribute - computed: false, optional: false, required: true
  private _groupByAttribute?: string; 
  public get groupByAttribute() {
    return this.getStringAttribute('group_by_attribute');
  }
  public set groupByAttribute(value: string) {
    this._groupByAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributeInput() {
    return this._groupByAttribute;
  }

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

  // filters - computed: false, optional: false, required: true
  private _filters = new SecurityhubInsightFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: SecurityhubInsightFilters) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by_attribute: cdktn.stringToTerraform(this._groupByAttribute),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      filters: securityhubInsightFiltersToTerraform(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_by_attribute: {
        value: cdktn.stringToHclTerraform(this._groupByAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      filters: {
        value: securityhubInsightFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubInsightFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
