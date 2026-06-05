/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminTelemetryRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#region ObservabilityadminTelemetryRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#rule ObservabilityadminTelemetryRule#rule}
  */
  readonly rule?: ObservabilityadminTelemetryRuleRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#timeouts ObservabilityadminTelemetryRule#timeouts}
  */
  readonly timeouts?: ObservabilityadminTelemetryRuleTimeouts;
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#ends_with ObservabilityadminTelemetryRule#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#equals ObservabilityadminTelemetryRule#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#field ObservabilityadminTelemetryRule#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#not_ends_with ObservabilityadminTelemetryRule#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#not_equals ObservabilityadminTelemetryRule#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#not_starts_with ObservabilityadminTelemetryRule#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#starts_with ObservabilityadminTelemetryRule#starts_with}
  */
  readonly startsWith?: string[];
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endsWith),
    equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
    field: cdktn.stringToTerraform(struct!.field),
    not_ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEndsWith),
    not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
    not_starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notStartsWith),
    starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startsWith),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEndsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notStartsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._notEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEndsWith = this._notEndsWith;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    if (this._notStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStartsWith = this._notStartsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._notEndsWith = undefined;
      this._notEquals = undefined;
      this._notStartsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._field = value.field;
      this._notEndsWith = value.notEndsWith;
      this._notEquals = value.notEquals;
      this._notStartsWith = value.notStartsWith;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string[]; 
  public get endsWith() {
    return this.getListAttribute('ends_with');
  }
  public set endsWith(value: string[]) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return this.getListAttribute('equals');
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // not_ends_with - computed: false, optional: true, required: false
  private _notEndsWith?: string[]; 
  public get notEndsWith() {
    return this.getListAttribute('not_ends_with');
  }
  public set notEndsWith(value: string[]) {
    this._notEndsWith = value;
  }
  public resetNotEndsWith() {
    this._notEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEndsWithInput() {
    return this._notEndsWith;
  }

  // not_equals - computed: false, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return this.getListAttribute('not_equals');
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }

  // not_starts_with - computed: false, optional: true, required: false
  private _notStartsWith?: string[]; 
  public get notStartsWith() {
    return this.getListAttribute('not_starts_with');
  }
  public set notStartsWith(value: string[]) {
    this._notStartsWith = value;
  }
  public resetNotStartsWith() {
    this._notStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartsWithInput() {
    return this._notStartsWith;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string[]; 
  public get startsWith() {
    return this.getListAttribute('starts_with');
  }
  public set startsWith(value: string[]) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#name ObservabilityadminTelemetryRule#name}
  */
  readonly name?: string;
  /**
  * field_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#field_selectors ObservabilityadminTelemetryRule#field_selectors}
  */
  readonly fieldSelectors?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    field_selectors: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform, true)(struct!.fieldSelectors),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_selectors: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform, true)(struct!.fieldSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._fieldSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._fieldSelectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._fieldSelectors.internalValue = value.fieldSelectors;
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

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", false);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }
  public putFieldSelectors(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable) {
    this._fieldSelectors.internalValue = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters {
  /**
  * advanced_event_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#advanced_event_selectors ObservabilityadminTelemetryRule#advanced_event_selectors}
  */
  readonly advancedEventSelectors?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_event_selectors: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform, true)(struct!.advancedEventSelectors),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_event_selectors: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform, true)(struct!.advancedEventSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedEventSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedEventSelectors = this._advancedEventSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = value.advancedEventSelectors;
    }
  }

  // advanced_event_selectors - computed: false, optional: true, required: false
  private _advancedEventSelectors = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(this, "advanced_event_selectors", false);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
  public putAdvancedEventSelectors(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable) {
    this._advancedEventSelectors.internalValue = value;
  }
  public resetAdvancedEventSelectors() {
    this._advancedEventSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorsInput() {
    return this._advancedEventSelectors.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#field_delimiter ObservabilityadminTelemetryRule#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#output_format ObservabilityadminTelemetryRule#output_format}
  */
  readonly outputFormat?: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldDelimiter = undefined;
      this._outputFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldDelimiter = value.fieldDelimiter;
      this._outputFormat = value.outputFormat;
    }
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#log_types ObservabilityadminTelemetryRule#log_types}
  */
  readonly logTypes?: string[];
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logTypes),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logTypes = value.logTypes;
    }
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#enhanced_monitoring ObservabilityadminTelemetryRule#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_monitoring: cdktn.stringToTerraform(struct!.enhancedMonitoring),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_monitoring: {
      value: cdktn.stringToHclTerraform(struct!.enhancedMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitoring = this._enhancedMonitoring;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enhancedMonitoring = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enhancedMonitoring = value.enhancedMonitoring;
    }
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string; 
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#log_format ObservabilityadminTelemetryRule#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#max_aggregation_interval ObservabilityadminTelemetryRule#max_aggregation_interval}
  */
  readonly maxAggregationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#traffic_type ObservabilityadminTelemetryRule#traffic_type}
  */
  readonly trafficType?: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    max_aggregation_interval: cdktn.numberToTerraform(struct!.maxAggregationInterval),
    traffic_type: cdktn.stringToTerraform(struct!.trafficType),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_aggregation_interval: {
      value: cdktn.numberToHclTerraform(struct!.maxAggregationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_type: {
      value: cdktn.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._maxAggregationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAggregationInterval = this._maxAggregationInterval;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFormat = undefined;
      this._maxAggregationInterval = undefined;
      this._trafficType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFormat = value.logFormat;
      this._maxAggregationInterval = value.maxAggregationInterval;
      this._trafficType = value.trafficType;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // max_aggregation_interval - computed: false, optional: true, required: false
  private _maxAggregationInterval?: number; 
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval;
  }

  // traffic_type - computed: false, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#action ObservabilityadminTelemetryRule#action}
  */
  readonly action: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#label_name ObservabilityadminTelemetryRule#label_name}
  */
  readonly labelName?: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktn.stringToTerraform(struct!.labelName),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktn.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
    }
  }

  // label_name - computed: false, optional: true, required: false
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  public resetLabelName() {
    this._labelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
  /**
  * action_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#action_condition ObservabilityadminTelemetryRule#action_condition}
  */
  readonly actionCondition?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable;
  /**
  * label_name_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#label_name_condition ObservabilityadminTelemetryRule#label_name_condition}
  */
  readonly labelNameCondition?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_condition: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform, true)(struct!.actionCondition),
    label_name_condition: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform, true)(struct!.labelNameCondition),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_condition: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform, true)(struct!.actionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList",
    },
    label_name_condition: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform, true)(struct!.labelNameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCondition = this._actionCondition?.internalValue;
    }
    if (this._labelNameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = undefined;
      this._labelNameCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = value.actionCondition;
      this._labelNameCondition.internalValue = value.labelNameCondition;
    }
  }

  // action_condition - computed: false, optional: true, required: false
  private _actionCondition = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList(this, "action_condition", false);
  public get actionCondition() {
    return this._actionCondition;
  }
  public putActionCondition(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable) {
    this._actionCondition.internalValue = value;
  }
  public resetActionCondition() {
    this._actionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConditionInput() {
    return this._actionCondition.internalValue;
  }

  // label_name_condition - computed: false, optional: true, required: false
  private _labelNameCondition = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList(this, "label_name_condition", false);
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
  public putLabelNameCondition(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable) {
    this._labelNameCondition.internalValue = value;
  }
  public resetLabelNameCondition() {
    this._labelNameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameConditionInput() {
    return this._labelNameCondition.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#behavior ObservabilityadminTelemetryRule#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#requirement ObservabilityadminTelemetryRule#requirement}
  */
  readonly requirement?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#conditions ObservabilityadminTelemetryRule#conditions}
  */
  readonly conditions?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    requirement: cdktn.stringToTerraform(struct!.requirement),
    conditions: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform, true)(struct!.conditions),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
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
    requirement: {
      value: cdktn.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._requirement = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._requirement = value.requirement;
      this._conditions.internalValue = value.conditions;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // requirement - computed: false, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#default_behavior ObservabilityadminTelemetryRule#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#filters ObservabilityadminTelemetryRule#filters}
  */
  readonly filters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
    filters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_behavior: {
      value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBehavior = this._defaultBehavior;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBehavior = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBehavior = value.defaultBehavior;
      this._filters.internalValue = value.filters;
    }
  }

  // default_behavior - computed: false, optional: true, required: false
  private _defaultBehavior?: string; 
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }
  public set defaultBehavior(value: string) {
    this._defaultBehavior = value;
  }
  public resetDefaultBehavior() {
    this._defaultBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBehaviorInput() {
    return this._defaultBehavior;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#name ObservabilityadminTelemetryRule#name}
  */
  readonly name: string;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#method ObservabilityadminTelemetryRule#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#query_string ObservabilityadminTelemetryRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#uri_path ObservabilityadminTelemetryRule#uri_path}
  */
  readonly uriPath?: string;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#single_header ObservabilityadminTelemetryRule#single_header}
  */
  readonly singleHeader?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    uri_path: cdktn.stringToTerraform(struct!.uriPath),
    single_header: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform, true)(struct!.singleHeader),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktn.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_header: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._queryString = undefined;
      this._uriPath = undefined;
      this._singleHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._queryString = value.queryString;
      this._uriPath = value.uriPath;
      this._singleHeader.internalValue = value.singleHeader;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#log_type ObservabilityadminTelemetryRule#log_type}
  */
  readonly logType?: string;
  /**
  * logging_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#logging_filter ObservabilityadminTelemetryRule#logging_filter}
  */
  readonly loggingFilter?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable;
  /**
  * redacted_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#redacted_fields ObservabilityadminTelemetryRule#redacted_fields}
  */
  readonly redactedFields?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_type: cdktn.stringToTerraform(struct!.logType),
    logging_filter: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform, true)(struct!.loggingFilter),
    redacted_fields: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform, true)(struct!.redactedFields),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_filter: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform, true)(struct!.loggingFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterList",
    },
    redacted_fields: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform, true)(struct!.redactedFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._loggingFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingFilter = this._loggingFilter?.internalValue;
    }
    if (this._redactedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactedFields = this._redactedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logType = undefined;
      this._loggingFilter.internalValue = undefined;
      this._redactedFields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logType = value.logType;
      this._loggingFilter.internalValue = value.loggingFilter;
      this._redactedFields.internalValue = value.redactedFields;
    }
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logging_filter - computed: false, optional: true, required: false
  private _loggingFilter = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterList(this, "logging_filter", false);
  public get loggingFilter() {
    return this._loggingFilter;
  }
  public putLoggingFilter(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable) {
    this._loggingFilter.internalValue = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter.internalValue;
  }

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(this, "redacted_fields", false);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable) {
    this._redactedFields.internalValue = value;
  }
  public resetRedactedFields() {
    this._redactedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRuleDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#destination_pattern ObservabilityadminTelemetryRule#destination_pattern}
  */
  readonly destinationPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#destination_type ObservabilityadminTelemetryRule#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#retention_in_days ObservabilityadminTelemetryRule#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * cloudtrail_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#cloudtrail_parameters ObservabilityadminTelemetryRule#cloudtrail_parameters}
  */
  readonly cloudtrailParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable;
  /**
  * elb_load_balancer_logging_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#elb_load_balancer_logging_parameters ObservabilityadminTelemetryRule#elb_load_balancer_logging_parameters}
  */
  readonly elbLoadBalancerLoggingParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable;
  /**
  * log_delivery_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#log_delivery_parameters ObservabilityadminTelemetryRule#log_delivery_parameters}
  */
  readonly logDeliveryParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable;
  /**
  * msk_monitoring_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#msk_monitoring_parameters ObservabilityadminTelemetryRule#msk_monitoring_parameters}
  */
  readonly mskMonitoringParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable;
  /**
  * vpc_flow_log_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#vpc_flow_log_parameters ObservabilityadminTelemetryRule#vpc_flow_log_parameters}
  */
  readonly vpcFlowLogParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable;
  /**
  * waf_logging_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#waf_logging_parameters ObservabilityadminTelemetryRule#waf_logging_parameters}
  */
  readonly wafLoggingParameters?: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleDestinationConfigurationToTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_pattern: cdktn.stringToTerraform(struct!.destinationPattern),
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    retention_in_days: cdktn.numberToTerraform(struct!.retentionInDays),
    cloudtrail_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToTerraform, true)(struct!.cloudtrailParameters),
    elb_load_balancer_logging_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform, true)(struct!.elbLoadBalancerLoggingParameters),
    log_delivery_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToTerraform, true)(struct!.logDeliveryParameters),
    msk_monitoring_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersToTerraform, true)(struct!.mskMonitoringParameters),
    vpc_flow_log_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToTerraform, true)(struct!.vpcFlowLogParameters),
    waf_logging_parameters: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToTerraform, true)(struct!.wafLoggingParameters),
  }
}


