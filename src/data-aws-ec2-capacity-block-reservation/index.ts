/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsEc2CapacityBlockReservationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#region DataAwsEc2CapacityBlockReservation#region}
  */
  readonly region?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#filter DataAwsEc2CapacityBlockReservation#filter}
  */
  readonly filter?: DataAwsEc2CapacityBlockReservationFilter[] | cdktn.IResolvable;
}
export interface DataAwsEc2CapacityBlockReservationCommitmentInfo {
}

export function dataAwsEc2CapacityBlockReservationCommitmentInfoToTerraform(struct?: DataAwsEc2CapacityBlockReservationCommitmentInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEc2CapacityBlockReservationCommitmentInfoToHclTerraform(struct?: DataAwsEc2CapacityBlockReservationCommitmentInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsEc2CapacityBlockReservationCommitmentInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2CapacityBlockReservationCommitmentInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_end_date - computed: true, optional: false, required: false
  public get commitmentEndDate() {
    return this.getStringAttribute('commitment_end_date');
  }

  // committed_instance_count - computed: true, optional: false, required: false
  public get committedInstanceCount() {
    return this.getNumberAttribute('committed_instance_count');
  }
}
export interface DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation {
}

export function dataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationToTerraform(struct?: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationToHclTerraform(struct?: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // interruptible_capacity_reservation_id - computed: true, optional: false, required: false
  public get interruptibleCapacityReservationId() {
    return this.getStringAttribute('interruptible_capacity_reservation_id');
  }

  // interruption_type - computed: true, optional: false, required: false
  public get interruptionType() {
    return this.getStringAttribute('interruption_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_instance_count - computed: true, optional: false, required: false
  public get targetInstanceCount() {
    return this.getNumberAttribute('target_instance_count');
  }
}
export interface DataAwsEc2CapacityBlockReservationInterruptionInfo {
}

export function dataAwsEc2CapacityBlockReservationInterruptionInfoToTerraform(struct?: DataAwsEc2CapacityBlockReservationInterruptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEc2CapacityBlockReservationInterruptionInfoToHclTerraform(struct?: DataAwsEc2CapacityBlockReservationInterruptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsEc2CapacityBlockReservationInterruptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2CapacityBlockReservationInterruptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interruption_type - computed: true, optional: false, required: false
  public get interruptionType() {
    return this.getStringAttribute('interruption_type');
  }

  // source_capacity_reservation_id - computed: true, optional: false, required: false
  public get sourceCapacityReservationId() {
    return this.getStringAttribute('source_capacity_reservation_id');
  }
}
export interface DataAwsEc2CapacityBlockReservationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}
  */
  readonly values: string[];
}

export function dataAwsEc2CapacityBlockReservationFilterToTerraform(struct?: DataAwsEc2CapacityBlockReservationFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsEc2CapacityBlockReservationFilterToHclTerraform(struct?: DataAwsEc2CapacityBlockReservationFilter | cdktn.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEc2CapacityBlockReservationFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEc2CapacityBlockReservationFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataAwsEc2CapacityBlockReservationFilter | cdktn.IResolvable | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsEc2CapacityBlockReservationFilterList extends cdktn.ComplexList {
  public internalValue? : DataAwsEc2CapacityBlockReservationFilter[] | cdktn.IResolvable

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
  public get(index: number): DataAwsEc2CapacityBlockReservationFilterOutputReference {
    return new DataAwsEc2CapacityBlockReservationFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}
*/
export class DataAwsEc2CapacityBlockReservation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_capacity_block_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEc2CapacityBlockReservation to import
  * @param importFromId The id of the existing DataAwsEc2CapacityBlockReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEc2CapacityBlockReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_capacity_block_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2CapacityBlockReservationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2CapacityBlockReservationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_capacity_block_reservation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.58.0',
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
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // available_instance_count - computed: true, optional: false, required: false
  public get availableInstanceCount() {
    return this.getNumberAttribute('available_instance_count');
  }

  // capacity_block_id - computed: true, optional: false, required: false
  public get capacityBlockId() {
    return this.getStringAttribute('capacity_block_id');
  }

  // commitment_info - computed: true, optional: false, required: false
  private _commitmentInfo = new DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference(this, "commitment_info");
  public get commitmentInfo() {
    return this._commitmentInfo;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // delivery_preference - computed: true, optional: false, required: false
  public get deliveryPreference() {
    return this.getStringAttribute('delivery_preference');
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_date_type - computed: true, optional: false, required: false
  public get endDateType() {
    return this.getStringAttribute('end_date_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_match_criteria - computed: true, optional: false, required: false
  public get instanceMatchCriteria() {
    return this.getStringAttribute('instance_match_criteria');
  }

  // instance_platform - computed: true, optional: false, required: false
  public get instancePlatform() {
    return this.getStringAttribute('instance_platform');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // interruptible_capacity_allocation - computed: true, optional: false, required: false
  private _interruptibleCapacityAllocation = new DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference(this, "interruptible_capacity_allocation");
  public get interruptibleCapacityAllocation() {
    return this._interruptibleCapacityAllocation;
  }

  // interruption_info - computed: true, optional: false, required: false
  private _interruptionInfo = new DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference(this, "interruption_info");
  public get interruptionInfo() {
    return this._interruptionInfo;
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // placement_group_arn - computed: true, optional: false, required: false
  public get placementGroupArn() {
    return this.getStringAttribute('placement_group_arn');
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

  // reservation_type - computed: true, optional: false, required: false
  public get reservationType() {
    return this.getStringAttribute('reservation_type');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsEc2CapacityBlockReservationFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsEc2CapacityBlockReservationFilter[] | cdktn.IResolvable) {
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
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      filter: cdktn.listMapper(dataAwsEc2CapacityBlockReservationFilterToTerraform, true)(this._filter.internalValue),
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
      filter: {
        value: cdktn.listMapperHcl(dataAwsEc2CapacityBlockReservationFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsEc2CapacityBlockReservationFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
