/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}
  */
  readonly agentCollaboration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}
  */
  readonly agentResourceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}
  */
  readonly customerEncryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}
  */
  readonly foundationModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}
  */
  readonly guardrailConfiguration?: BedrockagentAgentGuardrailConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}
  */
  readonly idleSessionTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}
  */
  readonly memoryConfiguration?: BedrockagentAgentMemoryConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}
  */
  readonly prepareAgent?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}
  */
  readonly promptOverrideConfiguration?: BedrockagentAgentPromptOverrideConfiguration[] | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#region BedrockagentAgent#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}
  */
  readonly skipResourceInUseCheck?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}
  */
  readonly timeouts?: BedrockagentAgentTimeouts;
}
export interface BedrockagentAgentGuardrailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}
  */
  readonly guardrailIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}
  */
  readonly guardrailVersion?: string;
}

export function bedrockagentAgentGuardrailConfigurationToTerraform(struct?: BedrockagentAgentGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guardrail_identifier: cdktn.stringToTerraform(struct!.guardrailIdentifier),
    guardrail_version: cdktn.stringToTerraform(struct!.guardrailVersion),
  }
}


export function bedrockagentAgentGuardrailConfigurationToHclTerraform(struct?: BedrockagentAgentGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guardrail_identifier: {
      value: cdktn.stringToHclTerraform(struct!.guardrailIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail_version: {
      value: cdktn.stringToHclTerraform(struct!.guardrailVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentGuardrailConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailIdentifier = this._guardrailIdentifier;
    }
    if (this._guardrailVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailVersion = this._guardrailVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentGuardrailConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = undefined;
      this._guardrailVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = value.guardrailIdentifier;
      this._guardrailVersion = value.guardrailVersion;
    }
  }

  // guardrail_identifier - computed: false, optional: true, required: false
  private _guardrailIdentifier?: string; 
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }
  public set guardrailIdentifier(value: string) {
    this._guardrailIdentifier = value;
  }
  public resetGuardrailIdentifier() {
    this._guardrailIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdentifierInput() {
    return this._guardrailIdentifier;
  }

  // guardrail_version - computed: false, optional: true, required: false
  private _guardrailVersion?: string; 
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
  public set guardrailVersion(value: string) {
    this._guardrailVersion = value;
  }
  public resetGuardrailVersion() {
    this._guardrailVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailVersionInput() {
    return this._guardrailVersion;
  }
}

export class BedrockagentAgentGuardrailConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentGuardrailConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentGuardrailConfigurationOutputReference {
    return new BedrockagentAgentGuardrailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#max_recent_sessions BedrockagentAgent#max_recent_sessions}
  */
  readonly maxRecentSessions?: number;
}

export function bedrockagentAgentMemoryConfigurationSessionSummaryConfigurationToTerraform(struct?: BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_recent_sessions: cdktn.numberToTerraform(struct!.maxRecentSessions),
  }
}


export function bedrockagentAgentMemoryConfigurationSessionSummaryConfigurationToHclTerraform(struct?: BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_recent_sessions: {
      value: cdktn.numberToHclTerraform(struct!.maxRecentSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRecentSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRecentSessions = this._maxRecentSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRecentSessions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRecentSessions = value.maxRecentSessions;
    }
  }

  // max_recent_sessions - computed: true, optional: true, required: false
  private _maxRecentSessions?: number; 
  public get maxRecentSessions() {
    return this.getNumberAttribute('max_recent_sessions');
  }
  public set maxRecentSessions(value: number) {
    this._maxRecentSessions = value;
  }
  public resetMaxRecentSessions() {
    this._maxRecentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecentSessionsInput() {
    return this._maxRecentSessions;
  }
}

export class BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationOutputReference {
    return new BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentMemoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}
  */
  readonly enabledMemoryTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#session_summary_configuration BedrockagentAgent#session_summary_configuration}
  */
  readonly sessionSummaryConfiguration?: BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}
  */
  readonly storageDays?: number;
}

export function bedrockagentAgentMemoryConfigurationToTerraform(struct?: BedrockagentAgentMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_memory_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledMemoryTypes),
    session_summary_configuration: cdktn.listMapper(bedrockagentAgentMemoryConfigurationSessionSummaryConfigurationToTerraform, false)(struct!.sessionSummaryConfiguration),
    storage_days: cdktn.numberToTerraform(struct!.storageDays),
  }
}


