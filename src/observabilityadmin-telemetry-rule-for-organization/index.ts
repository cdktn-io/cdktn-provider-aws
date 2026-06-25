/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminTelemetryRuleForOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#region ObservabilityadminTelemetryRuleForOrganization#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#rule_name ObservabilityadminTelemetryRuleForOrganization#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#tags ObservabilityadminTelemetryRuleForOrganization#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#rule ObservabilityadminTelemetryRuleForOrganization#rule}
  */
  readonly rule?: ObservabilityadminTelemetryRuleForOrganizationRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#timeouts ObservabilityadminTelemetryRuleForOrganization#timeouts}
  */
  readonly timeouts?: ObservabilityadminTelemetryRuleForOrganizationTimeouts;
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#ends_with ObservabilityadminTelemetryRuleForOrganization#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#equals ObservabilityadminTelemetryRuleForOrganization#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#field ObservabilityadminTelemetryRuleForOrganization#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#not_ends_with ObservabilityadminTelemetryRuleForOrganization#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#not_equals ObservabilityadminTelemetryRuleForOrganization#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#not_starts_with ObservabilityadminTelemetryRuleForOrganization#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#starts_with ObservabilityadminTelemetryRuleForOrganization#starts_with}
  */
  readonly startsWith?: string[];
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#name ObservabilityadminTelemetryRuleForOrganization#name}
  */
  readonly name?: string;
  /**
  * field_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#field_selectors ObservabilityadminTelemetryRuleForOrganization#field_selectors}
  */
  readonly fieldSelectors?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    field_selectors: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform, true)(struct!.fieldSelectors),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable): any {
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
    field_selectors: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform, true)(struct!.fieldSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | cdktn.IResolvable | undefined) {
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
  private _fieldSelectors = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", false);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }
  public putFieldSelectors(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters {
  /**
  * advanced_event_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#advanced_event_selectors ObservabilityadminTelemetryRuleForOrganization#advanced_event_selectors}
  */
  readonly advancedEventSelectors?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_event_selectors: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform, true)(struct!.advancedEventSelectors),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_event_selectors: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform, true)(struct!.advancedEventSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters | cdktn.IResolvable | undefined) {
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
  private _advancedEventSelectors = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(this, "advanced_event_selectors", false);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
  public putAdvancedEventSelectors(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#field_delimiter ObservabilityadminTelemetryRuleForOrganization#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#output_format ObservabilityadminTelemetryRuleForOrganization#output_format}
  */
  readonly outputFormat?: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#log_types ObservabilityadminTelemetryRuleForOrganization#log_types}
  */
  readonly logTypes?: string[];
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logTypes),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#enhanced_monitoring ObservabilityadminTelemetryRuleForOrganization#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enhanced_monitoring: cdktn.stringToTerraform(struct!.enhancedMonitoring),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#log_format ObservabilityadminTelemetryRuleForOrganization#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#max_aggregation_interval ObservabilityadminTelemetryRuleForOrganization#max_aggregation_interval}
  */
  readonly maxAggregationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#traffic_type ObservabilityadminTelemetryRuleForOrganization#traffic_type}
  */
  readonly trafficType?: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    max_aggregation_interval: cdktn.numberToTerraform(struct!.maxAggregationInterval),
    traffic_type: cdktn.stringToTerraform(struct!.trafficType),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#action ObservabilityadminTelemetryRuleForOrganization#action}
  */
  readonly action: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#label_name ObservabilityadminTelemetryRuleForOrganization#label_name}
  */
  readonly labelName?: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_name: cdktn.stringToTerraform(struct!.labelName),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
  /**
  * action_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#action_condition ObservabilityadminTelemetryRuleForOrganization#action_condition}
  */
  readonly actionCondition?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable;
  /**
  * label_name_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#label_name_condition ObservabilityadminTelemetryRuleForOrganization#label_name_condition}
  */
  readonly labelNameCondition?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_condition: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform, true)(struct!.actionCondition),
    label_name_condition: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform, true)(struct!.labelNameCondition),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_condition: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform, true)(struct!.actionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList",
    },
    label_name_condition: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform, true)(struct!.labelNameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | cdktn.IResolvable | undefined) {
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
  private _actionCondition = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionList(this, "action_condition", false);
  public get actionCondition() {
    return this._actionCondition;
  }
  public putActionCondition(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition[] | cdktn.IResolvable) {
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
  private _labelNameCondition = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionList(this, "label_name_condition", false);
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
  public putLabelNameCondition(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#behavior ObservabilityadminTelemetryRuleForOrganization#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#requirement ObservabilityadminTelemetryRuleForOrganization#requirement}
  */
  readonly requirement?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#conditions ObservabilityadminTelemetryRuleForOrganization#conditions}
  */
  readonly conditions?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    requirement: cdktn.stringToTerraform(struct!.requirement),
    conditions: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform, true)(struct!.conditions),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | cdktn.IResolvable | undefined) {
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
  private _conditions = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#default_behavior ObservabilityadminTelemetryRuleForOrganization#default_behavior}
  */
  readonly defaultBehavior?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#filters ObservabilityadminTelemetryRuleForOrganization#filters}
  */
  readonly filters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
    filters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_behavior: {
      value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter | cdktn.IResolvable | undefined) {
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
  private _filters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#name ObservabilityadminTelemetryRuleForOrganization#name}
  */
  readonly name: string;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | cdktn.IResolvable | undefined) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#method ObservabilityadminTelemetryRuleForOrganization#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#query_string ObservabilityadminTelemetryRuleForOrganization#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#uri_path ObservabilityadminTelemetryRuleForOrganization#uri_path}
  */
  readonly uriPath?: string;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#single_header ObservabilityadminTelemetryRuleForOrganization#single_header}
  */
  readonly singleHeader?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    uri_path: cdktn.stringToTerraform(struct!.uriPath),
    single_header: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform, true)(struct!.singleHeader),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields | cdktn.IResolvable | undefined) {
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
  private _singleHeader = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#log_type ObservabilityadminTelemetryRuleForOrganization#log_type}
  */
  readonly logType?: string;
  /**
  * logging_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#logging_filter ObservabilityadminTelemetryRuleForOrganization#logging_filter}
  */
  readonly loggingFilter?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable;
  /**
  * redacted_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#redacted_fields ObservabilityadminTelemetryRuleForOrganization#redacted_fields}
  */
  readonly redactedFields?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_type: cdktn.stringToTerraform(struct!.logType),
    logging_filter: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform, true)(struct!.loggingFilter),
    redacted_fields: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform, true)(struct!.redactedFields),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_filter: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform, true)(struct!.loggingFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterList",
    },
    redacted_fields: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform, true)(struct!.redactedFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters | cdktn.IResolvable | undefined) {
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
  private _loggingFilter = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilterList(this, "logging_filter", false);
  public get loggingFilter() {
    return this._loggingFilter;
  }
  public putLoggingFilter(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersLoggingFilter[] | cdktn.IResolvable) {
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
  private _redactedFields = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(this, "redacted_fields", false);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersRedactedFields[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#destination_pattern ObservabilityadminTelemetryRuleForOrganization#destination_pattern}
  */
  readonly destinationPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#destination_type ObservabilityadminTelemetryRuleForOrganization#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#retention_in_days ObservabilityadminTelemetryRuleForOrganization#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * cloudtrail_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#cloudtrail_parameters ObservabilityadminTelemetryRuleForOrganization#cloudtrail_parameters}
  */
  readonly cloudtrailParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable;
  /**
  * elb_load_balancer_logging_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#elb_load_balancer_logging_parameters ObservabilityadminTelemetryRuleForOrganization#elb_load_balancer_logging_parameters}
  */
  readonly elbLoadBalancerLoggingParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable;
  /**
  * log_delivery_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#log_delivery_parameters ObservabilityadminTelemetryRuleForOrganization#log_delivery_parameters}
  */
  readonly logDeliveryParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable;
  /**
  * msk_monitoring_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#msk_monitoring_parameters ObservabilityadminTelemetryRuleForOrganization#msk_monitoring_parameters}
  */
  readonly mskMonitoringParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable;
  /**
  * vpc_flow_log_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#vpc_flow_log_parameters ObservabilityadminTelemetryRuleForOrganization#vpc_flow_log_parameters}
  */
  readonly vpcFlowLogParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable;
  /**
  * waf_logging_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#waf_logging_parameters ObservabilityadminTelemetryRuleForOrganization#waf_logging_parameters}
  */
  readonly wafLoggingParameters?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_pattern: cdktn.stringToTerraform(struct!.destinationPattern),
    destination_type: cdktn.stringToTerraform(struct!.destinationType),
    retention_in_days: cdktn.numberToTerraform(struct!.retentionInDays),
    cloudtrail_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersToTerraform, true)(struct!.cloudtrailParameters),
    elb_load_balancer_logging_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform, true)(struct!.elbLoadBalancerLoggingParameters),
    log_delivery_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersToTerraform, true)(struct!.logDeliveryParameters),
    msk_monitoring_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersToTerraform, true)(struct!.mskMonitoringParameters),
    vpc_flow_log_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersToTerraform, true)(struct!.vpcFlowLogParameters),
    waf_logging_parameters: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersToTerraform, true)(struct!.wafLoggingParameters),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersToHclTerraform, true)(struct!.cloudtrailParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersList",
    },
    elb_load_balancer_logging_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform, true)(struct!.elbLoadBalancerLoggingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersList",
    },
    log_delivery_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersToHclTerraform, true)(struct!.logDeliveryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersList",
    },
    msk_monitoring_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersToHclTerraform, true)(struct!.mskMonitoringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersList",
    },
    vpc_flow_log_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform, true)(struct!.vpcFlowLogParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersList",
    },
    waf_logging_parameters: {
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersToHclTerraform, true)(struct!.wafLoggingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration | cdktn.IResolvable | undefined) {
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
  private _cloudtrailParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParametersList(this, "cloudtrail_parameters", false);
  public get cloudtrailParameters() {
    return this._cloudtrailParameters;
  }
  public putCloudtrailParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationCloudtrailParameters[] | cdktn.IResolvable) {
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
  private _elbLoadBalancerLoggingParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParametersList(this, "elb_load_balancer_logging_parameters", false);
  public get elbLoadBalancerLoggingParameters() {
    return this._elbLoadBalancerLoggingParameters;
  }
  public putElbLoadBalancerLoggingParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationElbLoadBalancerLoggingParameters[] | cdktn.IResolvable) {
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
  private _logDeliveryParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParametersList(this, "log_delivery_parameters", false);
  public get logDeliveryParameters() {
    return this._logDeliveryParameters;
  }
  public putLogDeliveryParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationLogDeliveryParameters[] | cdktn.IResolvable) {
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
  private _mskMonitoringParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParametersList(this, "msk_monitoring_parameters", false);
  public get mskMonitoringParameters() {
    return this._mskMonitoringParameters;
  }
  public putMskMonitoringParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationMskMonitoringParameters[] | cdktn.IResolvable) {
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
  private _vpcFlowLogParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParametersList(this, "vpc_flow_log_parameters", false);
  public get vpcFlowLogParameters() {
    return this._vpcFlowLogParameters;
  }
  public putVpcFlowLogParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationVpcFlowLogParameters[] | cdktn.IResolvable) {
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
  private _wafLoggingParameters = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParametersList(this, "waf_logging_parameters", false);
  public get wafLoggingParameters() {
    return this._wafLoggingParameters;
  }
  public putWafLoggingParameters(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationWafLoggingParameters[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#all_regions ObservabilityadminTelemetryRuleForOrganization#all_regions}
  */
  readonly allRegions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#allow_field_updates ObservabilityadminTelemetryRuleForOrganization#allow_field_updates}
  */
  readonly allowFieldUpdates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#regions ObservabilityadminTelemetryRuleForOrganization#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#resource_type ObservabilityadminTelemetryRuleForOrganization#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#scope ObservabilityadminTelemetryRuleForOrganization#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#selection_criteria ObservabilityadminTelemetryRuleForOrganization#selection_criteria}
  */
  readonly selectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#telemetry_source_types ObservabilityadminTelemetryRuleForOrganization#telemetry_source_types}
  */
  readonly telemetrySourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#telemetry_type ObservabilityadminTelemetryRuleForOrganization#telemetry_type}
  */
  readonly telemetryType: string;
  /**
  * destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#destination_configuration ObservabilityadminTelemetryRuleForOrganization#destination_configuration}
  */
  readonly destinationConfiguration?: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration[] | cdktn.IResolvable;
}

export function observabilityadminTelemetryRuleForOrganizationRuleToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    destination_configuration: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationToTerraform, true)(struct!.destinationConfiguration),
  }
}


