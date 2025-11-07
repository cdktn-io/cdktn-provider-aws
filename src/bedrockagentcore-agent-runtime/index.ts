/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreAgentRuntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}
  */
  readonly agentRuntimeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * agent_runtime_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}
  */
  readonly agentRuntimeArtifact?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktf.IResolvable;
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktf.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}
  */
  readonly networkConfiguration?: BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * protocol_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}
  */
  readonly protocolConfiguration?: BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktf.IResolvable;
  /**
  * request_header_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}
  */
  readonly timeouts?: BedrockagentcoreAgentRuntimeTimeouts;
}
export interface BedrockagentcoreAgentRuntimeLifecycleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}
  */
  readonly idleRuntimeSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}
  */
  readonly maxLifetime?: number;
}

export function bedrockagentcoreAgentRuntimeLifecycleConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_runtime_session_timeout: cdktf.numberToTerraform(struct!.idleRuntimeSessionTimeout),
    max_lifetime: cdktf.numberToTerraform(struct!.maxLifetime),
  }
}


export function bedrockagentcoreAgentRuntimeLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_runtime_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeLifecycleConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = undefined;
      this._maxLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class BedrockagentcoreAgentRuntimeLifecycleConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeWorkloadIdentityDetails {
}

export function bedrockagentcoreAgentRuntimeWorkloadIdentityDetailsToTerraform(struct?: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bedrockagentcoreAgentRuntimeWorkloadIdentityDetailsToHclTerraform(struct?: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference extends cdktf.ComplexObject {
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

export class BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList extends cdktf.ComplexList {

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
  public get(index: number): BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference {
    return new BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}
  */
  readonly containerUri: string;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_uri: cdktf.stringToTerraform(struct!.containerUri),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_uri: {
      value: cdktf.stringToHclTerraform(struct!.containerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAgentRuntimeArtifact {
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#container_configuration BedrockagentcoreAgentRuntime#container_configuration}
  */
  readonly containerConfiguration?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform, true)(struct!.containerConfiguration),
  }
}


export function bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_configuration: {
      value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform, true)(struct!.containerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
  private _containerConfiguration = new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList(this, "container_configuration", false);
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration[] | cdktf.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference {
    return new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}
  */
  readonly discoveryUrl: string;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClients),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable | undefined {
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
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._discoveryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._discoveryUrl = value.discoveryUrl;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_audience'));
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
    return cdktf.Fn.tolist(this.getListAttribute('allowed_clients'));
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
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeAuthorizerConfiguration {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#custom_jwt_authorizer BedrockagentcoreAgentRuntime#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable;
}

export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_jwt_authorizer: cdktf.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreAgentRuntimeAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeAuthorizerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
  public putCustomJwtAuthorizer(value: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer[] | cdktf.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeAuthorizerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}
  */
  readonly subnets: string[];
}

export function bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktf.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig | cdktf.IResolvable | undefined) {
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

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference {
    return new BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}
  */
  readonly networkMode: string;
  /**
  * network_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_mode_config BedrockagentcoreAgentRuntime#network_mode_config}
  */
  readonly networkModeConfig?: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable;
}

export function bedrockagentcoreAgentRuntimeNetworkConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_mode_config: cdktf.listMapper(bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToTerraform, true)(struct!.networkModeConfig),
  }
}


export function bedrockagentcoreAgentRuntimeNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode_config: {
      value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform, true)(struct!.networkModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._networkModeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
  public putNetworkModeConfig(value: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable) {
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

export class BedrockagentcoreAgentRuntimeNetworkConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeProtocolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}
  */
  readonly serverProtocol?: string;
}

export function bedrockagentcoreAgentRuntimeProtocolConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_protocol: cdktf.stringToTerraform(struct!.serverProtocol),
  }
}


export function bedrockagentcoreAgentRuntimeProtocolConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_protocol: {
      value: cdktf.stringToHclTerraform(struct!.serverProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeProtocolConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class BedrockagentcoreAgentRuntimeProtocolConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeRequestHeaderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}
  */
  readonly requestHeaderAllowlist?: string[];
}

