/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DirectoryServiceIpRouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#cidr_ip DirectoryServiceIpRoute#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#cidr_ipv6 DirectoryServiceIpRoute#cidr_ipv6}
  */
  readonly cidrIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#description DirectoryServiceIpRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#directory_id DirectoryServiceIpRoute#directory_id}
  */
  readonly directoryId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#region DirectoryServiceIpRoute#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#update_security_group_for_directory_controllers DirectoryServiceIpRoute#update_security_group_for_directory_controllers}
  */
  readonly updateSecurityGroupForDirectoryControllers?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#timeouts DirectoryServiceIpRoute#timeouts}
  */
  readonly timeouts?: DirectoryServiceIpRouteTimeouts;
}
export interface DirectoryServiceIpRouteTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#create DirectoryServiceIpRoute#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#delete DirectoryServiceIpRoute#delete}
  */
  readonly delete?: string;
}

export function directoryServiceIpRouteTimeoutsToTerraform(struct?: DirectoryServiceIpRouteTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function directoryServiceIpRouteTimeoutsToHclTerraform(struct?: DirectoryServiceIpRouteTimeouts | cdktn.IResolvable): any {
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
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServiceIpRouteTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryServiceIpRouteTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServiceIpRouteTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route aws_directory_service_ip_route}
*/
export class DirectoryServiceIpRoute extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_ip_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DirectoryServiceIpRoute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryServiceIpRoute to import
  * @param importFromId The id of the existing DirectoryServiceIpRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryServiceIpRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_directory_service_ip_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_route aws_directory_service_ip_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceIpRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceIpRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_ip_route',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.69.1',
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
    this._cidrIp = config.cidrIp;
    this._cidrIpv6 = config.cidrIpv6;
    this._description = config.description;
    this._directoryId = config.directoryId;
    this._region = config.region;
    this._updateSecurityGroupForDirectoryControllers = config.updateSecurityGroupForDirectoryControllers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DirectoryServiceIpRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DirectoryServiceIpRouteTimeouts) {
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
      cidr_ip: cdktn.stringToTerraform(this._cidrIp),
      cidr_ipv6: cdktn.stringToTerraform(this._cidrIpv6),
      description: cdktn.stringToTerraform(this._description),
      directory_id: cdktn.stringToTerraform(this._directoryId),
      region: cdktn.stringToTerraform(this._region),
      update_security_group_for_directory_controllers: cdktn.booleanToTerraform(this._updateSecurityGroupForDirectoryControllers),
      timeouts: directoryServiceIpRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_ip: {
        value: cdktn.stringToHclTerraform(this._cidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_ipv6: {
        value: cdktn.stringToHclTerraform(this._cidrIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      timeouts: {
        value: directoryServiceIpRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DirectoryServiceIpRouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
