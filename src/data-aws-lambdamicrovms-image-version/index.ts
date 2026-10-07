/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsLambdamicrovmsImageVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}
  */
  readonly imageIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}
  */
  readonly imageVersion: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}
  */
  readonly region?: string;
}
export interface DataAwsLambdamicrovmsImageVersionCodeArtifact {
}

export function dataAwsLambdamicrovmsImageVersionCodeArtifactToTerraform(struct?: DataAwsLambdamicrovmsImageVersionCodeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionCodeArtifactToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionCodeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionCodeArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionCodeArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataAwsLambdamicrovmsImageVersionCodeArtifactList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference {
    return new DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionCpuConfiguration {
}

export function dataAwsLambdamicrovmsImageVersionCpuConfigurationToTerraform(struct?: DataAwsLambdamicrovmsImageVersionCpuConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionCpuConfigurationToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionCpuConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionCpuConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionCpuConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
}

export class DataAwsLambdamicrovmsImageVersionCpuConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference {
    return new DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks {
}

export function dataAwsLambdamicrovmsImageVersionHooksMicrovmHooksToTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionHooksMicrovmHooksToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resume - computed: true, optional: false, required: false
  public get resume() {
    return this.getStringAttribute('resume');
  }

  // resume_timeout_in_seconds - computed: true, optional: false, required: false
  public get resumeTimeoutInSeconds() {
    return this.getNumberAttribute('resume_timeout_in_seconds');
  }

  // run - computed: true, optional: false, required: false
  public get run() {
    return this.getStringAttribute('run');
  }

  // run_timeout_in_seconds - computed: true, optional: false, required: false
  public get runTimeoutInSeconds() {
    return this.getNumberAttribute('run_timeout_in_seconds');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getStringAttribute('suspend');
  }

  // suspend_timeout_in_seconds - computed: true, optional: false, required: false
  public get suspendTimeoutInSeconds() {
    return this.getNumberAttribute('suspend_timeout_in_seconds');
  }

  // terminate - computed: true, optional: false, required: false
  public get terminate() {
    return this.getStringAttribute('terminate');
  }

  // terminate_timeout_in_seconds - computed: true, optional: false, required: false
  public get terminateTimeoutInSeconds() {
    return this.getNumberAttribute('terminate_timeout_in_seconds');
  }
}

export class DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference {
    return new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks {
}

export function dataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksToTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getStringAttribute('ready');
  }

  // ready_timeout_in_seconds - computed: true, optional: false, required: false
  public get readyTimeoutInSeconds() {
    return this.getNumberAttribute('ready_timeout_in_seconds');
  }

  // validate - computed: true, optional: false, required: false
  public get validate() {
    return this.getStringAttribute('validate');
  }

  // validate_timeout_in_seconds - computed: true, optional: false, required: false
  public get validateTimeoutInSeconds() {
    return this.getNumberAttribute('validate_timeout_in_seconds');
  }
}

export class DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference {
    return new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionHooks {
}

export function dataAwsLambdamicrovmsImageVersionHooksToTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionHooksToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionHooksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // microvm_hooks - computed: true, optional: false, required: false
  private _microvmHooks = new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(this, "microvm_hooks", false);
  public get microvmHooks() {
    return this._microvmHooks;
  }

  // microvm_image_hooks - computed: true, optional: false, required: false
  private _microvmImageHooks = new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(this, "microvm_image_hooks", false);
  public get microvmImageHooks() {
    return this._microvmImageHooks;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataAwsLambdamicrovmsImageVersionHooksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionHooksOutputReference {
    return new DataAwsLambdamicrovmsImageVersionHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionLoggingCloudwatch {
}

export function dataAwsLambdamicrovmsImageVersionLoggingCloudwatchToTerraform(struct?: DataAwsLambdamicrovmsImageVersionLoggingCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionLoggingCloudwatchToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionLoggingCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionLoggingCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionLoggingCloudwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // log_stream - computed: true, optional: false, required: false
  public get logStream() {
    return this.getStringAttribute('log_stream');
  }
}

export class DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference {
    return new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionLoggingDisabled {
}

export function dataAwsLambdamicrovmsImageVersionLoggingDisabledToTerraform(struct?: DataAwsLambdamicrovmsImageVersionLoggingDisabled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionLoggingDisabledToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionLoggingDisabled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionLoggingDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionLoggingDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataAwsLambdamicrovmsImageVersionLoggingDisabledList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference {
    return new DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionLogging {
}

export function dataAwsLambdamicrovmsImageVersionLoggingToTerraform(struct?: DataAwsLambdamicrovmsImageVersionLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionLoggingToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionLoggingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch - computed: true, optional: false, required: false
  private _cloudwatch = new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataAwsLambdamicrovmsImageVersionLoggingDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
}

export class DataAwsLambdamicrovmsImageVersionLoggingList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingOutputReference {
    return new DataAwsLambdamicrovmsImageVersionLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLambdamicrovmsImageVersionResources {
}

export function dataAwsLambdamicrovmsImageVersionResourcesToTerraform(struct?: DataAwsLambdamicrovmsImageVersionResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLambdamicrovmsImageVersionResourcesToHclTerraform(struct?: DataAwsLambdamicrovmsImageVersionResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLambdamicrovmsImageVersionResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLambdamicrovmsImageVersionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdamicrovmsImageVersionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minimum_memory_in_mib - computed: true, optional: false, required: false
  public get minimumMemoryInMib() {
    return this.getNumberAttribute('minimum_memory_in_mib');
  }
}

export class DataAwsLambdamicrovmsImageVersionResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsLambdamicrovmsImageVersionResourcesOutputReference {
    return new DataAwsLambdamicrovmsImageVersionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}
*/
export class DataAwsLambdamicrovmsImageVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdamicrovms_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import
  * @param importFromId The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdamicrovms_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdamicrovmsImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdamicrovmsImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdamicrovms_image_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.68.0',
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
    this._imageIdentifier = config.imageIdentifier;
    this._imageVersion = config.imageVersion;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_os_capabilities - computed: true, optional: false, required: false
  public get additionalOsCapabilities() {
    return this.getListAttribute('additional_os_capabilities');
  }

  // base_image_arn - computed: true, optional: false, required: false
  public get baseImageArn() {
    return this.getStringAttribute('base_image_arn');
  }

  // base_image_version - computed: true, optional: false, required: false
  public get baseImageVersion() {
    return this.getStringAttribute('base_image_version');
  }

  // build_role_arn - computed: true, optional: false, required: false
  public get buildRoleArn() {
    return this.getStringAttribute('build_role_arn');
  }

  // code_artifact - computed: true, optional: false, required: false
  private _codeArtifact = new DataAwsLambdamicrovmsImageVersionCodeArtifactList(this, "code_artifact", false);
  public get codeArtifact() {
    return this._codeArtifact;
  }

  // cpu_configuration - computed: true, optional: false, required: false
  private _cpuConfiguration = new DataAwsLambdamicrovmsImageVersionCpuConfigurationList(this, "cpu_configuration", false);
  public get cpuConfiguration() {
    return this._cpuConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // egress_network_connectors - computed: true, optional: false, required: false
  public get egressNetworkConnectors() {
    return this.getListAttribute('egress_network_connectors');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataAwsLambdamicrovmsImageVersionHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
  }

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }

  // image_identifier - computed: false, optional: false, required: true
  private _imageIdentifier?: string; 
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }
  public set imageIdentifier(value: string) {
    this._imageIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdentifierInput() {
    return this._imageIdentifier;
  }

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataAwsLambdamicrovmsImageVersionLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
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

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsLambdamicrovmsImageVersionResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_identifier: cdktn.stringToTerraform(this._imageIdentifier),
      image_version: cdktn.stringToTerraform(this._imageVersion),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_identifier: {
        value: cdktn.stringToHclTerraform(this._imageIdentifier),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