export function bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToTerraform(struct?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeaderAllowlist),
  }
}


export function bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToHclTerraform(struct?: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeaderAllowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderAllowlist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
    return cdktf.Fn.tolist(this.getListAttribute('request_header_allowlist'));
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

export class BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference {
    return new BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreAgentRuntimeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#create BedrockagentcoreAgentRuntime#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#delete BedrockagentcoreAgentRuntime#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#update BedrockagentcoreAgentRuntime#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreAgentRuntimeTimeoutsToTerraform(struct?: BedrockagentcoreAgentRuntimeTimeouts | cdktf.IResolvable): any {
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


export function bedrockagentcoreAgentRuntimeTimeoutsToHclTerraform(struct?: BedrockagentcoreAgentRuntimeTimeouts | cdktf.IResolvable): any {
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

export class BedrockagentcoreAgentRuntimeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreAgentRuntimeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreAgentRuntimeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime}
*/
export class BedrockagentcoreAgentRuntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_agent_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreAgentRuntime to import
  * @param importFromId The id of the existing BedrockagentcoreAgentRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreAgentRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_agent_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime} Resource
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
        providerVersion: '6.20.0',
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
  public putLifecycleConfiguration(value: BedrockagentcoreAgentRuntimeLifecycleConfiguration[] | cdktf.IResolvable) {
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
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
  public putAgentRuntimeArtifact(value: BedrockagentcoreAgentRuntimeAgentRuntimeArtifact[] | cdktf.IResolvable) {
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
  public putAuthorizerConfiguration(value: BedrockagentcoreAgentRuntimeAuthorizerConfiguration[] | cdktf.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new BedrockagentcoreAgentRuntimeNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreAgentRuntimeNetworkConfiguration[] | cdktf.IResolvable) {
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
  public putProtocolConfiguration(value: BedrockagentcoreAgentRuntimeProtocolConfiguration[] | cdktf.IResolvable) {
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
  public putRequestHeaderConfiguration(value: BedrockagentcoreAgentRuntimeRequestHeaderConfiguration[] | cdktf.IResolvable) {
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
      agent_runtime_name: cdktf.stringToTerraform(this._agentRuntimeName),
      description: cdktf.stringToTerraform(this._description),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      lifecycle_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeLifecycleConfigurationToTerraform, false)(this._lifecycleConfiguration.internalValue),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      agent_runtime_artifact: cdktf.listMapper(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToTerraform, true)(this._agentRuntimeArtifact.internalValue),
      authorizer_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeAuthorizerConfigurationToTerraform, true)(this._authorizerConfiguration.internalValue),
      network_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeNetworkConfigurationToTerraform, true)(this._networkConfiguration.internalValue),
      protocol_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeProtocolConfigurationToTerraform, true)(this._protocolConfiguration.internalValue),
      request_header_configuration: cdktf.listMapper(bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToTerraform, true)(this._requestHeaderConfiguration.internalValue),
      timeouts: bedrockagentcoreAgentRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_runtime_name: {
        value: cdktf.stringToHclTerraform(this._agentRuntimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lifecycle_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeLifecycleConfigurationToHclTerraform, false)(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeLifecycleConfigurationList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      agent_runtime_artifact: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeAgentRuntimeArtifactToHclTerraform, true)(this._agentRuntimeArtifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList",
      },
      authorizer_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeAuthorizerConfigurationToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeAuthorizerConfigurationList",
      },
      network_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeNetworkConfigurationToHclTerraform, true)(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeNetworkConfigurationList",
      },
      protocol_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeProtocolConfigurationToHclTerraform, true)(this._protocolConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreAgentRuntimeProtocolConfigurationList",
      },
      request_header_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreAgentRuntimeRequestHeaderConfigurationToHclTerraform, true)(this._requestHeaderConfiguration.internalValue),
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
