/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerInferenceComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}
  */
  readonly variantName?: string;
  /**
  * deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}
  */
  readonly deploymentConfig?: SagemakerInferenceComponentDeploymentConfig[] | cdktn.IResolvable;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}
  */
  readonly runtimeConfig?: SagemakerInferenceComponentRuntimeConfig[] | cdktn.IResolvable;
  /**
  * specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}
  */
  readonly specification?: SagemakerInferenceComponentSpecification[] | cdktn.IResolvable;
  /**
  * specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}
  */
  readonly specifications?: SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}
  */
  readonly timeouts?: SagemakerInferenceComponentTimeouts;
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}
  */
  readonly alarmName: string;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
  /**
  * alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}
  */
  readonly alarms?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, true)(struct!.alarms),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform, true)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
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
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
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
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds: number;
  /**
  * maximum_batch_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}
  */
  readonly maximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] | cdktn.IResolvable;
  /**
  * rollback_maximum_batch_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}
  */
  readonly rollbackMaximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    maximum_batch_size: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform, true)(struct!.maximumBatchSize),
    rollback_maximum_batch_size: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform, true)(struct!.rollbackMaximumBatchSize),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_execution_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batch_size: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform, true)(struct!.maximumBatchSize),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList",
    },
    rollback_maximum_batch_size: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform, true)(struct!.rollbackMaximumBatchSize),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    if (this._maximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
    }
    if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._waitIntervalInSeconds = undefined;
      this._maximumBatchSize.internalValue = undefined;
      this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
      this._maximumBatchSize.internalValue = value.maximumBatchSize;
      this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
    }
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // wait_interval_in_seconds - computed: false, optional: false, required: true
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }

  // maximum_batch_size - computed: false, optional: true, required: false
  private _maximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList(this, "maximum_batch_size", false);
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }
  public putMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] | cdktn.IResolvable) {
    this._maximumBatchSize.internalValue = value;
  }
  public resetMaximumBatchSize() {
    this._maximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchSizeInput() {
    return this._maximumBatchSize.internalValue;
  }

  // rollback_maximum_batch_size - computed: false, optional: true, required: false
  private _rollbackMaximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList(this, "rollback_maximum_batch_size", false);
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
  public putRollbackMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] | cdktn.IResolvable) {
    this._rollbackMaximumBatchSize.internalValue = value;
  }
  public resetRollbackMaximumBatchSize() {
    this._rollbackMaximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackMaximumBatchSizeInput() {
    return this._rollbackMaximumBatchSize.internalValue;
  }
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfig {
  /**
  * auto_rollback_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] | cdktn.IResolvable;
  /**
  * rolling_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}
  */
  readonly rollingUpdatePolicy?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentDeploymentConfigToTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_rollback_configuration: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform, true)(struct!.autoRollbackConfiguration),
    rolling_update_policy: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform, true)(struct!.rollingUpdatePolicy),
  }
}


export function sagemakerInferenceComponentDeploymentConfigToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_rollback_configuration: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform, true)(struct!.autoRollbackConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList",
    },
    rolling_update_policy: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform, true)(struct!.rollingUpdatePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._rollingUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._rollingUpdatePolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList(this, "auto_rollback_configuration", false);
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] | cdktn.IResolvable) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // rolling_update_policy - computed: false, optional: true, required: false
  private _rollingUpdatePolicy = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList(this, "rolling_update_policy", false);
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
  public putRollingUpdatePolicy(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] | cdktn.IResolvable) {
    this._rollingUpdatePolicy.internalValue = value;
  }
  public resetRollingUpdatePolicy() {
    this._rollingUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdatePolicyInput() {
    return this._rollingUpdatePolicy.internalValue;
  }
}

export class SagemakerInferenceComponentDeploymentConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentRuntimeConfigPlacementStatus {
}

