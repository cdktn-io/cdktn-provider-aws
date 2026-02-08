/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOdbDbSystemShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The physical ID of the AZ, for example, use1-az4. This ID persists across accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes#availability_zone_id DataAwsOdbDbSystemShapes#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes#region DataAwsOdbDbSystemShapes#region}
  */
  readonly region?: string;
}
export interface DataAwsOdbDbSystemShapesDbSystemShapes {
}

export function dataAwsOdbDbSystemShapesDbSystemShapesToTerraform(struct?: DataAwsOdbDbSystemShapesDbSystemShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsOdbDbSystemShapesDbSystemShapesToHclTerraform(struct?: DataAwsOdbDbSystemShapesDbSystemShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOdbDbSystemShapesDbSystemShapesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsOdbDbSystemShapesDbSystemShapes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOdbDbSystemShapesDbSystemShapes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_core_count - computed: true, optional: false, required: false
  public get availableCoreCount() {
    return this.getNumberAttribute('available_core_count');
  }

  // available_core_count_per_node - computed: true, optional: false, required: false
  public get availableCoreCountPerNode() {
    return this.getNumberAttribute('available_core_count_per_node');
  }

  // available_data_storage_in_tbs - computed: true, optional: false, required: false
  public get availableDataStorageInTbs() {
    return this.getNumberAttribute('available_data_storage_in_tbs');
  }

  // available_data_storage_per_server_in_tbs - computed: true, optional: false, required: false
  public get availableDataStoragePerServerInTbs() {
    return this.getNumberAttribute('available_data_storage_per_server_in_tbs');
  }

  // available_db_node_per_node_in_gbs - computed: true, optional: false, required: false
  public get availableDbNodePerNodeInGbs() {
    return this.getNumberAttribute('available_db_node_per_node_in_gbs');
  }

  // available_db_node_storage_in_gbs - computed: true, optional: false, required: false
  public get availableDbNodeStorageInGbs() {
    return this.getNumberAttribute('available_db_node_storage_in_gbs');
  }

  // available_memory_in_gbs - computed: true, optional: false, required: false
  public get availableMemoryInGbs() {
    return this.getNumberAttribute('available_memory_in_gbs');
  }

  // available_memory_per_node_in_gbs - computed: true, optional: false, required: false
  public get availableMemoryPerNodeInGbs() {
    return this.getNumberAttribute('available_memory_per_node_in_gbs');
  }

  // core_count_increment - computed: true, optional: false, required: false
  public get coreCountIncrement() {
    return this.getNumberAttribute('core_count_increment');
  }

  // max_storage_count - computed: true, optional: false, required: false
  public get maxStorageCount() {
    return this.getNumberAttribute('max_storage_count');
  }

  // maximum_node_count - computed: true, optional: false, required: false
  public get maximumNodeCount() {
    return this.getNumberAttribute('maximum_node_count');
  }

  // min_core_count_per_node - computed: true, optional: false, required: false
  public get minCoreCountPerNode() {
    return this.getNumberAttribute('min_core_count_per_node');
  }

  // min_data_storage_in_tbs - computed: true, optional: false, required: false
  public get minDataStorageInTbs() {
    return this.getNumberAttribute('min_data_storage_in_tbs');
  }

  // min_db_node_storage_per_node_in_gbs - computed: true, optional: false, required: false
  public get minDbNodeStoragePerNodeInGbs() {
    return this.getNumberAttribute('min_db_node_storage_per_node_in_gbs');
  }

  // min_memory_per_node_in_gbs - computed: true, optional: false, required: false
  public get minMemoryPerNodeInGbs() {
    return this.getNumberAttribute('min_memory_per_node_in_gbs');
  }

  // min_storage_count - computed: true, optional: false, required: false
  public get minStorageCount() {
    return this.getNumberAttribute('min_storage_count');
  }

  // minimum_core_count - computed: true, optional: false, required: false
  public get minimumCoreCount() {
    return this.getNumberAttribute('minimum_core_count');
  }

  // minimum_node_count - computed: true, optional: false, required: false
  public get minimumNodeCount() {
    return this.getNumberAttribute('minimum_node_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runtime_minimum_core_count - computed: true, optional: false, required: false
  public get runtimeMinimumCoreCount() {
    return this.getNumberAttribute('runtime_minimum_core_count');
  }

  // shape_family - computed: true, optional: false, required: false
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }

  // shape_type - computed: true, optional: false, required: false
  public get shapeType() {
    return this.getStringAttribute('shape_type');
  }
}

export class DataAwsOdbDbSystemShapesDbSystemShapesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsOdbDbSystemShapesDbSystemShapesOutputReference {
    return new DataAwsOdbDbSystemShapesDbSystemShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes aws_odb_db_system_shapes}
*/
export class DataAwsOdbDbSystemShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_db_system_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOdbDbSystemShapes to import
  * @param importFromId The id of the existing DataAwsOdbDbSystemShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOdbDbSystemShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_db_system_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/odb_db_system_shapes aws_odb_db_system_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOdbDbSystemShapesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsOdbDbSystemShapesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_db_system_shapes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._availabilityZoneId = config.availabilityZoneId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_id - computed: false, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // db_system_shapes - computed: true, optional: false, required: false
  private _dbSystemShapes = new DataAwsOdbDbSystemShapesDbSystemShapesList(this, "db_system_shapes", false);
  public get dbSystemShapes() {
    return this._dbSystemShapes;
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
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_id: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
