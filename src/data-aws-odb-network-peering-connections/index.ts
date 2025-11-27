/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOdbNetworkPeeringConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections#region DataAwsOdbNetworkPeeringConnections#region}
  */
  readonly region?: string;
  /**
  * odb_peering_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections#odb_peering_connections DataAwsOdbNetworkPeeringConnections#odb_peering_connections}
  */
  readonly odbPeeringConnections?: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] | cdktf.IResolvable;
}
export interface DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections {
}

export function dataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsToTerraform(struct?: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsToHclTerraform(struct?: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] | cdktf.IResolvable

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
  public get(index: number): DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference {
    return new DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections aws_odb_network_peering_connections}
*/
export class DataAwsOdbNetworkPeeringConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_network_peering_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOdbNetworkPeeringConnections to import
  * @param importFromId The id of the existing DataAwsOdbNetworkPeeringConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOdbNetworkPeeringConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_network_peering_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_network_peering_connections aws_odb_network_peering_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOdbNetworkPeeringConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsOdbNetworkPeeringConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_network_peering_connections',
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
    this._region = config.region;
    this._odbPeeringConnections.internalValue = config.odbPeeringConnections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // odb_peering_connections - computed: false, optional: true, required: false
  private _odbPeeringConnections = new DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList(this, "odb_peering_connections", false);
  public get odbPeeringConnections() {
    return this._odbPeeringConnections;
  }
  public putOdbPeeringConnections(value: DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections[] | cdktf.IResolvable) {
    this._odbPeeringConnections.internalValue = value;
  }
  public resetOdbPeeringConnections() {
    this._odbPeeringConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbPeeringConnectionsInput() {
    return this._odbPeeringConnections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      odb_peering_connections: cdktf.listMapper(dataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsToTerraform, true)(this._odbPeeringConnections.internalValue),
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
      odb_peering_connections: {
        value: cdktf.listMapperHcl(dataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsToHclTerraform, true)(this._odbPeeringConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
