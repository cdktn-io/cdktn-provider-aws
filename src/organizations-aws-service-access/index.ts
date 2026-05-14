/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/organizations_aws_service_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrganizationsAwsServiceAccessConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/organizations_aws_service_access#service_principal OrganizationsAwsServiceAccess#service_principal}
  */
  readonly servicePrincipal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/organizations_aws_service_access aws_organizations_aws_service_access}
*/
export class OrganizationsAwsServiceAccess extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_organizations_aws_service_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrganizationsAwsServiceAccess resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationsAwsServiceAccess to import
  * @param importFromId The id of the existing OrganizationsAwsServiceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/organizations_aws_service_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationsAwsServiceAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_organizations_aws_service_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/organizations_aws_service_access aws_organizations_aws_service_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationsAwsServiceAccessConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationsAwsServiceAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_aws_service_access',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.45.0',
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
    this._servicePrincipal = config.servicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_enabled - computed: true, optional: false, required: false
  public get dateEnabled() {
    return this.getStringAttribute('date_enabled');
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_principal: cdktn.stringToTerraform(this._servicePrincipal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_principal: {
        value: cdktn.stringToHclTerraform(this._servicePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