export function sagemakerInferenceComponentRuntimeConfigPlacementStatusToTerraform(struct?: SagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceComponentRuntimeConfigPlacementStatusToHclTerraform(struct?: SagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_copy_count - computed: true, optional: false, required: false
  public get currentCopyCount() {
    return this.getNumberAttribute('current_copy_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}

export class SagemakerInferenceComponentRuntimeConfigPlacementStatusList extends cdktn.ComplexList {

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
  public get(index: number): SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference {
    return new SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentRuntimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}
  */
  readonly copyCount: number;
}

export function sagemakerInferenceComponentRuntimeConfigToTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_count: cdktn.numberToTerraform(struct!.copyCount),
  }
}


export function sagemakerInferenceComponentRuntimeConfigToHclTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_count: {
      value: cdktn.numberToHclTerraform(struct!.copyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyCount = this._copyCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyCount = value.copyCount;
    }
  }

  // copy_count - computed: false, optional: false, required: true
  private _copyCount?: number; 
  public get copyCount() {
    return this.getNumberAttribute('copy_count');
  }
  public set copyCount(value: number) {
    this._copyCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyCountInput() {
    return this._copyCount;
  }

  // current_copy_count - computed: true, optional: false, required: false
  public get currentCopyCount() {
    return this.getNumberAttribute('current_copy_count');
  }

  // desired_copy_count - computed: true, optional: false, required: false
  public get desiredCopyCount() {
    return this.getNumberAttribute('desired_copy_count');
  }

  // placement_status - computed: true, optional: false, required: false
  private _placementStatus = new SagemakerInferenceComponentRuntimeConfigPlacementStatusList(this, "placement_status", false);
  public get placementStatus() {
    return this._placementStatus;
  }
}

export class SagemakerInferenceComponentRuntimeConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentRuntimeConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentRuntimeConfigOutputReference {
    return new SagemakerInferenceComponentRuntimeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationComputeResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}
  */
  readonly maxMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}
  */
  readonly minMemoryRequiredInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}
  */
  readonly numberOfAcceleratorDevicesRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}
  */
  readonly numberOfCpuCoresRequired?: number;
}

export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
    min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
    number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
    number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
  }
}


export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_accelerator_devices_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cpu_cores_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
    }
    if (this._minMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
    }
    if (this._numberOfAcceleratorDevicesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
    }
    if (this._numberOfCpuCoresRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = undefined;
      this._minMemoryRequiredInMb = undefined;
      this._numberOfAcceleratorDevicesRequired = undefined;
      this._numberOfCpuCoresRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
      this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
      this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
      this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: true, required: false
  private _maxMemoryRequiredInMb?: number; 
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }
  public set maxMemoryRequiredInMb(value: number) {
    this._maxMemoryRequiredInMb = value;
  }
  public resetMaxMemoryRequiredInMb() {
    this._maxMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequiredInMbInput() {
    return this._maxMemoryRequiredInMb;
  }

  // min_memory_required_in_mb - computed: false, optional: false, required: true
  private _minMemoryRequiredInMb?: number; 
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }
  public set minMemoryRequiredInMb(value: number) {
    this._minMemoryRequiredInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryRequiredInMbInput() {
    return this._minMemoryRequiredInMb;
  }

  // number_of_accelerator_devices_required - computed: true, optional: true, required: false
  private _numberOfAcceleratorDevicesRequired?: number; 
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }
  public set numberOfAcceleratorDevicesRequired(value: number) {
    this._numberOfAcceleratorDevicesRequired = value;
  }
  public resetNumberOfAcceleratorDevicesRequired() {
    this._numberOfAcceleratorDevicesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcceleratorDevicesRequiredInput() {
    return this._numberOfAcceleratorDevicesRequired;
  }

  // number_of_cpu_cores_required - computed: true, optional: true, required: false
  private _numberOfCpuCoresRequired?: number; 
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
  public set numberOfCpuCoresRequired(value: number) {
    this._numberOfCpuCoresRequired = value;
  }
  public resetNumberOfCpuCoresRequired() {
    this._numberOfCpuCoresRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresRequiredInput() {
    return this._numberOfCpuCoresRequired;
  }
}

export class SagemakerInferenceComponentSpecificationComputeResourceRequirementsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationComputeResourceRequirements[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference {
    return new SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}
  */
  readonly metricPublishFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}
  */
  readonly metricsEndpointPath: string;
}

export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
    metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
  }
}


export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_publish_frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPublishFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
    }
    if (this._metricsEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = undefined;
      this._metricsEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
      this._metricsEndpointPath = value.metricsEndpointPath;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
  private _metricPublishFrequencyInSeconds?: number; 
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }
  public set metricPublishFrequencyInSeconds(value: number) {
    this._metricPublishFrequencyInSeconds = value;
  }
  public resetMetricPublishFrequencyInSeconds() {
    this._metricPublishFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPublishFrequencyInSecondsInput() {
    return this._metricPublishFrequencyInSeconds;
  }

  // metrics_endpoint_path - computed: false, optional: false, required: true
  private _metricsEndpointPath?: string; 
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
  public set metricsEndpointPath(value: string) {
    this._metricsEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointPathInput() {
    return this._metricsEndpointPath;
  }
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference {
    return new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig {
  /**
  * metrics_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}
  */
  readonly metricsEndpoint?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_endpoint: cdktn.listMapper(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointToTerraform, true)(struct!.metricsEndpoint),
  }
}


export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_endpoint: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointToHclTerraform, true)(struct!.metricsEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpoint = this._metricsEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEndpoint.internalValue = value.metricsEndpoint;
    }
  }

  // metrics_endpoint - computed: false, optional: true, required: false
  private _metricsEndpoint = new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList(this, "metrics_endpoint", false);
  public get metricsEndpoint() {
    return this._metricsEndpoint;
  }
  public putMetricsEndpoint(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable) {
    this._metricsEndpoint.internalValue = value;
  }
  public resetMetricsEndpoint() {
    this._metricsEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointInput() {
    return this._metricsEndpoint.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}
  */
  readonly artifactUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}
  */
  readonly image?: string;
  /**
  * container_metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}
  */
  readonly containerMetricsConfig?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationContainerToTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
    container_metrics_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToTerraform, true)(struct!.containerMetricsConfig),
  }
}


export function sagemakerInferenceComponentSpecificationContainerToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_url: {
      value: cdktn.stringToHclTerraform(struct!.artifactUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_metrics_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToHclTerraform, true)(struct!.containerMetricsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUrl = this._artifactUrl;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._containerMetricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactUrl = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._containerMetricsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactUrl = value.artifactUrl;
      this._environment = value.environment;
      this._image = value.image;
      this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
    }
  }

  // artifact_url - computed: false, optional: true, required: false
  private _artifactUrl?: string; 
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }
  public set artifactUrl(value: string) {
    this._artifactUrl = value;
  }
  public resetArtifactUrl() {
    this._artifactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUrlInput() {
    return this._artifactUrl;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // resolved_image - computed: true, optional: false, required: false
  public get resolvedImage() {
    return this.getStringAttribute('resolved_image');
  }

  // container_metrics_config - computed: false, optional: true, required: false
  private _containerMetricsConfig = new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList(this, "container_metrics_config", false);
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }
  public putContainerMetricsConfig(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] | cdktn.IResolvable) {
    this._containerMetricsConfig.internalValue = value;
  }
  public resetContainerMetricsConfig() {
    this._containerMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetricsConfigInput() {
    return this._containerMetricsConfig.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationContainerList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationContainer[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationContainerOutputReference {
    return new SagemakerInferenceComponentSpecificationContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationDataCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}
  */
  readonly enableCaching: boolean | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
  }
}


export function sagemakerInferenceComponentSpecificationDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_caching: {
      value: cdktn.booleanToHclTerraform(struct!.enableCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaching = this._enableCaching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCaching = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCaching = value.enableCaching;
    }
  }

  // enable_caching - computed: false, optional: false, required: true
  private _enableCaching?: boolean | cdktn.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktn.IResolvable) {
    this._enableCaching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }
}

export class SagemakerInferenceComponentSpecificationDataCacheConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationDataCacheConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}
  */
  readonly maxImbalance?: number;
}

export function sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
    max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
  }
}


export function sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_imbalance: {
      value: cdktn.numberToHclTerraform(struct!.maxImbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._maxImbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxImbalance = this._maxImbalance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._maxImbalance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._maxImbalance = value.maxImbalance;
    }
  }

  // enforcement_mode - computed: false, optional: false, required: true
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // max_imbalance - computed: false, optional: true, required: false
  private _maxImbalance?: number; 
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
  public set maxImbalance(value: number) {
    this._maxImbalance = value;
  }
  public resetMaxImbalance() {
    this._maxImbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImbalanceInput() {
    return this._maxImbalance;
  }
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference {
    return new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationSchedulingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}
  */
  readonly placementStrategy: string;
  /**
  * availability_zone_balance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}
  */
  readonly availabilityZoneBalance?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationSchedulingConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
    availability_zone_balance: cdktn.listMapper(sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToTerraform, true)(struct!.availabilityZoneBalance),
  }
}


export function sagemakerInferenceComponentSpecificationSchedulingConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    placement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.placementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_balance: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToHclTerraform, true)(struct!.availabilityZoneBalance),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy;
    }
    if (this._availabilityZoneBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._placementStrategy = undefined;
      this._availabilityZoneBalance.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._placementStrategy = value.placementStrategy;
      this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
    }
  }

  // placement_strategy - computed: false, optional: false, required: true
  private _placementStrategy?: string; 
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
  public set placementStrategy(value: string) {
    this._placementStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy;
  }

  // availability_zone_balance - computed: false, optional: true, required: false
  private _availabilityZoneBalance = new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList(this, "availability_zone_balance", false);
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }
  public putAvailabilityZoneBalance(value: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable) {
    this._availabilityZoneBalance.internalValue = value;
  }
  public resetAvailabilityZoneBalance() {
    this._availabilityZoneBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneBalanceInput() {
    return this._availabilityZoneBalance.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationSchedulingConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationStartupParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
}

export function sagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
  }
}


