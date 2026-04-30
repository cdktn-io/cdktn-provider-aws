/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchserverlessCollectionGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}
  */
  readonly capacityLimits?: OpensearchserverlessCollectionGroupCapacityLimits[] | cdktn.IResolvable;
  /**
  * Description of the collection group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the collection group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}
  */
  readonly region?: string;
  /**
  * Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}
  */
  readonly standbyReplicas: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface OpensearchserverlessCollectionGroupCapacityLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}
  */
  readonly maxIndexingCapacityInOcu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}
  */
  readonly maxSearchCapacityInOcu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}
  */
  readonly minIndexingCapacityInOcu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}
  */
  readonly minSearchCapacityInOcu?: number;
}

export function opensearchserverlessCollectionGroupCapacityLimitsToTerraform(struct?: OpensearchserverlessCollectionGroupCapacityLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_indexing_capacity_in_ocu: cdktn.numberToTerraform(struct!.maxIndexingCapacityInOcu),
    max_search_capacity_in_ocu: cdktn.numberToTerraform(struct!.maxSearchCapacityInOcu),
    min_indexing_capacity_in_ocu: cdktn.numberToTerraform(struct!.minIndexingCapacityInOcu),
    min_search_capacity_in_ocu: cdktn.numberToTerraform(struct!.minSearchCapacityInOcu),
  }
}


export function opensearchserverlessCollectionGroupCapacityLimitsToHclTerraform(struct?: OpensearchserverlessCollectionGroupCapacityLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_indexing_capacity_in_ocu: {
      value: cdktn.numberToHclTerraform(struct!.maxIndexingCapacityInOcu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_search_capacity_in_ocu: {
      value: cdktn.numberToHclTerraform(struct!.maxSearchCapacityInOcu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_indexing_capacity_in_ocu: {
      value: cdktn.numberToHclTerraform(struct!.minIndexingCapacityInOcu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_search_capacity_in_ocu: {
      value: cdktn.numberToHclTerraform(struct!.minSearchCapacityInOcu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserverlessCollectionGroupCapacityLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserverlessCollectionGroupCapacityLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIndexingCapacityInOcu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexingCapacityInOcu = this._maxIndexingCapacityInOcu;
    }
    if (this._maxSearchCapacityInOcu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSearchCapacityInOcu = this._maxSearchCapacityInOcu;
    }
    if (this._minIndexingCapacityInOcu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIndexingCapacityInOcu = this._minIndexingCapacityInOcu;
    }
    if (this._minSearchCapacityInOcu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSearchCapacityInOcu = this._minSearchCapacityInOcu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessCollectionGroupCapacityLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxIndexingCapacityInOcu = undefined;
      this._maxSearchCapacityInOcu = undefined;
      this._minIndexingCapacityInOcu = undefined;
      this._minSearchCapacityInOcu = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxIndexingCapacityInOcu = value.maxIndexingCapacityInOcu;
      this._maxSearchCapacityInOcu = value.maxSearchCapacityInOcu;
      this._minIndexingCapacityInOcu = value.minIndexingCapacityInOcu;
      this._minSearchCapacityInOcu = value.minSearchCapacityInOcu;
    }
  }

  // max_indexing_capacity_in_ocu - computed: true, optional: true, required: false
  private _maxIndexingCapacityInOcu?: number; 
  public get maxIndexingCapacityInOcu() {
    return this.getNumberAttribute('max_indexing_capacity_in_ocu');
  }
  public set maxIndexingCapacityInOcu(value: number) {
    this._maxIndexingCapacityInOcu = value;
  }
  public resetMaxIndexingCapacityInOcu() {
    this._maxIndexingCapacityInOcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexingCapacityInOcuInput() {
    return this._maxIndexingCapacityInOcu;
  }

  // max_search_capacity_in_ocu - computed: true, optional: true, required: false
  private _maxSearchCapacityInOcu?: number; 
  public get maxSearchCapacityInOcu() {
    return this.getNumberAttribute('max_search_capacity_in_ocu');
  }
  public set maxSearchCapacityInOcu(value: number) {
    this._maxSearchCapacityInOcu = value;
  }
  public resetMaxSearchCapacityInOcu() {
    this._maxSearchCapacityInOcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSearchCapacityInOcuInput() {
    return this._maxSearchCapacityInOcu;
  }

  // min_indexing_capacity_in_ocu - computed: true, optional: true, required: false
  private _minIndexingCapacityInOcu?: number; 
  public get minIndexingCapacityInOcu() {
    return this.getNumberAttribute('min_indexing_capacity_in_ocu');
  }
  public set minIndexingCapacityInOcu(value: number) {
    this._minIndexingCapacityInOcu = value;
  }
  public resetMinIndexingCapacityInOcu() {
    this._minIndexingCapacityInOcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIndexingCapacityInOcuInput() {
    return this._minIndexingCapacityInOcu;
  }

  // min_search_capacity_in_ocu - computed: true, optional: true, required: false
  private _minSearchCapacityInOcu?: number; 
  public get minSearchCapacityInOcu() {
    return this.getNumberAttribute('min_search_capacity_in_ocu');
  }
  public set minSearchCapacityInOcu(value: number) {
    this._minSearchCapacityInOcu = value;
  }
  public resetMinSearchCapacityInOcu() {
    this._minSearchCapacityInOcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSearchCapacityInOcuInput() {
    return this._minSearchCapacityInOcu;
  }
}

export class OpensearchserverlessCollectionGroupCapacityLimitsList extends cdktn.ComplexList {
  public internalValue? : OpensearchserverlessCollectionGroupCapacityLimits[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserverlessCollectionGroupCapacityLimitsOutputReference {
    return new OpensearchserverlessCollectionGroupCapacityLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}
*/
export class OpensearchserverlessCollectionGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearchserverless_collection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchserverlessCollectionGroup to import
  * @param importFromId The id of the existing OpensearchserverlessCollectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchserverlessCollectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearchserverless_collection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/opensearchserverless_collection_group aws_opensearchserverless_collection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchserverlessCollectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchserverlessCollectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearchserverless_collection_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.43.0',
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
    this._capacityLimits.internalValue = config.capacityLimits;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._standbyReplicas = config.standbyReplicas;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_limits - computed: true, optional: true, required: false
  private _capacityLimits = new OpensearchserverlessCollectionGroupCapacityLimitsList(this, "capacity_limits", false);
  public get capacityLimits() {
    return this._capacityLimits;
  }
  public putCapacityLimits(value: OpensearchserverlessCollectionGroupCapacityLimits[] | cdktn.IResolvable) {
    this._capacityLimits.internalValue = value;
  }
  public resetCapacityLimits() {
    this._capacityLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityLimitsInput() {
    return this._capacityLimits.internalValue;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // standby_replicas - computed: false, optional: false, required: true
  private _standbyReplicas?: string; 
  public get standbyReplicas() {
    return this.getStringAttribute('standby_replicas');
  }
  public set standbyReplicas(value: string) {
    this._standbyReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyReplicasInput() {
    return this._standbyReplicas;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_limits: cdktn.listMapper(opensearchserverlessCollectionGroupCapacityLimitsToTerraform, false)(this._capacityLimits.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      standby_replicas: cdktn.stringToTerraform(this._standbyReplicas),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_limits: {
        value: cdktn.listMapperHcl(opensearchserverlessCollectionGroupCapacityLimitsToHclTerraform, false)(this._capacityLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchserverlessCollectionGroupCapacityLimitsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_replicas: {
        value: cdktn.stringToHclTerraform(this._standbyReplicas),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
