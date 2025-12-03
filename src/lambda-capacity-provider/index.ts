/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}
  */
  readonly capacityProviderScalingConfig?: LambdaCapacityProviderCapacityProviderScalingConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}
  */
  readonly instanceRequirements?: LambdaCapacityProviderInstanceRequirements[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#region LambdaCapacityProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * permissions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}
  */
  readonly permissionsConfig?: LambdaCapacityProviderPermissionsConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#timeouts LambdaCapacityProvider#timeouts}
  */
  readonly timeouts?: LambdaCapacityProviderTimeouts;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}
  */
  readonly vpcConfig?: LambdaCapacityProviderVpcConfig[] | cdktf.IResolvable;
}
export interface LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}
  */
  readonly targetValue?: number;
}

export function lambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesToTerraform(struct?: LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}


export function lambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesToHclTerraform(struct?: LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._targetValue = value.targetValue;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList extends cdktf.ComplexList {
  public internalValue? : LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] | cdktf.IResolvable

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
  public get(index: number): LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference {
    return new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaCapacityProviderCapacityProviderScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#max_vcpu_count LambdaCapacityProvider#max_vcpu_count}
  */
  readonly maxVcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}
  */
  readonly scalingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}
  */
  readonly scalingPolicies?: LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] | cdktf.IResolvable;
}

export function lambdaCapacityProviderCapacityProviderScalingConfigToTerraform(struct?: LambdaCapacityProviderCapacityProviderScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_vcpu_count: cdktf.numberToTerraform(struct!.maxVcpuCount),
    scaling_mode: cdktf.stringToTerraform(struct!.scalingMode),
    scaling_policies: cdktf.listMapper(lambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesToTerraform, false)(struct!.scalingPolicies),
  }
}


