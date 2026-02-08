/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsExpressGatewayServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}
  */
  readonly infrastructureRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}
  */
  readonly networkConfiguration?: EcsExpressGatewayServiceNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#region EcsExpressGatewayService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}
  */
  readonly scalingTarget?: EcsExpressGatewayServiceScalingTarget[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}
  */
  readonly waitForSteadyState?: boolean | cdktf.IResolvable;
  /**
  * primary_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}
  */
  readonly primaryContainer?: EcsExpressGatewayServicePrimaryContainer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#timeouts EcsExpressGatewayService#timeouts}
  */
  readonly timeouts?: EcsExpressGatewayServiceTimeouts;
}
export interface EcsExpressGatewayServiceIngressPaths {
}

export function ecsExpressGatewayServiceIngressPathsToTerraform(struct?: EcsExpressGatewayServiceIngressPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ecsExpressGatewayServiceIngressPathsToHclTerraform(struct?: EcsExpressGatewayServiceIngressPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceIngressPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceIngressPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceIngressPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class EcsExpressGatewayServiceIngressPathsList extends cdktf.ComplexList {

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
  public get(index: number): EcsExpressGatewayServiceIngressPathsOutputReference {
    return new EcsExpressGatewayServiceIngressPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}
  */
  readonly subnets?: string[];
}

export function ecsExpressGatewayServiceNetworkConfigurationToTerraform(struct?: EcsExpressGatewayServiceNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function ecsExpressGatewayServiceNetworkConfigurationToHclTerraform(struct?: EcsExpressGatewayServiceNetworkConfiguration | cdktf.IResolvable): any {
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

export class EcsExpressGatewayServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceNetworkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EcsExpressGatewayServiceNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: true, optional: true, required: false
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

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class EcsExpressGatewayServiceNetworkConfigurationList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServiceNetworkConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServiceNetworkConfigurationOutputReference {
    return new EcsExpressGatewayServiceNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceScalingTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}
  */
  readonly autoScalingMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}
  */
  readonly autoScalingTargetValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}
  */
  readonly maxTaskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}
  */
  readonly minTaskCount?: number;
}

export function ecsExpressGatewayServiceScalingTargetToTerraform(struct?: EcsExpressGatewayServiceScalingTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_metric: cdktf.stringToTerraform(struct!.autoScalingMetric),
    auto_scaling_target_value: cdktf.numberToTerraform(struct!.autoScalingTargetValue),
    max_task_count: cdktf.numberToTerraform(struct!.maxTaskCount),
    min_task_count: cdktf.numberToTerraform(struct!.minTaskCount),
  }
}


