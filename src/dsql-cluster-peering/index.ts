/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DsqlClusterPeeringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#clusters DsqlClusterPeering#clusters}
  */
  readonly clusters: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#identifier DsqlClusterPeering#identifier}
  */
  readonly identifier: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#region DsqlClusterPeering#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#witness_region DsqlClusterPeering#witness_region}
  */
  readonly witnessRegion: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#timeouts DsqlClusterPeering#timeouts}
  */
  readonly timeouts?: DsqlClusterPeeringTimeouts;
}
export interface DsqlClusterPeeringTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#create DsqlClusterPeering#create}
  */
  readonly create?: string;
}

export function dsqlClusterPeeringTimeoutsToTerraform(struct?: DsqlClusterPeeringTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function dsqlClusterPeeringTimeoutsToHclTerraform(struct?: DsqlClusterPeeringTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DsqlClusterPeeringTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DsqlClusterPeeringTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DsqlClusterPeeringTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering aws_dsql_cluster_peering}
*/
export class DsqlClusterPeering extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dsql_cluster_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DsqlClusterPeering resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DsqlClusterPeering to import
  * @param importFromId The id of the existing DsqlClusterPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DsqlClusterPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dsql_cluster_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.32.1/docs/resources/dsql_cluster_peering aws_dsql_cluster_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DsqlClusterPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DsqlClusterPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dsql_cluster_peering',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.32.1',
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
    this._clusters = config.clusters;
    this._identifier = config.identifier;
    this._region = config.region;
    this._witnessRegion = config.witnessRegion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: false, optional: false, required: true
  private _clusters?: string[]; 
  public get clusters() {
    return cdktn.Fn.tolist(this.getListAttribute('clusters'));
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // witness_region - computed: false, optional: false, required: true
  private _witnessRegion?: string; 
  public get witnessRegion() {
    return this.getStringAttribute('witness_region');
  }
  public set witnessRegion(value: string) {
    this._witnessRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get witnessRegionInput() {
    return this._witnessRegion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DsqlClusterPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DsqlClusterPeeringTimeouts) {
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
      clusters: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clusters),
      identifier: cdktn.stringToTerraform(this._identifier),
      region: cdktn.stringToTerraform(this._region),
      witness_region: cdktn.stringToTerraform(this._witnessRegion),
      timeouts: dsqlClusterPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clusters: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clusters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      identifier: {
        value: cdktn.stringToHclTerraform(this._identifier),
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
      witness_region: {
        value: cdktn.stringToHclTerraform(this._witnessRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dsqlClusterPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DsqlClusterPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
