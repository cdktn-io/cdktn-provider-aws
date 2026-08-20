/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreHarnessConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#allowed_tools BedrockagentcoreHarness#allowed_tools}
  */
  readonly allowedTools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#environment_variables BedrockagentcoreHarness#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#execution_role_arn BedrockagentcoreHarness#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#harness_name BedrockagentcoreHarness#harness_name}
  */
  readonly harnessName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_iterations BedrockagentcoreHarness#max_iterations}
  */
  readonly maxIterations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#region BedrockagentcoreHarness#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#timeout_seconds BedrockagentcoreHarness#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#truncation BedrockagentcoreHarness#truncation}
  */
  readonly truncation?: BedrockagentcoreHarnessTruncation[] | cdktn.IResolvable;
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#authorizer_configuration BedrockagentcoreHarness#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreHarnessAuthorizerConfiguration[] | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#environment BedrockagentcoreHarness#environment}
  */
  readonly environment?: BedrockagentcoreHarnessEnvironment[] | cdktn.IResolvable;
  /**
  * environment_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#environment_artifact BedrockagentcoreHarness#environment_artifact}
  */
  readonly environmentArtifact?: BedrockagentcoreHarnessEnvironmentArtifact[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#memory BedrockagentcoreHarness#memory}
  */
  readonly memory?: BedrockagentcoreHarnessMemory[] | cdktn.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#model BedrockagentcoreHarness#model}
  */
  readonly model?: BedrockagentcoreHarnessModel[] | cdktn.IResolvable;
  /**
  * skill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#skill BedrockagentcoreHarness#skill}
  */
  readonly skill?: BedrockagentcoreHarnessSkill[] | cdktn.IResolvable;
  /**
  * system_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#system_prompt BedrockagentcoreHarness#system_prompt}
  */
  readonly systemPrompt?: BedrockagentcoreHarnessSystemPrompt[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#timeouts BedrockagentcoreHarness#timeouts}
  */
  readonly timeouts?: BedrockagentcoreHarnessTimeouts;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#tool BedrockagentcoreHarness#tool}
  */
  readonly tool?: BedrockagentcoreHarnessTool[] | cdktn.IResolvable;
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfiguration {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_access_point - computed: true, optional: false, required: false
  private _efsAccessPoint = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointList(this, "efs_access_point", false);
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }

  // s3_files_access_point - computed: true, optional: false, required: false
  private _s3FilesAccessPoint = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointList(this, "s3_files_access_point", false);
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }

  // session_storage - computed: true, optional: false, required: false
  private _sessionStorage = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageList(this, "session_storage", false);
  public get sessionStorage() {
    return this._sessionStorage;
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfiguration {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: false, required: false
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }

  // max_lifetime - computed: true, optional: false, required: false
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_service_s3_endpoint - computed: true, optional: false, required: false
  public get requireServiceS3Endpoint() {
    return this.getBooleanAttribute('require_service_s3_endpoint');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfiguration {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // network_mode_config - computed: true, optional: false, required: false
  private _networkModeConfig = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironment {
}

export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // filesystem_configuration - computed: true, optional: false, required: false
  private _filesystemConfiguration = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentFilesystemConfigurationList(this, "filesystem_configuration", false);
  public get filesystemConfiguration() {
    return this._filesystemConfiguration;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentLifecycleConfigurationList(this, "lifecycle_configuration", false);
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
}

export class BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentActual {
}

export function bedrockagentcoreHarnessEnvironmentActualToTerraform(struct?: BedrockagentcoreHarnessEnvironmentActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessEnvironmentActualToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessEnvironmentActualOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentcore_runtime_environment - computed: true, optional: false, required: false
  private _agentcoreRuntimeEnvironment = new BedrockagentcoreHarnessEnvironmentActualAgentcoreRuntimeEnvironmentList(this, "agentcore_runtime_environment", false);
  public get agentcoreRuntimeEnvironment() {
    return this._agentcoreRuntimeEnvironment;
  }
}

export class BedrockagentcoreHarnessEnvironmentActualList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentActualOutputReference {
    return new BedrockagentcoreHarnessEnvironmentActualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfig {
}

export function bedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigToTerraform(struct?: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigToHclTerraform(struct?: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map_block_key - computed: true, optional: false, required: false
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }

  // relevance_score - computed: true, optional: false, required: false
  public get relevanceScore() {
    return this.getNumberAttribute('relevance_score');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
}

export class BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigOutputReference {
    return new BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfiguration {
}

export function bedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationToTerraform(struct?: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // messages_count - computed: true, optional: false, required: false
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }

  // retrieval_config - computed: true, optional: false, required: false
  private _retrievalConfig = new BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationRetrievalConfigList(this, "retrieval_config", false);
  public get retrievalConfig() {
    return this._retrievalConfig;
  }
}

export class BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationOutputReference {
    return new BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryActualDisabled {
}

export function bedrockagentcoreHarnessMemoryActualDisabledToTerraform(struct?: BedrockagentcoreHarnessMemoryActualDisabled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryActualDisabledToHclTerraform(struct?: BedrockagentcoreHarnessMemoryActualDisabled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryActualDisabledOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryActualDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryActualDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class BedrockagentcoreHarnessMemoryActualDisabledList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessMemoryActualDisabledOutputReference {
    return new BedrockagentcoreHarnessMemoryActualDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryActualManagedMemoryConfiguration {
}

export function bedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationToTerraform(struct?: BedrockagentcoreHarnessMemoryActualManagedMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessMemoryActualManagedMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryActualManagedMemoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryActualManagedMemoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }

  // event_expiry_duration - computed: true, optional: false, required: false
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }

  // strategies - computed: true, optional: false, required: false
  public get strategies() {
    return cdktn.Fn.tolist(this.getListAttribute('strategies'));
  }
}

export class BedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationOutputReference {
    return new BedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryActual {
}

export function bedrockagentcoreHarnessMemoryActualToTerraform(struct?: BedrockagentcoreHarnessMemoryActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryActualToHclTerraform(struct?: BedrockagentcoreHarnessMemoryActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryActualOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentcore_memory_configuration - computed: true, optional: false, required: false
  private _agentcoreMemoryConfiguration = new BedrockagentcoreHarnessMemoryActualAgentcoreMemoryConfigurationList(this, "agentcore_memory_configuration", false);
  public get agentcoreMemoryConfiguration() {
    return this._agentcoreMemoryConfiguration;
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new BedrockagentcoreHarnessMemoryActualDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }

  // managed_memory_configuration - computed: true, optional: false, required: false
  private _managedMemoryConfiguration = new BedrockagentcoreHarnessMemoryActualManagedMemoryConfigurationList(this, "managed_memory_configuration", false);
  public get managedMemoryConfiguration() {
    return this._managedMemoryConfiguration;
  }
}

export class BedrockagentcoreHarnessMemoryActualList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreHarnessMemoryActualOutputReference {
    return new BedrockagentcoreHarnessMemoryActualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTruncationConfigSlidingWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}
  */
  readonly messagesCount?: number;
}

export function bedrockagentcoreHarnessTruncationConfigSlidingWindowToTerraform(struct?: BedrockagentcoreHarnessTruncationConfigSlidingWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    messages_count: cdktn.numberToTerraform(struct!.messagesCount),
  }
}


export function bedrockagentcoreHarnessTruncationConfigSlidingWindowToHclTerraform(struct?: BedrockagentcoreHarnessTruncationConfigSlidingWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    messages_count: {
      value: cdktn.numberToHclTerraform(struct!.messagesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessTruncationConfigSlidingWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messagesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesCount = this._messagesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessTruncationConfigSlidingWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messagesCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messagesCount = value.messagesCount;
    }
  }

  // messages_count - computed: true, optional: true, required: false
  private _messagesCount?: number; 
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }
  public set messagesCount(value: number) {
    this._messagesCount = value;
  }
  public resetMessagesCount() {
    this._messagesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesCountInput() {
    return this._messagesCount;
  }
}

export class BedrockagentcoreHarnessTruncationConfigSlidingWindowList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessTruncationConfigSlidingWindow[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference {
    return new BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTruncationConfigSummarization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}
  */
  readonly preserveRecentMessages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}
  */
  readonly summarizationSystemPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}
  */
  readonly summaryRatio?: number;
}

export function bedrockagentcoreHarnessTruncationConfigSummarizationToTerraform(struct?: BedrockagentcoreHarnessTruncationConfigSummarization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preserve_recent_messages: cdktn.numberToTerraform(struct!.preserveRecentMessages),
    summarization_system_prompt: cdktn.stringToTerraform(struct!.summarizationSystemPrompt),
    summary_ratio: cdktn.numberToTerraform(struct!.summaryRatio),
  }
}


export function bedrockagentcoreHarnessTruncationConfigSummarizationToHclTerraform(struct?: BedrockagentcoreHarnessTruncationConfigSummarization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preserve_recent_messages: {
      value: cdktn.numberToHclTerraform(struct!.preserveRecentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summarization_system_prompt: {
      value: cdktn.stringToHclTerraform(struct!.summarizationSystemPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_ratio: {
      value: cdktn.numberToHclTerraform(struct!.summaryRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessTruncationConfigSummarization | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveRecentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveRecentMessages = this._preserveRecentMessages;
    }
    if (this._summarizationSystemPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationSystemPrompt = this._summarizationSystemPrompt;
    }
    if (this._summaryRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryRatio = this._summaryRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessTruncationConfigSummarization | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveRecentMessages = undefined;
      this._summarizationSystemPrompt = undefined;
      this._summaryRatio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveRecentMessages = value.preserveRecentMessages;
      this._summarizationSystemPrompt = value.summarizationSystemPrompt;
      this._summaryRatio = value.summaryRatio;
    }
  }

  // preserve_recent_messages - computed: true, optional: true, required: false
  private _preserveRecentMessages?: number; 
  public get preserveRecentMessages() {
    return this.getNumberAttribute('preserve_recent_messages');
  }
  public set preserveRecentMessages(value: number) {
    this._preserveRecentMessages = value;
  }
  public resetPreserveRecentMessages() {
    this._preserveRecentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveRecentMessagesInput() {
    return this._preserveRecentMessages;
  }

  // summarization_system_prompt - computed: true, optional: true, required: false
  private _summarizationSystemPrompt?: string; 
  public get summarizationSystemPrompt() {
    return this.getStringAttribute('summarization_system_prompt');
  }
  public set summarizationSystemPrompt(value: string) {
    this._summarizationSystemPrompt = value;
  }
  public resetSummarizationSystemPrompt() {
    this._summarizationSystemPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationSystemPromptInput() {
    return this._summarizationSystemPrompt;
  }

  // summary_ratio - computed: true, optional: true, required: false
  private _summaryRatio?: number; 
  public get summaryRatio() {
    return this.getNumberAttribute('summary_ratio');
  }
  public set summaryRatio(value: number) {
    this._summaryRatio = value;
  }
  public resetSummaryRatio() {
    this._summaryRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryRatioInput() {
    return this._summaryRatio;
  }
}

export class BedrockagentcoreHarnessTruncationConfigSummarizationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessTruncationConfigSummarization[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference {
    return new BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTruncationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}
  */
  readonly slidingWindow?: BedrockagentcoreHarnessTruncationConfigSlidingWindow[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}
  */
  readonly summarization?: BedrockagentcoreHarnessTruncationConfigSummarization[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessTruncationConfigToTerraform(struct?: BedrockagentcoreHarnessTruncationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sliding_window: cdktn.listMapper(bedrockagentcoreHarnessTruncationConfigSlidingWindowToTerraform, false)(struct!.slidingWindow),
    summarization: cdktn.listMapper(bedrockagentcoreHarnessTruncationConfigSummarizationToTerraform, false)(struct!.summarization),
  }
}


export function bedrockagentcoreHarnessTruncationConfigToHclTerraform(struct?: BedrockagentcoreHarnessTruncationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sliding_window: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessTruncationConfigSlidingWindowToHclTerraform, false)(struct!.slidingWindow),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessTruncationConfigSlidingWindowList",
    },
    summarization: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessTruncationConfigSummarizationToHclTerraform, false)(struct!.summarization),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessTruncationConfigSummarizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessTruncationConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessTruncationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slidingWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slidingWindow = this._slidingWindow?.internalValue;
    }
    if (this._summarization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarization = this._summarization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessTruncationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slidingWindow.internalValue = undefined;
      this._summarization.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slidingWindow.internalValue = value.slidingWindow;
      this._summarization.internalValue = value.summarization;
    }
  }

  // sliding_window - computed: true, optional: true, required: false
  private _slidingWindow = new BedrockagentcoreHarnessTruncationConfigSlidingWindowList(this, "sliding_window", false);
  public get slidingWindow() {
    return this._slidingWindow;
  }
  public putSlidingWindow(value: BedrockagentcoreHarnessTruncationConfigSlidingWindow[] | cdktn.IResolvable) {
    this._slidingWindow.internalValue = value;
  }
  public resetSlidingWindow() {
    this._slidingWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingWindowInput() {
    return this._slidingWindow.internalValue;
  }

  // summarization - computed: true, optional: true, required: false
  private _summarization = new BedrockagentcoreHarnessTruncationConfigSummarizationList(this, "summarization", false);
  public get summarization() {
    return this._summarization;
  }
  public putSummarization(value: BedrockagentcoreHarnessTruncationConfigSummarization[] | cdktn.IResolvable) {
    this._summarization.internalValue = value;
  }
  public resetSummarization() {
    this._summarization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationInput() {
    return this._summarization.internalValue;
  }
}

export class BedrockagentcoreHarnessTruncationConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessTruncationConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessTruncationConfigOutputReference {
    return new BedrockagentcoreHarnessTruncationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTruncation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}
  */
  readonly config?: BedrockagentcoreHarnessTruncationConfig[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}
  */
  readonly strategy?: string;
}

export function bedrockagentcoreHarnessTruncationToTerraform(struct?: BedrockagentcoreHarnessTruncation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: cdktn.listMapper(bedrockagentcoreHarnessTruncationConfigToTerraform, false)(struct!.config),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function bedrockagentcoreHarnessTruncationToHclTerraform(struct?: BedrockagentcoreHarnessTruncation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessTruncationConfigToHclTerraform, false)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessTruncationConfigList",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessTruncationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessTruncation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessTruncation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._strategy = value.strategy;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new BedrockagentcoreHarnessTruncationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: BedrockagentcoreHarnessTruncationConfig[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class BedrockagentcoreHarnessTruncationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessTruncation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessTruncationOutputReference {
    return new BedrockagentcoreHarnessTruncationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}
  */
  readonly arn: string;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#workload_identities BedrockagentcoreHarness#workload_identities}
  */
  readonly workloadIdentities?: string[];
  /**
  * hosting_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#hosting_environment BedrockagentcoreHarness#hosting_environment}
  */
  readonly hostingEnvironment?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadIdentities),
    hosting_environment: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform, true)(struct!.hostingEnvironment),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workload_identities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workloadIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosting_environment: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform, true)(struct!.hostingEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentities = this._workloadIdentities;
    }
    if (this._hostingEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostingEnvironment = this._hostingEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadIdentities = undefined;
      this._hostingEnvironment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadIdentities = value.workloadIdentities;
      this._hostingEnvironment.internalValue = value.hostingEnvironment;
    }
  }

  // workload_identities - computed: false, optional: true, required: false
  private _workloadIdentities?: string[]; 
  public get workloadIdentities() {
    return this.getListAttribute('workload_identities');
  }
  public set workloadIdentities(value: string[]) {
    this._workloadIdentities = value;
  }
  public resetWorkloadIdentities() {
    this._workloadIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentitiesInput() {
    return this._workloadIdentities;
  }

  // hosting_environment - computed: false, optional: true, required: false
  private _hostingEnvironment = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList(this, "hosting_environment", false);
  public get hostingEnvironment() {
    return this._hostingEnvironment;
  }
  public putHostingEnvironment(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable) {
    this._hostingEnvironment.internalValue = value;
  }
  public resetHostingEnvironment() {
    this._hostingEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingEnvironmentInput() {
    return this._hostingEnvironment.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_value_string: {
      value: cdktn.stringToHclTerraform(struct!.matchValueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueString = this._matchValueString;
    }
    if (this._matchValueStringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringList = this._matchValueStringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValueString = undefined;
      this._matchValueStringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValueString = value.matchValueString;
      this._matchValueStringList = value.matchValueStringList;
    }
  }

  // match_value_string - computed: false, optional: true, required: false
  private _matchValueString?: string; 
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }
  public set matchValueString(value: string) {
    this._matchValueString = value;
  }
  public resetMatchValueString() {
    this._matchValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringInput() {
    return this._matchValueString;
  }

  // match_value_string_list - computed: false, optional: true, required: false
  private _matchValueStringList?: string[]; 
  public get matchValueStringList() {
    return cdktn.Fn.tolist(this.getListAttribute('match_value_string_list'));
  }
  public set matchValueStringList(value: string[]) {
    this._matchValueStringList = value;
  }
  public resetMatchValueStringList() {
    this._matchValueStringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringListInput() {
    return this._matchValueStringList;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}
  */
  readonly claimMatchOperator: string;
  /**
  * claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}
  */
  readonly claimMatchValue?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform, true)(struct!.claimMatchValue),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_match_operator: {
      value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_match_value: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform, true)(struct!.claimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchOperator = this._claimMatchOperator;
    }
    if (this._claimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimMatchOperator = undefined;
      this._claimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimMatchOperator = value.claimMatchOperator;
      this._claimMatchValue.internalValue = value.claimMatchValue;
    }
  }

  // claim_match_operator - computed: false, optional: false, required: true
  private _claimMatchOperator?: string; 
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }
  public set claimMatchOperator(value: string) {
    this._claimMatchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchOperatorInput() {
    return this._claimMatchOperator;
  }

  // claim_match_value - computed: false, optional: true, required: false
  private _claimMatchValue = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(this, "claim_match_value", false);
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable) {
    this._claimMatchValue.internalValue = value;
  }
  public resetClaimMatchValue() {
    this._claimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchValueInput() {
    return this._claimMatchValue.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType: string;
  /**
  * authorizing_claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    authorizing_claim_match_value: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform, true)(struct!.authorizingClaimMatchValue),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inbound_token_claim_name: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_token_claim_value_type: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizing_claim_match_value: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform, true)(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundTokenClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
    }
    if (this._inboundTokenClaimValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
    }
    if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = undefined;
      this._inboundTokenClaimValueType = undefined;
      this._authorizingClaimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = value.inboundTokenClaimName;
      this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
      this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
    }
  }

  // inbound_token_claim_name - computed: false, optional: false, required: true
  private _inboundTokenClaimName?: string; 
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }
  public set inboundTokenClaimName(value: string) {
    this._inboundTokenClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimNameInput() {
    return this._inboundTokenClaimName;
  }

  // inbound_token_claim_value_type - computed: false, optional: false, required: true
  private _inboundTokenClaimValueType?: string; 
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
  public set inboundTokenClaimValueType(value: string) {
    this._inboundTokenClaimValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimValueTypeInput() {
    return this._inboundTokenClaimValueType;
  }

  // authorizing_claim_match_value - computed: false, optional: true, required: false
  private _authorizingClaimMatchValue = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(this, "authorizing_claim_match_value", false);
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable) {
    this._authorizingClaimMatchValue.internalValue = value;
  }
  public resetAuthorizingClaimMatchValue() {
    this._authorizingClaimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingClaimMatchValueInput() {
    return this._authorizingClaimMatchValue.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#endpoint_ip_address_type BedrockagentcoreHarness#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#routing_domain BedrockagentcoreHarness#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#security_group_ids BedrockagentcoreHarness#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#subnet_ids BedrockagentcoreHarness#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#vpc_identifier BedrockagentcoreHarness#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#resource_configuration_identifier BedrockagentcoreHarness#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#managed_vpc_resource BedrockagentcoreHarness#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#self_managed_lattice_resource BedrockagentcoreHarness#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#endpoint_ip_address_type BedrockagentcoreHarness#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#routing_domain BedrockagentcoreHarness#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#security_group_ids BedrockagentcoreHarness#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#subnet_ids BedrockagentcoreHarness#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#vpc_identifier BedrockagentcoreHarness#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#resource_configuration_identifier BedrockagentcoreHarness#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#managed_vpc_resource BedrockagentcoreHarness#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#self_managed_lattice_resource BedrockagentcoreHarness#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#domain BedrockagentcoreHarness#domain}
  */
  readonly domain: string;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#private_endpoint BedrockagentcoreHarness#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    private_endpoint: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._privateEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._privateEndpoint.internalValue = value.privateEndpoint;
    }
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

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * allowed_workload_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#allowed_workload_configuration BedrockagentcoreHarness#allowed_workload_configuration}
  */
  readonly allowedWorkloadConfiguration?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable;
  /**
  * custom_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#custom_claim BedrockagentcoreHarness#custom_claim}
  */
  readonly customClaim?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#private_endpoint BedrockagentcoreHarness#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable;
  /**
  * private_endpoint_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#private_endpoint_overrides BedrockagentcoreHarness#private_endpoint_overrides}
  */
  readonly privateEndpointOverrides?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    allowed_workload_configuration: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform, true)(struct!.allowedWorkloadConfiguration),
    custom_claim: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform, true)(struct!.customClaim),
    private_endpoint: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
    private_endpoint_overrides: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform, true)(struct!.privateEndpointOverrides),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_audience: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_workload_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform, true)(struct!.allowedWorkloadConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList",
    },
    custom_claim: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform, true)(struct!.customClaim),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList",
    },
    private_endpoint_overrides: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform, true)(struct!.privateEndpointOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._allowedWorkloadConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedWorkloadConfiguration = this._allowedWorkloadConfiguration?.internalValue;
    }
    if (this._customClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaim = this._customClaim?.internalValue;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    if (this._privateEndpointOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointOverrides = this._privateEndpointOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._allowedScopes = undefined;
      this._discoveryUrl = undefined;
      this._allowedWorkloadConfiguration.internalValue = undefined;
      this._customClaim.internalValue = undefined;
      this._privateEndpoint.internalValue = undefined;
      this._privateEndpointOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._allowedScopes = value.allowedScopes;
      this._discoveryUrl = value.discoveryUrl;
      this._allowedWorkloadConfiguration.internalValue = value.allowedWorkloadConfiguration;
      this._customClaim.internalValue = value.customClaim;
      this._privateEndpoint.internalValue = value.privateEndpoint;
      this._privateEndpointOverrides.internalValue = value.privateEndpointOverrides;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_audience'));
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_scopes'));
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // allowed_workload_configuration - computed: false, optional: true, required: false
  private _allowedWorkloadConfiguration = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList(this, "allowed_workload_configuration", false);
  public get allowedWorkloadConfiguration() {
    return this._allowedWorkloadConfiguration;
  }
  public putAllowedWorkloadConfiguration(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable) {
    this._allowedWorkloadConfiguration.internalValue = value;
  }
  public resetAllowedWorkloadConfiguration() {
    this._allowedWorkloadConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWorkloadConfigurationInput() {
    return this._allowedWorkloadConfiguration.internalValue;
  }

  // custom_claim - computed: false, optional: true, required: false
  private _customClaim = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(this, "custom_claim", true);
  public get customClaim() {
    return this._customClaim;
  }
  public putCustomClaim(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable) {
    this._customClaim.internalValue = value;
  }
  public resetCustomClaim() {
    this._customClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimInput() {
    return this._customClaim.internalValue;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // private_endpoint_overrides - computed: false, optional: true, required: false
  private _privateEndpointOverrides = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }
  public putPrivateEndpointOverrides(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable) {
    this._privateEndpointOverrides.internalValue = value;
  }
  public resetPrivateEndpointOverrides() {
    this._privateEndpointOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointOverridesInput() {
    return this._privateEndpointOverrides.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessAuthorizerConfiguration {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreHarnessAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessAuthorizerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessAuthorizerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: false, optional: true, required: false
  private _customJwtAuthorizer = new BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerList(this, "custom_jwt_authorizer", false);
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}

export class BedrockagentcoreHarnessAuthorizerConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessAuthorizerConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessAuthorizerConfigurationOutputReference {
    return new BedrockagentcoreHarnessAuthorizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}
  */
  readonly idleRuntimeSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}
  */
  readonly maxLifetime?: number;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
    max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_runtime_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifetime: {
      value: cdktn.numberToHclTerraform(struct!.maxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleRuntimeSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleRuntimeSessionTimeout = this._idleRuntimeSessionTimeout;
    }
    if (this._maxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifetime = this._maxLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = undefined;
      this._maxLifetime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = value.idleRuntimeSessionTimeout;
      this._maxLifetime = value.maxLifetime;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: true, required: false
  private _idleRuntimeSessionTimeout?: number; 
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }
  public set idleRuntimeSessionTimeout(value: number) {
    this._idleRuntimeSessionTimeout = value;
  }
  public resetIdleRuntimeSessionTimeout() {
    this._idleRuntimeSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleRuntimeSessionTimeoutInput() {
    return this._idleRuntimeSessionTimeout;
  }

  // max_lifetime - computed: true, optional: true, required: false
  private _maxLifetime?: number; 
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
  public set maxLifetime(value: number) {
    this._maxLifetime = value;
  }
  public resetMaxLifetime() {
    this._maxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifetimeInput() {
    return this._maxLifetime;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#access_point_arn BedrockagentcoreHarness#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: false, optional: false, required: true
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#access_point_arn BedrockagentcoreHarness#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: false, optional: false, required: true
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration {
  /**
  * efs_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#efs_access_point BedrockagentcoreHarness#efs_access_point}
  */
  readonly efsAccessPoint?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable;
  /**
  * s3_files_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#s3_files_access_point BedrockagentcoreHarness#s3_files_access_point}
  */
  readonly s3FilesAccessPoint?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable;
  /**
  * session_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}
  */
  readonly sessionStorage?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_access_point: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToTerraform, true)(struct!.efsAccessPoint),
    s3_files_access_point: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToTerraform, true)(struct!.s3FilesAccessPoint),
    session_storage: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToTerraform, true)(struct!.sessionStorage),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_access_point: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointToHclTerraform, true)(struct!.efsAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointList",
    },
    s3_files_access_point: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointToHclTerraform, true)(struct!.s3FilesAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointList",
    },
    session_storage: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageToHclTerraform, true)(struct!.sessionStorage),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsAccessPoint = this._efsAccessPoint?.internalValue;
    }
    if (this._s3FilesAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FilesAccessPoint = this._s3FilesAccessPoint?.internalValue;
    }
    if (this._sessionStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = undefined;
      this._s3FilesAccessPoint.internalValue = undefined;
      this._sessionStorage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = value.efsAccessPoint;
      this._s3FilesAccessPoint.internalValue = value.s3FilesAccessPoint;
      this._sessionStorage.internalValue = value.sessionStorage;
    }
  }

  // efs_access_point - computed: false, optional: true, required: false
  private _efsAccessPoint = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPointList(this, "efs_access_point", false);
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }
  public putEfsAccessPoint(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable) {
    this._efsAccessPoint.internalValue = value;
  }
  public resetEfsAccessPoint() {
    this._efsAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsAccessPointInput() {
    return this._efsAccessPoint.internalValue;
  }

  // s3_files_access_point - computed: false, optional: true, required: false
  private _s3FilesAccessPoint = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPointList(this, "s3_files_access_point", false);
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }
  public putS3FilesAccessPoint(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable) {
    this._s3FilesAccessPoint.internalValue = value;
  }
  public resetS3FilesAccessPoint() {
    this._s3FilesAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FilesAccessPointInput() {
    return this._s3FilesAccessPoint.internalValue;
  }

  // session_storage - computed: false, optional: true, required: false
  private _sessionStorage = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorageList(this, "session_storage", false);
  public get sessionStorage() {
    return this._sessionStorage;
  }
  public putSessionStorage(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationSessionStorage[] | cdktn.IResolvable) {
    this._sessionStorage.internalValue = value;
  }
  public resetSessionStorage() {
    this._sessionStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage.internalValue;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}
  */
  readonly subnets: string[];
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

  // require_service_s3_endpoint - computed: true, optional: false, required: false
  public get requireServiceS3Endpoint() {
    return this.getBooleanAttribute('require_service_s3_endpoint');
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}
  */
  readonly networkMode: string;
  /**
  * network_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}
  */
  readonly networkModeConfig?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_mode: cdktn.stringToTerraform(struct!.networkMode),
    network_mode_config: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToTerraform, true)(struct!.networkModeConfig),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_mode: {
      value: cdktn.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToHclTerraform, true)(struct!.networkModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._networkModeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkMode = value.networkMode;
      this._networkModeConfig.internalValue = value.networkModeConfig;
    }
  }

  // network_mode - computed: false, optional: false, required: true
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_mode_config - computed: false, optional: true, required: false
  private _networkModeConfig = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
  public putNetworkModeConfig(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable) {
    this._networkModeConfig.internalValue = value;
  }
  public resetNetworkModeConfig() {
    this._networkModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeConfigInput() {
    return this._networkModeConfig.internalValue;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration[] | cdktn.IResolvable;
  /**
  * filesystem_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#filesystem_configuration BedrockagentcoreHarness#filesystem_configuration}
  */
  readonly filesystemConfiguration?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}
  */
  readonly networkConfiguration?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentToTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_configuration: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationToTerraform, false)(struct!.lifecycleConfiguration),
    filesystem_configuration: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationToTerraform, true)(struct!.filesystemConfiguration),
    network_configuration: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationToTerraform, true)(struct!.networkConfiguration),
  }
}


