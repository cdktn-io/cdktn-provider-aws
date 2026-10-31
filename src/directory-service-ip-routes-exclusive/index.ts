/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DirectoryServiceIpRoutesExclusiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}
  */
  readonly directoryId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}
  */
  readonly updateSecurityGroupForDirectoryControllers?: boolean | cdktn.IResolvable;
  /**
  * ip_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}
  */
  readonly ipRoute?: DirectoryServiceIpRoutesExclusiveIpRoute[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}
  */
  readonly timeouts?: DirectoryServiceIpRoutesExclusiveTimeouts;
}
export interface DirectoryServiceIpRoutesExclusiveIpRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}
  */
  readonly cidrIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}
  */
  readonly description?: string;
}

export function directoryServiceIpRoutesExclusiveIpRouteToTerraform(struct?: DirectoryServiceIpRoutesExclusiveIpRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_ip: cdktn.stringToTerraform(struct!.cidrIp),
    cidr_ipv6: cdktn.stringToTerraform(struct!.cidrIpv6),
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function directoryServiceIpRoutesExclusiveIpRouteToHclTerraform(struct?: DirectoryServiceIpRoutesExclusiveIpRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_ip: {
      value: cdktn.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_ipv6: {
      value: cdktn.stringToHclTerraform(struct!.cidrIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceIpRoutesExclusiveIpRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DirectoryServiceIpRoutesExclusiveIpRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._cidrIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIpv6 = this._cidrIpv6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceIpRoutesExclusiveIpRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._cidrIpv6 = undefined;
      this._description = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._cidrIpv6 = value.cidrIpv6;
      this._description = value.description;
    }
  }

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // cidr_ipv6 - computed: false, optional: true, required: false
  private _cidrIpv6?: string; 
  public get cidrIpv6() {
    return this.getStringAttribute('cidr_ipv6');
  }
  public set cidrIpv6(value: string) {
    this._cidrIpv6 = value;
  }
  public resetCidrIpv6() {
    this._cidrIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpv6Input() {
    return this._cidrIpv6;
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
}

export class DirectoryServiceIpRoutesExclusiveIpRouteList extends cdktn.ComplexList {
  public internalValue? : DirectoryServiceIpRoutesExclusiveIpRoute[] | cdktn.IResolvable

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
  public get(index: number): DirectoryServiceIpRoutesExclusiveIpRouteOutputReference {
    return new DirectoryServiceIpRoutesExclusiveIpRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServiceIpRoutesExclusiveTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}
  */
  readonly update?: string;
}

export function directoryServiceIpRoutesExclusiveTimeoutsToTerraform(struct?: DirectoryServiceIpRoutesExclusiveTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function directoryServiceIpRoutesExclusiveTimeoutsToHclTerraform(struct?: DirectoryServiceIpRoutesExclusiveTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceIpRoutesExclusiveTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceIpRoutesExclusiveTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}
*/
export class DirectoryServiceIpRoutesExclusive extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_ip_routes_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import
  * @param importFromId The id of the existing DirectoryServiceIpRoutesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_directory_service_ip_routes_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceIpRoutesExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceIpRoutesExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_ip_routes_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
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
    this._directoryId = config.directoryId;
    this._region = config.region;
    this._updateSecurityGroupForDirectoryControllers = config.updateSecurityGroupForDirectoryControllers;
    this._ipRoute.internalValue = config.ipRoute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
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

  // update_security_group_for_directory_controllers - computed: true, optional: true, required: false
  private _updateSecurityGroupForDirectoryControllers?: boolean | cdktn.IResolvable; 
  public get updateSecurityGroupForDirectoryControllers() {
    return this.getBooleanAttribute('update_security_group_for_directory_controllers');
  }
  public set updateSecurityGroupForDirectoryControllers(value: boolean | cdktn.IResolvable) {
    this._updateSecurityGroupForDirectoryControllers = value;
  }
  public resetUpdateSecurityGroupForDirectoryControllers() {
    this._updateSecurityGroupForDirectoryControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSecurityGroupForDirectoryControllersInput() {
    return this._updateSecurityGroupForDirectoryControllers;
  }

  // ip_route - computed: false, optional: true, required: false
  private _ipRoute = new DirectoryServiceIpRoutesExclusiveIpRouteList(this, "ip_route", true);
  public get ipRoute() {
    return this._ipRoute;
  }
  public putIpRoute(value: DirectoryServiceIpRoutesExclusiveIpRoute[] | cdktn.IResolvable) {
    this._ipRoute.internalValue = value;
  }
  public resetIpRoute() {
    this._ipRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRouteInput() {
    return this._ipRoute.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DirectoryServiceIpRoutesExclusiveTimeouts) {
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
      directory_id: cdktn.stringToTerraform(this._directoryId),
      region: cdktn.stringToTerraform(this._region),
      update_security_group_for_directory_controllers: cdktn.booleanToTerraform(this._updateSecurityGroupForDirectoryControllers),
      ip_route: cdktn.listMapper(directoryServiceIpRoutesExclusiveIpRouteToTerraform, true)(this._ipRoute.internalValue),
      timeouts: directoryServiceIpRoutesExclusiveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
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
      update_security_group_for_directory_controllers: {
        value: cdktn.booleanToHclTerraform(this._updateSecurityGroupForDirectoryControllers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_route: {
        value: cdktn.listMapperHcl(directoryServiceIpRoutesExclusiveIpRouteToHclTerraform, true)(this._ipRoute.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectoryServiceIpRoutesExclusiveIpRouteList",
      },
      timeouts: {
        value: directoryServiceIpRoutesExclusiveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DirectoryServiceIpRoutesExclusiveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
