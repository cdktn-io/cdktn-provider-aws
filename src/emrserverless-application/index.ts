/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrserverlessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#id EmrserverlessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#name EmrserverlessApplication#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#region EmrserverlessApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#tags_all EmrserverlessApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#type EmrserverlessApplication#type}
  */
  readonly type: string;
  /**
  * auto_start_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}
  */
  readonly autoStartConfiguration?: EmrserverlessApplicationAutoStartConfiguration;
  /**
  * auto_stop_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}
  */
  readonly autoStopConfiguration?: EmrserverlessApplicationAutoStopConfiguration;
  /**
  * image_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}
  */
  readonly imageConfiguration?: EmrserverlessApplicationImageConfiguration;
  /**
  * initial_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}
  */
  readonly initialCapacity?: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable;
  /**
  * interactive_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#interactive_configuration EmrserverlessApplication#interactive_configuration}
  */
  readonly interactiveConfiguration?: EmrserverlessApplicationInteractiveConfiguration;
  /**
  * maximum_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}
  */
  readonly maximumCapacity?: EmrserverlessApplicationMaximumCapacity;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#monitoring_configuration EmrserverlessApplication#monitoring_configuration}
  */
  readonly monitoringConfiguration?: EmrserverlessApplicationMonitoringConfiguration;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}
  */
  readonly networkConfiguration?: EmrserverlessApplicationNetworkConfiguration;
  /**
  * runtime_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#runtime_configuration EmrserverlessApplication#runtime_configuration}
  */
  readonly runtimeConfiguration?: EmrserverlessApplicationRuntimeConfiguration[] | cdktf.IResolvable;
  /**
  * scheduler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#scheduler_configuration EmrserverlessApplication#scheduler_configuration}
  */
  readonly schedulerConfiguration?: EmrserverlessApplicationSchedulerConfiguration;
}
export interface EmrserverlessApplicationAutoStartConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function emrserverlessApplicationAutoStartConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStartConfigurationOutputReference | EmrserverlessApplicationAutoStartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function emrserverlessApplicationAutoStartConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStartConfigurationOutputReference | EmrserverlessApplicationAutoStartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationAutoStartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationAutoStartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EmrserverlessApplicationAutoStopConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}
  */
  readonly idleTimeoutMinutes?: number;
}

export function emrserverlessApplicationAutoStopConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStopConfigurationOutputReference | EmrserverlessApplicationAutoStopConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idle_timeout_minutes: cdktf.numberToTerraform(struct!.idleTimeoutMinutes),
  }
}


export function emrserverlessApplicationAutoStopConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStopConfigurationOutputReference | EmrserverlessApplicationAutoStopConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationAutoStopConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationAutoStopConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMinutes = this._idleTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStopConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idleTimeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idleTimeoutMinutes = value.idleTimeoutMinutes;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout_minutes - computed: false, optional: true, required: false
  private _idleTimeoutMinutes?: number; 
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }
  public set idleTimeoutMinutes(value: number) {
    this._idleTimeoutMinutes = value;
  }
  public resetIdleTimeoutMinutes() {
    this._idleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinutesInput() {
    return this._idleTimeoutMinutes;
  }
}
export interface EmrserverlessApplicationImageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}
  */
  readonly imageUri: string;
}

export function emrserverlessApplicationImageConfigurationToTerraform(struct?: EmrserverlessApplicationImageConfigurationOutputReference | EmrserverlessApplicationImageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}


export function emrserverlessApplicationImageConfigurationToHclTerraform(struct?: EmrserverlessApplicationImageConfigurationOutputReference | EmrserverlessApplicationImageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationImageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationImageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationImageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
    }
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory: string;
}

export function emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk: cdktf.stringToTerraform(struct!.disk),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}
  */
  readonly workerCount: number;
  /**
  * worker_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}
  */
  readonly workerConfiguration?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration;
}

export function emrserverlessApplicationInitialCapacityInitialCapacityConfigToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
    worker_configuration: emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToTerraform(struct!.workerConfiguration),
  }
}


