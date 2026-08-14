/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspector2FilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#action Inspector2Filter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#description Inspector2Filter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#name Inspector2Filter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#reason Inspector2Filter#reason}
  */
  readonly reason?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#region Inspector2Filter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#tags Inspector2Filter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#filter_criteria Inspector2Filter#filter_criteria}
  */
  readonly filterCriteria?: Inspector2FilterFilterCriteria[] | cdktn.IResolvable;
}
export interface Inspector2FilterFilterCriteriaAwsAccountId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaAwsAccountIdToTerraform(struct?: Inspector2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaAwsAccountIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaAwsAccountIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaAwsAccountIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaAwsAccountIdOutputReference {
    return new Inspector2FilterFilterCriteriaAwsAccountIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaCodeRepositoryProjectName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaCodeRepositoryProjectNameToTerraform(struct?: Inspector2FilterFilterCriteriaCodeRepositoryProjectName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaCodeRepositoryProjectNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeRepositoryProjectName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaCodeRepositoryProjectNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaCodeRepositoryProjectName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaCodeRepositoryProjectName | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaCodeRepositoryProjectNameList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaCodeRepositoryProjectName[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaCodeRepositoryProjectNameOutputReference {
    return new Inspector2FilterFilterCriteriaCodeRepositoryProjectNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaCodeRepositoryProviderType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaCodeRepositoryProviderTypeToTerraform(struct?: Inspector2FilterFilterCriteriaCodeRepositoryProviderType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaCodeRepositoryProviderTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeRepositoryProviderType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaCodeRepositoryProviderType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaCodeRepositoryProviderType | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaCodeRepositoryProviderType[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeOutputReference {
    return new Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference {
    return new Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference {
    return new Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference {
    return new Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaComponentId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaComponentIdToTerraform(struct?: Inspector2FilterFilterCriteriaComponentId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaComponentIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaComponentId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaComponentIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaComponentId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaComponentId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaComponentIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaComponentId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaComponentIdOutputReference {
    return new Inspector2FilterFilterCriteriaComponentIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaComponentType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaComponentTypeToTerraform(struct?: Inspector2FilterFilterCriteriaComponentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaComponentTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaComponentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaComponentTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaComponentType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaComponentType | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaComponentTypeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaComponentType[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaComponentTypeOutputReference {
    return new Inspector2FilterFilterCriteriaComponentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEc2InstanceImageId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEc2InstanceImageIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEc2InstanceImageIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEc2InstanceImageIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEc2InstanceImageIdOutputReference {
    return new Inspector2FilterFilterCriteriaEc2InstanceImageIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEc2InstanceSubnetId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEc2InstanceSubnetIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference {
    return new Inspector2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEc2InstanceVpcId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEc2InstanceVpcIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEc2InstanceVpcIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEc2InstanceVpcIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEc2InstanceVpcIdOutputReference {
    return new Inspector2FilterFilterCriteriaEc2InstanceVpcIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageArchitecture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEcrImageArchitectureToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEcrImageArchitectureToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEcrImageArchitectureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEcrImageArchitectureList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageArchitectureOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageArchitectureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEcrImageHashToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEcrImageHashToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEcrImageHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEcrImageHashList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageHashOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageInUseCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
  */
  readonly upperInclusive: number;
}

export function inspector2FilterFilterCriteriaEcrImageInUseCountToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageInUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspector2FilterFilterCriteriaEcrImageInUseCountToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageInUseCount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaEcrImageInUseCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageInUseCount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageInUseCount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspector2FilterFilterCriteriaEcrImageInUseCountList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageInUseCount[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageInUseCountOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageInUseCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageLastInUseAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaEcrImageLastInUseAtToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageLastInUseAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaEcrImageLastInUseAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageLastInUseAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaEcrImageLastInUseAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageLastInUseAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageLastInUseAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaEcrImageLastInUseAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageLastInUseAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageLastInUseAtOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageLastInUseAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImagePushedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaEcrImagePushedAtToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaEcrImagePushedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaEcrImagePushedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaEcrImagePushedAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImagePushedAtOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImagePushedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEcrImageRegistryToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEcrImageRegistryToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEcrImageRegistryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEcrImageRegistryList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageRegistryOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageRepositoryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEcrImageRepositoryNameToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEcrImageRepositoryNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEcrImageRepositoryNameList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageRepositoryNameOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageRepositoryNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEcrImageTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaEcrImageTagsToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaEcrImageTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaEcrImageTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaEcrImageTagsList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEcrImageTagsOutputReference {
    return new Inspector2FilterFilterCriteriaEcrImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaEpssScore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
  */
  readonly upperInclusive: number;
}

export function inspector2FilterFilterCriteriaEpssScoreToTerraform(struct?: Inspector2FilterFilterCriteriaEpssScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspector2FilterFilterCriteriaEpssScoreToHclTerraform(struct?: Inspector2FilterFilterCriteriaEpssScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaEpssScoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaEpssScore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaEpssScore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspector2FilterFilterCriteriaEpssScoreList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaEpssScoreOutputReference {
    return new Inspector2FilterFilterCriteriaEpssScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaExploitAvailable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaExploitAvailableToTerraform(struct?: Inspector2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaExploitAvailableToHclTerraform(struct?: Inspector2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaExploitAvailableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaExploitAvailableList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaExploitAvailableOutputReference {
    return new Inspector2FilterFilterCriteriaExploitAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaFindingArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaFindingArnToTerraform(struct?: Inspector2FilterFilterCriteriaFindingArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaFindingArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaFindingArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaFindingArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaFindingArn | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaFindingArnList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaFindingArnOutputReference {
    return new Inspector2FilterFilterCriteriaFindingArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaFindingStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaFindingStatusToTerraform(struct?: Inspector2FilterFilterCriteriaFindingStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaFindingStatusToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaFindingStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaFindingStatus | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaFindingStatus | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaFindingStatusList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaFindingStatusOutputReference {
    return new Inspector2FilterFilterCriteriaFindingStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaFindingType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaFindingTypeToTerraform(struct?: Inspector2FilterFilterCriteriaFindingType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaFindingTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaFindingTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaFindingType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaFindingType | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaFindingTypeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaFindingType[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaFindingTypeOutputReference {
    return new Inspector2FilterFilterCriteriaFindingTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaFirstObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaFirstObservedAtToTerraform(struct?: Inspector2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaFirstObservedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaFirstObservedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaFirstObservedAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaFirstObservedAtOutputReference {
    return new Inspector2FilterFilterCriteriaFirstObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaFixAvailable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaFixAvailableToTerraform(struct?: Inspector2FilterFilterCriteriaFixAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaFixAvailableToHclTerraform(struct?: Inspector2FilterFilterCriteriaFixAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaFixAvailableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaFixAvailable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaFixAvailable | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaFixAvailableList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaFixAvailableOutputReference {
    return new Inspector2FilterFilterCriteriaFixAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaInspectorScore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
  */
  readonly upperInclusive: number;
}

export function inspector2FilterFilterCriteriaInspectorScoreToTerraform(struct?: Inspector2FilterFilterCriteriaInspectorScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspector2FilterFilterCriteriaInspectorScoreToHclTerraform(struct?: Inspector2FilterFilterCriteriaInspectorScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaInspectorScoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaInspectorScore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaInspectorScore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspector2FilterFilterCriteriaInspectorScoreList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaInspectorScoreOutputReference {
    return new Inspector2FilterFilterCriteriaInspectorScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference {
    return new Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference {
    return new Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionLayers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaLambdaFunctionLayersToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaLambdaFunctionLayersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaLambdaFunctionLayersList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionLayersOutputReference {
    return new Inspector2FilterFilterCriteriaLambdaFunctionLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaLambdaFunctionNameToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaLambdaFunctionNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaLambdaFunctionNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaLambdaFunctionNameList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionNameOutputReference {
    return new Inspector2FilterFilterCriteriaLambdaFunctionNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaLambdaFunctionRuntimeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference {
    return new Inspector2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaLastObservedAtToTerraform(struct?: Inspector2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaLastObservedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaLastObservedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaLastObservedAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaLastObservedAtOutputReference {
    return new Inspector2FilterFilterCriteriaLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaNetworkProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaNetworkProtocolToTerraform(struct?: Inspector2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaNetworkProtocolToHclTerraform(struct?: Inspector2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaNetworkProtocolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaNetworkProtocolList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaNetworkProtocolOutputReference {
    return new Inspector2FilterFilterCriteriaNetworkProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#begin_inclusive Inspector2Filter#begin_inclusive}
  */
  readonly beginInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive: number;
}

export function inspector2FilterFilterCriteriaPortRangeToTerraform(struct?: Inspector2FilterFilterCriteriaPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    begin_inclusive: cdktn.numberToTerraform(struct!.beginInclusive),
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
  }
}


export function inspector2FilterFilterCriteriaPortRangeToHclTerraform(struct?: Inspector2FilterFilterCriteriaPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    begin_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.beginInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaPortRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginInclusive = this._beginInclusive;
    }
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaPortRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beginInclusive = undefined;
      this._endInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beginInclusive = value.beginInclusive;
      this._endInclusive = value.endInclusive;
    }
  }

  // begin_inclusive - computed: false, optional: false, required: true
  private _beginInclusive?: number; 
  public get beginInclusive() {
    return this.getNumberAttribute('begin_inclusive');
  }
  public set beginInclusive(value: number) {
    this._beginInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInclusiveInput() {
    return this._beginInclusive;
  }

  // end_inclusive - computed: false, optional: false, required: true
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }
}

export class Inspector2FilterFilterCriteriaPortRangeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaPortRange[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaPortRangeOutputReference {
    return new Inspector2FilterFilterCriteriaPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaRelatedVulnerabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform(struct?: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform(struct?: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaRelatedVulnerabilitiesList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference {
    return new Inspector2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaResourceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaResourceIdToTerraform(struct?: Inspector2FilterFilterCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaResourceIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaResourceIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaResourceId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaResourceId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaResourceIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaResourceId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaResourceIdOutputReference {
    return new Inspector2FilterFilterCriteriaResourceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#key Inspector2Filter#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaResourceTagsToTerraform(struct?: Inspector2FilterFilterCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaResourceTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaResourceTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaResourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaResourceTags | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaResourceTagsList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaResourceTagsOutputReference {
    return new Inspector2FilterFilterCriteriaResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaResourceTypeToTerraform(struct?: Inspector2FilterFilterCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaResourceTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaResourceTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaResourceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaResourceType | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaResourceTypeList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaResourceType[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaResourceTypeOutputReference {
    return new Inspector2FilterFilterCriteriaResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaSeverityToTerraform(struct?: Inspector2FilterFilterCriteriaSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaSeverityToHclTerraform(struct?: Inspector2FilterFilterCriteriaSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaSeverityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaSeverity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaSeverity | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaSeverityList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaSeverity[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaSeverityOutputReference {
    return new Inspector2FilterFilterCriteriaSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaTitleToTerraform(struct?: Inspector2FilterFilterCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaTitleToHclTerraform(struct?: Inspector2FilterFilterCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaTitleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaTitle | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaTitleList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaTitle[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaTitleOutputReference {
    return new Inspector2FilterFilterCriteriaTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
  */
  readonly endInclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
  */
  readonly startInclusive?: string;
}

export function inspector2FilterFilterCriteriaUpdatedAtToTerraform(struct?: Inspector2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.stringToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.stringToTerraform(struct!.startInclusive),
  }
}


export function inspector2FilterFilterCriteriaUpdatedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_inclusive: {
      value: cdktn.stringToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaUpdatedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: false, optional: true, required: false
  private _endInclusive?: string; 
  public get endInclusive() {
    return this.getStringAttribute('end_inclusive');
  }
  public set endInclusive(value: string) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: false, optional: true, required: false
  private _startInclusive?: string; 
  public get startInclusive() {
    return this.getStringAttribute('start_inclusive');
  }
  public set startInclusive(value: string) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspector2FilterFilterCriteriaUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaUpdatedAtOutputReference {
    return new Inspector2FilterFilterCriteriaUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVendorSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVendorSeverityToTerraform(struct?: Inspector2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVendorSeverityToHclTerraform(struct?: Inspector2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVendorSeverityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVendorSeverityList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVendorSeverityOutputReference {
    return new Inspector2FilterFilterCriteriaVendorSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerabilityId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerabilityIdToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerabilityIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerabilityIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerabilityIdList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerabilityIdOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerabilityIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerabilitySource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerabilitySourceToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerabilitySourceToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerabilitySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerabilitySourceList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerabilitySourceOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerabilitySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesEpoch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
  */
  readonly lowerInclusive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
  */
  readonly upperInclusive: number;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesEpochToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaVulnerablePackagesEpochOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: false, optional: false, required: true
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: false, optional: false, required: true
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspector2FilterFilterCriteriaVulnerablePackagesEpochList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesEpochOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesEpochOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesFilePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesFilePathList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesNameToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesNameList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesNameOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesReleaseList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
  */
  readonly value: string;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesVersionToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable | undefined) {
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

export class Inspector2FilterFilterCriteriaVulnerablePackagesVersionList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesVersionOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteriaVulnerablePackages {
  /**
  * architecture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#architecture Inspector2Filter#architecture}
  */
  readonly architecture?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktn.IResolvable;
  /**
  * epoch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#epoch Inspector2Filter#epoch}
  */
  readonly epoch?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktn.IResolvable;
  /**
  * file_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#file_path Inspector2Filter#file_path}
  */
  readonly filePath?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktn.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#name Inspector2Filter#name}
  */
  readonly name?: Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktn.IResolvable;
  /**
  * release block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#release Inspector2Filter#release}
  */
  readonly release?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktn.IResolvable;
  /**
  * source_lambda_layer_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#source_lambda_layer_arn Inspector2Filter#source_lambda_layer_arn}
  */
  readonly sourceLambdaLayerArn?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktn.IResolvable;
  /**
  * source_layer_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#source_layer_hash Inspector2Filter#source_layer_hash}
  */
  readonly sourceLayerHash?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktn.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#version Inspector2Filter#version}
  */
  readonly version?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktn.IResolvable;
}

export function inspector2FilterFilterCriteriaVulnerablePackagesToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform, true)(struct!.architecture),
    epoch: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesEpochToTerraform, true)(struct!.epoch),
    file_path: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform, true)(struct!.filePath),
    name: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesNameToTerraform, true)(struct!.name),
    release: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform, true)(struct!.release),
    source_lambda_layer_arn: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform, true)(struct!.sourceLambdaLayerArn),
    source_layer_hash: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform, true)(struct!.sourceLayerHash),
    version: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesVersionToTerraform, true)(struct!.version),
  }
}


export function inspector2FilterFilterCriteriaVulnerablePackagesToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform, true)(struct!.architecture),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureList",
    },
    epoch: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform, true)(struct!.epoch),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesEpochList",
    },
    file_path: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform, true)(struct!.filePath),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesFilePathList",
    },
    name: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform, true)(struct!.name),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesNameList",
    },
    release: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform, true)(struct!.release),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesReleaseList",
    },
    source_lambda_layer_arn: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform, true)(struct!.sourceLambdaLayerArn),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnList",
    },
    source_layer_hash: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform, true)(struct!.sourceLayerHash),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashList",
    },
    version: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "list",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesVersionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaVulnerablePackagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture?.internalValue;
    }
    if (this._epoch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch?.internalValue;
    }
    if (this._filePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._release?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release?.internalValue;
    }
    if (this._sourceLambdaLayerArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLambdaLayerArn = this._sourceLambdaLayerArn?.internalValue;
    }
    if (this._sourceLayerHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLayerHash = this._sourceLayerHash?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture.internalValue = undefined;
      this._epoch.internalValue = undefined;
      this._filePath.internalValue = undefined;
      this._name.internalValue = undefined;
      this._release.internalValue = undefined;
      this._sourceLambdaLayerArn.internalValue = undefined;
      this._sourceLayerHash.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture.internalValue = value.architecture;
      this._epoch.internalValue = value.epoch;
      this._filePath.internalValue = value.filePath;
      this._name.internalValue = value.name;
      this._release.internalValue = value.release;
      this._sourceLambdaLayerArn.internalValue = value.sourceLambdaLayerArn;
      this._sourceLayerHash.internalValue = value.sourceLayerHash;
      this._version.internalValue = value.version;
    }
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture = new Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureList(this, "architecture", false);
  public get architecture() {
    return this._architecture;
  }
  public putArchitecture(value: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktn.IResolvable) {
    this._architecture.internalValue = value;
  }
  public resetArchitecture() {
    this._architecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture.internalValue;
  }

  // epoch - computed: false, optional: true, required: false
  private _epoch = new Inspector2FilterFilterCriteriaVulnerablePackagesEpochList(this, "epoch", false);
  public get epoch() {
    return this._epoch;
  }
  public putEpoch(value: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktn.IResolvable) {
    this._epoch.internalValue = value;
  }
  public resetEpoch() {
    this._epoch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch.internalValue;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath = new Inspector2FilterFilterCriteriaVulnerablePackagesFilePathList(this, "file_path", false);
  public get filePath() {
    return this._filePath;
  }
  public putFilePath(value: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktn.IResolvable) {
    this._filePath.internalValue = value;
  }
  public resetFilePath() {
    this._filePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new Inspector2FilterFilterCriteriaVulnerablePackagesNameList(this, "name", false);
  public get name() {
    return this._name;
  }
  public putName(value: Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktn.IResolvable) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // release - computed: false, optional: true, required: false
  private _release = new Inspector2FilterFilterCriteriaVulnerablePackagesReleaseList(this, "release", false);
  public get release() {
    return this._release;
  }
  public putRelease(value: Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktn.IResolvable) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // source_lambda_layer_arn - computed: false, optional: true, required: false
  private _sourceLambdaLayerArn = new Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnList(this, "source_lambda_layer_arn", false);
  public get sourceLambdaLayerArn() {
    return this._sourceLambdaLayerArn;
  }
  public putSourceLambdaLayerArn(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktn.IResolvable) {
    this._sourceLambdaLayerArn.internalValue = value;
  }
  public resetSourceLambdaLayerArn() {
    this._sourceLambdaLayerArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLambdaLayerArnInput() {
    return this._sourceLambdaLayerArn.internalValue;
  }

  // source_layer_hash - computed: false, optional: true, required: false
  private _sourceLayerHash = new Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashList(this, "source_layer_hash", false);
  public get sourceLayerHash() {
    return this._sourceLayerHash;
  }
  public putSourceLayerHash(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktn.IResolvable) {
    this._sourceLayerHash.internalValue = value;
  }
  public resetSourceLayerHash() {
    this._sourceLayerHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLayerHashInput() {
    return this._sourceLayerHash.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new Inspector2FilterFilterCriteriaVulnerablePackagesVersionList(this, "version", false);
  public get version() {
    return this._version;
  }
  public putVersion(value: Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktn.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}

export class Inspector2FilterFilterCriteriaVulnerablePackagesList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesOutputReference {
    return new Inspector2FilterFilterCriteriaVulnerablePackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspector2FilterFilterCriteria {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#aws_account_id Inspector2Filter#aws_account_id}
  */
  readonly awsAccountId?: Inspector2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable;
  /**
  * code_repository_project_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#code_repository_project_name Inspector2Filter#code_repository_project_name}
  */
  readonly codeRepositoryProjectName?: Inspector2FilterFilterCriteriaCodeRepositoryProjectName[] | cdktn.IResolvable;
  /**
  * code_repository_provider_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#code_repository_provider_type Inspector2Filter#code_repository_provider_type}
  */
  readonly codeRepositoryProviderType?: Inspector2FilterFilterCriteriaCodeRepositoryProviderType[] | cdktn.IResolvable;
  /**
  * code_vulnerability_detector_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#code_vulnerability_detector_name Inspector2Filter#code_vulnerability_detector_name}
  */
  readonly codeVulnerabilityDetectorName?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable;
  /**
  * code_vulnerability_detector_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#code_vulnerability_detector_tags Inspector2Filter#code_vulnerability_detector_tags}
  */
  readonly codeVulnerabilityDetectorTags?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable;
  /**
  * code_vulnerability_file_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#code_vulnerability_file_path Inspector2Filter#code_vulnerability_file_path}
  */
  readonly codeVulnerabilityFilePath?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable;
  /**
  * component_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#component_id Inspector2Filter#component_id}
  */
  readonly componentId?: Inspector2FilterFilterCriteriaComponentId[] | cdktn.IResolvable;
  /**
  * component_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#component_type Inspector2Filter#component_type}
  */
  readonly componentType?: Inspector2FilterFilterCriteriaComponentType[] | cdktn.IResolvable;
  /**
  * ec2_instance_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ec2_instance_image_id Inspector2Filter#ec2_instance_image_id}
  */
  readonly ec2InstanceImageId?: Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable;
  /**
  * ec2_instance_subnet_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ec2_instance_subnet_id Inspector2Filter#ec2_instance_subnet_id}
  */
  readonly ec2InstanceSubnetId?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable;
  /**
  * ec2_instance_vpc_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ec2_instance_vpc_id Inspector2Filter#ec2_instance_vpc_id}
  */
  readonly ec2InstanceVpcId?: Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable;
  /**
  * ecr_image_architecture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_architecture Inspector2Filter#ecr_image_architecture}
  */
  readonly ecrImageArchitecture?: Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable;
  /**
  * ecr_image_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_hash Inspector2Filter#ecr_image_hash}
  */
  readonly ecrImageHash?: Inspector2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable;
  /**
  * ecr_image_in_use_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_in_use_count Inspector2Filter#ecr_image_in_use_count}
  */
  readonly ecrImageInUseCount?: Inspector2FilterFilterCriteriaEcrImageInUseCount[] | cdktn.IResolvable;
  /**
  * ecr_image_last_in_use_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_last_in_use_at Inspector2Filter#ecr_image_last_in_use_at}
  */
  readonly ecrImageLastInUseAt?: Inspector2FilterFilterCriteriaEcrImageLastInUseAt[] | cdktn.IResolvable;
  /**
  * ecr_image_pushed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_pushed_at Inspector2Filter#ecr_image_pushed_at}
  */
  readonly ecrImagePushedAt?: Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable;
  /**
  * ecr_image_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_registry Inspector2Filter#ecr_image_registry}
  */
  readonly ecrImageRegistry?: Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable;
  /**
  * ecr_image_repository_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_repository_name Inspector2Filter#ecr_image_repository_name}
  */
  readonly ecrImageRepositoryName?: Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable;
  /**
  * ecr_image_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#ecr_image_tags Inspector2Filter#ecr_image_tags}
  */
  readonly ecrImageTags?: Inspector2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable;
  /**
  * epss_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#epss_score Inspector2Filter#epss_score}
  */
  readonly epssScore?: Inspector2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable;
  /**
  * exploit_available block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#exploit_available Inspector2Filter#exploit_available}
  */
  readonly exploitAvailable?: Inspector2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable;
  /**
  * finding_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#finding_arn Inspector2Filter#finding_arn}
  */
  readonly findingArn?: Inspector2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable;
  /**
  * finding_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#finding_status Inspector2Filter#finding_status}
  */
  readonly findingStatus?: Inspector2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable;
  /**
  * finding_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#finding_type Inspector2Filter#finding_type}
  */
  readonly findingType?: Inspector2FilterFilterCriteriaFindingType[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#first_observed_at Inspector2Filter#first_observed_at}
  */
  readonly firstObservedAt?: Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable;
  /**
  * fix_available block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#fix_available Inspector2Filter#fix_available}
  */
  readonly fixAvailable?: Inspector2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable;
  /**
  * inspector_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#inspector_score Inspector2Filter#inspector_score}
  */
  readonly inspectorScore?: Inspector2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable;
  /**
  * lambda_function_execution_role_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lambda_function_execution_role_arn Inspector2Filter#lambda_function_execution_role_arn}
  */
  readonly lambdaFunctionExecutionRoleArn?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable;
  /**
  * lambda_function_last_modified_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lambda_function_last_modified_at Inspector2Filter#lambda_function_last_modified_at}
  */
  readonly lambdaFunctionLastModifiedAt?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable;
  /**
  * lambda_function_layers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lambda_function_layers Inspector2Filter#lambda_function_layers}
  */
  readonly lambdaFunctionLayers?: Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable;
  /**
  * lambda_function_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lambda_function_name Inspector2Filter#lambda_function_name}
  */
  readonly lambdaFunctionName?: Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable;
  /**
  * lambda_function_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#lambda_function_runtime Inspector2Filter#lambda_function_runtime}
  */
  readonly lambdaFunctionRuntime?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#last_observed_at Inspector2Filter#last_observed_at}
  */
  readonly lastObservedAt?: Inspector2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable;
  /**
  * network_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#network_protocol Inspector2Filter#network_protocol}
  */
  readonly networkProtocol?: Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#port_range Inspector2Filter#port_range}
  */
  readonly portRange?: Inspector2FilterFilterCriteriaPortRange[] | cdktn.IResolvable;
  /**
  * related_vulnerabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#related_vulnerabilities Inspector2Filter#related_vulnerabilities}
  */
  readonly relatedVulnerabilities?: Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#resource_id Inspector2Filter#resource_id}
  */
  readonly resourceId?: Inspector2FilterFilterCriteriaResourceId[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#resource_tags Inspector2Filter#resource_tags}
  */
  readonly resourceTags?: Inspector2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#resource_type Inspector2Filter#resource_type}
  */
  readonly resourceType?: Inspector2FilterFilterCriteriaResourceType[] | cdktn.IResolvable;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#severity Inspector2Filter#severity}
  */
  readonly severity?: Inspector2FilterFilterCriteriaSeverity[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#title Inspector2Filter#title}
  */
  readonly title?: Inspector2FilterFilterCriteriaTitle[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#updated_at Inspector2Filter#updated_at}
  */
  readonly updatedAt?: Inspector2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable;
  /**
  * vendor_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#vendor_severity Inspector2Filter#vendor_severity}
  */
  readonly vendorSeverity?: Inspector2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable;
  /**
  * vulnerability_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#vulnerability_id Inspector2Filter#vulnerability_id}
  */
  readonly vulnerabilityId?: Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable;
  /**
  * vulnerability_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#vulnerability_source Inspector2Filter#vulnerability_source}
  */
  readonly vulnerabilitySource?: Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable;
  /**
  * vulnerable_packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#vulnerable_packages Inspector2Filter#vulnerable_packages}
  */
  readonly vulnerablePackages?: Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable;
}

export function inspector2FilterFilterCriteriaToTerraform(struct?: Inspector2FilterFilterCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(inspector2FilterFilterCriteriaAwsAccountIdToTerraform, true)(struct!.awsAccountId),
    code_repository_project_name: cdktn.listMapper(inspector2FilterFilterCriteriaCodeRepositoryProjectNameToTerraform, true)(struct!.codeRepositoryProjectName),
    code_repository_provider_type: cdktn.listMapper(inspector2FilterFilterCriteriaCodeRepositoryProviderTypeToTerraform, true)(struct!.codeRepositoryProviderType),
    code_vulnerability_detector_name: cdktn.listMapper(inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform, true)(struct!.codeVulnerabilityDetectorName),
    code_vulnerability_detector_tags: cdktn.listMapper(inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform, true)(struct!.codeVulnerabilityDetectorTags),
    code_vulnerability_file_path: cdktn.listMapper(inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform, true)(struct!.codeVulnerabilityFilePath),
    component_id: cdktn.listMapper(inspector2FilterFilterCriteriaComponentIdToTerraform, true)(struct!.componentId),
    component_type: cdktn.listMapper(inspector2FilterFilterCriteriaComponentTypeToTerraform, true)(struct!.componentType),
    ec2_instance_image_id: cdktn.listMapper(inspector2FilterFilterCriteriaEc2InstanceImageIdToTerraform, true)(struct!.ec2InstanceImageId),
    ec2_instance_subnet_id: cdktn.listMapper(inspector2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform, true)(struct!.ec2InstanceSubnetId),
    ec2_instance_vpc_id: cdktn.listMapper(inspector2FilterFilterCriteriaEc2InstanceVpcIdToTerraform, true)(struct!.ec2InstanceVpcId),
    ecr_image_architecture: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageArchitectureToTerraform, true)(struct!.ecrImageArchitecture),
    ecr_image_hash: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageHashToTerraform, true)(struct!.ecrImageHash),
    ecr_image_in_use_count: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageInUseCountToTerraform, true)(struct!.ecrImageInUseCount),
    ecr_image_last_in_use_at: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageLastInUseAtToTerraform, true)(struct!.ecrImageLastInUseAt),
    ecr_image_pushed_at: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImagePushedAtToTerraform, true)(struct!.ecrImagePushedAt),
    ecr_image_registry: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageRegistryToTerraform, true)(struct!.ecrImageRegistry),
    ecr_image_repository_name: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageRepositoryNameToTerraform, true)(struct!.ecrImageRepositoryName),
    ecr_image_tags: cdktn.listMapper(inspector2FilterFilterCriteriaEcrImageTagsToTerraform, true)(struct!.ecrImageTags),
    epss_score: cdktn.listMapper(inspector2FilterFilterCriteriaEpssScoreToTerraform, true)(struct!.epssScore),
    exploit_available: cdktn.listMapper(inspector2FilterFilterCriteriaExploitAvailableToTerraform, true)(struct!.exploitAvailable),
    finding_arn: cdktn.listMapper(inspector2FilterFilterCriteriaFindingArnToTerraform, true)(struct!.findingArn),
    finding_status: cdktn.listMapper(inspector2FilterFilterCriteriaFindingStatusToTerraform, true)(struct!.findingStatus),
    finding_type: cdktn.listMapper(inspector2FilterFilterCriteriaFindingTypeToTerraform, true)(struct!.findingType),
    first_observed_at: cdktn.listMapper(inspector2FilterFilterCriteriaFirstObservedAtToTerraform, true)(struct!.firstObservedAt),
    fix_available: cdktn.listMapper(inspector2FilterFilterCriteriaFixAvailableToTerraform, true)(struct!.fixAvailable),
    inspector_score: cdktn.listMapper(inspector2FilterFilterCriteriaInspectorScoreToTerraform, true)(struct!.inspectorScore),
    lambda_function_execution_role_arn: cdktn.listMapper(inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform, true)(struct!.lambdaFunctionExecutionRoleArn),
    lambda_function_last_modified_at: cdktn.listMapper(inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform, true)(struct!.lambdaFunctionLastModifiedAt),
    lambda_function_layers: cdktn.listMapper(inspector2FilterFilterCriteriaLambdaFunctionLayersToTerraform, true)(struct!.lambdaFunctionLayers),
    lambda_function_name: cdktn.listMapper(inspector2FilterFilterCriteriaLambdaFunctionNameToTerraform, true)(struct!.lambdaFunctionName),
    lambda_function_runtime: cdktn.listMapper(inspector2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform, true)(struct!.lambdaFunctionRuntime),
    last_observed_at: cdktn.listMapper(inspector2FilterFilterCriteriaLastObservedAtToTerraform, true)(struct!.lastObservedAt),
    network_protocol: cdktn.listMapper(inspector2FilterFilterCriteriaNetworkProtocolToTerraform, true)(struct!.networkProtocol),
    port_range: cdktn.listMapper(inspector2FilterFilterCriteriaPortRangeToTerraform, true)(struct!.portRange),
    related_vulnerabilities: cdktn.listMapper(inspector2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform, true)(struct!.relatedVulnerabilities),
    resource_id: cdktn.listMapper(inspector2FilterFilterCriteriaResourceIdToTerraform, true)(struct!.resourceId),
    resource_tags: cdktn.listMapper(inspector2FilterFilterCriteriaResourceTagsToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(inspector2FilterFilterCriteriaResourceTypeToTerraform, true)(struct!.resourceType),
    severity: cdktn.listMapper(inspector2FilterFilterCriteriaSeverityToTerraform, true)(struct!.severity),
    title: cdktn.listMapper(inspector2FilterFilterCriteriaTitleToTerraform, true)(struct!.title),
    updated_at: cdktn.listMapper(inspector2FilterFilterCriteriaUpdatedAtToTerraform, true)(struct!.updatedAt),
    vendor_severity: cdktn.listMapper(inspector2FilterFilterCriteriaVendorSeverityToTerraform, true)(struct!.vendorSeverity),
    vulnerability_id: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerabilityIdToTerraform, true)(struct!.vulnerabilityId),
    vulnerability_source: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerabilitySourceToTerraform, true)(struct!.vulnerabilitySource),
    vulnerable_packages: cdktn.listMapper(inspector2FilterFilterCriteriaVulnerablePackagesToTerraform, true)(struct!.vulnerablePackages),
  }
}


export function inspector2FilterFilterCriteriaToHclTerraform(struct?: Inspector2FilterFilterCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaAwsAccountIdToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaAwsAccountIdList",
    },
    code_repository_project_name: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaCodeRepositoryProjectNameToHclTerraform, true)(struct!.codeRepositoryProjectName),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaCodeRepositoryProjectNameList",
    },
    code_repository_provider_type: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaCodeRepositoryProviderTypeToHclTerraform, true)(struct!.codeRepositoryProviderType),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeList",
    },
    code_vulnerability_detector_name: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform, true)(struct!.codeVulnerabilityDetectorName),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameList",
    },
    code_vulnerability_detector_tags: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform, true)(struct!.codeVulnerabilityDetectorTags),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList",
    },
    code_vulnerability_file_path: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform, true)(struct!.codeVulnerabilityFilePath),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathList",
    },
    component_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaComponentIdToHclTerraform, true)(struct!.componentId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaComponentIdList",
    },
    component_type: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaComponentTypeToHclTerraform, true)(struct!.componentType),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaComponentTypeList",
    },
    ec2_instance_image_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform, true)(struct!.ec2InstanceImageId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEc2InstanceImageIdList",
    },
    ec2_instance_subnet_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform, true)(struct!.ec2InstanceSubnetId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEc2InstanceSubnetIdList",
    },
    ec2_instance_vpc_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform, true)(struct!.ec2InstanceVpcId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEc2InstanceVpcIdList",
    },
    ecr_image_architecture: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageArchitectureToHclTerraform, true)(struct!.ecrImageArchitecture),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageArchitectureList",
    },
    ecr_image_hash: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageHashToHclTerraform, true)(struct!.ecrImageHash),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageHashList",
    },
    ecr_image_in_use_count: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageInUseCountToHclTerraform, true)(struct!.ecrImageInUseCount),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageInUseCountList",
    },
    ecr_image_last_in_use_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageLastInUseAtToHclTerraform, true)(struct!.ecrImageLastInUseAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageLastInUseAtList",
    },
    ecr_image_pushed_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImagePushedAtToHclTerraform, true)(struct!.ecrImagePushedAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImagePushedAtList",
    },
    ecr_image_registry: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageRegistryToHclTerraform, true)(struct!.ecrImageRegistry),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageRegistryList",
    },
    ecr_image_repository_name: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform, true)(struct!.ecrImageRepositoryName),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageRepositoryNameList",
    },
    ecr_image_tags: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEcrImageTagsToHclTerraform, true)(struct!.ecrImageTags),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEcrImageTagsList",
    },
    epss_score: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaEpssScoreToHclTerraform, true)(struct!.epssScore),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaEpssScoreList",
    },
    exploit_available: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaExploitAvailableToHclTerraform, true)(struct!.exploitAvailable),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaExploitAvailableList",
    },
    finding_arn: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaFindingArnToHclTerraform, true)(struct!.findingArn),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaFindingArnList",
    },
    finding_status: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaFindingStatusToHclTerraform, true)(struct!.findingStatus),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaFindingStatusList",
    },
    finding_type: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaFindingTypeToHclTerraform, true)(struct!.findingType),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaFindingTypeList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaFirstObservedAtToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaFirstObservedAtList",
    },
    fix_available: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaFixAvailableToHclTerraform, true)(struct!.fixAvailable),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaFixAvailableList",
    },
    inspector_score: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaInspectorScoreToHclTerraform, true)(struct!.inspectorScore),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaInspectorScoreList",
    },
    lambda_function_execution_role_arn: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform, true)(struct!.lambdaFunctionExecutionRoleArn),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList",
    },
    lambda_function_last_modified_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform, true)(struct!.lambdaFunctionLastModifiedAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtList",
    },
    lambda_function_layers: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform, true)(struct!.lambdaFunctionLayers),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLambdaFunctionLayersList",
    },
    lambda_function_name: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLambdaFunctionNameToHclTerraform, true)(struct!.lambdaFunctionName),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLambdaFunctionNameList",
    },
    lambda_function_runtime: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform, true)(struct!.lambdaFunctionRuntime),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLambdaFunctionRuntimeList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaLastObservedAtToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaLastObservedAtList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaNetworkProtocolToHclTerraform, true)(struct!.networkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaNetworkProtocolList",
    },
    port_range: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaPortRangeList",
    },
    related_vulnerabilities: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform, true)(struct!.relatedVulnerabilities),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaRelatedVulnerabilitiesList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaResourceIdToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaResourceIdList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaResourceTypeToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaResourceTypeList",
    },
    severity: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaSeverityToHclTerraform, true)(struct!.severity),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaSeverityList",
    },
    title: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaTitleList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaUpdatedAtToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaUpdatedAtList",
    },
    vendor_severity: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVendorSeverityToHclTerraform, true)(struct!.vendorSeverity),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaVendorSeverityList",
    },
    vulnerability_id: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerabilityIdToHclTerraform, true)(struct!.vulnerabilityId),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerabilityIdList",
    },
    vulnerability_source: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerabilitySourceToHclTerraform, true)(struct!.vulnerabilitySource),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerabilitySourceList",
    },
    vulnerable_packages: {
      value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaVulnerablePackagesToHclTerraform, true)(struct!.vulnerablePackages),
      isBlock: true,
      type: "set",
      storageClassType: "Inspector2FilterFilterCriteriaVulnerablePackagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2FilterFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Inspector2FilterFilterCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._codeRepositoryProjectName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepositoryProjectName = this._codeRepositoryProjectName?.internalValue;
    }
    if (this._codeRepositoryProviderType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepositoryProviderType = this._codeRepositoryProviderType?.internalValue;
    }
    if (this._codeVulnerabilityDetectorName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorName = this._codeVulnerabilityDetectorName?.internalValue;
    }
    if (this._codeVulnerabilityDetectorTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorTags = this._codeVulnerabilityDetectorTags?.internalValue;
    }
    if (this._codeVulnerabilityFilePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityFilePath = this._codeVulnerabilityFilePath?.internalValue;
    }
    if (this._componentId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId?.internalValue;
    }
    if (this._componentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType?.internalValue;
    }
    if (this._ec2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceImageId = this._ec2InstanceImageId?.internalValue;
    }
    if (this._ec2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceSubnetId = this._ec2InstanceSubnetId?.internalValue;
    }
    if (this._ec2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceVpcId = this._ec2InstanceVpcId?.internalValue;
    }
    if (this._ecrImageArchitecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageArchitecture = this._ecrImageArchitecture?.internalValue;
    }
    if (this._ecrImageHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageHash = this._ecrImageHash?.internalValue;
    }
    if (this._ecrImageInUseCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageInUseCount = this._ecrImageInUseCount?.internalValue;
    }
    if (this._ecrImageLastInUseAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageLastInUseAt = this._ecrImageLastInUseAt?.internalValue;
    }
    if (this._ecrImagePushedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImagePushedAt = this._ecrImagePushedAt?.internalValue;
    }
    if (this._ecrImageRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRegistry = this._ecrImageRegistry?.internalValue;
    }
    if (this._ecrImageRepositoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRepositoryName = this._ecrImageRepositoryName?.internalValue;
    }
    if (this._ecrImageTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageTags = this._ecrImageTags?.internalValue;
    }
    if (this._epssScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epssScore = this._epssScore?.internalValue;
    }
    if (this._exploitAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploitAvailable = this._exploitAvailable?.internalValue;
    }
    if (this._findingArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingArn = this._findingArn?.internalValue;
    }
    if (this._findingStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingStatus = this._findingStatus?.internalValue;
    }
    if (this._findingType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingType = this._findingType?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._fixAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixAvailable = this._fixAvailable?.internalValue;
    }
    if (this._inspectorScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectorScore = this._inspectorScore?.internalValue;
    }
    if (this._lambdaFunctionExecutionRoleArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionExecutionRoleArn = this._lambdaFunctionExecutionRoleArn?.internalValue;
    }
    if (this._lambdaFunctionLastModifiedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLastModifiedAt = this._lambdaFunctionLastModifiedAt?.internalValue;
    }
    if (this._lambdaFunctionLayers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLayers = this._lambdaFunctionLayers?.internalValue;
    }
    if (this._lambdaFunctionName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionName = this._lambdaFunctionName?.internalValue;
    }
    if (this._lambdaFunctionRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionRuntime = this._lambdaFunctionRuntime?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._relatedVulnerabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedVulnerabilities = this._relatedVulnerabilities?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._vendorSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSeverity = this._vendorSeverity?.internalValue;
    }
    if (this._vulnerabilityId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityId = this._vulnerabilityId?.internalValue;
    }
    if (this._vulnerabilitySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilitySource = this._vulnerabilitySource?.internalValue;
    }
    if (this._vulnerablePackages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerablePackages = this._vulnerablePackages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2FilterFilterCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._codeRepositoryProjectName.internalValue = undefined;
      this._codeRepositoryProviderType.internalValue = undefined;
      this._codeVulnerabilityDetectorName.internalValue = undefined;
      this._codeVulnerabilityDetectorTags.internalValue = undefined;
      this._codeVulnerabilityFilePath.internalValue = undefined;
      this._componentId.internalValue = undefined;
      this._componentType.internalValue = undefined;
      this._ec2InstanceImageId.internalValue = undefined;
      this._ec2InstanceSubnetId.internalValue = undefined;
      this._ec2InstanceVpcId.internalValue = undefined;
      this._ecrImageArchitecture.internalValue = undefined;
      this._ecrImageHash.internalValue = undefined;
      this._ecrImageInUseCount.internalValue = undefined;
      this._ecrImageLastInUseAt.internalValue = undefined;
      this._ecrImagePushedAt.internalValue = undefined;
      this._ecrImageRegistry.internalValue = undefined;
      this._ecrImageRepositoryName.internalValue = undefined;
      this._ecrImageTags.internalValue = undefined;
      this._epssScore.internalValue = undefined;
      this._exploitAvailable.internalValue = undefined;
      this._findingArn.internalValue = undefined;
      this._findingStatus.internalValue = undefined;
      this._findingType.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._fixAvailable.internalValue = undefined;
      this._inspectorScore.internalValue = undefined;
      this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
      this._lambdaFunctionLastModifiedAt.internalValue = undefined;
      this._lambdaFunctionLayers.internalValue = undefined;
      this._lambdaFunctionName.internalValue = undefined;
      this._lambdaFunctionRuntime.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._portRange.internalValue = undefined;
      this._relatedVulnerabilities.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._title.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._vendorSeverity.internalValue = undefined;
      this._vulnerabilityId.internalValue = undefined;
      this._vulnerabilitySource.internalValue = undefined;
      this._vulnerablePackages.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._codeRepositoryProjectName.internalValue = value.codeRepositoryProjectName;
      this._codeRepositoryProviderType.internalValue = value.codeRepositoryProviderType;
      this._codeVulnerabilityDetectorName.internalValue = value.codeVulnerabilityDetectorName;
      this._codeVulnerabilityDetectorTags.internalValue = value.codeVulnerabilityDetectorTags;
      this._codeVulnerabilityFilePath.internalValue = value.codeVulnerabilityFilePath;
      this._componentId.internalValue = value.componentId;
      this._componentType.internalValue = value.componentType;
      this._ec2InstanceImageId.internalValue = value.ec2InstanceImageId;
      this._ec2InstanceSubnetId.internalValue = value.ec2InstanceSubnetId;
      this._ec2InstanceVpcId.internalValue = value.ec2InstanceVpcId;
      this._ecrImageArchitecture.internalValue = value.ecrImageArchitecture;
      this._ecrImageHash.internalValue = value.ecrImageHash;
      this._ecrImageInUseCount.internalValue = value.ecrImageInUseCount;
      this._ecrImageLastInUseAt.internalValue = value.ecrImageLastInUseAt;
      this._ecrImagePushedAt.internalValue = value.ecrImagePushedAt;
      this._ecrImageRegistry.internalValue = value.ecrImageRegistry;
      this._ecrImageRepositoryName.internalValue = value.ecrImageRepositoryName;
      this._ecrImageTags.internalValue = value.ecrImageTags;
      this._epssScore.internalValue = value.epssScore;
      this._exploitAvailable.internalValue = value.exploitAvailable;
      this._findingArn.internalValue = value.findingArn;
      this._findingStatus.internalValue = value.findingStatus;
      this._findingType.internalValue = value.findingType;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._fixAvailable.internalValue = value.fixAvailable;
      this._inspectorScore.internalValue = value.inspectorScore;
      this._lambdaFunctionExecutionRoleArn.internalValue = value.lambdaFunctionExecutionRoleArn;
      this._lambdaFunctionLastModifiedAt.internalValue = value.lambdaFunctionLastModifiedAt;
      this._lambdaFunctionLayers.internalValue = value.lambdaFunctionLayers;
      this._lambdaFunctionName.internalValue = value.lambdaFunctionName;
      this._lambdaFunctionRuntime.internalValue = value.lambdaFunctionRuntime;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._portRange.internalValue = value.portRange;
      this._relatedVulnerabilities.internalValue = value.relatedVulnerabilities;
      this._resourceId.internalValue = value.resourceId;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severity.internalValue = value.severity;
      this._title.internalValue = value.title;
      this._updatedAt.internalValue = value.updatedAt;
      this._vendorSeverity.internalValue = value.vendorSeverity;
      this._vulnerabilityId.internalValue = value.vulnerabilityId;
      this._vulnerabilitySource.internalValue = value.vulnerabilitySource;
      this._vulnerablePackages.internalValue = value.vulnerablePackages;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new Inspector2FilterFilterCriteriaAwsAccountIdList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: Inspector2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // code_repository_project_name - computed: false, optional: true, required: false
  private _codeRepositoryProjectName = new Inspector2FilterFilterCriteriaCodeRepositoryProjectNameList(this, "code_repository_project_name", true);
  public get codeRepositoryProjectName() {
    return this._codeRepositoryProjectName;
  }
  public putCodeRepositoryProjectName(value: Inspector2FilterFilterCriteriaCodeRepositoryProjectName[] | cdktn.IResolvable) {
    this._codeRepositoryProjectName.internalValue = value;
  }
  public resetCodeRepositoryProjectName() {
    this._codeRepositoryProjectName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryProjectNameInput() {
    return this._codeRepositoryProjectName.internalValue;
  }

  // code_repository_provider_type - computed: false, optional: true, required: false
  private _codeRepositoryProviderType = new Inspector2FilterFilterCriteriaCodeRepositoryProviderTypeList(this, "code_repository_provider_type", true);
  public get codeRepositoryProviderType() {
    return this._codeRepositoryProviderType;
  }
  public putCodeRepositoryProviderType(value: Inspector2FilterFilterCriteriaCodeRepositoryProviderType[] | cdktn.IResolvable) {
    this._codeRepositoryProviderType.internalValue = value;
  }
  public resetCodeRepositoryProviderType() {
    this._codeRepositoryProviderType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryProviderTypeInput() {
    return this._codeRepositoryProviderType.internalValue;
  }

  // code_vulnerability_detector_name - computed: false, optional: true, required: false
  private _codeVulnerabilityDetectorName = new Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameList(this, "code_vulnerability_detector_name", true);
  public get codeVulnerabilityDetectorName() {
    return this._codeVulnerabilityDetectorName;
  }
  public putCodeVulnerabilityDetectorName(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorName.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorName() {
    this._codeVulnerabilityDetectorName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorNameInput() {
    return this._codeVulnerabilityDetectorName.internalValue;
  }

  // code_vulnerability_detector_tags - computed: false, optional: true, required: false
  private _codeVulnerabilityDetectorTags = new Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList(this, "code_vulnerability_detector_tags", true);
  public get codeVulnerabilityDetectorTags() {
    return this._codeVulnerabilityDetectorTags;
  }
  public putCodeVulnerabilityDetectorTags(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorTags.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorTags() {
    this._codeVulnerabilityDetectorTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorTagsInput() {
    return this._codeVulnerabilityDetectorTags.internalValue;
  }

  // code_vulnerability_file_path - computed: false, optional: true, required: false
  private _codeVulnerabilityFilePath = new Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathList(this, "code_vulnerability_file_path", true);
  public get codeVulnerabilityFilePath() {
    return this._codeVulnerabilityFilePath;
  }
  public putCodeVulnerabilityFilePath(value: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable) {
    this._codeVulnerabilityFilePath.internalValue = value;
  }
  public resetCodeVulnerabilityFilePath() {
    this._codeVulnerabilityFilePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityFilePathInput() {
    return this._codeVulnerabilityFilePath.internalValue;
  }

  // component_id - computed: false, optional: true, required: false
  private _componentId = new Inspector2FilterFilterCriteriaComponentIdList(this, "component_id", true);
  public get componentId() {
    return this._componentId;
  }
  public putComponentId(value: Inspector2FilterFilterCriteriaComponentId[] | cdktn.IResolvable) {
    this._componentId.internalValue = value;
  }
  public resetComponentId() {
    this._componentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId.internalValue;
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType = new Inspector2FilterFilterCriteriaComponentTypeList(this, "component_type", true);
  public get componentType() {
    return this._componentType;
  }
  public putComponentType(value: Inspector2FilterFilterCriteriaComponentType[] | cdktn.IResolvable) {
    this._componentType.internalValue = value;
  }
  public resetComponentType() {
    this._componentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType.internalValue;
  }

  // ec2_instance_image_id - computed: false, optional: true, required: false
  private _ec2InstanceImageId = new Inspector2FilterFilterCriteriaEc2InstanceImageIdList(this, "ec2_instance_image_id", true);
  public get ec2InstanceImageId() {
    return this._ec2InstanceImageId;
  }
  public putEc2InstanceImageId(value: Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable) {
    this._ec2InstanceImageId.internalValue = value;
  }
  public resetEc2InstanceImageId() {
    this._ec2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceImageIdInput() {
    return this._ec2InstanceImageId.internalValue;
  }

  // ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _ec2InstanceSubnetId = new Inspector2FilterFilterCriteriaEc2InstanceSubnetIdList(this, "ec2_instance_subnet_id", true);
  public get ec2InstanceSubnetId() {
    return this._ec2InstanceSubnetId;
  }
  public putEc2InstanceSubnetId(value: Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable) {
    this._ec2InstanceSubnetId.internalValue = value;
  }
  public resetEc2InstanceSubnetId() {
    this._ec2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceSubnetIdInput() {
    return this._ec2InstanceSubnetId.internalValue;
  }

  // ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _ec2InstanceVpcId = new Inspector2FilterFilterCriteriaEc2InstanceVpcIdList(this, "ec2_instance_vpc_id", true);
  public get ec2InstanceVpcId() {
    return this._ec2InstanceVpcId;
  }
  public putEc2InstanceVpcId(value: Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable) {
    this._ec2InstanceVpcId.internalValue = value;
  }
  public resetEc2InstanceVpcId() {
    this._ec2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceVpcIdInput() {
    return this._ec2InstanceVpcId.internalValue;
  }

  // ecr_image_architecture - computed: false, optional: true, required: false
  private _ecrImageArchitecture = new Inspector2FilterFilterCriteriaEcrImageArchitectureList(this, "ecr_image_architecture", true);
  public get ecrImageArchitecture() {
    return this._ecrImageArchitecture;
  }
  public putEcrImageArchitecture(value: Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable) {
    this._ecrImageArchitecture.internalValue = value;
  }
  public resetEcrImageArchitecture() {
    this._ecrImageArchitecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageArchitectureInput() {
    return this._ecrImageArchitecture.internalValue;
  }

  // ecr_image_hash - computed: false, optional: true, required: false
  private _ecrImageHash = new Inspector2FilterFilterCriteriaEcrImageHashList(this, "ecr_image_hash", true);
  public get ecrImageHash() {
    return this._ecrImageHash;
  }
  public putEcrImageHash(value: Inspector2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable) {
    this._ecrImageHash.internalValue = value;
  }
  public resetEcrImageHash() {
    this._ecrImageHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageHashInput() {
    return this._ecrImageHash.internalValue;
  }

  // ecr_image_in_use_count - computed: false, optional: true, required: false
  private _ecrImageInUseCount = new Inspector2FilterFilterCriteriaEcrImageInUseCountList(this, "ecr_image_in_use_count", true);
  public get ecrImageInUseCount() {
    return this._ecrImageInUseCount;
  }
  public putEcrImageInUseCount(value: Inspector2FilterFilterCriteriaEcrImageInUseCount[] | cdktn.IResolvable) {
    this._ecrImageInUseCount.internalValue = value;
  }
  public resetEcrImageInUseCount() {
    this._ecrImageInUseCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageInUseCountInput() {
    return this._ecrImageInUseCount.internalValue;
  }

  // ecr_image_last_in_use_at - computed: false, optional: true, required: false
  private _ecrImageLastInUseAt = new Inspector2FilterFilterCriteriaEcrImageLastInUseAtList(this, "ecr_image_last_in_use_at", true);
  public get ecrImageLastInUseAt() {
    return this._ecrImageLastInUseAt;
  }
  public putEcrImageLastInUseAt(value: Inspector2FilterFilterCriteriaEcrImageLastInUseAt[] | cdktn.IResolvable) {
    this._ecrImageLastInUseAt.internalValue = value;
  }
  public resetEcrImageLastInUseAt() {
    this._ecrImageLastInUseAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageLastInUseAtInput() {
    return this._ecrImageLastInUseAt.internalValue;
  }

  // ecr_image_pushed_at - computed: false, optional: true, required: false
  private _ecrImagePushedAt = new Inspector2FilterFilterCriteriaEcrImagePushedAtList(this, "ecr_image_pushed_at", true);
  public get ecrImagePushedAt() {
    return this._ecrImagePushedAt;
  }
  public putEcrImagePushedAt(value: Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable) {
    this._ecrImagePushedAt.internalValue = value;
  }
  public resetEcrImagePushedAt() {
    this._ecrImagePushedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImagePushedAtInput() {
    return this._ecrImagePushedAt.internalValue;
  }

  // ecr_image_registry - computed: false, optional: true, required: false
  private _ecrImageRegistry = new Inspector2FilterFilterCriteriaEcrImageRegistryList(this, "ecr_image_registry", true);
  public get ecrImageRegistry() {
    return this._ecrImageRegistry;
  }
  public putEcrImageRegistry(value: Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable) {
    this._ecrImageRegistry.internalValue = value;
  }
  public resetEcrImageRegistry() {
    this._ecrImageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRegistryInput() {
    return this._ecrImageRegistry.internalValue;
  }

  // ecr_image_repository_name - computed: false, optional: true, required: false
  private _ecrImageRepositoryName = new Inspector2FilterFilterCriteriaEcrImageRepositoryNameList(this, "ecr_image_repository_name", true);
  public get ecrImageRepositoryName() {
    return this._ecrImageRepositoryName;
  }
  public putEcrImageRepositoryName(value: Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable) {
    this._ecrImageRepositoryName.internalValue = value;
  }
  public resetEcrImageRepositoryName() {
    this._ecrImageRepositoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRepositoryNameInput() {
    return this._ecrImageRepositoryName.internalValue;
  }

  // ecr_image_tags - computed: false, optional: true, required: false
  private _ecrImageTags = new Inspector2FilterFilterCriteriaEcrImageTagsList(this, "ecr_image_tags", true);
  public get ecrImageTags() {
    return this._ecrImageTags;
  }
  public putEcrImageTags(value: Inspector2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable) {
    this._ecrImageTags.internalValue = value;
  }
  public resetEcrImageTags() {
    this._ecrImageTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageTagsInput() {
    return this._ecrImageTags.internalValue;
  }

  // epss_score - computed: false, optional: true, required: false
  private _epssScore = new Inspector2FilterFilterCriteriaEpssScoreList(this, "epss_score", true);
  public get epssScore() {
    return this._epssScore;
  }
  public putEpssScore(value: Inspector2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable) {
    this._epssScore.internalValue = value;
  }
  public resetEpssScore() {
    this._epssScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epssScoreInput() {
    return this._epssScore.internalValue;
  }

  // exploit_available - computed: false, optional: true, required: false
  private _exploitAvailable = new Inspector2FilterFilterCriteriaExploitAvailableList(this, "exploit_available", true);
  public get exploitAvailable() {
    return this._exploitAvailable;
  }
  public putExploitAvailable(value: Inspector2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable) {
    this._exploitAvailable.internalValue = value;
  }
  public resetExploitAvailable() {
    this._exploitAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exploitAvailableInput() {
    return this._exploitAvailable.internalValue;
  }

  // finding_arn - computed: false, optional: true, required: false
  private _findingArn = new Inspector2FilterFilterCriteriaFindingArnList(this, "finding_arn", true);
  public get findingArn() {
    return this._findingArn;
  }
  public putFindingArn(value: Inspector2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable) {
    this._findingArn.internalValue = value;
  }
  public resetFindingArn() {
    this._findingArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingArnInput() {
    return this._findingArn.internalValue;
  }

  // finding_status - computed: false, optional: true, required: false
  private _findingStatus = new Inspector2FilterFilterCriteriaFindingStatusList(this, "finding_status", true);
  public get findingStatus() {
    return this._findingStatus;
  }
  public putFindingStatus(value: Inspector2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable) {
    this._findingStatus.internalValue = value;
  }
  public resetFindingStatus() {
    this._findingStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingStatusInput() {
    return this._findingStatus.internalValue;
  }

  // finding_type - computed: false, optional: true, required: false
  private _findingType = new Inspector2FilterFilterCriteriaFindingTypeList(this, "finding_type", true);
  public get findingType() {
    return this._findingType;
  }
  public putFindingType(value: Inspector2FilterFilterCriteriaFindingType[] | cdktn.IResolvable) {
    this._findingType.internalValue = value;
  }
  public resetFindingType() {
    this._findingType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypeInput() {
    return this._findingType.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new Inspector2FilterFilterCriteriaFirstObservedAtList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // fix_available - computed: false, optional: true, required: false
  private _fixAvailable = new Inspector2FilterFilterCriteriaFixAvailableList(this, "fix_available", true);
  public get fixAvailable() {
    return this._fixAvailable;
  }
  public putFixAvailable(value: Inspector2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable) {
    this._fixAvailable.internalValue = value;
  }
  public resetFixAvailable() {
    this._fixAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixAvailableInput() {
    return this._fixAvailable.internalValue;
  }

  // inspector_score - computed: false, optional: true, required: false
  private _inspectorScore = new Inspector2FilterFilterCriteriaInspectorScoreList(this, "inspector_score", true);
  public get inspectorScore() {
    return this._inspectorScore;
  }
  public putInspectorScore(value: Inspector2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable) {
    this._inspectorScore.internalValue = value;
  }
  public resetInspectorScore() {
    this._inspectorScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectorScoreInput() {
    return this._inspectorScore.internalValue;
  }

  // lambda_function_execution_role_arn - computed: false, optional: true, required: false
  private _lambdaFunctionExecutionRoleArn = new Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList(this, "lambda_function_execution_role_arn", true);
  public get lambdaFunctionExecutionRoleArn() {
    return this._lambdaFunctionExecutionRoleArn;
  }
  public putLambdaFunctionExecutionRoleArn(value: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable) {
    this._lambdaFunctionExecutionRoleArn.internalValue = value;
  }
  public resetLambdaFunctionExecutionRoleArn() {
    this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionExecutionRoleArnInput() {
    return this._lambdaFunctionExecutionRoleArn.internalValue;
  }

  // lambda_function_last_modified_at - computed: false, optional: true, required: false
  private _lambdaFunctionLastModifiedAt = new Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtList(this, "lambda_function_last_modified_at", true);
  public get lambdaFunctionLastModifiedAt() {
    return this._lambdaFunctionLastModifiedAt;
  }
  public putLambdaFunctionLastModifiedAt(value: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable) {
    this._lambdaFunctionLastModifiedAt.internalValue = value;
  }
  public resetLambdaFunctionLastModifiedAt() {
    this._lambdaFunctionLastModifiedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLastModifiedAtInput() {
    return this._lambdaFunctionLastModifiedAt.internalValue;
  }

  // lambda_function_layers - computed: false, optional: true, required: false
  private _lambdaFunctionLayers = new Inspector2FilterFilterCriteriaLambdaFunctionLayersList(this, "lambda_function_layers", true);
  public get lambdaFunctionLayers() {
    return this._lambdaFunctionLayers;
  }
  public putLambdaFunctionLayers(value: Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable) {
    this._lambdaFunctionLayers.internalValue = value;
  }
  public resetLambdaFunctionLayers() {
    this._lambdaFunctionLayers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLayersInput() {
    return this._lambdaFunctionLayers.internalValue;
  }

  // lambda_function_name - computed: false, optional: true, required: false
  private _lambdaFunctionName = new Inspector2FilterFilterCriteriaLambdaFunctionNameList(this, "lambda_function_name", true);
  public get lambdaFunctionName() {
    return this._lambdaFunctionName;
  }
  public putLambdaFunctionName(value: Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable) {
    this._lambdaFunctionName.internalValue = value;
  }
  public resetLambdaFunctionName() {
    this._lambdaFunctionName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionNameInput() {
    return this._lambdaFunctionName.internalValue;
  }

  // lambda_function_runtime - computed: false, optional: true, required: false
  private _lambdaFunctionRuntime = new Inspector2FilterFilterCriteriaLambdaFunctionRuntimeList(this, "lambda_function_runtime", true);
  public get lambdaFunctionRuntime() {
    return this._lambdaFunctionRuntime;
  }
  public putLambdaFunctionRuntime(value: Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable) {
    this._lambdaFunctionRuntime.internalValue = value;
  }
  public resetLambdaFunctionRuntime() {
    this._lambdaFunctionRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionRuntimeInput() {
    return this._lambdaFunctionRuntime.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new Inspector2FilterFilterCriteriaLastObservedAtList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: Inspector2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol = new Inspector2FilterFilterCriteriaNetworkProtocolList(this, "network_protocol", true);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new Inspector2FilterFilterCriteriaPortRangeList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: Inspector2FilterFilterCriteriaPortRange[] | cdktn.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // related_vulnerabilities - computed: false, optional: true, required: false
  private _relatedVulnerabilities = new Inspector2FilterFilterCriteriaRelatedVulnerabilitiesList(this, "related_vulnerabilities", true);
  public get relatedVulnerabilities() {
    return this._relatedVulnerabilities;
  }
  public putRelatedVulnerabilities(value: Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable) {
    this._relatedVulnerabilities.internalValue = value;
  }
  public resetRelatedVulnerabilities() {
    this._relatedVulnerabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedVulnerabilitiesInput() {
    return this._relatedVulnerabilities.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new Inspector2FilterFilterCriteriaResourceIdList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: Inspector2FilterFilterCriteriaResourceId[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new Inspector2FilterFilterCriteriaResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: Inspector2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable) {
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
  private _resourceType = new Inspector2FilterFilterCriteriaResourceTypeList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: Inspector2FilterFilterCriteriaResourceType[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new Inspector2FilterFilterCriteriaSeverityList(this, "severity", true);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: Inspector2FilterFilterCriteriaSeverity[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new Inspector2FilterFilterCriteriaTitleList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: Inspector2FilterFilterCriteriaTitle[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new Inspector2FilterFilterCriteriaUpdatedAtList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: Inspector2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // vendor_severity - computed: false, optional: true, required: false
  private _vendorSeverity = new Inspector2FilterFilterCriteriaVendorSeverityList(this, "vendor_severity", true);
  public get vendorSeverity() {
    return this._vendorSeverity;
  }
  public putVendorSeverity(value: Inspector2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable) {
    this._vendorSeverity.internalValue = value;
  }
  public resetVendorSeverity() {
    this._vendorSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSeverityInput() {
    return this._vendorSeverity.internalValue;
  }

  // vulnerability_id - computed: false, optional: true, required: false
  private _vulnerabilityId = new Inspector2FilterFilterCriteriaVulnerabilityIdList(this, "vulnerability_id", true);
  public get vulnerabilityId() {
    return this._vulnerabilityId;
  }
  public putVulnerabilityId(value: Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable) {
    this._vulnerabilityId.internalValue = value;
  }
  public resetVulnerabilityId() {
    this._vulnerabilityId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityIdInput() {
    return this._vulnerabilityId.internalValue;
  }

  // vulnerability_source - computed: false, optional: true, required: false
  private _vulnerabilitySource = new Inspector2FilterFilterCriteriaVulnerabilitySourceList(this, "vulnerability_source", true);
  public get vulnerabilitySource() {
    return this._vulnerabilitySource;
  }
  public putVulnerabilitySource(value: Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable) {
    this._vulnerabilitySource.internalValue = value;
  }
  public resetVulnerabilitySource() {
    this._vulnerabilitySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitySourceInput() {
    return this._vulnerabilitySource.internalValue;
  }

  // vulnerable_packages - computed: false, optional: true, required: false
  private _vulnerablePackages = new Inspector2FilterFilterCriteriaVulnerablePackagesList(this, "vulnerable_packages", true);
  public get vulnerablePackages() {
    return this._vulnerablePackages;
  }
  public putVulnerablePackages(value: Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable) {
    this._vulnerablePackages.internalValue = value;
  }
  public resetVulnerablePackages() {
    this._vulnerablePackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerablePackagesInput() {
    return this._vulnerablePackages.internalValue;
  }
}

export class Inspector2FilterFilterCriteriaList extends cdktn.ComplexList {
  public internalValue? : Inspector2FilterFilterCriteria[] | cdktn.IResolvable

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
  public get(index: number): Inspector2FilterFilterCriteriaOutputReference {
    return new Inspector2FilterFilterCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter aws_inspector2_filter}
*/
export class Inspector2Filter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector2_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspector2Filter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspector2Filter to import
  * @param importFromId The id of the existing Inspector2Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspector2Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_inspector2_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/inspector2_filter aws_inspector2_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspector2FilterConfig
  */
  public constructor(scope: Construct, id: string, config: Inspector2FilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector2_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._action = config.action;
    this._description = config.description;
    this._name = config.name;
    this._reason = config.reason;
    this._region = config.region;
    this._tags = config.tags;
    this._filterCriteria.internalValue = config.filterCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new Inspector2FilterFilterCriteriaList(this, "filter_criteria", false);
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: Inspector2FilterFilterCriteria[] | cdktn.IResolvable) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktn.stringToTerraform(this._action),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      reason: cdktn.stringToTerraform(this._reason),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      filter_criteria: cdktn.listMapper(inspector2FilterFilterCriteriaToTerraform, true)(this._filterCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      reason: {
        value: cdktn.stringToHclTerraform(this._reason),
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
      filter_criteria: {
        value: cdktn.listMapperHcl(inspector2FilterFilterCriteriaToHclTerraform, true)(this._filterCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Inspector2FilterFilterCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
