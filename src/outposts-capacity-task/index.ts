/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OutpostsCapacityTaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}
  */
  readonly assetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}
  */
  readonly orderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}
  */
  readonly outpostIdentifier: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}
  */
  readonly taskActionOnBlockingInstances?: string;
  /**
  * instance_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}
  */
  readonly instancePool?: OutpostsCapacityTaskInstancePool[] | cdktn.IResolvable;
  /**
  * instances_to_exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}
  */
  readonly instancesToExclude?: OutpostsCapacityTaskInstancesToExclude[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}
  */
  readonly timeouts?: OutpostsCapacityTaskTimeouts;
}
export interface OutpostsCapacityTaskInstancePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}
  */
  readonly instanceType: string;
}

export function outpostsCapacityTaskInstancePoolToTerraform(struct?: OutpostsCapacityTaskInstancePool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function outpostsCapacityTaskInstancePoolToHclTerraform(struct?: OutpostsCapacityTaskInstancePool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutpostsCapacityTaskInstancePoolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutpostsCapacityTaskInstancePool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutpostsCapacityTaskInstancePool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._instanceType = value.instanceType;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class OutpostsCapacityTaskInstancePoolList extends cdktn.ComplexList {
  public internalValue? : OutpostsCapacityTaskInstancePool[] | cdktn.IResolvable

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
  public get(index: number): OutpostsCapacityTaskInstancePoolOutputReference {
    return new OutpostsCapacityTaskInstancePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutpostsCapacityTaskInstancesToExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}
  */
  readonly instances: string[];
}

export function outpostsCapacityTaskInstancesToExcludeToTerraform(struct?: OutpostsCapacityTaskInstancesToExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instances: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instances),
  }
}


export function outpostsCapacityTaskInstancesToExcludeToHclTerraform(struct?: OutpostsCapacityTaskInstancesToExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instances: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutpostsCapacityTaskInstancesToExcludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutpostsCapacityTaskInstancesToExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutpostsCapacityTaskInstancesToExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instances = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instances = value.instances;
    }
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: string[]; 
  public get instances() {
    return cdktn.Fn.tolist(this.getListAttribute('instances'));
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}

export class OutpostsCapacityTaskInstancesToExcludeList extends cdktn.ComplexList {
  public internalValue? : OutpostsCapacityTaskInstancesToExclude[] | cdktn.IResolvable

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
  public get(index: number): OutpostsCapacityTaskInstancesToExcludeOutputReference {
    return new OutpostsCapacityTaskInstancesToExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutpostsCapacityTaskTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}
  */
  readonly delete?: string;
}

export function outpostsCapacityTaskTimeoutsToTerraform(struct?: OutpostsCapacityTaskTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function outpostsCapacityTaskTimeoutsToHclTerraform(struct?: OutpostsCapacityTaskTimeouts | cdktn.IResolvable): any {
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

export class OutpostsCapacityTaskTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OutpostsCapacityTaskTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OutpostsCapacityTaskTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}
*/
export class OutpostsCapacityTask extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_outposts_capacity_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutpostsCapacityTask to import
  * @param importFromId The id of the existing OutpostsCapacityTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutpostsCapacityTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_outposts_capacity_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutpostsCapacityTaskConfig
  */
  public constructor(scope: Construct, id: string, config: OutpostsCapacityTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_capacity_task',
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
    this._assetId = config.assetId;
    this._orderId = config.orderId;
    this._outpostIdentifier = config.outpostIdentifier;
    this._region = config.region;
    this._taskActionOnBlockingInstances = config.taskActionOnBlockingInstances;
    this._instancePool.internalValue = config.instancePool;
    this._instancesToExclude.internalValue = config.instancesToExclude;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: true, optional: true, required: false
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // capacity_task_id - computed: true, optional: false, required: false
  public get capacityTaskId() {
    return this.getStringAttribute('capacity_task_id');
  }

  // completion_date - computed: true, optional: false, required: false
  public get completionDate() {
    return this.getStringAttribute('completion_date');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: string; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // outpost_identifier - computed: false, optional: false, required: true
  private _outpostIdentifier?: string; 
  public get outpostIdentifier() {
    return this.getStringAttribute('outpost_identifier');
  }
  public set outpostIdentifier(value: string) {
    this._outpostIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostIdentifierInput() {
    return this._outpostIdentifier;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_action_on_blocking_instances - computed: true, optional: true, required: false
  private _taskActionOnBlockingInstances?: string; 
  public get taskActionOnBlockingInstances() {
    return this.getStringAttribute('task_action_on_blocking_instances');
  }
  public set taskActionOnBlockingInstances(value: string) {
    this._taskActionOnBlockingInstances = value;
  }
  public resetTaskActionOnBlockingInstances() {
    this._taskActionOnBlockingInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskActionOnBlockingInstancesInput() {
    return this._taskActionOnBlockingInstances;
  }

  // instance_pool - computed: false, optional: true, required: false
  private _instancePool = new OutpostsCapacityTaskInstancePoolList(this, "instance_pool", false);
  public get instancePool() {
    return this._instancePool;
  }
  public putInstancePool(value: OutpostsCapacityTaskInstancePool[] | cdktn.IResolvable) {
    this._instancePool.internalValue = value;
  }
  public resetInstancePool() {
    this._instancePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolInput() {
    return this._instancePool.internalValue;
  }

  // instances_to_exclude - computed: false, optional: true, required: false
  private _instancesToExclude = new OutpostsCapacityTaskInstancesToExcludeList(this, "instances_to_exclude", false);
  public get instancesToExclude() {
    return this._instancesToExclude;
  }
  public putInstancesToExclude(value: OutpostsCapacityTaskInstancesToExclude[] | cdktn.IResolvable) {
    this._instancesToExclude.internalValue = value;
  }
  public resetInstancesToExclude() {
    this._instancesToExclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesToExcludeInput() {
    return this._instancesToExclude.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OutpostsCapacityTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OutpostsCapacityTaskTimeouts) {
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
      asset_id: cdktn.stringToTerraform(this._assetId),
      order_id: cdktn.stringToTerraform(this._orderId),
      outpost_identifier: cdktn.stringToTerraform(this._outpostIdentifier),
      region: cdktn.stringToTerraform(this._region),
      task_action_on_blocking_instances: cdktn.stringToTerraform(this._taskActionOnBlockingInstances),
      instance_pool: cdktn.listMapper(outpostsCapacityTaskInstancePoolToTerraform, true)(this._instancePool.internalValue),
      instances_to_exclude: cdktn.listMapper(outpostsCapacityTaskInstancesToExcludeToTerraform, true)(this._instancesToExclude.internalValue),
      timeouts: outpostsCapacityTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_id: {
        value: cdktn.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_id: {
        value: cdktn.stringToHclTerraform(this._orderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outpost_identifier: {
        value: cdktn.stringToHclTerraform(this._outpostIdentifier),
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
      task_action_on_blocking_instances: {
        value: cdktn.stringToHclTerraform(this._taskActionOnBlockingInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_pool: {
        value: cdktn.listMapperHcl(outpostsCapacityTaskInstancePoolToHclTerraform, true)(this._instancePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutpostsCapacityTaskInstancePoolList",
      },
      instances_to_exclude: {
        value: cdktn.listMapperHcl(outpostsCapacityTaskInstancesToExcludeToHclTerraform, true)(this._instancesToExclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutpostsCapacityTaskInstancesToExcludeList",
      },
      timeouts: {
        value: outpostsCapacityTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OutpostsCapacityTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