export function bedrockagentAgentMemoryConfigurationToHclTerraform(struct?: BedrockagentAgentMemoryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_memory_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledMemoryTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_summary_configuration: {
      value: cdktn.listMapperHcl(bedrockagentAgentMemoryConfigurationSessionSummaryConfigurationToHclTerraform, false)(struct!.sessionSummaryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationList",
    },
    storage_days: {
      value: cdktn.numberToHclTerraform(struct!.storageDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentMemoryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentMemoryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledMemoryTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledMemoryTypes = this._enabledMemoryTypes;
    }
    if (this._sessionSummaryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSummaryConfiguration = this._sessionSummaryConfiguration?.internalValue;
    }
    if (this._storageDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDays = this._storageDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentMemoryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledMemoryTypes = undefined;
      this._sessionSummaryConfiguration.internalValue = undefined;
      this._storageDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledMemoryTypes = value.enabledMemoryTypes;
      this._sessionSummaryConfiguration.internalValue = value.sessionSummaryConfiguration;
      this._storageDays = value.storageDays;
    }
  }

  // enabled_memory_types - computed: true, optional: true, required: false
  private _enabledMemoryTypes?: string[]; 
  public get enabledMemoryTypes() {
    return this.getListAttribute('enabled_memory_types');
  }
  public set enabledMemoryTypes(value: string[]) {
    this._enabledMemoryTypes = value;
  }
  public resetEnabledMemoryTypes() {
    this._enabledMemoryTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMemoryTypesInput() {
    return this._enabledMemoryTypes;
  }

  // session_summary_configuration - computed: true, optional: true, required: false
  private _sessionSummaryConfiguration = new BedrockagentAgentMemoryConfigurationSessionSummaryConfigurationList(this, "session_summary_configuration", false);
  public get sessionSummaryConfiguration() {
    return this._sessionSummaryConfiguration;
  }
  public putSessionSummaryConfiguration(value: BedrockagentAgentMemoryConfigurationSessionSummaryConfiguration[] | cdktn.IResolvable) {
    this._sessionSummaryConfiguration.internalValue = value;
  }
  public resetSessionSummaryConfiguration() {
    this._sessionSummaryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSummaryConfigurationInput() {
    return this._sessionSummaryConfiguration.internalValue;
  }

  // storage_days - computed: true, optional: true, required: false
  private _storageDays?: number; 
  public get storageDays() {
    return this.getNumberAttribute('storage_days');
  }
  public set storageDays(value: number) {
    this._storageDays = value;
  }
  public resetStorageDays() {
    this._storageDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDaysInput() {
    return this._storageDays;
  }
}

export class BedrockagentAgentMemoryConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentMemoryConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentMemoryConfigurationOutputReference {
    return new BedrockagentAgentMemoryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}
  */
  readonly stopSequences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}
  */
  readonly topK?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktn.numberToTerraform(struct!.maxLength),
    stop_sequences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stopSequences),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_k: cdktn.numberToTerraform(struct!.topK),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktn.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_sequences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stopSequences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._stopSequences !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSequences = this._stopSequences;
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

  public set internalValue(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLength = undefined;
      this._stopSequences = undefined;
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
      this._maxLength = value.maxLength;
      this._stopSequences = value.stopSequences;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
    }
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // stop_sequences - computed: true, optional: true, required: false
  private _stopSequences?: string[]; 
  public get stopSequences() {
    return this.getListAttribute('stop_sequences');
  }
  public set stopSequences(value: string[]) {
    this._stopSequences = value;
  }
  public resetStopSequences() {
    this._stopSequences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSequencesInput() {
    return this._stopSequences;
  }

  // temperature - computed: true, optional: true, required: false
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

  // top_k - computed: true, optional: true, required: false
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

  // top_p - computed: true, optional: true, required: false
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

export class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference {
    return new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentPromptOverrideConfigurationPromptConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}
  */
  readonly basePromptTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}
  */
  readonly inferenceConfiguration?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}
  */
  readonly parserMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}
  */
  readonly promptCreationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}
  */
  readonly promptState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}
  */
  readonly promptType?: string;
}