export function ecsExpressGatewayServiceScalingTargetToHclTerraform(struct?: EcsExpressGatewayServiceScalingTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_metric: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_target_value: {
      value: cdktf.numberToHclTerraform(struct!.autoScalingTargetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_count: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_task_count: {
      value: cdktf.numberToHclTerraform(struct!.minTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServiceScalingTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceScalingTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingMetric = this._autoScalingMetric;
    }
    if (this._autoScalingTargetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingTargetValue = this._autoScalingTargetValue;
    }
    if (this._maxTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskCount = this._maxTaskCount;
    }
    if (this._minTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskCount = this._minTaskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceScalingTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingMetric = undefined;
      this._autoScalingTargetValue = undefined;
      this._maxTaskCount = undefined;
      this._minTaskCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingMetric = value.autoScalingMetric;
      this._autoScalingTargetValue = value.autoScalingTargetValue;
      this._maxTaskCount = value.maxTaskCount;
      this._minTaskCount = value.minTaskCount;
    }
  }

  // auto_scaling_metric - computed: true, optional: true, required: false
  private _autoScalingMetric?: string; 
  public get autoScalingMetric() {
    return this.getStringAttribute('auto_scaling_metric');
  }
  public set autoScalingMetric(value: string) {
    this._autoScalingMetric = value;
  }
  public resetAutoScalingMetric() {
    this._autoScalingMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingMetricInput() {
    return this._autoScalingMetric;
  }

  // auto_scaling_target_value - computed: true, optional: true, required: false
  private _autoScalingTargetValue?: number; 
  public get autoScalingTargetValue() {
    return this.getNumberAttribute('auto_scaling_target_value');
  }
  public set autoScalingTargetValue(value: number) {
    this._autoScalingTargetValue = value;
  }
  public resetAutoScalingTargetValue() {
    this._autoScalingTargetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingTargetValueInput() {
    return this._autoScalingTargetValue;
  }

  // max_task_count - computed: true, optional: true, required: false
  private _maxTaskCount?: number; 
  public get maxTaskCount() {
    return this.getNumberAttribute('max_task_count');
  }
  public set maxTaskCount(value: number) {
    this._maxTaskCount = value;
  }
  public resetMaxTaskCount() {
    this._maxTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskCountInput() {
    return this._maxTaskCount;
  }

  // min_task_count - computed: true, optional: true, required: false
  private _minTaskCount?: number; 
  public get minTaskCount() {
    return this.getNumberAttribute('min_task_count');
  }
  public set minTaskCount(value: number) {
    this._minTaskCount = value;
  }
  public resetMinTaskCount() {
    this._minTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskCountInput() {
    return this._minTaskCount;
  }
}

export class EcsExpressGatewayServiceScalingTargetList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServiceScalingTarget[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServiceScalingTargetOutputReference {
    return new EcsExpressGatewayServiceScalingTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}
  */
  readonly logStreamPrefix?: string;
}

export function ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group: cdktf.stringToTerraform(struct!.logGroup),
    log_stream_prefix: cdktf.stringToTerraform(struct!.logStreamPrefix),
  }
}


export function ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logStreamPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamPrefix = this._logStreamPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
      this._logStreamPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
      this._logStreamPrefix = value.logStreamPrefix;
    }
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream_prefix - computed: true, optional: true, required: false
  private _logStreamPrefix?: string; 
  public get logStreamPrefix() {
    return this.getStringAttribute('log_stream_prefix');
  }
  public set logStreamPrefix(value: string) {
    this._logStreamPrefix = value;
  }
  public resetLogStreamPrefix() {
    this._logStreamPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamPrefixInput() {
    return this._logStreamPrefix;
  }
}

export class EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainerEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}
  */
  readonly value: string;
}

export function ecsExpressGatewayServicePrimaryContainerEnvironmentToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ecsExpressGatewayServicePrimaryContainerEnvironmentToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerEnvironment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class EcsExpressGatewayServicePrimaryContainerEnvironmentList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainerRepositoryCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}
  */
  readonly credentialsParameter: string;
}

export function ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
  }
}


export function ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_parameter: {
      value: cdktf.stringToHclTerraform(struct!.credentialsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsParameter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsParameter = value.credentialsParameter;
    }
  }

  // credentials_parameter - computed: false, optional: false, required: true
  private _credentialsParameter?: string; 
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
  public set credentialsParameter(value: string) {
    this._credentialsParameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsParameterInput() {
    return this._credentialsParameter;
  }
}

export class EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainerSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}
  */
  readonly valueFrom: string;
}

export function ecsExpressGatewayServicePrimaryContainerSecretToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}


export function ecsExpressGatewayServicePrimaryContainerSecretToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktf.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class EcsExpressGatewayServicePrimaryContainerSecretList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerSecret[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerSecretOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}
  */
  readonly awsLogsConfiguration?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}
  */
  readonly image: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}
  */
  readonly environment?: EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktf.IResolvable;
  /**
  * repository_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}
  */
  readonly repositoryCredentials?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#secret EcsExpressGatewayService#secret}
  */
  readonly secret?: EcsExpressGatewayServicePrimaryContainerSecret[] | cdktf.IResolvable;
}

