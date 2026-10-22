/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchOtelEnrichmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#region CloudwatchOtelEnrichment#region}
  */
  readonly region?: string;
  /**
  * exclude_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#exclude_filter CloudwatchOtelEnrichment#exclude_filter}
  */
  readonly excludeFilter?: CloudwatchOtelEnrichmentExcludeFilter[] | cdktn.IResolvable;
  /**
  * include_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#include_filter CloudwatchOtelEnrichment#include_filter}
  */
  readonly includeFilter?: CloudwatchOtelEnrichmentIncludeFilter[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#timeouts CloudwatchOtelEnrichment#timeouts}
  */
  readonly timeouts?: CloudwatchOtelEnrichmentTimeouts;
}
export interface CloudwatchOtelEnrichmentExcludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchOtelEnrichmentExcludeFilterToTerraform(struct?: CloudwatchOtelEnrichmentExcludeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchOtelEnrichmentExcludeFilterToHclTerraform(struct?: CloudwatchOtelEnrichmentExcludeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchOtelEnrichmentExcludeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchOtelEnrichmentExcludeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchOtelEnrichmentExcludeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktn.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchOtelEnrichmentExcludeFilterList extends cdktn.ComplexList {
  public internalValue? : CloudwatchOtelEnrichmentExcludeFilter[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchOtelEnrichmentExcludeFilterOutputReference {
    return new CloudwatchOtelEnrichmentExcludeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchOtelEnrichmentIncludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchOtelEnrichmentIncludeFilterToTerraform(struct?: CloudwatchOtelEnrichmentIncludeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchOtelEnrichmentIncludeFilterToHclTerraform(struct?: CloudwatchOtelEnrichmentIncludeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchOtelEnrichmentIncludeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchOtelEnrichmentIncludeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchOtelEnrichmentIncludeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktn.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchOtelEnrichmentIncludeFilterList extends cdktn.ComplexList {
  public internalValue? : CloudwatchOtelEnrichmentIncludeFilter[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchOtelEnrichmentIncludeFilterOutputReference {
    return new CloudwatchOtelEnrichmentIncludeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchOtelEnrichmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#create CloudwatchOtelEnrichment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#delete CloudwatchOtelEnrichment#delete}
  */
  readonly delete?: string;
}

export function cloudwatchOtelEnrichmentTimeoutsToTerraform(struct?: CloudwatchOtelEnrichmentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function cloudwatchOtelEnrichmentTimeoutsToHclTerraform(struct?: CloudwatchOtelEnrichmentTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchOtelEnrichmentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchOtelEnrichmentTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchOtelEnrichmentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment aws_cloudwatch_otel_enrichment}
*/
export class CloudwatchOtelEnrichment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_otel_enrichment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchOtelEnrichment to import
  * @param importFromId The id of the existing CloudwatchOtelEnrichment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_otel_enrichment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment aws_cloudwatch_otel_enrichment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchOtelEnrichmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudwatchOtelEnrichmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_otel_enrichment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.70.0',
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
    this._excludeFilter.internalValue = config.excludeFilter;
    this._includeFilter.internalValue = config.includeFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // exclude_filter - computed: false, optional: true, required: false
  private _excludeFilter = new CloudwatchOtelEnrichmentExcludeFilterList(this, "exclude_filter", true);
  public get excludeFilter() {
    return this._excludeFilter;
  }
  public putExcludeFilter(value: CloudwatchOtelEnrichmentExcludeFilter[] | cdktn.IResolvable) {
    this._excludeFilter.internalValue = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter.internalValue;
  }

  // include_filter - computed: false, optional: true, required: false
  private _includeFilter = new CloudwatchOtelEnrichmentIncludeFilterList(this, "include_filter", true);
  public get includeFilter() {
    return this._includeFilter;
  }
  public putIncludeFilter(value: CloudwatchOtelEnrichmentIncludeFilter[] | cdktn.IResolvable) {
    this._includeFilter.internalValue = value;
  }
  public resetIncludeFilter() {
    this._includeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudwatchOtelEnrichmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudwatchOtelEnrichmentTimeouts) {
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
      exclude_filter: cdktn.listMapper(cloudwatchOtelEnrichmentExcludeFilterToTerraform, true)(this._excludeFilter.internalValue),
      include_filter: cdktn.listMapper(cloudwatchOtelEnrichmentIncludeFilterToTerraform, true)(this._includeFilter.internalValue),
      timeouts: cloudwatchOtelEnrichmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      exclude_filter: {
        value: cdktn.listMapperHcl(cloudwatchOtelEnrichmentExcludeFilterToHclTerraform, true)(this._excludeFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchOtelEnrichmentExcludeFilterList",
      },
      include_filter: {
        value: cdktn.listMapperHcl(cloudwatchOtelEnrichmentIncludeFilterToHclTerraform, true)(this._includeFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchOtelEnrichmentIncludeFilterList",
      },
      timeouts: {
        value: cloudwatchOtelEnrichmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudwatchOtelEnrichmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
