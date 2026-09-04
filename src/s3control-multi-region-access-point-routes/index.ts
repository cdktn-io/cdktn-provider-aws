/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3ControlMultiRegionAccessPointRoutesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}
  */
  readonly mrap: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}
  */
  readonly region?: string;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#route S3ControlMultiRegionAccessPointRoutes#route}
  */
  readonly route?: S3ControlMultiRegionAccessPointRoutesRoute[] | cdktn.IResolvable;
}
export interface S3ControlMultiRegionAccessPointRoutesRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}
  */
  readonly trafficDialPercentage: number;
}

export function s3ControlMultiRegionAccessPointRoutesRouteToTerraform(struct?: S3ControlMultiRegionAccessPointRoutesRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    region: cdktn.stringToTerraform(struct!.region),
    traffic_dial_percentage: cdktn.numberToTerraform(struct!.trafficDialPercentage),
  }
}


export function s3ControlMultiRegionAccessPointRoutesRouteToHclTerraform(struct?: S3ControlMultiRegionAccessPointRoutesRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_dial_percentage: {
      value: cdktn.numberToHclTerraform(struct!.trafficDialPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlMultiRegionAccessPointRoutesRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ControlMultiRegionAccessPointRoutesRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._trafficDialPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDialPercentage = this._trafficDialPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlMultiRegionAccessPointRoutesRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._region = undefined;
      this._trafficDialPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._region = value.region;
      this._trafficDialPercentage = value.trafficDialPercentage;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // traffic_dial_percentage - computed: false, optional: false, required: true
  private _trafficDialPercentage?: number; 
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
  }
  public set trafficDialPercentage(value: number) {
    this._trafficDialPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDialPercentageInput() {
    return this._trafficDialPercentage;
  }
}

export class S3ControlMultiRegionAccessPointRoutesRouteList extends cdktn.ComplexList {
  public internalValue? : S3ControlMultiRegionAccessPointRoutesRoute[] | cdktn.IResolvable

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
  public get(index: number): S3ControlMultiRegionAccessPointRoutesRouteOutputReference {
    return new S3ControlMultiRegionAccessPointRoutesRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes aws_s3control_multi_region_access_point_routes}
*/
export class S3ControlMultiRegionAccessPointRoutes extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_multi_region_access_point_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ControlMultiRegionAccessPointRoutes to import
  * @param importFromId The id of the existing S3ControlMultiRegionAccessPointRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ControlMultiRegionAccessPointRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_multi_region_access_point_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/s3control_multi_region_access_point_routes aws_s3control_multi_region_access_point_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlMultiRegionAccessPointRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_multi_region_access_point_routes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._accountId = config.accountId;
    this._mrap = config.mrap;
    this._region = config.region;
    this._route.internalValue = config.route;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // mrap - computed: false, optional: false, required: true
  private _mrap?: string; 
  public get mrap() {
    return this.getStringAttribute('mrap');
  }
  public set mrap(value: string) {
    this._mrap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mrapInput() {
    return this._mrap;
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

  // route - computed: false, optional: true, required: false
  private _route = new S3ControlMultiRegionAccessPointRoutesRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: S3ControlMultiRegionAccessPointRoutesRoute[] | cdktn.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      mrap: cdktn.stringToTerraform(this._mrap),
      region: cdktn.stringToTerraform(this._region),
      route: cdktn.listMapper(s3ControlMultiRegionAccessPointRoutesRouteToTerraform, true)(this._route.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mrap: {
        value: cdktn.stringToHclTerraform(this._mrap),
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
      route: {
        value: cdktn.listMapperHcl(s3ControlMultiRegionAccessPointRoutesRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3ControlMultiRegionAccessPointRoutesRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
