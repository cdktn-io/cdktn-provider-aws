/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#cluster EcsCapacityProvider#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#id EcsCapacityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#name EcsCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#region EcsCapacityProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#tags EcsCapacityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * auto_scaling_group_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
  */
  readonly autoScalingGroupProvider?: EcsCapacityProviderAutoScalingGroupProvider;
  /**
  * managed_instances_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#managed_instances_provider EcsCapacityProvider#managed_instances_provider}
  */
  readonly managedInstancesProvider?: EcsCapacityProviderManagedInstancesProvider;
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
  */
  readonly instanceWarmupPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
  */
  readonly maximumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
  */
  readonly minimumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#status EcsCapacityProvider#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#target_capacity EcsCapacityProvider#target_capacity}
  */
  readonly targetCapacity?: number;
}

export function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_warmup_period: cdktf.numberToTerraform(struct!.instanceWarmupPeriod),
    maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
    minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
    status: cdktf.stringToTerraform(struct!.status),
    target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
  }
}


export function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_warmup_period: {
      value: cdktf.numberToHclTerraform(struct!.instanceWarmupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_scaling_step_size: {
      value: cdktf.numberToHclTerraform(struct!.maximumScalingStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_scaling_step_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumScalingStepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_capacity: {
      value: cdktf.numberToHclTerraform(struct!.targetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceWarmupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
    }
    if (this._maximumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
    }
    if (this._minimumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacity = this._targetCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceWarmupPeriod = undefined;
      this._maximumScalingStepSize = undefined;
      this._minimumScalingStepSize = undefined;
      this._status = undefined;
      this._targetCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceWarmupPeriod = value.instanceWarmupPeriod;
      this._maximumScalingStepSize = value.maximumScalingStepSize;
      this._minimumScalingStepSize = value.minimumScalingStepSize;
      this._status = value.status;
      this._targetCapacity = value.targetCapacity;
    }
  }

  // instance_warmup_period - computed: true, optional: true, required: false
  private _instanceWarmupPeriod?: number; 
  public get instanceWarmupPeriod() {
    return this.getNumberAttribute('instance_warmup_period');
  }
  public set instanceWarmupPeriod(value: number) {
    this._instanceWarmupPeriod = value;
  }
  public resetInstanceWarmupPeriod() {
    this._instanceWarmupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWarmupPeriodInput() {
    return this._instanceWarmupPeriod;
  }

  // maximum_scaling_step_size - computed: true, optional: true, required: false
  private _maximumScalingStepSize?: number; 
  public get maximumScalingStepSize() {
    return this.getNumberAttribute('maximum_scaling_step_size');
  }
  public set maximumScalingStepSize(value: number) {
    this._maximumScalingStepSize = value;
  }
  public resetMaximumScalingStepSize() {
    this._maximumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScalingStepSizeInput() {
    return this._maximumScalingStepSize;
  }

  // minimum_scaling_step_size - computed: true, optional: true, required: false
  private _minimumScalingStepSize?: number; 
  public get minimumScalingStepSize() {
    return this.getNumberAttribute('minimum_scaling_step_size');
  }
  public set minimumScalingStepSize(value: number) {
    this._minimumScalingStepSize = value;
  }
  public resetMinimumScalingStepSize() {
    this._minimumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumScalingStepSizeInput() {
    return this._minimumScalingStepSize;
  }

  // status - computed: true, optional: true, required: false
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

  // target_capacity - computed: true, optional: true, required: false
  private _targetCapacity?: number; 
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }
  public resetTargetCapacity() {
    this._targetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
  }
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
  */
  readonly autoScalingGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#managed_draining EcsCapacityProvider#managed_draining}
  */
  readonly managedDraining?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
  */
  readonly managedTerminationProtection?: string;
  /**
  * managed_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#managed_scaling EcsCapacityProvider#managed_scaling}
  */
  readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
}

export function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
    managed_draining: cdktf.stringToTerraform(struct!.managedDraining),
    managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
    managed_scaling: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct!.managedScaling),
  }
}


export function ecsCapacityProviderAutoScalingGroupProviderToHclTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_draining: {
      value: cdktf.stringToHclTerraform(struct!.managedDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_termination_protection: {
      value: cdktf.stringToHclTerraform(struct!.managedTerminationProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_scaling: {
      value: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct!.managedScaling),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderAutoScalingGroupProviderManagedScalingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderAutoScalingGroupProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
    }
    if (this._managedDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDraining = this._managedDraining;
    }
    if (this._managedTerminationProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
    }
    if (this._managedScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedScaling = this._managedScaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderAutoScalingGroupProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingGroupArn = undefined;
      this._managedDraining = undefined;
      this._managedTerminationProtection = undefined;
      this._managedScaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingGroupArn = value.autoScalingGroupArn;
      this._managedDraining = value.managedDraining;
      this._managedTerminationProtection = value.managedTerminationProtection;
      this._managedScaling.internalValue = value.managedScaling;
    }
  }

  // auto_scaling_group_arn - computed: false, optional: false, required: true
  private _autoScalingGroupArn?: string; 
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }
  public set autoScalingGroupArn(value: string) {
    this._autoScalingGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupArnInput() {
    return this._autoScalingGroupArn;
  }

  // managed_draining - computed: true, optional: true, required: false
  private _managedDraining?: string; 
  public get managedDraining() {
    return this.getStringAttribute('managed_draining');
  }
  public set managedDraining(value: string) {
    this._managedDraining = value;
  }
  public resetManagedDraining() {
    this._managedDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDrainingInput() {
    return this._managedDraining;
  }

  // managed_termination_protection - computed: true, optional: true, required: false
  private _managedTerminationProtection?: string; 
  public get managedTerminationProtection() {
    return this.getStringAttribute('managed_termination_protection');
  }
  public set managedTerminationProtection(value: string) {
    this._managedTerminationProtection = value;
  }
  public resetManagedTerminationProtection() {
    this._managedTerminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTerminationProtectionInput() {
    return this._managedTerminationProtection;
  }

  // managed_scaling - computed: false, optional: true, required: false
  private _managedScaling = new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this, "managed_scaling");
  public get managedScaling() {
    return this._managedScaling;
  }
  public putManagedScaling(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling) {
    this._managedScaling.internalValue = value;
  }
  public resetManagedScaling() {
    this._managedScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedScalingInput() {
    return this._managedScaling.internalValue;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#scale_in_after EcsCapacityProvider#scale_in_after}
  */
  readonly scaleInAfter?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference | EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in_after: cdktf.numberToTerraform(struct!.scaleInAfter),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference | EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_in_after: {
      value: cdktf.numberToHclTerraform(struct!.scaleInAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleInAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInAfter = this._scaleInAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleInAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleInAfter = value.scaleInAfter;
    }
  }

  // scale_in_after - computed: false, optional: true, required: false
  private _scaleInAfter?: number; 
  public get scaleInAfter() {
    return this.getNumberAttribute('scale_in_after');
  }
  public set scaleInAfter(value: number) {
    this._scaleInAfter = value;
  }
  public resetScaleInAfter() {
    this._scaleInAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInAfterInput() {
    return this._scaleInAfter;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min?: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max EcsCapacityProvider#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#min EcsCapacityProvider#min}
  */
  readonly min: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#accelerator_manufacturers EcsCapacityProvider#accelerator_manufacturers}
  */
  readonly acceleratorManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#accelerator_names EcsCapacityProvider#accelerator_names}
  */
  readonly acceleratorNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#accelerator_types EcsCapacityProvider#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#allowed_instance_types EcsCapacityProvider#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#bare_metal EcsCapacityProvider#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#burstable_performance EcsCapacityProvider#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#cpu_manufacturers EcsCapacityProvider#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#excluded_instance_types EcsCapacityProvider#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#instance_generations EcsCapacityProvider#instance_generations}
  */
  readonly instanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#local_storage EcsCapacityProvider#local_storage}
  */
  readonly localStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#local_storage_types EcsCapacityProvider#local_storage_types}
  */
  readonly localStorageTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#max_spot_price_as_percentage_of_optimal_on_demand_price EcsCapacityProvider#max_spot_price_as_percentage_of_optimal_on_demand_price}
  */
  readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#on_demand_max_price_percentage_over_lowest_price EcsCapacityProvider#on_demand_max_price_percentage_over_lowest_price}
  */
  readonly onDemandMaxPricePercentageOverLowestPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#require_hibernate_support EcsCapacityProvider#require_hibernate_support}
  */
  readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#spot_max_price_percentage_over_lowest_price EcsCapacityProvider#spot_max_price_percentage_over_lowest_price}
  */
  readonly spotMaxPricePercentageOverLowestPrice?: number;
  /**
  * accelerator_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#accelerator_count EcsCapacityProvider#accelerator_count}
  */
  readonly acceleratorCount?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount;
  /**
  * accelerator_total_memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#accelerator_total_memory_mib EcsCapacityProvider#accelerator_total_memory_mib}
  */
  readonly acceleratorTotalMemoryMib?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib;
  /**
  * baseline_ebs_bandwidth_mbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#baseline_ebs_bandwidth_mbps EcsCapacityProvider#baseline_ebs_bandwidth_mbps}
  */
  readonly baselineEbsBandwidthMbps?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps;
  /**
  * memory_gib_per_vcpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#memory_gib_per_vcpu EcsCapacityProvider#memory_gib_per_vcpu}
  */
  readonly memoryGibPerVcpu?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu;
  /**
  * memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#memory_mib EcsCapacityProvider#memory_mib}
  */
  readonly memoryMib: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib;
  /**
  * network_bandwidth_gbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#network_bandwidth_gbps EcsCapacityProvider#network_bandwidth_gbps}
  */
  readonly networkBandwidthGbps?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps;
  /**
  * network_interface_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#network_interface_count EcsCapacityProvider#network_interface_count}
  */
  readonly networkInterfaceCount?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount;
  /**
  * total_local_storage_gb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#total_local_storage_gb EcsCapacityProvider#total_local_storage_gb}
  */
  readonly totalLocalStorageGb?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb;
  /**
  * vcpu_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#vcpu_count EcsCapacityProvider#vcpu_count}
  */
  readonly vcpuCount: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_manufacturers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceleratorManufacturers),
    accelerator_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceleratorNames),
    accelerator_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceleratorTypes),
    allowed_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedInstanceTypes),
    bare_metal: cdktf.stringToTerraform(struct!.bareMetal),
    burstable_performance: cdktf.stringToTerraform(struct!.burstablePerformance),
    cpu_manufacturers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cpuManufacturers),
    excluded_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceTypes),
    instance_generations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceGenerations),
    local_storage: cdktf.stringToTerraform(struct!.localStorage),
    local_storage_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localStorageTypes),
    max_spot_price_as_percentage_of_optimal_on_demand_price: cdktf.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
    on_demand_max_price_percentage_over_lowest_price: cdktf.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
    require_hibernate_support: cdktf.booleanToTerraform(struct!.requireHibernateSupport),
    spot_max_price_percentage_over_lowest_price: cdktf.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
    accelerator_count: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToTerraform(struct!.acceleratorCount),
    accelerator_total_memory_mib: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct!.acceleratorTotalMemoryMib),
    baseline_ebs_bandwidth_mbps: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct!.baselineEbsBandwidthMbps),
    memory_gib_per_vcpu: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToTerraform(struct!.memoryGibPerVcpu),
    memory_mib: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibToTerraform(struct!.memoryMib),
    network_bandwidth_gbps: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct!.networkBandwidthGbps),
    network_interface_count: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToTerraform(struct!.networkInterfaceCount),
    total_local_storage_gb: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToTerraform(struct!.totalLocalStorageGb),
    vcpu_count: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountToTerraform(struct!.vcpuCount),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_manufacturers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceleratorNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceleratorTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bare_metal: {
      value: cdktf.stringToHclTerraform(struct!.bareMetal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burstable_performance: {
      value: cdktf.stringToHclTerraform(struct!.burstablePerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manufacturers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cpuManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_generations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceGenerations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_storage: {
      value: cdktf.stringToHclTerraform(struct!.localStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_storage_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localStorageTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_spot_price_as_percentage_of_optimal_on_demand_price: {
      value: cdktf.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_max_price_percentage_over_lowest_price: {
      value: cdktf.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_hibernate_support: {
      value: cdktf.booleanToHclTerraform(struct!.requireHibernateSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_max_price_percentage_over_lowest_price: {
      value: cdktf.numberToHclTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_count: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToHclTerraform(struct!.acceleratorCount),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountList",
    },
    accelerator_total_memory_mib: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct!.acceleratorTotalMemoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList",
    },
    baseline_ebs_bandwidth_mbps: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct!.baselineEbsBandwidthMbps),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList",
    },
    memory_gib_per_vcpu: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct!.memoryGibPerVcpu),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList",
    },
    memory_mib: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibToHclTerraform(struct!.memoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibList",
    },
    network_bandwidth_gbps: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct!.networkBandwidthGbps),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList",
    },
    network_interface_count: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct!.networkInterfaceCount),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountList",
    },
    total_local_storage_gb: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct!.totalLocalStorageGb),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbList",
    },
    vcpu_count: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountToHclTerraform(struct!.vcpuCount),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorManufacturers = this._acceleratorManufacturers;
    }
    if (this._acceleratorNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorNames = this._acceleratorNames;
    }
    if (this._acceleratorTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTypes = this._acceleratorTypes;
    }
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    if (this._bareMetal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bareMetal = this._bareMetal;
    }
    if (this._burstablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstablePerformance = this._burstablePerformance;
    }
    if (this._cpuManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManufacturers = this._cpuManufacturers;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    if (this._instanceGenerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGenerations = this._instanceGenerations;
    }
    if (this._localStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorage = this._localStorage;
    }
    if (this._localStorageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageTypes = this._localStorageTypes;
    }
    if (this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
    }
    if (this._onDemandMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandMaxPricePercentageOverLowestPrice = this._onDemandMaxPricePercentageOverLowestPrice;
    }
    if (this._requireHibernateSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHibernateSupport = this._requireHibernateSupport;
    }
    if (this._spotMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPricePercentageOverLowestPrice = this._spotMaxPricePercentageOverLowestPrice;
    }
    if (this._acceleratorCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
    }
    if (this._acceleratorTotalMemoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTotalMemoryMib = this._acceleratorTotalMemoryMib?.internalValue;
    }
    if (this._baselineEbsBandwidthMbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineEbsBandwidthMbps = this._baselineEbsBandwidthMbps?.internalValue;
    }
    if (this._memoryGibPerVcpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGibPerVcpu = this._memoryGibPerVcpu?.internalValue;
    }
    if (this._memoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib?.internalValue;
    }
    if (this._networkBandwidthGbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBandwidthGbps = this._networkBandwidthGbps?.internalValue;
    }
    if (this._networkInterfaceCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceCount = this._networkInterfaceCount?.internalValue;
    }
    if (this._totalLocalStorageGb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLocalStorageGb = this._totalLocalStorageGb?.internalValue;
    }
    if (this._vcpuCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuCount = this._vcpuCount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorManufacturers = undefined;
      this._acceleratorNames = undefined;
      this._acceleratorTypes = undefined;
      this._allowedInstanceTypes = undefined;
      this._bareMetal = undefined;
      this._burstablePerformance = undefined;
      this._cpuManufacturers = undefined;
      this._excludedInstanceTypes = undefined;
      this._instanceGenerations = undefined;
      this._localStorage = undefined;
      this._localStorageTypes = undefined;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
      this._onDemandMaxPricePercentageOverLowestPrice = undefined;
      this._requireHibernateSupport = undefined;
      this._spotMaxPricePercentageOverLowestPrice = undefined;
      this._acceleratorCount.internalValue = undefined;
      this._acceleratorTotalMemoryMib.internalValue = undefined;
      this._baselineEbsBandwidthMbps.internalValue = undefined;
      this._memoryGibPerVcpu.internalValue = undefined;
      this._memoryMib.internalValue = undefined;
      this._networkBandwidthGbps.internalValue = undefined;
      this._networkInterfaceCount.internalValue = undefined;
      this._totalLocalStorageGb.internalValue = undefined;
      this._vcpuCount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorManufacturers = value.acceleratorManufacturers;
      this._acceleratorNames = value.acceleratorNames;
      this._acceleratorTypes = value.acceleratorTypes;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
      this._bareMetal = value.bareMetal;
      this._burstablePerformance = value.burstablePerformance;
      this._cpuManufacturers = value.cpuManufacturers;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
      this._instanceGenerations = value.instanceGenerations;
      this._localStorage = value.localStorage;
      this._localStorageTypes = value.localStorageTypes;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value.maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
      this._onDemandMaxPricePercentageOverLowestPrice = value.onDemandMaxPricePercentageOverLowestPrice;
      this._requireHibernateSupport = value.requireHibernateSupport;
      this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
      this._acceleratorCount.internalValue = value.acceleratorCount;
      this._acceleratorTotalMemoryMib.internalValue = value.acceleratorTotalMemoryMib;
      this._baselineEbsBandwidthMbps.internalValue = value.baselineEbsBandwidthMbps;
      this._memoryGibPerVcpu.internalValue = value.memoryGibPerVcpu;
      this._memoryMib.internalValue = value.memoryMib;
      this._networkBandwidthGbps.internalValue = value.networkBandwidthGbps;
      this._networkInterfaceCount.internalValue = value.networkInterfaceCount;
      this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
      this._vcpuCount.internalValue = value.vcpuCount;
    }
  }

  // accelerator_manufacturers - computed: false, optional: true, required: false
  private _acceleratorManufacturers?: string[]; 
  public get acceleratorManufacturers() {
    return cdktf.Fn.tolist(this.getListAttribute('accelerator_manufacturers'));
  }
  public set acceleratorManufacturers(value: string[]) {
    this._acceleratorManufacturers = value;
  }
  public resetAcceleratorManufacturers() {
    this._acceleratorManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorManufacturersInput() {
    return this._acceleratorManufacturers;
  }

  // accelerator_names - computed: false, optional: true, required: false
  private _acceleratorNames?: string[]; 
  public get acceleratorNames() {
    return cdktf.Fn.tolist(this.getListAttribute('accelerator_names'));
  }
  public set acceleratorNames(value: string[]) {
    this._acceleratorNames = value;
  }
  public resetAcceleratorNames() {
    this._acceleratorNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNamesInput() {
    return this._acceleratorNames;
  }

  // accelerator_types - computed: false, optional: true, required: false
  private _acceleratorTypes?: string[]; 
  public get acceleratorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('accelerator_types'));
  }
  public set acceleratorTypes(value: string[]) {
    this._acceleratorTypes = value;
  }
  public resetAcceleratorTypes() {
    this._acceleratorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypesInput() {
    return this._acceleratorTypes;
  }

  // allowed_instance_types - computed: false, optional: true, required: false
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_instance_types'));
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

  // bare_metal - computed: false, optional: true, required: false
  private _bareMetal?: string; 
  public get bareMetal() {
    return this.getStringAttribute('bare_metal');
  }
  public set bareMetal(value: string) {
    this._bareMetal = value;
  }
  public resetBareMetal() {
    this._bareMetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalInput() {
    return this._bareMetal;
  }

  // burstable_performance - computed: false, optional: true, required: false
  private _burstablePerformance?: string; 
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }
  public set burstablePerformance(value: string) {
    this._burstablePerformance = value;
  }
  public resetBurstablePerformance() {
    this._burstablePerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstablePerformanceInput() {
    return this._burstablePerformance;
  }

  // cpu_manufacturers - computed: false, optional: true, required: false
  private _cpuManufacturers?: string[]; 
  public get cpuManufacturers() {
    return cdktf.Fn.tolist(this.getListAttribute('cpu_manufacturers'));
  }
  public set cpuManufacturers(value: string[]) {
    this._cpuManufacturers = value;
  }
  public resetCpuManufacturers() {
    this._cpuManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManufacturersInput() {
    return this._cpuManufacturers;
  }

  // excluded_instance_types - computed: false, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_instance_types'));
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

  // instance_generations - computed: false, optional: true, required: false
  private _instanceGenerations?: string[]; 
  public get instanceGenerations() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_generations'));
  }
  public set instanceGenerations(value: string[]) {
    this._instanceGenerations = value;
  }
  public resetInstanceGenerations() {
    this._instanceGenerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGenerationsInput() {
    return this._instanceGenerations;
  }

  // local_storage - computed: false, optional: true, required: false
  private _localStorage?: string; 
  public get localStorage() {
    return this.getStringAttribute('local_storage');
  }
  public set localStorage(value: string) {
    this._localStorage = value;
  }
  public resetLocalStorage() {
    this._localStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInput() {
    return this._localStorage;
  }

  // local_storage_types - computed: false, optional: true, required: false
  private _localStorageTypes?: string[]; 
  public get localStorageTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('local_storage_types'));
  }
  public set localStorageTypes(value: string[]) {
    this._localStorageTypes = value;
  }
  public resetLocalStorageTypes() {
    this._localStorageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageTypesInput() {
    return this._localStorageTypes;
  }

  // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: false, optional: true, required: false
  private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number; 
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
  }
  public set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number) {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value;
  }
  public resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput() {
    return this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _onDemandMaxPricePercentageOverLowestPrice?: number; 
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }
  public set onDemandMaxPricePercentageOverLowestPrice(value: number) {
    this._onDemandMaxPricePercentageOverLowestPrice = value;
  }
  public resetOnDemandMaxPricePercentageOverLowestPrice() {
    this._onDemandMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandMaxPricePercentageOverLowestPriceInput() {
    return this._onDemandMaxPricePercentageOverLowestPrice;
  }

  // require_hibernate_support - computed: false, optional: true, required: false
  private _requireHibernateSupport?: boolean | cdktf.IResolvable; 
  public get requireHibernateSupport() {
    return this.getBooleanAttribute('require_hibernate_support');
  }
  public set requireHibernateSupport(value: boolean | cdktf.IResolvable) {
    this._requireHibernateSupport = value;
  }
  public resetRequireHibernateSupport() {
    this._requireHibernateSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHibernateSupportInput() {
    return this._requireHibernateSupport;
  }

  // spot_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _spotMaxPricePercentageOverLowestPrice?: number; 
  public get spotMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
  }
  public set spotMaxPricePercentageOverLowestPrice(value: number) {
    this._spotMaxPricePercentageOverLowestPrice = value;
  }
  public resetSpotMaxPricePercentageOverLowestPrice() {
    this._spotMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPricePercentageOverLowestPriceInput() {
    return this._spotMaxPricePercentageOverLowestPrice;
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }
  public putAcceleratorCount(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount) {
    this._acceleratorCount.internalValue = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount.internalValue;
  }

  // accelerator_total_memory_mib - computed: false, optional: true, required: false
  private _acceleratorTotalMemoryMib = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(this, "accelerator_total_memory_mib");
  public get acceleratorTotalMemoryMib() {
    return this._acceleratorTotalMemoryMib;
  }
  public putAcceleratorTotalMemoryMib(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib) {
    this._acceleratorTotalMemoryMib.internalValue = value;
  }
  public resetAcceleratorTotalMemoryMib() {
    this._acceleratorTotalMemoryMib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTotalMemoryMibInput() {
    return this._acceleratorTotalMemoryMib.internalValue;
  }

  // baseline_ebs_bandwidth_mbps - computed: false, optional: true, required: false
  private _baselineEbsBandwidthMbps = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }
  public putBaselineEbsBandwidthMbps(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps) {
    this._baselineEbsBandwidthMbps.internalValue = value;
  }
  public resetBaselineEbsBandwidthMbps() {
    this._baselineEbsBandwidthMbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineEbsBandwidthMbpsInput() {
    return this._baselineEbsBandwidthMbps.internalValue;
  }

  // memory_gib_per_vcpu - computed: false, optional: true, required: false
  private _memoryGibPerVcpu = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(this, "memory_gib_per_vcpu");
  public get memoryGibPerVcpu() {
    return this._memoryGibPerVcpu;
  }
  public putMemoryGibPerVcpu(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGibPerVcpu) {
    this._memoryGibPerVcpu.internalValue = value;
  }
  public resetMemoryGibPerVcpu() {
    this._memoryGibPerVcpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGibPerVcpuInput() {
    return this._memoryGibPerVcpu.internalValue;
  }

  // memory_mib - computed: false, optional: false, required: true
  private _memoryMib = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMibOutputReference(this, "memory_mib");
  public get memoryMib() {
    return this._memoryMib;
  }
  public putMemoryMib(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMib) {
    this._memoryMib.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib.internalValue;
  }

  // network_bandwidth_gbps - computed: false, optional: true, required: false
  private _networkBandwidthGbps = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }
  public putNetworkBandwidthGbps(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps) {
    this._networkBandwidthGbps.internalValue = value;
  }
  public resetNetworkBandwidthGbps() {
    this._networkBandwidthGbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBandwidthGbpsInput() {
    return this._networkBandwidthGbps.internalValue;
  }

  // network_interface_count - computed: false, optional: true, required: false
  private _networkInterfaceCount = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }
  public putNetworkInterfaceCount(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount) {
    this._networkInterfaceCount.internalValue = value;
  }
  public resetNetworkInterfaceCount() {
    this._networkInterfaceCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceCountInput() {
    return this._networkInterfaceCount.internalValue;
  }

  // total_local_storage_gb - computed: false, optional: true, required: false
  private _totalLocalStorageGb = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }
  public putTotalLocalStorageGb(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb) {
    this._totalLocalStorageGb.internalValue = value;
  }
  public resetTotalLocalStorageGb() {
    this._totalLocalStorageGb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLocalStorageGbInput() {
    return this._totalLocalStorageGb.internalValue;
  }

  // vcpu_count - computed: false, optional: false, required: true
  private _vcpuCount = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCountOutputReference(this, "vcpu_count");
  public get vcpuCount() {
    return this._vcpuCount;
  }
  public putVcpuCount(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVcpuCount) {
    this._vcpuCount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount.internalValue;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#security_groups EcsCapacityProvider#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#subnets EcsCapacityProvider#subnets}
  */
  readonly subnets: string[];
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#storage_size_gib EcsCapacityProvider#storage_size_gib}
  */
  readonly storageSizeGib: number;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_size_gib: cdktf.numberToTerraform(struct!.storageSizeGib),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGib = this._storageSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageSizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageSizeGib = value.storageSizeGib;
    }
  }

  // storage_size_gib - computed: false, optional: false, required: true
  private _storageSizeGib?: number; 
  public get storageSizeGib() {
    return this.getNumberAttribute('storage_size_gib');
  }
  public set storageSizeGib(value: number) {
    this._storageSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGibInput() {
    return this._storageSizeGib;
  }
}
export interface EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#capacity_option_type EcsCapacityProvider#capacity_option_type}
  */
  readonly capacityOptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#ec2_instance_profile_arn EcsCapacityProvider#ec2_instance_profile_arn}
  */
  readonly ec2InstanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#monitoring EcsCapacityProvider#monitoring}
  */
  readonly monitoring?: string;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#instance_requirements EcsCapacityProvider#instance_requirements}
  */
  readonly instanceRequirements?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#network_configuration EcsCapacityProvider#network_configuration}
  */
  readonly networkConfiguration: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#storage_configuration EcsCapacityProvider#storage_configuration}
  */
  readonly storageConfiguration?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration;
}

export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_option_type: cdktf.stringToTerraform(struct!.capacityOptionType),
    ec2_instance_profile_arn: cdktf.stringToTerraform(struct!.ec2InstanceProfileArn),
    monitoring: cdktf.stringToTerraform(struct!.monitoring),
    instance_requirements: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToTerraform(struct!.instanceRequirements),
    network_configuration: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToTerraform(struct!.networkConfiguration),
    storage_configuration: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToTerraform(struct!.storageConfiguration),
  }
}


export function ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference | EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_option_type: {
      value: cdktf.stringToHclTerraform(struct!.capacityOptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2_instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.ec2InstanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: cdktf.stringToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_requirements: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsList",
    },
    network_configuration: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationList",
    },
    storage_configuration: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToHclTerraform(struct!.storageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityOptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityOptionType = this._capacityOptionType;
    }
    if (this._ec2InstanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceProfileArn = this._ec2InstanceProfileArn;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._storageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityOptionType = undefined;
      this._ec2InstanceProfileArn = undefined;
      this._monitoring = undefined;
      this._instanceRequirements.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._storageConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityOptionType = value.capacityOptionType;
      this._ec2InstanceProfileArn = value.ec2InstanceProfileArn;
      this._monitoring = value.monitoring;
      this._instanceRequirements.internalValue = value.instanceRequirements;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._storageConfiguration.internalValue = value.storageConfiguration;
    }
  }

  // capacity_option_type - computed: true, optional: true, required: false
  private _capacityOptionType?: string; 
  public get capacityOptionType() {
    return this.getStringAttribute('capacity_option_type');
  }
  public set capacityOptionType(value: string) {
    this._capacityOptionType = value;
  }
  public resetCapacityOptionType() {
    this._capacityOptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionTypeInput() {
    return this._capacityOptionType;
  }

  // ec2_instance_profile_arn - computed: false, optional: false, required: true
  private _ec2InstanceProfileArn?: string; 
  public get ec2InstanceProfileArn() {
    return this.getStringAttribute('ec2_instance_profile_arn');
  }
  public set ec2InstanceProfileArn(value: string) {
    this._ec2InstanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceProfileArnInput() {
    return this._ec2InstanceProfileArn;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: string; 
  public get monitoring() {
    return this.getStringAttribute('monitoring');
  }
  public set monitoring(value: string) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // instance_requirements - computed: false, optional: true, required: false
  private _instanceRequirements = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }
}
export interface EcsCapacityProviderManagedInstancesProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#infrastructure_role_arn EcsCapacityProvider#infrastructure_role_arn}
  */
  readonly infrastructureRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#propagate_tags EcsCapacityProvider#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * infrastructure_optimization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#infrastructure_optimization EcsCapacityProvider#infrastructure_optimization}
  */
  readonly infrastructureOptimization?: EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization;
  /**
  * instance_launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#instance_launch_template EcsCapacityProvider#instance_launch_template}
  */
  readonly instanceLaunchTemplate: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate;
}