export function bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationToHclTerraform, false)(struct!.lifecycleConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationList",
    },
    filesystem_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationToHclTerraform, true)(struct!.filesystemConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationList",
    },
    network_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationToHclTerraform, true)(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfiguration = this._lifecycleConfiguration?.internalValue;
    }
    if (this._filesystemConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemConfiguration = this._filesystemConfiguration?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifecycleConfiguration.internalValue = undefined;
      this._filesystemConfiguration.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifecycleConfiguration.internalValue = value.lifecycleConfiguration;
      this._filesystemConfiguration.internalValue = value.filesystemConfiguration;
      this._networkConfiguration.internalValue = value.networkConfiguration;
    }
  }

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfigurationList(this, "lifecycle_configuration", false);
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentLifecycleConfiguration[] | cdktn.IResolvable) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // filesystem_configuration - computed: false, optional: true, required: false
  private _filesystemConfiguration = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfigurationList(this, "filesystem_configuration", false);
  public get filesystemConfiguration() {
    return this._filesystemConfiguration;
  }
  public putFilesystemConfiguration(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentFilesystemConfiguration[] | cdktn.IResolvable) {
    this._filesystemConfiguration.internalValue = value;
  }
  public resetFilesystemConfiguration() {
    this._filesystemConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemConfigurationInput() {
    return this._filesystemConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentNetworkConfiguration[] | cdktn.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }
}

