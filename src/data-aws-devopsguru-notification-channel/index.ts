/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsDevopsguruNotificationChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel#region DataAwsDevopsguruNotificationChannel#region}
  */
  readonly region?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}
  */
  readonly filters?: DataAwsDevopsguruNotificationChannelFilters[] | cdktn.IResolvable;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}
  */
  readonly sns?: DataAwsDevopsguruNotificationChannelSns[] | cdktn.IResolvable;
}
export interface DataAwsDevopsguruNotificationChannelFilters {
}

export function dataAwsDevopsguruNotificationChannelFiltersToTerraform(struct?: DataAwsDevopsguruNotificationChannelFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsDevopsguruNotificationChannelFiltersToHclTerraform(struct?: DataAwsDevopsguruNotificationChannelFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDevopsguruNotificationChannelFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsDevopsguruNotificationChannelFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDevopsguruNotificationChannelFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // message_types - computed: true, optional: false, required: false
  public get messageTypes() {
    return this.getListAttribute('message_types');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }
}

export class DataAwsDevopsguruNotificationChannelFiltersList extends cdktn.ComplexList {
  public internalValue? : DataAwsDevopsguruNotificationChannelFilters[] | cdktn.IResolvable

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
  public get(index: number): DataAwsDevopsguruNotificationChannelFiltersOutputReference {
    return new DataAwsDevopsguruNotificationChannelFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDevopsguruNotificationChannelSns {
}

export function dataAwsDevopsguruNotificationChannelSnsToTerraform(struct?: DataAwsDevopsguruNotificationChannelSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsDevopsguruNotificationChannelSnsToHclTerraform(struct?: DataAwsDevopsguruNotificationChannelSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsDevopsguruNotificationChannelSnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsDevopsguruNotificationChannelSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDevopsguruNotificationChannelSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export class DataAwsDevopsguruNotificationChannelSnsList extends cdktn.ComplexList {
  public internalValue? : DataAwsDevopsguruNotificationChannelSns[] | cdktn.IResolvable

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
  public get(index: number): DataAwsDevopsguruNotificationChannelSnsOutputReference {
    return new DataAwsDevopsguruNotificationChannelSnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel}
*/
export class DataAwsDevopsguruNotificationChannel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devopsguru_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDevopsguruNotificationChannel to import
  * @param importFromId The id of the existing DataAwsDevopsguruNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDevopsguruNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_devopsguru_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDevopsguruNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDevopsguruNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devopsguru_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._id = config.id;
    this._region = config.region;
    this._filters.internalValue = config.filters;
    this._sns.internalValue = config.sns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataAwsDevopsguruNotificationChannelFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataAwsDevopsguruNotificationChannelFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new DataAwsDevopsguruNotificationChannelSnsList(this, "sns", false);
  public get sns() {
    return this._sns;
  }
  public putSns(value: DataAwsDevopsguruNotificationChannelSns[] | cdktn.IResolvable) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      filters: cdktn.listMapper(dataAwsDevopsguruNotificationChannelFiltersToTerraform, true)(this._filters.internalValue),
      sns: cdktn.listMapper(dataAwsDevopsguruNotificationChannelSnsToTerraform, true)(this._sns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      filters: {
        value: cdktn.listMapperHcl(dataAwsDevopsguruNotificationChannelFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsDevopsguruNotificationChannelFiltersList",
      },
      sns: {
        value: cdktn.listMapperHcl(dataAwsDevopsguruNotificationChannelSnsToHclTerraform, true)(this._sns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsDevopsguruNotificationChannelSnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
