/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOdbDbNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node#cloud_vm_cluster_id DataAwsOdbDbNode#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node#id DataAwsOdbDbNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node#region DataAwsOdbDbNode#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node aws_odb_db_node}
*/
export class DataAwsOdbDbNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_db_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOdbDbNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOdbDbNode to import
  * @param importFromId The id of the existing DataAwsOdbDbNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOdbDbNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_db_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_node aws_odb_db_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOdbDbNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOdbDbNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_db_node',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.23.0',
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
    this._cloudVmClusterId = config.cloudVmClusterId;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  public get additionalDetails() {
    return this.getStringAttribute('additional_details');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // backup_ip_id - computed: true, optional: false, required: false
  public get backupIpId() {
    return this.getStringAttribute('backup_ip_id');
  }

  // backup_vnic2_id - computed: true, optional: false, required: false
  public get backupVnic2Id() {
    return this.getStringAttribute('backup_vnic2_id');
  }

  // backup_vnic_id - computed: true, optional: false, required: false
  public get backupVnicId() {
    return this.getStringAttribute('backup_vnic_id');
  }

  // cloud_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudVmClusterId?: string; 
  public get cloudVmClusterId() {
    return this.getStringAttribute('cloud_vm_cluster_id');
  }
  public set cloudVmClusterId(value: string) {
    this._cloudVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVmClusterIdInput() {
    return this._cloudVmClusterId;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // db_server_id - computed: true, optional: false, required: false
  public get dbServerId() {
    return this.getStringAttribute('db_server_id');
  }

  // db_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbStorageSizeInGbs() {
    return this.getNumberAttribute('db_storage_size_in_gbs');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // floating_ip_address - computed: true, optional: false, required: false
  public get floatingIpAddress() {
    return this.getStringAttribute('floating_ip_address');
  }

  // host_ip_id - computed: true, optional: false, required: false
  public get hostIpId() {
    return this.getStringAttribute('host_ip_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

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

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
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

  // software_storage_size_in_gbs - computed: true, optional: false, required: false
  public get softwareStorageSizeInGbs() {
    return this.getNumberAttribute('software_storage_size_in_gbs');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // time_maintenance_window_end - computed: true, optional: false, required: false
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }

  // time_maintenance_window_start - computed: true, optional: false, required: false
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }

  // total_cpu_core_count - computed: true, optional: false, required: false
  public get totalCpuCoreCount() {
    return this.getNumberAttribute('total_cpu_core_count');
  }

  // vnic2_id - computed: true, optional: false, required: false
  public get vnic2Id() {
    return this.getStringAttribute('vnic2_id');
  }

  // vnic_id - computed: true, optional: false, required: false
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
