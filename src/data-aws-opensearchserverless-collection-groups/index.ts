/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsOpensearchserverlessCollectionGroupsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}
  */
  readonly region?: string;
}
export interface DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits {
}

export function dataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsToTerraform(struct?: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsToHclTerraform(struct?: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_indexing_capacity_in_ocu - computed: true, optional: false, required: false
  public get maxIndexingCapacityInOcu() {
    return this.getNumberAttribute('max_indexing_capacity_in_ocu');
  }

  // max_search_capacity_in_ocu - computed: true, optional: false, required: false
  public get maxSearchCapacityInOcu() {
    return this.getNumberAttribute('max_search_capacity_in_ocu');
  }

  // min_indexing_capacity_in_ocu - computed: true, optional: false, required: false
  public get minIndexingCapacityInOcu() {
    return this.getNumberAttribute('min_indexing_capacity_in_ocu');
  }

  // min_search_capacity_in_ocu - computed: true, optional: false, required: false
  public get minSearchCapacityInOcu() {
    return this.getNumberAttribute('min_search_capacity_in_ocu');
  }
}

export class DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference {
    return new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries {
}

export function dataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesToTerraform(struct?: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesToHclTerraform(struct?: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_limits - computed: true, optional: false, required: false
  private _capacityLimits = new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList(this, "capacity_limits", false);
  public get capacityLimits() {
    return this._capacityLimits;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number_of_collections - computed: true, optional: false, required: false
  public get numberOfCollections() {
    return this.getNumberAttribute('number_of_collections');
  }

  // standby_replicas - computed: true, optional: false, required: false
  public get standbyReplicas() {
    return this.getStringAttribute('standby_replicas');
  }
}

export class DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference {
    return new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups}
*/
export class DataAwsOpensearchserverlessCollectionGroups extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearchserverless_collection_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroups to import
  * @param importFromId The id of the existing DataAwsOpensearchserverlessCollectionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearchserverless_collection_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOpensearchserverlessCollectionGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessCollectionGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearchserverless_collection_groups',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.44.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_group_summaries - computed: true, optional: false, required: false
  private _collectionGroupSummaries = new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList(this, "collection_group_summaries", false);
  public get collectionGroupSummaries() {
    return this._collectionGroupSummaries;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
