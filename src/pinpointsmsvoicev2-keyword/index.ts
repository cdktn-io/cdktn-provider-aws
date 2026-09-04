/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Pinpointsmsvoicev2KeywordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Keyword to configure. 1-30 characters, upper-case, and cannot start or end with a space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword Pinpointsmsvoicev2Keyword#keyword}
  */
  readonly keyword: string;
  /**
  * Action to perform when the keyword is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_action Pinpointsmsvoicev2Keyword#keyword_action}
  */
  readonly keywordAction?: string;
  /**
  * Message to send when the keyword is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#keyword_message Pinpointsmsvoicev2Keyword#keyword_message}
  */
  readonly keywordMessage: string;
  /**
  * ARN of the origination identity (phone number or pool) to attach the keyword to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#origination_identity_arn Pinpointsmsvoicev2Keyword#origination_identity_arn}
  */
  readonly originationIdentityArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#region Pinpointsmsvoicev2Keyword#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword aws_pinpointsmsvoicev2_keyword}
*/
export class Pinpointsmsvoicev2Keyword extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_keyword";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pinpointsmsvoicev2Keyword resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2Keyword to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2Keyword that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2Keyword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_keyword", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_keyword aws_pinpointsmsvoicev2_keyword} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2KeywordConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2KeywordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_keyword',
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
    this._keyword = config.keyword;
    this._keywordAction = config.keywordAction;
    this._keywordMessage = config.keywordMessage;
    this._originationIdentityArn = config.originationIdentityArn;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // keyword - computed: false, optional: false, required: true
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // keyword_action - computed: true, optional: true, required: false
  private _keywordAction?: string; 
  public get keywordAction() {
    return this.getStringAttribute('keyword_action');
  }
  public set keywordAction(value: string) {
    this._keywordAction = value;
  }
  public resetKeywordAction() {
    this._keywordAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordActionInput() {
    return this._keywordAction;
  }

  // keyword_message - computed: false, optional: false, required: true
  private _keywordMessage?: string; 
  public get keywordMessage() {
    return this.getStringAttribute('keyword_message');
  }
  public set keywordMessage(value: string) {
    this._keywordMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMessageInput() {
    return this._keywordMessage;
  }

  // origination_identity_arn - computed: false, optional: false, required: true
  private _originationIdentityArn?: string; 
  public get originationIdentityArn() {
    return this.getStringAttribute('origination_identity_arn');
  }
  public set originationIdentityArn(value: string) {
    this._originationIdentityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originationIdentityArnInput() {
    return this._originationIdentityArn;
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
      keyword: cdktn.stringToTerraform(this._keyword),
      keyword_action: cdktn.stringToTerraform(this._keywordAction),
      keyword_message: cdktn.stringToTerraform(this._keywordMessage),
      origination_identity_arn: cdktn.stringToTerraform(this._originationIdentityArn),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      keyword: {
        value: cdktn.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_action: {
        value: cdktn.stringToHclTerraform(this._keywordAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_message: {
        value: cdktn.stringToHclTerraform(this._keywordMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origination_identity_arn: {
        value: cdktn.stringToHclTerraform(this._originationIdentityArn),
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