export function sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }
}

export class SagemakerInferenceComponentSpecificationStartupParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationStartupParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationStartupParametersOutputReference {
    return new SagemakerInferenceComponentSpecificationStartupParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}
  */
  readonly baseInferenceComponentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}
  */
  readonly modelName?: string;
  /**
  * compute_resource_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}
  */
  readonly computeResourceRequirements?: SagemakerInferenceComponentSpecificationComputeResourceRequirements[] | cdktn.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}
  */
  readonly container?: SagemakerInferenceComponentSpecificationContainer[] | cdktn.IResolvable;
  /**
  * data_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}
  */
  readonly dataCacheConfig?: SagemakerInferenceComponentSpecificationDataCacheConfig[] | cdktn.IResolvable;
  /**
  * scheduling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}
  */
  readonly schedulingConfig?: SagemakerInferenceComponentSpecificationSchedulingConfig[] | cdktn.IResolvable;
  /**
  * startup_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}
  */
  readonly startupParameters?: SagemakerInferenceComponentSpecificationStartupParameters[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationToTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_inference_component_name: cdktn.stringToTerraform(struct!.baseInferenceComponentName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    compute_resource_requirements: cdktn.listMapper(sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform, true)(struct!.computeResourceRequirements),
    container: cdktn.listMapper(sagemakerInferenceComponentSpecificationContainerToTerraform, true)(struct!.container),
    data_cache_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationDataCacheConfigToTerraform, true)(struct!.dataCacheConfig),
    scheduling_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationSchedulingConfigToTerraform, true)(struct!.schedulingConfig),
    startup_parameters: cdktn.listMapper(sagemakerInferenceComponentSpecificationStartupParametersToTerraform, true)(struct!.startupParameters),
  }
}


export function sagemakerInferenceComponentSpecificationToHclTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_inference_component_name: {
      value: cdktn.stringToHclTerraform(struct!.baseInferenceComponentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resource_requirements: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform, true)(struct!.computeResourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationComputeResourceRequirementsList",
    },
    container: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationContainerList",
    },
    data_cache_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationDataCacheConfigToHclTerraform, true)(struct!.dataCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationDataCacheConfigList",
    },
    scheduling_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationSchedulingConfigToHclTerraform, true)(struct!.schedulingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationSchedulingConfigList",
    },
    startup_parameters: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform, true)(struct!.startupParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationStartupParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInferenceComponentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInferenceComponentName = this._baseInferenceComponentName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._computeResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._dataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
    }
    if (this._schedulingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
    }
    if (this._startupParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupParameters = this._startupParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = undefined;
      this._instanceType = undefined;
      this._modelName = undefined;
      this._computeResourceRequirements.internalValue = undefined;
      this._container.internalValue = undefined;
      this._dataCacheConfig.internalValue = undefined;
      this._schedulingConfig.internalValue = undefined;
      this._startupParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = value.baseInferenceComponentName;
      this._instanceType = value.instanceType;
      this._modelName = value.modelName;
      this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
      this._container.internalValue = value.container;
      this._dataCacheConfig.internalValue = value.dataCacheConfig;
      this._schedulingConfig.internalValue = value.schedulingConfig;
      this._startupParameters.internalValue = value.startupParameters;
    }
  }

  // base_inference_component_name - computed: false, optional: true, required: false
  private _baseInferenceComponentName?: string; 
  public get baseInferenceComponentName() {
    return this.getStringAttribute('base_inference_component_name');
  }
  public set baseInferenceComponentName(value: string) {
    this._baseInferenceComponentName = value;
  }
  public resetBaseInferenceComponentName() {
    this._baseInferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInferenceComponentNameInput() {
    return this._baseInferenceComponentName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // compute_resource_requirements - computed: false, optional: true, required: false
  private _computeResourceRequirements = new SagemakerInferenceComponentSpecificationComputeResourceRequirementsList(this, "compute_resource_requirements", false);
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }
  public putComputeResourceRequirements(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements[] | cdktn.IResolvable) {
    this._computeResourceRequirements.internalValue = value;
  }
  public resetComputeResourceRequirements() {
    this._computeResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceRequirementsInput() {
    return this._computeResourceRequirements.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new SagemakerInferenceComponentSpecificationContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerInferenceComponentSpecificationContainer[] | cdktn.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // data_cache_config - computed: false, optional: true, required: false
  private _dataCacheConfig = new SagemakerInferenceComponentSpecificationDataCacheConfigList(this, "data_cache_config", false);
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }
  public putDataCacheConfig(value: SagemakerInferenceComponentSpecificationDataCacheConfig[] | cdktn.IResolvable) {
    this._dataCacheConfig.internalValue = value;
  }
  public resetDataCacheConfig() {
    this._dataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheConfigInput() {
    return this._dataCacheConfig.internalValue;
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig = new SagemakerInferenceComponentSpecificationSchedulingConfigList(this, "scheduling_config", false);
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: SagemakerInferenceComponentSpecificationSchedulingConfig[] | cdktn.IResolvable) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // startup_parameters - computed: false, optional: true, required: false
  private _startupParameters = new SagemakerInferenceComponentSpecificationStartupParametersList(this, "startup_parameters", false);
  public get startupParameters() {
    return this._startupParameters;
  }
  public putStartupParameters(value: SagemakerInferenceComponentSpecificationStartupParameters[] | cdktn.IResolvable) {
    this._startupParameters.internalValue = value;
  }
  public resetStartupParameters() {
    this._startupParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationOutputReference {
    return new SagemakerInferenceComponentSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsComputeResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}
  */
  readonly maxMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}
  */
  readonly minMemoryRequiredInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}
  */
  readonly numberOfAcceleratorDevicesRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}
  */
  readonly numberOfCpuCoresRequired?: number;
}