export function emrserverlessApplicationInitialCapacityInitialCapacityConfigToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_count: {
      value: cdktf.numberToHclTerraform(struct!.workerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_configuration: {
      value: emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToHclTerraform(struct!.workerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    if (this._workerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfiguration = this._workerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerCount = undefined;
      this._workerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerCount = value.workerCount;
      this._workerConfiguration.internalValue = value.workerConfiguration;
    }
  }

  // worker_count - computed: false, optional: false, required: true
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }

  // worker_configuration - computed: false, optional: true, required: false
  private _workerConfiguration = new EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }
}
export interface EmrserverlessApplicationInitialCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}
  */
  readonly initialCapacityType: string;
  /**
  * initial_capacity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}
  */
  readonly initialCapacityConfig?: EmrserverlessApplicationInitialCapacityInitialCapacityConfig;
}

export function emrserverlessApplicationInitialCapacityToTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_capacity_type: cdktf.stringToTerraform(struct!.initialCapacityType),
    initial_capacity_config: emrserverlessApplicationInitialCapacityInitialCapacityConfigToTerraform(struct!.initialCapacityConfig),
  }
}


export function emrserverlessApplicationInitialCapacityToHclTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_capacity_type: {
      value: cdktf.stringToHclTerraform(struct!.initialCapacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_capacity_config: {
      value: emrserverlessApplicationInitialCapacityInitialCapacityConfigToHclTerraform(struct!.initialCapacityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationInitialCapacityInitialCapacityConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialCapacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityType = this._initialCapacityType;
    }
    if (this._initialCapacityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityConfig = this._initialCapacityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialCapacityType = undefined;
      this._initialCapacityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialCapacityType = value.initialCapacityType;
      this._initialCapacityConfig.internalValue = value.initialCapacityConfig;
    }
  }

  // initial_capacity_type - computed: false, optional: false, required: true
  private _initialCapacityType?: string; 
  public get initialCapacityType() {
    return this.getStringAttribute('initial_capacity_type');
  }
  public set initialCapacityType(value: string) {
    this._initialCapacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityTypeInput() {
    return this._initialCapacityType;
  }

  // initial_capacity_config - computed: false, optional: true, required: false
  private _initialCapacityConfig = new EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference(this, "initial_capacity_config");
  public get initialCapacityConfig() {
    return this._initialCapacityConfig;
  }
  public putInitialCapacityConfig(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig) {
    this._initialCapacityConfig.internalValue = value;
  }
  public resetInitialCapacityConfig() {
    this._initialCapacityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityConfigInput() {
    return this._initialCapacityConfig.internalValue;
  }
}

export class EmrserverlessApplicationInitialCapacityList extends cdktf.ComplexList {
  public internalValue? : EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable

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
  public get(index: number): EmrserverlessApplicationInitialCapacityOutputReference {
    return new EmrserverlessApplicationInitialCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationInteractiveConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#livy_endpoint_enabled EmrserverlessApplication#livy_endpoint_enabled}
  */
  readonly livyEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#studio_enabled EmrserverlessApplication#studio_enabled}
  */
  readonly studioEnabled?: boolean | cdktf.IResolvable;
}

export function emrserverlessApplicationInteractiveConfigurationToTerraform(struct?: EmrserverlessApplicationInteractiveConfigurationOutputReference | EmrserverlessApplicationInteractiveConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    livy_endpoint_enabled: cdktf.booleanToTerraform(struct!.livyEndpointEnabled),
    studio_enabled: cdktf.booleanToTerraform(struct!.studioEnabled),
  }
}


export function emrserverlessApplicationInteractiveConfigurationToHclTerraform(struct?: EmrserverlessApplicationInteractiveConfigurationOutputReference | EmrserverlessApplicationInteractiveConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    livy_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.livyEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    studio_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.studioEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInteractiveConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationInteractiveConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._livyEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.livyEndpointEnabled = this._livyEndpointEnabled;
    }
    if (this._studioEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioEnabled = this._studioEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInteractiveConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._livyEndpointEnabled = undefined;
      this._studioEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._livyEndpointEnabled = value.livyEndpointEnabled;
      this._studioEnabled = value.studioEnabled;
    }
  }

  // livy_endpoint_enabled - computed: true, optional: true, required: false
  private _livyEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get livyEndpointEnabled() {
    return this.getBooleanAttribute('livy_endpoint_enabled');
  }
  public set livyEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._livyEndpointEnabled = value;
  }
  public resetLivyEndpointEnabled() {
    this._livyEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livyEndpointEnabledInput() {
    return this._livyEndpointEnabled;
  }

  // studio_enabled - computed: true, optional: true, required: false
  private _studioEnabled?: boolean | cdktf.IResolvable; 
  public get studioEnabled() {
    return this.getBooleanAttribute('studio_enabled');
  }
  public set studioEnabled(value: boolean | cdktf.IResolvable) {
    this._studioEnabled = value;
  }
  public resetStudioEnabled() {
    this._studioEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioEnabledInput() {
    return this._studioEnabled;
  }
}
export interface EmrserverlessApplicationMaximumCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory: string;
}

export function emrserverlessApplicationMaximumCapacityToTerraform(struct?: EmrserverlessApplicationMaximumCapacityOutputReference | EmrserverlessApplicationMaximumCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk: cdktf.stringToTerraform(struct!.disk),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function emrserverlessApplicationMaximumCapacityToHclTerraform(struct?: EmrserverlessApplicationMaximumCapacityOutputReference | EmrserverlessApplicationMaximumCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMaximumCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMaximumCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMaximumCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#name EmrserverlessApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#values EmrserverlessApplication#values}
  */
  readonly values: string[];
}

export function emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList extends cdktf.ComplexList {
  public internalValue? : EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] | cdktf.IResolvable

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
  public get(index: number): EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference {
    return new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#log_group_name EmrserverlessApplication#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#log_stream_name_prefix EmrserverlessApplication#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * log_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#log_types EmrserverlessApplication#log_types}
  */
  readonly logTypes?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] | cdktf.IResolvable;
}

export function emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encryption_key_arn: cdktf.stringToTerraform(struct!.encryptionKeyArn),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name_prefix: cdktf.stringToTerraform(struct!.logStreamNamePrefix),
    log_types: cdktf.listMapper(emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesToTerraform, true)(struct!.logTypes),
  }
}


