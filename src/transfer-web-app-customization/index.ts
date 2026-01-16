/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferWebAppCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}
  */
  readonly faviconFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}
  */
  readonly logoFile?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}
  */
  readonly webAppId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization}
*/
export class TransferWebAppCustomization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_web_app_customization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferWebAppCustomization to import
  * @param importFromId The id of the existing TransferWebAppCustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferWebAppCustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_web_app_customization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferWebAppCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: TransferWebAppCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_web_app_customization',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.28.0',
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
    this._faviconFile = config.faviconFile;
    this._logoFile = config.logoFile;
    this._region = config.region;
    this._title = config.title;
    this._webAppId = config.webAppId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // favicon_file - computed: true, optional: true, required: false
  private _faviconFile?: string; 
  public get faviconFile() {
    return this.getStringAttribute('favicon_file');
  }
  public set faviconFile(value: string) {
    this._faviconFile = value;
  }
  public resetFaviconFile() {
    this._faviconFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconFileInput() {
    return this._faviconFile;
  }

  // logo_file - computed: true, optional: true, required: false
  private _logoFile?: string; 
  public get logoFile() {
    return this.getStringAttribute('logo_file');
  }
  public set logoFile(value: string) {
    this._logoFile = value;
  }
  public resetLogoFile() {
    this._logoFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoFileInput() {
    return this._logoFile;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // web_app_id - computed: false, optional: false, required: true
  private _webAppId?: string; 
  public get webAppId() {
    return this.getStringAttribute('web_app_id');
  }
  public set webAppId(value: string) {
    this._webAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppIdInput() {
    return this._webAppId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      favicon_file: cdktf.stringToTerraform(this._faviconFile),
      logo_file: cdktf.stringToTerraform(this._logoFile),
      region: cdktf.stringToTerraform(this._region),
      title: cdktf.stringToTerraform(this._title),
      web_app_id: cdktf.stringToTerraform(this._webAppId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      favicon_file: {
        value: cdktf.stringToHclTerraform(this._faviconFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_file: {
        value: cdktf.stringToHclTerraform(this._logoFile),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_app_id: {
        value: cdktf.stringToHclTerraform(this._webAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
