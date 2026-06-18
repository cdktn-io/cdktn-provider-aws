/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Pinpointsmsvoicev2EventDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the configuration set this event destination belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Whether the event destination is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the event destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}
  */
  readonly eventDestinationName: string;
  /**
  * Event types for which the destination receives records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}
  */
  readonly matchingEventTypes: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}
  */
  readonly region?: string;
  /**
  * cloudwatch_logs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}
  */
  readonly cloudwatchLogsDestination?: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] | cdktn.IResolvable;
  /**
  * kinesis_firehose_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}
  */
  readonly kinesisFirehoseDestination?: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] | cdktn.IResolvable;
  /**
  * sns_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}
  */
  readonly snsDestination?: Pinpointsmsvoicev2EventDestinationSnsDestination[] | cdktn.IResolvable;
}
export interface Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination {
  /**
  * ARN of the IAM role that End User Messaging SMS assumes to write to the log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * ARN of the Amazon CloudWatch log group that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#log_group_arn Pinpointsmsvoicev2EventDestination#log_group_arn}
  */
  readonly logGroupArn: string;
}

export function pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationToTerraform(struct?: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationToHclTerraform(struct?: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRoleArn = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRoleArn = value.iamRoleArn;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

export class Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList extends cdktn.ComplexList {
  public internalValue? : Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] | cdktn.IResolvable

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
  public get(index: number): Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference {
    return new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination {
  /**
  * ARN of the Amazon Data Firehose delivery stream that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#delivery_stream_arn Pinpointsmsvoicev2EventDestination#delivery_stream_arn}
  */
  readonly deliveryStreamArn: string;
  /**
  * ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
}

export function pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationToTerraform(struct?: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
  }
}


export function pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationToHclTerraform(struct?: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamArn = undefined;
      this._iamRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamArn = value.deliveryStreamArn;
      this._iamRoleArn = value.iamRoleArn;
    }
  }

  // delivery_stream_arn - computed: false, optional: false, required: true
  private _deliveryStreamArn?: string; 
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
  public set deliveryStreamArn(value: string) {
    this._deliveryStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamArnInput() {
    return this._deliveryStreamArn;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }
}

export class Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList extends cdktn.ComplexList {
  public internalValue? : Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] | cdktn.IResolvable

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
  public get(index: number): Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference {
    return new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Pinpointsmsvoicev2EventDestinationSnsDestination {
  /**
  * ARN of the Amazon SNS topic that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#topic_arn Pinpointsmsvoicev2EventDestination#topic_arn}
  */
  readonly topicArn: string;
}

export function pinpointsmsvoicev2EventDestinationSnsDestinationToTerraform(struct?: Pinpointsmsvoicev2EventDestinationSnsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function pinpointsmsvoicev2EventDestinationSnsDestinationToHclTerraform(struct?: Pinpointsmsvoicev2EventDestinationSnsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Pinpointsmsvoicev2EventDestinationSnsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Pinpointsmsvoicev2EventDestinationSnsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicArn = value.topicArn;
    }
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class Pinpointsmsvoicev2EventDestinationSnsDestinationList extends cdktn.ComplexList {
  public internalValue? : Pinpointsmsvoicev2EventDestinationSnsDestination[] | cdktn.IResolvable

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
  public get(index: number): Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference {
    return new Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination}
*/
export class Pinpointsmsvoicev2EventDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_event_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2EventDestination to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2EventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2EventDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_event_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2EventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2EventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_event_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._configurationSetName = config.configurationSetName;
    this._enabled = config.enabled;
    this._eventDestinationName = config.eventDestinationName;
    this._matchingEventTypes = config.matchingEventTypes;
    this._region = config.region;
    this._cloudwatchLogsDestination.internalValue = config.cloudwatchLogsDestination;
    this._kinesisFirehoseDestination.internalValue = config.kinesisFirehoseDestination;
    this._snsDestination.internalValue = config.snsDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_arn - computed: true, optional: false, required: false
  public get configurationSetArn() {
    return this.getStringAttribute('configuration_set_arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_destination_name - computed: false, optional: false, required: true
  private _eventDestinationName?: string; 
  public get eventDestinationName() {
    return this.getStringAttribute('event_destination_name');
  }
  public set eventDestinationName(value: string) {
    this._eventDestinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDestinationNameInput() {
    return this._eventDestinationName;
  }

  // matching_event_types - computed: false, optional: false, required: true
  private _matchingEventTypes?: string[]; 
  public get matchingEventTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('matching_event_types'));
  }
  public set matchingEventTypes(value: string[]) {
    this._matchingEventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEventTypesInput() {
    return this._matchingEventTypes;
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

  // cloudwatch_logs_destination - computed: false, optional: true, required: false
  private _cloudwatchLogsDestination = new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList(this, "cloudwatch_logs_destination", false);
  public get cloudwatchLogsDestination() {
    return this._cloudwatchLogsDestination;
  }
  public putCloudwatchLogsDestination(value: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] | cdktn.IResolvable) {
    this._cloudwatchLogsDestination.internalValue = value;
  }
  public resetCloudwatchLogsDestination() {
    this._cloudwatchLogsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsDestinationInput() {
    return this._cloudwatchLogsDestination.internalValue;
  }

  // kinesis_firehose_destination - computed: false, optional: true, required: false
  private _kinesisFirehoseDestination = new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList(this, "kinesis_firehose_destination", false);
  public get kinesisFirehoseDestination() {
    return this._kinesisFirehoseDestination;
  }
  public putKinesisFirehoseDestination(value: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] | cdktn.IResolvable) {
    this._kinesisFirehoseDestination.internalValue = value;
  }
  public resetKinesisFirehoseDestination() {
    this._kinesisFirehoseDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDestinationInput() {
    return this._kinesisFirehoseDestination.internalValue;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination = new Pinpointsmsvoicev2EventDestinationSnsDestinationList(this, "sns_destination", false);
  public get snsDestination() {
    return this._snsDestination;
  }
  public putSnsDestination(value: Pinpointsmsvoicev2EventDestinationSnsDestination[] | cdktn.IResolvable) {
    this._snsDestination.internalValue = value;
  }
  public resetSnsDestination() {
    this._snsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      event_destination_name: cdktn.stringToTerraform(this._eventDestinationName),
      matching_event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._matchingEventTypes),
      region: cdktn.stringToTerraform(this._region),
      cloudwatch_logs_destination: cdktn.listMapper(pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationToTerraform, true)(this._cloudwatchLogsDestination.internalValue),
      kinesis_firehose_destination: cdktn.listMapper(pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationToTerraform, true)(this._kinesisFirehoseDestination.internalValue),
      sns_destination: cdktn.listMapper(pinpointsmsvoicev2EventDestinationSnsDestinationToTerraform, true)(this._snsDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_name: {
        value: cdktn.stringToHclTerraform(this._configurationSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_destination_name: {
        value: cdktn.stringToHclTerraform(this._eventDestinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_event_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._matchingEventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_logs_destination: {
        value: cdktn.listMapperHcl(pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationToHclTerraform, true)(this._cloudwatchLogsDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList",
      },
      kinesis_firehose_destination: {
        value: cdktn.listMapperHcl(pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationToHclTerraform, true)(this._kinesisFirehoseDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList",
      },
      sns_destination: {
        value: cdktn.listMapperHcl(pinpointsmsvoicev2EventDestinationSnsDestinationToHclTerraform, true)(this._snsDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Pinpointsmsvoicev2EventDestinationSnsDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
