/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretsmanagerSecretRotationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#external_secret_rotation_role_arn SecretsmanagerSecretRotation#external_secret_rotation_role_arn}
  */
  readonly externalSecretRotationRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}
  */
  readonly rotateImmediately?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_enabled SecretsmanagerSecretRotation#rotation_enabled}
  */
  readonly rotationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
  */
  readonly rotationLambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}
  */
  readonly secretId: string;
  /**
  * external_secret_rotation_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#external_secret_rotation_metadata SecretsmanagerSecretRotation#external_secret_rotation_metadata}
  */
  readonly externalSecretRotationMetadata?: SecretsmanagerSecretRotationExternalSecretRotationMetadata[] | cdktn.IResolvable;
  /**
  * rotation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
  */
  readonly rotationRules?: SecretsmanagerSecretRotationRotationRules;
}
export interface SecretsmanagerSecretRotationExternalSecretRotationMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#key SecretsmanagerSecretRotation#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#value SecretsmanagerSecretRotation#value}
  */
  readonly value: string;
}

export function secretsmanagerSecretRotationExternalSecretRotationMetadataToTerraform(struct?: SecretsmanagerSecretRotationExternalSecretRotationMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function secretsmanagerSecretRotationExternalSecretRotationMetadataToHclTerraform(struct?: SecretsmanagerSecretRotationExternalSecretRotationMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretsmanagerSecretRotationExternalSecretRotationMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretsmanagerSecretRotationExternalSecretRotationMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecretsmanagerSecretRotationExternalSecretRotationMetadataList extends cdktn.ComplexList {
  public internalValue? : SecretsmanagerSecretRotationExternalSecretRotationMetadata[] | cdktn.IResolvable

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
  public get(index: number): SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference {
    return new SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretsmanagerSecretRotationRotationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
  */
  readonly automaticallyAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}
  */
  readonly scheduleExpression?: string;
}

export function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatically_after_days: cdktn.numberToTerraform(struct!.automaticallyAfterDays),
    duration: cdktn.stringToTerraform(struct!.duration),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function secretsmanagerSecretRotationRotationRulesToHclTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatically_after_days: {
      value: cdktn.numberToHclTerraform(struct!.automaticallyAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretsmanagerSecretRotationRotationRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretsmanagerSecretRotationRotationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticallyAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticallyAfterDays = this._automaticallyAfterDays;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretsmanagerSecretRotationRotationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticallyAfterDays = undefined;
      this._duration = undefined;
      this._scheduleExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticallyAfterDays = value.automaticallyAfterDays;
      this._duration = value.duration;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // automatically_after_days - computed: false, optional: true, required: false
  private _automaticallyAfterDays?: number; 
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
  public set automaticallyAfterDays(value: number) {
    this._automaticallyAfterDays = value;
  }
  public resetAutomaticallyAfterDays() {
    this._automaticallyAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyAfterDaysInput() {
    return this._automaticallyAfterDays;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}
*/
export class SecretsmanagerSecretRotation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretsmanagerSecretRotation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsmanagerSecretRotation to import
  * @param importFromId The id of the existing SecretsmanagerSecretRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_secretsmanager_secret_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerSecretRotationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_rotation',
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
    this._externalSecretRotationRoleArn = config.externalSecretRotationRoleArn;
    this._id = config.id;
    this._region = config.region;
    this._rotateImmediately = config.rotateImmediately;
    this._rotationEnabled = config.rotationEnabled;
    this._rotationLambdaArn = config.rotationLambdaArn;
    this._secretId = config.secretId;
    this._externalSecretRotationMetadata.internalValue = config.externalSecretRotationMetadata;
    this._rotationRules.internalValue = config.rotationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_secret_rotation_role_arn - computed: false, optional: true, required: false
  private _externalSecretRotationRoleArn?: string; 
  public get externalSecretRotationRoleArn() {
    return this.getStringAttribute('external_secret_rotation_role_arn');
  }
  public set externalSecretRotationRoleArn(value: string) {
    this._externalSecretRotationRoleArn = value;
  }
  public resetExternalSecretRotationRoleArn() {
    this._externalSecretRotationRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretRotationRoleArnInput() {
    return this._externalSecretRotationRoleArn;
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

  // rotate_immediately - computed: false, optional: true, required: false
  private _rotateImmediately?: boolean | cdktn.IResolvable; 
  public get rotateImmediately() {
    return this.getBooleanAttribute('rotate_immediately');
  }
  public set rotateImmediately(value: boolean | cdktn.IResolvable) {
    this._rotateImmediately = value;
  }
  public resetRotateImmediately() {
    this._rotateImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateImmediatelyInput() {
    return this._rotateImmediately;
  }

  // rotation_enabled - computed: true, optional: true, required: false
  private _rotationEnabled?: boolean | cdktn.IResolvable; 
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }
  public set rotationEnabled(value: boolean | cdktn.IResolvable) {
    this._rotationEnabled = value;
  }
  public resetRotationEnabled() {
    this._rotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationEnabledInput() {
    return this._rotationEnabled;
  }

  // rotation_lambda_arn - computed: false, optional: true, required: false
  private _rotationLambdaArn?: string; 
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }
  public set rotationLambdaArn(value: string) {
    this._rotationLambdaArn = value;
  }
  public resetRotationLambdaArn() {
    this._rotationLambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationLambdaArnInput() {
    return this._rotationLambdaArn;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // external_secret_rotation_metadata - computed: false, optional: true, required: false
  private _externalSecretRotationMetadata = new SecretsmanagerSecretRotationExternalSecretRotationMetadataList(this, "external_secret_rotation_metadata", false);
  public get externalSecretRotationMetadata() {
    return this._externalSecretRotationMetadata;
  }
  public putExternalSecretRotationMetadata(value: SecretsmanagerSecretRotationExternalSecretRotationMetadata[] | cdktn.IResolvable) {
    this._externalSecretRotationMetadata.internalValue = value;
  }
  public resetExternalSecretRotationMetadata() {
    this._externalSecretRotationMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretRotationMetadataInput() {
    return this._externalSecretRotationMetadata.internalValue;
  }

  // rotation_rules - computed: false, optional: true, required: false
  private _rotationRules = new SecretsmanagerSecretRotationRotationRulesOutputReference(this, "rotation_rules");
  public get rotationRules() {
    return this._rotationRules;
  }
  public putRotationRules(value: SecretsmanagerSecretRotationRotationRules) {
    this._rotationRules.internalValue = value;
  }
  public resetRotationRules() {
    this._rotationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRulesInput() {
    return this._rotationRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_secret_rotation_role_arn: cdktn.stringToTerraform(this._externalSecretRotationRoleArn),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      rotate_immediately: cdktn.booleanToTerraform(this._rotateImmediately),
      rotation_enabled: cdktn.booleanToTerraform(this._rotationEnabled),
      rotation_lambda_arn: cdktn.stringToTerraform(this._rotationLambdaArn),
      secret_id: cdktn.stringToTerraform(this._secretId),
      external_secret_rotation_metadata: cdktn.listMapper(secretsmanagerSecretRotationExternalSecretRotationMetadataToTerraform, true)(this._externalSecretRotationMetadata.internalValue),
      rotation_rules: secretsmanagerSecretRotationRotationRulesToTerraform(this._rotationRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_secret_rotation_role_arn: {
        value: cdktn.stringToHclTerraform(this._externalSecretRotationRoleArn),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_immediately: {
        value: cdktn.booleanToHclTerraform(this._rotateImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotation_enabled: {
        value: cdktn.booleanToHclTerraform(this._rotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotation_lambda_arn: {
        value: cdktn.stringToHclTerraform(this._rotationLambdaArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktn.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_secret_rotation_metadata: {
        value: cdktn.listMapperHcl(secretsmanagerSecretRotationExternalSecretRotationMetadataToHclTerraform, true)(this._externalSecretRotationMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretsmanagerSecretRotationExternalSecretRotationMetadataList",
      },
      rotation_rules: {
        value: secretsmanagerSecretRotationRotationRulesToHclTerraform(this._rotationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretsmanagerSecretRotationRotationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
