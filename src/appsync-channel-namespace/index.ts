/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppsyncChannelNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}
  */
  readonly codeHandlers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#region AppsyncChannelNamespace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * handler_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}
  */
  readonly handlerConfigs?: AppsyncChannelNamespaceHandlerConfigs[] | cdktn.IResolvable;
  /**
  * publish_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#publish_auth_mode AppsyncChannelNamespace#publish_auth_mode}
  */
  readonly publishAuthMode?: AppsyncChannelNamespacePublishAuthMode[] | cdktn.IResolvable;
  /**
  * subscribe_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#subscribe_auth_mode AppsyncChannelNamespace#subscribe_auth_mode}
  */
  readonly subscribeAuthMode?: AppsyncChannelNamespaceSubscribeAuthMode[] | cdktn.IResolvable;
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: false, optional: true, required: false
  private _invokeType?: string; 
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}
  */
  readonly dataSourceName: string;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig[] | cdktn.IResolvable;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToTerraform, true)(struct!.lambdaConfig),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToHclTerraform, true)(struct!.lambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: false, optional: false, required: true
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig[] | cdktn.IResolvable) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}
  */
  readonly behavior: string;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}
  */
  readonly integration?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration[] | cdktn.IResolvable;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToTerraform, true)(struct!.integration),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToHclTerraform, true)(struct!.integration),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList(this, "integration", false);
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration[] | cdktn.IResolvable) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnPublish[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: false, optional: true, required: false
  private _invokeType?: string; 
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}
  */
  readonly dataSourceName: string;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig[] | cdktn.IResolvable;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToTerraform, true)(struct!.lambdaConfig),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToHclTerraform, true)(struct!.lambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: false, optional: false, required: true
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig[] | cdktn.IResolvable) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}
  */
  readonly behavior: string;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}
  */
  readonly integration?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration[] | cdktn.IResolvable;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToTerraform, true)(struct!.integration),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToHclTerraform, true)(struct!.integration),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList(this, "integration", false);
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration[] | cdktn.IResolvable) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigsOnSubscribe[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceHandlerConfigs {
  /**
  * on_publish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}
  */
  readonly onPublish?: AppsyncChannelNamespaceHandlerConfigsOnPublish[] | cdktn.IResolvable;
  /**
  * on_subscribe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}
  */
  readonly onSubscribe?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe[] | cdktn.IResolvable;
}

export function appsyncChannelNamespaceHandlerConfigsToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_publish: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnPublishToTerraform, true)(struct!.onPublish),
    on_subscribe: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsOnSubscribeToTerraform, true)(struct!.onSubscribe),
  }
}


