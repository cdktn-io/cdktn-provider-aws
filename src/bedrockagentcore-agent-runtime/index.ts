/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreAgentRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}
  */
  readonly agentRuntimeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * agent_runtime_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}
  */
  readonly agentRuntimeArtifact?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktn.IResolvable;
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktn.IResolvable;
  /**
  * filesystem_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#filesystem_configuration BedrockagentcoreAgentRuntime#filesystem_configuration}
  */
  readonly filesystemConfiguration?: BedrockagentcoreAgentRuntimeFilesystemConfiguration[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}
  */
  readonly networkConfiguration?: BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktn.IResolvable;
  /**
  * protocol_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}
  */
  readonly protocolConfiguration?: BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktn.IResolvable;
  /**
  * request_header_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}
  */
  readonly timeouts?: BedrockagentcoreAgentRuntimeTimeouts;
}
export interface BedrockagentcoreAgentRuntimeLifecycleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}
  */
  readonly idleRuntimeSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}
  */
  readonly maxLifetime?: number;
}

export function bedrockagentcoreAgentRuntimeLifecycleConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
    max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
  }
}


export function bedrockagentcoreAgentRuntimeLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeLifecycleConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeWorkloadIdentityDetails {
}

export function bedrockagentcoreAgentRuntimeWorkloadIdentityDetailsToTerraform(struct?: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreAgentRuntimeWorkloadIdentityDetailsToHclTerraform(struct?: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeWorkloadIdentityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_identity_arn - computed: true, optional: false, required: false
  public get workloadIdentityArn() {
    return this.getStringAttribute('workload_identity_arn');
  }
}

export class BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference {
    return new BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#bucket BedrockagentcoreAgentRuntime#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#prefix BedrockagentcoreAgentRuntime#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#version_id BedrockagentcoreAgentRuntime#version_id}
  */
  readonly versionId?: string;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    version_id: cdktn.stringToTerraform(struct!.versionId),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
      this._versionId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
      this._versionId = value.versionId;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#s3 BedrockagentcoreAgentRuntime#s3}
  */
  readonly s3?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cdktn.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToTerraform, true)(struct!.s3),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#entry_point BedrockagentcoreAgentRuntime#entry_point}
  */
  readonly entryPoint: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#runtime BedrockagentcoreAgentRuntime#runtime}
  */
  readonly runtime: string;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#code BedrockagentcoreAgentRuntime#code}
  */
  readonly code?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
    runtime: cdktn.stringToTerraform(struct!.runtime),
    code: cdktn.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeToTerraform, true)(struct!.code),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry_point: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeToHclTerraform, true)(struct!.code),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryPoint = undefined;
      this._runtime = undefined;
      this._code.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryPoint = value.entryPoint;
      this._runtime = value.runtime;
      this._code.internalValue = value.code;
    }
  }

  // entry_point - computed: false, optional: false, required: true
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // code - computed: false, optional: true, required: false
  private _code = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList(this, "code", false);
  public get code() {
    return this._code;
  }
  public putCode(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode[] | cdktn.IResolvable) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}
  */
  readonly containerUri: string;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_uri: cdktn.stringToTerraform(struct!.containerUri),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifact {
  /**
  * code_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#code_configuration BedrockagentcoreAgentRuntime#code_configuration}
  */
  readonly codeConfiguration?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration[] | cdktn.IResolvable;
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#container_configuration BedrockagentcoreAgentRuntime#container_configuration}
  */
  readonly containerConfiguration?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationToTerraform, true)(struct!.codeConfiguration),
    container_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform, true)(struct!.containerConfiguration),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationToHclTerraform, true)(struct!.codeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList",
    },
    container_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform, true)(struct!.containerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
    }
    if (this._containerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeConfiguration.internalValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeConfiguration.internalValue = value.codeConfiguration;
      this._containerConfiguration.internalValue = value.containerConfiguration;
    }
  }

  // code_configuration - computed: false, optional: true, required: false
  private _codeConfiguration = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList(this, "code_configuration", false);
  public get codeConfiguration() {
    return this._codeConfiguration;
  }
  public putCodeConfiguration(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration[] | cdktn.IResolvable) {
    this._codeConfiguration.internalValue = value;
  }
  public resetCodeConfiguration() {
    this._codeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationInput() {
    return this._codeConfiguration.internalValue;
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList(this, "container_configuration", false);
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#arn BedrockagentcoreAgentRuntime#arn}
  */
  readonly arn: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#workload_identities BedrockagentcoreAgentRuntime#workload_identities}
  */
  readonly workloadIdentities?: string[];
  /**
  * hosting_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#hosting_environment BedrockagentcoreAgentRuntime#hosting_environment}
  */
  readonly hostingEnvironment?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadIdentities),
    hosting_environment: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform, true)(struct!.hostingEnvironment),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform, true)(struct!.hostingEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined) {
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
  private _hostingEnvironment = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList(this, "hosting_environment", false);
  public get hostingEnvironment() {
    return this._hostingEnvironment;
  }
  public putHostingEnvironment(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#match_value_string BedrockagentcoreAgentRuntime#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#match_value_string_list BedrockagentcoreAgentRuntime#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#claim_match_operator BedrockagentcoreAgentRuntime#claim_match_operator}
  */
  readonly claimMatchOperator: string;
  /**
  * claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#claim_match_value BedrockagentcoreAgentRuntime#claim_match_value}
  */
  readonly claimMatchValue?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform, true)(struct!.claimMatchValue),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform, true)(struct!.claimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined) {
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
  private _claimMatchValue = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(this, "claim_match_value", false);
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#inbound_token_claim_name BedrockagentcoreAgentRuntime#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#inbound_token_claim_value_type BedrockagentcoreAgentRuntime#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType: string;
  /**
  * authorizing_claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#authorizing_claim_match_value BedrockagentcoreAgentRuntime#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    authorizing_claim_match_value: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform, true)(struct!.authorizingClaimMatchValue),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform, true)(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined) {
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
  private _authorizingClaimMatchValue = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(this, "authorizing_claim_match_value", false);
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#endpoint_ip_address_type BedrockagentcoreAgentRuntime#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#routing_domain BedrockagentcoreAgentRuntime#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#security_group_ids BedrockagentcoreAgentRuntime#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#subnet_ids BedrockagentcoreAgentRuntime#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#vpc_identifier BedrockagentcoreAgentRuntime#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
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


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#resource_configuration_identifier BedrockagentcoreAgentRuntime#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#managed_vpc_resource BedrockagentcoreAgentRuntime#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#self_managed_lattice_resource BedrockagentcoreAgentRuntime#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined) {
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
  private _managedVpcResource = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
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
  private _selfManagedLatticeResource = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#endpoint_ip_address_type BedrockagentcoreAgentRuntime#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#routing_domain BedrockagentcoreAgentRuntime#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#security_group_ids BedrockagentcoreAgentRuntime#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#subnet_ids BedrockagentcoreAgentRuntime#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#vpc_identifier BedrockagentcoreAgentRuntime#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
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


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#resource_configuration_identifier BedrockagentcoreAgentRuntime#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#managed_vpc_resource BedrockagentcoreAgentRuntime#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#self_managed_lattice_resource BedrockagentcoreAgentRuntime#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined) {
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
  private _managedVpcResource = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
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
  private _selfManagedLatticeResource = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#domain BedrockagentcoreAgentRuntime#domain}
  */
  readonly domain: string;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#private_endpoint BedrockagentcoreAgentRuntime#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    private_endpoint: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined) {
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
  private _privateEndpoint = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#allowed_scopes BedrockagentcoreAgentRuntime#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * allowed_workload_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#allowed_workload_configuration BedrockagentcoreAgentRuntime#allowed_workload_configuration}
  */
  readonly allowedWorkloadConfiguration?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable;
  /**
  * custom_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#custom_claim BedrockagentcoreAgentRuntime#custom_claim}
  */
  readonly customClaim?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#private_endpoint BedrockagentcoreAgentRuntime#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable;
  /**
  * private_endpoint_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#private_endpoint_overrides BedrockagentcoreAgentRuntime#private_endpoint_overrides}
  */
  readonly privateEndpointOverrides?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    allowed_workload_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform, true)(struct!.allowedWorkloadConfiguration),
    custom_claim: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform, true)(struct!.customClaim),
    private_endpoint: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
    private_endpoint_overrides: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform, true)(struct!.privateEndpointOverrides),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform, true)(struct!.allowedWorkloadConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList",
    },
    custom_claim: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform, true)(struct!.customClaim),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList",
    },
    private_endpoint_overrides: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform, true)(struct!.privateEndpointOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined) {
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
  private _allowedWorkloadConfiguration = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList(this, "allowed_workload_configuration", false);
  public get allowedWorkloadConfiguration() {
    return this._allowedWorkloadConfiguration;
  }
  public putAllowedWorkloadConfiguration(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable) {
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
  private _customClaim = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(this, "custom_claim", true);
  public get customClaim() {
    return this._customClaim;
  }
  public putCustomClaim(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable) {
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
  private _privateEndpoint = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable) {
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
  private _privateEndpointOverrides = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }
  public putPrivateEndpointOverrides(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfiguration {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#custom_jwt_authorizer BedrockagentcoreAgentRuntime#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktn.IResolvable | undefined) {
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
  private _customJwtAuthorizer = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList(this, "custom_jwt_authorizer", false);
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#access_point_arn BedrockagentcoreAgentRuntime#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#mount_path BedrockagentcoreAgentRuntime#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointToTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointToHclTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointOutputReference {
    return new BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#access_point_arn BedrockagentcoreAgentRuntime#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#mount_path BedrockagentcoreAgentRuntime#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointToTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointToHclTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointOutputReference {
    return new BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#mount_path BedrockagentcoreAgentRuntime#mount_path}
  */
  readonly mountPath: string;
}

export function bedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageToTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageToHclTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageOutputReference {
    return new BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeFilesystemConfiguration {
  /**
  * efs_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#efs_access_point BedrockagentcoreAgentRuntime#efs_access_point}
  */
  readonly efsAccessPoint?: BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable;
  /**
  * s3_files_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#s3_files_access_point BedrockagentcoreAgentRuntime#s3_files_access_point}
  */
  readonly s3FilesAccessPoint?: BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable;
  /**
  * session_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#session_storage BedrockagentcoreAgentRuntime#session_storage}
  */
  readonly sessionStorage?: BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeFilesystemConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_access_point: cdktn.listMapper(bedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointToTerraform, true)(struct!.efsAccessPoint),
    s3_files_access_point: cdktn.listMapper(bedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointToTerraform, true)(struct!.s3FilesAccessPoint),
    session_storage: cdktn.listMapper(bedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageToTerraform, true)(struct!.sessionStorage),
  }
}


export function bedrockagentcoreAgentRuntimeFilesystemConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeFilesystemConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_access_point: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointToHclTerraform, true)(struct!.efsAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointList",
    },
    s3_files_access_point: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointToHclTerraform, true)(struct!.s3FilesAccessPoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointList",
    },
    session_storage: {
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageToHclTerraform, true)(struct!.sessionStorage),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeFilesystemConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeFilesystemConfiguration | cdktn.IResolvable | undefined) {
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
  private _efsAccessPoint = new BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPointList(this, "efs_access_point", false);
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }
  public putEfsAccessPoint(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationEfsAccessPoint[] | cdktn.IResolvable) {
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
  private _s3FilesAccessPoint = new BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPointList(this, "s3_files_access_point", false);
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }
  public putS3FilesAccessPoint(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationS3FilesAccessPoint[] | cdktn.IResolvable) {
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
  private _sessionStorage = new BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorageList(this, "session_storage", false);
  public get sessionStorage() {
    return this._sessionStorage;
  }
  public putSessionStorage(value: BedrockagentcoreAgentRuntimeFilesystemConfigurationSessionStorage[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeFilesystemConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeFilesystemConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeFilesystemConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeFilesystemConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}
  */
  readonly subnets: string[];
}

export function bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference {
    return new BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}
  */
  readonly networkMode: string;
  /**
  * network_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#network_mode_config BedrockagentcoreAgentRuntime#network_mode_config}
  */
  readonly networkModeConfig?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreAgentRuntimeNetworkConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_mode: cdktn.stringToTerraform(struct!.networkMode),
    network_mode_config: cdktn.listMapper(bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToTerraform, true)(struct!.networkModeConfig),
  }
}


export function bedrockagentcoreAgentRuntimeNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform, true)(struct!.networkModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktn.IResolvable | undefined) {
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
  private _networkModeConfig = new BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
  public putNetworkModeConfig(value: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktn.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeProtocolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}
  */
  readonly serverProtocol?: string;
}

export function bedrockagentcoreAgentRuntimeProtocolConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_protocol: cdktn.stringToTerraform(struct!.serverProtocol),
  }
}


export function bedrockagentcoreAgentRuntimeProtocolConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_protocol: {
      value: cdktn.stringToHclTerraform(struct!.serverProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProtocol = this._serverProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverProtocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverProtocol = value.serverProtocol;
    }
  }

  // server_protocol - computed: false, optional: true, required: false
  private _serverProtocol?: string; 
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }
  public set serverProtocol(value: string) {
    this._serverProtocol = value;
  }
  public resetServerProtocol() {
    this._serverProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtocolInput() {
    return this._serverProtocol;
  }
}

export class BedrockagentcoreAgentRuntimeProtocolConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeRequestHeaderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}
  */
  readonly requestHeaderAllowlist?: string[];
}

export function bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_header_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeaderAllowlist),
  }
}


export function bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_header_allowlist: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeaderAllowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAllowlist = this._requestHeaderAllowlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderAllowlist = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaderAllowlist = value.requestHeaderAllowlist;
    }
  }

  // request_header_allowlist - computed: false, optional: true, required: false
  private _requestHeaderAllowlist?: string[]; 
  public get requestHeaderAllowlist() {
    return cdktn.Fn.tolist(this.getListAttribute('request_header_allowlist'));
  }
  public set requestHeaderAllowlist(value: string[]) {
    this._requestHeaderAllowlist = value;
  }
  public resetRequestHeaderAllowlist() {
    this._requestHeaderAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderAllowlistInput() {
    return this._requestHeaderAllowlist;
  }
}

