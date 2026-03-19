/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigConfigurationRecorderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#id ConfigConfigurationRecorder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#region ConfigConfigurationRecorder#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}
  */
  readonly roleArn: string;
  /**
  * recording_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}
  */
  readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
  /**
  * recording_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}
  */
  readonly recordingMode?: ConfigConfigurationRecorderRecordingMode;
}
export interface ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}

export class ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList extends cdktn.ComplexList {
  public internalValue? : ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference {
    return new ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigConfigurationRecorderRecordingGroupRecordingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}
  */
  readonly useOnly?: string;
}

export function configConfigurationRecorderRecordingGroupRecordingStrategyToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_only: cdktn.stringToTerraform(struct!.useOnly),
  }
}


export function configConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_only: {
      value: cdktn.stringToHclTerraform(struct!.useOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOnly = this._useOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useOnly = value.useOnly;
    }
  }

  // use_only - computed: false, optional: true, required: false
  private _useOnly?: string; 
  public get useOnly() {
    return this.getStringAttribute('use_only');
  }
  public set useOnly(value: string) {
    this._useOnly = value;
  }
  public resetUseOnly() {
    this._useOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOnlyInput() {
    return this._useOnly;
  }
}

export class ConfigConfigurationRecorderRecordingGroupRecordingStrategyList extends cdktn.ComplexList {
  public internalValue? : ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference {
    return new ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigConfigurationRecorderRecordingGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}
  */
  readonly allSupported?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
  */
  readonly includeGlobalResourceTypes?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * exclusion_by_resource_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}
  */
  readonly exclusionByResourceTypes?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktn.IResolvable;
  /**
  * recording_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}
  */
  readonly recordingStrategy?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktn.IResolvable;
}

export function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_supported: cdktn.booleanToTerraform(struct!.allSupported),
    include_global_resource_types: cdktn.booleanToTerraform(struct!.includeGlobalResourceTypes),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    exclusion_by_resource_types: cdktn.listMapper(configConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform, true)(struct!.exclusionByResourceTypes),
    recording_strategy: cdktn.listMapper(configConfigurationRecorderRecordingGroupRecordingStrategyToTerraform, true)(struct!.recordingStrategy),
  }
}


export function configConfigurationRecorderRecordingGroupToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_supported: {
      value: cdktn.booleanToHclTerraform(struct!.allSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_global_resource_types: {
      value: cdktn.booleanToHclTerraform(struct!.includeGlobalResourceTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclusion_by_resource_types: {
      value: cdktn.listMapperHcl(configConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform, true)(struct!.exclusionByResourceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList",
    },
    recording_strategy: {
      value: cdktn.listMapperHcl(configConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform, true)(struct!.recordingStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigConfigurationRecorderRecordingGroupRecordingStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSupported = this._allSupported;
    }
    if (this._includeGlobalResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGlobalResourceTypes = this._includeGlobalResourceTypes;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._exclusionByResourceTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionByResourceTypes = this._exclusionByResourceTypes?.internalValue;
    }
    if (this._recordingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingStrategy = this._recordingStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allSupported = undefined;
      this._includeGlobalResourceTypes = undefined;
      this._resourceTypes = undefined;
      this._exclusionByResourceTypes.internalValue = undefined;
      this._recordingStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allSupported = value.allSupported;
      this._includeGlobalResourceTypes = value.includeGlobalResourceTypes;
      this._resourceTypes = value.resourceTypes;
      this._exclusionByResourceTypes.internalValue = value.exclusionByResourceTypes;
      this._recordingStrategy.internalValue = value.recordingStrategy;
    }
  }

  // all_supported - computed: false, optional: true, required: false
  private _allSupported?: boolean | cdktn.IResolvable; 
  public get allSupported() {
    return this.getBooleanAttribute('all_supported');
  }
  public set allSupported(value: boolean | cdktn.IResolvable) {
    this._allSupported = value;
  }
  public resetAllSupported() {
    this._allSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSupportedInput() {
    return this._allSupported;
  }

  // include_global_resource_types - computed: false, optional: true, required: false
  private _includeGlobalResourceTypes?: boolean | cdktn.IResolvable; 
  public get includeGlobalResourceTypes() {
    return this.getBooleanAttribute('include_global_resource_types');
  }
  public set includeGlobalResourceTypes(value: boolean | cdktn.IResolvable) {
    this._includeGlobalResourceTypes = value;
  }
  public resetIncludeGlobalResourceTypes() {
    this._includeGlobalResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalResourceTypesInput() {
    return this._includeGlobalResourceTypes;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // exclusion_by_resource_types - computed: false, optional: true, required: false
  private _exclusionByResourceTypes = new ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList(this, "exclusion_by_resource_types", false);
  public get exclusionByResourceTypes() {
    return this._exclusionByResourceTypes;
  }
  public putExclusionByResourceTypes(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktn.IResolvable) {
    this._exclusionByResourceTypes.internalValue = value;
  }
  public resetExclusionByResourceTypes() {
    this._exclusionByResourceTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionByResourceTypesInput() {
    return this._exclusionByResourceTypes.internalValue;
  }

  // recording_strategy - computed: false, optional: true, required: false
  private _recordingStrategy = new ConfigConfigurationRecorderRecordingGroupRecordingStrategyList(this, "recording_strategy", false);
  public get recordingStrategy() {
    return this._recordingStrategy;
  }
  public putRecordingStrategy(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktn.IResolvable) {
    this._recordingStrategy.internalValue = value;
  }
  public resetRecordingStrategy() {
    this._recordingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStrategyInput() {
    return this._recordingStrategy.internalValue;
  }
}
export interface ConfigConfigurationRecorderRecordingModeRecordingModeOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
  */
  readonly recordingFrequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes: string[];
}

export function configConfigurationRecorderRecordingModeRecordingModeOverrideToTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference | ConfigConfigurationRecorderRecordingModeRecordingModeOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    recording_frequency: cdktn.stringToTerraform(struct!.recordingFrequency),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function configConfigurationRecorderRecordingModeRecordingModeOverrideToHclTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference | ConfigConfigurationRecorderRecordingModeRecordingModeOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_frequency: {
      value: cdktn.stringToHclTerraform(struct!.recordingFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingModeRecordingModeOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._recordingFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingFrequency = this._recordingFrequency;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._recordingFrequency = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._recordingFrequency = value.recordingFrequency;
      this._resourceTypes = value.resourceTypes;
    }
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

  // recording_frequency - computed: false, optional: false, required: true
  private _recordingFrequency?: string; 
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }
  public set recordingFrequency(value: string) {
    this._recordingFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingFrequencyInput() {
    return this._recordingFrequency;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface ConfigConfigurationRecorderRecordingMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
  */
  readonly recordingFrequency?: string;
  /**
  * recording_mode_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#recording_mode_override ConfigConfigurationRecorder#recording_mode_override}
  */
  readonly recordingModeOverride?: ConfigConfigurationRecorderRecordingModeRecordingModeOverride;
}

export function configConfigurationRecorderRecordingModeToTerraform(struct?: ConfigConfigurationRecorderRecordingModeOutputReference | ConfigConfigurationRecorderRecordingMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recording_frequency: cdktn.stringToTerraform(struct!.recordingFrequency),
    recording_mode_override: configConfigurationRecorderRecordingModeRecordingModeOverrideToTerraform(struct!.recordingModeOverride),
  }
}


export function configConfigurationRecorderRecordingModeToHclTerraform(struct?: ConfigConfigurationRecorderRecordingModeOutputReference | ConfigConfigurationRecorderRecordingMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recording_frequency: {
      value: cdktn.stringToHclTerraform(struct!.recordingFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_mode_override: {
      value: configConfigurationRecorderRecordingModeRecordingModeOverrideToHclTerraform(struct!.recordingModeOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigConfigurationRecorderRecordingModeRecordingModeOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordingFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingFrequency = this._recordingFrequency;
    }
    if (this._recordingModeOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingModeOverride = this._recordingModeOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordingFrequency = undefined;
      this._recordingModeOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordingFrequency = value.recordingFrequency;
      this._recordingModeOverride.internalValue = value.recordingModeOverride;
    }
  }

  // recording_frequency - computed: false, optional: true, required: false
  private _recordingFrequency?: string; 
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }
  public set recordingFrequency(value: string) {
    this._recordingFrequency = value;
  }
  public resetRecordingFrequency() {
    this._recordingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingFrequencyInput() {
    return this._recordingFrequency;
  }

  // recording_mode_override - computed: false, optional: true, required: false
  private _recordingModeOverride = new ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference(this, "recording_mode_override");
  public get recordingModeOverride() {
    return this._recordingModeOverride;
  }
  public putRecordingModeOverride(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverride) {
    this._recordingModeOverride.internalValue = value;
  }
  public resetRecordingModeOverride() {
    this._recordingModeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingModeOverrideInput() {
    return this._recordingModeOverride.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder aws_config_configuration_recorder}
*/
export class ConfigConfigurationRecorder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_configuration_recorder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigConfigurationRecorder to import
  * @param importFromId The id of the existing ConfigConfigurationRecorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigConfigurationRecorder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_configuration_recorder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.37.0/docs/resources/config_configuration_recorder aws_config_configuration_recorder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationRecorderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_recorder',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.37.0',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._recordingGroup.internalValue = config.recordingGroup;
    this._recordingMode.internalValue = config.recordingMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recording_group - computed: false, optional: true, required: false
  private _recordingGroup = new ConfigConfigurationRecorderRecordingGroupOutputReference(this, "recording_group");
  public get recordingGroup() {
    return this._recordingGroup;
  }
  public putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup) {
    this._recordingGroup.internalValue = value;
  }
  public resetRecordingGroup() {
    this._recordingGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingGroupInput() {
    return this._recordingGroup.internalValue;
  }

  // recording_mode - computed: false, optional: true, required: false
  private _recordingMode = new ConfigConfigurationRecorderRecordingModeOutputReference(this, "recording_mode");
  public get recordingMode() {
    return this._recordingMode;
  }
  public putRecordingMode(value: ConfigConfigurationRecorderRecordingMode) {
    this._recordingMode.internalValue = value;
  }
  public resetRecordingMode() {
    this._recordingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingModeInput() {
    return this._recordingMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      recording_group: configConfigurationRecorderRecordingGroupToTerraform(this._recordingGroup.internalValue),
      recording_mode: configConfigurationRecorderRecordingModeToTerraform(this._recordingMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_group: {
        value: configConfigurationRecorderRecordingGroupToHclTerraform(this._recordingGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigurationRecorderRecordingGroupList",
      },
      recording_mode: {
        value: configConfigurationRecorderRecordingModeToHclTerraform(this._recordingMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigurationRecorderRecordingModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
