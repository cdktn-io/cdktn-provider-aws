/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PrometheusScraperLoggingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}
  */
  readonly scraperComponents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}
  */
  readonly scraperId: string;
  /**
  * logging_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}
  */
  readonly loggingDestination?: PrometheusScraperLoggingConfigurationLoggingDestination[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}
  */
  readonly timeouts?: PrometheusScraperLoggingConfigurationTimeouts;
}
export interface PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}
  */
  readonly logGroupArn: string;
}

export function prometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToTerraform(struct?: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function prometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToHclTerraform(struct?: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}

export class PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList extends cdktn.ComplexList {
  public internalValue? : PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[] | cdktn.IResolvable

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
  public get(index: number): PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference {
    return new PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperLoggingConfigurationLoggingDestination {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#cloudwatch_logs PrometheusScraperLoggingConfiguration#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[] | cdktn.IResolvable;
}

export function prometheusScraperLoggingConfigurationLoggingDestinationToTerraform(struct?: PrometheusScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: cdktn.listMapper(prometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToTerraform, true)(struct!.cloudwatchLogs),
  }
}


export function prometheusScraperLoggingConfigurationLoggingDestinationToHclTerraform(struct?: PrometheusScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: cdktn.listMapperHcl(prometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToHclTerraform, true)(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList(this, "cloudwatch_logs", false);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[] | cdktn.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }
}

export class PrometheusScraperLoggingConfigurationLoggingDestinationList extends cdktn.ComplexList {
  public internalValue? : PrometheusScraperLoggingConfigurationLoggingDestination[] | cdktn.IResolvable

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
  public get(index: number): PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference {
    return new PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusScraperLoggingConfigurationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}
  */
  readonly update?: string;
}

export function prometheusScraperLoggingConfigurationTimeoutsToTerraform(struct?: PrometheusScraperLoggingConfigurationTimeouts | cdktn.IResolvable): any {
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


export function prometheusScraperLoggingConfigurationTimeoutsToHclTerraform(struct?: PrometheusScraperLoggingConfigurationTimeouts | cdktn.IResolvable): any {
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

export class PrometheusScraperLoggingConfigurationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrometheusScraperLoggingConfigurationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PrometheusScraperLoggingConfigurationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration}
*/
export class PrometheusScraperLoggingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_prometheus_scraper_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrometheusScraperLoggingConfiguration to import
  * @param importFromId The id of the existing PrometheusScraperLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrometheusScraperLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_prometheus_scraper_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrometheusScraperLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PrometheusScraperLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_prometheus_scraper_logging_configuration',
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
    this._region = config.region;
    this._scraperComponents = config.scraperComponents;
    this._scraperId = config.scraperId;
    this._loggingDestination.internalValue = config.loggingDestination;
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

  // scraper_components - computed: true, optional: true, required: false
  private _scraperComponents?: string[]; 
  public get scraperComponents() {
    return cdktn.Fn.tolist(this.getListAttribute('scraper_components'));
  }
  public set scraperComponents(value: string[]) {
    this._scraperComponents = value;
  }
  public resetScraperComponents() {
    this._scraperComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperComponentsInput() {
    return this._scraperComponents;
  }

  // scraper_id - computed: false, optional: false, required: true
  private _scraperId?: string; 
  public get scraperId() {
    return this.getStringAttribute('scraper_id');
  }
  public set scraperId(value: string) {
    this._scraperId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperIdInput() {
    return this._scraperId;
  }

  // logging_destination - computed: false, optional: true, required: false
  private _loggingDestination = new PrometheusScraperLoggingConfigurationLoggingDestinationList(this, "logging_destination", false);
  public get loggingDestination() {
    return this._loggingDestination;
  }
  public putLoggingDestination(value: PrometheusScraperLoggingConfigurationLoggingDestination[] | cdktn.IResolvable) {
    this._loggingDestination.internalValue = value;
  }
  public resetLoggingDestination() {
    this._loggingDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDestinationInput() {
    return this._loggingDestination.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrometheusScraperLoggingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrometheusScraperLoggingConfigurationTimeouts) {
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
      scraper_components: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scraperComponents),
      scraper_id: cdktn.stringToTerraform(this._scraperId),
      logging_destination: cdktn.listMapper(prometheusScraperLoggingConfigurationLoggingDestinationToTerraform, true)(this._loggingDestination.internalValue),
      timeouts: prometheusScraperLoggingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      scraper_components: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scraperComponents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scraper_id: {
        value: cdktn.stringToHclTerraform(this._scraperId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_destination: {
        value: cdktn.listMapperHcl(prometheusScraperLoggingConfigurationLoggingDestinationToHclTerraform, true)(this._loggingDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrometheusScraperLoggingConfigurationLoggingDestinationList",
      },
      timeouts: {
        value: prometheusScraperLoggingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrometheusScraperLoggingConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
