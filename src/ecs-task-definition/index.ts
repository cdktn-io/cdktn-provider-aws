/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcsTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}
  */
  readonly containerDefinitions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#cpu EcsTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#enable_fault_injection EcsTaskDefinition#enable_fault_injection}
  */
  readonly enableFaultInjection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#family EcsTaskDefinition#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#id EcsTaskDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#memory EcsTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#region EcsTaskDefinition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
  */
  readonly requiresCompatibilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#tags EcsTaskDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#track_latest EcsTaskDefinition#track_latest}
  */
  readonly trackLatest?: boolean | cdktn.IResolvable;
  /**
  * ephemeral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
  */
  readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
  /**
  * placement_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}
  */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[] | cdktn.IResolvable;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}
  */
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
  /**
  * runtime_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}
  */
  readonly runtimePlatform?: EcsTaskDefinitionRuntimePlatform;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#volume EcsTaskDefinition#volume}
  */
  readonly volume?: EcsTaskDefinitionVolume[] | cdktn.IResolvable;
}
export interface EcsTaskDefinitionEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}
  */
  readonly sizeInGib: number;
}

export function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_in_gib: cdktn.numberToTerraform(struct!.sizeInGib),
  }
}


export function ecsTaskDefinitionEphemeralStorageToHclTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_in_gib: {
      value: cdktn.numberToHclTerraform(struct!.sizeInGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeInGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGib = this._sizeInGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeInGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeInGib = value.sizeInGib;
    }
  }

  // size_in_gib - computed: false, optional: false, required: true
  private _sizeInGib?: number; 
  public get sizeInGib() {
    return this.getNumberAttribute('size_in_gib');
  }
  public set sizeInGib(value: number) {
    this._sizeInGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGibInput() {
    return this._sizeInGib;
  }
}
export interface EcsTaskDefinitionPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#expression EcsTaskDefinition#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
  */
  readonly type: string;
}

export function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ecsTaskDefinitionPlacementConstraintsToHclTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionPlacementConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsTaskDefinitionPlacementConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionPlacementConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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
}

export class EcsTaskDefinitionPlacementConstraintsList extends cdktn.ComplexList {
  public internalValue? : EcsTaskDefinitionPlacementConstraints[] | cdktn.IResolvable

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
  public get(index: number): EcsTaskDefinitionPlacementConstraintsOutputReference {
    return new EcsTaskDefinitionPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsTaskDefinitionProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#container_name EcsTaskDefinition#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#properties EcsTaskDefinition#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
  */
  readonly type?: string;
}

export function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktn.stringToTerraform(struct!.containerName),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ecsTaskDefinitionProxyConfigurationToHclTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._properties = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._properties = value.properties;
      this._type = value.type;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
}
export interface EcsTaskDefinitionRuntimePlatform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}
  */
  readonly cpuArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}
  */
  readonly operatingSystemFamily?: string;
}

export function ecsTaskDefinitionRuntimePlatformToTerraform(struct?: EcsTaskDefinitionRuntimePlatformOutputReference | EcsTaskDefinitionRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_architecture: cdktn.stringToTerraform(struct!.cpuArchitecture),
    operating_system_family: cdktn.stringToTerraform(struct!.operatingSystemFamily),
  }
}


