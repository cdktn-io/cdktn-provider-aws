/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminCentralizationRuleForOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region ObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#rule_name ObservabilityadminCentralizationRuleForOrganization#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tags ObservabilityadminCentralizationRuleForOrganization#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#rule ObservabilityadminCentralizationRuleForOrganization#rule}
  */
  readonly rule?: ObservabilityadminCentralizationRuleForOrganizationRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#timeouts ObservabilityadminCentralizationRuleForOrganization#timeouts}
  */
  readonly timeouts?: ObservabilityadminCentralizationRuleForOrganizationTimeouts;
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#kms_key_arn ObservabilityadminCentralizationRuleForOrganization#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region ObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region?: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._region = value.region;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // region - computed: false, optional: true, required: false
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
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_name_pattern ObservabilityadminCentralizationRuleForOrganization#log_group_name_pattern}
  */
  readonly logGroupNamePattern: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_name_pattern: cdktn.stringToTerraform(struct!.logGroupNamePattern),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_name_pattern: {
      value: cdktn.stringToHclTerraform(struct!.logGroupNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNamePattern = this._logGroupNamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupNamePattern = value.logGroupNamePattern;
    }
  }

  // log_group_name_pattern - computed: false, optional: false, required: true
  private _logGroupNamePattern?: string; 
  public get logGroupNamePattern() {
    return this.getStringAttribute('log_group_name_pattern');
  }
  public set logGroupNamePattern(value: string) {
    this._logGroupNamePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamePatternInput() {
    return this._logGroupNamePattern;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_conflict_resolution_strategy ObservabilityadminCentralizationRuleForOrganization#encryption_conflict_resolution_strategy}
  */
  readonly encryptionConflictResolutionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_scope ObservabilityadminCentralizationRuleForOrganization#encryption_scope}
  */
  readonly encryptionScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encryption_strategy ObservabilityadminCentralizationRuleForOrganization#encryption_strategy}
  */
  readonly encryptionStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#kms_key_arn ObservabilityadminCentralizationRuleForOrganization#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.encryptionConflictResolutionStrategy),
    encryption_scope: cdktn.stringToTerraform(struct!.encryptionScope),
    encryption_strategy: cdktn.stringToTerraform(struct!.encryptionStrategy),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_conflict_resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionConflictResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_scope: {
      value: cdktn.stringToHclTerraform(struct!.encryptionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConflictResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConflictResolutionStrategy = this._encryptionConflictResolutionStrategy;
    }
    if (this._encryptionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionScope = this._encryptionScope;
    }
    if (this._encryptionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionStrategy = this._encryptionStrategy;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = undefined;
      this._encryptionScope = undefined;
      this._encryptionStrategy = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConflictResolutionStrategy = value.encryptionConflictResolutionStrategy;
      this._encryptionScope = value.encryptionScope;
      this._encryptionStrategy = value.encryptionStrategy;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_conflict_resolution_strategy - computed: false, optional: true, required: false
  private _encryptionConflictResolutionStrategy?: string; 
  public get encryptionConflictResolutionStrategy() {
    return this.getStringAttribute('encryption_conflict_resolution_strategy');
  }
  public set encryptionConflictResolutionStrategy(value: string) {
    this._encryptionConflictResolutionStrategy = value;
  }
  public resetEncryptionConflictResolutionStrategy() {
    this._encryptionConflictResolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConflictResolutionStrategyInput() {
    return this._encryptionConflictResolutionStrategy;
  }

  // encryption_scope - computed: true, optional: true, required: false
  private _encryptionScope?: string; 
  public get encryptionScope() {
    return this.getStringAttribute('encryption_scope');
  }
  public set encryptionScope(value: string) {
    this._encryptionScope = value;
  }
  public resetEncryptionScope() {
    this._encryptionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionScopeInput() {
    return this._encryptionScope;
  }

  // encryption_strategy - computed: false, optional: false, required: true
  private _encryptionStrategy?: string; 
  public get encryptionStrategy() {
    return this.getStringAttribute('encryption_strategy');
  }
  public set encryptionStrategy(value: string) {
    this._encryptionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStrategyInput() {
    return this._encryptionStrategy;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_role_arn ObservabilityadminCentralizationRuleForOrganization#destination_role_arn}
  */
  readonly destinationRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tag_conflict_resolution_strategy ObservabilityadminCentralizationRuleForOrganization#tag_conflict_resolution_strategy}
  */
  readonly tagConflictResolutionStrategy?: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_role_arn: cdktn.stringToTerraform(struct!.destinationRoleArn),
    tag_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.tagConflictResolutionStrategy),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_conflict_resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.tagConflictResolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRoleArn = this._destinationRoleArn;
    }
    if (this._tagConflictResolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagConflictResolutionStrategy = this._tagConflictResolutionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationRoleArn = undefined;
      this._tagConflictResolutionStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationRoleArn = value.destinationRoleArn;
      this._tagConflictResolutionStrategy = value.tagConflictResolutionStrategy;
    }
  }

  // destination_role_arn - computed: false, optional: false, required: true
  private _destinationRoleArn?: string; 
  public get destinationRoleArn() {
    return this.getStringAttribute('destination_role_arn');
  }
  public set destinationRoleArn(value: string) {
    this._destinationRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRoleArnInput() {
    return this._destinationRoleArn;
  }

  // tag_conflict_resolution_strategy - computed: false, optional: true, required: false
  private _tagConflictResolutionStrategy?: string; 
  public get tagConflictResolutionStrategy() {
    return this.getStringAttribute('tag_conflict_resolution_strategy');
  }
  public set tagConflictResolutionStrategy(value: string) {
    this._tagConflictResolutionStrategy = value;
  }
  public resetTagConflictResolutionStrategy() {
    this._tagConflictResolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConflictResolutionStrategyInput() {
    return this._tagConflictResolutionStrategy;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration {
  /**
  * backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#backup_configuration ObservabilityadminCentralizationRuleForOrganization#backup_configuration}
  */
  readonly backupConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration[] | cdktn.IResolvable;
  /**
  * log_group_name_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_name_configuration ObservabilityadminCentralizationRuleForOrganization#log_group_name_configuration}
  */
  readonly logGroupNameConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration[] | cdktn.IResolvable;
  /**
  * logs_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#logs_encryption_configuration ObservabilityadminCentralizationRuleForOrganization#logs_encryption_configuration}
  */
  readonly logsEncryptionConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration[] | cdktn.IResolvable;
  /**
  * tag_propagation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#tag_propagation_configuration ObservabilityadminCentralizationRuleForOrganization#tag_propagation_configuration}
  */
  readonly tagPropagationConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationToTerraform, true)(struct!.backupConfiguration),
    log_group_name_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToTerraform, true)(struct!.logGroupNameConfiguration),
    logs_encryption_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToTerraform, true)(struct!.logsEncryptionConfiguration),
    tag_propagation_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationToTerraform, true)(struct!.tagPropagationConfiguration),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationToHclTerraform, true)(struct!.backupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationList",
    },
    log_group_name_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationToHclTerraform, true)(struct!.logGroupNameConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationList",
    },
    logs_encryption_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationToHclTerraform, true)(struct!.logsEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationList",
    },
    tag_propagation_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationToHclTerraform, true)(struct!.tagPropagationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    if (this._logGroupNameConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNameConfiguration = this._logGroupNameConfiguration?.internalValue;
    }
    if (this._logsEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsEncryptionConfiguration = this._logsEncryptionConfiguration?.internalValue;
    }
    if (this._tagPropagationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPropagationConfiguration = this._tagPropagationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
      this._logGroupNameConfiguration.internalValue = undefined;
      this._logsEncryptionConfiguration.internalValue = undefined;
      this._tagPropagationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
      this._logGroupNameConfiguration.internalValue = value.logGroupNameConfiguration;
      this._logsEncryptionConfiguration.internalValue = value.logsEncryptionConfiguration;
      this._tagPropagationConfiguration.internalValue = value.tagPropagationConfiguration;
    }
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfigurationList(this, "backup_configuration", false);
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationBackupConfiguration[] | cdktn.IResolvable) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // log_group_name_configuration - computed: false, optional: true, required: false
  private _logGroupNameConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationList(this, "log_group_name_configuration", false);
  public get logGroupNameConfiguration() {
    return this._logGroupNameConfiguration;
  }
  public putLogGroupNameConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration[] | cdktn.IResolvable) {
    this._logGroupNameConfiguration.internalValue = value;
  }
  public resetLogGroupNameConfiguration() {
    this._logGroupNameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameConfigurationInput() {
    return this._logGroupNameConfiguration.internalValue;
  }

  // logs_encryption_configuration - computed: false, optional: true, required: false
  private _logsEncryptionConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationList(this, "logs_encryption_configuration", false);
  public get logsEncryptionConfiguration() {
    return this._logsEncryptionConfiguration;
  }
  public putLogsEncryptionConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration[] | cdktn.IResolvable) {
    this._logsEncryptionConfiguration.internalValue = value;
  }
  public resetLogsEncryptionConfiguration() {
    this._logsEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsEncryptionConfigurationInput() {
    return this._logsEncryptionConfiguration.internalValue;
  }

  // tag_propagation_configuration - computed: false, optional: true, required: false
  private _tagPropagationConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationList(this, "tag_propagation_configuration", false);
  public get tagPropagationConfiguration() {
    return this._tagPropagationConfiguration;
  }
  public putTagPropagationConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration[] | cdktn.IResolvable) {
    this._tagPropagationConfiguration.internalValue = value;
  }
  public resetTagPropagationConfiguration() {
    this._tagPropagationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPropagationConfigurationInput() {
    return this._tagPropagationConfiguration.internalValue;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region ObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration {
  /**
  * backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#backup_configuration ObservabilityadminCentralizationRuleForOrganization#backup_configuration}
  */
  readonly backupConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationToTerraform, true)(struct!.backupConfiguration),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationToHclTerraform, true)(struct!.backupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupConfiguration.internalValue = value.backupConfiguration;
    }
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfigurationList(this, "backup_configuration", false);
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationBackupConfiguration[] | cdktn.IResolvable) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#account ObservabilityadminCentralizationRuleForOrganization#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#region ObservabilityadminCentralizationRuleForOrganization#region}
  */
  readonly region: string;
  /**
  * destination_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_logs_configuration ObservabilityadminCentralizationRuleForOrganization#destination_logs_configuration}
  */
  readonly destinationLogsConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration[] | cdktn.IResolvable;
  /**
  * destination_metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination_metrics_configuration ObservabilityadminCentralizationRuleForOrganization#destination_metrics_configuration}
  */
  readonly destinationMetricsConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminCentralizationRuleForOrganizationRuleDestinationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.stringToTerraform(struct!.account),
    region: cdktn.stringToTerraform(struct!.region),
    destination_logs_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationToTerraform, true)(struct!.destinationLogsConfiguration),
    destination_metrics_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationToTerraform, true)(struct!.destinationMetricsConfiguration),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleDestinationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_logs_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationToHclTerraform, true)(struct!.destinationLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationList",
    },
    destination_metrics_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationToHclTerraform, true)(struct!.destinationMetricsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._destinationLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLogsConfiguration = this._destinationLogsConfiguration?.internalValue;
    }
    if (this._destinationMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMetricsConfiguration = this._destinationMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._region = undefined;
      this._destinationLogsConfiguration.internalValue = undefined;
      this._destinationMetricsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._region = value.region;
      this._destinationLogsConfiguration.internalValue = value.destinationLogsConfiguration;
      this._destinationMetricsConfiguration.internalValue = value.destinationMetricsConfiguration;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // destination_logs_configuration - computed: false, optional: true, required: false
  private _destinationLogsConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfigurationList(this, "destination_logs_configuration", false);
  public get destinationLogsConfiguration() {
    return this._destinationLogsConfiguration;
  }
  public putDestinationLogsConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationLogsConfiguration[] | cdktn.IResolvable) {
    this._destinationLogsConfiguration.internalValue = value;
  }
  public resetDestinationLogsConfiguration() {
    this._destinationLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLogsConfigurationInput() {
    return this._destinationLogsConfiguration.internalValue;
  }

  // destination_metrics_configuration - computed: false, optional: true, required: false
  private _destinationMetricsConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfigurationList(this, "destination_metrics_configuration", false);
  public get destinationMetricsConfiguration() {
    return this._destinationMetricsConfiguration;
  }
  public putDestinationMetricsConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestinationDestinationMetricsConfiguration[] | cdktn.IResolvable) {
    this._destinationMetricsConfiguration.internalValue = value;
  }
  public resetDestinationMetricsConfiguration() {
    this._destinationMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMetricsConfigurationInput() {
    return this._destinationMetricsConfiguration.internalValue;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleDestinationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleDestination[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleDestinationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#data_source_selection_criteria ObservabilityadminCentralizationRuleForOrganization#data_source_selection_criteria}
  */
  readonly dataSourceSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#encrypted_log_group_strategy ObservabilityadminCentralizationRuleForOrganization#encrypted_log_group_strategy}
  */
  readonly encryptedLogGroupStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#log_group_selection_criteria ObservabilityadminCentralizationRuleForOrganization#log_group_selection_criteria}
  */
  readonly logGroupSelectionCriteria?: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_selection_criteria: cdktn.stringToTerraform(struct!.dataSourceSelectionCriteria),
    encrypted_log_group_strategy: cdktn.stringToTerraform(struct!.encryptedLogGroupStrategy),
    log_group_selection_criteria: cdktn.stringToTerraform(struct!.logGroupSelectionCriteria),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_log_group_strategy: {
      value: cdktn.stringToHclTerraform(struct!.encryptedLogGroupStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.logGroupSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceSelectionCriteria = this._dataSourceSelectionCriteria;
    }
    if (this._encryptedLogGroupStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedLogGroupStrategy = this._encryptedLogGroupStrategy;
    }
    if (this._logGroupSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupSelectionCriteria = this._logGroupSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = undefined;
      this._encryptedLogGroupStrategy = undefined;
      this._logGroupSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceSelectionCriteria = value.dataSourceSelectionCriteria;
      this._encryptedLogGroupStrategy = value.encryptedLogGroupStrategy;
      this._logGroupSelectionCriteria = value.logGroupSelectionCriteria;
    }
  }

  // data_source_selection_criteria - computed: true, optional: true, required: false
  private _dataSourceSelectionCriteria?: string; 
  public get dataSourceSelectionCriteria() {
    return this.getStringAttribute('data_source_selection_criteria');
  }
  public set dataSourceSelectionCriteria(value: string) {
    this._dataSourceSelectionCriteria = value;
  }
  public resetDataSourceSelectionCriteria() {
    this._dataSourceSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceSelectionCriteriaInput() {
    return this._dataSourceSelectionCriteria;
  }

  // encrypted_log_group_strategy - computed: false, optional: false, required: true
  private _encryptedLogGroupStrategy?: string; 
  public get encryptedLogGroupStrategy() {
    return this.getStringAttribute('encrypted_log_group_strategy');
  }
  public set encryptedLogGroupStrategy(value: string) {
    this._encryptedLogGroupStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLogGroupStrategyInput() {
    return this._encryptedLogGroupStrategy;
  }

  // log_group_selection_criteria - computed: true, optional: true, required: false
  private _logGroupSelectionCriteria?: string; 
  public get logGroupSelectionCriteria() {
    return this.getStringAttribute('log_group_selection_criteria');
  }
  public set logGroupSelectionCriteria(value: string) {
    this._logGroupSelectionCriteria = value;
  }
  public resetLogGroupSelectionCriteria() {
    this._logGroupSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupSelectionCriteriaInput() {
    return this._logGroupSelectionCriteria;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#metrics_selection_criteria ObservabilityadminCentralizationRuleForOrganization#metrics_selection_criteria}
  */
  readonly metricsSelectionCriteria: string;
}

export function observabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_selection_criteria: cdktn.stringToTerraform(struct!.metricsSelectionCriteria),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.metricsSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsSelectionCriteria = this._metricsSelectionCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsSelectionCriteria = value.metricsSelectionCriteria;
    }
  }

  // metrics_selection_criteria - computed: false, optional: false, required: true
  private _metricsSelectionCriteria?: string; 
  public get metricsSelectionCriteria() {
    return this.getStringAttribute('metrics_selection_criteria');
  }
  public set metricsSelectionCriteria(value: string) {
    this._metricsSelectionCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsSelectionCriteriaInput() {
    return this._metricsSelectionCriteria;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRuleSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#regions ObservabilityadminCentralizationRuleForOrganization#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#scope ObservabilityadminCentralizationRuleForOrganization#scope}
  */
  readonly scope: string;
  /**
  * source_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source_logs_configuration ObservabilityadminCentralizationRuleForOrganization#source_logs_configuration}
  */
  readonly sourceLogsConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration[] | cdktn.IResolvable;
  /**
  * source_metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source_metrics_configuration ObservabilityadminCentralizationRuleForOrganization#source_metrics_configuration}
  */
  readonly sourceMetricsConfiguration?: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminCentralizationRuleForOrganizationRuleSourceToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    scope: cdktn.stringToTerraform(struct!.scope),
    source_logs_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationToTerraform, true)(struct!.sourceLogsConfiguration),
    source_metrics_configuration: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationToTerraform, true)(struct!.sourceMetricsConfiguration),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleSourceToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRuleSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_logs_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationToHclTerraform, true)(struct!.sourceLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationList",
    },
    source_metrics_configuration: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationToHclTerraform, true)(struct!.sourceMetricsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRuleSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sourceLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLogsConfiguration = this._sourceLogsConfiguration?.internalValue;
    }
    if (this._sourceMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetricsConfiguration = this._sourceMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRuleSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regions = undefined;
      this._scope = undefined;
      this._sourceLogsConfiguration.internalValue = undefined;
      this._sourceMetricsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regions = value.regions;
      this._scope = value.scope;
      this._sourceLogsConfiguration.internalValue = value.sourceLogsConfiguration;
      this._sourceMetricsConfiguration.internalValue = value.sourceMetricsConfiguration;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source_logs_configuration - computed: false, optional: true, required: false
  private _sourceLogsConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfigurationList(this, "source_logs_configuration", false);
  public get sourceLogsConfiguration() {
    return this._sourceLogsConfiguration;
  }
  public putSourceLogsConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceLogsConfiguration[] | cdktn.IResolvable) {
    this._sourceLogsConfiguration.internalValue = value;
  }
  public resetSourceLogsConfiguration() {
    this._sourceLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLogsConfigurationInput() {
    return this._sourceLogsConfiguration.internalValue;
  }

  // source_metrics_configuration - computed: false, optional: true, required: false
  private _sourceMetricsConfiguration = new ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfigurationList(this, "source_metrics_configuration", false);
  public get sourceMetricsConfiguration() {
    return this._sourceMetricsConfiguration;
  }
  public putSourceMetricsConfiguration(value: ObservabilityadminCentralizationRuleForOrganizationRuleSourceSourceMetricsConfiguration[] | cdktn.IResolvable) {
    this._sourceMetricsConfiguration.internalValue = value;
  }
  public resetSourceMetricsConfiguration() {
    this._sourceMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetricsConfigurationInput() {
    return this._sourceMetricsConfiguration.internalValue;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleSourceList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRuleSource[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleSourceOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationRule {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#destination ObservabilityadminCentralizationRuleForOrganization#destination}
  */
  readonly destination?: ObservabilityadminCentralizationRuleForOrganizationRuleDestination[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#source ObservabilityadminCentralizationRuleForOrganization#source}
  */
  readonly source?: ObservabilityadminCentralizationRuleForOrganizationRuleSource[] | cdktn.IResolvable;
}

export function observabilityadminCentralizationRuleForOrganizationRuleToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleDestinationToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleSourceToTerraform, true)(struct!.source),
  }
}


export function observabilityadminCentralizationRuleForOrganizationRuleToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleDestinationList",
    },
    source: {
      value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ObservabilityadminCentralizationRuleForOrganizationRuleDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ObservabilityadminCentralizationRuleForOrganizationRuleDestination[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ObservabilityadminCentralizationRuleForOrganizationRuleSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ObservabilityadminCentralizationRuleForOrganizationRuleSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ObservabilityadminCentralizationRuleForOrganizationRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminCentralizationRuleForOrganizationRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminCentralizationRuleForOrganizationRuleOutputReference {
    return new ObservabilityadminCentralizationRuleForOrganizationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminCentralizationRuleForOrganizationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#create ObservabilityadminCentralizationRuleForOrganization#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#update ObservabilityadminCentralizationRuleForOrganization#update}
  */
  readonly update?: string;
}

export function observabilityadminCentralizationRuleForOrganizationTimeoutsToTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function observabilityadminCentralizationRuleForOrganizationTimeoutsToHclTerraform(struct?: ObservabilityadminCentralizationRuleForOrganizationTimeouts | cdktn.IResolvable): any {
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

export class ObservabilityadminCentralizationRuleForOrganizationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminCentralizationRuleForOrganizationTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminCentralizationRuleForOrganizationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization aws_observabilityadmin_centralization_rule_for_organization}
*/
export class ObservabilityadminCentralizationRuleForOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_observabilityadmin_centralization_rule_for_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminCentralizationRuleForOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminCentralizationRuleForOrganization to import
  * @param importFromId The id of the existing ObservabilityadminCentralizationRuleForOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminCentralizationRuleForOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_observabilityadmin_centralization_rule_for_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/observabilityadmin_centralization_rule_for_organization aws_observabilityadmin_centralization_rule_for_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminCentralizationRuleForOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminCentralizationRuleForOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_observabilityadmin_centralization_rule_for_organization',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._tags = config.tags;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // tag_propagation_failure_reason - computed: true, optional: false, required: false
  public get tagPropagationFailureReason() {
    return this.getStringAttribute('tag_propagation_failure_reason');
  }

  // tag_propagation_status - computed: true, optional: false, required: false
  public get tagPropagationStatus() {
    return this.getStringAttribute('tag_propagation_status');
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

  // rule - computed: false, optional: true, required: false
  private _rule = new ObservabilityadminCentralizationRuleForOrganizationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityadminCentralizationRuleForOrganizationRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObservabilityadminCentralizationRuleForOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObservabilityadminCentralizationRuleForOrganizationTimeouts) {
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
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      rule: cdktn.listMapper(observabilityadminCentralizationRuleForOrganizationRuleToTerraform, true)(this._rule.internalValue),
      timeouts: observabilityadminCentralizationRuleForOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
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
      rule: {
        value: cdktn.listMapperHcl(observabilityadminCentralizationRuleForOrganizationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObservabilityadminCentralizationRuleForOrganizationRuleList",
      },
      timeouts: {
        value: observabilityadminCentralizationRuleForOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityadminCentralizationRuleForOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