export function sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToTerraform(struct?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
    min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
    number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
    number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
  }
}


export function sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_accelerator_devices_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cpu_cores_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
    }
    if (this._minMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
    }
    if (this._numberOfAcceleratorDevicesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
    }
    if (this._numberOfCpuCoresRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = undefined;
      this._minMemoryRequiredInMb = undefined;
      this._numberOfAcceleratorDevicesRequired = undefined;
      this._numberOfCpuCoresRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
      this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
      this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
      this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: true, required: false
  private _maxMemoryRequiredInMb?: number; 
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }
  public set maxMemoryRequiredInMb(value: number) {
    this._maxMemoryRequiredInMb = value;
  }
  public resetMaxMemoryRequiredInMb() {
    this._maxMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequiredInMbInput() {
    return this._maxMemoryRequiredInMb;
  }

  // min_memory_required_in_mb - computed: false, optional: false, required: true
  private _minMemoryRequiredInMb?: number; 
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }
  public set minMemoryRequiredInMb(value: number) {
    this._minMemoryRequiredInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryRequiredInMbInput() {
    return this._minMemoryRequiredInMb;
  }

  // number_of_accelerator_devices_required - computed: true, optional: true, required: false
  private _numberOfAcceleratorDevicesRequired?: number; 
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }
  public set numberOfAcceleratorDevicesRequired(value: number) {
    this._numberOfAcceleratorDevicesRequired = value;
  }
  public resetNumberOfAcceleratorDevicesRequired() {
    this._numberOfAcceleratorDevicesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcceleratorDevicesRequiredInput() {
    return this._numberOfAcceleratorDevicesRequired;
  }

  // number_of_cpu_cores_required - computed: true, optional: true, required: false
  private _numberOfCpuCoresRequired?: number; 
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
  public set numberOfCpuCoresRequired(value: number) {
    this._numberOfCpuCoresRequired = value;
  }
  public resetNumberOfCpuCoresRequired() {
    this._numberOfCpuCoresRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresRequiredInput() {
    return this._numberOfCpuCoresRequired;
  }
}

export class SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference {
    return new SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}
  */
  readonly metricPublishFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}
  */
  readonly metricsEndpointPath: string;
}

