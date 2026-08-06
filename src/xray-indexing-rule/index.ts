/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface XrayIndexingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}
  */
  readonly region?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}
  */
  readonly rule?: XrayIndexingRuleRule[] | cdktn.IResolvable;
}
export interface XrayIndexingRuleRuleProbabilistic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}
  */
  readonly desiredSamplingPercentage: number;
}

export function xrayIndexingRuleRuleProbabilisticToTerraform(struct?: XrayIndexingRuleRuleProbabilistic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_sampling_percentage: cdktn.numberToTerraform(struct!.desiredSamplingPercentage),
  }
}


export function xrayIndexingRuleRuleProbabilisticToHclTerraform(struct?: XrayIndexingRuleRuleProbabilistic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_sampling_percentage: {
      value: cdktn.numberToHclTerraform(struct!.desiredSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class XrayIndexingRuleRuleProbabilisticOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): XrayIndexingRuleRuleProbabilistic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredSamplingPercentage = this._desiredSamplingPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XrayIndexingRuleRuleProbabilistic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredSamplingPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredSamplingPercentage = value.desiredSamplingPercentage;
    }
  }

  // actual_sampling_percentage - computed: true, optional: false, required: false
  public get actualSamplingPercentage() {
    return this.getNumberAttribute('actual_sampling_percentage');
  }

  // desired_sampling_percentage - computed: false, optional: false, required: true
  private _desiredSamplingPercentage?: number; 
  public get desiredSamplingPercentage() {
    return this.getNumberAttribute('desired_sampling_percentage');
  }
  public set desiredSamplingPercentage(value: number) {
    this._desiredSamplingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSamplingPercentageInput() {
    return this._desiredSamplingPercentage;
  }
}

export class XrayIndexingRuleRuleProbabilisticList extends cdktn.ComplexList {
  public internalValue? : XrayIndexingRuleRuleProbabilistic[] | cdktn.IResolvable

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
  public get(index: number): XrayIndexingRuleRuleProbabilisticOutputReference {
    return new XrayIndexingRuleRuleProbabilisticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface XrayIndexingRuleRule {
  /**
  * probabilistic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#probabilistic XrayIndexingRule#probabilistic}
  */
  readonly probabilistic?: XrayIndexingRuleRuleProbabilistic[] | cdktn.IResolvable;
}

export function xrayIndexingRuleRuleToTerraform(struct?: XrayIndexingRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    probabilistic: cdktn.listMapper(xrayIndexingRuleRuleProbabilisticToTerraform, true)(struct!.probabilistic),
  }
}


export function xrayIndexingRuleRuleToHclTerraform(struct?: XrayIndexingRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    probabilistic: {
      value: cdktn.listMapperHcl(xrayIndexingRuleRuleProbabilisticToHclTerraform, true)(struct!.probabilistic),
      isBlock: true,
      type: "list",
      storageClassType: "XrayIndexingRuleRuleProbabilisticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class XrayIndexingRuleRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): XrayIndexingRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probabilistic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilistic = this._probabilistic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XrayIndexingRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probabilistic.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probabilistic.internalValue = value.probabilistic;
    }
  }

  // probabilistic - computed: false, optional: true, required: false
  private _probabilistic = new XrayIndexingRuleRuleProbabilisticList(this, "probabilistic", false);
  public get probabilistic() {
    return this._probabilistic;
  }
  public putProbabilistic(value: XrayIndexingRuleRuleProbabilistic[] | cdktn.IResolvable) {
    this._probabilistic.internalValue = value;
  }
  public resetProbabilistic() {
    this._probabilistic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilisticInput() {
    return this._probabilistic.internalValue;
  }
}

export class XrayIndexingRuleRuleList extends cdktn.ComplexList {
  public internalValue? : XrayIndexingRuleRule[] | cdktn.IResolvable

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
  public get(index: number): XrayIndexingRuleRuleOutputReference {
    return new XrayIndexingRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule aws_xray_indexing_rule}
*/
export class XrayIndexingRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_xray_indexing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XrayIndexingRule to import
  * @param importFromId The id of the existing XrayIndexingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XrayIndexingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_xray_indexing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule aws_xray_indexing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XrayIndexingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: XrayIndexingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_xray_indexing_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.58.0',
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
    this._region = config.region;
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new XrayIndexingRuleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: XrayIndexingRuleRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      rule: cdktn.listMapper(xrayIndexingRuleRuleToTerraform, true)(this._rule.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktn.listMapperHcl(xrayIndexingRuleRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "XrayIndexingRuleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