export function lambdaCapacityProviderCapacityProviderScalingConfigToHclTerraform(struct?: LambdaCapacityProviderCapacityProviderScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_vcpu_count: {
      value: cdktf.numberToHclTerraform(struct!.maxVcpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_mode: {
      value: cdktf.stringToHclTerraform(struct!.scalingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_policies: {
      value: cdktf.listMapperHcl(lambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesToHclTerraform, false)(struct!.scalingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderCapacityProviderScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaCapacityProviderCapacityProviderScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVcpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpuCount = this._maxVcpuCount;
    }
    if (this._scalingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingMode = this._scalingMode;
    }
    if (this._scalingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicies = this._scalingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCapacityProviderCapacityProviderScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVcpuCount = undefined;
      this._scalingMode = undefined;
      this._scalingPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVcpuCount = value.maxVcpuCount;
      this._scalingMode = value.scalingMode;
      this._scalingPolicies.internalValue = value.scalingPolicies;
    }
  }

  // max_vcpu_count - computed: true, optional: true, required: false
  private _maxVcpuCount?: number; 
  public get maxVcpuCount() {
    return this.getNumberAttribute('max_vcpu_count');
  }
  public set maxVcpuCount(value: number) {
    this._maxVcpuCount = value;
  }
  public resetMaxVcpuCount() {
    this._maxVcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuCountInput() {
    return this._maxVcpuCount;
  }

  // scaling_mode - computed: true, optional: true, required: false
  private _scalingMode?: string; 
  public get scalingMode() {
    return this.getStringAttribute('scaling_mode');
  }
  public set scalingMode(value: string) {
    this._scalingMode = value;
  }
  public resetScalingMode() {
    this._scalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModeInput() {
    return this._scalingMode;
  }

  // scaling_policies - computed: true, optional: true, required: false
  private _scalingPolicies = new LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(this, "scaling_policies", false);
  public get scalingPolicies() {
    return this._scalingPolicies;
  }
  public putScalingPolicies(value: LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[] | cdktf.IResolvable) {
    this._scalingPolicies.internalValue = value;
  }
  public resetScalingPolicies() {
    this._scalingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPoliciesInput() {
    return this._scalingPolicies.internalValue;
  }
}

export class LambdaCapacityProviderCapacityProviderScalingConfigList extends cdktf.ComplexList {
  public internalValue? : LambdaCapacityProviderCapacityProviderScalingConfig[] | cdktf.IResolvable

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
  public get(index: number): LambdaCapacityProviderCapacityProviderScalingConfigOutputReference {
    return new LambdaCapacityProviderCapacityProviderScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaCapacityProviderInstanceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
}

export function lambdaCapacityProviderInstanceRequirementsToTerraform(struct?: LambdaCapacityProviderInstanceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedInstanceTypes),
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    excluded_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceTypes),
  }
}


export function lambdaCapacityProviderInstanceRequirementsToHclTerraform(struct?: LambdaCapacityProviderInstanceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderInstanceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaCapacityProviderInstanceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCapacityProviderInstanceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = undefined;
      this._architectures = undefined;
      this._excludedInstanceTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
      this._architectures = value.architectures;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
    }
  }

  // allowed_instance_types - computed: true, optional: true, required: false
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }
  public set allowedInstanceTypes(value: string[]) {
    this._allowedInstanceTypes = value;
  }
  public resetAllowedInstanceTypes() {
    this._allowedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInstanceTypesInput() {
    return this._allowedInstanceTypes;
  }

  // architectures - computed: true, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // excluded_instance_types - computed: true, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }
  public set excludedInstanceTypes(value: string[]) {
    this._excludedInstanceTypes = value;
  }
  public resetExcludedInstanceTypes() {
    this._excludedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceTypesInput() {
    return this._excludedInstanceTypes;
  }
}

export class LambdaCapacityProviderInstanceRequirementsList extends cdktf.ComplexList {
  public internalValue? : LambdaCapacityProviderInstanceRequirements[] | cdktf.IResolvable

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
  public get(index: number): LambdaCapacityProviderInstanceRequirementsOutputReference {
    return new LambdaCapacityProviderInstanceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaCapacityProviderPermissionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}
  */
  readonly capacityProviderOperatorRoleArn: string;
}

export function lambdaCapacityProviderPermissionsConfigToTerraform(struct?: LambdaCapacityProviderPermissionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_provider_operator_role_arn: cdktf.stringToTerraform(struct!.capacityProviderOperatorRoleArn),
  }
}


export function lambdaCapacityProviderPermissionsConfigToHclTerraform(struct?: LambdaCapacityProviderPermissionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_provider_operator_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.capacityProviderOperatorRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderPermissionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaCapacityProviderPermissionsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityProviderOperatorRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderOperatorRoleArn = this._capacityProviderOperatorRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCapacityProviderPermissionsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = value.capacityProviderOperatorRoleArn;
    }
  }

  // capacity_provider_operator_role_arn - computed: false, optional: false, required: true
  private _capacityProviderOperatorRoleArn?: string; 
  public get capacityProviderOperatorRoleArn() {
    return this.getStringAttribute('capacity_provider_operator_role_arn');
  }
  public set capacityProviderOperatorRoleArn(value: string) {
    this._capacityProviderOperatorRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderOperatorRoleArnInput() {
    return this._capacityProviderOperatorRoleArn;
  }
}

export class LambdaCapacityProviderPermissionsConfigList extends cdktf.ComplexList {
  public internalValue? : LambdaCapacityProviderPermissionsConfig[] | cdktf.IResolvable

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
  public get(index: number): LambdaCapacityProviderPermissionsConfigOutputReference {
    return new LambdaCapacityProviderPermissionsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaCapacityProviderTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#create LambdaCapacityProvider#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#delete LambdaCapacityProvider#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#update LambdaCapacityProvider#update}
  */
  readonly update?: string;
}

export function lambdaCapacityProviderTimeoutsToTerraform(struct?: LambdaCapacityProviderTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lambdaCapacityProviderTimeoutsToHclTerraform(struct?: LambdaCapacityProviderTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaCapacityProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LambdaCapacityProviderTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
export interface LambdaCapacityProviderVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function lambdaCapacityProviderVpcConfigToTerraform(struct?: LambdaCapacityProviderVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function lambdaCapacityProviderVpcConfigToHclTerraform(struct?: LambdaCapacityProviderVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaCapacityProviderVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaCapacityProviderVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCapacityProviderVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class LambdaCapacityProviderVpcConfigList extends cdktf.ComplexList {
  public internalValue? : LambdaCapacityProviderVpcConfig[] | cdktf.IResolvable

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
  public get(index: number): LambdaCapacityProviderVpcConfigOutputReference {
    return new LambdaCapacityProviderVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider}
*/
export class LambdaCapacityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaCapacityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaCapacityProvider to import
  * @param importFromId The id of the existing LambdaCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_capacity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.24.0',
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
    this._capacityProviderScalingConfig.internalValue = config.capacityProviderScalingConfig;
    this._instanceRequirements.internalValue = config.instanceRequirements;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._permissionsConfig.internalValue = config.permissionsConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_provider_scaling_config - computed: true, optional: true, required: false
  private _capacityProviderScalingConfig = new LambdaCapacityProviderCapacityProviderScalingConfigList(this, "capacity_provider_scaling_config", false);
  public get capacityProviderScalingConfig() {
    return this._capacityProviderScalingConfig;
  }
  public putCapacityProviderScalingConfig(value: LambdaCapacityProviderCapacityProviderScalingConfig[] | cdktf.IResolvable) {
    this._capacityProviderScalingConfig.internalValue = value;
  }
  public resetCapacityProviderScalingConfig() {
    this._capacityProviderScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderScalingConfigInput() {
    return this._capacityProviderScalingConfig.internalValue;
  }

  // instance_requirements - computed: true, optional: true, required: false
  private _instanceRequirements = new LambdaCapacityProviderInstanceRequirementsList(this, "instance_requirements", false);
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: LambdaCapacityProviderInstanceRequirements[] | cdktf.IResolvable) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // permissions_config - computed: false, optional: true, required: false
  private _permissionsConfig = new LambdaCapacityProviderPermissionsConfigList(this, "permissions_config", false);
  public get permissionsConfig() {
    return this._permissionsConfig;
  }
  public putPermissionsConfig(value: LambdaCapacityProviderPermissionsConfig[] | cdktf.IResolvable) {
    this._permissionsConfig.internalValue = value;
  }
  public resetPermissionsConfig() {
    this._permissionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsConfigInput() {
    return this._permissionsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdaCapacityProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdaCapacityProviderTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new LambdaCapacityProviderVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: LambdaCapacityProviderVpcConfig[] | cdktf.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_provider_scaling_config: cdktf.listMapper(lambdaCapacityProviderCapacityProviderScalingConfigToTerraform, false)(this._capacityProviderScalingConfig.internalValue),
      instance_requirements: cdktf.listMapper(lambdaCapacityProviderInstanceRequirementsToTerraform, false)(this._instanceRequirements.internalValue),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      permissions_config: cdktf.listMapper(lambdaCapacityProviderPermissionsConfigToTerraform, true)(this._permissionsConfig.internalValue),
      timeouts: lambdaCapacityProviderTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: cdktf.listMapper(lambdaCapacityProviderVpcConfigToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_provider_scaling_config: {
        value: cdktf.listMapperHcl(lambdaCapacityProviderCapacityProviderScalingConfigToHclTerraform, false)(this._capacityProviderScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaCapacityProviderCapacityProviderScalingConfigList",
      },
      instance_requirements: {
        value: cdktf.listMapperHcl(lambdaCapacityProviderInstanceRequirementsToHclTerraform, false)(this._instanceRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaCapacityProviderInstanceRequirementsList",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      permissions_config: {
        value: cdktf.listMapperHcl(lambdaCapacityProviderPermissionsConfigToHclTerraform, true)(this._permissionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaCapacityProviderPermissionsConfigList",
      },
      timeouts: {
        value: lambdaCapacityProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaCapacityProviderTimeouts",
      },
      vpc_config: {
        value: cdktf.listMapperHcl(lambdaCapacityProviderVpcConfigToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaCapacityProviderVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
