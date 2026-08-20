/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreGatewayRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}
  */
  readonly gatewayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#region BedrockagentcoreGatewayRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#action BedrockagentcoreGatewayRule#action}
  */
  readonly action?: BedrockagentcoreGatewayRuleAction[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#condition BedrockagentcoreGatewayRule#condition}
  */
  readonly condition?: BedrockagentcoreGatewayRuleCondition[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#timeouts BedrockagentcoreGatewayRule#timeouts}
  */
  readonly timeouts?: BedrockagentcoreGatewayRuleTimeouts;
}
export interface BedrockagentcoreGatewayRuleSystem {
}

export function bedrockagentcoreGatewayRuleSystemToTerraform(struct?: BedrockagentcoreGatewayRuleSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreGatewayRuleSystemToHclTerraform(struct?: BedrockagentcoreGatewayRuleSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreGatewayRuleSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
}

export class BedrockagentcoreGatewayRuleSystemList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreGatewayRuleSystemOutputReference {
    return new BedrockagentcoreGatewayRuleSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}
  */
  readonly bundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}
  */
  readonly bundleVersion: string;
}

export function bedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideToTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function bedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: false, optional: false, required: true
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: false, optional: false, required: true
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference {
    return new BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}
  */
  readonly bundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}
  */
  readonly bundleVersion: string;
}

export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: false, optional: false, required: true
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: false, optional: false, required: true
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference {
    return new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}
  */
  readonly weight: number;
  /**
  * configuration_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitToTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    weight: cdktn.numberToTerraform(struct!.weight),
    configuration_bundle: cdktn.listMapper(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToTerraform, true)(struct!.configurationBundle),
  }
}


export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable): any {
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
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configuration_bundle: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToHclTerraform, true)(struct!.configurationBundle),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._weight = undefined;
      this._configurationBundle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._weight = value.weight;
      this._configurationBundle.internalValue = value.configurationBundle;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // configuration_bundle - computed: false, optional: true, required: false
  private _configurationBundle = new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleList(this, "configuration_bundle", false);
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle[] | cdktn.IResolvable) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference {
    return new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride {
  /**
  * traffic_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}
  */
  readonly trafficSplit?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideToTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitToTerraform, true)(struct!.trafficSplit),
  }
}


export function bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitToHclTerraform, true)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: false, optional: true, required: false
  private _trafficSplit = new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference {
    return new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionConfigurationBundle {
  /**
  * static_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}
  */
  readonly staticOverride?: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride[] | cdktn.IResolvable;
  /**
  * weighted_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}
  */
  readonly weightedOverride?: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionConfigurationBundleToTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_override: cdktn.listMapper(bedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideToTerraform, true)(struct!.staticOverride),
    weighted_override: cdktn.listMapper(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideToTerraform, true)(struct!.weightedOverride),
  }
}


export function bedrockagentcoreGatewayRuleActionConfigurationBundleToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_override: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideToHclTerraform, true)(struct!.staticOverride),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList",
    },
    weighted_override: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideToHclTerraform, true)(struct!.weightedOverride),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionConfigurationBundle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticOverride = this._staticOverride?.internalValue;
    }
    if (this._weightedOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedOverride = this._weightedOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionConfigurationBundle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = undefined;
      this._weightedOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = value.staticOverride;
      this._weightedOverride.internalValue = value.weightedOverride;
    }
  }

  // static_override - computed: false, optional: true, required: false
  private _staticOverride = new BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverrideList(this, "static_override", false);
  public get staticOverride() {
    return this._staticOverride;
  }
  public putStaticOverride(value: BedrockagentcoreGatewayRuleActionConfigurationBundleStaticOverride[] | cdktn.IResolvable) {
    this._staticOverride.internalValue = value;
  }
  public resetStaticOverride() {
    this._staticOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticOverrideInput() {
    return this._staticOverride.internalValue;
  }

  // weighted_override - computed: false, optional: true, required: false
  private _weightedOverride = new BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverrideList(this, "weighted_override", false);
  public get weightedOverride() {
    return this._weightedOverride;
  }
  public putWeightedOverride(value: BedrockagentcoreGatewayRuleActionConfigurationBundleWeightedOverride[] | cdktn.IResolvable) {
    this._weightedOverride.internalValue = value;
  }
  public resetWeightedOverride() {
    this._weightedOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedOverrideInput() {
    return this._weightedOverride.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionConfigurationBundleList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionConfigurationBundle[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference {
    return new BedrockagentcoreGatewayRuleActionConfigurationBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}
  */
  readonly targetName: string;
}

export function bedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteToTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_name: cdktn.stringToTerraform(struct!.targetName),
  }
}


export function bedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetName = value.targetName;
    }
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference {
    return new BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}
  */
  readonly weight: number;
}

export function bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitToTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    target_name: cdktn.stringToTerraform(struct!.targetName),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable): any {
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
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._targetName = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._targetName = value.targetName;
      this._weight = value.weight;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference {
    return new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute {
  /**
  * traffic_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}
  */
  readonly trafficSplit?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteToTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitToTerraform, true)(struct!.trafficSplit),
  }
}


