/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdamicrovmsMicrovmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}
  */
  readonly egressNetworkConnectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}
  */
  readonly imageArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}
  */
  readonly ingressNetworkConnectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}
  */
  readonly maximumDurationInSeconds?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}
  */
  readonly runHookPayload?: string;
  /**
  * idle_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}
  */
  readonly idlePolicy?: LambdamicrovmsMicrovmIdlePolicy[] | cdktn.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}
  */
  readonly logging?: LambdamicrovmsMicrovmLogging[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}
  */
  readonly timeouts?: LambdamicrovmsMicrovmTimeouts;
}
export interface LambdamicrovmsMicrovmIdlePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}
  */
  readonly autoResumeEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}
  */
  readonly maxIdleDurationSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}
  */
  readonly suspendedDurationSeconds: number;
}

export function lambdamicrovmsMicrovmIdlePolicyToTerraform(struct?: LambdamicrovmsMicrovmIdlePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_resume_enabled: cdktn.booleanToTerraform(struct!.autoResumeEnabled),
    max_idle_duration_seconds: cdktn.numberToTerraform(struct!.maxIdleDurationSeconds),
    suspended_duration_seconds: cdktn.numberToTerraform(struct!.suspendedDurationSeconds),
  }
}


export function lambdamicrovmsMicrovmIdlePolicyToHclTerraform(struct?: LambdamicrovmsMicrovmIdlePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_resume_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoResumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_idle_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspended_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.suspendedDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdamicrovmsMicrovmIdlePolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdamicrovmsMicrovmIdlePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoResumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResumeEnabled = this._autoResumeEnabled;
    }
    if (this._maxIdleDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleDurationSeconds = this._maxIdleDurationSeconds;
    }
    if (this._suspendedDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendedDurationSeconds = this._suspendedDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdamicrovmsMicrovmIdlePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoResumeEnabled = undefined;
      this._maxIdleDurationSeconds = undefined;
      this._suspendedDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoResumeEnabled = value.autoResumeEnabled;
      this._maxIdleDurationSeconds = value.maxIdleDurationSeconds;
      this._suspendedDurationSeconds = value.suspendedDurationSeconds;
    }
  }

  // auto_resume_enabled - computed: false, optional: false, required: true
  private _autoResumeEnabled?: boolean | cdktn.IResolvable; 
  public get autoResumeEnabled() {
    return this.getBooleanAttribute('auto_resume_enabled');
  }
  public set autoResumeEnabled(value: boolean | cdktn.IResolvable) {
    this._autoResumeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResumeEnabledInput() {
    return this._autoResumeEnabled;
  }

  // max_idle_duration_seconds - computed: false, optional: false, required: true
  private _maxIdleDurationSeconds?: number; 
  public get maxIdleDurationSeconds() {
    return this.getNumberAttribute('max_idle_duration_seconds');
  }
  public set maxIdleDurationSeconds(value: number) {
    this._maxIdleDurationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleDurationSecondsInput() {
    return this._maxIdleDurationSeconds;
  }

  // suspended_duration_seconds - computed: false, optional: false, required: true
  private _suspendedDurationSeconds?: number; 
  public get suspendedDurationSeconds() {
    return this.getNumberAttribute('suspended_duration_seconds');
  }
  public set suspendedDurationSeconds(value: number) {
    this._suspendedDurationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedDurationSecondsInput() {
    return this._suspendedDurationSeconds;
  }
}

export class LambdamicrovmsMicrovmIdlePolicyList extends cdktn.ComplexList {
  public internalValue? : LambdamicrovmsMicrovmIdlePolicy[] | cdktn.IResolvable

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
  public get(index: number): LambdamicrovmsMicrovmIdlePolicyOutputReference {
    return new LambdamicrovmsMicrovmIdlePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdamicrovmsMicrovmLoggingCloudwatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}
  */
  readonly logStream?: string;
}

export function lambdamicrovmsMicrovmLoggingCloudwatchToTerraform(struct?: LambdamicrovmsMicrovmLoggingCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream: cdktn.stringToTerraform(struct!.logStream),
  }
}


export function lambdamicrovmsMicrovmLoggingCloudwatchToHclTerraform(struct?: LambdamicrovmsMicrovmLoggingCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream: {
      value: cdktn.stringToHclTerraform(struct!.logStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdamicrovmsMicrovmLoggingCloudwatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdamicrovmsMicrovmLoggingCloudwatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStream = this._logStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdamicrovmsMicrovmLoggingCloudwatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
      this._logStream = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
      this._logStream = value.logStream;
    }
  }

  // log_group - computed: false, optional: true, required: false
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

  // log_stream - computed: false, optional: true, required: false
  private _logStream?: string; 
  public get logStream() {
    return this.getStringAttribute('log_stream');
  }
  public set logStream(value: string) {
    this._logStream = value;
  }
  public resetLogStream() {
    this._logStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamInput() {
    return this._logStream;
  }
}

export class LambdamicrovmsMicrovmLoggingCloudwatchList extends cdktn.ComplexList {
  public internalValue? : LambdamicrovmsMicrovmLoggingCloudwatch[] | cdktn.IResolvable

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
  public get(index: number): LambdamicrovmsMicrovmLoggingCloudwatchOutputReference {
    return new LambdamicrovmsMicrovmLoggingCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdamicrovmsMicrovmLoggingDisabled {
}

export function lambdamicrovmsMicrovmLoggingDisabledToTerraform(struct?: LambdamicrovmsMicrovmLoggingDisabled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdamicrovmsMicrovmLoggingDisabledToHclTerraform(struct?: LambdamicrovmsMicrovmLoggingDisabled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdamicrovmsMicrovmLoggingDisabledOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdamicrovmsMicrovmLoggingDisabled | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdamicrovmsMicrovmLoggingDisabled | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class LambdamicrovmsMicrovmLoggingDisabledList extends cdktn.ComplexList {
  public internalValue? : LambdamicrovmsMicrovmLoggingDisabled[] | cdktn.IResolvable

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
  public get(index: number): LambdamicrovmsMicrovmLoggingDisabledOutputReference {
    return new LambdamicrovmsMicrovmLoggingDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdamicrovmsMicrovmLogging {
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}
  */
  readonly cloudwatch?: LambdamicrovmsMicrovmLoggingCloudwatch[] | cdktn.IResolvable;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}
  */
  readonly disabled?: LambdamicrovmsMicrovmLoggingDisabled[] | cdktn.IResolvable;
}

export function lambdamicrovmsMicrovmLoggingToTerraform(struct?: LambdamicrovmsMicrovmLogging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch: cdktn.listMapper(lambdamicrovmsMicrovmLoggingCloudwatchToTerraform, true)(struct!.cloudwatch),
    disabled: cdktn.listMapper(lambdamicrovmsMicrovmLoggingDisabledToTerraform, true)(struct!.disabled),
  }
}


export function lambdamicrovmsMicrovmLoggingToHclTerraform(struct?: LambdamicrovmsMicrovmLogging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch: {
      value: cdktn.listMapperHcl(lambdamicrovmsMicrovmLoggingCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "LambdamicrovmsMicrovmLoggingCloudwatchList",
    },
    disabled: {
      value: cdktn.listMapperHcl(lambdamicrovmsMicrovmLoggingDisabledToHclTerraform, true)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "LambdamicrovmsMicrovmLoggingDisabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdamicrovmsMicrovmLoggingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdamicrovmsMicrovmLogging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdamicrovmsMicrovmLogging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._disabled.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._disabled.internalValue = value.disabled;
    }
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new LambdamicrovmsMicrovmLoggingCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LambdamicrovmsMicrovmLoggingCloudwatch[] | cdktn.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new LambdamicrovmsMicrovmLoggingDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: LambdamicrovmsMicrovmLoggingDisabled[] | cdktn.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }
}

export class LambdamicrovmsMicrovmLoggingList extends cdktn.ComplexList {
  public internalValue? : LambdamicrovmsMicrovmLogging[] | cdktn.IResolvable

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
  public get(index: number): LambdamicrovmsMicrovmLoggingOutputReference {
    return new LambdamicrovmsMicrovmLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdamicrovmsMicrovmTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}
  */
  readonly delete?: string;
}

export function lambdamicrovmsMicrovmTimeoutsToTerraform(struct?: LambdamicrovmsMicrovmTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function lambdamicrovmsMicrovmTimeoutsToHclTerraform(struct?: LambdamicrovmsMicrovmTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdamicrovmsMicrovmTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdamicrovmsMicrovmTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdamicrovmsMicrovmTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}
*/
export class LambdamicrovmsMicrovm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdamicrovms_microvm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdamicrovmsMicrovm to import
  * @param importFromId The id of the existing LambdamicrovmsMicrovm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdamicrovms_microvm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdamicrovmsMicrovmConfig
  */
  public constructor(scope: Construct, id: string, config: LambdamicrovmsMicrovmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdamicrovms_microvm',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._egressNetworkConnectors = config.egressNetworkConnectors;
    this._executionRoleArn = config.executionRoleArn;
    this._imageArn = config.imageArn;
    this._imageVersion = config.imageVersion;
    this._ingressNetworkConnectors = config.ingressNetworkConnectors;
    this._maximumDurationInSeconds = config.maximumDurationInSeconds;
    this._region = config.region;
    this._runHookPayload = config.runHookPayload;
    this._idlePolicy.internalValue = config.idlePolicy;
    this._logging.internalValue = config.logging;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_network_connectors - computed: true, optional: true, required: false
  private _egressNetworkConnectors?: string[]; 
  public get egressNetworkConnectors() {
    return this.getListAttribute('egress_network_connectors');
  }
  public set egressNetworkConnectors(value: string[]) {
    this._egressNetworkConnectors = value;
  }
  public resetEgressNetworkConnectors() {
    this._egressNetworkConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkConnectorsInput() {
    return this._egressNetworkConnectors;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // image_arn - computed: false, optional: false, required: true
  private _imageArn?: string; 
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }
  public set imageArn(value: string) {
    this._imageArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageArnInput() {
    return this._imageArn;
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // ingress_network_connectors - computed: true, optional: true, required: false
  private _ingressNetworkConnectors?: string[]; 
  public get ingressNetworkConnectors() {
    return this.getListAttribute('ingress_network_connectors');
  }
  public set ingressNetworkConnectors(value: string[]) {
    this._ingressNetworkConnectors = value;
  }
  public resetIngressNetworkConnectors() {
    this._ingressNetworkConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNetworkConnectorsInput() {
    return this._ingressNetworkConnectors;
  }

  // maximum_duration_in_seconds - computed: true, optional: true, required: false
  private _maximumDurationInSeconds?: number; 
  public get maximumDurationInSeconds() {
    return this.getNumberAttribute('maximum_duration_in_seconds');
  }
  public set maximumDurationInSeconds(value: number) {
    this._maximumDurationInSeconds = value;
  }
  public resetMaximumDurationInSeconds() {
    this._maximumDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDurationInSecondsInput() {
    return this._maximumDurationInSeconds;
  }

  // microvm_id - computed: true, optional: false, required: false
  public get microvmId() {
    return this.getStringAttribute('microvm_id');
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

  // run_hook_payload - computed: false, optional: true, required: false
  private _runHookPayload?: string; 
  public get runHookPayload() {
    return this.getStringAttribute('run_hook_payload');
  }
  public set runHookPayload(value: string) {
    this._runHookPayload = value;
  }
  public resetRunHookPayload() {
    this._runHookPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runHookPayloadInput() {
    return this._runHookPayload;
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // idle_policy - computed: false, optional: true, required: false
  private _idlePolicy = new LambdamicrovmsMicrovmIdlePolicyList(this, "idle_policy", false);
  public get idlePolicy() {
    return this._idlePolicy;
  }
  public putIdlePolicy(value: LambdamicrovmsMicrovmIdlePolicy[] | cdktn.IResolvable) {
    this._idlePolicy.internalValue = value;
  }
  public resetIdlePolicy() {
    this._idlePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idlePolicyInput() {
    return this._idlePolicy.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new LambdamicrovmsMicrovmLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: LambdamicrovmsMicrovmLogging[] | cdktn.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdamicrovmsMicrovmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdamicrovmsMicrovmTimeouts) {
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
      egress_network_connectors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._egressNetworkConnectors),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      image_arn: cdktn.stringToTerraform(this._imageArn),
      image_version: cdktn.stringToTerraform(this._imageVersion),
      ingress_network_connectors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ingressNetworkConnectors),
      maximum_duration_in_seconds: cdktn.numberToTerraform(this._maximumDurationInSeconds),
      region: cdktn.stringToTerraform(this._region),
      run_hook_payload: cdktn.stringToTerraform(this._runHookPayload),
      idle_policy: cdktn.listMapper(lambdamicrovmsMicrovmIdlePolicyToTerraform, true)(this._idlePolicy.internalValue),
      logging: cdktn.listMapper(lambdamicrovmsMicrovmLoggingToTerraform, true)(this._logging.internalValue),
      timeouts: lambdamicrovmsMicrovmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_network_connectors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._egressNetworkConnectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_arn: {
        value: cdktn.stringToHclTerraform(this._imageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_version: {
        value: cdktn.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_network_connectors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ingressNetworkConnectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      maximum_duration_in_seconds: {
        value: cdktn.numberToHclTerraform(this._maximumDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_hook_payload: {
        value: cdktn.stringToHclTerraform(this._runHookPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_policy: {
        value: cdktn.listMapperHcl(lambdamicrovmsMicrovmIdlePolicyToHclTerraform, true)(this._idlePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdamicrovmsMicrovmIdlePolicyList",
      },
      logging: {
        value: cdktn.listMapperHcl(lambdamicrovmsMicrovmLoggingToHclTerraform, true)(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdamicrovmsMicrovmLoggingList",
      },
      timeouts: {
        value: lambdamicrovmsMicrovmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdamicrovmsMicrovmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