export function emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktf.listMapperHcl(emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesToHclTerraform, true)(struct!.logTypes),
      isBlock: true,
      type: "set",
      storageClassType: "EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionKeyArn = undefined;
      this._logGroupName = undefined;
      this._logStreamNamePrefix = undefined;
      this._logTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._logGroupName = value.logGroupName;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logTypes.internalValue = value.logTypes;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name_prefix - computed: false, optional: true, required: false
  private _logStreamNamePrefix?: string; 
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes = new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList(this, "log_types", true);
  public get logTypes() {
    return this._logTypes;
  }
  public putLogTypes(value: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] | cdktf.IResolvable) {
    this._logTypes.internalValue = value;
  }
  public resetLogTypes() {
    this._logTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes.internalValue;
  }
}
export interface EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
}

export function emrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encryption_key_arn: cdktf.stringToTerraform(struct!.encryptionKeyArn),
  }
}


export function emrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionKeyArn = value.encryptionKeyArn;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }
}
export interface EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#remote_write_url EmrserverlessApplication#remote_write_url}
  */
  readonly remoteWriteUrl?: string;
}

export function emrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_write_url: cdktf.stringToTerraform(struct!.remoteWriteUrl),
  }
}


export function emrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_write_url: {
      value: cdktf.stringToHclTerraform(struct!.remoteWriteUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteWriteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteWriteUrl = this._remoteWriteUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._remoteWriteUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._remoteWriteUrl = value.remoteWriteUrl;
    }
  }

  // remote_write_url - computed: false, optional: true, required: false
  private _remoteWriteUrl?: string; 
  public get remoteWriteUrl() {
    return this.getStringAttribute('remote_write_url');
  }
  public set remoteWriteUrl(value: string) {
    this._remoteWriteUrl = value;
  }
  public resetRemoteWriteUrl() {
    this._remoteWriteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWriteUrlInput() {
    return this._remoteWriteUrl;
  }
}
export interface EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#log_uri EmrserverlessApplication#log_uri}
  */
  readonly logUri?: string;
}