export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
    metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_publish_frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPublishFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
    }
    if (this._metricsEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = undefined;
      this._metricsEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
      this._metricsEndpointPath = value.metricsEndpointPath;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
  private _metricPublishFrequencyInSeconds?: number; 
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }
  public set metricPublishFrequencyInSeconds(value: number) {
    this._metricPublishFrequencyInSeconds = value;
  }
  public resetMetricPublishFrequencyInSeconds() {
    this._metricPublishFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPublishFrequencyInSecondsInput() {
    return this._metricPublishFrequencyInSeconds;
  }

  // metrics_endpoint_path - computed: false, optional: false, required: true
  private _metricsEndpointPath?: string; 
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
  public set metricsEndpointPath(value: string) {
    this._metricsEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointPathInput() {
    return this._metricsEndpointPath;
  }
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference {
    return new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig {
  /**
  * metrics_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}
  */
  readonly metricsEndpoint?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_endpoint: cdktn.listMapper(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointToTerraform, true)(struct!.metricsEndpoint),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_endpoint: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointToHclTerraform, true)(struct!.metricsEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpoint = this._metricsEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEndpoint.internalValue = value.metricsEndpoint;
    }
  }

  // metrics_endpoint - computed: false, optional: true, required: false
  private _metricsEndpoint = new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList(this, "metrics_endpoint", false);
  public get metricsEndpoint() {
    return this._metricsEndpoint;
  }
  public putMetricsEndpoint(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] | cdktn.IResolvable) {
    this._metricsEndpoint.internalValue = value;
  }
  public resetMetricsEndpoint() {
    this._metricsEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointInput() {
    return this._metricsEndpoint.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}
  */
  readonly artifactUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}
  */
  readonly image?: string;
  /**
  * container_metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}
  */
  readonly containerMetricsConfig?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsContainerToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
    container_metrics_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToTerraform, true)(struct!.containerMetricsConfig),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_url: {
      value: cdktn.stringToHclTerraform(struct!.artifactUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_metrics_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToHclTerraform, true)(struct!.containerMetricsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUrl = this._artifactUrl;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._containerMetricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactUrl = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._containerMetricsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactUrl = value.artifactUrl;
      this._environment = value.environment;
      this._image = value.image;
      this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
    }
  }

  // artifact_url - computed: false, optional: true, required: false
  private _artifactUrl?: string; 
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }
  public set artifactUrl(value: string) {
    this._artifactUrl = value;
  }
  public resetArtifactUrl() {
    this._artifactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUrlInput() {
    return this._artifactUrl;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // resolved_image - computed: true, optional: false, required: false
  public get resolvedImage() {
    return this.getStringAttribute('resolved_image');
  }

  // container_metrics_config - computed: false, optional: true, required: false
  private _containerMetricsConfig = new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList(this, "container_metrics_config", false);
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }
  public putContainerMetricsConfig(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] | cdktn.IResolvable) {
    this._containerMetricsConfig.internalValue = value;
  }
  public resetContainerMetricsConfig() {
    this._containerMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetricsConfigInput() {
    return this._containerMetricsConfig.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationsContainerList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsContainer[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsContainerOutputReference {
    return new SagemakerInferenceComponentSpecificationsContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsDataCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}
  */
  readonly enableCaching: boolean | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
  }
}


export function sagemakerInferenceComponentSpecificationsDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_caching: {
      value: cdktn.booleanToHclTerraform(struct!.enableCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaching = this._enableCaching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCaching = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCaching = value.enableCaching;
    }
  }

  // enable_caching - computed: false, optional: false, required: true
  private _enableCaching?: boolean | cdktn.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktn.IResolvable) {
    this._enableCaching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }
}

export class SagemakerInferenceComponentSpecificationsDataCacheConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsDataCacheConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}
  */
  readonly maxImbalance?: number;
}

export function sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
    max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
  }
}


export function sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_imbalance: {
      value: cdktn.numberToHclTerraform(struct!.maxImbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._maxImbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxImbalance = this._maxImbalance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._maxImbalance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._maxImbalance = value.maxImbalance;
    }
  }

  // enforcement_mode - computed: false, optional: false, required: true
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // max_imbalance - computed: false, optional: true, required: false
  private _maxImbalance?: number; 
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
  public set maxImbalance(value: number) {
    this._maxImbalance = value;
  }
  public resetMaxImbalance() {
    this._maxImbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImbalanceInput() {
    return this._maxImbalance;
  }
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference {
    return new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsSchedulingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}
  */
  readonly placementStrategy: string;
  /**
  * availability_zone_balance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}
  */
  readonly availabilityZoneBalance?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsSchedulingConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
    availability_zone_balance: cdktn.listMapper(sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToTerraform, true)(struct!.availabilityZoneBalance),
  }
}


export function sagemakerInferenceComponentSpecificationsSchedulingConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    placement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.placementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_balance: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToHclTerraform, true)(struct!.availabilityZoneBalance),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy;
    }
    if (this._availabilityZoneBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._placementStrategy = undefined;
      this._availabilityZoneBalance.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._placementStrategy = value.placementStrategy;
      this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
    }
  }

  // placement_strategy - computed: false, optional: false, required: true
  private _placementStrategy?: string; 
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
  public set placementStrategy(value: string) {
    this._placementStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy;
  }

  // availability_zone_balance - computed: false, optional: true, required: false
  private _availabilityZoneBalance = new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList(this, "availability_zone_balance", false);
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }
  public putAvailabilityZoneBalance(value: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] | cdktn.IResolvable) {
    this._availabilityZoneBalance.internalValue = value;
  }
  public resetAvailabilityZoneBalance() {
    this._availabilityZoneBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneBalanceInput() {
    return this._availabilityZoneBalance.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsSchedulingConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference {
    return new SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsStartupParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
}

export function sagemakerInferenceComponentSpecificationsStartupParametersToTerraform(struct?: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
  }
}


export function sagemakerInferenceComponentSpecificationsStartupParametersToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }
}