export function observabilityadminTelemetryRuleRuleDestinationConfigurationToHclTerraform(struct?: ObservabilityadminTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_pattern: {
      value: cdktn.stringToHclTerraform(struct!.destinationPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktn.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_in_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloudtrail_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToHclTerraform, true)(struct!.cloudtrailParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersList",
    },
    elb_load_balancer_logging_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform, true)(struct!.elbLoadBalancerLoggingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersList",
    },
    log_delivery_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToHclTerraform, true)(struct!.logDeliveryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersList",
    },
    msk_monitoring_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersToHclTerraform, true)(struct!.mskMonitoringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersList",
    },
    vpc_flow_log_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform, true)(struct!.vpcFlowLogParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersList",
    },
    waf_logging_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToHclTerraform, true)(struct!.wafLoggingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPattern = this._destinationPattern;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._cloudtrailParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudtrailParameters = this._cloudtrailParameters?.internalValue;
    }
    if (this._elbLoadBalancerLoggingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbLoadBalancerLoggingParameters = this._elbLoadBalancerLoggingParameters?.internalValue;
    }
    if (this._logDeliveryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryParameters = this._logDeliveryParameters?.internalValue;
    }
    if (this._mskMonitoringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mskMonitoringParameters = this._mskMonitoringParameters?.internalValue;
    }
    if (this._vpcFlowLogParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcFlowLogParameters = this._vpcFlowLogParameters?.internalValue;
    }
    if (this._wafLoggingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLoggingParameters = this._wafLoggingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRuleDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPattern = undefined;
      this._destinationType = undefined;
      this._retentionInDays = undefined;
      this._cloudtrailParameters.internalValue = undefined;
      this._elbLoadBalancerLoggingParameters.internalValue = undefined;
      this._logDeliveryParameters.internalValue = undefined;
      this._mskMonitoringParameters.internalValue = undefined;
      this._vpcFlowLogParameters.internalValue = undefined;
      this._wafLoggingParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPattern = value.destinationPattern;
      this._destinationType = value.destinationType;
      this._retentionInDays = value.retentionInDays;
      this._cloudtrailParameters.internalValue = value.cloudtrailParameters;
      this._elbLoadBalancerLoggingParameters.internalValue = value.elbLoadBalancerLoggingParameters;
      this._logDeliveryParameters.internalValue = value.logDeliveryParameters;
      this._mskMonitoringParameters.internalValue = value.mskMonitoringParameters;
      this._vpcFlowLogParameters.internalValue = value.vpcFlowLogParameters;
      this._wafLoggingParameters.internalValue = value.wafLoggingParameters;
    }
  }

  // destination_pattern - computed: false, optional: true, required: false
  private _destinationPattern?: string; 
  public get destinationPattern() {
    return this.getStringAttribute('destination_pattern');
  }
  public set destinationPattern(value: string) {
    this._destinationPattern = value;
  }
  public resetDestinationPattern() {
    this._destinationPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPatternInput() {
    return this._destinationPattern;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // cloudtrail_parameters - computed: false, optional: true, required: false
  private _cloudtrailParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersList(this, "cloudtrail_parameters", false);
  public get cloudtrailParameters() {
    return this._cloudtrailParameters;
  }
  public putCloudtrailParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable) {
    this._cloudtrailParameters.internalValue = value;
  }
  public resetCloudtrailParameters() {
    this._cloudtrailParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailParametersInput() {
    return this._cloudtrailParameters.internalValue;
  }

  // elb_load_balancer_logging_parameters - computed: false, optional: true, required: false
  private _elbLoadBalancerLoggingParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersList(this, "elb_load_balancer_logging_parameters", false);
  public get elbLoadBalancerLoggingParameters() {
    return this._elbLoadBalancerLoggingParameters;
  }
  public putElbLoadBalancerLoggingParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable) {
    this._elbLoadBalancerLoggingParameters.internalValue = value;
  }
  public resetElbLoadBalancerLoggingParameters() {
    this._elbLoadBalancerLoggingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbLoadBalancerLoggingParametersInput() {
    return this._elbLoadBalancerLoggingParameters.internalValue;
  }

  // log_delivery_parameters - computed: false, optional: true, required: false
  private _logDeliveryParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersList(this, "log_delivery_parameters", false);
  public get logDeliveryParameters() {
    return this._logDeliveryParameters;
  }
  public putLogDeliveryParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable) {
    this._logDeliveryParameters.internalValue = value;
  }
  public resetLogDeliveryParameters() {
    this._logDeliveryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryParametersInput() {
    return this._logDeliveryParameters.internalValue;
  }

  // msk_monitoring_parameters - computed: false, optional: true, required: false
  private _mskMonitoringParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParametersList(this, "msk_monitoring_parameters", false);
  public get mskMonitoringParameters() {
    return this._mskMonitoringParameters;
  }
  public putMskMonitoringParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable) {
    this._mskMonitoringParameters.internalValue = value;
  }
  public resetMskMonitoringParameters() {
    this._mskMonitoringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mskMonitoringParametersInput() {
    return this._mskMonitoringParameters.internalValue;
  }

  // vpc_flow_log_parameters - computed: false, optional: true, required: false
  private _vpcFlowLogParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersList(this, "vpc_flow_log_parameters", false);
  public get vpcFlowLogParameters() {
    return this._vpcFlowLogParameters;
  }
  public putVpcFlowLogParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable) {
    this._vpcFlowLogParameters.internalValue = value;
  }
  public resetVpcFlowLogParameters() {
    this._vpcFlowLogParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFlowLogParametersInput() {
    return this._vpcFlowLogParameters.internalValue;
  }

  // waf_logging_parameters - computed: false, optional: true, required: false
  private _wafLoggingParameters = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersList(this, "waf_logging_parameters", false);
  public get wafLoggingParameters() {
    return this._wafLoggingParameters;
  }
  public putWafLoggingParameters(value: ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable) {
    this._wafLoggingParameters.internalValue = value;
  }
  public resetWafLoggingParameters() {
    this._wafLoggingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLoggingParametersInput() {
    return this._wafLoggingParameters.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleDestinationConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRuleDestinationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference {
    return new ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#all_regions ObservabilityadminTelemetryRule#all_regions}
  */
  readonly allRegions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#allow_field_updates ObservabilityadminTelemetryRule#allow_field_updates}
  */
  readonly allowFieldUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#regions ObservabilityadminTelemetryRule#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#scope ObservabilityadminTelemetryRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#selection_criteria ObservabilityadminTelemetryRule#selection_criteria}
  */
  readonly selectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_source_types ObservabilityadminTelemetryRule#telemetry_source_types}
  */
  readonly telemetrySourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}
  */
  readonly telemetryType: string;
  /**
  * destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#destination_configuration ObservabilityadminTelemetryRule#destination_configuration}
  */
  readonly destinationConfiguration?: ObservabilityadminTelemetryRuleRuleDestinationConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleRuleToTerraform(struct?: ObservabilityadminTelemetryRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_regions: cdktn.booleanToTerraform(struct!.allRegions),
    allow_field_updates: cdktn.booleanToTerraform(struct!.allowFieldUpdates),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    scope: cdktn.stringToTerraform(struct!.scope),
    selection_criteria: cdktn.stringToTerraform(struct!.selectionCriteria),
    telemetry_source_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.telemetrySourceTypes),
    telemetry_type: cdktn.stringToTerraform(struct!.telemetryType),
    destination_configuration: cdktn.listMapper(observabilityadminTelemetryRuleRuleDestinationConfigurationToTerraform, true)(struct!.destinationConfiguration),
  }
}


export function observabilityadminTelemetryRuleRuleToHclTerraform(struct?: ObservabilityadminTelemetryRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_regions: {
      value: cdktn.booleanToHclTerraform(struct!.allRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_field_updates: {
      value: cdktn.booleanToHclTerraform(struct!.allowFieldUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_criteria: {
      value: cdktn.stringToHclTerraform(struct!.selectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry_source_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.telemetrySourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    telemetry_type: {
      value: cdktn.stringToHclTerraform(struct!.telemetryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_configuration: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleDestinationConfigurationToHclTerraform, true)(struct!.destinationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleRuleDestinationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._allowFieldUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFieldUpdates = this._allowFieldUpdates;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._selectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionCriteria = this._selectionCriteria;
    }
    if (this._telemetrySourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetrySourceTypes = this._telemetrySourceTypes;
    }
    if (this._telemetryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryType = this._telemetryType;
    }
    if (this._destinationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfiguration = this._destinationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityadminTelemetryRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRegions = undefined;
      this._allowFieldUpdates = undefined;
      this._regions = undefined;
      this._resourceType = undefined;
      this._scope = undefined;
      this._selectionCriteria = undefined;
      this._telemetrySourceTypes = undefined;
      this._telemetryType = undefined;
      this._destinationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRegions = value.allRegions;
      this._allowFieldUpdates = value.allowFieldUpdates;
      this._regions = value.regions;
      this._resourceType = value.resourceType;
      this._scope = value.scope;
      this._selectionCriteria = value.selectionCriteria;
      this._telemetrySourceTypes = value.telemetrySourceTypes;
      this._telemetryType = value.telemetryType;
      this._destinationConfiguration.internalValue = value.destinationConfiguration;
    }
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktn.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktn.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // allow_field_updates - computed: false, optional: true, required: false
  private _allowFieldUpdates?: boolean | cdktn.IResolvable; 
  public get allowFieldUpdates() {
    return this.getBooleanAttribute('allow_field_updates');
  }
  public set allowFieldUpdates(value: boolean | cdktn.IResolvable) {
    this._allowFieldUpdates = value;
  }
  public resetAllowFieldUpdates() {
    this._allowFieldUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFieldUpdatesInput() {
    return this._allowFieldUpdates;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // selection_criteria - computed: false, optional: true, required: false
  private _selectionCriteria?: string; 
  public get selectionCriteria() {
    return this.getStringAttribute('selection_criteria');
  }
  public set selectionCriteria(value: string) {
    this._selectionCriteria = value;
  }
  public resetSelectionCriteria() {
    this._selectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionCriteriaInput() {
    return this._selectionCriteria;
  }

  // telemetry_source_types - computed: true, optional: true, required: false
  private _telemetrySourceTypes?: string[]; 
  public get telemetrySourceTypes() {
    return this.getListAttribute('telemetry_source_types');
  }
  public set telemetrySourceTypes(value: string[]) {
    this._telemetrySourceTypes = value;
  }
  public resetTelemetrySourceTypes() {
    this._telemetrySourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySourceTypesInput() {
    return this._telemetrySourceTypes;
  }

  // telemetry_type - computed: false, optional: false, required: true
  private _telemetryType?: string; 
  public get telemetryType() {
    return this.getStringAttribute('telemetry_type');
  }
  public set telemetryType(value: string) {
    this._telemetryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryTypeInput() {
    return this._telemetryType;
  }

  // destination_configuration - computed: false, optional: true, required: false
  private _destinationConfiguration = new ObservabilityadminTelemetryRuleRuleDestinationConfigurationList(this, "destination_configuration", false);
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: ObservabilityadminTelemetryRuleRuleDestinationConfiguration[] | cdktn.IResolvable) {
    this._destinationConfiguration.internalValue = value;
  }
  public resetDestinationConfiguration() {
    this._destinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration.internalValue;
  }
}

export class ObservabilityadminTelemetryRuleRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleRuleOutputReference {
    return new ObservabilityadminTelemetryRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#create ObservabilityadminTelemetryRule#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#delete ObservabilityadminTelemetryRule#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#update ObservabilityadminTelemetryRule#update}
  */
  readonly update?: string;
}

export function observabilityadminTelemetryRuleTimeoutsToTerraform(struct?: ObservabilityadminTelemetryRuleTimeouts | cdktn.IResolvable): any {
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


export function observabilityadminTelemetryRuleTimeoutsToHclTerraform(struct?: ObservabilityadminTelemetryRuleTimeouts | cdktn.IResolvable): any {
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

export class ObservabilityadminTelemetryRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminTelemetryRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule aws_observabilityadmin_telemetry_rule}
*/
export class ObservabilityadminTelemetryRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_observabilityadmin_telemetry_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminTelemetryRule to import
  * @param importFromId The id of the existing ObservabilityadminTelemetryRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminTelemetryRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_observabilityadmin_telemetry_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/observabilityadmin_telemetry_rule aws_observabilityadmin_telemetry_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminTelemetryRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminTelemetryRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_observabilityadmin_telemetry_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.49.0',
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
  private _rule = new ObservabilityadminTelemetryRuleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityadminTelemetryRuleRule[] | cdktn.IResolvable) {
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
  private _timeouts = new ObservabilityadminTelemetryRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObservabilityadminTelemetryRuleTimeouts) {
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
      rule: cdktn.listMapper(observabilityadminTelemetryRuleRuleToTerraform, true)(this._rule.internalValue),
      timeouts: observabilityadminTelemetryRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: cdktn.listMapperHcl(observabilityadminTelemetryRuleRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObservabilityadminTelemetryRuleRuleList",
      },
      timeouts: {
        value: observabilityadminTelemetryRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityadminTelemetryRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