export function bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitToHclTerraform, true)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: false, optional: true, required: false
  private _trafficSplit = new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference {
    return new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionRouteToTarget {
  /**
  * static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}
  */
  readonly staticRoute?: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute[] | cdktn.IResolvable;
  /**
  * weighted_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}
  */
  readonly weightedRoute?: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionRouteToTargetToTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_route: cdktn.listMapper(bedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteToTerraform, true)(struct!.staticRoute),
    weighted_route: cdktn.listMapper(bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteToTerraform, true)(struct!.weightedRoute),
  }
}


export function bedrockagentcoreGatewayRuleActionRouteToTargetToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionRouteToTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_route: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteToHclTerraform, true)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList",
    },
    weighted_route: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteToHclTerraform, true)(struct!.weightedRoute),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionRouteToTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    if (this._weightedRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedRoute = this._weightedRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionRouteToTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
      this._weightedRoute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
      this._weightedRoute.internalValue = value.weightedRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new BedrockagentcoreGatewayRuleActionRouteToTargetStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: BedrockagentcoreGatewayRuleActionRouteToTargetStaticRoute[] | cdktn.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }

  // weighted_route - computed: false, optional: true, required: false
  private _weightedRoute = new BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRouteList(this, "weighted_route", false);
  public get weightedRoute() {
    return this._weightedRoute;
  }
  public putWeightedRoute(value: BedrockagentcoreGatewayRuleActionRouteToTargetWeightedRoute[] | cdktn.IResolvable) {
    this._weightedRoute.internalValue = value;
  }
  public resetWeightedRoute() {
    this._weightedRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRouteInput() {
    return this._weightedRoute.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionRouteToTargetList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionRouteToTarget[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference {
    return new BedrockagentcoreGatewayRuleActionRouteToTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleAction {
  /**
  * configuration_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: BedrockagentcoreGatewayRuleActionConfigurationBundle[] | cdktn.IResolvable;
  /**
  * route_to_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}
  */
  readonly routeToTarget?: BedrockagentcoreGatewayRuleActionRouteToTarget[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionToTerraform(struct?: BedrockagentcoreGatewayRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_bundle: cdktn.listMapper(bedrockagentcoreGatewayRuleActionConfigurationBundleToTerraform, true)(struct!.configurationBundle),
    route_to_target: cdktn.listMapper(bedrockagentcoreGatewayRuleActionRouteToTargetToTerraform, true)(struct!.routeToTarget),
  }
}


export function bedrockagentcoreGatewayRuleActionToHclTerraform(struct?: BedrockagentcoreGatewayRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_bundle: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionConfigurationBundleToHclTerraform, true)(struct!.configurationBundle),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionConfigurationBundleList",
    },
    route_to_target: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionRouteToTargetToHclTerraform, true)(struct!.routeToTarget),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionRouteToTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    if (this._routeToTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeToTarget = this._routeToTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = undefined;
      this._routeToTarget.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = value.configurationBundle;
      this._routeToTarget.internalValue = value.routeToTarget;
    }
  }

  // configuration_bundle - computed: false, optional: true, required: false
  private _configurationBundle = new BedrockagentcoreGatewayRuleActionConfigurationBundleList(this, "configuration_bundle", false);
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: BedrockagentcoreGatewayRuleActionConfigurationBundle[] | cdktn.IResolvable) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
  }

  // route_to_target - computed: false, optional: true, required: false
  private _routeToTarget = new BedrockagentcoreGatewayRuleActionRouteToTargetList(this, "route_to_target", false);
  public get routeToTarget() {
    return this._routeToTarget;
  }
  public putRouteToTarget(value: BedrockagentcoreGatewayRuleActionRouteToTarget[] | cdktn.IResolvable) {
    this._routeToTarget.internalValue = value;
  }
  public resetRouteToTarget() {
    this._routeToTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToTargetInput() {
    return this._routeToTarget.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleAction[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionOutputReference {
    return new BedrockagentcoreGatewayRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}
  */
  readonly anyOf: string[];
}

export function bedrockagentcoreGatewayRuleConditionMatchPathsToTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
  }
}


export function bedrockagentcoreGatewayRuleConditionMatchPathsToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditionMatchPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionMatchPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

export class BedrockagentcoreGatewayRuleConditionMatchPathsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditionMatchPaths[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference {
    return new BedrockagentcoreGatewayRuleConditionMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}
  */
  readonly operator?: string;
}

export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalToTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._operator = value.operator;
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

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference {
    return new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf {
  /**
  * iam_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}
  */
  readonly iamPrincipal?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfToTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_principal: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalToTerraform, true)(struct!.iamPrincipal),
  }
}