export function emrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key_arn: cdktf.stringToTerraform(struct!.encryptionKeyArn),
    log_uri: cdktf.stringToTerraform(struct!.logUri),
  }
}


export function emrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_uri: {
      value: cdktf.stringToHclTerraform(struct!.logUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._logUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logUri = this._logUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyArn = undefined;
      this._logUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._logUri = value.logUri;
    }
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }
}
export interface EmrserverlessApplicationMonitoringConfiguration {
  /**
  * cloudwatch_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#cloudwatch_logging_configuration EmrserverlessApplication#cloudwatch_logging_configuration}
  */
  readonly cloudwatchLoggingConfiguration?: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration;
  /**
  * managed_persistence_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#managed_persistence_monitoring_configuration EmrserverlessApplication#managed_persistence_monitoring_configuration}
  */
  readonly managedPersistenceMonitoringConfiguration?: EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration;
  /**
  * prometheus_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#prometheus_monitoring_configuration EmrserverlessApplication#prometheus_monitoring_configuration}
  */
  readonly prometheusMonitoringConfiguration?: EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration;
  /**
  * s3_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#s3_monitoring_configuration EmrserverlessApplication#s3_monitoring_configuration}
  */
  readonly s3MonitoringConfiguration?: EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration;
}

export function emrserverlessApplicationMonitoringConfigurationToTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logging_configuration: emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct!.cloudwatchLoggingConfiguration),
    managed_persistence_monitoring_configuration: emrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationToTerraform(struct!.managedPersistenceMonitoringConfiguration),
    prometheus_monitoring_configuration: emrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationToTerraform(struct!.prometheusMonitoringConfiguration),
    s3_monitoring_configuration: emrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationToTerraform(struct!.s3MonitoringConfiguration),
  }
}


