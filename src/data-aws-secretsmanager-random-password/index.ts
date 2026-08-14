/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsSecretsmanagerRandomPasswordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}
  */
  readonly excludeCharacters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}
  */
  readonly excludeLowercase?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}
  */
  readonly excludeNumbers?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}
  */
  readonly excludePunctuation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}
  */
  readonly excludeUppercase?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}
  */
  readonly includeSpace?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}
  */
  readonly passwordLength?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#region DataAwsSecretsmanagerRandomPassword#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}
  */
  readonly requireEachIncludedType?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password aws_secretsmanager_random_password}
*/
export class DataAwsSecretsmanagerRandomPassword extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_random_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsSecretsmanagerRandomPassword resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSecretsmanagerRandomPassword to import
  * @param importFromId The id of the existing DataAwsSecretsmanagerRandomPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSecretsmanagerRandomPassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_secretsmanager_random_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/secretsmanager_random_password aws_secretsmanager_random_password} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecretsmanagerRandomPasswordConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerRandomPasswordConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_random_password',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._excludeCharacters = config.excludeCharacters;
    this._excludeLowercase = config.excludeLowercase;
    this._excludeNumbers = config.excludeNumbers;
    this._excludePunctuation = config.excludePunctuation;
    this._excludeUppercase = config.excludeUppercase;
    this._id = config.id;
    this._includeSpace = config.includeSpace;
    this._passwordLength = config.passwordLength;
    this._region = config.region;
    this._requireEachIncludedType = config.requireEachIncludedType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_characters - computed: false, optional: true, required: false
  private _excludeCharacters?: string; 
  public get excludeCharacters() {
    return this.getStringAttribute('exclude_characters');
  }
  public set excludeCharacters(value: string) {
    this._excludeCharacters = value;
  }
  public resetExcludeCharacters() {
    this._excludeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCharactersInput() {
    return this._excludeCharacters;
  }

  // exclude_lowercase - computed: false, optional: true, required: false
  private _excludeLowercase?: boolean | cdktn.IResolvable; 
  public get excludeLowercase() {
    return this.getBooleanAttribute('exclude_lowercase');
  }
  public set excludeLowercase(value: boolean | cdktn.IResolvable) {
    this._excludeLowercase = value;
  }
  public resetExcludeLowercase() {
    this._excludeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLowercaseInput() {
    return this._excludeLowercase;
  }

  // exclude_numbers - computed: false, optional: true, required: false
  private _excludeNumbers?: boolean | cdktn.IResolvable; 
  public get excludeNumbers() {
    return this.getBooleanAttribute('exclude_numbers');
  }
  public set excludeNumbers(value: boolean | cdktn.IResolvable) {
    this._excludeNumbers = value;
  }
  public resetExcludeNumbers() {
    this._excludeNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNumbersInput() {
    return this._excludeNumbers;
  }

  // exclude_punctuation - computed: false, optional: true, required: false
  private _excludePunctuation?: boolean | cdktn.IResolvable; 
  public get excludePunctuation() {
    return this.getBooleanAttribute('exclude_punctuation');
  }
  public set excludePunctuation(value: boolean | cdktn.IResolvable) {
    this._excludePunctuation = value;
  }
  public resetExcludePunctuation() {
    this._excludePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePunctuationInput() {
    return this._excludePunctuation;
  }

  // exclude_uppercase - computed: false, optional: true, required: false
  private _excludeUppercase?: boolean | cdktn.IResolvable; 
  public get excludeUppercase() {
    return this.getBooleanAttribute('exclude_uppercase');
  }
  public set excludeUppercase(value: boolean | cdktn.IResolvable) {
    this._excludeUppercase = value;
  }
  public resetExcludeUppercase() {
    this._excludeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUppercaseInput() {
    return this._excludeUppercase;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_space - computed: false, optional: true, required: false
  private _includeSpace?: boolean | cdktn.IResolvable; 
  public get includeSpace() {
    return this.getBooleanAttribute('include_space');
  }
  public set includeSpace(value: boolean | cdktn.IResolvable) {
    this._includeSpace = value;
  }
  public resetIncludeSpace() {
    this._includeSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSpaceInput() {
    return this._includeSpace;
  }

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: number; 
  public get passwordLength() {
    return this.getNumberAttribute('password_length');
  }
  public set passwordLength(value: number) {
    this._passwordLength = value;
  }
  public resetPasswordLength() {
    this._passwordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLengthInput() {
    return this._passwordLength;
  }

  // random_password - computed: true, optional: false, required: false
  public get randomPassword() {
    return this.getStringAttribute('random_password');
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

  // require_each_included_type - computed: false, optional: true, required: false
  private _requireEachIncludedType?: boolean | cdktn.IResolvable; 
  public get requireEachIncludedType() {
    return this.getBooleanAttribute('require_each_included_type');
  }
  public set requireEachIncludedType(value: boolean | cdktn.IResolvable) {
    this._requireEachIncludedType = value;
  }
  public resetRequireEachIncludedType() {
    this._requireEachIncludedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEachIncludedTypeInput() {
    return this._requireEachIncludedType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_characters: cdktn.stringToTerraform(this._excludeCharacters),
      exclude_lowercase: cdktn.booleanToTerraform(this._excludeLowercase),
      exclude_numbers: cdktn.booleanToTerraform(this._excludeNumbers),
      exclude_punctuation: cdktn.booleanToTerraform(this._excludePunctuation),
      exclude_uppercase: cdktn.booleanToTerraform(this._excludeUppercase),
      id: cdktn.stringToTerraform(this._id),
      include_space: cdktn.booleanToTerraform(this._includeSpace),
      password_length: cdktn.numberToTerraform(this._passwordLength),
      region: cdktn.stringToTerraform(this._region),
      require_each_included_type: cdktn.booleanToTerraform(this._requireEachIncludedType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_characters: {
        value: cdktn.stringToHclTerraform(this._excludeCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_lowercase: {
        value: cdktn.booleanToHclTerraform(this._excludeLowercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_numbers: {
        value: cdktn.booleanToHclTerraform(this._excludeNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_punctuation: {
        value: cdktn.booleanToHclTerraform(this._excludePunctuation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_uppercase: {
        value: cdktn.booleanToHclTerraform(this._excludeUppercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_space: {
        value: cdktn.booleanToHclTerraform(this._includeSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_length: {
        value: cdktn.numberToHclTerraform(this._passwordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_each_included_type: {
        value: cdktn.booleanToHclTerraform(this._requireEachIncludedType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