export class SagemakerInferenceComponentSpecificationsStartupParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsStartupParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsStartupParametersOutputReference {
    return new SagemakerInferenceComponentSpecificationsStartupParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}
  */
  readonly baseInferenceComponentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}
  */
  readonly modelName?: string;
  /**
  * compute_resource_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}
  */
  readonly computeResourceRequirements?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] | cdktn.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}
  */
  readonly container?: SagemakerInferenceComponentSpecificationsContainer[] | cdktn.IResolvable;
  /**
  * data_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}
  */
  readonly dataCacheConfig?: SagemakerInferenceComponentSpecificationsDataCacheConfig[] | cdktn.IResolvable;
  /**
  * scheduling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}
  */
  readonly schedulingConfig?: SagemakerInferenceComponentSpecificationsSchedulingConfig[] | cdktn.IResolvable;
  /**
  * startup_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}
  */
  readonly startupParameters?: SagemakerInferenceComponentSpecificationsStartupParameters[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsToTerraform(struct?: SagemakerInferenceComponentSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_inference_component_name: cdktn.stringToTerraform(struct!.baseInferenceComponentName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    compute_resource_requirements: cdktn.listMapper(sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToTerraform, true)(struct!.computeResourceRequirements),
    container: cdktn.listMapper(sagemakerInferenceComponentSpecificationsContainerToTerraform, true)(struct!.container),
    data_cache_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationsDataCacheConfigToTerraform, true)(struct!.dataCacheConfig),
    scheduling_config: cdktn.listMapper(sagemakerInferenceComponentSpecificationsSchedulingConfigToTerraform, true)(struct!.schedulingConfig),
    startup_parameters: cdktn.listMapper(sagemakerInferenceComponentSpecificationsStartupParametersToTerraform, true)(struct!.startupParameters),
  }
}