export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_principal: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalToHclTerraform, true)(struct!.iamPrincipal),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamPrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamPrincipal = this._iamPrincipal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = value.iamPrincipal;
    }
  }

  // iam_principal - computed: false, optional: true, required: false
  private _iamPrincipal = new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipalList(this, "iam_principal", false);
  public get iamPrincipal() {
    return this._iamPrincipal;
  }
  public putIamPrincipal(value: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfIamPrincipal[] | cdktn.IResolvable) {
    this._iamPrincipal.internalValue = value;
  }
  public resetIamPrincipal() {
    this._iamPrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamPrincipalInput() {
    return this._iamPrincipal.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference {
    return new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionMatchPrincipals {
  /**
  * any_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}
  */
  readonly anyOf?: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsToTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfToTerraform, true)(struct!.anyOf),
  }
}


export function bedrockagentcoreGatewayRuleConditionMatchPrincipalsToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionMatchPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfToHclTerraform, true)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditionMatchPrincipals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionMatchPrincipals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = value.anyOf;
    }
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf = new BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOfList(this, "any_of", false);
  public get anyOf() {
    return this._anyOf;
  }
  public putAnyOf(value: BedrockagentcoreGatewayRuleConditionMatchPrincipalsAnyOf[] | cdktn.IResolvable) {
    this._anyOf.internalValue = value;
  }
  public resetAnyOf() {
    this._anyOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleConditionMatchPrincipalsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditionMatchPrincipals[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference {
    return new BedrockagentcoreGatewayRuleConditionMatchPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleCondition {
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}
  */
  readonly matchPaths?: BedrockagentcoreGatewayRuleConditionMatchPaths[] | cdktn.IResolvable;
  /**
  * match_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}
  */
  readonly matchPrincipals?: BedrockagentcoreGatewayRuleConditionMatchPrincipals[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleConditionToTerraform(struct?: BedrockagentcoreGatewayRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_paths: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionMatchPathsToTerraform, true)(struct!.matchPaths),
    match_principals: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionMatchPrincipalsToTerraform, true)(struct!.matchPrincipals),
  }
}


export function bedrockagentcoreGatewayRuleConditionToHclTerraform(struct?: BedrockagentcoreGatewayRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_paths: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionMatchPathsToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleConditionMatchPathsList",
    },
    match_principals: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionMatchPrincipalsToHclTerraform, true)(struct!.matchPrincipals),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleConditionMatchPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchPrincipals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrincipals = this._matchPrincipals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchPrincipals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchPrincipals.internalValue = value.matchPrincipals;
    }
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new BedrockagentcoreGatewayRuleConditionMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: BedrockagentcoreGatewayRuleConditionMatchPaths[] | cdktn.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_principals - computed: false, optional: true, required: false
  private _matchPrincipals = new BedrockagentcoreGatewayRuleConditionMatchPrincipalsList(this, "match_principals", false);
  public get matchPrincipals() {
    return this._matchPrincipals;
  }
  public putMatchPrincipals(value: BedrockagentcoreGatewayRuleConditionMatchPrincipals[] | cdktn.IResolvable) {
    this._matchPrincipals.internalValue = value;
  }
  public resetMatchPrincipals() {
    this._matchPrincipals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrincipalsInput() {
    return this._matchPrincipals.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleConditionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleCondition[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionOutputReference {
    return new BedrockagentcoreGatewayRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#create BedrockagentcoreGatewayRule#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#delete BedrockagentcoreGatewayRule#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#update BedrockagentcoreGatewayRule#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreGatewayRuleTimeoutsToTerraform(struct?: BedrockagentcoreGatewayRuleTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreGatewayRuleTimeoutsToHclTerraform(struct?: BedrockagentcoreGatewayRuleTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreGatewayRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreGatewayRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule}
*/
export class BedrockagentcoreGatewayRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_gateway_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreGatewayRule to import
  * @param importFromId The id of the existing BedrockagentcoreGatewayRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_gateway_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreGatewayRuleConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreGatewayRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_gateway_rule',
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
    this._description = config.description;
    this._gatewayIdentifier = config.gatewayIdentifier;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // gateway_identifier - computed: false, optional: false, required: true
  private _gatewayIdentifier?: string; 
  public get gatewayIdentifier() {
    return this.getStringAttribute('gateway_identifier');
  }
  public set gatewayIdentifier(value: string) {
    this._gatewayIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentifierInput() {
    return this._gatewayIdentifier;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // system - computed: true, optional: false, required: false
  private _system = new BedrockagentcoreGatewayRuleSystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }

  // action - computed: false, optional: true, required: false
  private _action = new BedrockagentcoreGatewayRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: BedrockagentcoreGatewayRuleAction[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new BedrockagentcoreGatewayRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BedrockagentcoreGatewayRuleCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreGatewayRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreGatewayRuleTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      action: cdktn.listMapper(bedrockagentcoreGatewayRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionToTerraform, true)(this._condition.internalValue),
      timeouts: bedrockagentcoreGatewayRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_identifier: {
        value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
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
      action: {
        value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayRuleActionList",
      },
      condition: {
        value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayRuleConditionList",
      },
      timeouts: {
        value: bedrockagentcoreGatewayRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreGatewayRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
