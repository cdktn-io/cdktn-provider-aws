/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubFeatureV2Config extends cdktn.TerraformMetaArguments {
  /**
  * The name of the opt-in feature to enable. Valid values: NETWORK_SCANNING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2#feature_name SecurityhubFeatureV2#feature_name}
  */
  readonly featureName: string;
  /**
  * The current enablement status of the feature. Valid values: ENABLED, DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2#feature_status SecurityhubFeatureV2#feature_status}
  */
  readonly featureStatus: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2#region SecurityhubFeatureV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2 aws_securityhub_feature_v2}
*/
export class SecurityhubFeatureV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_feature_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubFeatureV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubFeatureV2 to import
  * @param importFromId The id of the existing SecurityhubFeatureV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubFeatureV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_feature_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/securityhub_feature_v2 aws_securityhub_feature_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubFeatureV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubFeatureV2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_feature_v2',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._featureName = config.featureName;
    this._featureStatus = config.featureStatus;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // feature_status - computed: false, optional: false, required: true
  private _featureStatus?: string; 
  public get featureStatus() {
    return this.getStringAttribute('feature_status');
  }
  public set featureStatus(value: string) {
    this._featureStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStatusInput() {
    return this._featureStatus;
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
      feature_name: cdktn.stringToTerraform(this._featureName),
      feature_status: cdktn.stringToTerraform(this._featureStatus),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_name: {
        value: cdktn.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_status: {
        value: cdktn.stringToHclTerraform(this._featureStatus),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