export function sagemakerInferenceComponentSpecificationsToHclTerraform(struct?: SagemakerInferenceComponentSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_inference_component_name: {
      value: cdktn.stringToHclTerraform(struct!.baseInferenceComponentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resource_requirements: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToHclTerraform, true)(struct!.computeResourceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList",
    },
    container: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainerList",
    },
    data_cache_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsDataCacheConfigToHclTerraform, true)(struct!.dataCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsDataCacheConfigList",
    },
    scheduling_config: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsSchedulingConfigToHclTerraform, true)(struct!.schedulingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsSchedulingConfigList",
    },
    startup_parameters: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsStartupParametersToHclTerraform, true)(struct!.startupParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsStartupParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerInferenceComponentSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInferenceComponentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInferenceComponentName = this._baseInferenceComponentName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._computeResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._dataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
    }
    if (this._schedulingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
    }
    if (this._startupParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupParameters = this._startupParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = undefined;
      this._instanceType = undefined;
      this._modelName = undefined;
      this._computeResourceRequirements.internalValue = undefined;
      this._container.internalValue = undefined;
      this._dataCacheConfig.internalValue = undefined;
      this._schedulingConfig.internalValue = undefined;
      this._startupParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = value.baseInferenceComponentName;
      this._instanceType = value.instanceType;
      this._modelName = value.modelName;
      this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
      this._container.internalValue = value.container;
      this._dataCacheConfig.internalValue = value.dataCacheConfig;
      this._schedulingConfig.internalValue = value.schedulingConfig;
      this._startupParameters.internalValue = value.startupParameters;
    }
  }

  // base_inference_component_name - computed: false, optional: true, required: false
  private _baseInferenceComponentName?: string; 
  public get baseInferenceComponentName() {
    return this.getStringAttribute('base_inference_component_name');
  }
  public set baseInferenceComponentName(value: string) {
    this._baseInferenceComponentName = value;
  }
  public resetBaseInferenceComponentName() {
    this._baseInferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInferenceComponentNameInput() {
    return this._baseInferenceComponentName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // compute_resource_requirements - computed: false, optional: true, required: false
  private _computeResourceRequirements = new SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList(this, "compute_resource_requirements", false);
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }
  public putComputeResourceRequirements(value: SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] | cdktn.IResolvable) {
    this._computeResourceRequirements.internalValue = value;
  }
  public resetComputeResourceRequirements() {
    this._computeResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceRequirementsInput() {
    return this._computeResourceRequirements.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new SagemakerInferenceComponentSpecificationsContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerInferenceComponentSpecificationsContainer[] | cdktn.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // data_cache_config - computed: false, optional: true, required: false
  private _dataCacheConfig = new SagemakerInferenceComponentSpecificationsDataCacheConfigList(this, "data_cache_config", false);
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }
  public putDataCacheConfig(value: SagemakerInferenceComponentSpecificationsDataCacheConfig[] | cdktn.IResolvable) {
    this._dataCacheConfig.internalValue = value;
  }
  public resetDataCacheConfig() {
    this._dataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheConfigInput() {
    return this._dataCacheConfig.internalValue;
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig = new SagemakerInferenceComponentSpecificationsSchedulingConfigList(this, "scheduling_config", false);
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: SagemakerInferenceComponentSpecificationsSchedulingConfig[] | cdktn.IResolvable) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // startup_parameters - computed: false, optional: true, required: false
  private _startupParameters = new SagemakerInferenceComponentSpecificationsStartupParametersList(this, "startup_parameters", false);
  public get startupParameters() {
    return this._startupParameters;
  }
  public putStartupParameters(value: SagemakerInferenceComponentSpecificationsStartupParameters[] | cdktn.IResolvable) {
    this._startupParameters.internalValue = value;
  }
  public resetStartupParameters() {
    this._startupParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsOutputReference {
    return new SagemakerInferenceComponentSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}
  */
  readonly update?: string;
}

export function sagemakerInferenceComponentTimeoutsToTerraform(struct?: SagemakerInferenceComponentTimeouts | cdktn.IResolvable): any {
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


export function sagemakerInferenceComponentTimeoutsToHclTerraform(struct?: SagemakerInferenceComponentTimeouts | cdktn.IResolvable): any {
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

export class SagemakerInferenceComponentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component}
*/
export class SagemakerInferenceComponent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_inference_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerInferenceComponent to import
  * @param importFromId The id of the existing SagemakerInferenceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerInferenceComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_inference_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerInferenceComponentConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerInferenceComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_inference_component',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.70.0',
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
    this._endpointName = config.endpointName;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._variantName = config.variantName;
    this._deploymentConfig.internalValue = config.deploymentConfig;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._specification.internalValue = config.specification;
    this._specifications.internalValue = config.specifications;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // endpoint_arn - computed: true, optional: false, required: false
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new SagemakerInferenceComponentDeploymentConfigList(this, "deployment_config", false);
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: SagemakerInferenceComponentDeploymentConfig[] | cdktn.IResolvable) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new SagemakerInferenceComponentRuntimeConfigList(this, "runtime_config", false);
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: SagemakerInferenceComponentRuntimeConfig[] | cdktn.IResolvable) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // specification - computed: false, optional: true, required: false
  private _specification = new SagemakerInferenceComponentSpecificationList(this, "specification", false);
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: SagemakerInferenceComponentSpecification[] | cdktn.IResolvable) {
    this._specification.internalValue = value;
  }
  public resetSpecification() {
    this._specification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // specifications - computed: false, optional: true, required: false
  private _specifications = new SagemakerInferenceComponentSpecificationsList(this, "specifications", false);
  public get specifications() {
    return this._specifications;
  }
  public putSpecifications(value: SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable) {
    this._specifications.internalValue = value;
  }
  public resetSpecifications() {
    this._specifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationsInput() {
    return this._specifications.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerInferenceComponentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerInferenceComponentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      variant_name: cdktn.stringToTerraform(this._variantName),
      deployment_config: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigToTerraform, true)(this._deploymentConfig.internalValue),
      runtime_config: cdktn.listMapper(sagemakerInferenceComponentRuntimeConfigToTerraform, true)(this._runtimeConfig.internalValue),
      specification: cdktn.listMapper(sagemakerInferenceComponentSpecificationToTerraform, true)(this._specification.internalValue),
      specifications: cdktn.listMapper(sagemakerInferenceComponentSpecificationsToTerraform, true)(this._specifications.internalValue),
      timeouts: sagemakerInferenceComponentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      variant_name: {
        value: cdktn.stringToHclTerraform(this._variantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_config: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigToHclTerraform, true)(this._deploymentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentDeploymentConfigList",
      },
      runtime_config: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentRuntimeConfigToHclTerraform, true)(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentRuntimeConfigList",
      },
      specification: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationToHclTerraform, true)(this._specification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentSpecificationList",
      },
      specifications: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsToHclTerraform, true)(this._specifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentSpecificationsList",
      },
      timeouts: {
        value: sagemakerInferenceComponentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
