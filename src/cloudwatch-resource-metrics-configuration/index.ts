/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchResourceMetricsConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration#region CloudwatchResourceMetricsConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * metric_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selection CloudwatchResourceMetricsConfiguration#metric_selection}
  */
  readonly metricSelection?: CloudwatchResourceMetricsConfigurationMetricSelection[] | cdktn.IResolvable;
}
export interface CloudwatchResourceMetricsConfigurationMetricSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}
  */
  readonly includeMetrics: string[];
}

export function cloudwatchResourceMetricsConfigurationMetricSelectionToTerraform(struct?: CloudwatchResourceMetricsConfigurationMetricSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeMetrics),
  }
}


export function cloudwatchResourceMetricsConfigurationMetricSelectionToHclTerraform(struct?: CloudwatchResourceMetricsConfigurationMetricSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_metrics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeMetrics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchResourceMetricsConfigurationMetricSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMetrics = this._includeMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchResourceMetricsConfigurationMetricSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeMetrics = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeMetrics = value.includeMetrics;
    }
  }

  // include_metrics - computed: false, optional: false, required: true
  private _includeMetrics?: string[]; 
  public get includeMetrics() {
    return cdktn.Fn.tolist(this.getListAttribute('include_metrics'));
  }
  public set includeMetrics(value: string[]) {
    this._includeMetrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMetricsInput() {
    return this._includeMetrics;
  }
}

export class CloudwatchResourceMetricsConfigurationMetricSelectionList extends cdktn.ComplexList {
  public internalValue? : CloudwatchResourceMetricsConfigurationMetricSelection[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference {
    return new CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration aws_cloudwatch_resource_metrics_configuration}
*/
export class CloudwatchResourceMetricsConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_resource_metrics_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import
  * @param importFromId The id of the existing CloudwatchResourceMetricsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_resource_metrics_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/cloudwatch_resource_metrics_configuration aws_cloudwatch_resource_metrics_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchResourceMetricsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchResourceMetricsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_resource_metrics_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.69.0',
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
    this._resourceArn = config.resourceArn;
    this._metricSelection.internalValue = config.metricSelection;
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // metric_selection - computed: false, optional: true, required: false
  private _metricSelection = new CloudwatchResourceMetricsConfigurationMetricSelectionList(this, "metric_selection", false);
  public get metricSelection() {
    return this._metricSelection;
  }
  public putMetricSelection(value: CloudwatchResourceMetricsConfigurationMetricSelection[] | cdktn.IResolvable) {
    this._metricSelection.internalValue = value;
  }
  public resetMetricSelection() {
    this._metricSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectionInput() {
    return this._metricSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
      metric_selection: cdktn.listMapper(cloudwatchResourceMetricsConfigurationMetricSelectionToTerraform, true)(this._metricSelection.internalValue),
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
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_selection: {
        value: cdktn.listMapperHcl(cloudwatchResourceMetricsConfigurationMetricSelectionToHclTerraform, true)(this._metricSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchResourceMetricsConfigurationMetricSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