export function ecsTaskDefinitionRuntimePlatformToHclTerraform(struct?: EcsTaskDefinitionRuntimePlatformOutputReference | EcsTaskDefinitionRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_architecture: {
      value: cdktn.stringToHclTerraform(struct!.cpuArchitecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_family: {
      value: cdktn.stringToHclTerraform(struct!.operatingSystemFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionRuntimePlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionRuntimePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuArchitecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuArchitecture = this._cpuArchitecture;
    }
    if (this._operatingSystemFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemFamily = this._operatingSystemFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionRuntimePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuArchitecture = undefined;
      this._operatingSystemFamily = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuArchitecture = value.cpuArchitecture;
      this._operatingSystemFamily = value.operatingSystemFamily;
    }
  }

  // cpu_architecture - computed: false, optional: true, required: false
  private _cpuArchitecture?: string; 
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }
  public set cpuArchitecture(value: string) {
    this._cpuArchitecture = value;
  }
  public resetCpuArchitecture() {
    this._cpuArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchitectureInput() {
    return this._cpuArchitecture;
  }

  // operating_system_family - computed: false, optional: true, required: false
  private _operatingSystemFamily?: string; 
  public get operatingSystemFamily() {
    return this.getStringAttribute('operating_system_family');
  }
  public set operatingSystemFamily(value: string) {
    this._operatingSystemFamily = value;
  }
  public resetOperatingSystemFamily() {
    this._operatingSystemFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemFamilyInput() {
    return this._operatingSystemFamily;
  }
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}
  */
  readonly autoprovision?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#driver EcsTaskDefinition#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#labels EcsTaskDefinition#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#scope EcsTaskDefinition#scope}
  */
  readonly scope?: string;
}

export function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoprovision: cdktn.booleanToTerraform(struct!.autoprovision),
    driver: cdktn.stringToTerraform(struct!.driver),
    driver_opts: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.driverOpts),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoprovision: {
      value: cdktn.booleanToHclTerraform(struct!.autoprovision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    driver: {
      value: cdktn.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_opts: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.driverOpts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoprovision = this._autoprovision;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._driverOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverOpts = this._driverOpts;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoprovision = undefined;
      this._driver = undefined;
      this._driverOpts = undefined;
      this._labels = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoprovision = value.autoprovision;
      this._driver = value.driver;
      this._driverOpts = value.driverOpts;
      this._labels = value.labels;
      this._scope = value.scope;
    }
  }

  // autoprovision - computed: false, optional: true, required: false
  private _autoprovision?: boolean | cdktn.IResolvable; 
  public get autoprovision() {
    return this.getBooleanAttribute('autoprovision');
  }
  public set autoprovision(value: boolean | cdktn.IResolvable) {
    this._autoprovision = value;
  }
  public resetAutoprovision() {
    this._autoprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoprovisionInput() {
    return this._autoprovision;
  }

  // driver - computed: true, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string }; 
  public get driverOpts() {
    return this.getStringMapAttribute('driver_opts');
  }
  public set driverOpts(value: { [key: string]: string }) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}
  */
  readonly accessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#iam EcsTaskDefinition#iam}
  */
  readonly iam?: string;
}

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_id: cdktn.stringToTerraform(struct!.accessPointId),
    iam: cdktn.stringToTerraform(struct!.iam),
  }
}


export function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_id: {
      value: cdktn.stringToHclTerraform(struct!.accessPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktn.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointId = this._accessPointId;
    }
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPointId = undefined;
      this._iam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPointId = value.accessPointId;
      this._iam = value.iam;
    }
  }

  // access_point_id - computed: false, optional: true, required: false
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  public resetAccessPointId() {
    this._accessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: string; 
  public get iam() {
    return this.getStringAttribute('iam');
  }
  public set iam(value: string) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}
  */
  readonly transitEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
  */
  readonly transitEncryptionPort?: number;
  /**
  * authorization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktn.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktn.numberToTerraform(struct!.transitEncryptionPort),
    authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}


export function ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_directory: {
      value: cdktn.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_encryption: {
      value: cdktn.stringToHclTerraform(struct!.transitEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_encryption_port: {
      value: cdktn.numberToHclTerraform(struct!.transitEncryptionPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorization_config: {
      value: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._transitEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryption = this._transitEncryption;
    }
    if (this._transitEncryptionPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._rootDirectory = undefined;
      this._transitEncryption = undefined;
      this._transitEncryptionPort = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._rootDirectory = value.rootDirectory;
      this._transitEncryption = value.transitEncryption;
      this._transitEncryptionPort = value.transitEncryptionPort;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // transit_encryption - computed: false, optional: true, required: false
  private _transitEncryption?: string; 
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }
  public set transitEncryption(value: string) {
    this._transitEncryption = value;
  }
  public resetTransitEncryption() {
    this._transitEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionInput() {
    return this._transitEncryption;
  }

  // transit_encryption_port - computed: false, optional: true, required: false
  private _transitEncryptionPort?: number; 
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
  public set transitEncryptionPort(value: number) {
    this._transitEncryptionPort = value;
  }
  public resetTransitEncryptionPort() {
    this._transitEncryptionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionPortInput() {
    return this._transitEncryptionPort;
  }

  // authorization_config - computed: false, optional: true, required: false
  private _authorizationConfig = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}
  */
  readonly credentialsParameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#domain EcsTaskDefinition#domain}
  */
  readonly domain: string;
}