export function ecsExpressGatewayServicePrimaryContainerToTerraform(struct?: EcsExpressGatewayServicePrimaryContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_logs_configuration: cdktf.listMapper(ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToTerraform, false)(struct!.awsLogsConfiguration),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    image: cdktf.stringToTerraform(struct!.image),
    environment: cdktf.listMapper(ecsExpressGatewayServicePrimaryContainerEnvironmentToTerraform, true)(struct!.environment),
    repository_credentials: cdktf.listMapper(ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToTerraform, true)(struct!.repositoryCredentials),
    secret: cdktf.listMapper(ecsExpressGatewayServicePrimaryContainerSecretToTerraform, true)(struct!.secret),
  }
}


export function ecsExpressGatewayServicePrimaryContainerToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_logs_configuration: {
      value: cdktf.listMapperHcl(ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToHclTerraform, false)(struct!.awsLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.listMapperHcl(ecsExpressGatewayServicePrimaryContainerEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerEnvironmentList",
    },
    repository_credentials: {
      value: cdktf.listMapperHcl(ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToHclTerraform, true)(struct!.repositoryCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList",
    },
    secret: {
      value: cdktf.listMapperHcl(ecsExpressGatewayServicePrimaryContainerSecretToHclTerraform, true)(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLogsConfiguration = this._awsLogsConfiguration?.internalValue;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._repositoryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentials = this._repositoryCredentials?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsLogsConfiguration.internalValue = undefined;
      this._command = undefined;
      this._containerPort = undefined;
      this._image = undefined;
      this._environment.internalValue = undefined;
      this._repositoryCredentials.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsLogsConfiguration.internalValue = value.awsLogsConfiguration;
      this._command = value.command;
      this._containerPort = value.containerPort;
      this._image = value.image;
      this._environment.internalValue = value.environment;
      this._repositoryCredentials.internalValue = value.repositoryCredentials;
      this._secret.internalValue = value.secret;
    }
  }

  // aws_logs_configuration - computed: true, optional: true, required: false
  private _awsLogsConfiguration = new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList(this, "aws_logs_configuration", false);
  public get awsLogsConfiguration() {
    return this._awsLogsConfiguration;
  }
  public putAwsLogsConfiguration(value: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration[] | cdktf.IResolvable) {
    this._awsLogsConfiguration.internalValue = value;
  }
  public resetAwsLogsConfiguration() {
    this._awsLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLogsConfigurationInput() {
    return this._awsLogsConfiguration.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container_port - computed: true, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new EcsExpressGatewayServicePrimaryContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // repository_credentials - computed: false, optional: true, required: false
  private _repositoryCredentials = new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList(this, "repository_credentials", false);
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }
  public putRepositoryCredentials(value: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials[] | cdktf.IResolvable) {
    this._repositoryCredentials.internalValue = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new EcsExpressGatewayServicePrimaryContainerSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: EcsExpressGatewayServicePrimaryContainerSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class EcsExpressGatewayServicePrimaryContainerList extends cdktf.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainer[] | cdktf.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#create EcsExpressGatewayService#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#delete EcsExpressGatewayService#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#update EcsExpressGatewayService#update}
  */
  readonly update?: string;
}

export function ecsExpressGatewayServiceTimeoutsToTerraform(struct?: EcsExpressGatewayServiceTimeouts | cdktf.IResolvable): any {
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


export function ecsExpressGatewayServiceTimeoutsToHclTerraform(struct?: EcsExpressGatewayServiceTimeouts | cdktf.IResolvable): any {
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

export class EcsExpressGatewayServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsExpressGatewayServiceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service aws_ecs_express_gateway_service}
*/
export class EcsExpressGatewayService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_express_gateway_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsExpressGatewayService to import
  * @param importFromId The id of the existing EcsExpressGatewayService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsExpressGatewayService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_express_gateway_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ecs_express_gateway_service aws_ecs_express_gateway_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsExpressGatewayServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsExpressGatewayServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_express_gateway_service',
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
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._healthCheckPath = config.healthCheckPath;
    this._infrastructureRoleArn = config.infrastructureRoleArn;
    this._memory = config.memory;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._region = config.region;
    this._scalingTarget.internalValue = config.scalingTarget;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._waitForSteadyState = config.waitForSteadyState;
    this._primaryContainer.internalValue = config.primaryContainer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
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

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // current_deployment - computed: true, optional: false, required: false
  public get currentDeployment() {
    return this.getStringAttribute('current_deployment');
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
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

  // ingress_paths - computed: true, optional: false, required: false
  private _ingressPaths = new EcsExpressGatewayServiceIngressPathsList(this, "ingress_paths", false);
  public get ingressPaths() {
    return this._ingressPaths;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration = new EcsExpressGatewayServiceNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsExpressGatewayServiceNetworkConfiguration[] | cdktf.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
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

  // scaling_target - computed: true, optional: true, required: false
  private _scalingTarget = new EcsExpressGatewayServiceScalingTargetList(this, "scaling_target", false);
  public get scalingTarget() {
    return this._scalingTarget;
  }
  public putScalingTarget(value: EcsExpressGatewayServiceScalingTarget[] | cdktf.IResolvable) {
    this._scalingTarget.internalValue = value;
  }
  public resetScalingTarget() {
    this._scalingTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTargetInput() {
    return this._scalingTarget.internalValue;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_revision_arn - computed: true, optional: false, required: false
  public get serviceRevisionArn() {
    return this.getStringAttribute('service_revision_arn');
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

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // wait_for_steady_state - computed: true, optional: true, required: false
  private _waitForSteadyState?: boolean | cdktf.IResolvable; 
  public get waitForSteadyState() {
    return this.getBooleanAttribute('wait_for_steady_state');
  }
  public set waitForSteadyState(value: boolean | cdktf.IResolvable) {
    this._waitForSteadyState = value;
  }
  public resetWaitForSteadyState() {
    this._waitForSteadyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSteadyStateInput() {
    return this._waitForSteadyState;
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer = new EcsExpressGatewayServicePrimaryContainerList(this, "primary_container", false);
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public putPrimaryContainer(value: EcsExpressGatewayServicePrimaryContainer[] | cdktf.IResolvable) {
    this._primaryContainer.internalValue = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsExpressGatewayServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsExpressGatewayServiceTimeouts) {
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
      cluster: cdktf.stringToTerraform(this._cluster),
      cpu: cdktf.stringToTerraform(this._cpu),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      infrastructure_role_arn: cdktf.stringToTerraform(this._infrastructureRoleArn),
      memory: cdktf.stringToTerraform(this._memory),
      network_configuration: cdktf.listMapper(ecsExpressGatewayServiceNetworkConfigurationToTerraform, false)(this._networkConfiguration.internalValue),
      region: cdktf.stringToTerraform(this._region),
      scaling_target: cdktf.listMapper(ecsExpressGatewayServiceScalingTargetToTerraform, false)(this._scalingTarget.internalValue),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
      wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
      primary_container: cdktf.listMapper(ecsExpressGatewayServicePrimaryContainerToTerraform, true)(this._primaryContainer.internalValue),
      timeouts: ecsExpressGatewayServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_role_arn: {
        value: cdktf.stringToHclTerraform(this._infrastructureRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration: {
        value: cdktf.listMapperHcl(ecsExpressGatewayServiceNetworkConfigurationToHclTerraform, false)(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsExpressGatewayServiceNetworkConfigurationList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_target: {
        value: cdktf.listMapperHcl(ecsExpressGatewayServiceScalingTargetToHclTerraform, false)(this._scalingTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsExpressGatewayServiceScalingTargetList",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
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
      task_role_arn: {
        value: cdktf.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_steady_state: {
        value: cdktf.booleanToHclTerraform(this._waitForSteadyState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_container: {
        value: cdktf.listMapperHcl(ecsExpressGatewayServicePrimaryContainerToHclTerraform, true)(this._primaryContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsExpressGatewayServicePrimaryContainerList",
      },
      timeouts: {
        value: ecsExpressGatewayServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsExpressGatewayServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