export class BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentOutputReference {
    return new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironment {
  /**
  * agentcore_runtime_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#agentcore_runtime_environment BedrockagentcoreHarness#agentcore_runtime_environment}
  */
  readonly agentcoreRuntimeEnvironment?: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessEnvironmentToTerraform(struct?: BedrockagentcoreHarnessEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_runtime_environment: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentToTerraform, true)(struct!.agentcoreRuntimeEnvironment),
  }
}


export function bedrockagentcoreHarnessEnvironmentToHclTerraform(struct?: BedrockagentcoreHarnessEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_runtime_environment: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentToHclTerraform, true)(struct!.agentcoreRuntimeEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreRuntimeEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreRuntimeEnvironment = this._agentcoreRuntimeEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreRuntimeEnvironment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreRuntimeEnvironment.internalValue = value.agentcoreRuntimeEnvironment;
    }
  }

  // agentcore_runtime_environment - computed: false, optional: true, required: false
  private _agentcoreRuntimeEnvironment = new BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironmentList(this, "agentcore_runtime_environment", false);
  public get agentcoreRuntimeEnvironment() {
    return this._agentcoreRuntimeEnvironment;
  }
  public putAgentcoreRuntimeEnvironment(value: BedrockagentcoreHarnessEnvironmentAgentcoreRuntimeEnvironment[] | cdktn.IResolvable) {
    this._agentcoreRuntimeEnvironment.internalValue = value;
  }
  public resetAgentcoreRuntimeEnvironment() {
    this._agentcoreRuntimeEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreRuntimeEnvironmentInput() {
    return this._agentcoreRuntimeEnvironment.internalValue;
  }
}

export class BedrockagentcoreHarnessEnvironmentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironment[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentOutputReference {
    return new BedrockagentcoreHarnessEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#container_uri BedrockagentcoreHarness#container_uri}
  */
  readonly containerUri: string;
}

export function bedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToTerraform(struct?: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_uri: cdktn.stringToTerraform(struct!.containerUri),
  }
}


export function bedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_uri: {
      value: cdktn.stringToHclTerraform(struct!.containerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerUri = this._containerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerUri = value.containerUri;
    }
  }

  // container_uri - computed: false, optional: false, required: true
  private _containerUri?: string; 
  public get containerUri() {
    return this.getStringAttribute('container_uri');
  }
  public set containerUri(value: string) {
    this._containerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerUriInput() {
    return this._containerUri;
  }
}

export class BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference {
    return new BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessEnvironmentArtifact {
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}
  */
  readonly containerConfiguration?: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessEnvironmentArtifactToTerraform(struct?: BedrockagentcoreHarnessEnvironmentArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_configuration: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToTerraform, true)(struct!.containerConfiguration),
  }
}


export function bedrockagentcoreHarnessEnvironmentArtifactToHclTerraform(struct?: BedrockagentcoreHarnessEnvironmentArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToHclTerraform, true)(struct!.containerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessEnvironmentArtifactOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessEnvironmentArtifact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessEnvironmentArtifact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerConfiguration.internalValue = value.containerConfiguration;
    }
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationList(this, "container_configuration", false);
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration[] | cdktn.IResolvable) {
    this._containerConfiguration.internalValue = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration.internalValue;
  }
}

export class BedrockagentcoreHarnessEnvironmentArtifactList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessEnvironmentArtifact[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessEnvironmentArtifactOutputReference {
    return new BedrockagentcoreHarnessEnvironmentArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#map_block_key BedrockagentcoreHarness#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}
  */
  readonly relevanceScore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}
  */
  readonly topK?: number;
}

export function bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigToTerraform(struct?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    relevance_score: cdktn.numberToTerraform(struct!.relevanceScore),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    top_k: cdktn.numberToTerraform(struct!.topK),
  }
}


