/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_cloud_exadata_infrastructures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOdbCloudExadataInfrastructuresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_cloud_exadata_infrastructures#region DataAwsOdbCloudExadataInfrastructures#region}
  */
  readonly region?: string;
}
export interface DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructures {
}

export function dataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresToTerraform(struct?: DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresToHclTerraform(struct?: DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructures | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
}

export class DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference {
    return new DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_cloud_exadata_infrastructures aws_odb_cloud_exadata_infrastructures}
*/
export class DataAwsOdbCloudExadataInfrastructures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_cloud_exadata_infrastructures";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOdbCloudExadataInfrastructures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOdbCloudExadataInfrastructures to import
  * @param importFromId The id of the existing DataAwsOdbCloudExadataInfrastructures that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_cloud_exadata_infrastructures#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOdbCloudExadataInfrastructures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_cloud_exadata_infrastructures", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_cloud_exadata_infrastructures aws_odb_cloud_exadata_infrastructures} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOdbCloudExadataInfrastructuresConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsOdbCloudExadataInfrastructuresConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_cloud_exadata_infrastructures',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.22.1',
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

  // cloud_exadata_infrastructures - computed: true, optional: false, required: false
  private _cloudExadataInfrastructures = new DataAwsOdbCloudExadataInfrastructuresCloudExadataInfrastructuresList(this, "cloud_exadata_infrastructures", false);
  public get cloudExadataInfrastructures() {
    return this._cloudExadataInfrastructures;
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
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