export class BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#create BedrockagentcoreAgentRuntime#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#delete BedrockagentcoreAgentRuntime#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#update BedrockagentcoreAgentRuntime#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreAgentRuntimeTimeoutsToTerraform(struct?: BedrockagentcoreAgentRuntimeTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreAgentRuntimeTimeoutsToHclTerraform(struct?: BedrockagentcoreAgentRuntimeTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreAgentRuntimeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime}
*/
export class BedrockagentcoreAgentRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_agent_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreAgentRuntime to import
  * @param importFromId The id of the existing BedrockagentcoreAgentRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreAgentRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_agent_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreAgentRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreAgentRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_agent_runtime',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._agentRuntimeName = config.agentRuntimeName;
    this._description = config.description;
    this._environmentVariables = config.environmentVariables;
    this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._agentRuntimeArtifact.internalValue = config.agentRuntimeArtifact;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._filesystemConfiguration.internalValue = config.filesystemConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._protocolConfiguration.internalValue = config.protocolConfiguration;
    this._requestHeaderConfiguration.internalValue = config.requestHeaderConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: false, optional: false, required: true
  private _agentRuntimeName?: string; 
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }
  public set agentRuntimeName(value: string) {
    this._agentRuntimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuntimeNameInput() {
    return this._agentRuntimeName;
  }

  // agent_runtime_version - computed: true, optional: false, required: false
  public get agentRuntimeVersion() {
    return this.getStringAttribute('agent_runtime_version');
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

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new BedrockagentcoreAgentRuntimeLifecycleConfigurationList(this, "lifecycle_configuration", false);
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktn.IResolvable) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // workload_identity_details - computed: true, optional: false, required: false
  private _workloadIdentityDetails = new BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList(this, "workload_identity_details", false);
  public get workloadIdentityDetails() {
    return this._workloadIdentityDetails;
  }

  // agent_runtime_artifact - computed: false, optional: true, required: false
  private _agentRuntimeArtifact = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList(this, "agent_runtime_artifact", false);
  public get agentRuntimeArtifact() {
    return this._agentRuntimeArtifact;
  }
  public putAgentRuntimeArtifact(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktn.IResolvable) {
    this._agentRuntimeArtifact.internalValue = value;
  }
  public resetAgentRuntimeArtifact() {
    this._agentRuntimeArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuntimeArtifactInput() {
    return this._agentRuntimeArtifact.internalValue;
  }

  // authorizer_configuration - computed: false, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreAgentRuntimeAuthorizerConfigurationList(this, "authorizer_configuration", false);
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktn.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // filesystem_configuration - computed: false, optional: true, required: false
  private _filesystemConfiguration = new BedrockagentcoreAgentRuntimeFilesystemConfigurationList(this, "filesystem_configuration", false);
  public get filesystemConfiguration() {
    return this._filesystemConfiguration;
  }
  public putFilesystemConfiguration(value: BedrockagentcoreAgentRuntimeFilesystemConfiguration[] | cdktn.IResolvable) {
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
  private _networkConfiguration = new BedrockagentcoreAgentRuntimeNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktn.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // protocol_configuration - computed: false, optional: true, required: false
  private _protocolConfiguration = new BedrockagentcoreAgentRuntimeProtocolConfigurationList(this, "protocol_configuration", false);
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktn.IResolvable) {
    this._protocolConfiguration.internalValue = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration.internalValue;
  }

  // request_header_configuration - computed: false, optional: true, required: false
  private _requestHeaderConfiguration = new BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList(this, "request_header_configuration", false);
  public get requestHeaderConfiguration() {
    return this._requestHeaderConfiguration;
  }
  public putRequestHeaderConfiguration(value: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktn.IResolvable) {
    this._requestHeaderConfiguration.internalValue = value;
  }
  public resetRequestHeaderConfiguration() {
    this._requestHeaderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderConfigurationInput() {
    return this._requestHeaderConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreAgentRuntimeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreAgentRuntimeTimeouts) {
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
      agent_runtime_name: cdktn.stringToTerraform(this._agentRuntimeName),
      description: cdktn.stringToTerraform(this._description),
      environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
      lifecycle_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeLifecycleConfigurationToTerraform, false)(this._lifecycleConfiguration.internalValue),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      agent_runtime_artifact: cdktn.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToTerraform, true)(this._agentRuntimeArtifact.internalValue),
      authorizer_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationToTerraform, true)(this._authorizerConfiguration.internalValue),
      filesystem_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeFilesystemConfigurationToTerraform, true)(this._filesystemConfiguration.internalValue),
      network_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeNetworkConfigurationToTerraform, true)(this._networkConfiguration.internalValue),
      protocol_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeProtocolConfigurationToTerraform, true)(this._protocolConfiguration.internalValue),
      request_header_configuration: cdktn.listMapper(bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToTerraform, true)(this._requestHeaderConfiguration.internalValue),
      timeouts: bedrockagentcoreAgentRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_runtime_name: {
        value: cdktn.stringToHclTerraform(this._agentRuntimeName),
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
      environment_variables: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lifecycle_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeLifecycleConfigurationToHclTerraform, false)(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeLifecycleConfigurationList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      agent_runtime_artifact: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToHclTerraform, true)(this._agentRuntimeArtifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList",
      },
      authorizer_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationList",
      },
      filesystem_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeFilesystemConfigurationToHclTerraform, true)(this._filesystemConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeFilesystemConfigurationList",
      },
      network_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeNetworkConfigurationToHclTerraform, true)(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeNetworkConfigurationList",
      },
      protocol_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeProtocolConfigurationToHclTerraform, true)(this._protocolConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeProtocolConfigurationList",
      },
      request_header_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToHclTerraform, true)(this._requestHeaderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList",
      },
      timeouts: {
        value: bedrockagentcoreAgentRuntimeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreAgentRuntimeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
