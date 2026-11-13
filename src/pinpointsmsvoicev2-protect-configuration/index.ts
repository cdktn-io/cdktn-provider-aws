/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Pinpointsmsvoicev2ProtectConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}
  */
  readonly mmsCountryRules?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}
  */
  readonly rcsCountryRules?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#region Pinpointsmsvoicev2ProtectConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}
  */
  readonly smsCountryRules?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}
  */
  readonly voiceCountryRules?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration aws_pinpointsmsvoicev2_protect_configuration}
*/
export class Pinpointsmsvoicev2ProtectConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_protect_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfiguration to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2ProtectConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_protect_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration aws_pinpointsmsvoicev2_protect_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2ProtectConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2ProtectConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_protect_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._mmsCountryRules = config.mmsCountryRules;
    this._rcsCountryRules = config.rcsCountryRules;
    this._region = config.region;
    this._smsCountryRules = config.smsCountryRules;
    this._tags = config.tags;
    this._voiceCountryRules = config.voiceCountryRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_default - computed: true, optional: false, required: false
  public get accountDefault() {
    return this.getBooleanAttribute('account_default');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mms_country_rules - computed: false, optional: true, required: false
  private _mmsCountryRules?: { [key: string]: string }; 
  public get mmsCountryRules() {
    return this.getStringMapAttribute('mms_country_rules');
  }
  public set mmsCountryRules(value: { [key: string]: string }) {
    this._mmsCountryRules = value;
  }
  public resetMmsCountryRules() {
    this._mmsCountryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsCountryRulesInput() {
    return this._mmsCountryRules;
  }

  // rcs_country_rules - computed: false, optional: true, required: false
  private _rcsCountryRules?: { [key: string]: string }; 
  public get rcsCountryRules() {
    return this.getStringMapAttribute('rcs_country_rules');
  }
  public set rcsCountryRules(value: { [key: string]: string }) {
    this._rcsCountryRules = value;
  }
  public resetRcsCountryRules() {
    this._rcsCountryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcsCountryRulesInput() {
    return this._rcsCountryRules;
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

  // sms_country_rules - computed: false, optional: true, required: false
  private _smsCountryRules?: { [key: string]: string }; 
  public get smsCountryRules() {
    return this.getStringMapAttribute('sms_country_rules');
  }
  public set smsCountryRules(value: { [key: string]: string }) {
    this._smsCountryRules = value;
  }
  public resetSmsCountryRules() {
    this._smsCountryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCountryRulesInput() {
    return this._smsCountryRules;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // voice_country_rules - computed: false, optional: true, required: false
  private _voiceCountryRules?: { [key: string]: string }; 
  public get voiceCountryRules() {
    return this.getStringMapAttribute('voice_country_rules');
  }
  public set voiceCountryRules(value: { [key: string]: string }) {
    this._voiceCountryRules = value;
  }
  public resetVoiceCountryRules() {
    this._voiceCountryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceCountryRulesInput() {
    return this._voiceCountryRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
      mms_country_rules: cdktn.hashMapper(cdktn.stringToTerraform)(this._mmsCountryRules),
      rcs_country_rules: cdktn.hashMapper(cdktn.stringToTerraform)(this._rcsCountryRules),
      region: cdktn.stringToTerraform(this._region),
      sms_country_rules: cdktn.hashMapper(cdktn.stringToTerraform)(this._smsCountryRules),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      voice_country_rules: cdktn.hashMapper(cdktn.stringToTerraform)(this._voiceCountryRules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mms_country_rules: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._mmsCountryRules),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rcs_country_rules: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._rcsCountryRules),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_country_rules: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._smsCountryRules),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      voice_country_rules: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._voiceCountryRules),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