export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_parameter: {
      value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsParameter = undefined;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsParameter = value.credentialsParameter;
      this._domain = value.domain;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory: string;
  /**
  * authorization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}

export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
    authorization_config: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}


export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_directory: {
      value: cdktn.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_config: {
      value: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._rootDirectory = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._rootDirectory = value.rootDirectory;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // authorization_config - computed: false, optional: false, required: true
  private _authorizationConfig = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface EcsTaskDefinitionVolumeS3FilesVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#access_point_arn EcsTaskDefinition#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#file_system_arn EcsTaskDefinition#file_system_arn}
  */
  readonly fileSystemArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
  */
  readonly transitEncryptionPort?: number;
}

export function ecsTaskDefinitionVolumeS3FilesVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeS3FilesVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    file_system_arn: cdktn.stringToTerraform(struct!.fileSystemArn),
    root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
    transit_encryption_port: cdktn.numberToTerraform(struct!.transitEncryptionPort),
  }
}


export function ecsTaskDefinitionVolumeS3FilesVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeS3FilesVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_arn: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_directory: {
      value: cdktn.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_encryption_port: {
      value: cdktn.numberToHclTerraform(struct!.transitEncryptionPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeS3FilesVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTaskDefinitionVolumeS3FilesVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._fileSystemArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemArn = this._fileSystemArn;
    }
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._transitEncryptionPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeS3FilesVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPointArn = undefined;
      this._fileSystemArn = undefined;
      this._rootDirectory = undefined;
      this._transitEncryptionPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPointArn = value.accessPointArn;
      this._fileSystemArn = value.fileSystemArn;
      this._rootDirectory = value.rootDirectory;
      this._transitEncryptionPort = value.transitEncryptionPort;
    }
  }

  // access_point_arn - computed: false, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // file_system_arn - computed: false, optional: false, required: true
  private _fileSystemArn?: string; 
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }
  public set fileSystemArn(value: string) {
    this._fileSystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemArnInput() {
    return this._fileSystemArn;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // transit_encryption_port - computed: false, optional: true, required: false
  private _transitEncryptionPort?: number; 
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
  public set transitEncryptionPort(value: number) {
    this._transitEncryptionPort = value;
  }
  public resetTransitEncryptionPort() {
    this._transitEncryptionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionPortInput() {
    return this._transitEncryptionPort;
  }
}
export interface EcsTaskDefinitionVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#configure_at_launch EcsTaskDefinition#configure_at_launch}
  */
  readonly configureAtLaunch?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#host_path EcsTaskDefinition#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * docker_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
  */
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
  /**
  * efs_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
  */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
  /**
  * fsx_windows_file_server_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
  */
  readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
  /**
  * s3files_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#s3files_volume_configuration EcsTaskDefinition#s3files_volume_configuration}
  */
  readonly s3FilesVolumeConfiguration?: EcsTaskDefinitionVolumeS3FilesVolumeConfiguration;
}

export function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configure_at_launch: cdktn.booleanToTerraform(struct!.configureAtLaunch),
    host_path: cdktn.stringToTerraform(struct!.hostPath),
    name: cdktn.stringToTerraform(struct!.name),
    docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
    fsx_windows_file_server_volume_configuration: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
    s3files_volume_configuration: ecsTaskDefinitionVolumeS3FilesVolumeConfigurationToTerraform(struct!.s3FilesVolumeConfiguration),
  }
}


