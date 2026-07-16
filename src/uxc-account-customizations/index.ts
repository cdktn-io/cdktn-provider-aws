/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface UxcAccountCustomizationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations#account_color UxcAccountCustomizations#account_color}
  */
  readonly accountColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations#visible_regions UxcAccountCustomizations#visible_regions}
  */
  readonly visibleRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations#visible_services UxcAccountCustomizations#visible_services}
  */
  readonly visibleServices?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations aws_uxc_account_customizations}
*/
export class UxcAccountCustomizations extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_uxc_account_customizations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a UxcAccountCustomizations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UxcAccountCustomizations to import
  * @param importFromId The id of the existing UxcAccountCustomizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UxcAccountCustomizations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_uxc_account_customizations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/uxc_account_customizations aws_uxc_account_customizations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UxcAccountCustomizationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UxcAccountCustomizationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_uxc_account_customizations',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._accountColor = config.accountColor;
    this._visibleRegions = config.visibleRegions;
    this._visibleServices = config.visibleServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_color - computed: true, optional: true, required: false
  private _accountColor?: string; 
  public get accountColor() {
    return this.getStringAttribute('account_color');
  }
  public set accountColor(value: string) {
    this._accountColor = value;
  }
  public resetAccountColor() {
    this._accountColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountColorInput() {
    return this._accountColor;
  }

  // visible_regions - computed: true, optional: true, required: false
  private _visibleRegions?: string[]; 
  public get visibleRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('visible_regions'));
  }
  public set visibleRegions(value: string[]) {
    this._visibleRegions = value;
  }
  public resetVisibleRegions() {
    this._visibleRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleRegionsInput() {
    return this._visibleRegions;
  }

  // visible_services - computed: true, optional: true, required: false
  private _visibleServices?: string[]; 
  public get visibleServices() {
    return cdktn.Fn.tolist(this.getListAttribute('visible_services'));
  }
  public set visibleServices(value: string[]) {
    this._visibleServices = value;
  }
  public resetVisibleServices() {
    this._visibleServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleServicesInput() {
    return this._visibleServices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_color: cdktn.stringToTerraform(this._accountColor),
      visible_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._visibleRegions),
      visible_services: cdktn.listMapper(cdktn.stringToTerraform, false)(this._visibleServices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_color: {
        value: cdktn.stringToHclTerraform(this._accountColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visible_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._visibleRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visible_services: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._visibleServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
