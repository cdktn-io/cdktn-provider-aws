/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#description LambdaAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#function_name LambdaAlias#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}
  */
  readonly functionVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#id LambdaAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#name LambdaAlias#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#region LambdaAlias#region}
  */
  readonly region?: string;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#routing_config LambdaAlias#routing_config}
  */
  readonly routingConfig?: LambdaAliasRoutingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#timeouts LambdaAlias#timeouts}
  */
  readonly timeouts?: LambdaAliasTimeouts;
}
export interface LambdaAliasRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}
  */
  readonly additionalVersionWeights?: { [key: string]: number };
}

export function lambdaAliasRoutingConfigToTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_version_weights: cdktn.hashMapper(cdktn.numberToTerraform)(struct!.additionalVersionWeights),
  }
}


export function lambdaAliasRoutingConfigToHclTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_version_weights: {
      value: cdktn.hashMapperHcl(cdktn.numberToHclTerraform)(struct!.additionalVersionWeights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaAliasRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaAliasRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVersionWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionWeights = this._additionalVersionWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaAliasRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalVersionWeights = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalVersionWeights = value.additionalVersionWeights;
    }
  }

  // additional_version_weights - computed: false, optional: true, required: false
  private _additionalVersionWeights?: { [key: string]: number }; 
  public get additionalVersionWeights() {
    return this.getNumberMapAttribute('additional_version_weights');
  }
  public set additionalVersionWeights(value: { [key: string]: number }) {
    this._additionalVersionWeights = value;
  }
  public resetAdditionalVersionWeights() {
    this._additionalVersionWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionWeightsInput() {
    return this._additionalVersionWeights;
  }
}
export interface LambdaAliasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#update LambdaAlias#update}
  */
  readonly update?: string;
}

export function lambdaAliasTimeoutsToTerraform(struct?: LambdaAliasTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function lambdaAliasTimeoutsToHclTerraform(struct?: LambdaAliasTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaAliasTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaAliasTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaAliasTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias aws_lambda_alias}
*/
export class LambdaAlias extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaAlias to import
  * @param importFromId The id of the existing LambdaAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lambda_alias aws_lambda_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaAliasConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
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
    this._description = config.description;
    this._functionName = config.functionName;
    this._functionVersion = config.functionVersion;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._routingConfig.internalValue = config.routingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_version - computed: false, optional: false, required: true
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
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

  // invoke_arn - computed: true, optional: false, required: false
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

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

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new LambdaAliasRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: LambdaAliasRoutingConfig) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdaAliasTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdaAliasTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      function_name: cdktn.stringToTerraform(this._functionName),
      function_version: cdktn.stringToTerraform(this._functionVersion),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      routing_config: lambdaAliasRoutingConfigToTerraform(this._routingConfig.internalValue),
      timeouts: lambdaAliasTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_version: {
        value: cdktn.stringToHclTerraform(this._functionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      routing_config: {
        value: lambdaAliasRoutingConfigToHclTerraform(this._routingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaAliasRoutingConfigList",
      },
      timeouts: {
        value: lambdaAliasTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaAliasTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