export function appsyncChannelNamespaceHandlerConfigsToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_publish: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnPublishToHclTerraform, true)(struct!.onPublish),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublishList",
    },
    on_subscribe: {
      value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsOnSubscribeToHclTerraform, true)(struct!.onSubscribe),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPublish = this._onPublish?.internalValue;
    }
    if (this._onSubscribe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSubscribe = this._onSubscribe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = undefined;
      this._onSubscribe.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = value.onPublish;
      this._onSubscribe.internalValue = value.onSubscribe;
    }
  }

  // on_publish - computed: false, optional: true, required: false
  private _onPublish = new AppsyncChannelNamespaceHandlerConfigsOnPublishList(this, "on_publish", false);
  public get onPublish() {
    return this._onPublish;
  }
  public putOnPublish(value: AppsyncChannelNamespaceHandlerConfigsOnPublish[] | cdktn.IResolvable) {
    this._onPublish.internalValue = value;
  }
  public resetOnPublish() {
    this._onPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPublishInput() {
    return this._onPublish.internalValue;
  }

  // on_subscribe - computed: false, optional: true, required: false
  private _onSubscribe = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeList(this, "on_subscribe", false);
  public get onSubscribe() {
    return this._onSubscribe;
  }
  public putOnSubscribe(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribe[] | cdktn.IResolvable) {
    this._onSubscribe.internalValue = value;
  }
  public resetOnSubscribe() {
    this._onSubscribe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSubscribeInput() {
    return this._onSubscribe.internalValue;
  }
}

export class AppsyncChannelNamespaceHandlerConfigsList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceHandlerConfigs[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceHandlerConfigsOutputReference {
    return new AppsyncChannelNamespaceHandlerConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespacePublishAuthMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}
  */
  readonly authType: string;
}

export function appsyncChannelNamespacePublishAuthModeToTerraform(struct?: AppsyncChannelNamespacePublishAuthMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncChannelNamespacePublishAuthModeToHclTerraform(struct?: AppsyncChannelNamespacePublishAuthMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespacePublishAuthModeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespacePublishAuthMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespacePublishAuthMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncChannelNamespacePublishAuthModeList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespacePublishAuthMode[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespacePublishAuthModeOutputReference {
    return new AppsyncChannelNamespacePublishAuthModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceSubscribeAuthMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}
  */
  readonly authType: string;
}

export function appsyncChannelNamespaceSubscribeAuthModeToTerraform(struct?: AppsyncChannelNamespaceSubscribeAuthMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncChannelNamespaceSubscribeAuthModeToHclTerraform(struct?: AppsyncChannelNamespaceSubscribeAuthMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceSubscribeAuthModeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceSubscribeAuthMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceSubscribeAuthMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncChannelNamespaceSubscribeAuthModeList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceSubscribeAuthMode[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceSubscribeAuthModeOutputReference {
    return new AppsyncChannelNamespaceSubscribeAuthModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace aws_appsync_channel_namespace}
*/
export class AppsyncChannelNamespace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_channel_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncChannelNamespace to import
  * @param importFromId The id of the existing AppsyncChannelNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncChannelNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_channel_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace aws_appsync_channel_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncChannelNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncChannelNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_channel_namespace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.44.0',
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
    this._apiId = config.apiId;
    this._codeHandlers = config.codeHandlers;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._handlerConfigs.internalValue = config.handlerConfigs;
    this._publishAuthMode.internalValue = config.publishAuthMode;
    this._subscribeAuthMode.internalValue = config.subscribeAuthMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // channel_namespace_arn - computed: true, optional: false, required: false
  public get channelNamespaceArn() {
    return this.getStringAttribute('channel_namespace_arn');
  }

  // code_handlers - computed: false, optional: true, required: false
  private _codeHandlers?: string; 
  public get codeHandlers() {
    return this.getStringAttribute('code_handlers');
  }
  public set codeHandlers(value: string) {
    this._codeHandlers = value;
  }
  public resetCodeHandlers() {
    this._codeHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHandlersInput() {
    return this._codeHandlers;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // handler_configs - computed: false, optional: true, required: false
  private _handlerConfigs = new AppsyncChannelNamespaceHandlerConfigsList(this, "handler_configs", false);
  public get handlerConfigs() {
    return this._handlerConfigs;
  }
  public putHandlerConfigs(value: AppsyncChannelNamespaceHandlerConfigs[] | cdktn.IResolvable) {
    this._handlerConfigs.internalValue = value;
  }
  public resetHandlerConfigs() {
    this._handlerConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerConfigsInput() {
    return this._handlerConfigs.internalValue;
  }

  // publish_auth_mode - computed: false, optional: true, required: false
  private _publishAuthMode = new AppsyncChannelNamespacePublishAuthModeList(this, "publish_auth_mode", false);
  public get publishAuthMode() {
    return this._publishAuthMode;
  }
  public putPublishAuthMode(value: AppsyncChannelNamespacePublishAuthMode[] | cdktn.IResolvable) {
    this._publishAuthMode.internalValue = value;
  }
  public resetPublishAuthMode() {
    this._publishAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAuthModeInput() {
    return this._publishAuthMode.internalValue;
  }

  // subscribe_auth_mode - computed: false, optional: true, required: false
  private _subscribeAuthMode = new AppsyncChannelNamespaceSubscribeAuthModeList(this, "subscribe_auth_mode", false);
  public get subscribeAuthMode() {
    return this._subscribeAuthMode;
  }
  public putSubscribeAuthMode(value: AppsyncChannelNamespaceSubscribeAuthMode[] | cdktn.IResolvable) {
    this._subscribeAuthMode.internalValue = value;
  }
  public resetSubscribeAuthMode() {
    this._subscribeAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeAuthModeInput() {
    return this._subscribeAuthMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      code_handlers: cdktn.stringToTerraform(this._codeHandlers),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      handler_configs: cdktn.listMapper(appsyncChannelNamespaceHandlerConfigsToTerraform, true)(this._handlerConfigs.internalValue),
      publish_auth_mode: cdktn.listMapper(appsyncChannelNamespacePublishAuthModeToTerraform, true)(this._publishAuthMode.internalValue),
      subscribe_auth_mode: cdktn.listMapper(appsyncChannelNamespaceSubscribeAuthModeToTerraform, true)(this._subscribeAuthMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_handlers: {
        value: cdktn.stringToHclTerraform(this._codeHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      handler_configs: {
        value: cdktn.listMapperHcl(appsyncChannelNamespaceHandlerConfigsToHclTerraform, true)(this._handlerConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncChannelNamespaceHandlerConfigsList",
      },
      publish_auth_mode: {
        value: cdktn.listMapperHcl(appsyncChannelNamespacePublishAuthModeToHclTerraform, true)(this._publishAuthMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncChannelNamespacePublishAuthModeList",
      },
      subscribe_auth_mode: {
        value: cdktn.listMapperHcl(appsyncChannelNamespaceSubscribeAuthModeToHclTerraform, true)(this._subscribeAuthMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncChannelNamespaceSubscribeAuthModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