export function emrserverlessApplicationMonitoringConfigurationToHclTerraform(struct?: EmrserverlessApplicationMonitoringConfigurationOutputReference | EmrserverlessApplicationMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_logging_configuration: {
      value: emrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct!.cloudwatchLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationList",
    },
    managed_persistence_monitoring_configuration: {
      value: emrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationToHclTerraform(struct!.managedPersistenceMonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationList",
    },
    prometheus_monitoring_configuration: {
      value: emrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationToHclTerraform(struct!.prometheusMonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationList",
    },
    s3_monitoring_configuration: {
      value: emrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationToHclTerraform(struct!.s3MonitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
    }
    if (this._managedPersistenceMonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPersistenceMonitoringConfiguration = this._managedPersistenceMonitoringConfiguration?.internalValue;
    }
    if (this._prometheusMonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMonitoringConfiguration = this._prometheusMonitoringConfiguration?.internalValue;
    }
    if (this._s3MonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3MonitoringConfiguration = this._s3MonitoringConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLoggingConfiguration.internalValue = undefined;
      this._managedPersistenceMonitoringConfiguration.internalValue = undefined;
      this._prometheusMonitoringConfiguration.internalValue = undefined;
      this._s3MonitoringConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
      this._managedPersistenceMonitoringConfiguration.internalValue = value.managedPersistenceMonitoringConfiguration;
      this._prometheusMonitoringConfiguration.internalValue = value.prometheusMonitoringConfiguration;
      this._s3MonitoringConfiguration.internalValue = value.s3MonitoringConfiguration;
    }
  }

  // cloudwatch_logging_configuration - computed: false, optional: true, required: false
  private _cloudwatchLoggingConfiguration = new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }
  public putCloudwatchLoggingConfiguration(value: EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration) {
    this._cloudwatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudwatchLoggingConfiguration() {
    this._cloudwatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingConfigurationInput() {
    return this._cloudwatchLoggingConfiguration.internalValue;
  }

  // managed_persistence_monitoring_configuration - computed: false, optional: true, required: false
  private _managedPersistenceMonitoringConfiguration = new EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference(this, "managed_persistence_monitoring_configuration");
  public get managedPersistenceMonitoringConfiguration() {
    return this._managedPersistenceMonitoringConfiguration;
  }
  public putManagedPersistenceMonitoringConfiguration(value: EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration) {
    this._managedPersistenceMonitoringConfiguration.internalValue = value;
  }
  public resetManagedPersistenceMonitoringConfiguration() {
    this._managedPersistenceMonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPersistenceMonitoringConfigurationInput() {
    return this._managedPersistenceMonitoringConfiguration.internalValue;
  }

  // prometheus_monitoring_configuration - computed: false, optional: true, required: false
  private _prometheusMonitoringConfiguration = new EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference(this, "prometheus_monitoring_configuration");
  public get prometheusMonitoringConfiguration() {
    return this._prometheusMonitoringConfiguration;
  }
  public putPrometheusMonitoringConfiguration(value: EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration) {
    this._prometheusMonitoringConfiguration.internalValue = value;
  }
  public resetPrometheusMonitoringConfiguration() {
    this._prometheusMonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMonitoringConfigurationInput() {
    return this._prometheusMonitoringConfiguration.internalValue;
  }

  // s3_monitoring_configuration - computed: false, optional: true, required: false
  private _s3MonitoringConfiguration = new EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference(this, "s3_monitoring_configuration");
  public get s3MonitoringConfiguration() {
    return this._s3MonitoringConfiguration;
  }
  public putS3MonitoringConfiguration(value: EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration) {
    this._s3MonitoringConfiguration.internalValue = value;
  }
  public resetS3MonitoringConfiguration() {
    this._s3MonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3MonitoringConfigurationInput() {
    return this._s3MonitoringConfiguration.internalValue;
  }
}
export interface EmrserverlessApplicationNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function emrserverlessApplicationNetworkConfigurationToTerraform(struct?: EmrserverlessApplicationNetworkConfigurationOutputReference | EmrserverlessApplicationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function emrserverlessApplicationNetworkConfigurationToHclTerraform(struct?: EmrserverlessApplicationNetworkConfigurationOutputReference | EmrserverlessApplicationNetworkConfiguration): any {
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

export class EmrserverlessApplicationNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationNetworkConfiguration | undefined {
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

  public set internalValue(value: EmrserverlessApplicationNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface EmrserverlessApplicationRuntimeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#classification EmrserverlessApplication#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#properties EmrserverlessApplication#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function emrserverlessApplicationRuntimeConfigurationToTerraform(struct?: EmrserverlessApplicationRuntimeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function emrserverlessApplicationRuntimeConfigurationToHclTerraform(struct?: EmrserverlessApplicationRuntimeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification: {
      value: cdktf.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrserverlessApplicationRuntimeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationRuntimeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
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
}

export class EmrserverlessApplicationRuntimeConfigurationList extends cdktf.ComplexList {
  public internalValue? : EmrserverlessApplicationRuntimeConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EmrserverlessApplicationRuntimeConfigurationOutputReference {
    return new EmrserverlessApplicationRuntimeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationSchedulerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#max_concurrent_runs EmrserverlessApplication#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#queue_timeout_minutes EmrserverlessApplication#queue_timeout_minutes}
  */
  readonly queueTimeoutMinutes?: number;
}

export function emrserverlessApplicationSchedulerConfigurationToTerraform(struct?: EmrserverlessApplicationSchedulerConfigurationOutputReference | EmrserverlessApplicationSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    queue_timeout_minutes: cdktf.numberToTerraform(struct!.queueTimeoutMinutes),
  }
}


export function emrserverlessApplicationSchedulerConfigurationToHclTerraform(struct?: EmrserverlessApplicationSchedulerConfigurationOutputReference | EmrserverlessApplicationSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.queueTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationSchedulerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationSchedulerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._queueTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueTimeoutMinutes = this._queueTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationSchedulerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentRuns = undefined;
      this._queueTimeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._queueTimeoutMinutes = value.queueTimeoutMinutes;
    }
  }

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // queue_timeout_minutes - computed: true, optional: true, required: false
  private _queueTimeoutMinutes?: number; 
  public get queueTimeoutMinutes() {
    return this.getNumberAttribute('queue_timeout_minutes');
  }
  public set queueTimeoutMinutes(value: number) {
    this._queueTimeoutMinutes = value;
  }
  public resetQueueTimeoutMinutes() {
    this._queueTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTimeoutMinutesInput() {
    return this._queueTimeoutMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application aws_emrserverless_application}
*/
export class EmrserverlessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emrserverless_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrserverlessApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrserverlessApplication to import
  * @param importFromId The id of the existing EmrserverlessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrserverlessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emrserverless_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/emrserverless_application aws_emrserverless_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrserverlessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: EmrserverlessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emrserverless_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.22.1',
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
    this._architecture = config.architecture;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._autoStartConfiguration.internalValue = config.autoStartConfiguration;
    this._autoStopConfiguration.internalValue = config.autoStopConfiguration;
    this._imageConfiguration.internalValue = config.imageConfiguration;
    this._initialCapacity.internalValue = config.initialCapacity;
    this._interactiveConfiguration.internalValue = config.interactiveConfiguration;
    this._maximumCapacity.internalValue = config.maximumCapacity;
    this._monitoringConfiguration.internalValue = config.monitoringConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._runtimeConfiguration.internalValue = config.runtimeConfiguration;
    this._schedulerConfiguration.internalValue = config.schedulerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
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

  // auto_start_configuration - computed: false, optional: true, required: false
  private _autoStartConfiguration = new EmrserverlessApplicationAutoStartConfigurationOutputReference(this, "auto_start_configuration");
  public get autoStartConfiguration() {
    return this._autoStartConfiguration;
  }
  public putAutoStartConfiguration(value: EmrserverlessApplicationAutoStartConfiguration) {
    this._autoStartConfiguration.internalValue = value;
  }
  public resetAutoStartConfiguration() {
    this._autoStartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartConfigurationInput() {
    return this._autoStartConfiguration.internalValue;
  }

  // auto_stop_configuration - computed: false, optional: true, required: false
  private _autoStopConfiguration = new EmrserverlessApplicationAutoStopConfigurationOutputReference(this, "auto_stop_configuration");
  public get autoStopConfiguration() {
    return this._autoStopConfiguration;
  }
  public putAutoStopConfiguration(value: EmrserverlessApplicationAutoStopConfiguration) {
    this._autoStopConfiguration.internalValue = value;
  }
  public resetAutoStopConfiguration() {
    this._autoStopConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopConfigurationInput() {
    return this._autoStopConfiguration.internalValue;
  }

  // image_configuration - computed: false, optional: true, required: false
  private _imageConfiguration = new EmrserverlessApplicationImageConfigurationOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: EmrserverlessApplicationImageConfiguration) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }

  // initial_capacity - computed: false, optional: true, required: false
  private _initialCapacity = new EmrserverlessApplicationInitialCapacityList(this, "initial_capacity", true);
  public get initialCapacity() {
    return this._initialCapacity;
  }
  public putInitialCapacity(value: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable) {
    this._initialCapacity.internalValue = value;
  }
  public resetInitialCapacity() {
    this._initialCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityInput() {
    return this._initialCapacity.internalValue;
  }

  // interactive_configuration - computed: false, optional: true, required: false
  private _interactiveConfiguration = new EmrserverlessApplicationInteractiveConfigurationOutputReference(this, "interactive_configuration");
  public get interactiveConfiguration() {
    return this._interactiveConfiguration;
  }
  public putInteractiveConfiguration(value: EmrserverlessApplicationInteractiveConfiguration) {
    this._interactiveConfiguration.internalValue = value;
  }
  public resetInteractiveConfiguration() {
    this._interactiveConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveConfigurationInput() {
    return this._interactiveConfiguration.internalValue;
  }

  // maximum_capacity - computed: false, optional: true, required: false
  private _maximumCapacity = new EmrserverlessApplicationMaximumCapacityOutputReference(this, "maximum_capacity");
  public get maximumCapacity() {
    return this._maximumCapacity;
  }
  public putMaximumCapacity(value: EmrserverlessApplicationMaximumCapacity) {
    this._maximumCapacity.internalValue = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity.internalValue;
  }

  // monitoring_configuration - computed: false, optional: true, required: false
  private _monitoringConfiguration = new EmrserverlessApplicationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: EmrserverlessApplicationMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new EmrserverlessApplicationNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EmrserverlessApplicationNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration = new EmrserverlessApplicationRuntimeConfigurationList(this, "runtime_configuration", false);
  public get runtimeConfiguration() {
    return this._runtimeConfiguration;
  }
  public putRuntimeConfiguration(value: EmrserverlessApplicationRuntimeConfiguration[] | cdktf.IResolvable) {
    this._runtimeConfiguration.internalValue = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration.internalValue;
  }

  // scheduler_configuration - computed: false, optional: true, required: false
  private _schedulerConfiguration = new EmrserverlessApplicationSchedulerConfigurationOutputReference(this, "scheduler_configuration");
  public get schedulerConfiguration() {
    return this._schedulerConfiguration;
  }
  public putSchedulerConfiguration(value: EmrserverlessApplicationSchedulerConfiguration) {
    this._schedulerConfiguration.internalValue = value;
  }
  public resetSchedulerConfiguration() {
    this._schedulerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerConfigurationInput() {
    return this._schedulerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      auto_start_configuration: emrserverlessApplicationAutoStartConfigurationToTerraform(this._autoStartConfiguration.internalValue),
      auto_stop_configuration: emrserverlessApplicationAutoStopConfigurationToTerraform(this._autoStopConfiguration.internalValue),
      image_configuration: emrserverlessApplicationImageConfigurationToTerraform(this._imageConfiguration.internalValue),
      initial_capacity: cdktf.listMapper(emrserverlessApplicationInitialCapacityToTerraform, true)(this._initialCapacity.internalValue),
      interactive_configuration: emrserverlessApplicationInteractiveConfigurationToTerraform(this._interactiveConfiguration.internalValue),
      maximum_capacity: emrserverlessApplicationMaximumCapacityToTerraform(this._maximumCapacity.internalValue),
      monitoring_configuration: emrserverlessApplicationMonitoringConfigurationToTerraform(this._monitoringConfiguration.internalValue),
      network_configuration: emrserverlessApplicationNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      runtime_configuration: cdktf.listMapper(emrserverlessApplicationRuntimeConfigurationToTerraform, true)(this._runtimeConfiguration.internalValue),
      scheduler_configuration: emrserverlessApplicationSchedulerConfigurationToTerraform(this._schedulerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
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
      release_label: {
        value: cdktf.stringToHclTerraform(this._releaseLabel),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_start_configuration: {
        value: emrserverlessApplicationAutoStartConfigurationToHclTerraform(this._autoStartConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationAutoStartConfigurationList",
      },
      auto_stop_configuration: {
        value: emrserverlessApplicationAutoStopConfigurationToHclTerraform(this._autoStopConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationAutoStopConfigurationList",
      },
      image_configuration: {
        value: emrserverlessApplicationImageConfigurationToHclTerraform(this._imageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationImageConfigurationList",
      },
      initial_capacity: {
        value: cdktf.listMapperHcl(emrserverlessApplicationInitialCapacityToHclTerraform, true)(this._initialCapacity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrserverlessApplicationInitialCapacityList",
      },
      interactive_configuration: {
        value: emrserverlessApplicationInteractiveConfigurationToHclTerraform(this._interactiveConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationInteractiveConfigurationList",
      },
      maximum_capacity: {
        value: emrserverlessApplicationMaximumCapacityToHclTerraform(this._maximumCapacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationMaximumCapacityList",
      },
      monitoring_configuration: {
        value: emrserverlessApplicationMonitoringConfigurationToHclTerraform(this._monitoringConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationMonitoringConfigurationList",
      },
      network_configuration: {
        value: emrserverlessApplicationNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationNetworkConfigurationList",
      },
      runtime_configuration: {
        value: cdktf.listMapperHcl(emrserverlessApplicationRuntimeConfigurationToHclTerraform, true)(this._runtimeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationRuntimeConfigurationList",
      },
      scheduler_configuration: {
        value: emrserverlessApplicationSchedulerConfigurationToHclTerraform(this._schedulerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrserverlessApplicationSchedulerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