export function bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigToHclTerraform(struct?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relevance_score: {
      value: cdktn.numberToHclTerraform(struct!.relevanceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._relevanceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevanceScore = this._relevanceScore;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._relevanceScore = undefined;
      this._strategyId = undefined;
      this._topK = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._relevanceScore = value.relevanceScore;
      this._strategyId = value.strategyId;
      this._topK = value.topK;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // relevance_score - computed: false, optional: true, required: false
  private _relevanceScore?: number; 
  public get relevanceScore() {
    return this.getNumberAttribute('relevance_score');
  }
  public set relevanceScore(value: number) {
    this._relevanceScore = value;
  }
  public resetRelevanceScore() {
    this._relevanceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceScoreInput() {
    return this._relevanceScore;
  }

  // strategy_id - computed: false, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // top_k - computed: false, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }
}

export class BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigOutputReference {
    return new BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}
  */
  readonly actorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}
  */
  readonly messagesCount?: number;
  /**
  * retrieval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}
  */
  readonly retrievalConfig?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationToTerraform(struct?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actor_id: cdktn.stringToTerraform(struct!.actorId),
    arn: cdktn.stringToTerraform(struct!.arn),
    messages_count: cdktn.numberToTerraform(struct!.messagesCount),
    retrieval_config: cdktn.listMapper(bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigToTerraform, true)(struct!.retrievalConfig),
  }
}


export function bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actor_id: {
      value: cdktn.stringToHclTerraform(struct!.actorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages_count: {
      value: cdktn.numberToHclTerraform(struct!.messagesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrieval_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigToHclTerraform, true)(struct!.retrievalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorId = this._actorId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._messagesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesCount = this._messagesCount;
    }
    if (this._retrievalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalConfig = this._retrievalConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actorId = undefined;
      this._arn = undefined;
      this._messagesCount = undefined;
      this._retrievalConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actorId = value.actorId;
      this._arn = value.arn;
      this._messagesCount = value.messagesCount;
      this._retrievalConfig.internalValue = value.retrievalConfig;
    }
  }

  // actor_id - computed: false, optional: true, required: false
  private _actorId?: string; 
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }
  public set actorId(value: string) {
    this._actorId = value;
  }
  public resetActorId() {
    this._actorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorIdInput() {
    return this._actorId;
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // messages_count - computed: false, optional: true, required: false
  private _messagesCount?: number; 
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }
  public set messagesCount(value: number) {
    this._messagesCount = value;
  }
  public resetMessagesCount() {
    this._messagesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesCountInput() {
    return this._messagesCount;
  }

  // retrieval_config - computed: false, optional: true, required: false
  private _retrievalConfig = new BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfigList(this, "retrieval_config", false);
  public get retrievalConfig() {
    return this._retrievalConfig;
  }
  public putRetrievalConfig(value: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationRetrievalConfig[] | cdktn.IResolvable) {
    this._retrievalConfig.internalValue = value;
  }
  public resetRetrievalConfig() {
    this._retrievalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalConfigInput() {
    return this._retrievalConfig.internalValue;
  }
}

export class BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationOutputReference {
    return new BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryDisabled {
}

export function bedrockagentcoreHarnessMemoryDisabledToTerraform(struct?: BedrockagentcoreHarnessMemoryDisabled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreHarnessMemoryDisabledToHclTerraform(struct?: BedrockagentcoreHarnessMemoryDisabled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreHarnessMemoryDisabledOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryDisabled | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryDisabled | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreHarnessMemoryDisabledList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessMemoryDisabled[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessMemoryDisabledOutputReference {
    return new BedrockagentcoreHarnessMemoryDisabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemoryManagedMemoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#encryption_key_arn BedrockagentcoreHarness#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#event_expiry_duration BedrockagentcoreHarness#event_expiry_duration}
  */
  readonly eventExpiryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#strategies BedrockagentcoreHarness#strategies}
  */
  readonly strategies?: string[];
}

export function bedrockagentcoreHarnessMemoryManagedMemoryConfigurationToTerraform(struct?: BedrockagentcoreHarnessMemoryManagedMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_arn: cdktn.stringToTerraform(struct!.encryptionKeyArn),
    event_expiry_duration: cdktn.numberToTerraform(struct!.eventExpiryDuration),
    strategies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.strategies),
  }
}


export function bedrockagentcoreHarnessMemoryManagedMemoryConfigurationToHclTerraform(struct?: BedrockagentcoreHarnessMemoryManagedMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_expiry_duration: {
      value: cdktn.numberToHclTerraform(struct!.eventExpiryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.strategies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessMemoryManagedMemoryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemoryManagedMemoryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyArn = this._encryptionKeyArn;
    }
    if (this._eventExpiryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventExpiryDuration = this._eventExpiryDuration;
    }
    if (this._strategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategies = this._strategies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemoryManagedMemoryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyArn = undefined;
      this._eventExpiryDuration = undefined;
      this._strategies = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyArn = value.encryptionKeyArn;
      this._eventExpiryDuration = value.eventExpiryDuration;
      this._strategies = value.strategies;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // event_expiry_duration - computed: true, optional: true, required: false
  private _eventExpiryDuration?: number; 
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }
  public set eventExpiryDuration(value: number) {
    this._eventExpiryDuration = value;
  }
  public resetEventExpiryDuration() {
    this._eventExpiryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpiryDurationInput() {
    return this._eventExpiryDuration;
  }

  // strategies - computed: true, optional: true, required: false
  private _strategies?: string[]; 
  public get strategies() {
    return cdktn.Fn.tolist(this.getListAttribute('strategies'));
  }
  public set strategies(value: string[]) {
    this._strategies = value;
  }
  public resetStrategies() {
    this._strategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategiesInput() {
    return this._strategies;
  }
}

export class BedrockagentcoreHarnessMemoryManagedMemoryConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessMemoryManagedMemoryConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessMemoryManagedMemoryConfigurationOutputReference {
    return new BedrockagentcoreHarnessMemoryManagedMemoryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessMemory {
  /**
  * agentcore_memory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#agentcore_memory_configuration BedrockagentcoreHarness#agentcore_memory_configuration}
  */
  readonly agentcoreMemoryConfiguration?: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration[] | cdktn.IResolvable;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#disabled BedrockagentcoreHarness#disabled}
  */
  readonly disabled?: BedrockagentcoreHarnessMemoryDisabled[] | cdktn.IResolvable;
  /**
  * managed_memory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#managed_memory_configuration BedrockagentcoreHarness#managed_memory_configuration}
  */
  readonly managedMemoryConfiguration?: BedrockagentcoreHarnessMemoryManagedMemoryConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessMemoryToTerraform(struct?: BedrockagentcoreHarnessMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_memory_configuration: cdktn.listMapper(bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationToTerraform, true)(struct!.agentcoreMemoryConfiguration),
    disabled: cdktn.listMapper(bedrockagentcoreHarnessMemoryDisabledToTerraform, true)(struct!.disabled),
    managed_memory_configuration: cdktn.listMapper(bedrockagentcoreHarnessMemoryManagedMemoryConfigurationToTerraform, true)(struct!.managedMemoryConfiguration),
  }
}


export function bedrockagentcoreHarnessMemoryToHclTerraform(struct?: BedrockagentcoreHarnessMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_memory_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationToHclTerraform, true)(struct!.agentcoreMemoryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationList",
    },
    disabled: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessMemoryDisabledToHclTerraform, true)(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessMemoryDisabledList",
    },
    managed_memory_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessMemoryManagedMemoryConfigurationToHclTerraform, true)(struct!.managedMemoryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessMemoryManagedMemoryConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreMemoryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreMemoryConfiguration = this._agentcoreMemoryConfiguration?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._managedMemoryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryConfiguration = this._managedMemoryConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreMemoryConfiguration.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._managedMemoryConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreMemoryConfiguration.internalValue = value.agentcoreMemoryConfiguration;
      this._disabled.internalValue = value.disabled;
      this._managedMemoryConfiguration.internalValue = value.managedMemoryConfiguration;
    }
  }

  // agentcore_memory_configuration - computed: false, optional: true, required: false
  private _agentcoreMemoryConfiguration = new BedrockagentcoreHarnessMemoryAgentcoreMemoryConfigurationList(this, "agentcore_memory_configuration", false);
  public get agentcoreMemoryConfiguration() {
    return this._agentcoreMemoryConfiguration;
  }
  public putAgentcoreMemoryConfiguration(value: BedrockagentcoreHarnessMemoryAgentcoreMemoryConfiguration[] | cdktn.IResolvable) {
    this._agentcoreMemoryConfiguration.internalValue = value;
  }
  public resetAgentcoreMemoryConfiguration() {
    this._agentcoreMemoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreMemoryConfigurationInput() {
    return this._agentcoreMemoryConfiguration.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new BedrockagentcoreHarnessMemoryDisabledList(this, "disabled", false);
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: BedrockagentcoreHarnessMemoryDisabled[] | cdktn.IResolvable) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // managed_memory_configuration - computed: false, optional: true, required: false
  private _managedMemoryConfiguration = new BedrockagentcoreHarnessMemoryManagedMemoryConfigurationList(this, "managed_memory_configuration", false);
  public get managedMemoryConfiguration() {
    return this._managedMemoryConfiguration;
  }
  public putManagedMemoryConfiguration(value: BedrockagentcoreHarnessMemoryManagedMemoryConfiguration[] | cdktn.IResolvable) {
    this._managedMemoryConfiguration.internalValue = value;
  }
  public resetManagedMemoryConfiguration() {
    this._managedMemoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryConfigurationInput() {
    return this._managedMemoryConfiguration.internalValue;
  }
}

export class BedrockagentcoreHarnessMemoryList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessMemory[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessMemoryOutputReference {
    return new BedrockagentcoreHarnessMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessModelBedrockModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentcoreHarnessModelBedrockModelConfigToTerraform(struct?: BedrockagentcoreHarnessModelBedrockModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockagentcoreHarnessModelBedrockModelConfigToHclTerraform(struct?: BedrockagentcoreHarnessModelBedrockModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessModelBedrockModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessModelBedrockModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessModelBedrockModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class BedrockagentcoreHarnessModelBedrockModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessModelBedrockModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessModelBedrockModelConfigOutputReference {
    return new BedrockagentcoreHarnessModelBedrockModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessModelGeminiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}
  */
  readonly apiKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}
  */
  readonly topK?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentcoreHarnessModelGeminiModelConfigToTerraform(struct?: BedrockagentcoreHarnessModelGeminiModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_k: cdktn.numberToTerraform(struct!.topK),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockagentcoreHarnessModelGeminiModelConfigToHclTerraform(struct?: BedrockagentcoreHarnessModelGeminiModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessModelGeminiModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessModelGeminiModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyArn = this._apiKeyArn;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessModelGeminiModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyArn = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topK = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyArn = value.apiKeyArn;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
    }
  }

  // api_key_arn - computed: false, optional: false, required: true
  private _apiKeyArn?: string; 
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }
  public set apiKeyArn(value: string) {
    this._apiKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyArnInput() {
    return this._apiKeyArn;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_k - computed: false, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class BedrockagentcoreHarnessModelGeminiModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessModelGeminiModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessModelGeminiModelConfigOutputReference {
    return new BedrockagentcoreHarnessModelGeminiModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessModelOpenaiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}
  */
  readonly apiKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentcoreHarnessModelOpenaiModelConfigToTerraform(struct?: BedrockagentcoreHarnessModelOpenaiModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_arn: cdktn.stringToTerraform(struct!.apiKeyArn),
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockagentcoreHarnessModelOpenaiModelConfigToHclTerraform(struct?: BedrockagentcoreHarnessModelOpenaiModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessModelOpenaiModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessModelOpenaiModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyArn = this._apiKeyArn;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessModelOpenaiModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyArn = undefined;
      this._maxTokens = undefined;
      this._modelId = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyArn = value.apiKeyArn;
      this._maxTokens = value.maxTokens;
      this._modelId = value.modelId;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // api_key_arn - computed: false, optional: false, required: true
  private _apiKeyArn?: string; 
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }
  public set apiKeyArn(value: string) {
    this._apiKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyArnInput() {
    return this._apiKeyArn;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class BedrockagentcoreHarnessModelOpenaiModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessModelOpenaiModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessModelOpenaiModelConfigOutputReference {
    return new BedrockagentcoreHarnessModelOpenaiModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessModel {
  /**
  * bedrock_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}
  */
  readonly bedrockModelConfig?: BedrockagentcoreHarnessModelBedrockModelConfig[] | cdktn.IResolvable;
  /**
  * gemini_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}
  */
  readonly geminiModelConfig?: BedrockagentcoreHarnessModelGeminiModelConfig[] | cdktn.IResolvable;
  /**
  * openai_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#openai_model_config BedrockagentcoreHarness#openai_model_config}
  */
  readonly openaiModelConfig?: BedrockagentcoreHarnessModelOpenaiModelConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessModelToTerraform(struct?: BedrockagentcoreHarnessModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_model_config: cdktn.listMapper(bedrockagentcoreHarnessModelBedrockModelConfigToTerraform, true)(struct!.bedrockModelConfig),
    gemini_model_config: cdktn.listMapper(bedrockagentcoreHarnessModelGeminiModelConfigToTerraform, true)(struct!.geminiModelConfig),
    openai_model_config: cdktn.listMapper(bedrockagentcoreHarnessModelOpenaiModelConfigToTerraform, true)(struct!.openaiModelConfig),
  }
}


export function bedrockagentcoreHarnessModelToHclTerraform(struct?: BedrockagentcoreHarnessModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_model_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessModelBedrockModelConfigToHclTerraform, true)(struct!.bedrockModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessModelBedrockModelConfigList",
    },
    gemini_model_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessModelGeminiModelConfigToHclTerraform, true)(struct!.geminiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessModelGeminiModelConfigList",
    },
    openai_model_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessModelOpenaiModelConfigToHclTerraform, true)(struct!.openaiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessModelOpenaiModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockModelConfig = this._bedrockModelConfig?.internalValue;
    }
    if (this._geminiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geminiModelConfig = this._geminiModelConfig?.internalValue;
    }
    if (this._openaiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiModelConfig = this._openaiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockModelConfig.internalValue = undefined;
      this._geminiModelConfig.internalValue = undefined;
      this._openaiModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockModelConfig.internalValue = value.bedrockModelConfig;
      this._geminiModelConfig.internalValue = value.geminiModelConfig;
      this._openaiModelConfig.internalValue = value.openaiModelConfig;
    }
  }

  // bedrock_model_config - computed: false, optional: true, required: false
  private _bedrockModelConfig = new BedrockagentcoreHarnessModelBedrockModelConfigList(this, "bedrock_model_config", false);
  public get bedrockModelConfig() {
    return this._bedrockModelConfig;
  }
  public putBedrockModelConfig(value: BedrockagentcoreHarnessModelBedrockModelConfig[] | cdktn.IResolvable) {
    this._bedrockModelConfig.internalValue = value;
  }
  public resetBedrockModelConfig() {
    this._bedrockModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockModelConfigInput() {
    return this._bedrockModelConfig.internalValue;
  }

  // gemini_model_config - computed: false, optional: true, required: false
  private _geminiModelConfig = new BedrockagentcoreHarnessModelGeminiModelConfigList(this, "gemini_model_config", false);
  public get geminiModelConfig() {
    return this._geminiModelConfig;
  }
  public putGeminiModelConfig(value: BedrockagentcoreHarnessModelGeminiModelConfig[] | cdktn.IResolvable) {
    this._geminiModelConfig.internalValue = value;
  }
  public resetGeminiModelConfig() {
    this._geminiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiModelConfigInput() {
    return this._geminiModelConfig.internalValue;
  }

  // openai_model_config - computed: false, optional: true, required: false
  private _openaiModelConfig = new BedrockagentcoreHarnessModelOpenaiModelConfigList(this, "openai_model_config", false);
  public get openaiModelConfig() {
    return this._openaiModelConfig;
  }
  public putOpenaiModelConfig(value: BedrockagentcoreHarnessModelOpenaiModelConfig[] | cdktn.IResolvable) {
    this._openaiModelConfig.internalValue = value;
  }
  public resetOpenaiModelConfig() {
    this._openaiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiModelConfigInput() {
    return this._openaiModelConfig.internalValue;
  }
}

export class BedrockagentcoreHarnessModelList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessModel[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessModelOutputReference {
    return new BedrockagentcoreHarnessModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessSkill {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#path BedrockagentcoreHarness#path}
  */
  readonly path: string;
}

export function bedrockagentcoreHarnessSkillToTerraform(struct?: BedrockagentcoreHarnessSkill | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function bedrockagentcoreHarnessSkillToHclTerraform(struct?: BedrockagentcoreHarnessSkill | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessSkillOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessSkill | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessSkill | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class BedrockagentcoreHarnessSkillList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessSkill[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessSkillOutputReference {
    return new BedrockagentcoreHarnessSkillOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessSystemPrompt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#text BedrockagentcoreHarness#text}
  */
  readonly text: string;
}

export function bedrockagentcoreHarnessSystemPromptToTerraform(struct?: BedrockagentcoreHarnessSystemPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function bedrockagentcoreHarnessSystemPromptToHclTerraform(struct?: BedrockagentcoreHarnessSystemPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessSystemPromptOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessSystemPrompt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessSystemPrompt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class BedrockagentcoreHarnessSystemPromptList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessSystemPrompt[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessSystemPromptOutputReference {
    return new BedrockagentcoreHarnessSystemPromptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#create BedrockagentcoreHarness#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#delete BedrockagentcoreHarness#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#update BedrockagentcoreHarness#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreHarnessTimeoutsToTerraform(struct?: BedrockagentcoreHarnessTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreHarnessTimeoutsToHclTerraform(struct?: BedrockagentcoreHarnessTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreHarnessTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreHarnessTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreHarnessTimeouts | cdktn.IResolvable | undefined) {
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
export interface BedrockagentcoreHarnessToolConfigAgentcoreBrowser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}
  */
  readonly browserArn?: string;
}

export function bedrockagentcoreHarnessToolConfigAgentcoreBrowserToTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreBrowser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    browser_arn: cdktn.stringToTerraform(struct!.browserArn),
  }
}


export function bedrockagentcoreHarnessToolConfigAgentcoreBrowserToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreBrowser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    browser_arn: {
      value: cdktn.stringToHclTerraform(struct!.browserArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigAgentcoreBrowserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigAgentcoreBrowser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserArn = this._browserArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigAgentcoreBrowser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browserArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browserArn = value.browserArn;
    }
  }

  // browser_arn - computed: false, optional: true, required: false
  private _browserArn?: string; 
  public get browserArn() {
    return this.getStringAttribute('browser_arn');
  }
  public set browserArn(value: string) {
    this._browserArn = value;
  }
  public resetBrowserArn() {
    this._browserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserArnInput() {
    return this._browserArn;
  }
}

export class BedrockagentcoreHarnessToolConfigAgentcoreBrowserList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigAgentcoreBrowser[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigAgentcoreBrowserOutputReference {
    return new BedrockagentcoreHarnessToolConfigAgentcoreBrowserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}
  */
  readonly codeInterpreterArn?: string;
}

export function bedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterToTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_interpreter_arn: cdktn.stringToTerraform(struct!.codeInterpreterArn),
  }
}


export function bedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_interpreter_arn: {
      value: cdktn.stringToHclTerraform(struct!.codeInterpreterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeInterpreterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeInterpreterArn = this._codeInterpreterArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeInterpreterArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeInterpreterArn = value.codeInterpreterArn;
    }
  }

  // code_interpreter_arn - computed: false, optional: true, required: false
  private _codeInterpreterArn?: string; 
  public get codeInterpreterArn() {
    return this.getStringAttribute('code_interpreter_arn');
  }
  public set codeInterpreterArn(value: string) {
    this._codeInterpreterArn = value;
  }
  public resetCodeInterpreterArn() {
    this._codeInterpreterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInterpreterArnInput() {
    return this._codeInterpreterArn;
  }
}

export class BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterOutputReference {
    return new BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}
  */
  readonly customParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}
  */
  readonly defaultReturnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}
  */
  readonly grantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}
  */
  readonly providerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}
  */
  readonly scopes: string[];
}

export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthToTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
    default_return_url: cdktn.stringToTerraform(struct!.defaultReturnUrl),
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_return_url: {
      value: cdktn.stringToHclTerraform(struct!.defaultReturnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters;
    }
    if (this._defaultReturnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReturnUrl = this._defaultReturnUrl;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customParameters = undefined;
      this._defaultReturnUrl = undefined;
      this._grantType = undefined;
      this._providerArn = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customParameters = value.customParameters;
      this._defaultReturnUrl = value.defaultReturnUrl;
      this._grantType = value.grantType;
      this._providerArn = value.providerArn;
      this._scopes = value.scopes;
    }
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: { [key: string]: string }; 
  public get customParameters() {
    return this.getStringMapAttribute('custom_parameters');
  }
  public set customParameters(value: { [key: string]: string }) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
  }

  // default_return_url - computed: false, optional: true, required: false
  private _defaultReturnUrl?: string; 
  public get defaultReturnUrl() {
    return this.getStringAttribute('default_return_url');
  }
  public set defaultReturnUrl(value: string) {
    this._defaultReturnUrl = value;
  }
  public resetDefaultReturnUrl() {
    this._defaultReturnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReturnUrlInput() {
    return this._defaultReturnUrl;
  }

  // grant_type - computed: false, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // provider_arn - computed: false, optional: false, required: true
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthOutputReference {
    return new BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}
  */
  readonly awsIam?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}
  */
  readonly none?: boolean | cdktn.IResolvable;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}
  */
  readonly oauth?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthToTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_iam: cdktn.booleanToTerraform(struct!.awsIam),
    none: cdktn.booleanToTerraform(struct!.none),
    oauth: cdktn.listMapper(bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthToTerraform, true)(struct!.oauth),
  }
}


export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_iam: {
      value: cdktn.booleanToHclTerraform(struct!.awsIam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktn.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthToHclTerraform, true)(struct!.oauth),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIam !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIam = this._awsIam;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsIam = undefined;
      this._none = undefined;
      this._oauth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsIam = value.awsIam;
      this._none = value.none;
      this._oauth.internalValue = value.oauth;
    }
  }

  // aws_iam - computed: false, optional: true, required: false
  private _awsIam?: boolean | cdktn.IResolvable; 
  public get awsIam() {
    return this.getBooleanAttribute('aws_iam');
  }
  public set awsIam(value: boolean | cdktn.IResolvable) {
    this._awsIam = value;
  }
  public resetAwsIam() {
    this._awsIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamInput() {
    return this._awsIam;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktn.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktn.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauthList(this, "oauth", false);
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOauth[] | cdktn.IResolvable) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOutputReference {
    return new BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigAgentcoreGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * outbound_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}
  */
  readonly outboundAuth?: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayToTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGateway | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_arn: cdktn.stringToTerraform(struct!.gatewayArn),
    outbound_auth: cdktn.listMapper(bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthToTerraform, true)(struct!.outboundAuth),
  }
}


export function bedrockagentcoreHarnessToolConfigAgentcoreGatewayToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigAgentcoreGateway | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_arn: {
      value: cdktn.stringToHclTerraform(struct!.gatewayArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_auth: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthToHclTerraform, true)(struct!.outboundAuth),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigAgentcoreGateway | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayArn = this._gatewayArn;
    }
    if (this._outboundAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAuth = this._outboundAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigAgentcoreGateway | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayArn = undefined;
      this._outboundAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayArn = value.gatewayArn;
      this._outboundAuth.internalValue = value.outboundAuth;
    }
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
  }

  // outbound_auth - computed: false, optional: true, required: false
  private _outboundAuth = new BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuthList(this, "outbound_auth", false);
  public get outboundAuth() {
    return this._outboundAuth;
  }
  public putOutboundAuth(value: BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutboundAuth[] | cdktn.IResolvable) {
    this._outboundAuth.internalValue = value;
  }
  public resetOutboundAuth() {
    this._outboundAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAuthInput() {
    return this._outboundAuth.internalValue;
  }
}

export class BedrockagentcoreHarnessToolConfigAgentcoreGatewayList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigAgentcoreGateway[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutputReference {
    return new BedrockagentcoreHarnessToolConfigAgentcoreGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigInlineFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#input_schema BedrockagentcoreHarness#input_schema}
  */
  readonly inputSchema: string;
}

export function bedrockagentcoreHarnessToolConfigInlineFunctionToTerraform(struct?: BedrockagentcoreHarnessToolConfigInlineFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    input_schema: cdktn.stringToTerraform(struct!.inputSchema),
  }
}


export function bedrockagentcoreHarnessToolConfigInlineFunctionToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigInlineFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_schema: {
      value: cdktn.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigInlineFunctionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigInlineFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigInlineFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inputSchema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inputSchema = value.inputSchema;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // input_schema - computed: false, optional: false, required: true
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }
}

export class BedrockagentcoreHarnessToolConfigInlineFunctionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigInlineFunction[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigInlineFunctionOutputReference {
    return new BedrockagentcoreHarnessToolConfigInlineFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfigRemoteMcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}
  */
  readonly url: string;
}

export function bedrockagentcoreHarnessToolConfigRemoteMcpToTerraform(struct?: BedrockagentcoreHarnessToolConfigRemoteMcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function bedrockagentcoreHarnessToolConfigRemoteMcpToHclTerraform(struct?: BedrockagentcoreHarnessToolConfigRemoteMcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigRemoteMcpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfigRemoteMcp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfigRemoteMcp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._url = value.url;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class BedrockagentcoreHarnessToolConfigRemoteMcpList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfigRemoteMcp[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigRemoteMcpOutputReference {
    return new BedrockagentcoreHarnessToolConfigRemoteMcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessToolConfig {
  /**
  * agentcore_browser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#agentcore_browser BedrockagentcoreHarness#agentcore_browser}
  */
  readonly agentcoreBrowser?: BedrockagentcoreHarnessToolConfigAgentcoreBrowser[] | cdktn.IResolvable;
  /**
  * agentcore_code_interpreter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#agentcore_code_interpreter BedrockagentcoreHarness#agentcore_code_interpreter}
  */
  readonly agentcoreCodeInterpreter?: BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter[] | cdktn.IResolvable;
  /**
  * agentcore_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#agentcore_gateway BedrockagentcoreHarness#agentcore_gateway}
  */
  readonly agentcoreGateway?: BedrockagentcoreHarnessToolConfigAgentcoreGateway[] | cdktn.IResolvable;
  /**
  * inline_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}
  */
  readonly inlineFunction?: BedrockagentcoreHarnessToolConfigInlineFunction[] | cdktn.IResolvable;
  /**
  * remote_mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}
  */
  readonly remoteMcp?: BedrockagentcoreHarnessToolConfigRemoteMcp[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessToolConfigToTerraform(struct?: BedrockagentcoreHarnessToolConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_browser: cdktn.listMapper(bedrockagentcoreHarnessToolConfigAgentcoreBrowserToTerraform, true)(struct!.agentcoreBrowser),
    agentcore_code_interpreter: cdktn.listMapper(bedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterToTerraform, true)(struct!.agentcoreCodeInterpreter),
    agentcore_gateway: cdktn.listMapper(bedrockagentcoreHarnessToolConfigAgentcoreGatewayToTerraform, true)(struct!.agentcoreGateway),
    inline_function: cdktn.listMapper(bedrockagentcoreHarnessToolConfigInlineFunctionToTerraform, true)(struct!.inlineFunction),
    remote_mcp: cdktn.listMapper(bedrockagentcoreHarnessToolConfigRemoteMcpToTerraform, true)(struct!.remoteMcp),
  }
}


export function bedrockagentcoreHarnessToolConfigToHclTerraform(struct?: BedrockagentcoreHarnessToolConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_browser: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigAgentcoreBrowserToHclTerraform, true)(struct!.agentcoreBrowser),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigAgentcoreBrowserList",
    },
    agentcore_code_interpreter: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterToHclTerraform, true)(struct!.agentcoreCodeInterpreter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterList",
    },
    agentcore_gateway: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigAgentcoreGatewayToHclTerraform, true)(struct!.agentcoreGateway),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigAgentcoreGatewayList",
    },
    inline_function: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigInlineFunctionToHclTerraform, true)(struct!.inlineFunction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigInlineFunctionList",
    },
    remote_mcp: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigRemoteMcpToHclTerraform, true)(struct!.remoteMcp),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigRemoteMcpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessToolConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreBrowser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreBrowser = this._agentcoreBrowser?.internalValue;
    }
    if (this._agentcoreCodeInterpreter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreCodeInterpreter = this._agentcoreCodeInterpreter?.internalValue;
    }
    if (this._agentcoreGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreGateway = this._agentcoreGateway?.internalValue;
    }
    if (this._inlineFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineFunction = this._inlineFunction?.internalValue;
    }
    if (this._remoteMcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMcp = this._remoteMcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessToolConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreBrowser.internalValue = undefined;
      this._agentcoreCodeInterpreter.internalValue = undefined;
      this._agentcoreGateway.internalValue = undefined;
      this._inlineFunction.internalValue = undefined;
      this._remoteMcp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreBrowser.internalValue = value.agentcoreBrowser;
      this._agentcoreCodeInterpreter.internalValue = value.agentcoreCodeInterpreter;
      this._agentcoreGateway.internalValue = value.agentcoreGateway;
      this._inlineFunction.internalValue = value.inlineFunction;
      this._remoteMcp.internalValue = value.remoteMcp;
    }
  }

  // agentcore_browser - computed: false, optional: true, required: false
  private _agentcoreBrowser = new BedrockagentcoreHarnessToolConfigAgentcoreBrowserList(this, "agentcore_browser", false);
  public get agentcoreBrowser() {
    return this._agentcoreBrowser;
  }
  public putAgentcoreBrowser(value: BedrockagentcoreHarnessToolConfigAgentcoreBrowser[] | cdktn.IResolvable) {
    this._agentcoreBrowser.internalValue = value;
  }
  public resetAgentcoreBrowser() {
    this._agentcoreBrowser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreBrowserInput() {
    return this._agentcoreBrowser.internalValue;
  }

  // agentcore_code_interpreter - computed: false, optional: true, required: false
  private _agentcoreCodeInterpreter = new BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreterList(this, "agentcore_code_interpreter", false);
  public get agentcoreCodeInterpreter() {
    return this._agentcoreCodeInterpreter;
  }
  public putAgentcoreCodeInterpreter(value: BedrockagentcoreHarnessToolConfigAgentcoreCodeInterpreter[] | cdktn.IResolvable) {
    this._agentcoreCodeInterpreter.internalValue = value;
  }
  public resetAgentcoreCodeInterpreter() {
    this._agentcoreCodeInterpreter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreCodeInterpreterInput() {
    return this._agentcoreCodeInterpreter.internalValue;
  }

  // agentcore_gateway - computed: false, optional: true, required: false
  private _agentcoreGateway = new BedrockagentcoreHarnessToolConfigAgentcoreGatewayList(this, "agentcore_gateway", false);
  public get agentcoreGateway() {
    return this._agentcoreGateway;
  }
  public putAgentcoreGateway(value: BedrockagentcoreHarnessToolConfigAgentcoreGateway[] | cdktn.IResolvable) {
    this._agentcoreGateway.internalValue = value;
  }
  public resetAgentcoreGateway() {
    this._agentcoreGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreGatewayInput() {
    return this._agentcoreGateway.internalValue;
  }

  // inline_function - computed: false, optional: true, required: false
  private _inlineFunction = new BedrockagentcoreHarnessToolConfigInlineFunctionList(this, "inline_function", false);
  public get inlineFunction() {
    return this._inlineFunction;
  }
  public putInlineFunction(value: BedrockagentcoreHarnessToolConfigInlineFunction[] | cdktn.IResolvable) {
    this._inlineFunction.internalValue = value;
  }
  public resetInlineFunction() {
    this._inlineFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineFunctionInput() {
    return this._inlineFunction.internalValue;
  }

  // remote_mcp - computed: false, optional: true, required: false
  private _remoteMcp = new BedrockagentcoreHarnessToolConfigRemoteMcpList(this, "remote_mcp", false);
  public get remoteMcp() {
    return this._remoteMcp;
  }
  public putRemoteMcp(value: BedrockagentcoreHarnessToolConfigRemoteMcp[] | cdktn.IResolvable) {
    this._remoteMcp.internalValue = value;
  }
  public resetRemoteMcp() {
    this._remoteMcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMcpInput() {
    return this._remoteMcp.internalValue;
  }
}

export class BedrockagentcoreHarnessToolConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessToolConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolConfigOutputReference {
    return new BedrockagentcoreHarnessToolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreHarnessTool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}
  */
  readonly config?: BedrockagentcoreHarnessToolConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreHarnessToolToTerraform(struct?: BedrockagentcoreHarnessTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    config: cdktn.listMapper(bedrockagentcoreHarnessToolConfigToTerraform, true)(struct!.config),
  }
}


export function bedrockagentcoreHarnessToolToHclTerraform(struct?: BedrockagentcoreHarnessTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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
    config: {
      value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreHarnessToolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreHarnessToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreHarnessTool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreHarnessTool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // config - computed: false, optional: true, required: false
  private _config = new BedrockagentcoreHarnessToolConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: BedrockagentcoreHarnessToolConfig[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class BedrockagentcoreHarnessToolList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreHarnessTool[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreHarnessToolOutputReference {
    return new BedrockagentcoreHarnessToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness aws_bedrockagentcore_harness}
*/
export class BedrockagentcoreHarness extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_harness";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreHarness to import
  * @param importFromId The id of the existing BedrockagentcoreHarness that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreHarness to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_harness", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_harness aws_bedrockagentcore_harness} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreHarnessConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreHarnessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_harness',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._allowedTools = config.allowedTools;
    this._environmentVariables = config.environmentVariables;
    this._executionRoleArn = config.executionRoleArn;
    this._harnessName = config.harnessName;
    this._maxIterations = config.maxIterations;
    this._maxTokens = config.maxTokens;
    this._region = config.region;
    this._tags = config.tags;
    this._timeoutSeconds = config.timeoutSeconds;
    this._truncation.internalValue = config.truncation;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._environment.internalValue = config.environment;
    this._environmentArtifact.internalValue = config.environmentArtifact;
    this._memory.internalValue = config.memory;
    this._model.internalValue = config.model;
    this._skill.internalValue = config.skill;
    this._systemPrompt.internalValue = config.systemPrompt;
    this._timeouts.internalValue = config.timeouts;
    this._tool.internalValue = config.tool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tools - computed: true, optional: true, required: false
  private _allowedTools?: string[]; 
  public get allowedTools() {
    return this.getListAttribute('allowed_tools');
  }
  public set allowedTools(value: string[]) {
    this._allowedTools = value;
  }
  public resetAllowedTools() {
    this._allowedTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToolsInput() {
    return this._allowedTools;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // environment_actual - computed: true, optional: false, required: false
  private _environmentActual = new BedrockagentcoreHarnessEnvironmentActualList(this, "environment_actual", false);
  public get environmentActual() {
    return this._environmentActual;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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

  // harness_id - computed: true, optional: false, required: false
  public get harnessId() {
    return this.getStringAttribute('harness_id');
  }

  // harness_name - computed: false, optional: false, required: true
  private _harnessName?: string; 
  public get harnessName() {
    return this.getStringAttribute('harness_name');
  }
  public set harnessName(value: string) {
    this._harnessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get harnessNameInput() {
    return this._harnessName;
  }

  // max_iterations - computed: true, optional: true, required: false
  private _maxIterations?: number; 
  public get maxIterations() {
    return this.getNumberAttribute('max_iterations');
  }
  public set maxIterations(value: number) {
    this._maxIterations = value;
  }
  public resetMaxIterations() {
    this._maxIterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIterationsInput() {
    return this._maxIterations;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // memory_actual - computed: true, optional: false, required: false
  private _memoryActual = new BedrockagentcoreHarnessMemoryActualList(this, "memory_actual", false);
  public get memoryActual() {
    return this._memoryActual;
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

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // truncation - computed: true, optional: true, required: false
  private _truncation = new BedrockagentcoreHarnessTruncationList(this, "truncation", false);
  public get truncation() {
    return this._truncation;
  }
  public putTruncation(value: BedrockagentcoreHarnessTruncation[] | cdktn.IResolvable) {
    this._truncation.internalValue = value;
  }
  public resetTruncation() {
    this._truncation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncationInput() {
    return this._truncation.internalValue;
  }

  // authorizer_configuration - computed: false, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreHarnessAuthorizerConfigurationList(this, "authorizer_configuration", false);
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreHarnessAuthorizerConfiguration[] | cdktn.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new BedrockagentcoreHarnessEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: BedrockagentcoreHarnessEnvironment[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_artifact - computed: false, optional: true, required: false
  private _environmentArtifact = new BedrockagentcoreHarnessEnvironmentArtifactList(this, "environment_artifact", false);
  public get environmentArtifact() {
    return this._environmentArtifact;
  }
  public putEnvironmentArtifact(value: BedrockagentcoreHarnessEnvironmentArtifact[] | cdktn.IResolvable) {
    this._environmentArtifact.internalValue = value;
  }
  public resetEnvironmentArtifact() {
    this._environmentArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentArtifactInput() {
    return this._environmentArtifact.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new BedrockagentcoreHarnessMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: BedrockagentcoreHarnessMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new BedrockagentcoreHarnessModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: BedrockagentcoreHarnessModel[] | cdktn.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // skill - computed: false, optional: true, required: false
  private _skill = new BedrockagentcoreHarnessSkillList(this, "skill", false);
  public get skill() {
    return this._skill;
  }
  public putSkill(value: BedrockagentcoreHarnessSkill[] | cdktn.IResolvable) {
    this._skill.internalValue = value;
  }
  public resetSkill() {
    this._skill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillInput() {
    return this._skill.internalValue;
  }

  // system_prompt - computed: false, optional: true, required: false
  private _systemPrompt = new BedrockagentcoreHarnessSystemPromptList(this, "system_prompt", false);
  public get systemPrompt() {
    return this._systemPrompt;
  }
  public putSystemPrompt(value: BedrockagentcoreHarnessSystemPrompt[] | cdktn.IResolvable) {
    this._systemPrompt.internalValue = value;
  }
  public resetSystemPrompt() {
    this._systemPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptInput() {
    return this._systemPrompt.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreHarnessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreHarnessTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new BedrockagentcoreHarnessToolList(this, "tool", false);
  public get tool() {
    return this._tool;
  }
  public putTool(value: BedrockagentcoreHarnessTool[] | cdktn.IResolvable) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedTools),
      environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      harness_name: cdktn.stringToTerraform(this._harnessName),
      max_iterations: cdktn.numberToTerraform(this._maxIterations),
      max_tokens: cdktn.numberToTerraform(this._maxTokens),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeout_seconds: cdktn.numberToTerraform(this._timeoutSeconds),
      truncation: cdktn.listMapper(bedrockagentcoreHarnessTruncationToTerraform, false)(this._truncation.internalValue),
      authorizer_configuration: cdktn.listMapper(bedrockagentcoreHarnessAuthorizerConfigurationToTerraform, true)(this._authorizerConfiguration.internalValue),
      environment: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentToTerraform, true)(this._environment.internalValue),
      environment_artifact: cdktn.listMapper(bedrockagentcoreHarnessEnvironmentArtifactToTerraform, true)(this._environmentArtifact.internalValue),
      memory: cdktn.listMapper(bedrockagentcoreHarnessMemoryToTerraform, true)(this._memory.internalValue),
      model: cdktn.listMapper(bedrockagentcoreHarnessModelToTerraform, true)(this._model.internalValue),
      skill: cdktn.listMapper(bedrockagentcoreHarnessSkillToTerraform, true)(this._skill.internalValue),
      system_prompt: cdktn.listMapper(bedrockagentcoreHarnessSystemPromptToTerraform, true)(this._systemPrompt.internalValue),
      timeouts: bedrockagentcoreHarnessTimeoutsToTerraform(this._timeouts.internalValue),
      tool: cdktn.listMapper(bedrockagentcoreHarnessToolToTerraform, true)(this._tool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_tools: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedTools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_variables: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      harness_name: {
        value: cdktn.stringToHclTerraform(this._harnessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_iterations: {
        value: cdktn.numberToHclTerraform(this._maxIterations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_tokens: {
        value: cdktn.numberToHclTerraform(this._maxTokens),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      truncation: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessTruncationToHclTerraform, false)(this._truncation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessTruncationList",
      },
      authorizer_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessAuthorizerConfigurationToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessAuthorizerConfigurationList",
      },
      environment: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentToHclTerraform, true)(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessEnvironmentList",
      },
      environment_artifact: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessEnvironmentArtifactToHclTerraform, true)(this._environmentArtifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessEnvironmentArtifactList",
      },
      memory: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessMemoryToHclTerraform, true)(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessMemoryList",
      },
      model: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessModelToHclTerraform, true)(this._model.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessModelList",
      },
      skill: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessSkillToHclTerraform, true)(this._skill.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessSkillList",
      },
      system_prompt: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessSystemPromptToHclTerraform, true)(this._systemPrompt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessSystemPromptList",
      },
      timeouts: {
        value: bedrockagentcoreHarnessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreHarnessTimeouts",
      },
      tool: {
        value: cdktn.listMapperHcl(bedrockagentcoreHarnessToolToHclTerraform, true)(this._tool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreHarnessToolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
