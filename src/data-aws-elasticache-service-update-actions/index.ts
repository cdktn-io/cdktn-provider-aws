/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsElasticacheServiceUpdateActionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}
  */
  readonly cacheClusterId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}
  */
  readonly serviceUpdateStatus?: string[];
}
export interface DataAwsElasticacheServiceUpdateActionsUpdateActions {
}

export function dataAwsElasticacheServiceUpdateActionsUpdateActionsToTerraform(struct?: DataAwsElasticacheServiceUpdateActionsUpdateActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsElasticacheServiceUpdateActionsUpdateActionsToHclTerraform(struct?: DataAwsElasticacheServiceUpdateActionsUpdateActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsElasticacheServiceUpdateActionsUpdateActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheServiceUpdateActionsUpdateActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_cluster_id - computed: true, optional: false, required: false
  public get cacheClusterId() {
    return this.getStringAttribute('cache_cluster_id');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // estimated_update_time - computed: true, optional: false, required: false
  public get estimatedUpdateTime() {
    return this.getStringAttribute('estimated_update_time');
  }

  // recommended_apply_by_date - computed: true, optional: false, required: false
  public get recommendedApplyByDate() {
    return this.getStringAttribute('recommended_apply_by_date');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // replication_group_id - computed: true, optional: false, required: false
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }

  // service_update_name - computed: true, optional: false, required: false
  public get serviceUpdateName() {
    return this.getStringAttribute('service_update_name');
  }

  // service_update_severity - computed: true, optional: false, required: false
  public get serviceUpdateSeverity() {
    return this.getStringAttribute('service_update_severity');
  }

  // service_update_status - computed: true, optional: false, required: false
  public get serviceUpdateStatus() {
    return this.getStringAttribute('service_update_status');
  }

  // service_update_type - computed: true, optional: false, required: false
  public get serviceUpdateType() {
    return this.getStringAttribute('service_update_type');
  }

  // update_action_status - computed: true, optional: false, required: false
  public get updateActionStatus() {
    return this.getStringAttribute('update_action_status');
  }
}

export class DataAwsElasticacheServiceUpdateActionsUpdateActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference {
    return new DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions aws_elasticache_service_update_actions}
*/
export class DataAwsElasticacheServiceUpdateActions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_service_update_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheServiceUpdateActions to import
  * @param importFromId The id of the existing DataAwsElasticacheServiceUpdateActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheServiceUpdateActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_service_update_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions aws_elasticache_service_update_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheServiceUpdateActionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheServiceUpdateActionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_service_update_actions',
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
    this._cacheClusterId = config.cacheClusterId;
    this._region = config.region;
    this._replicationGroupId = config.replicationGroupId;
    this._serviceUpdateStatus = config.serviceUpdateStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_cluster_id - computed: false, optional: true, required: false
  private _cacheClusterId?: string; 
  public get cacheClusterId() {
    return this.getStringAttribute('cache_cluster_id');
  }
  public set cacheClusterId(value: string) {
    this._cacheClusterId = value;
  }
  public resetCacheClusterId() {
    this._cacheClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClusterIdInput() {
    return this._cacheClusterId;
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

  // replication_group_id - computed: false, optional: true, required: false
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  public resetReplicationGroupId() {
    this._replicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
  }

  // service_update_status - computed: false, optional: true, required: false
  private _serviceUpdateStatus?: string[]; 
  public get serviceUpdateStatus() {
    return cdktn.Fn.tolist(this.getListAttribute('service_update_status'));
  }
  public set serviceUpdateStatus(value: string[]) {
    this._serviceUpdateStatus = value;
  }
  public resetServiceUpdateStatus() {
    this._serviceUpdateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUpdateStatusInput() {
    return this._serviceUpdateStatus;
  }

  // update_actions - computed: true, optional: false, required: false
  private _updateActions = new DataAwsElasticacheServiceUpdateActionsUpdateActionsList(this, "update_actions", false);
  public get updateActions() {
    return this._updateActions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_cluster_id: cdktn.stringToTerraform(this._cacheClusterId),
      region: cdktn.stringToTerraform(this._region),
      replication_group_id: cdktn.stringToTerraform(this._replicationGroupId),
      service_update_status: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serviceUpdateStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_cluster_id: {
        value: cdktn.stringToHclTerraform(this._cacheClusterId),
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
      replication_group_id: {
        value: cdktn.stringToHclTerraform(this._replicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_update_status: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serviceUpdateStatus),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
