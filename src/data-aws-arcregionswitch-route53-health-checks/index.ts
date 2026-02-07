/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsArcregionswitchRoute53HealthChecksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}
  */
  readonly planArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks#region DataAwsArcregionswitchRoute53HealthChecks#region}
  */
  readonly region?: string;
}
export interface DataAwsArcregionswitchRoute53HealthChecksHealthChecks {
}

export function dataAwsArcregionswitchRoute53HealthChecksHealthChecksToTerraform(struct?: DataAwsArcregionswitchRoute53HealthChecksHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsArcregionswitchRoute53HealthChecksHealthChecksToHclTerraform(struct?: DataAwsArcregionswitchRoute53HealthChecksHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsArcregionswitchRoute53HealthChecksHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsArcregionswitchRoute53HealthChecksHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // record_name - computed: true, optional: false, required: false
  public get recordName() {
    return this.getStringAttribute('record_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsArcregionswitchRoute53HealthChecksHealthChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference {
    return new DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks aws_arcregionswitch_route53_health_checks}
*/
export class DataAwsArcregionswitchRoute53HealthChecks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_arcregionswitch_route53_health_checks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsArcregionswitchRoute53HealthChecks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsArcregionswitchRoute53HealthChecks to import
  * @param importFromId The id of the existing DataAwsArcregionswitchRoute53HealthChecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsArcregionswitchRoute53HealthChecks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_arcregionswitch_route53_health_checks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_route53_health_checks aws_arcregionswitch_route53_health_checks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsArcregionswitchRoute53HealthChecksConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsArcregionswitchRoute53HealthChecksConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_arcregionswitch_route53_health_checks',
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
    this._planArn = config.planArn;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_checks - computed: true, optional: false, required: false
  private _healthChecks = new DataAwsArcregionswitchRoute53HealthChecksHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }

  // plan_arn - computed: false, optional: false, required: true
  private _planArn?: string; 
  public get planArn() {
    return this.getStringAttribute('plan_arn');
  }
  public set planArn(value: string) {
    this._planArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planArnInput() {
    return this._planArn;
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
      plan_arn: cdktf.stringToTerraform(this._planArn),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      plan_arn: {
        value: cdktf.stringToHclTerraform(this._planArn),
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
