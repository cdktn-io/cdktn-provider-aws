/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Resourceexplorer2ViewConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}
  */
  readonly defaultView?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#region Resourceexplorer2View#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#scope Resourceexplorer2View#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#tags Resourceexplorer2View#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#filters Resourceexplorer2View#filters}
  */
  readonly filters?: Resourceexplorer2ViewFilters[] | cdktn.IResolvable;
  /**
  * included_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}
  */
  readonly includedProperty?: Resourceexplorer2ViewIncludedProperty[] | cdktn.IResolvable;
}
export interface Resourceexplorer2ViewFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}
  */
  readonly filterString: string;
}

export function resourceexplorer2ViewFiltersToTerraform(struct?: Resourceexplorer2ViewFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_string: cdktn.stringToTerraform(struct!.filterString),
  }
}


export function resourceexplorer2ViewFiltersToHclTerraform(struct?: Resourceexplorer2ViewFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_string: {
      value: cdktn.stringToHclTerraform(struct!.filterString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resourceexplorer2ViewFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resourceexplorer2ViewFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterString = this._filterString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resourceexplorer2ViewFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterString = value.filterString;
    }
  }

  // filter_string - computed: false, optional: false, required: true
  private _filterString?: string; 
  public get filterString() {
    return this.getStringAttribute('filter_string');
  }
  public set filterString(value: string) {
    this._filterString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStringInput() {
    return this._filterString;
  }
}

export class Resourceexplorer2ViewFiltersList extends cdktn.ComplexList {
  public internalValue? : Resourceexplorer2ViewFilters[] | cdktn.IResolvable

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
  public get(index: number): Resourceexplorer2ViewFiltersOutputReference {
    return new Resourceexplorer2ViewFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resourceexplorer2ViewIncludedProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}
  */
  readonly name: string;
}

export function resourceexplorer2ViewIncludedPropertyToTerraform(struct?: Resourceexplorer2ViewIncludedProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function resourceexplorer2ViewIncludedPropertyToHclTerraform(struct?: Resourceexplorer2ViewIncludedProperty | cdktn.IResolvable): any {
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

export class Resourceexplorer2ViewIncludedPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resourceexplorer2ViewIncludedProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Resourceexplorer2ViewIncludedProperty | cdktn.IResolvable | undefined) {
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

export class Resourceexplorer2ViewIncludedPropertyList extends cdktn.ComplexList {
  public internalValue? : Resourceexplorer2ViewIncludedProperty[] | cdktn.IResolvable

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
  public get(index: number): Resourceexplorer2ViewIncludedPropertyOutputReference {
    return new Resourceexplorer2ViewIncludedPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view aws_resourceexplorer2_view}
*/
export class Resourceexplorer2View extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resourceexplorer2_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Resourceexplorer2View resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resourceexplorer2View to import
  * @param importFromId The id of the existing Resourceexplorer2View that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resourceexplorer2View to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resourceexplorer2_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/resourceexplorer2_view aws_resourceexplorer2_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Resourceexplorer2ViewConfig
  */
  public constructor(scope: Construct, id: string, config: Resourceexplorer2ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resourceexplorer2_view',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.35.0',
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
    this._defaultView = config.defaultView;
    this._name = config.name;
    this._region = config.region;
    this._scope = config.scope;
    this._tags = config.tags;
    this._filters.internalValue = config.filters;
    this._includedProperty.internalValue = config.includedProperty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_view - computed: true, optional: true, required: false
  private _defaultView?: boolean | cdktn.IResolvable; 
  public get defaultView() {
    return this.getBooleanAttribute('default_view');
  }
  public set defaultView(value: boolean | cdktn.IResolvable) {
    this._defaultView = value;
  }
  public resetDefaultView() {
    this._defaultView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultViewInput() {
    return this._defaultView;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scope - computed: true, optional: true, required: false
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

  // filters - computed: false, optional: true, required: false
  private _filters = new Resourceexplorer2ViewFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: Resourceexplorer2ViewFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // included_property - computed: false, optional: true, required: false
  private _includedProperty = new Resourceexplorer2ViewIncludedPropertyList(this, "included_property", false);
  public get includedProperty() {
    return this._includedProperty;
  }
  public putIncludedProperty(value: Resourceexplorer2ViewIncludedProperty[] | cdktn.IResolvable) {
    this._includedProperty.internalValue = value;
  }
  public resetIncludedProperty() {
    this._includedProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPropertyInput() {
    return this._includedProperty.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_view: cdktn.booleanToTerraform(this._defaultView),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      scope: cdktn.stringToTerraform(this._scope),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      filters: cdktn.listMapper(resourceexplorer2ViewFiltersToTerraform, true)(this._filters.internalValue),
      included_property: cdktn.listMapper(resourceexplorer2ViewIncludedPropertyToTerraform, true)(this._includedProperty.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_view: {
        value: cdktn.booleanToHclTerraform(this._defaultView),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
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
      filters: {
        value: cdktn.listMapperHcl(resourceexplorer2ViewFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resourceexplorer2ViewFiltersList",
      },
      included_property: {
        value: cdktn.listMapperHcl(resourceexplorer2ViewIncludedPropertyToHclTerraform, true)(this._includedProperty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resourceexplorer2ViewIncludedPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
