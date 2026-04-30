/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { Wafv2WebAclRuleActionA, 
wafv2WebAclRuleActionAToTerraform, 
wafv2WebAclRuleActionAToHclTerraform, 
Wafv2WebAclRuleActionAList, 
Wafv2WebAclRuleCaptchaConfigA, 
wafv2WebAclRuleCaptchaConfigAToTerraform, 
wafv2WebAclRuleCaptchaConfigAToHclTerraform, 
Wafv2WebAclRuleCaptchaConfigAList, 
Wafv2WebAclRuleChallengeConfigA, 
wafv2WebAclRuleChallengeConfigAToTerraform, 
wafv2WebAclRuleChallengeConfigAToHclTerraform, 
Wafv2WebAclRuleChallengeConfigAList, 
Wafv2WebAclRuleOverrideActionA, 
wafv2WebAclRuleOverrideActionAToTerraform, 
wafv2WebAclRuleOverrideActionAToHclTerraform, 
Wafv2WebAclRuleOverrideActionAList, 
Wafv2WebAclRuleRuleLabelA, 
wafv2WebAclRuleRuleLabelAToTerraform, 
wafv2WebAclRuleRuleLabelAToHclTerraform, 
Wafv2WebAclRuleRuleLabelAList, 
Wafv2WebAclRuleStatement, 
wafv2WebAclRuleStatementToTerraform, 
wafv2WebAclRuleStatementToHclTerraform, 
Wafv2WebAclRuleStatementList, 
Wafv2WebAclRuleTimeouts, 
wafv2WebAclRuleTimeoutsToTerraform, 
wafv2WebAclRuleTimeoutsToHclTerraform, 
Wafv2WebAclRuleTimeoutsOutputReference, 
Wafv2WebAclRuleVisibilityConfigA, 
wafv2WebAclRuleVisibilityConfigAToTerraform, 
wafv2WebAclRuleVisibilityConfigAToHclTerraform, 
Wafv2WebAclRuleVisibilityConfigAList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface Wafv2WebAclRuleAConfig extends cdktn.TerraformMetaArguments {
  /**
  * Rule name, unique within the Web ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
  /**
  * Rule priority. Rules with lower priority are evaluated first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#priority Wafv2WebAclRuleA#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#region Wafv2WebAclRuleA#region}
  */
  readonly region?: string;
  /**
  * ARN of the Web ACL to add the rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#web_acl_arn Wafv2WebAclRuleA#web_acl_arn}
  */
  readonly webAclArn: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#action Wafv2WebAclRuleA#action}
  */
  readonly action?: Wafv2WebAclRuleActionA[] | cdktn.IResolvable;
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#captcha_config Wafv2WebAclRuleA#captcha_config}
  */
  readonly captchaConfig?: Wafv2WebAclRuleCaptchaConfigA[] | cdktn.IResolvable;
  /**
  * challenge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#challenge_config Wafv2WebAclRuleA#challenge_config}
  */
  readonly challengeConfig?: Wafv2WebAclRuleChallengeConfigA[] | cdktn.IResolvable;
  /**
  * override_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#override_action Wafv2WebAclRuleA#override_action}
  */
  readonly overrideAction?: Wafv2WebAclRuleOverrideActionA[] | cdktn.IResolvable;
  /**
  * rule_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#rule_label Wafv2WebAclRuleA#rule_label}
  */
  readonly ruleLabel?: Wafv2WebAclRuleRuleLabelA[] | cdktn.IResolvable;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#statement Wafv2WebAclRuleA#statement}
  */
  readonly statement?: Wafv2WebAclRuleStatement[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#timeouts Wafv2WebAclRuleA#timeouts}
  */
  readonly timeouts?: Wafv2WebAclRuleTimeouts;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#visibility_config Wafv2WebAclRuleA#visibility_config}
  */
  readonly visibilityConfig?: Wafv2WebAclRuleVisibilityConfigA[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule aws_wafv2_web_acl_rule}
*/
export class Wafv2WebAclRuleA extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Wafv2WebAclRuleA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2WebAclRuleA to import
  * @param importFromId The id of the existing Wafv2WebAclRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2WebAclRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/wafv2_web_acl_rule aws_wafv2_web_acl_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.43.0',
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
    this._name = config.name;
    this._priority = config.priority;
    this._region = config.region;
    this._webAclArn = config.webAclArn;
    this._action.internalValue = config.action;
    this._captchaConfig.internalValue = config.captchaConfig;
    this._challengeConfig.internalValue = config.challengeConfig;
    this._overrideAction.internalValue = config.overrideAction;
    this._ruleLabel.internalValue = config.ruleLabel;
    this._statement.internalValue = config.statement;
    this._timeouts.internalValue = config.timeouts;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn?: string; 
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn;
  }

  // action - computed: false, optional: true, required: false
  private _action = new Wafv2WebAclRuleActionAList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: Wafv2WebAclRuleActionA[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new Wafv2WebAclRuleCaptchaConfigAList(this, "captcha_config", false);
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: Wafv2WebAclRuleCaptchaConfigA[] | cdktn.IResolvable) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // challenge_config - computed: false, optional: true, required: false
  private _challengeConfig = new Wafv2WebAclRuleChallengeConfigAList(this, "challenge_config", false);
  public get challengeConfig() {
    return this._challengeConfig;
  }
  public putChallengeConfig(value: Wafv2WebAclRuleChallengeConfigA[] | cdktn.IResolvable) {
    this._challengeConfig.internalValue = value;
  }
  public resetChallengeConfig() {
    this._challengeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeConfigInput() {
    return this._challengeConfig.internalValue;
  }

  // override_action - computed: false, optional: true, required: false
  private _overrideAction = new Wafv2WebAclRuleOverrideActionAList(this, "override_action", false);
  public get overrideAction() {
    return this._overrideAction;
  }
  public putOverrideAction(value: Wafv2WebAclRuleOverrideActionA[] | cdktn.IResolvable) {
    this._overrideAction.internalValue = value;
  }
  public resetOverrideAction() {
    this._overrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction.internalValue;
  }

  // rule_label - computed: false, optional: true, required: false
  private _ruleLabel = new Wafv2WebAclRuleRuleLabelAList(this, "rule_label", false);
  public get ruleLabel() {
    return this._ruleLabel;
  }
  public putRuleLabel(value: Wafv2WebAclRuleRuleLabelA[] | cdktn.IResolvable) {
    this._ruleLabel.internalValue = value;
  }
  public resetRuleLabel() {
    this._ruleLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLabelInput() {
    return this._ruleLabel.internalValue;
  }

  // statement - computed: false, optional: true, required: false
  private _statement = new Wafv2WebAclRuleStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: Wafv2WebAclRuleStatement[] | cdktn.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Wafv2WebAclRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Wafv2WebAclRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // visibility_config - computed: false, optional: true, required: false
  private _visibilityConfig = new Wafv2WebAclRuleVisibilityConfigAList(this, "visibility_config", false);
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfigA[] | cdktn.IResolvable) {
    this._visibilityConfig.internalValue = value;
  }
  public resetVisibilityConfig() {
    this._visibilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      web_acl_arn: cdktn.stringToTerraform(this._webAclArn),
      action: cdktn.listMapper(wafv2WebAclRuleActionAToTerraform, true)(this._action.internalValue),
      captcha_config: cdktn.listMapper(wafv2WebAclRuleCaptchaConfigAToTerraform, true)(this._captchaConfig.internalValue),
      challenge_config: cdktn.listMapper(wafv2WebAclRuleChallengeConfigAToTerraform, true)(this._challengeConfig.internalValue),
      override_action: cdktn.listMapper(wafv2WebAclRuleOverrideActionAToTerraform, true)(this._overrideAction.internalValue),
      rule_label: cdktn.listMapper(wafv2WebAclRuleRuleLabelAToTerraform, true)(this._ruleLabel.internalValue),
      statement: cdktn.listMapper(wafv2WebAclRuleStatementToTerraform, true)(this._statement.internalValue),
      timeouts: wafv2WebAclRuleTimeoutsToTerraform(this._timeouts.internalValue),
      visibility_config: cdktn.listMapper(wafv2WebAclRuleVisibilityConfigAToTerraform, true)(this._visibilityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
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
      web_acl_arn: {
        value: cdktn.stringToHclTerraform(this._webAclArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleActionAToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleActionAList",
      },
      captcha_config: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleCaptchaConfigAToHclTerraform, true)(this._captchaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleCaptchaConfigAList",
      },
      challenge_config: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleChallengeConfigAToHclTerraform, true)(this._challengeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleChallengeConfigAList",
      },
      override_action: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleOverrideActionAToHclTerraform, true)(this._overrideAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleOverrideActionAList",
      },
      rule_label: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleRuleLabelAToHclTerraform, true)(this._ruleLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleRuleLabelAList",
      },
      statement: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleStatementToHclTerraform, true)(this._statement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleStatementList",
      },
      timeouts: {
        value: wafv2WebAclRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv2WebAclRuleTimeouts",
      },
      visibility_config: {
        value: cdktn.listMapperHcl(wafv2WebAclRuleVisibilityConfigAToHclTerraform, true)(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclRuleVisibilityConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