export function observabilityadminTelemetryRuleForOrganizationRuleToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationToHclTerraform, true)(struct!.destinationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityadminTelemetryRuleForOrganizationRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationRule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationRule | cdktn.IResolvable | undefined) {
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
  private _destinationConfiguration = new ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfigurationList(this, "destination_configuration", false);
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: ObservabilityadminTelemetryRuleForOrganizationRuleDestinationConfiguration[] | cdktn.IResolvable) {
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

export class ObservabilityadminTelemetryRuleForOrganizationRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityadminTelemetryRuleForOrganizationRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityadminTelemetryRuleForOrganizationRuleOutputReference {
    return new ObservabilityadminTelemetryRuleForOrganizationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityadminTelemetryRuleForOrganizationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#create ObservabilityadminTelemetryRuleForOrganization#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#delete ObservabilityadminTelemetryRuleForOrganization#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#update ObservabilityadminTelemetryRuleForOrganization#update}
  */
  readonly update?: string;
}

export function observabilityadminTelemetryRuleForOrganizationTimeoutsToTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationTimeouts | cdktn.IResolvable): any {
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


export function observabilityadminTelemetryRuleForOrganizationTimeoutsToHclTerraform(struct?: ObservabilityadminTelemetryRuleForOrganizationTimeouts | cdktn.IResolvable): any {
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

export class ObservabilityadminTelemetryRuleForOrganizationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityadminTelemetryRuleForOrganizationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityadminTelemetryRuleForOrganizationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization aws_observabilityadmin_telemetry_rule_for_organization}
*/
export class ObservabilityadminTelemetryRuleForOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_observabilityadmin_telemetry_rule_for_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminTelemetryRuleForOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminTelemetryRuleForOrganization to import
  * @param importFromId The id of the existing ObservabilityadminTelemetryRuleForOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminTelemetryRuleForOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_observabilityadmin_telemetry_rule_for_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/observabilityadmin_telemetry_rule_for_organization aws_observabilityadmin_telemetry_rule_for_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminTelemetryRuleForOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminTelemetryRuleForOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_observabilityadmin_telemetry_rule_for_organization',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.52.0',
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
  private _rule = new ObservabilityadminTelemetryRuleForOrganizationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityadminTelemetryRuleForOrganizationRule[] | cdktn.IResolvable) {
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
  private _timeouts = new ObservabilityadminTelemetryRuleForOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObservabilityadminTelemetryRuleForOrganizationTimeouts) {
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
      rule: cdktn.listMapper(observabilityadminTelemetryRuleForOrganizationRuleToTerraform, true)(this._rule.internalValue),
      timeouts: observabilityadminTelemetryRuleForOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: cdktn.listMapperHcl(observabilityadminTelemetryRuleForOrganizationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObservabilityadminTelemetryRuleForOrganizationRuleList",
      },
      timeouts: {
        value: observabilityadminTelemetryRuleForOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityadminTelemetryRuleForOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