export function ecsTaskDefinitionVolumeToHclTerraform(struct?: EcsTaskDefinitionVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configure_at_launch: {
      value: cdktn.booleanToHclTerraform(struct!.configureAtLaunch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_path: {
      value: cdktn.stringToHclTerraform(struct!.hostPath),
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
    docker_volume_configuration: {
      value: ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct!.dockerVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeDockerVolumeConfigurationList",
    },
    efs_volume_configuration: {
      value: ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct!.efsVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationList",
    },
    fsx_windows_file_server_volume_configuration: {
      value: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationList",
    },
    s3files_volume_configuration: {
      value: ecsTaskDefinitionVolumeS3FilesVolumeConfigurationToHclTerraform(struct!.s3FilesVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsTaskDefinitionVolumeS3FilesVolumeConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsTaskDefinitionVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsTaskDefinitionVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configureAtLaunch !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureAtLaunch = this._configureAtLaunch;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._dockerVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVolumeConfiguration = this._dockerVolumeConfiguration?.internalValue;
    }
    if (this._efsVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsVolumeConfiguration = this._efsVolumeConfiguration?.internalValue;
    }
    if (this._fsxWindowsFileServerVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxWindowsFileServerVolumeConfiguration = this._fsxWindowsFileServerVolumeConfiguration?.internalValue;
    }
    if (this._s3FilesVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FilesVolumeConfiguration = this._s3FilesVolumeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configureAtLaunch = undefined;
      this._hostPath = undefined;
      this._name = undefined;
      this._dockerVolumeConfiguration.internalValue = undefined;
      this._efsVolumeConfiguration.internalValue = undefined;
      this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
      this._s3FilesVolumeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configureAtLaunch = value.configureAtLaunch;
      this._hostPath = value.hostPath;
      this._name = value.name;
      this._dockerVolumeConfiguration.internalValue = value.dockerVolumeConfiguration;
      this._efsVolumeConfiguration.internalValue = value.efsVolumeConfiguration;
      this._fsxWindowsFileServerVolumeConfiguration.internalValue = value.fsxWindowsFileServerVolumeConfiguration;
      this._s3FilesVolumeConfiguration.internalValue = value.s3FilesVolumeConfiguration;
    }
  }

  // configure_at_launch - computed: true, optional: true, required: false
  private _configureAtLaunch?: boolean | cdktn.IResolvable; 
  public get configureAtLaunch() {
    return this.getBooleanAttribute('configure_at_launch');
  }
  public set configureAtLaunch(value: boolean | cdktn.IResolvable) {
    this._configureAtLaunch = value;
  }
  public resetConfigureAtLaunch() {
    this._configureAtLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureAtLaunchInput() {
    return this._configureAtLaunch;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
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

  // docker_volume_configuration - computed: false, optional: true, required: false
  private _dockerVolumeConfiguration = new EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(this, "docker_volume_configuration");
  public get dockerVolumeConfiguration() {
    return this._dockerVolumeConfiguration;
  }
  public putDockerVolumeConfiguration(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration) {
    this._dockerVolumeConfiguration.internalValue = value;
  }
  public resetDockerVolumeConfiguration() {
    this._dockerVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeConfigurationInput() {
    return this._dockerVolumeConfiguration.internalValue;
  }

  // efs_volume_configuration - computed: false, optional: true, required: false
  private _efsVolumeConfiguration = new EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }
  public putEfsVolumeConfiguration(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration) {
    this._efsVolumeConfiguration.internalValue = value;
  }
  public resetEfsVolumeConfiguration() {
    this._efsVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsVolumeConfigurationInput() {
    return this._efsVolumeConfiguration.internalValue;
  }

  // fsx_windows_file_server_volume_configuration - computed: false, optional: true, required: false
  private _fsxWindowsFileServerVolumeConfiguration = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(this, "fsx_windows_file_server_volume_configuration");
  public get fsxWindowsFileServerVolumeConfiguration() {
    return this._fsxWindowsFileServerVolumeConfiguration;
  }
  public putFsxWindowsFileServerVolumeConfiguration(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration) {
    this._fsxWindowsFileServerVolumeConfiguration.internalValue = value;
  }
  public resetFsxWindowsFileServerVolumeConfiguration() {
    this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxWindowsFileServerVolumeConfigurationInput() {
    return this._fsxWindowsFileServerVolumeConfiguration.internalValue;
  }

  // s3files_volume_configuration - computed: false, optional: true, required: false
  private _s3FilesVolumeConfiguration = new EcsTaskDefinitionVolumeS3FilesVolumeConfigurationOutputReference(this, "s3files_volume_configuration");
  public get s3FilesVolumeConfiguration() {
    return this._s3FilesVolumeConfiguration;
  }
  public putS3FilesVolumeConfiguration(value: EcsTaskDefinitionVolumeS3FilesVolumeConfiguration) {
    this._s3FilesVolumeConfiguration.internalValue = value;
  }
  public resetS3FilesVolumeConfiguration() {
    this._s3FilesVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FilesVolumeConfigurationInput() {
    return this._s3FilesVolumeConfiguration.internalValue;
  }
}

export class EcsTaskDefinitionVolumeList extends cdktn.ComplexList {
  public internalValue? : EcsTaskDefinitionVolume[] | cdktn.IResolvable

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
  public get(index: number): EcsTaskDefinitionVolumeOutputReference {
    return new EcsTaskDefinitionVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition aws_ecs_task_definition}
*/
export class EcsTaskDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcsTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsTaskDefinition to import
  * @param importFromId The id of the existing EcsTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ecs_task_definition aws_ecs_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_task_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.49.0',
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
    this._containerDefinitions = config.containerDefinitions;
    this._cpu = config.cpu;
    this._enableFaultInjection = config.enableFaultInjection;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._id = config.id;
    this._ipcMode = config.ipcMode;
    this._memory = config.memory;
    this._networkMode = config.networkMode;
    this._pidMode = config.pidMode;
    this._region = config.region;
    this._requiresCompatibilities = config.requiresCompatibilities;
    this._skipDestroy = config.skipDestroy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._taskRoleArn = config.taskRoleArn;
    this._trackLatest = config.trackLatest;
    this._ephemeralStorage.internalValue = config.ephemeralStorage;
    this._placementConstraints.internalValue = config.placementConstraints;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
    this._runtimePlatform.internalValue = config.runtimePlatform;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_without_revision - computed: true, optional: false, required: false
  public get arnWithoutRevision() {
    return this.getStringAttribute('arn_without_revision');
  }

  // container_definitions - computed: false, optional: false, required: true
  private _containerDefinitions?: string; 
  public get containerDefinitions() {
    return this.getStringAttribute('container_definitions');
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions;
  }

  // cpu - computed: false, optional: true, required: false
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

  // enable_fault_injection - computed: true, optional: true, required: false
  private _enableFaultInjection?: boolean | cdktn.IResolvable; 
  public get enableFaultInjection() {
    return this.getBooleanAttribute('enable_fault_injection');
  }
  public set enableFaultInjection(value: boolean | cdktn.IResolvable) {
    this._enableFaultInjection = value;
  }
  public resetEnableFaultInjection() {
    this._enableFaultInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFaultInjectionInput() {
    return this._enableFaultInjection;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // ipc_mode - computed: false, optional: true, required: false
  private _ipcMode?: string; 
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode;
  }

  // memory - computed: false, optional: true, required: false
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

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
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

  // requires_compatibilities - computed: false, optional: true, required: false
  private _requiresCompatibilities?: string[]; 
  public get requiresCompatibilities() {
    return cdktn.Fn.tolist(this.getListAttribute('requires_compatibilities'));
  }
  public set requiresCompatibilities(value: string[]) {
    this._requiresCompatibilities = value;
  }
  public resetRequiresCompatibilities() {
    this._requiresCompatibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresCompatibilitiesInput() {
    return this._requiresCompatibilities;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktn.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktn.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
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

  // track_latest - computed: false, optional: true, required: false
  private _trackLatest?: boolean | cdktn.IResolvable; 
  public get trackLatest() {
    return this.getBooleanAttribute('track_latest');
  }
  public set trackLatest(value: boolean | cdktn.IResolvable) {
    this._trackLatest = value;
  }
  public resetTrackLatest() {
    this._trackLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackLatestInput() {
    return this._trackLatest;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new EcsTaskDefinitionEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new EcsTaskDefinitionPlacementConstraintsList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: EcsTaskDefinitionPlacementConstraints[] | cdktn.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new EcsTaskDefinitionProxyConfigurationOutputReference(this, "proxy_configuration");
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // runtime_platform - computed: false, optional: true, required: false
  private _runtimePlatform = new EcsTaskDefinitionRuntimePlatformOutputReference(this, "runtime_platform");
  public get runtimePlatform() {
    return this._runtimePlatform;
  }
  public putRuntimePlatform(value: EcsTaskDefinitionRuntimePlatform) {
    this._runtimePlatform.internalValue = value;
  }
  public resetRuntimePlatform() {
    this._runtimePlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimePlatformInput() {
    return this._runtimePlatform.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new EcsTaskDefinitionVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: EcsTaskDefinitionVolume[] | cdktn.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: cdktn.stringToTerraform(this._containerDefinitions),
      cpu: cdktn.stringToTerraform(this._cpu),
      enable_fault_injection: cdktn.booleanToTerraform(this._enableFaultInjection),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      family: cdktn.stringToTerraform(this._family),
      id: cdktn.stringToTerraform(this._id),
      ipc_mode: cdktn.stringToTerraform(this._ipcMode),
      memory: cdktn.stringToTerraform(this._memory),
      network_mode: cdktn.stringToTerraform(this._networkMode),
      pid_mode: cdktn.stringToTerraform(this._pidMode),
      region: cdktn.stringToTerraform(this._region),
      requires_compatibilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._requiresCompatibilities),
      skip_destroy: cdktn.booleanToTerraform(this._skipDestroy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      task_role_arn: cdktn.stringToTerraform(this._taskRoleArn),
      track_latest: cdktn.booleanToTerraform(this._trackLatest),
      ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage.internalValue),
      placement_constraints: cdktn.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform, true)(this._placementConstraints.internalValue),
      proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration.internalValue),
      runtime_platform: ecsTaskDefinitionRuntimePlatformToTerraform(this._runtimePlatform.internalValue),
      volume: cdktn.listMapper(ecsTaskDefinitionVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_definitions: {
        value: cdktn.stringToHclTerraform(this._containerDefinitions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktn.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_fault_injection: {
        value: cdktn.booleanToHclTerraform(this._enableFaultInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktn.stringToHclTerraform(this._family),
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
      ipc_mode: {
        value: cdktn.stringToHclTerraform(this._ipcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktn.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_mode: {
        value: cdktn.stringToHclTerraform(this._networkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_mode: {
        value: cdktn.stringToHclTerraform(this._pidMode),
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
      requires_compatibilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._requiresCompatibilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_destroy: {
        value: cdktn.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      task_role_arn: {
        value: cdktn.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_latest: {
        value: cdktn.booleanToHclTerraform(this._trackLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ephemeral_storage: {
        value: ecsTaskDefinitionEphemeralStorageToHclTerraform(this._ephemeralStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsTaskDefinitionEphemeralStorageList",
      },
      placement_constraints: {
        value: cdktn.listMapperHcl(ecsTaskDefinitionPlacementConstraintsToHclTerraform, true)(this._placementConstraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsTaskDefinitionPlacementConstraintsList",
      },
      proxy_configuration: {
        value: ecsTaskDefinitionProxyConfigurationToHclTerraform(this._proxyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsTaskDefinitionProxyConfigurationList",
      },
      runtime_platform: {
        value: ecsTaskDefinitionRuntimePlatformToHclTerraform(this._runtimePlatform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsTaskDefinitionRuntimePlatformList",
      },
      volume: {
        value: cdktn.listMapperHcl(ecsTaskDefinitionVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsTaskDefinitionVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
