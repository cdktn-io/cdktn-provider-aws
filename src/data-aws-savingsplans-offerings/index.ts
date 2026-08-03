/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsSavingsplansOfferingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}
  */
  readonly currencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}
  */
  readonly descriptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}
  */
  readonly durations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}
  */
  readonly offeringIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}
  */
  readonly paymentOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}
  */
  readonly planTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}
  */
  readonly productType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}
  */
  readonly serviceCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}
  */
  readonly usageTypes?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}
  */
  readonly filter?: DataAwsSavingsplansOfferingsFilter[] | cdktn.IResolvable;
}
export interface DataAwsSavingsplansOfferingsOfferingsProperties {
}

export function dataAwsSavingsplansOfferingsOfferingsPropertiesToTerraform(struct?: DataAwsSavingsplansOfferingsOfferingsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSavingsplansOfferingsOfferingsPropertiesToHclTerraform(struct?: DataAwsSavingsplansOfferingsOfferingsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsSavingsplansOfferingsOfferingsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSavingsplansOfferingsOfferingsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsSavingsplansOfferingsOfferingsPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference {
    return new DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSavingsplansOfferingsOfferings {
}

export function dataAwsSavingsplansOfferingsOfferingsToTerraform(struct?: DataAwsSavingsplansOfferingsOfferings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSavingsplansOfferingsOfferingsToHclTerraform(struct?: DataAwsSavingsplansOfferingsOfferings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSavingsplansOfferingsOfferingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsSavingsplansOfferingsOfferings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSavingsplansOfferingsOfferings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // offering_id - computed: true, optional: false, required: false
  public get offeringId() {
    return this.getStringAttribute('offering_id');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payment_option - computed: true, optional: false, required: false
  public get paymentOption() {
    return this.getStringAttribute('payment_option');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // product_types - computed: true, optional: false, required: false
  public get productTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('product_types'));
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAwsSavingsplansOfferingsOfferingsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // service_code - computed: true, optional: false, required: false
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }

  // usage_type - computed: true, optional: false, required: false
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
}

export class DataAwsSavingsplansOfferingsOfferingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSavingsplansOfferingsOfferingsOutputReference {
    return new DataAwsSavingsplansOfferingsOfferingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSavingsplansOfferingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}
  */
  readonly values: string[];
}

export function dataAwsSavingsplansOfferingsFilterToTerraform(struct?: DataAwsSavingsplansOfferingsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsSavingsplansOfferingsFilterToHclTerraform(struct?: DataAwsSavingsplansOfferingsFilter | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsSavingsplansOfferingsFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsSavingsplansOfferingsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSavingsplansOfferingsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsSavingsplansOfferingsFilterList extends cdktn.ComplexList {
  public internalValue? : DataAwsSavingsplansOfferingsFilter[] | cdktn.IResolvable

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
  public get(index: number): DataAwsSavingsplansOfferingsFilterOutputReference {
    return new DataAwsSavingsplansOfferingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings}
*/
export class DataAwsSavingsplansOfferings extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_savingsplans_offerings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSavingsplansOfferings to import
  * @param importFromId The id of the existing DataAwsSavingsplansOfferings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSavingsplansOfferings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_savingsplans_offerings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSavingsplansOfferingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSavingsplansOfferingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_savingsplans_offerings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
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
    this._currencies = config.currencies;
    this._descriptions = config.descriptions;
    this._durations = config.durations;
    this._offeringIds = config.offeringIds;
    this._operations = config.operations;
    this._paymentOptions = config.paymentOptions;
    this._planTypes = config.planTypes;
    this._productType = config.productType;
    this._serviceCodes = config.serviceCodes;
    this._usageTypes = config.usageTypes;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // currencies - computed: false, optional: true, required: false
  private _currencies?: string[]; 
  public get currencies() {
    return cdktn.Fn.tolist(this.getListAttribute('currencies'));
  }
  public set currencies(value: string[]) {
    this._currencies = value;
  }
  public resetCurrencies() {
    this._currencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currenciesInput() {
    return this._currencies;
  }

  // descriptions - computed: false, optional: true, required: false
  private _descriptions?: string[]; 
  public get descriptions() {
    return cdktn.Fn.tolist(this.getListAttribute('descriptions'));
  }
  public set descriptions(value: string[]) {
    this._descriptions = value;
  }
  public resetDescriptions() {
    this._descriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionsInput() {
    return this._descriptions;
  }

  // durations - computed: false, optional: true, required: false
  private _durations?: number[]; 
  public get durations() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('durations')));
  }
  public set durations(value: number[]) {
    this._durations = value;
  }
  public resetDurations() {
    this._durations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationsInput() {
    return this._durations;
  }

  // offering_ids - computed: false, optional: true, required: false
  private _offeringIds?: string[]; 
  public get offeringIds() {
    return cdktn.Fn.tolist(this.getListAttribute('offering_ids'));
  }
  public set offeringIds(value: string[]) {
    this._offeringIds = value;
  }
  public resetOfferingIds() {
    this._offeringIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringIdsInput() {
    return this._offeringIds;
  }

  // offerings - computed: true, optional: false, required: false
  private _offerings = new DataAwsSavingsplansOfferingsOfferingsList(this, "offerings", false);
  public get offerings() {
    return this._offerings;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return cdktn.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // payment_options - computed: false, optional: true, required: false
  private _paymentOptions?: string[]; 
  public get paymentOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('payment_options'));
  }
  public set paymentOptions(value: string[]) {
    this._paymentOptions = value;
  }
  public resetPaymentOptions() {
    this._paymentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentOptionsInput() {
    return this._paymentOptions;
  }

  // plan_types - computed: false, optional: true, required: false
  private _planTypes?: string[]; 
  public get planTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('plan_types'));
  }
  public set planTypes(value: string[]) {
    this._planTypes = value;
  }
  public resetPlanTypes() {
    this._planTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypesInput() {
    return this._planTypes;
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // service_codes - computed: false, optional: true, required: false
  private _serviceCodes?: string[]; 
  public get serviceCodes() {
    return cdktn.Fn.tolist(this.getListAttribute('service_codes'));
  }
  public set serviceCodes(value: string[]) {
    this._serviceCodes = value;
  }
  public resetServiceCodes() {
    this._serviceCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodesInput() {
    return this._serviceCodes;
  }

  // usage_types - computed: false, optional: true, required: false
  private _usageTypes?: string[]; 
  public get usageTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('usage_types'));
  }
  public set usageTypes(value: string[]) {
    this._usageTypes = value;
  }
  public resetUsageTypes() {
    this._usageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypesInput() {
    return this._usageTypes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsSavingsplansOfferingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsSavingsplansOfferingsFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      currencies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._currencies),
      descriptions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._descriptions),
      durations: cdktn.listMapper(cdktn.numberToTerraform, false)(this._durations),
      offering_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._offeringIds),
      operations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._operations),
      payment_options: cdktn.listMapper(cdktn.stringToTerraform, false)(this._paymentOptions),
      plan_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._planTypes),
      product_type: cdktn.stringToTerraform(this._productType),
      service_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serviceCodes),
      usage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._usageTypes),
      filter: cdktn.listMapper(dataAwsSavingsplansOfferingsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      currencies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._currencies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      descriptions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._descriptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      durations: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._durations),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      offering_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._offeringIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._operations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      payment_options: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._paymentOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      plan_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._planTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      product_type: {
        value: cdktn.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_codes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serviceCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      usage_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._usageTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktn.listMapperHcl(dataAwsSavingsplansOfferingsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSavingsplansOfferingsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