export function ecsCapacityProviderManagedInstancesProviderToTerraform(struct?: EcsCapacityProviderManagedInstancesProviderOutputReference | EcsCapacityProviderManagedInstancesProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infrastructure_role_arn: cdktf.stringToTerraform(struct!.infrastructureRoleArn),
    propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
    infrastructure_optimization: ecsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToTerraform(struct!.infrastructureOptimization),
    instance_launch_template: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToTerraform(struct!.instanceLaunchTemplate),
  }
}


export function ecsCapacityProviderManagedInstancesProviderToHclTerraform(struct?: EcsCapacityProviderManagedInstancesProviderOutputReference | EcsCapacityProviderManagedInstancesProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infrastructure_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_tags: {
      value: cdktf.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_optimization: {
      value: ecsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToHclTerraform(struct!.infrastructureOptimization),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationList",
    },
    instance_launch_template: {
      value: ecsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToHclTerraform(struct!.instanceLaunchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsCapacityProviderManagedInstancesProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderManagedInstancesProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRoleArn = this._infrastructureRoleArn;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._infrastructureOptimization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureOptimization = this._infrastructureOptimization?.internalValue;
    }
    if (this._instanceLaunchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceLaunchTemplate = this._instanceLaunchTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderManagedInstancesProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infrastructureRoleArn = undefined;
      this._propagateTags = undefined;
      this._infrastructureOptimization.internalValue = undefined;
      this._instanceLaunchTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infrastructureRoleArn = value.infrastructureRoleArn;
      this._propagateTags = value.propagateTags;
      this._infrastructureOptimization.internalValue = value.infrastructureOptimization;
      this._instanceLaunchTemplate.internalValue = value.instanceLaunchTemplate;
    }
  }

  // infrastructure_role_arn - computed: false, optional: false, required: true
  private _infrastructureRoleArn?: string; 
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }
  public set infrastructureRoleArn(value: string) {
    this._infrastructureRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRoleArnInput() {
    return this._infrastructureRoleArn;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // infrastructure_optimization - computed: false, optional: true, required: false
  private _infrastructureOptimization = new EcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference(this, "infrastructure_optimization");
  public get infrastructureOptimization() {
    return this._infrastructureOptimization;
  }
  public putInfrastructureOptimization(value: EcsCapacityProviderManagedInstancesProviderInfrastructureOptimization) {
    this._infrastructureOptimization.internalValue = value;
  }
  public resetInfrastructureOptimization() {
    this._infrastructureOptimization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureOptimizationInput() {
    return this._infrastructureOptimization.internalValue;
  }

  // instance_launch_template - computed: false, optional: false, required: true
  private _instanceLaunchTemplate = new EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference(this, "instance_launch_template");
  public get instanceLaunchTemplate() {
    return this._instanceLaunchTemplate;
  }
  public putInstanceLaunchTemplate(value: EcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate) {
    this._instanceLaunchTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLaunchTemplateInput() {
    return this._instanceLaunchTemplate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider}
*/
export class EcsCapacityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsCapacityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsCapacityProvider to import
  * @param importFromId The id of the existing EcsCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_capacity_provider',
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
    this._cluster = config.cluster;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
    this._managedInstancesProvider.internalValue = config.managedInstancesProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // auto_scaling_group_provider - computed: false, optional: true, required: false
  private _autoScalingGroupProvider = new EcsCapacityProviderAutoScalingGroupProviderOutputReference(this, "auto_scaling_group_provider");
  public get autoScalingGroupProvider() {
    return this._autoScalingGroupProvider;
  }
  public putAutoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider) {
    this._autoScalingGroupProvider.internalValue = value;
  }
  public resetAutoScalingGroupProvider() {
    this._autoScalingGroupProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupProviderInput() {
    return this._autoScalingGroupProvider.internalValue;
  }

  // managed_instances_provider - computed: false, optional: true, required: false
  private _managedInstancesProvider = new EcsCapacityProviderManagedInstancesProviderOutputReference(this, "managed_instances_provider");
  public get managedInstancesProvider() {
    return this._managedInstancesProvider;
  }
  public putManagedInstancesProvider(value: EcsCapacityProviderManagedInstancesProvider) {
    this._managedInstancesProvider.internalValue = value;
  }
  public resetManagedInstancesProvider() {
    this._managedInstancesProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstancesProviderInput() {
    return this._managedInstancesProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider.internalValue),
      managed_instances_provider: ecsCapacityProviderManagedInstancesProviderToTerraform(this._managedInstancesProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auto_scaling_group_provider: {
        value: ecsCapacityProviderAutoScalingGroupProviderToHclTerraform(this._autoScalingGroupProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsCapacityProviderAutoScalingGroupProviderList",
      },
      managed_instances_provider: {
        value: ecsCapacityProviderManagedInstancesProviderToHclTerraform(this._managedInstancesProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsCapacityProviderManagedInstancesProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