export function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_prompt_template: cdktn.stringToTerraform(struct!.basePromptTemplate),
    inference_configuration: cdktn.listMapper(bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToTerraform, false)(struct!.inferenceConfiguration),
    parser_mode: cdktn.stringToTerraform(struct!.parserMode),
    prompt_creation_mode: cdktn.stringToTerraform(struct!.promptCreationMode),
    prompt_state: cdktn.stringToTerraform(struct!.promptState),
    prompt_type: cdktn.stringToTerraform(struct!.promptType),
  }
}


export function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_prompt_template: {
      value: cdktn.stringToHclTerraform(struct!.basePromptTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_configuration: {
      value: cdktn.listMapperHcl(bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToHclTerraform, false)(struct!.inferenceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList",
    },
    parser_mode: {
      value: cdktn.stringToHclTerraform(struct!.parserMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_creation_mode: {
      value: cdktn.stringToHclTerraform(struct!.promptCreationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_state: {
      value: cdktn.stringToHclTerraform(struct!.promptState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_type: {
      value: cdktn.stringToHclTerraform(struct!.promptType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePromptTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePromptTemplate = this._basePromptTemplate;
    }
    if (this._inferenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
    }
    if (this._parserMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserMode = this._parserMode;
    }
    if (this._promptCreationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptCreationMode = this._promptCreationMode;
    }
    if (this._promptState !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptState = this._promptState;
    }
    if (this._promptType !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptType = this._promptType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePromptTemplate = undefined;
      this._inferenceConfiguration.internalValue = undefined;
      this._parserMode = undefined;
      this._promptCreationMode = undefined;
      this._promptState = undefined;
      this._promptType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePromptTemplate = value.basePromptTemplate;
      this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
      this._parserMode = value.parserMode;
      this._promptCreationMode = value.promptCreationMode;
      this._promptState = value.promptState;
      this._promptType = value.promptType;
    }
  }

  // base_prompt_template - computed: true, optional: true, required: false
  private _basePromptTemplate?: string; 
  public get basePromptTemplate() {
    return this.getStringAttribute('base_prompt_template');
  }
  public set basePromptTemplate(value: string) {
    this._basePromptTemplate = value;
  }
  public resetBasePromptTemplate() {
    this._basePromptTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePromptTemplateInput() {
    return this._basePromptTemplate;
  }

  // inference_configuration - computed: true, optional: true, required: false
  private _inferenceConfiguration = new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList(this, "inference_configuration", false);
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }
  public putInferenceConfiguration(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktn.IResolvable) {
    this._inferenceConfiguration.internalValue = value;
  }
  public resetInferenceConfiguration() {
    this._inferenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigurationInput() {
    return this._inferenceConfiguration.internalValue;
  }

  // parser_mode - computed: true, optional: true, required: false
  private _parserMode?: string; 
  public get parserMode() {
    return this.getStringAttribute('parser_mode');
  }
  public set parserMode(value: string) {
    this._parserMode = value;
  }
  public resetParserMode() {
    this._parserMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserModeInput() {
    return this._parserMode;
  }

  // prompt_creation_mode - computed: true, optional: true, required: false
  private _promptCreationMode?: string; 
  public get promptCreationMode() {
    return this.getStringAttribute('prompt_creation_mode');
  }
  public set promptCreationMode(value: string) {
    this._promptCreationMode = value;
  }
  public resetPromptCreationMode() {
    this._promptCreationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptCreationModeInput() {
    return this._promptCreationMode;
  }

  // prompt_state - computed: true, optional: true, required: false
  private _promptState?: string; 
  public get promptState() {
    return this.getStringAttribute('prompt_state');
  }
  public set promptState(value: string) {
    this._promptState = value;
  }
  public resetPromptState() {
    this._promptState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptStateInput() {
    return this._promptState;
  }

  // prompt_type - computed: true, optional: true, required: false
  private _promptType?: string; 
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
  public set promptType(value: string) {
    this._promptType = value;
  }
  public resetPromptType() {
    this._promptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypeInput() {
    return this._promptType;
  }
}

export class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference {
    return new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentPromptOverrideConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}
  */
  readonly overrideLambda?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}
  */
  readonly promptConfigurations?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktn.IResolvable;
}

export function bedrockagentAgentPromptOverrideConfigurationToTerraform(struct?: BedrockagentAgentPromptOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_lambda: cdktn.stringToTerraform(struct!.overrideLambda),
    prompt_configurations: cdktn.listMapper(bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToTerraform, false)(struct!.promptConfigurations),
  }
}


export function bedrockagentAgentPromptOverrideConfigurationToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_lambda: {
      value: cdktn.stringToHclTerraform(struct!.overrideLambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_configurations: {
      value: cdktn.listMapperHcl(bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToHclTerraform, false)(struct!.promptConfigurations),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentPromptOverrideConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentAgentPromptOverrideConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideLambda !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideLambda = this._overrideLambda;
    }
    if (this._promptConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptConfigurations = this._promptConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentPromptOverrideConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideLambda = undefined;
      this._promptConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideLambda = value.overrideLambda;
      this._promptConfigurations.internalValue = value.promptConfigurations;
    }
  }

  // override_lambda - computed: true, optional: true, required: false
  private _overrideLambda?: string; 
  public get overrideLambda() {
    return this.getStringAttribute('override_lambda');
  }
  public set overrideLambda(value: string) {
    this._overrideLambda = value;
  }
  public resetOverrideLambda() {
    this._overrideLambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLambdaInput() {
    return this._overrideLambda;
  }

  // prompt_configurations - computed: true, optional: true, required: false
  private _promptConfigurations = new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList(this, "prompt_configurations", true);
  public get promptConfigurations() {
    return this._promptConfigurations;
  }
  public putPromptConfigurations(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktn.IResolvable) {
    this._promptConfigurations.internalValue = value;
  }
  public resetPromptConfigurations() {
    this._promptConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptConfigurationsInput() {
    return this._promptConfigurations.internalValue;
  }
}

export class BedrockagentAgentPromptOverrideConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentAgentPromptOverrideConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentAgentPromptOverrideConfigurationOutputReference {
    return new BedrockagentAgentPromptOverrideConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}
  */
  readonly update?: string;
}

export function bedrockagentAgentTimeoutsToTerraform(struct?: BedrockagentAgentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bedrockagentAgentTimeoutsToHclTerraform(struct?: BedrockagentAgentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class BedrockagentAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentAgentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent}
*/
export class BedrockagentAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentAgent to import
  * @param importFromId The id of the existing BedrockagentAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentAgentConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_agent',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._agentCollaboration = config.agentCollaboration;
    this._agentName = config.agentName;
    this._agentResourceRoleArn = config.agentResourceRoleArn;
    this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
    this._description = config.description;
    this._foundationModel = config.foundationModel;
    this._guardrailConfiguration.internalValue = config.guardrailConfiguration;
    this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
    this._instruction = config.instruction;
    this._memoryConfiguration.internalValue = config.memoryConfiguration;
    this._prepareAgent = config.prepareAgent;
    this._promptOverrideConfiguration.internalValue = config.promptOverrideConfiguration;
    this._region = config.region;
    this._skipResourceInUseCheck = config.skipResourceInUseCheck;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arn - computed: true, optional: false, required: false
  public get agentArn() {
    return this.getStringAttribute('agent_arn');
  }

  // agent_collaboration - computed: true, optional: true, required: false
  private _agentCollaboration?: string; 
  public get agentCollaboration() {
    return this.getStringAttribute('agent_collaboration');
  }
  public set agentCollaboration(value: string) {
    this._agentCollaboration = value;
  }
  public resetAgentCollaboration() {
    this._agentCollaboration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCollaborationInput() {
    return this._agentCollaboration;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // agent_resource_role_arn - computed: false, optional: false, required: true
  private _agentResourceRoleArn?: string; 
  public get agentResourceRoleArn() {
    return this.getStringAttribute('agent_resource_role_arn');
  }
  public set agentResourceRoleArn(value: string) {
    this._agentResourceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResourceRoleArnInput() {
    return this._agentResourceRoleArn;
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // customer_encryption_key_arn - computed: false, optional: true, required: false
  private _customerEncryptionKeyArn?: string; 
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }
  public set customerEncryptionKeyArn(value: string) {
    this._customerEncryptionKeyArn = value;
  }
  public resetCustomerEncryptionKeyArn() {
    this._customerEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionKeyArnInput() {
    return this._customerEncryptionKeyArn;
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

  // foundation_model - computed: false, optional: false, required: true
  private _foundationModel?: string; 
  public get foundationModel() {
    return this.getStringAttribute('foundation_model');
  }
  public set foundationModel(value: string) {
    this._foundationModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationModelInput() {
    return this._foundationModel;
  }

  // guardrail_configuration - computed: false, optional: true, required: false
  private _guardrailConfiguration = new BedrockagentAgentGuardrailConfigurationList(this, "guardrail_configuration", false);
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }
  public putGuardrailConfiguration(value: BedrockagentAgentGuardrailConfiguration[] | cdktn.IResolvable) {
    this._guardrailConfiguration.internalValue = value;
  }
  public resetGuardrailConfiguration() {
    this._guardrailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailConfigurationInput() {
    return this._guardrailConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_session_ttl_in_seconds - computed: true, optional: true, required: false
  private _idleSessionTtlInSeconds?: number; 
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }
  public set idleSessionTtlInSeconds(value: number) {
    this._idleSessionTtlInSeconds = value;
  }
  public resetIdleSessionTtlInSeconds() {
    this._idleSessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInSecondsInput() {
    return this._idleSessionTtlInSeconds;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // memory_configuration - computed: true, optional: true, required: false
  private _memoryConfiguration = new BedrockagentAgentMemoryConfigurationList(this, "memory_configuration", false);
  public get memoryConfiguration() {
    return this._memoryConfiguration;
  }
  public putMemoryConfiguration(value: BedrockagentAgentMemoryConfiguration[] | cdktn.IResolvable) {
    this._memoryConfiguration.internalValue = value;
  }
  public resetMemoryConfiguration() {
    this._memoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryConfigurationInput() {
    return this._memoryConfiguration.internalValue;
  }

  // prepare_agent - computed: true, optional: true, required: false
  private _prepareAgent?: boolean | cdktn.IResolvable; 
  public get prepareAgent() {
    return this.getBooleanAttribute('prepare_agent');
  }
  public set prepareAgent(value: boolean | cdktn.IResolvable) {
    this._prepareAgent = value;
  }
  public resetPrepareAgent() {
    this._prepareAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareAgentInput() {
    return this._prepareAgent;
  }

  // prepared_at - computed: true, optional: false, required: false
  public get preparedAt() {
    return this.getStringAttribute('prepared_at');
  }

  // prompt_override_configuration - computed: true, optional: true, required: false
  private _promptOverrideConfiguration = new BedrockagentAgentPromptOverrideConfigurationList(this, "prompt_override_configuration", false);
  public get promptOverrideConfiguration() {
    return this._promptOverrideConfiguration;
  }
  public putPromptOverrideConfiguration(value: BedrockagentAgentPromptOverrideConfiguration[] | cdktn.IResolvable) {
    this._promptOverrideConfiguration.internalValue = value;
  }
  public resetPromptOverrideConfiguration() {
    this._promptOverrideConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptOverrideConfigurationInput() {
    return this._promptOverrideConfiguration.internalValue;
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

  // skip_resource_in_use_check - computed: true, optional: true, required: false
  private _skipResourceInUseCheck?: boolean | cdktn.IResolvable; 
  public get skipResourceInUseCheck() {
    return this.getBooleanAttribute('skip_resource_in_use_check');
  }
  public set skipResourceInUseCheck(value: boolean | cdktn.IResolvable) {
    this._skipResourceInUseCheck = value;
  }
  public resetSkipResourceInUseCheck() {
    this._skipResourceInUseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResourceInUseCheckInput() {
    return this._skipResourceInUseCheck;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentAgentTimeouts) {
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
      agent_collaboration: cdktn.stringToTerraform(this._agentCollaboration),
      agent_name: cdktn.stringToTerraform(this._agentName),
      agent_resource_role_arn: cdktn.stringToTerraform(this._agentResourceRoleArn),
      customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
      description: cdktn.stringToTerraform(this._description),
      foundation_model: cdktn.stringToTerraform(this._foundationModel),
      guardrail_configuration: cdktn.listMapper(bedrockagentAgentGuardrailConfigurationToTerraform, false)(this._guardrailConfiguration.internalValue),
      idle_session_ttl_in_seconds: cdktn.numberToTerraform(this._idleSessionTtlInSeconds),
      instruction: cdktn.stringToTerraform(this._instruction),
      memory_configuration: cdktn.listMapper(bedrockagentAgentMemoryConfigurationToTerraform, false)(this._memoryConfiguration.internalValue),
      prepare_agent: cdktn.booleanToTerraform(this._prepareAgent),
      prompt_override_configuration: cdktn.listMapper(bedrockagentAgentPromptOverrideConfigurationToTerraform, false)(this._promptOverrideConfiguration.internalValue),
      region: cdktn.stringToTerraform(this._region),
      skip_resource_in_use_check: cdktn.booleanToTerraform(this._skipResourceInUseCheck),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: bedrockagentAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_collaboration: {
        value: cdktn.stringToHclTerraform(this._agentCollaboration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_name: {
        value: cdktn.stringToHclTerraform(this._agentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_resource_role_arn: {
        value: cdktn.stringToHclTerraform(this._agentResourceRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._customerEncryptionKeyArn),
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
      foundation_model: {
        value: cdktn.stringToHclTerraform(this._foundationModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrail_configuration: {
        value: cdktn.listMapperHcl(bedrockagentAgentGuardrailConfigurationToHclTerraform, false)(this._guardrailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentGuardrailConfigurationList",
      },
      idle_session_ttl_in_seconds: {
        value: cdktn.numberToHclTerraform(this._idleSessionTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instruction: {
        value: cdktn.stringToHclTerraform(this._instruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_configuration: {
        value: cdktn.listMapperHcl(bedrockagentAgentMemoryConfigurationToHclTerraform, false)(this._memoryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentMemoryConfigurationList",
      },
      prepare_agent: {
        value: cdktn.booleanToHclTerraform(this._prepareAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prompt_override_configuration: {
        value: cdktn.listMapperHcl(bedrockagentAgentPromptOverrideConfigurationToHclTerraform, false)(this._promptOverrideConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentPromptOverrideConfigurationList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_resource_in_use_check: {
        value: cdktn.booleanToHclTerraform(this._skipResourceInUseCheck),
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
      timeouts: {
        value: bedrockagentAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
