/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchLogDeliveryDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_type CloudwatchLogDeliveryDestination#delivery_destination_type}
  */
  readonly deliveryDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#region CloudwatchLogDeliveryDestination#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * delivery_destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_configuration CloudwatchLogDeliveryDestination#delivery_destination_configuration}
  */
  readonly deliveryDestinationConfiguration?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktn.IResolvable;
}
export interface CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}
  */
  readonly destinationResourceArn?: string;
}

export function cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToTerraform(struct?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_resource_arn: cdktn.stringToTerraform(struct!.destinationResourceArn),
  }
}


export function cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToHclTerraform(struct?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationResourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationResourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationResourceArn = this._destinationResourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationResourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationResourceArn = value.destinationResourceArn;
    }
  }

  // destination_resource_arn - computed: false, optional: true, required: false
  private _destinationResourceArn?: string; 
  public get destinationResourceArn() {
    return this.getStringAttribute('destination_resource_arn');
  }
  public set destinationResourceArn(value: string) {
    this._destinationResourceArn = value;
  }
  public resetDestinationResourceArn() {
    this._destinationResourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationResourceArnInput() {
    return this._destinationResourceArn;
  }
}

export class CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference {
    return new CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination}
*/
export class CloudwatchLogDeliveryDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_delivery_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogDeliveryDestination to import
  * @param importFromId The id of the existing CloudwatchLogDeliveryDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogDeliveryDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_delivery_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogDeliveryDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_delivery_destination',
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
    this._deliveryDestinationType = config.deliveryDestinationType;
    this._name = config.name;
    this._outputFormat = config.outputFormat;
    this._region = config.region;
    this._tags = config.tags;
    this._deliveryDestinationConfiguration.internalValue = config.deliveryDestinationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_destination_type - computed: true, optional: true, required: false
  private _deliveryDestinationType?: string; 
  public get deliveryDestinationType() {
    return this.getStringAttribute('delivery_destination_type');
  }
  public set deliveryDestinationType(value: string) {
    this._deliveryDestinationType = value;
  }
  public resetDeliveryDestinationType() {
    this._deliveryDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDestinationTypeInput() {
    return this._deliveryDestinationType;
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

  // delivery_destination_configuration - computed: false, optional: true, required: false
  private _deliveryDestinationConfiguration = new CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList(this, "delivery_destination_configuration", false);
  public get deliveryDestinationConfiguration() {
    return this._deliveryDestinationConfiguration;
  }
  public putDeliveryDestinationConfiguration(value: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktn.IResolvable) {
    this._deliveryDestinationConfiguration.internalValue = value;
  }
  public resetDeliveryDestinationConfiguration() {
    this._deliveryDestinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDestinationConfigurationInput() {
    return this._deliveryDestinationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_destination_type: cdktn.stringToTerraform(this._deliveryDestinationType),
      name: cdktn.stringToTerraform(this._name),
      output_format: cdktn.stringToTerraform(this._outputFormat),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      delivery_destination_configuration: cdktn.listMapper(cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToTerraform, true)(this._deliveryDestinationConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_destination_type: {
        value: cdktn.stringToHclTerraform(this._deliveryDestinationType),
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
      output_format: {
        value: cdktn.stringToHclTerraform(this._outputFormat),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delivery_destination_configuration: {
        value: cdktn.listMapperHcl(cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToHclTerraform, true)(this._deliveryDestinationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
